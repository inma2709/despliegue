import NavigationButtons from '../components/NavigationButtons'
import { ActivityBox, PracticeBox, CodeBlock, WarningBox } from '../components/ContentBoxes'

const FinalProject = () => {
  return (
    <div className="final-project">
      <h1>8. Proyecto Final de la UC0493_3</h1>
      
      <h2>8.1. Implantación completa de una aplicación web</h2>
      
      <div className="chapter-card">
        <h3>🎯 Objetivo del proyecto final</h3>
        <p>
          Desarrollar e implantar una aplicación web completa que demuestre el dominio 
          de todos los conceptos aprendidos en la UC0493_3, siguiendo estándares 
          profesionales y buenas prácticas del sector.
        </p>
      </div>

      <h3>Especificaciones del proyecto:</h3>
      <PracticeBox title="Sistema de Gestión Bibliotecaria">
        <h4>Funcionalidades requeridas:</h4>
        <ul>
          <li>✅ Gestión de usuarios (bibliotecarios y lectores)</li>
          <li>✅ Catálogo de libros con búsqueda avanzada</li>
          <li>✅ Sistema de préstamos y devoluciones</li>
          <li>✅ Panel de administración</li>
          <li>✅ Reportes de actividad</li>
          <li>✅ Sistema de notificaciones</li>
        </ul>

        <h4>Requisitos técnicos:</h4>
        <ul>
          <li>🔧 Frontend: HTML5, CSS3, JavaScript (opcional: framework)</li>
          <li>🔧 Backend: PHP 8.0+ o Node.js</li>
          <li>🔧 Base de datos: MySQL/MariaDB</li>
          <li>🔧 Servidor: XAMPP (desarrollo) + configuración producción</li>
          <li>🔧 Control de versiones: Git</li>
        </ul>

        <h4>Entornos de despliegue:</h4>
        <ul>
          <li>🌐 <strong>Internet:</strong> Catálogo público de libros</li>
          <li>🏢 <strong>Intranet:</strong> Sistema completo para bibliotecarios</li>
          <li>🔐 <strong>Extranet:</strong> Portal personalizado para lectores registrados</li>
        </ul>
      </PracticeBox>

      <h2>8.2. Pruebas documentadas</h2>
      
      <h3>Plan de pruebas obligatorio:</h3>
      <CodeBlock code={`# PLAN DE PRUEBAS - Sistema Bibliotecario

## 1. Pruebas funcionales (mínimo 20 casos)

### Gestión de usuarios
TC001: Registro de nuevo lector
TC002: Login con credenciales válidas  
TC003: Login con credenciales inválidas
TC004: Actualización de perfil
TC005: Cambio de contraseña

### Gestión de libros
TC006: Búsqueda de libro por título
TC007: Búsqueda de libro por autor
TC008: Filtrado por categoría
TC009: Visualización de detalles
TC010: Agregar libro (admin)

### Sistema de préstamos
TC011: Realizar préstamo
TC012: Consultar préstamos activos
TC013: Devolver libro
TC014: Renovar préstamo
TC015: Historial de préstamos

### Administración
TC016: Dashboard de administrador
TC017: Reporte de libros más prestados
TC018: Reporte de usuarios morosos
TC019: Configuración del sistema
TC020: Backup de base de datos

## 2. Pruebas de seguridad (mínimo 5 casos)
TS001: Inyección SQL en formularios
TS002: XSS en campos de entrada
TS003: Acceso no autorizado a admin
TS004: Validación de subida archivos
TS005: Protección de rutas sensibles

## 3. Pruebas de rendimiento (mínimo 3 casos)
TR001: Tiempo de carga página principal
TR002: Respuesta de búsqueda con 1000+ libros
TR003: Carga simultánea de 10 usuarios`} />

      <h2>8.3. Documentación técnica entregada</h2>
      
      <h3>Documentos obligatorios a entregar:</h3>
      <div className="chapter-card">
        <h4>📋 Lista de entregables:</h4>
        <ol>
          <li><strong>README.md principal</strong>
            <ul>
              <li>Descripción del proyecto</li>
              <li>Tecnologías utilizadas</li>
              <li>Instrucciones de instalación</li>
              <li>Capturas de pantalla</li>
            </ul>
          </li>
          <li><strong>Manual de Instalación (install.md)</strong>
            <ul>
              <li>Requisitos del sistema</li>
              <li>Proceso paso a paso</li>
              <li>Configuración de entornos</li>
              <li>Solución de problemas</li>
            </ul>
          </li>
          <li><strong>Documentación de API (api.md)</strong>
            <ul>
              <li>Endpoints disponibles</li>
              <li>Parámetros y respuestas</li>
              <li>Códigos de error</li>
              <li>Ejemplos de uso</li>
            </ul>
          </li>
          <li><strong>Manual de Base de Datos (database.md)</strong>
            <ul>
              <li>Diagrama ER</li>
              <li>Scripts de creación</li>
              <li>Diccionario de datos</li>
              <li>Procedimientos almacenados</li>
            </ul>
          </li>
        </ol>
      </div>

      <h2>8.4. Documentación de usuario</h2>
      
      <PracticeBox title="Manual de Usuario - Estructura requerida">
        <h4>1. Introducción</h4>
        <ul>
          <li>¿Qué es el Sistema Bibliotecario?</li>
          <li>¿Para quién está diseñado?</li>
          <li>Requisitos del navegador</li>
        </ul>

        <h4>2. Primeros Pasos</h4>
        <ul>
          <li>Acceso al sistema</li>
          <li>Registro de cuenta</li>
          <li>Primer login</li>
          <li>Configuración de perfil</li>
        </ul>

        <h4>3. Tutorial para Lectores</h4>
        <ul>
          <li>Búsqueda de libros</li>
          <li>Reserva de ejemplares</li>
          <li>Consulta de préstamos</li>
          <li>Renovación online</li>
        </ul>

        <h4>4. Manual de Bibliotecario</h4>
        <ul>
          <li>Gestión de catálogo</li>
          <li>Proceso de préstamos</li>
          <li>Devoluciones</li>
          <li>Generación de reportes</li>
        </ul>

        <h4>5. FAQ y Solución de Problemas</h4>
        <ul>
          <li>Preguntas frecuentes</li>
          <li>Errores comunes</li>
          <li>Contacto soporte</li>
        </ul>
      </PracticeBox>

      <h2>8.5. Simulación de despliegue en internet/intranet/extranet</h2>
      
      <h3>Configuración de entornos simulados:</h3>
      <CodeBlock code={`# Configuración de Virtual Hosts para simulación

## 1. Internet (Catálogo público)
<VirtualHost *:80>
    ServerName biblioteca-publica.local
    DocumentRoot "C:/xampp/htdocs/biblioteca/public"
    
    # Solo mostrar catálogo, sin funciones de préstamo
    SetEnv APP_MODE "public"
    
    <Directory "C:/xampp/htdocs/biblioteca/public">
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>

## 2. Intranet (Sistema completo bibliotecarios)  
<VirtualHost *:81>
    ServerName biblioteca-interna.local
    DocumentRoot "C:/xampp/htdocs/biblioteca"
    
    # Funcionalidad completa
    SetEnv APP_MODE "internal"
    
    # Restricción a red local
    <Directory "C:/xampp/htdocs/biblioteca">
        AllowOverride All
        Require ip 192.168
        Require ip 127.0.0.1
    </Directory>
</VirtualHost>

## 3. Extranet (Portal lectores registrados)
<VirtualHost *:82>
    ServerName biblioteca-lectores.local
    DocumentRoot "C:/xampp/htdocs/biblioteca/extranet"
    
    # Funciones limitadas para lectores
    SetEnv APP_MODE "extranet"
    
    <Directory "C:/xampp/htdocs/biblioteca/extranet">
        AllowOverride All
        Require valid-user
        AuthType Basic
        AuthName "Acceso Lectores"
        AuthUserFile "C:/xampp/htdocs/biblioteca/.htpasswd"
    </Directory>
</VirtualHost>`} />

      <h2>8.6. Defensa del proyecto (opcional)</h2>
      
      <WarningBox title="Presentación del proyecto final">
        <h4>Estructura de la presentación (15-20 minutos):</h4>
        <ol>
          <li><strong>Introducción (3 min)</strong>
            <ul>
              <li>Presentación personal</li>
              <li>Descripción del proyecto</li>
              <li>Objetivos planteados</li>
            </ul>
          </li>
          <li><strong>Demostración técnica (8 min)</strong>
            <ul>
              <li>Navegación por la aplicación</li>
              <li>Funcionalidades principales</li>
              <li>Diferentes entornos (público/interno/extranet)</li>
              <li>Panel de administración</li>
            </ul>
          </li>
          <li><strong>Aspectos técnicos (5 min)</strong>
            <ul>
              <li>Arquitectura utilizada</li>
              <li>Decisiones de diseño</li>
              <li>Medidas de seguridad implementadas</li>
              <li>Proceso de testing</li>
            </ul>
          </li>
          <li><strong>Documentación (3 min)</strong>
            <ul>
              <li>Manuales creados</li>
              <li>Proceso de mantenimiento</li>
              <li>Plan de contingencias</li>
            </ul>
          </li>
          <li><strong>Preguntas y respuestas (5 min)</strong></li>
        </ol>
      </WarningBox>

      <h3>Criterios de evaluación del proyecto:</h3>
      <div className="chapter-card">
        <h4>Rubrica de evaluación (100 puntos):</h4>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
          <thead>
            <tr style={{ backgroundColor: '#333' }}>
              <th style={{ padding: '0.75rem', border: '1px solid #555' }}>Criterio</th>
              <th style={{ padding: '0.75rem', border: '1px solid #555' }}>Peso</th>
              <th style={{ padding: '0.75rem', border: '1px solid #555' }}>Excelente (4)</th>
              <th style={{ padding: '0.75rem', border: '1px solid #555' }}>Bueno (3)</th>
              <th style={{ padding: '0.75rem', border: '1px solid #555' }}>Regular (2)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>Funcionalidad</td>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>25%</td>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>Todas funcionan</td>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>90% funcionan</td>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>75% funcionan</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>Documentación</td>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>25%</td>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>Completa y clara</td>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>Completa</td>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>Básica</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>Pruebas</td>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>20%</td>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>Completas</td>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>Adecuadas</td>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>Básicas</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>Seguridad</td>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>15%</td>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>Muy segura</td>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>Segura</td>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>Básica</td>
            </tr>
            <tr>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>Usabilidad</td>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>15%</td>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>Excelente UX</td>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>Buena UX</td>
              <td style={{ padding: '0.75rem', border: '1px solid #555' }}>UX básica</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ActivityBox title="Cronograma de desarrollo del proyecto final">
        <h4>Plan de trabajo sugerido (4 semanas):</h4>
        
        <h5>Semana 1: Planificación y diseño</h5>
        <ul>
          <li>Día 1-2: Análisis de requisitos y diseño de BD</li>
          <li>Día 3-4: Wireframes y mockups</li>
          <li>Día 5: Configuración entorno desarrollo</li>
        </ul>

        <h5>Semana 2: Desarrollo backend</h5>
        <ul>
          <li>Día 1-2: Estructura de proyecto y BD</li>
          <li>Día 3-4: API y lógica de negocio</li>
          <li>Día 5: Pruebas backend</li>
        </ul>

        <h5>Semana 3: Desarrollo frontend</h5>
        <ul>
          <li>Día 1-2: Interfaces principales</li>
          <li>Día 3-4: Integración frontend-backend</li>
          <li>Día 5: Responsive design</li>
        </ul>

        <h5>Semana 4: Testing y documentación</h5>
        <ul>
          <li>Día 1-2: Pruebas exhaustivas</li>
          <li>Día 3-4: Documentación completa</li>
          <li>Día 5: Despliegue y preparación presentación</li>
        </ul>
      </ActivityBox>

      <NavigationButtons 
        prevPath="/mantenimiento"
        nextPath="/despliegue-vps"
        prevTitle="7. Mantenimiento"
        nextTitle="9. Despliegue en VPS"
      />
    </div>
  )
}

export default FinalProject
