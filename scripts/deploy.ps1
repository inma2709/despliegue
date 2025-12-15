# Script de despliegue automático para estudiantes (Windows PowerShell)
# Uso: .\deploy.ps1 -Alumno "nombre-alumno"

param(
    [Parameter(Mandatory=$true)]
    [string]$Alumno
)

$VPS_IP = "TU_IP_VPS"
$VPS_USER = "root"
$DOMAIN = "tudominio.com"

Write-Host "🚀 Iniciando despliegue para $Alumno..." -ForegroundColor Green

# 1. Verificar que el frontend está compilado
if (!(Test-Path "frontend\dist")) {
    Write-Host "📦 Compilando frontend..." -ForegroundColor Yellow
    Set-Location frontend
    npm run build
    Set-Location ..
}

# 2. Crear archivo comprimido del proyecto
Write-Host "📁 Comprimiendo proyecto..." -ForegroundColor Yellow
$archiveName = "$Alumno-proyecto.tar.gz"
& tar -czf $archiveName frontend/dist backend/ package.json

# 3. Subir archivos al VPS usando SCP
Write-Host "📤 Subiendo archivos al VPS..." -ForegroundColor Yellow
& scp $archiveName "${VPS_USER}@${VPS_IP}:/home/"

# 4. Crear script de configuración remota
$remoteScript = @"
# Crear directorio del proyecto
sudo mkdir -p /var/www/$Alumno
sudo chown -R `$USER:`$USER /var/www/$Alumno

# Extraer archivos
cd /home
tar -xzf $Alumno-proyecto.tar.gz -C /var/www/$Alumno/

# Instalar dependencias del backend
cd /var/www/$Alumno/backend
npm install --production

# Crear archivo .env
cat > .env << 'ENVEOF'
NODE_ENV=production
PORT=3001
DB_HOST=localhost
DB_USER=$Alumno
DB_PASSWORD=password_segura
DB_NAME=${Alumno}_proyecto
DB_PORT=3306
ENVEOF

# Crear configuración PM2
cat > ecosystem.config.js << 'PMEOF'
module.exports = {
  apps: [{
    name: '$Alumno-backend',
    script: './server.js',
    cwd: '/var/www/$Alumno/backend',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    },
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
};
PMEOF

# Iniciar con PM2
pm2 start ecosystem.config.js
pm2 save

# Crear configuración Nginx
sudo tee /etc/nginx/sites-available/$Alumno.$DOMAIN > /dev/null << 'NGINXEOF'
server {
    listen 80;
    server_name $Alumno.$DOMAIN;
    
    location / {
        root /var/www/$Alumno/frontend/dist;
        try_files `$uri `$uri/ /index.html;
    }
    
    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade `$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host `$host;
        proxy_set_header X-Real-IP `$remote_addr;
        proxy_set_header X-Forwarded-For `$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto `$scheme;
        proxy_cache_bypass `$http_upgrade;
    }
}
NGINXEOF

# Habilitar sitio
sudo ln -sf /etc/nginx/sites-available/$Alumno.$DOMAIN /etc/nginx/sites-enabled/

# Verificar y recargar Nginx
sudo nginx -t && sudo systemctl reload nginx

# Limpiar archivo temporal
rm /home/$Alumno-proyecto.tar.gz

echo "✅ Despliegue completado para $Alumno"
echo "🌐 Tu sitio estará disponible en: http://$Alumno.$DOMAIN"
"@

# 5. Ejecutar comandos de despliegue en el VPS
Write-Host "⚙️ Configurando en el servidor..." -ForegroundColor Yellow
$remoteScript | & ssh "${VPS_USER}@${VPS_IP}"

# 6. Configurar SSL
Write-Host "🔒 Configurando SSL..." -ForegroundColor Yellow
& ssh "${VPS_USER}@${VPS_IP}" "sudo certbot --nginx -d $Alumno.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN"

# Limpiar archivos locales
Remove-Item $archiveName

Write-Host "🎉 ¡Despliegue completado exitosamente!" -ForegroundColor Green
Write-Host "🌐 URL: https://$Alumno.$DOMAIN" -ForegroundColor Cyan
Write-Host "📊 Monitoreo: ssh ${VPS_USER}@${VPS_IP} 'pm2 list'" -ForegroundColor Cyan
