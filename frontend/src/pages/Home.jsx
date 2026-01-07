import { Link } from 'react-router-dom'

const Home = () => {
  const chapters = [
    {
      number: 0,
      title: 'Introducción a la UC0493_3',
      description: 'Objetivo de la unidad, alcance profesional y estructura del manual.',
      path: '/introduccion'
    },
    {
      number: 1,
      title: 'Entornos Web',
      description: 'Internet, Intranet y Extranet. Contexto de trabajo de una aplicación web.',
      path: '/entornos-web'
    },
    {
      number: 2,
      title: 'Arquitectura Web',
      description: 'Estructura de una aplicación web: frontend, backend, servidor y base de datos.',
      path: '/arquitectura-web'
    },
    {
      number: 3,
      title: 'Despliegue de Aplicaciones',
      description: 'Puesta en marcha de aplicaciones web en local y despliegues estáticos.',
      path: '/despliegue'
    },
    {
      number: 4,
      title: 'Verificación y Pruebas',
      description: 'Comprobación del correcto funcionamiento de la aplicación.',
      path: '/verificacion'
    },
    {
      number: 5,
      title: 'Seguridad Básica',
      description: 'Medidas esenciales de seguridad en aplicaciones web.',
      path: '/seguridad'
    },
    {
      number: 6,
      title: 'Documentación Técnica',
      description: 'Documentación de instalación, configuración y código (JSDoc).',
      path: '/documentacion'
    },
    {
      number: 7,
      title: 'Control de Versiones con Git',
      description: 'Gestión de versiones, ramas y trabajo seguro en proyectos web.',
      path: '/git'
    },
    {
      number: 8,
      title: 'Proyecto Final',
      description: 'Proyecto integrador aplicando todo lo aprendido en la unidad.',
      path: '/proyecto-final'
    },
    {
      number: 9,
      title: 'Despliegue en VPS',
      description: 'Publicación de la aplicación en un servidor real con subdominio.',
      path: '/despliegue-vps'
    },
    {
      number: 10,
      title: 'Anexos',
      description: 'Material complementario, comandos útiles y referencias.',
      path: '/anexos'
    }
  ]

  return (
    <div className="home">
      <h1>Manual UC0493_3</h1>
      <h2>Implementación, Verificación y Documentación de Aplicaciones Web</h2>

      <p>
        Este manual desarrolla de forma práctica la Unidad de Competencia UC0493_3.
        A lo largo del recorrido se trabajan los procedimientos reales que intervienen
        en la puesta en marcha de una aplicación web: preparación del entorno,
        despliegue, verificación, seguridad, documentación, control de versiones
        y publicación en servidor.
      </p>

      <div className="warning-box">
        <h4>Nota sobre el entorno de trabajo</h4>
        <p>
          El aprendizaje comienza en entorno local y evoluciona progresivamente
          hacia entornos más cercanos a producción, manteniendo siempre un enfoque
          profesional y realista.
        </p>
      </div>

      <h2>Índice del Manual</h2>

      <div style={{ display: 'grid', gap: '1.5rem', marginTop: '2rem' }}>
        {chapters.map((chapter) => (
          <div key={chapter.number} className="chapter-card">
            <div className="chapter-number">{chapter.number}</div>
            <h3>{chapter.title}</h3>
            <p>{chapter.description}</p>
            <Link to={chapter.path} className="btn" style={{ marginTop: '1rem' }}>
              Ir al capítulo →
            </Link>
          </div>
        ))}
        
        {/* Tarjeta especial para el test de seguridad */}
        <div className="chapter-card test-card">
          <div className="chapter-number test-number">🧪</div>
          <h3>🔐 Test de Seguridad Web</h3>
          <p>Pon a prueba tus conocimientos sobre seguridad básica en aplicaciones web con 50 preguntas interactivas y retroalimentación detallada.</p>
          <Link to="/test-seguridad" className="btn test-btn" style={{ marginTop: '1rem' }}>
            Hacer Test →
          </Link>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link to="/introduccion" className="btn" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
          Comenzar →
        </Link>
      </div>
    </div>
  )
}

export default Home
