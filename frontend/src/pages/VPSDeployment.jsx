import NavigationButtons from '../components/NavigationButtons'
import { ActivityBox, PracticeBox, CodeBlock, WarningBox } from '../components/ContentBoxes'

const VPSDeployment = () => {
  return (
    <div className="vps-deployment">
      <h1>11. Despliegue en VPS con Subdominios (Hostinger)</h1>
      
      <div className="intro-box">
        <h2>🚀 Introducción al Despliegue en VPS</h2>
        <p>
          En esta sección aprenderás a desplegar tu proyecto completo (Frontend React/HTML + Backend Node.js + Base de datos MariaDB) 
          en un VPS de Hostinger usando subdominios personalizados para cada estudiante.
        </p>
      </div>

      <h2>11.1. ¿Qué es un VPS y por qué usarlo?</h2>
      
      <div className="chapter-card">
        <h3>VPS (Virtual Private Server)</h3>
        <ul>
          <li><strong>Definición:</strong> Servidor virtual privado con recursos dedicados</li>
          <li><strong>Ventajas:</strong> Control total, mejor rendimiento, escalabilidad</li>
          <li><strong>Diferencia con hosting compartido:</strong> Recursos no compartidos, acceso root</li>
        </ul>
      </div>

      <h2>11.2. Configuración inicial del VPS</h2>

      <h3>Acceso por SSH</h3>
      <CodeBlock code={`# Conectar al VPS via SSH
ssh root@tu-ip-del-vps

# O si tienes usuario personalizado
ssh usuario@tu-ip-del-vps -p 22

# Ejemplo práctico
ssh root@192.168.1.100`} />

      <WarningBox>
        <strong>Importante:</strong> Guarda siempre las credenciales de acceso SSH en un lugar seguro. 
        Sin ellas no podrás acceder a tu servidor.
      </WarningBox>

      <h3>Actualización del sistema</h3>
      <CodeBlock code={`# Actualizar paquetes del sistema (Ubuntu/Debian)
sudo apt update && sudo apt upgrade -y

# Para CentOS/RHEL
sudo yum update -y

# Instalar herramientas básicas
sudo apt install -y curl wget git nano htop`} />

      <h2>11.3. Instalación del stack completo</h2>

      <h3>1. Instalación de Node.js</h3>
      <CodeBlock code={`# Instalar Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verificar instalación
node --version
npm --version

# Instalar PM2 para gestión de procesos
sudo npm install -g pm2`} />

      <h3>2. Instalación de MariaDB</h3>
      <CodeBlock code={`# Instalar MariaDB
sudo apt install -y mariadb-server mariadb-client

# Configurar MariaDB
sudo mysql_secure_installation

# Acceder a MariaDB
sudo mysql -u root -p`} />

      <PracticeBox title="Configuración de base de datos">
        <h4>Crear base de datos para cada estudiante:</h4>
        <CodeBlock code={`-- Conectar como root
CREATE DATABASE alumno1_proyecto;
CREATE DATABASE alumno2_proyecto;

-- Crear usuario específico
CREATE USER 'alumno1'@'localhost' IDENTIFIED BY 'password_segura';
GRANT ALL PRIVILEGES ON alumno1_proyecto.* TO 'alumno1'@'localhost';
FLUSH PRIVILEGES;`} />
      </PracticeBox>

      <h3>3. Instalación de Nginx (Servidor web)</h3>
      <CodeBlock code={`# Instalar Nginx
sudo apt install -y nginx

# Iniciar y habilitar Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Verificar estado
sudo systemctl status nginx`} />

      <h2>11.4. Configuración de subdominios</h2>

      <h3>DNS y subdominios en Hostinger</h3>
      <div className="chapter-card">
        <h4>Pasos en el panel de Hostinger:</h4>
        <ol>
          <li>Acceder al panel de control de Hostinger</li>
          <li>Ir a "Gestión de DNS" de tu dominio</li>
          <li>Añadir registros A para cada subdominio:</li>
        </ol>
        
        <table style={{marginTop: '1rem'}}>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Nombre</th>
              <th>Valor</th>
              <th>TTL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>alumno1</td>
              <td>IP_DEL_VPS</td>
              <td>3600</td>
            </tr>
            <tr>
              <td>A</td>
              <td>alumno2</td>
              <td>IP_DEL_VPS</td>
              <td>3600</td>
            </tr>
            <tr>
              <td>A</td>
              <td>*</td>
              <td>IP_DEL_VPS</td>
              <td>3600</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Configuración de Virtual Hosts en Nginx</h3>
      <CodeBlock code={`# Crear archivo de configuración para cada alumno
sudo nano /etc/nginx/sites-available/alumno1.tudominio.com

# Contenido del archivo:
server {
    listen 80;
    server_name alumno1.tudominio.com;
    
    # Servir archivos estáticos del frontend
    location / {
        root /var/www/alumno1/frontend/dist;
        try_files $uri $uri/ /index.html;
    }
    
    # Proxy para el backend Node.js
    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}

# Habilitar el sitio
sudo ln -s /etc/nginx/sites-available/alumno1.tudominio.com /etc/nginx/sites-enabled/

# Verificar configuración
sudo nginx -t

# Recargar Nginx
sudo systemctl reload nginx`} />

      <h2>11.5. Proceso de despliegue paso a paso</h2>

      <h3>Paso 1: Preparación del proyecto localmente</h3>
      <CodeBlock code={`# En tu máquina local, preparar el proyecto
# 1. Build del frontend React
cd frontend
npm run build

# 2. Comprimir todo el proyecto
cd ..
tar -czf mi-proyecto.tar.gz frontend/dist backend/ package.json

# 3. Subir al servidor
scp mi-proyecto.tar.gz usuario@IP_VPS:/home/usuario/`} />

      <h3>Paso 2: Despliegue en el servidor</h3>
      <CodeBlock code={`# En el servidor VPS
# 1. Crear directorio del proyecto
sudo mkdir -p /var/www/alumno1
sudo chown -R $USER:$USER /var/www/alumno1

# 2. Extraer archivos
cd /home/usuario
tar -xzf mi-proyecto.tar.gz -C /var/www/alumno1/

# 3. Instalar dependencias del backend
cd /var/www/alumno1/backend
npm install --production

# 4. Configurar variables de entorno
nano .env`} />

      <h3>Configuración del archivo .env</h3>
      <CodeBlock code={`# Archivo: /var/www/alumno1/backend/.env
NODE_ENV=production
PORT=3001
DB_HOST=localhost
DB_USER=alumno1
DB_PASSWORD=password_segura
DB_NAME=alumno1_proyecto
DB_PORT=3306

# Para aplicaciones React
REACT_APP_API_URL=https://alumno1.tudominio.com/api`} />

      <h3>Paso 3: Configurar PM2 para el backend</h3>
      <CodeBlock code={`# Crear archivo de configuración PM2
nano /var/www/alumno1/backend/ecosystem.config.js

# Contenido:
module.exports = {
  apps: [{
    name: 'alumno1-backend',
    script: './server.js',
    cwd: '/var/www/alumno1/backend',
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

# Iniciar con PM2
cd /var/www/alumno1/backend
pm2 start ecosystem.config.js
pm2 save
pm2 startup`} />

      <h2>11.6. Configuración SSL con Let's Encrypt</h2>

      <CodeBlock code={`# Instalar Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtener certificado SSL
sudo certbot --nginx -d alumno1.tudominio.com

# El certificado se renovará automáticamente
# Verificar renovación automática
sudo crontab -l`} />

      <h2>11.7. Guía para estudiantes</h2>

      <ActivityBox title="Checklist para estudiantes">
        <h4>Antes de desplegar:</h4>
        <ul>
          <li>□ Proyecto funcionando correctamente en local</li>
          <li>□ Base de datos exportada con datos de prueba</li>
          <li>□ Variables de entorno documentadas</li>
          <li>□ Frontend compilado sin errores</li>
          <li>□ Backend probado con las rutas principales</li>
        </ul>

        <h4>Archivos necesarios:</h4>
        <ul>
          <li>□ <code>package.json</code> con scripts de producción</li>
          <li>□ <code>.env.example</code> con variables de ejemplo</li>
          <li>□ <code>database.sql</code> con estructura de BD</li>
          <li>□ <code>README.md</code> con instrucciones de instalación</li>
        </ul>
      </ActivityBox>

      <h3>Estructura de carpetas recomendada</h3>
      <CodeBlock code={`/var/www/alumno1/
├── frontend/
│   └── dist/              # Archivos compilados de React
├── backend/
│   ├── server.js          # Servidor principal
│   ├── package.json       # Dependencias
│   ├── .env               # Variables de entorno
│   └── ecosystem.config.js # Configuración PM2
└── database/
    └── schema.sql         # Estructura de base de datos`} />

      <h2>11.8. Comandos útiles para administración</h2>

      <div className="chapter-card">
        <h3>Gestión de PM2:</h3>
        <CodeBlock code={`# Ver procesos activos
pm2 list

# Logs de la aplicación
pm2 logs alumno1-backend

# Reiniciar aplicación
pm2 restart alumno1-backend

# Parar aplicación
pm2 stop alumno1-backend

# Eliminar aplicación
pm2 delete alumno1-backend`} />

        <h3>Gestión de Nginx:</h3>
        <CodeBlock code={`# Verificar configuración
sudo nginx -t

# Recargar configuración
sudo systemctl reload nginx

# Ver logs de error
sudo tail -f /var/log/nginx/error.log

# Ver logs de acceso
sudo tail -f /var/log/nginx/access.log`} />
      </div>

      <h2>11.9. Solución de problemas comunes</h2>

      <WarningBox>
        <h4>Problemas frecuentes y soluciones:</h4>
        <ul>
          <li><strong>Error 502 Bad Gateway:</strong> El backend no está ejecutándose. Verificar con <code>pm2 list</code></li>
          <li><strong>Error de conexión a BD:</strong> Verificar credenciales en archivo .env</li>
          <li><strong>Archivos estáticos no cargan:</strong> Verificar permisos de carpeta dist/</li>
          <li><strong>CORS errors:</strong> Configurar correctamente las URLs en el backend</li>
        </ul>
      </WarningBox>

      <PracticeBox title="Ejercicio práctico">
        <h4>Despliegue de tu primer proyecto:</h4>
        <ol>
          <li>Crear un proyecto simple con frontend y backend</li>
          <li>Configurar la base de datos localmente</li>
          <li>Probar todo en localhost</li>
          <li>Seguir los pasos de despliegue en tu subdominio asignado</li>
          <li>Verificar que todo funciona correctamente</li>
          <li>Configurar SSL y probar HTTPS</li>
        </ol>
      </PracticeBox>

      <h2>11.10. Monitoreo y mantenimiento</h2>

      <div className="chapter-card">
        <h3>Herramientas de monitoreo:</h3>
        <ul>
          <li><strong>PM2 Monitor:</strong> <code>pm2 monit</code></li>
          <li><strong>Logs en tiempo real:</strong> <code>pm2 logs --lines 100</code></li>
          <li><strong>Estado del sistema:</strong> <code>htop</code></li>
          <li><strong>Espacio en disco:</strong> <code>df -h</code></li>
          <li><strong>Uso de memoria:</strong> <code>free -h</code></li>
        </ul>
      </div>

      <ActivityBox title="Tarea final">
        <p>
          <strong>Objetivo:</strong> Desplegar exitosamente tu proyecto final en el subdominio asignado y 
          presentar la URL funcionando con HTTPS.
        </p>
        <p>
          <strong>Entrega:</strong> URL del proyecto desplegado + documento con el proceso seguido + 
          capturas de pantalla del funcionamiento.
        </p>
      </ActivityBox>

      <NavigationButtons 
        prevPath="/proyecto-final" 
        nextPath="/anexos" 
        prevTitle="Proyecto Final"
        nextTitle="Anexos"
      />
    </div>
  )
}

export default VPSDeployment
