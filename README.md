# Manual UC0493_3 - Implementación de Aplicaciones Web

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.18-lightgrey.svg)](https://expressjs.com/)

Un manual interactivo completo para la Unidad de Competencia UC0493_3 "Implementación, verificación y documentación de aplicaciones web en entornos internet, intranet y extranet".

## 🎯 Descripción del Proyecto

Este proyecto es un manual digital desarrollado en React que cubre todos los aspectos de la UC0493_3, diseñado específicamente para ser utilizado en entornos de formación con XAMPP/localhost, cumpliendo con los criterios oficiales del SEPE.

## 🚀 Características Principales

- **Manual interactivo** con navegación intuitiva
- **10 capítulos completos** que cubren toda la UC0493_3
- **Ejemplos prácticos** con código real
- **Plantillas y checklists** listos para usar
- **Diseño responsive** para todos los dispositivos
- **Búsqueda y navegación** optimizada
- **Backend API** con ejemplos de implementación

## 📚 Contenido del Manual

### 0. Introducción a la Unidad de Competencia
- Qué es una UC y qué se evalúa
- Perfil profesional y competencias
- Proyecto final de la UC

### 1. Entornos Web: Internet, Intranet y Extranet
- Diferencias entre entornos
- Configuración con XAMPP
- Arquitectura cliente-servidor

### 2. Arquitectura de una Aplicación Web
- Componentes esenciales
- Estructura de carpetas
- Archivos de configuración

### 3. Implantación de Aplicaciones Web
- Proceso de despliegue paso a paso
- Configuración de servicios
- Simulación de entornos

### 4. Verificación y Pruebas
- Tipos de pruebas
- Herramientas de testing
- Informe de verificación

### 5. Seguridad Básica
- Vulnerabilidades comunes
- Buenas prácticas
- Gestión de errores

### 6. Documentación Técnica
- Manuales de instalación
- Documentación de usuario
- README profesional

### 7. Mantenimiento de Aplicaciones
- Tipos de mantenimiento
- Logs y monitoreo
- Copias de seguridad

### 8. Proyecto Final
- Especificaciones completas
- Criterios de evaluación
- Cronograma de desarrollo

### 9. 🌐 Despliegue en VPS (Hostinger)
- **Configuración completa de VPS** con subdominios
- **Guía paso a paso** para desplegar proyectos Node.js + React + MariaDB
- **Scripts automatizados** de despliegue
- **Configuración SSL** automática con Let's Encrypt
- **Gestión de múltiples estudiantes** con subdominios únicos
- **Monitoreo y mantenimiento** del servidor

### 10. Anexos
- Glosario técnico
- Plantillas profesionales
- Checklists de verificación

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18.2** - Biblioteca de interfaz de usuario
- **React Router 6.8** - Enrutamiento del lado del cliente
- **Vite 5.0** - Herramienta de desarrollo rápida
- **CSS3** - Estilos personalizados con variables CSS

### Backend
- **Node.js** - Entorno de ejecución JavaScript
- **Express 4.18** - Framework web para Node.js
- **ES Modules** - Sintaxis import/export moderna
- **CORS** - Manejo de políticas de origen cruzado

### Herramientas de Desarrollo
- **Concurrently** - Ejecución simultánea de servicios
- **Nodemon** - Reinicio automático del servidor

## 📦 Instalación

### Prerrequisitos
- Node.js 16+ instalado
- npm o yarn como gestor de paquetes
- Git para clonar el repositorio

### Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/manual-uc0493.git
cd manual-uc0493
```

### Instalar dependencias
```bash
# Instalar dependencias raíz
npm install

# Instalar dependencias del frontend
cd frontend && npm install

# Instalar dependencias del backend
cd ../backend && npm install
```

## 🚀 Ejecución

### Modo desarrollo (recomendado)
```bash
# Desde el directorio raíz
npm run dev
```

Esto iniciará:
- Frontend en `http://localhost:3000`
- Backend en `http://localhost:5000`

### Ejecución individual

#### Solo Frontend
```bash
cd frontend
npm run dev
```

#### Solo Backend
```bash
cd backend
npm run dev
```

### Modo producción
```bash
# Construir frontend
cd frontend
npm run build

# Iniciar backend en producción
cd ../backend
npm start
```

## 📁 Estructura del Proyecto

```
manual-uc0493/
├── frontend/                 # Aplicación React
│   ├── public/              # Archivos públicos
│   ├── src/                 # Código fuente React
│   │   ├── components/      # Componentes reutilizables
│   │   ├── pages/          # Páginas del manual
│   │   ├── App.jsx         # Componente principal
│   │   └── main.jsx        # Punto de entrada
│   ├── package.json        # Dependencias frontend
│   └── vite.config.js      # Configuración Vite
├── backend/                 # API Express
│   ├── server.js           # Servidor principal
│   └── package.json        # Dependencias backend
├── .github/                 # Configuración GitHub
│   └── copilot-instructions.md
├── package.json            # Scripts principales
└── README.md              # Este archivo
```

## ☁️ Despliegue en VPS (NUEVO)

### Características del sistema VPS
El manual ahora incluye una sección completa para desplegar proyectos reales en un VPS de Hostinger:

#### 🏗️ Configuración automatizada
- **Stack completo:** Node.js + MariaDB + Nginx + PM2
- **SSL automático:** Certificados Let's Encrypt
- **Subdominios únicos:** Cada estudiante tiene su propio subdominio
- **Monitoreo:** Herramientas integradas de supervisión

#### 📁 Archivos VPS incluidos
```
scripts/
├── deploy.sh           # Script automático Linux/Mac
├── deploy.ps1          # Script automático Windows
└── install-vps.sh      # Configuración inicial del servidor

docs/
└── VPS_CONFIG_PROFESOR.md  # Guía completa para profesores
```

#### 🚀 Despliegue automático
```bash
# Para Linux/Mac
./scripts/deploy.sh nombre-alumno

# Para Windows PowerShell
.\scripts\deploy.ps1 -Alumno "nombre-alumno"
```

#### 🌐 URLs generadas automáticamente
- `https://alumno1.tu-dominio.com` - Proyecto del estudiante 1
- `https://alumno2.tu-dominio.com` - Proyecto del estudiante 2
- `https://alumno3.tu-dominio.com` - Proyecto del estudiante 3

### Beneficios para profesores
- **Gestión centralizada:** Un solo VPS para todos los estudiantes
- **Despliegue automatizado:** Scripts que eliminan la configuración manual
- **Monitoreo integrado:** Vista de todas las aplicaciones desde un panel
- **Backup automático:** Copias de seguridad programadas
- **SSL incluido:** HTTPS automático para todos los subdominios

## 🎮 Uso del Manual

1. **Navegación**: Utiliza el menú lateral para saltar entre capítulos
2. **Búsqueda**: Cada página incluye contenido indexado y buscable
3. **Ejemplos prácticos**: Los bloques de código son copiables
4. **Actividades**: Cada capítulo incluye ejercicios prácticos
5. **Plantillas**: Los anexos incluyen plantillas listas para usar

## 🧪 Testing

### Ejecutar pruebas del frontend
```bash
cd frontend
npm run test
```

### Linting del código
```bash
cd frontend
npm run lint
```

## 📝 Scripts Disponibles

### Nivel raíz
- `npm run dev` - Inicia frontend y backend simultáneamente
- `npm run install-all` - Instala todas las dependencias
- `npm run client` - Solo frontend
- `npm run server` - Solo backend

### Frontend
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Previsualizar build
- `npm run lint` - Verificar código

### Backend
- `npm run dev` - Servidor con nodemon
- `npm start` - Servidor producción

## 🤝 Contribución

### Cómo contribuir
1. Fork del proyecto
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de cambios (`git commit -am 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

### Estándares de código
- Utilizar ES6+ y sintaxis moderna
- Seguir convenciones de React Hooks
- Documentar funciones complejas
- Mantener componentes pequeños y reutilizables

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## ✍️ Autores

- **Tu Nombre** - *Desarrollo inicial* - [TuGitHub](https://github.com/tu-usuario)

## 🙏 Agradecimientos

- **SEPE** - Por las especificaciones de la UC0493_3
- **React Team** - Por la excelente documentación
- **Vite** - Por la herramienta de desarrollo rápida
- **XAMPP Team** - Por facilitar el desarrollo local

## 📞 Soporte

Si tienes problemas con la instalación o uso del manual:

1. Revisa la sección de [Issues](https://github.com/tu-usuario/manual-uc0493/issues)
2. Crea un nuevo issue con detalles del problema
3. Incluye información del entorno (SO, versión Node.js, etc.)

---

## 🎓 Sobre la UC0493_3

Esta Unidad de Competencia forma parte del Certificado de Profesionalidad "Desarrollo de Aplicaciones con Tecnologías Web" y tiene como objetivo capacitar en:

- **Implantación** de aplicaciones web en diferentes entornos
- **Verificación** exhaustiva del funcionamiento
- **Documentación** técnica profesional
- **Mantenimiento** y actualización de aplicaciones

**Duración mínima**: 90 horas  
**Nivel**: 3  
**Código**: UC0493_3

---

*Desarrollado para entornos de formación con XAMPP/localhost - Compatible con criterios oficiales SEPE*
