#!/bin/bash

# Script de despliegue automático para estudiantes
# Uso: ./deploy.sh nombre-alumno

# Verificar que se proporcionó el nombre del alumno
if [ -z "$1" ]; then
    echo "❌ Error: Debes proporcionar el nombre del alumno"
    echo "Uso: ./deploy.sh nombre-alumno"
    exit 1
fi

ALUMNO=$1
VPS_IP="TU_IP_VPS"
VPS_USER="root"
DOMAIN="tudominio.com"

echo "🚀 Iniciando despliegue para $ALUMNO..."

# 1. Verificar que el frontend está compilado
if [ ! -d "frontend/dist" ]; then
    echo "📦 Compilando frontend..."
    cd frontend
    npm run build
    cd ..
fi

# 2. Crear archivo comprimido del proyecto
echo "📁 Comprimiendo proyecto..."
tar -czf ${ALUMNO}-proyecto.tar.gz frontend/dist backend/ package.json

# 3. Subir archivos al VPS
echo "📤 Subiendo archivos al VPS..."
scp ${ALUMNO}-proyecto.tar.gz ${VPS_USER}@${VPS_IP}:/home/

# 4. Ejecutar comandos de despliegue en el VPS
echo "⚙️ Configurando en el servidor..."
ssh ${VPS_USER}@${VPS_IP} << EOF
    # Crear directorio del proyecto
    sudo mkdir -p /var/www/${ALUMNO}
    sudo chown -R $USER:$USER /var/www/${ALUMNO}
    
    # Extraer archivos
    cd /home
    tar -xzf ${ALUMNO}-proyecto.tar.gz -C /var/www/${ALUMNO}/
    
    # Instalar dependencias del backend
    cd /var/www/${ALUMNO}/backend
    npm install --production
    
    # Crear archivo .env
    cat > .env << 'ENVEOF'
NODE_ENV=production
PORT=3001
DB_HOST=localhost
DB_USER=${ALUMNO}
DB_PASSWORD=password_segura
DB_NAME=${ALUMNO}_proyecto
DB_PORT=3306
ENVEOF
    
    # Crear configuración PM2
    cat > ecosystem.config.js << 'PMEOF'
module.exports = {
  apps: [{
    name: '${ALUMNO}-backend',
    script: './server.js',
    cwd: '/var/www/${ALUMNO}/backend',
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
    sudo tee /etc/nginx/sites-available/${ALUMNO}.${DOMAIN} > /dev/null << 'NGINXEOF'
server {
    listen 80;
    server_name ${ALUMNO}.${DOMAIN};
    
    location / {
        root /var/www/${ALUMNO}/frontend/dist;
        try_files \$uri \$uri/ /index.html;
    }
    
    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
NGINXEOF
    
    # Habilitar sitio
    sudo ln -sf /etc/nginx/sites-available/${ALUMNO}.${DOMAIN} /etc/nginx/sites-enabled/
    
    # Verificar y recargar Nginx
    sudo nginx -t && sudo systemctl reload nginx
    
    # Limpiar archivo temporal
    rm /home/${ALUMNO}-proyecto.tar.gz
    
    echo "✅ Despliegue completado para ${ALUMNO}"
    echo "🌐 Tu sitio estará disponible en: http://${ALUMNO}.${DOMAIN}"
EOF

# 5. Configurar SSL
echo "🔒 Configurando SSL..."
ssh ${VPS_USER}@${VPS_IP} "sudo certbot --nginx -d ${ALUMNO}.${DOMAIN} --non-interactive --agree-tos --email admin@${DOMAIN}"

# Limpiar archivos locales
rm ${ALUMNO}-proyecto.tar.gz

echo "🎉 ¡Despliegue completado exitosamente!"
echo "🌐 URL: https://${ALUMNO}.${DOMAIN}"
echo "📊 Monitoreo: ssh ${VPS_USER}@${VPS_IP} 'pm2 list'"
