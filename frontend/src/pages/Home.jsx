import { Link } from 'react-router-dom'

const Home = () => {
  const chapters = [
    {
      number: 0,
      title: 'Introducción a la UC0493_3',
      description: 'Objetivo de la unidad y qué aprenderás en 30 horas.',
      path: '/introduccion'
    },
    {
      number: 1,
      title: 'Entornos Web',
      description: 'Internet, Intranet y Extranet explicado de forma sencilla.',
      path: '/entornos-web'
    },
    {
      number: 2,
      title: 'Implementación Web Básica',
      description: 'Cómo poner en marcha una aplicación en local.',
      path: '/implementacion'
    },
    {
      number: 3,
      title: 'Verificación y Pruebas',
      description: 'Comprobaciones básicas para validar tu aplicación.',
      path: '/verificacion'
    },
    {
      number: 4,
      title: 'Seguridad Web Esencial',
      description: 'Conceptos mínimos de seguridad para proyectos reales.',
      path: '/seguridad'
    },
    {
      number: 5,
      title: 'Documentación del Proyecto',
      description: 'Guías cortas para documentar: instalación y uso.',
      path: '/documentacion'
    },
    {
      number: 6,
      title: 'Proyecto Final',
      description: 'Mini proyecto para demostrar todo lo aprendido.',
      path: '/proyecto-final'
    }
  ]

  return (
    <div className="home">
      <h1>Manual UC0493_3</h1>
      <h2>Implementación y Verificación de Aplicaciones Web</h2>
      
      <p>
        Bienvenido al manual de la Unidad de Competencia UC0493_3. 
        A lo largo de este curso aprenderás a preparar, poner en marcha, comprobar
        y documentar aplicaciones web reales, aplicando procedimientos profesionales
        pero adaptados a un entorno local con XAMPP. El objetivo es que comprendas 
        cómo funcionan las aplicaciones web por dentro y seas capaz de implementar 
        tus propios proyectos con seguridad, estructura y metodología.
      </p>

      <div className="warning-box">
        <h4>⚠️ Nota importante</h4>
        <p>
          Todo el aprendizaje se realiza en un entorno local, simulando 
          Internet, Intranet y Extranet de manera sencilla.
        </p>
      </div>

      <h2>Contenido del Manual</h2>
      
      <div style={{ display: 'grid', gap: '1.5rem', marginTop: '2rem' }}>
        {chapters.map((chapter) => (
          <div key={chapter.number} className="chapter-card">
            <div className="chapter-number">{chapter.number}</div>
            <h3>{chapter.title}</h3>
            <p>{chapter.description}</p>
            <Link to={chapter.path} className="btn" style={{ marginTop: '1rem' }}>
              Ir al Capítulo →
            </Link>
          </div>
        ))}
      </div>

      <div className="activity-box" style={{ marginTop: '3rem' }}>
        <h4>🎯 Objetivo del Manual</h4>
        <p>
          Al finalizar este curso serás capaz de implementar, verificar y documentar 
          una aplicación web básica en un entorno local. Dominarás conceptos clave 
          como la estructura de una aplicación web, la preparación del entorno, 
          el despliegue en localhost, la realización de pruebas funcionales, 
          la aplicación de medidas básicas de seguridad y la creación de 
          documentación técnica y de usuario. 
          <br /><br />
          En resumen, adquirirás una visión completa del proceso profesional 
          que sigue cualquier proyecto web desde su instalación hasta su entrega final.
        </p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link to="/introduccion" className="btn" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
          Comenzar →
        </Link>
      </div>
    </div>
  )
}

export default Home
