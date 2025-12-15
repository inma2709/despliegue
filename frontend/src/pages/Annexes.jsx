import NavigationButtons from '../components/NavigationButtons'
import { CodeBlock } from '../components/ContentBoxes'

const Annexes = () => {
  return (
    <div className="annexes">
      <h1>10. Anexos del Manual</h1>
      
      <h2>Glosario</h2>
      
      <div className="chapter-card">
        <h3>Términos técnicos importantes:</h3>
        <dl style={{ lineHeight: 1.8 }}>
          <dt><strong>Apache:</strong></dt>
          <dd>Servidor web HTTP de código abierto multiplataforma.</dd>
          
          <dt><strong>API (Application Programming Interface):</strong></dt>
          <dd>Conjunto de definiciones y protocolos para construir e integrar software de aplicaciones.</dd>
          
          <dt><strong>Backend:</strong></dt>
          <dd>Parte del servidor de una aplicación web que maneja la lógica, base de datos y autenticación.</dd>
          
          <dt><strong>CRUD:</strong></dt>
          <dd>Create, Read, Update, Delete - Operaciones básicas en bases de datos.</dd>
          
          <dt><strong>Deployment:</strong></dt>
          <dd>Proceso de instalación y configuración de una aplicación en el servidor de producción.</dd>
          
          <dt><strong>Frontend:</strong></dt>
          <dd>Parte de la aplicación que interactúa directamente con el usuario.</dd>
          
          <dt><strong>HTTPS:</strong></dt>
          <dd>Protocolo HTTP seguro que utiliza cifrado SSL/TLS.</dd>
          
          <dt><strong>Localhost:</strong></dt>
          <dd>Nombre de host que se refiere a la computadora actual (127.0.0.1).</dd>
          
          <dt><strong>MySQL:</strong></dt>
          <dd>Sistema de gestión de bases de datos relacional de código abierto.</dd>
          
          <dt><strong>PHP:</strong></dt>
          <dd>Lenguaje de programación especialmente diseñado para desarrollo web.</dd>
          
          <dt><strong>SQL Injection:</strong></dt>
          <dd>Técnica de ataque donde se inserta código SQL malicioso en consultas.</dd>
          
          <dt><strong>Virtual Host:</strong></dt>
          <dd>Método para alojar múltiples sitios web en un solo servidor.</dd>
          
          <dt><strong>XAMPP:</strong></dt>
          <dd>Paquete de software libre que consiste en Apache, MariaDB, PHP y Perl.</dd>
          
          <dt><strong>XSS (Cross-Site Scripting):</strong></dt>
          <dd>Vulnerabilidad que permite inyectar scripts del lado del cliente.</dd>
        </dl>
      </div>

      <h2>Guía rápida de XAMPP</h2>
      
      <div className="chapter-card">
        <h3>Comandos esenciales de XAMPP:</h3>
        
        <h4>Iniciar servicios:</h4>
        <CodeBlock code={`# Desde Panel de Control
1. Abrir XAMPP Control Panel
2. Click en "Start" Apache
3. Click en "Start" MySQL

# Desde línea de comandos
cd C:\\xampp
xampp_start.exe`} />

        <h4>Detener servicios:</h4>
        <CodeBlock code={`# Desde Panel de Control
1. Click en "Stop" Apache
2. Click en "Stop" MySQL

# Desde línea de comandos
cd C:\\xampp
xampp_stop.exe`} />

        <h4>Rutas importantes:</h4>
        <ul>
          <li><strong>Carpeta web:</strong> <code>C:\\xampp\\htdocs\\</code></li>
          <li><strong>Logs de Apache:</strong> <code>C:\\xampp\\apache\\logs\\</code></li>
          <li><strong>Configuración Apache:</strong> <code>C:\\xampp\\apache\\conf\\httpd.conf</code></li>
          <li><strong>Configuración PHP:</strong> <code>C:\\xampp\\php\\php.ini</code></li>
          <li><strong>Configuración MySQL:</strong> <code>C:\\xampp\\mysql\\bin\\my.ini</code></li>
        </ul>
      </div>

      <h2>Checklist de despliegue</h2>
      
      <div className="chapter-card">
        <h3>Lista de verificación pre-despliegue:</h3>
        
        <h4>Preparación del entorno:</h4>
        <ul>
          <li>☐ Servidor web configurado y funcionando</li>
          <li>☐ Base de datos creada y accesible</li>
          <li>☐ Permisos de archivos configurados</li>
          <li>☐ Certificados SSL instalados (si aplica)</li>
          <li>☐ DNS configurado correctamente</li>
        </ul>

        <h4>Preparación del código:</h4>
        <ul>
          <li>☐ Código probado en entorno de desarrollo</li>
          <li>☐ Dependencias instaladas</li>
          <li>☐ Configuración de producción aplicada</li>
          <li>☐ Archivos sensibles protegidos</li>
          <li>☐ Logs de error configurados</li>
        </ul>

        <h4>Durante el despliegue:</h4>
        <ul>
          <li>☐ Backup de versión anterior</li>
          <li>☐ Página de mantenimiento activada</li>
          <li>☐ Archivos copiados correctamente</li>
          <li>☐ Base de datos migrada</li>
          <li>☐ Servicios reiniciados</li>
        </ul>

        <h4>Post-despliegue:</h4>
        <ul>
          <li>☐ Funcionalidades críticas probadas</li>
          <li>☐ Logs monitoreados</li>
          <li>☐ Rendimiento verificado</li>
          <li>☐ Página de mantenimiento desactivada</li>
          <li>☐ Documentación actualizada</li>
        </ul>
      </div>

      <h2>Checklist de verificación</h2>
      
      <CodeBlock code={`# CHECKLIST DE VERIFICACIÓN DE APLICACIÓN WEB

## Funcionalidad básica
☐ Página principal carga correctamente
☐ Todas las páginas están accesibles
☐ Formularios funcionan correctamente
☐ Sistema de autenticación opera
☐ Base de datos responde a consultas
☐ Subida de archivos funciona
☐ Enlaces internos y externos funcionan

## Seguridad
☐ Formularios protegidos contra SQL injection
☐ Salida de datos sanitizada (XSS)
☐ Autenticación y autorización implementadas
☐ Archivos sensibles protegidos
☐ HTTPS configurado (producción)
☐ Contraseñas hasheadas correctamente
☐ Validación de entrada implementada

## Rendimiento
☐ Tiempo de carga < 3 segundos
☐ Imágenes optimizadas
☐ CSS y JS minificados
☐ Cache configurado
☐ Consultas SQL optimizadas

## Compatibilidad
☐ Chrome (última versión)
☐ Firefox (última versión)
☐ Safari (última versión)
☐ Edge (última versión)
☐ Responsive en móvil
☐ Responsive en tablet

## SEO y Accesibilidad
☐ Títulos de página únicos
☐ Meta descripciones
☐ Estructura de encabezados (H1, H2, H3)
☐ Texto alternativo en imágenes
☐ Navegación por teclado
☐ Contraste de colores adecuado

## Documentación
☐ README completo
☐ Manual de instalación
☐ Manual de usuario
☐ Documentación de API
☐ Comentarios en código crítico`} />

      <h2>Plantilla de Manual de Instalación</h2>
      
      <CodeBlock code={`# MANUAL DE INSTALACIÓN
## [Nombre de la Aplicación]

### Información del documento
- **Versión:** 1.0
- **Fecha:** [FECHA]
- **Autor:** [NOMBRE]

---

## 1. INTRODUCCIÓN
### 1.1 Propósito
Este manual describe el proceso de instalación de [Nombre Aplicación].

### 1.2 Alcance  
Cubre la instalación en entorno Windows con XAMPP.

### 1.3 Audiencia
Administradores de sistemas y desarrolladores.

---

## 2. REQUISITOS DEL SISTEMA
### 2.1 Requisitos de hardware
- **Procesador:** Intel Core i3 o equivalente
- **RAM:** 4 GB mínimo, 8 GB recomendado
- **Disco duro:** 2 GB espacio libre

### 2.2 Requisitos de software
- **Sistema operativo:** Windows 10/11
- **Servidor web:** Apache 2.4+
- **PHP:** 7.4+
- **Base de datos:** MySQL 5.7+ / MariaDB 10.2+
- **Navegador:** Chrome 90+, Firefox 88+

---

## 3. PREPARACIÓN DEL ENTORNO
### 3.1 Instalación de XAMPP
[Pasos detallados]

### 3.2 Configuración de servicios
[Configuración Apache, MySQL, PHP]

---

## 4. INSTALACIÓN DE LA APLICACIÓN
### 4.1 Descarga del código fuente
[Instrucciones git clone o descarga]

### 4.2 Configuración de base de datos
[Creación BD, importación schema, usuarios]

### 4.3 Configuración de la aplicación  
[Archivo .env, permisos, virtual hosts]

---

## 5. VERIFICACIÓN DE LA INSTALACIÓN
### 5.1 Pruebas básicas
[Scripts de verificación]

### 5.2 Solución de problemas comunes
[Errores típicos y soluciones]

---

## 6. MANTENIMIENTO INICIAL
### 6.1 Backups
### 6.2 Monitoreo
### 6.3 Actualizaciones

---

## APÉNDICES
### A. Códigos de error
### B. Comandos útiles
### C. Contactos de soporte`} />

      <h2>Plantilla de Manual de Usuario</h2>
      
      <CodeBlock code={`# MANUAL DE USUARIO
## [Nombre de la Aplicación]

### Información del documento
- **Versión:** 1.0
- **Fecha:** [FECHA]
- **Dirigido a:** Usuarios finales

---

## 1. INTRODUCCIÓN
### 1.1 ¿Qué es [Nombre Aplicación]?
[Descripción sencilla y propósito]

### 1.2 ¿Para qué sirve?
[Beneficios y casos de uso principales]

### 1.3 Requisitos para usar la aplicación
[Navegador, conexión, cuentas necesarias]

---

## 2. PRIMEROS PASOS
### 2.1 Acceso a la aplicación
[URL, cómo llegar a la aplicación]

### 2.2 Registro de cuenta
[Proceso paso a paso con capturas]

### 2.3 Iniciar sesión
[Login proceso]

### 2.4 Configuración inicial de perfil
[Primeros ajustes recomendados]

---

## 3. NAVEGACIÓN BÁSICA
### 3.1 Pantalla principal
[Descripción del dashboard/home]

### 3.2 Menú de navegación
[Explicación de cada opción del menú]

### 3.3 Búsqueda
[Cómo buscar información]

---

## 4. FUNCIONALIDADES PRINCIPALES
### 4.1 [Función 1]
[Tutorial paso a paso con imágenes]

### 4.2 [Función 2]  
[Tutorial paso a paso con imágenes]

### 4.3 [Función 3]
[Tutorial paso a paso con imágenes]

---

## 5. TUTORIALES PASO A PASO
### 5.1 Tutorial: [Tarea común 1]
### 5.2 Tutorial: [Tarea común 2]
### 5.3 Tutorial: [Tarea común 3]

---

## 6. PREGUNTAS FRECUENTES
### 6.1 ¿Cómo recupero mi contraseña?
### 6.2 ¿Por qué no puedo acceder?
### 6.3 ¿Cómo cambio mi perfil?
### 6.4 ¿La aplicación guarda automáticamente?

---

## 7. SOLUCIÓN DE PROBLEMAS
### 7.1 Problemas comunes
### 7.2 Mensajes de error típicos
### 7.3 ¿Cuándo contactar soporte?

---

## 8. CONTACTO Y SOPORTE
### 8.1 Información de contacto
### 8.2 Horarios de atención
### 8.3 Canales de comunicación`} />

      <h2>Plantilla de Informe de Pruebas</h2>
      
      <CodeBlock code={`# INFORME DE PRUEBAS
## [Nombre del Proyecto]

### Información del informe
- **Proyecto:** [Nombre]
- **Versión probada:** [Versión]
- **Fecha de pruebas:** [Fecha inicio] - [Fecha fin]
- **Responsable:** [Nombre del tester]
- **Entorno:** [Descripción del entorno de pruebas]

---

## RESUMEN EJECUTIVO
### Estado general: [APROBADO/RECHAZADO/CONDICIONAL]
### Resumen de resultados:
- **Total de casos de prueba:** XX
- **Casos ejecutados:** XX  
- **Casos pasaron:** XX
- **Casos fallaron:** XX
- **% de éxito:** XX%

---

## ENTORNO DE PRUEBAS
### Hardware
- **Servidor:** [Especificaciones]
- **Cliente:** [Especificaciones]

### Software
- **SO:** [Sistema operativo]
- **Navegador:** [Versiones probadas]
- **Base de datos:** [Versión]

---

## CASOS DE PRUEBA EJECUTADOS
| ID | Descripción | Estado | Prioridad | Observaciones |
|----|-------------|---------|-----------|---------------|
| TC001 | [Descripción] | ✅ PASS | Alta | - |
| TC002 | [Descripción] | ❌ FAIL | Media | [Detalles] |
| TC003 | [Descripción] | ⚠️ BLOCK | Baja | [Motivo bloqueo] |

---

## DEFECTOS ENCONTRADOS
### Defectos críticos
[Lista de errores críticos que impiden el uso]

### Defectos mayores  
[Lista de errores importantes que afectan funcionalidad]

### Defectos menores
[Lista de errores menores o estéticos]

---

## MÉTRICAS DE CALIDAD
### Cobertura de pruebas
- **Funcionalidades probadas:** XX%
- **Líneas de código cubiertas:** XX%

### Rendimiento
- **Tiempo promedio de respuesta:** X segundos
- **Casos de rendimiento:** X/X pasaron

---

## RECOMENDACIONES
### Para corrección de defectos
### Para próximas versiones
### Para mejora del proceso

---

## CONCLUSIONES
[Evaluación general y recomendación final]

---

## APÉNDICES
### A. Logs de ejecución
### B. Capturas de pantalla  
### C. Datos de prueba utilizados`} />

      <h2>Plantilla de Seguridad Básica</h2>
      
      <CodeBlock code={`# CHECKLIST DE SEGURIDAD BÁSICA

## AUTENTICACIÓN Y AUTORIZACIÓN
☐ Contraseñas hasheadas con algoritmo seguro
☐ Política de contraseñas implementada
☐ Límite de intentos de login
☐ Sesiones expiradas automáticamente
☐ Logout seguro implementado
☐ Verificación de permisos en cada acción

## VALIDACIÓN Y SANITIZACIÓN
☐ Validación de entrada en cliente y servidor
☐ Sanitización de datos de salida
☐ Protección contra XSS implementada
☐ Protección contra CSRF
☐ Validación de tipos de archivo en uploads
☐ Límites de tamaño en uploads

## BASE DE DATOS
☐ Consultas parametrizadas (prepared statements)
☐ Principio de menor privilegio en usuarios BD
☐ Contraseñas de BD seguras
☐ Backup cifrado de base de datos
☐ Logs de acceso a BD habilitados

## CONFIGURACIÓN DEL SERVIDOR
☐ Versiones de software actualizadas
☐ Servicios innecesarios deshabilitados
☐ Permisos de archivos correctos (644/755)
☐ Archivos sensibles protegidos (.env, config)
☐ Headers de seguridad configurados
☐ SSL/HTTPS configurado

## GESTIÓN DE ERRORES
☐ Información detallada de errores oculta en producción
☐ Logs de errores configurados
☐ Páginas de error personalizadas
☐ Manejo de excepciones implementado

## MONITOREO Y LOGS
☐ Logs de acceso habilitados
☐ Logs de seguridad configurados
☐ Monitoreo de actividad sospechosa
☐ Alertas automáticas configuradas
☐ Backup regular de logs

## PROTECCIÓN DE DATOS
☐ Datos sensibles cifrados
☐ Política de retención de datos
☐ Cumplimiento RGPD (si aplica)
☐ Procedimiento de borrado seguro
☐ Acceso a datos auditado

---

## HERRAMIENTAS DE VERIFICACIÓN RECOMENDADAS
- **OWASP ZAP:** Scanner de vulnerabilidades web
- **Nessus:** Scanner de vulnerabilidades de red
- **SQLMap:** Detección de SQL injection  
- **Burp Suite:** Proxy para testing de seguridad
- **Nikto:** Scanner de vulnerabilidades web`} />

      <div className="chapter-card" style={{ marginTop: '3rem' }}>
        <h3>🎉 ¡Felicitaciones!</h3>
        <p>
          Has completado el Manual UC0493_3 - Implementación, verificación y documentación 
          de aplicaciones web. Ahora tienes todos los conocimientos necesarios para:
        </p>
        <ul>
          <li>✅ Implantar aplicaciones web en diferentes entornos</li>
          <li>✅ Realizar pruebas exhaustivas y documentadas</li>
          <li>✅ Crear documentación técnica profesional</li>
          <li>✅ Establecer planes de mantenimiento efectivos</li>
          <li>✅ Aplicar medidas de seguridad básicas</li>
        </ul>
        <p>
          <strong>¡Es hora de aplicar todo lo aprendido en tu proyecto final!</strong>
        </p>
      </div>

      <NavigationButtons 
        prevPath="/despliegue-vps"
        nextPath="/"
        prevTitle="9. Despliegue en VPS"
        nextTitle="Volver al Inicio"
      />
    </div>
  )
}

export default Annexes
