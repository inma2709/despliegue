import NavigationButtons from '../components/NavigationButtons'
import { ActivityBox, PracticeBox, CodeBlock } from '../components/ContentBoxes'

const Documentation = () => {
  return (
    <div className="documentation">
      <h1>6. Documentación Técnica de la Aplicación</h1>
      
      <h2>6.1. Qué es documentar: objetivo y utilidad</h2>
      <p>
        La documentación técnica es el conjunto de textos, diagramas y recursos que explican 
        cómo funciona, se instala, configura y mantiene una aplicación web.
      </p>

      <div className="chapter-card">
        <h3>Objetivos de la documentación:</h3>
        <ul>
          <li><strong>Facilitar mantenimiento:</strong> Otros desarrolladores pueden entender el código</li>
          <li><strong>Reducir tiempo de desarrollo:</strong> Evita rehacer trabajo ya hecho</li>
          <li><strong>Mejorar calidad:</strong> Obliga a reflexionar sobre las decisiones técnicas</li>
          <li><strong>Cumplir normativas:</strong> Requisito en muchos proyectos profesionales</li>
          <li><strong>Facilitar onboarding:</strong> Nuevos miembros del equipo se incorporan más rápido</li>
        </ul>
      </div>

      <h2>6.2. Diferencias entre documentación técnica y de usuario</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', margin: '2rem 0' }}>
        <div className="chapter-card">
          <h3>Documentación Técnica</h3>
          <ul>
            <li><strong>Audiencia:</strong> Desarrolladores, administradores</li>
            <li><strong>Contenido:</strong> Arquitectura, configuración, APIs</li>
            <li><strong>Lenguaje:</strong> Técnico especializado</li>
            <li><strong>Formato:</strong> README, wikis, comentarios en código</li>
          </ul>
        </div>
        
        <div className="chapter-card">
          <h3>Documentación de Usuario</h3>
          <ul>
            <li><strong>Audiencia:</strong> Usuarios finales</li>
            <li><strong>Contenido:</strong> Cómo usar la aplicación</li>
            <li><strong>Lenguaje:</strong> Claro y sencillo</li>
            <li><strong>Formato:</strong> Manuales, tutoriales, FAQ</li>
          </ul>
        </div>
      </div>

      <h2>6.3. Manual de instalación</h2>
      
      <PracticeBox title="Plantilla de Manual de Instalación">
        <CodeBlock code={`# MANUAL DE INSTALACIÓN - Mi Aplicación Web

## 1. Requisitos del sistema
### Requisitos mínimos:
- Servidor web: Apache 2.4+
- PHP: 7.4+ (recomendado 8.0+)
- Base de datos: MySQL 5.7+ o MariaDB 10.2+
- Espacio en disco: 100MB
- Memoria RAM: 512MB

### Software adicional:
- Composer (para dependencias PHP)
- Git (para control de versiones)

## 2. Preparación del entorno
### 2.1. Instalar XAMPP
1. Descargar desde https://www.apachefriends.org/
2. Ejecutar instalador como administrador
3. Seleccionar: Apache, MySQL, PHP, phpMyAdmin
4. Instalar en C:\\xampp

### 2.2. Verificar servicios
1. Abrir XAMPP Control Panel
2. Start Apache (puerto 80)
3. Start MySQL (puerto 3306)
4. Verificar en http://localhost

## 3. Instalación de la aplicación
### 3.1. Obtener código fuente
git clone https://github.com/usuario/mi-aplicacion.git
cd mi-aplicacion

### 3.2. Configurar base de datos
1. Acceder a phpMyAdmin: http://localhost/phpmyadmin
2. Crear base de datos: mi_aplicacion
3. Importar schema: database/schema.sql
4. Crear usuario: app_user / password123

### 3.3. Configurar aplicación
1. Copiar .env.example a .env
2. Editar variables de entorno
3. Configurar permisos de carpetas

## 4. Verificación de instalación
1. Acceder a http://localhost/mi-aplicacion
2. Ejecutar test-connection.php
3. Verificar login de prueba

## 5. Solución de problemas
### Error 500
- Revisar logs: C:\\xampp\\apache\\logs\\error.log
- Verificar permisos de archivos

### Error conexión BD
- Verificar credenciales en .env
- Comprobar que MySQL está iniciado`} />
      </PracticeBox>

      <h2>6.4. Manual de configuración</h2>
      
      <CodeBlock code={`# MANUAL DE CONFIGURACIÓN

## Variables de entorno (.env)
APP_NAME="Mi Aplicación"
APP_ENV=production
APP_DEBUG=false
APP_URL=http://midominio.com

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=mi_aplicacion
DB_USERNAME=app_user
DB_PASSWORD=contraseña_segura

## Configuración de Apache (httpd.conf)
# Virtual Host
<VirtualHost *:80>
    ServerName midominio.com
    DocumentRoot "C:/xampp/htdocs/mi-aplicacion/public"
    
    <Directory "C:/xampp/htdocs/mi-aplicacion/public">
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>

## Configuración de PHP (php.ini)
memory_limit = 256M
upload_max_filesize = 10M
post_max_size = 10M
max_execution_time = 60

## Configuración de seguridad
# Permisos de archivos
- Archivos: 644
- Carpetas: 755
- Ejecutables: 755

# Archivos sensibles
.env: 600 (solo lectura propietario)
config/: 700 (acceso restringido)`} />

      <h2>6.5. Manual de usuario</h2>
      
      <PracticeBox title="Estructura de Manual de Usuario">
        <h4>Contenido típico:</h4>
        <ol>
          <li><strong>Introducción</strong>
            <ul>
              <li>¿Qué es la aplicación?</li>
              <li>¿Para qué sirve?</li>
              <li>Requisitos del navegador</li>
            </ul>
          </li>
          <li><strong>Primeros pasos</strong>
            <ul>
              <li>Acceso a la aplicación</li>
              <li>Registro de cuenta</li>
              <li>Primer login</li>
            </ul>
          </li>
          <li><strong>Funcionalidades principales</strong>
            <ul>
              <li>Pantalla principal</li>
              <li>Navegación</li>
              <li>Acciones básicas</li>
            </ul>
          </li>
          <li><strong>Tutoriales paso a paso</strong></li>
          <li><strong>Preguntas frecuentes</strong></li>
          <li><strong>Contacto y soporte</strong></li>
        </ol>
      </PracticeBox>

      <h2>6.6. Manual de mantenimiento básico</h2>
      
      <CodeBlock code={`# MANUAL DE MANTENIMIENTO

## Tareas diarias
- [ ] Verificar logs de error
- [ ] Comprobar espacio en disco
- [ ] Revisar rendimiento de la aplicación

## Tareas semanales
- [ ] Backup completo de base de datos
- [ ] Limpiar archivos temporales
- [ ] Revisar actualizaciones de seguridad

## Tareas mensuales
- [ ] Actualizar dependencias
- [ ] Revisar configuración de seguridad
- [ ] Analizar métricas de uso

## Procedimientos de emergencia
### Aplicación no responde
1. Verificar servicios Apache/MySQL
2. Revisar logs de error
3. Reiniciar servicios si necesario

### Pérdida de datos
1. Detener aplicación
2. Restaurar desde último backup
3. Verificar integridad de datos

## Comandos útiles
# Backup BD
mysqldump -u root -p mi_aplicacion > backup.sql

# Restaurar BD  
mysql -u root -p mi_aplicacion < backup.sql

# Ver logs en tiempo real
tail -f C:\\xampp\\apache\\logs\\error.log`} />

      <h2>6.7. Estructura de un README profesional</h2>
      
      <CodeBlock code={`# Mi Aplicación Web

Descripción breve de qué hace la aplicación y para qué sirve.

## 🚀 Características principales
- Lista de funcionalidades clave
- Tecnologías utilizadas
- Ventajas competitivas

## 📋 Requisitos
- PHP 8.0+
- MySQL 5.7+
- Apache 2.4+

## 🔧 Instalación

### Clonar repositorio
git clone https://github.com/usuario/proyecto.git
cd proyecto

### Instalar dependencias
composer install
npm install

### Configurar entorno
cp .env.example .env
# Editar .env con tus configuraciones

### Migrar base de datos
php artisan migrate --seed

## 🎯 Uso

### Desarrollo
npm run dev
php artisan serve

### Producción
npm run build
# Configurar servidor web

## 📖 Documentación
- [Manual de instalación](docs/instalacion.md)
- [API Documentation](docs/api.md)
- [Manual de usuario](docs/usuario.md)

## 🧪 Testing
npm run test
php artisan test

## 🤝 Contribuir
1. Fork del proyecto
2. Crear feature branch
3. Commit de cambios
4. Push a la rama
5. Abrir Pull Request

## 📄 Licencia
Este proyecto está bajo la Licencia MIT - ver [LICENSE](LICENSE) para más detalles.

## ✍️ Autores
- **Tu Nombre** - *Desarrollo inicial* - [TuGitHub](https://github.com/tu-usuario)

## 🙏 Agradecimientos
- Menciones a librerías utilizadas
- Créditos a diseñadores
- Referencias a tutoriales`} />

      <h2>6.8. Capturas y flujo de navegación</h2>
      
      <PracticeBox title="Documentar flujos de usuario con capturas">
        <h4>Herramientas recomendadas:</h4>
        <ul>
          <li><strong>Capturas:</strong> Windows Snipping Tool, Lightshot</li>
          <li><strong>GIFs:</strong> LICEcap, ScreenToGif</li>
          <li><strong>Diagramas:</strong> Draw.io, Lucidchart</li>
          <li><strong>Mockups:</strong> Figma, Balsamiq</li>
        </ul>

        <h4>Flujos importantes a documentar:</h4>
        <ul>
          <li>Registro de usuario nuevo</li>
          <li>Login y autenticación</li>
          <li>Funcionalidades principales</li>
          <li>Proceso de pago (si aplica)</li>
          <li>Gestión de perfil</li>
          <li>Flujos de error</li>
        </ul>
      </PracticeBox>

      <h2>6.9. Versionado y registro de cambios</h2>
      
      <CodeBlock code={`# CHANGELOG.md

## [1.2.0] - 2024-01-15

### Añadido
- Nueva funcionalidad de búsqueda avanzada
- Integración con API de pagos
- Dashboard de administrador

### Cambiado
- Mejorado rendimiento de consultas de BD
- Actualizada interfaz de usuario
- Migración a PHP 8.0

### Corregido
- Error en validación de formularios
- Problema con subida de archivos
- Compatibilidad con navegadores antiguos

### Seguridad
- Parches de seguridad aplicados
- Actualización de dependencias vulnerables

## [1.1.0] - 2023-12-20

### Añadido
- Sistema de notificaciones
- Exportación a PDF

### Corregido
- Error 500 en página de contacto

## [1.0.0] - 2023-11-01
- Lanzamiento inicial`} />

      <ActivityBox title="Crear el README de tu proyecto desde cero">
        <p>
          Desarrolla un README completo para una aplicación de gestión de inventario que incluya:
        </p>
        <ol>
          <li>Descripción clara del proyecto</li>
          <li>Lista de características principales</li>
          <li>Requisitos del sistema</li>
          <li>Instrucciones de instalación paso a paso</li>
          <li>Guía de uso básico</li>
          <li>Enlaces a documentación adicional</li>
          <li>Información de contribución</li>
          <li>Licencia y créditos</li>
        </ol>
        <p>
          Utiliza Markdown y asegúrate de que sea claro para alguien que no conoce el proyecto.
        </p>
      </ActivityBox>

      <NavigationButtons 
        prevPath="/seguridad"
        nextPath="/mantenimiento"
        prevTitle="5. Seguridad Básica"
        nextTitle="7. Mantenimiento"
      />
    </div>
  )
}

export default Documentation
