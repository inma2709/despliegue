import { useState, useEffect } from 'react'
import NavigationButtons from "../components/NavigationButtons"

const SecurityTest = () => {
  const [userAnswers, setUserAnswers] = useState({})
  const [score, setScore] = useState(0)
  const [showFinalResults, setShowFinalResults] = useState(false)

  const questions = [
    {
      question: "¿Cuál es la regla de oro para el control de permisos en aplicaciones web?",
      options: [
        "Validar permisos solo en el frontend",
        "Validar permisos en el backend siempre",
        "Ocultar botones es suficiente para la seguridad",
        "Los permisos se validan en la base de datos únicamente"
      ],
      correct: 1,
      feedback: "El control de permisos SIEMPRE se debe hacer en el backend. El frontend puede ocultar elementos, pero quien manda es el servidor. Un usuario malicioso puede manipular el frontend fácilmente."
    },
    {
      question: "En una ruta como /pedidos/2, ¿qué debería verificar el backend antes de mostrar los datos?",
      options: [
        "Solo que el pedido existe",
        "Que el pedido pertenece al usuario autenticado",
        "Únicamente que el ID es válido",
        "Solo la sintaxis de la URL"
      ],
      correct: 1,
      feedback: "Es fundamental verificar que el pedido pertenece al usuario logueado. Esto previene que usuarios accedan a datos de otros usuarios simplemente cambiando el ID en la URL."
    },
    {
      question: "¿Por qué nunca debes guardar contraseñas en texto plano en la base de datos?",
      options: [
        "Ocupan más espacio",
        "Son vulnerables si alguien accede a la BD",
        "No se pueden comparar después",
        "Las bases de datos no las aceptan"
      ],
      correct: 1,
      feedback: "Si alguien accede a tu base de datos y las contraseñas están en texto plano, puede ver todas las contraseñas de los usuarios. Usar hash hace que sean ilegibles incluso si se compromete la BD."
    },
    {
      question: "¿Qué librería se recomienda para hashear contraseñas en Node.js?",
      options: [
        "crypto",
        "bcryptjs",
        "md5",
        "sha1"
      ],
      correct: 1,
      feedback: "bcryptjs es la librería recomendada porque está específicamente diseñada para hashear contraseñas de forma segura. MD5 y SHA1 son vulnerables para contraseñas."
    },
    {
      question: "¿Cuál es el método correcto para verificar una contraseña con bcrypt?",
      options: [
        "bcrypt.hash(password, hash)",
        "bcrypt.compare(password, hash)",
        "bcrypt.verify(password, hash)",
        "bcrypt.check(password, hash)"
      ],
      correct: 1,
      feedback: "bcrypt.compare() es el método que compara una contraseña en texto plano con el hash almacenado, devolviendo true si coinciden y false si no."
    },
    {
      question: "¿Cuántos tipos de mensajes principales hay en una aplicación?",
      options: [
        "Solo mensajes de error",
        "Mensajes UX y logs para desarrolladores",
        "Solo logs técnicos",
        "Tres tipos diferentes"
      ],
      correct: 1,
      feedback: "Hay dos tipos principales: mensajes UX para el usuario final (claros y orientados a acción) y logs para desarrolladores (con detalle técnico para depuración)."
    },
    {
      question: "¿Dónde se ven los console.log() del frontend?",
      options: [
        "En la terminal del servidor",
        "En DevTools del navegador",
        "En archivos de log del sistema",
        "No se ven en ningún lado"
      ],
      correct: 1,
      feedback: "Los console.log() del frontend se ven en las DevTools del navegador, en la pestaña Console. Es útil para depuración durante el desarrollo."
    },
    {
      question: "¿Dónde se ven los console.log() del backend?",
      options: [
        "En el navegador",
        "En la terminal donde corre Node.js",
        "En la interfaz de usuario",
        "En archivos automáticos"
      ],
      correct: 1,
      feedback: "Los console.log() del backend aparecen en la terminal/consola donde está ejecutándose el proceso de Node.js (tu PC, servidor, logs del hosting)."
    },
    {
      question: "¿Qué información NUNCA debes mostrar al usuario en producción?",
      options: [
        "Mensajes de confirmación",
        "Stack traces completos y consultas SQL",
        "Notificaciones de éxito",
        "Mensajes de validación"
      ],
      correct: 1,
      feedback: "Nunca muestres stack traces completos, consultas SQL o rutas del servidor al usuario. Esto expone información sensible que podría ser utilizada por atacantes."
    },
    {
      question: "¿Qué tipo de información debe ir en el archivo .env?",
      options: [
        "Configuración pública",
        "Contraseñas de BD y claves de API",
        "Nombres de archivos",
        "URLs públicas"
      ],
      correct: 1,
      feedback: "El .env debe contener información sensible como contraseñas de base de datos, JWT_SECRET, claves de API, etc. Nunca información pública."
    },
    {
      question: "¿El archivo .env se debe subir a Git?",
      options: [
        "Sí, siempre",
        "No, nunca",
        "Solo en producción",
        "Depende del proyecto"
      ],
      correct: 1,
      feedback: "NUNCA subas .env a Git. Contiene información sensible que no debe ser pública. Úsalo en .gitignore para asegurarte de que Git lo ignore."
    },
    {
      question: "¿Qué es un script en el contexto de programación?",
      options: [
        "Una página web",
        "Un archivo con instrucciones que se ejecutan automáticamente",
        "Un lenguaje de programación",
        "Una base de datos"
      ],
      correct: 1,
      feedback: "Un script es un archivo que contiene una serie de instrucciones que el ordenador ejecuta automáticamente, una tras otra, para automatizar tareas repetitivas."
    },
    {
      question: "¿Cómo se ejecuta un script de JavaScript con Node.js?",
      options: [
        "./script.js",
        "node script.js",
        "php script.js",
        "Se ejecuta automáticamente"
      ],
      correct: 1,
      feedback: "Los scripts de JavaScript se ejecutan con Node.js usando el comando 'node nombre_del_script.js' desde la terminal."
    },
    {
      question: "¿Cuál es la sintaxis básica de una consulta SELECT en SQL?",
      options: [
        "GET * FROM tabla",
        "SELECT * FROM tabla",
        "FETCH * FROM tabla",
        "QUERY * FROM tabla"
      ],
      correct: 1,
      feedback: "SELECT * FROM tabla es la sintaxis básica para consultar todos los campos de una tabla en SQL. SELECT especifica qué datos quieres, FROM indica de qué tabla."
    },
    {
      question: "¿Cuál es la función principal de los controladores en una aplicación Express?",
      options: [
        "Conectar con la base de datos directamente",
        "Gestionar la lógica de negocio y coordinar entre rutas y modelos",
        "Renderizar las vistas únicamente",
        "Validar solo los datos de entrada"
      ],
      correct: 1,
      feedback: "Los controladores separan la lógica de negocio de las rutas. Reciben datos del cliente, procesan la lógica (usando modelos si es necesario), y devuelven respuestas apropiadas, manteniendo el código organizado y reutilizable."
    },
    {
      question: "Cuando clonas un proyecto, ¿cuál es el primer comando que debes ejecutar?",
      options: [
        "npm start",
        "npm install",
        "npm run build",
        "git pull"
      ],
      correct: 1,
      feedback: "npm install es lo primero que debes hacer tras clonar. Instala todas las dependencias listadas en package.json y crea la carpeta node_modules."
    },
    {
      question: "¿Cuándo se debe generar la carpeta 'dist' en un proyecto React/Vite?",
      options: [
        "Al instalar dependencias",
        "Cuando vas a desplegar (npm run build)",
        "Al clonar el proyecto",
        "Automáticamente con git"
      ],
      correct: 1,
      feedback: "La carpeta 'dist' se genera con 'npm run build' cuando necesitas crear la versión optimizada para producción. No se incluye en Git porque es un archivo generado."
    },
    {
      question: "¿Qué significa que el frontend puede 'ocultar botones' pero 'quien manda es el servidor'?",
      options: [
        "El frontend es más importante",
        "La seguridad real está en el backend, no en ocultar elementos",
        "Los botones controlan la seguridad",
        "El servidor maneja la interfaz"
      ],
      correct: 1,
      feedback: "Ocultar un botón en el frontend no proporciona seguridad real. Un atacante puede hacer peticiones directas al servidor. La validación de permisos debe estar en el backend."
    },
    {
      question: "¿Para qué sirve la cláusula WHERE en una consulta SQL?",
      options: [
        "Para ordenar los resultados",
        "Para filtrar registros que cumplen una condición específica",
        "Para agrupar datos",
        "Para unir tablas"
      ],
      correct: 1,
      feedback: "WHERE se usa para filtrar registros en una consulta SQL. Solo devuelve las filas que cumplen la condición especificada, por ejemplo: SELECT * FROM usuarios WHERE edad > 18."
    },
    {
      question: "¿Cuál es el papel principal de los modelos en una arquitectura MVC?",
      options: [
        "Manejar las rutas de la aplicación",
        "Gestionar los datos y la lógica de acceso a la base de datos",
        "Renderizar la interfaz de usuario",
        "Procesar únicamente las peticiones HTTP"
      ],
      correct: 1,
      feedback: "Los modelos son responsables de la gestión de datos: definir estructura, validaciones, relaciones y operaciones CRUD con la base de datos. Encapsulan toda la lógica relacionada con los datos y proporcionan una interfaz limpia para que los controladores accedan a ellos."
    },
    // === NUEVAS PREGUNTAS SOBRE GIT Y DESARROLLO COLABORATIVO ===
    {
      question: "¿Cuál es la diferencia entre 'git fetch' y 'git pull'?",
      options: [
        "Son exactamente lo mismo",
        "fetch descarga sin integrar, pull descarga e integra cambios",
        "fetch es más lento que pull",
        "pull solo funciona con GitHub"
      ],
      correct: 1,
      feedback: "git fetch descarga información del remoto sin tocar tu código local, mientras que git pull hace fetch + merge, integrando los cambios automáticamente en tu rama."
    },
    {
      question: "¿Para qué se usa la rama 'develop' en Git?",
      options: [
        "Para hacer commits directamente",
        "Como zona de integración antes de pasar a main",
        "Para almacenar archivos temporales",
        "Solo para proyectos grandes"
      ],
      correct: 1,
      feedback: "La rama develop sirve como zona de integración donde se combinan las distintas ramas feature antes de pasar los cambios estables a main/producción."
    },
    {
      question: "¿Qué es middleware en una aplicación Express?",
      options: [
        "Una base de datos",
        "Funciones que se ejecutan entre la petición y la respuesta",
        "Un tipo de archivo",
        "Solo para manejo de errores"
      ],
      correct: 1,
      feedback: "Middleware son funciones que se ejecutan en el flujo de petición-respuesta de Express. Pueden procesar datos, validar, autenticar, manejar errores o modificar req/res antes de llegar al controlador final."
    },
    {
      question: "¿Qué hace el comando 'git merge'?",
      options: [
        "Elimina una rama",
        "Integra cambios de una rama en otra",
        "Crea una nueva rama",
        "Sube cambios al remoto"
      ],
      correct: 1,
      feedback: "git merge integra los cambios de una rama en otra. Se ejecuta desde la rama que va a recibir los cambios (normalmente main o develop)."
    },
    {
      question: "¿Cuándo aparecen conflictos de merge en Git?",
      options: [
        "Cuando el repositorio es muy grande",
        "Cuando dos ramas modifican la misma línea del mismo archivo",
        "Solo cuando trabajas solo",
        "Cuando no tienes internet"
      ],
      correct: 1,
      feedback: "Los conflictos de merge aparecen cuando dos ramas han modificado la misma línea del mismo archivo, y Git no puede decidir automáticamente qué versión conservar."
    },
    {
      question: "¿Qué contiene típicamente la carpeta 'dist'?",
      options: [
        "El código fuente del proyecto",
        "La versión compilada y optimizada para producción",
        "Solo archivos de configuración",
        "Documentación del proyecto"
      ],
      correct: 1,
      feedback: "La carpeta dist contiene la versión compilada, minificada y optimizada del frontend, lista para ser subida al servidor de producción."
    },
    {
      question: "¿Con qué comando se genera la carpeta 'dist' en un proyecto React/Vite?",
      options: [
        "npm install",
        "npm run build",
        "npm start",
        "npm run dev"
      ],
      correct: 1,
      feedback: "El comando 'npm run build' ejecuta el proceso de build que compila y optimiza el código, generando la carpeta dist con los archivos listos para producción."
    },
    {
      question: "¿Qué archivos NO deberían incluirse en el .gitignore?",
      options: [
        "node_modules y .env",
        "package.json y src/",
        "dist y logs",
        "Archivos temporales"
      ],
      correct: 1,
      feedback: "package.json y src/ contienen código fuente y configuración esenciales que deben versionarse. node_modules, .env, dist y logs se regeneran o contienen datos sensibles."
    },
    {
      question: "En trabajo colaborativo con Git, ¿por qué no se debe trabajar directamente en 'main'?",
      options: [
        "Porque es más lento",
        "Para mantener main estable y evitar romper el proyecto",
        "Porque main solo es para administradores",
        "No es cierto, siempre se debe trabajar en main"
      ],
      correct: 1,
      feedback: "La rama main debe contener siempre código estable y funcional. Trabajar en ramas feature permite experimentar sin riesgo de romper la versión principal."
    },
    {
      question: "¿Cuál es el flujo profesional típico con ramas Git?",
      options: [
        "main → feature → develop",
        "feature → develop → main",
        "develop → feature → main",
        "Todas las ramas son iguales"
      ],
      correct: 1,
      feedback: "El flujo profesional es: feature (desarrollo) → develop (integración) → main (producción). Cada etapa valida que el código funcione correctamente."
    },
    {
      question: "¿Qué hace el comando 'git clone'?",
      options: [
        "Solo descarga archivos",
        "Crea una copia local completa del repositorio con su historial",
        "Actualiza un repositorio existente",
        "Sube cambios al servidor"
      ],
      correct: 1,
      feedback: "git clone crea una copia local completa del repositorio, incluyendo todo el historial de commits y la configuración para trabajar con el remoto."
    },
    {
      question: "¿Para qué sirve el archivo 'package.json' en un proyecto?",
      options: [
        "Solo para decoración",
        "Gestionar dependencias y scripts del proyecto",
        "Almacenar contraseñas",
        "Configurar la base de datos"
      ],
      correct: 1,
      feedback: "package.json es fundamental: define las dependencias del proyecto, scripts de ejecución, metadatos y configuraciones necesarias para que npm funcione correctamente."
    },
    {
      question: "¿Cuál es la principal diferencia entre hosting compartido y VPS?",
      options: [
        "No hay diferencia, son lo mismo",
        "En hosting compartido compartes recursos del servidor, en VPS tienes recursos dedicados",
        "VPS es solo para sitios web estáticos",
        "Hosting compartido es más caro que VPS"
      ],
      correct: 1,
      feedback: "En hosting compartido múltiples sitios comparten los mismos recursos del servidor (CPU, RAM, disco). En VPS tienes recursos virtualizados dedicados, lo que ofrece mejor rendimiento y control, aunque requiere más conocimientos técnicos."
    },
    {
      question: "¿Cuáles son los tres tipos de entornos principales en un proyecto web?",
      options: [
        "Solo desarrollo y producción",
        "Desarrollo, Testing/Staging y Producción",
        "Frontend, backend y base de datos",
        "Local, remoto y en la nube"
      ],
      correct: 1,
      feedback: "Los tres entornos principales son: Desarrollo (tu PC), Testing/Staging (pruebas que imitan producción) y Producción (entorno real donde los usuarios acceden a la aplicación)."
    },
    {
      question: "¿Qué ventaja principal tiene el hosting compartido para principiantes?",
      options: [
        "Es el más caro pero más potente",
        "No requiere configuración de servidores y tiene panel de control gráfico",
        "Solo funciona con aplicaciones muy complejas",
        "Requiere conocimientos avanzados de Linux"
      ],
      correct: 1,
      feedback: "El hosting compartido es ideal para principiantes porque no requiere configuración de servidores, incluye panel de control gráfico y permite centrarse en entender el proceso de despliegue."
    },
    {
      question: "¿Qué función cumple el DNS en una aplicación web?",
      options: [
        "Almacena el código fuente de la aplicación",
        "Traduce nombres de dominio en direcciones IP reales",
        "Gestiona la base de datos del proyecto",
        "Encripta las comunicaciones HTTPS"
      ],
      correct: 1,
      feedback: "El DNS (Domain Name System) actúa como la 'guía telefónica de Internet', traduciendo nombres legibles como 'devcampus.es' en direcciones IP reales donde está ubicado el servidor."
    },
    {
      question: "¿Por qué es importante que un sitio web tenga certificados SSL (HTTPS)?",
      options: [
        "Solo es necesario para tiendas online",
        "Encripta la comunicación y es requerido por navegadores modernos",
        "Únicamente mejora el SEO",
        "Solo lo necesitan los sitios de banca"
      ],
      correct: 1,
      feedback: "Los certificados SSL encriptan la comunicación entre el navegador y el servidor, protegiendo datos sensibles. Además, los navegadores modernos marcan como 'no seguro' los sitios sin HTTPS."
    },
    {
      question: "¿Cuál es la diferencia principal entre desplegar una aplicación estática y una con backend?",
      options: [
        "No hay diferencia, se despliegan igual",
        "La estática solo necesita subir archivos HTML/CSS/JS, la con backend requiere servidor de aplicaciones",
        "La estática es más cara de mantener",
        "Solo la estática puede usar HTTPS"
      ],
      correct: 1,
      feedback: "Una aplicación estática (HTML/CSS/JS) solo necesita un servidor web que sirva archivos. Una con backend requiere un servidor de aplicaciones (Node.js, PHP) que procese lógica y se conecte a bases de datos."
    },
    {
      question: "¿Qué es Docker y cuál es su principal función?",
      options: [
        "Un lenguaje de programación para aplicaciones web",
        "Una herramienta que crea entornos reproducibles para ejecutar aplicaciones",
        "Una base de datos en la nube",
        "Un framework para desarrollo frontend"
      ],
      correct: 1,
      feedback: "Docker es una herramienta que crea contenedores con entornos controlados, permitiendo que las aplicaciones funcionen igual en diferentes sistemas (tu PC, servidor, etc.), solucionando el problema 'en mi ordenador funciona'."
    },
    {
      question: "¿Cuál es la diferencia principal entre un contenedor Docker y una máquina virtual?",
      options: [
        "No hay diferencia, son lo mismo",
        "Un contenedor es más ligero, una máquina virtual es un ordenador completo dentro de otro",
        "Las máquinas virtuales son más rápidas",
        "Los contenedores solo funcionan en Linux"
      ],
      correct: 1,
      feedback: "Un contenedor Docker es una 'caja aislada' que incluye solo lo necesario para la aplicación, siendo más ligero y rápido. Una máquina virtual simula un ordenador completo con su propio sistema operativo."
    },
    {
      question: "¿Qué tipo de aplicaciones se pueden desplegar en Vercel?",
      options: [
        "Solo aplicaciones de bases de datos",
        "Aplicaciones frontend estáticas y funciones serverless",
        "Únicamente aplicaciones PHP",
        "Solo aplicaciones de escritorio"
      ],
      correct: 1,
      feedback: "Vercel es ideal para aplicaciones frontend estáticas (React, Vue, HTML/CSS/JS) y funciones serverless. No soporta servidores persistentes como Node.js con bases de datos tradicionales."
    },
    {
      question: "¿Por qué es importante documentar un proyecto de desarrollo web?",
      options: [
        "Solo es necesario para proyectos grandes",
        "Facilita el mantenimiento, comunicación y trabajo en equipo",
        "Únicamente para cumplir con regulaciones",
        "No es importante, el código se explica solo"
      ],
      correct: 1,
      feedback: "La documentación facilita el mantenimiento del proyecto, explica decisiones técnicas, acelera la incorporación de nuevos desarrolladores y ayuda a detectar incoherencias en el código."
    },
    {
      question: "¿Qué debe incluir como mínimo el archivo README.md de un proyecto?",
      options: [
        "Solo el nombre del proyecto",
        "Descripción del proyecto, instrucciones de instalación y configuración",
        "Únicamente el código fuente",
        "Solo información de contacto del autor"
      ],
      correct: 1,
      feedback: "Un buen README.md debe explicar qué es el proyecto, cómo instalarlo, cómo ejecutarlo, cómo configurarlo y cualquier información necesaria para que otros desarrolladores puedan trabajar con él."
    },
    {
      question: "¿Qué información debe contener un manual de instalación de un proyecto web?",
      options: [
        "Solo el comando 'npm install'",
        "Requisitos del sistema, pasos de instalación, configuración y verificación",
        "Únicamente el enlace de descarga",
        "Solo información sobre el precio"
      ],
      correct: 1,
      feedback: "Un manual de instalación completo debe incluir: requisitos previos (Node.js, bases de datos), pasos detallados de instalación, configuración necesaria (.env), y cómo verificar que todo funciona correctamente."
    },
    {
      question: "¿Cuál es la diferencia entre documentación técnica y documentación de usuario?",
      options: [
        "No hay diferencia, son lo mismo",
        "La técnica es para desarrolladores (arquitectura, APIs), la de usuario explica cómo usar la aplicación",
        "La técnica es más cara de hacer",
        "Solo la documentación técnica es importante"
      ],
      correct: 1,
      feedback: "La documentación técnica se dirige a desarrolladores y administradores (código, configuración, APIs). La de usuario explica a los usuarios finales cómo usar la aplicación (pantallas, flujos, acciones)."
    },
    {
      question: "¿Cuál es la sintaxis correcta para insertar un nuevo registro en SQL?",
      options: [
        "ADD INTO tabla (campo1, campo2) VALUES (valor1, valor2)",
        "INSERT INTO tabla (campo1, campo2) VALUES (valor1, valor2)",
        "CREATE INTO tabla (campo1, campo2) VALUES (valor1, valor2)",
        "PUT INTO tabla (campo1, campo2) VALUES (valor1, valor2)"
      ],
      correct: 1,
      feedback: "INSERT INTO es la instrucción correcta para añadir nuevos registros en SQL. Se especifican los campos y sus valores correspondientes entre paréntesis."
    },
    {
      question: "¿Qué hace la instrucción UPDATE en SQL?",
      options: [
        "Elimina registros de una tabla",
        "Modifica registros existentes en una tabla",
        "Crea una nueva tabla",
        "Añade nuevas columnas"
      ],
      correct: 1,
      feedback: "UPDATE modifica registros existentes en una tabla SQL. Se usa junto con SET para especificar los nuevos valores y WHERE para indicar qué registros cambiar: UPDATE tabla SET campo = valor WHERE condición."
    },
    {
      question: "¿Qué hace el comando 'git status'?",
      options: [
        "Borra archivos",
        "Muestra el estado actual del repositorio y archivos modificados",
        "Sube cambios al servidor",
        "Crea un commit"
      ],
      correct: 1,
      feedback: "git status muestra qué archivos han cambiado, cuáles están en staging, en qué rama estás y el estado general del repositorio. Es fundamental para entender el estado actual."
    },
    {
      question: "¿Para qué se usa la instrucción DELETE en SQL?",
      options: [
        "Para crear nuevas tablas",
        "Para eliminar registros de una tabla",
        "Para modificar la estructura de una tabla",
        "Para hacer copias de seguridad"
      ],
      correct: 1,
      feedback: "DELETE elimina registros de una tabla SQL. Es importante usar siempre WHERE para especificar qué registros eliminar: DELETE FROM tabla WHERE condición. Sin WHERE eliminaría todos los registros."
    },
    {
      question: "¿Para qué se usa JOIN en SQL?",
      options: [
        "Para crear nuevas tablas",
        "Para combinar datos de múltiples tablas relacionadas",
        "Para eliminar duplicados",
        "Para ordenar resultados"
      ],
      correct: 1,
      feedback: "JOIN se usa para combinar datos de múltiples tablas que están relacionadas mediante claves. Por ejemplo: SELECT * FROM usuarios JOIN pedidos ON usuarios.id = pedidos.usuario_id obtiene datos de ambas tablas."
    }
  ]

  const shuffleArray = (array) => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  const [shuffledQuestions, setShuffledQuestions] = useState([])

  useEffect(() => {
    const questionsWithShuffledOptions = questions.map(q => {
      const shuffledOptions = shuffleArray(q.options)
      const correctAnswerText = q.options[q.correct]
      const newCorrectIndex = shuffledOptions.indexOf(correctAnswerText)
      
      return {
        ...q,
        shuffledOptions,
        correctIndex: newCorrectIndex
      }
    })
    setShuffledQuestions(questionsWithShuffledOptions)
  }, [])

  const selectAnswer = (questionIndex, selectedOption) => {
    const question = shuffledQuestions[questionIndex]
    const isCorrect = selectedOption === question.correctIndex
    
    setUserAnswers(prev => ({
      ...prev,
      [questionIndex]: {
        selected: selectedOption,
        correct: isCorrect,
        answered: true
      }
    }))

    if (isCorrect && !userAnswers[questionIndex]?.answered) {
      setScore(prev => prev + 1)
    }
  }

  const getAnsweredCount = () => {
    return Object.keys(userAnswers).length
  }

  const getCorrectCount = () => {
    return Object.values(userAnswers).filter(answer => answer.correct).length
  }

  const getFinalResults = () => {
    const correctCount = getCorrectCount()
    const totalAnswered = getAnsweredCount()
    const percentage = totalAnswered > 0 ? Math.round((correctCount / shuffledQuestions.length) * 100) : 0
    
    let grade = ''
    let color = ''
    if (percentage >= 90) {
      grade = '🏆 ¡Excelente!'
      color = '#28a745'
    } else if (percentage >= 80) {
      grade = '🎉 ¡Muy bien!'
      color = '#20c997'
    } else if (percentage >= 70) {
      grade = '👍 Bien'
      color = '#ffc107'
    } else if (percentage >= 60) {
      grade = '📖 Necesitas repasar'
      color = '#fd7e14'
    } else {
      grade = '📚 Estudia más'
      color = '#dc3545'
    }

    return { correctCount, totalAnswered, percentage, grade, color }
  }

  if (shuffledQuestions.length === 0) {
    return <div>Cargando test...</div>
  }

  return (
    <div className="security-test">
      <h1>� Test Final de Repaso</h1>
      
      <div className="test-results">
        <div className="score">Puntuación: {getCorrectCount()}/{shuffledQuestions.length}</div>
        <div>Correctas: {getCorrectCount()}</div>
        <div>Incorrectas: {getAnsweredCount() - getCorrectCount()}</div>
      </div>

      <div className="questions-container">
        {shuffledQuestions.map((q, index) => (
          <div key={index} className="question-card">
            <div className="question-number">Pregunta {index + 1}</div>
            <div className="question-text">{q.question}</div>
            
            <ul className="options">
              {q.shuffledOptions.map((option, optIndex) => {
                const isSelected = userAnswers[index]?.selected === optIndex
                const isCorrect = optIndex === q.correctIndex
                const hasAnswered = userAnswers[index]?.answered
                
                let optionClass = 'option'
                if (hasAnswered) {
                  if (isSelected && isCorrect) optionClass += ' correct'
                  else if (isSelected && !isCorrect) optionClass += ' incorrect'
                  else if (isCorrect) optionClass += ' correct'
                } else if (isSelected) {
                  optionClass += ' selected'
                }

                return (
                  <li 
                    key={optIndex}
                    className={optionClass}
                    onClick={() => !hasAnswered && selectAnswer(index, optIndex)}
                    style={{ cursor: hasAnswered ? 'default' : 'pointer' }}
                  >
                    <strong>{String.fromCharCode(65 + optIndex)}.</strong> {option}
                  </li>
                )
              })}
            </ul>
            
            {userAnswers[index]?.answered && (
              <div className="feedback show">
                <strong>📚 Retroalimentación:</strong><br />
                {q.feedback}
              </div>
            )}
          </div>
        ))}
      </div>

      <button 
        className="submit-btn" 
        onClick={() => setShowFinalResults(true)}
      >
        Ver Resultados Finales
      </button>

      {showFinalResults && (
        <div className="final-score">
          {(() => {
            const results = getFinalResults()
            return (
              <div style={{ color: results.color }}>
                {results.grade}<br />
                Puntuación final: {results.correctCount}/{shuffledQuestions.length} ({results.percentage}%)
                <div style={{ marginTop: '20px', fontSize: '1rem', color: '#666' }}>
                  Preguntas respondidas: {results.totalAnswered}/{shuffledQuestions.length}<br />
                  Correctas: {results.correctCount} | Incorrectas: {results.totalAnswered - results.correctCount}
                </div>
              </div>
            )
          })()}
        </div>
      )}

      <NavigationButtons
        prevPath="/seguridad"
        nextPath="/documentacion"
        prevTitle="5. Seguridad Básica"
        nextTitle="6. Documentación Técnica"
      />
    </div>
  )
}

export default SecurityTest