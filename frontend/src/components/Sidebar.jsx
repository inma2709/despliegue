import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  const menuItems = [
    { path: '/', label: '🏠 Inicio', number: '' },

    { path: '/introduccion', label: '📋 Introducción a la UC', number: '0' },
    { path: '/entornos-web', label: '🌐 Entornos Web', number: '1' },
    { path: '/arquitectura-web', label: '🏗️ Arquitectura Web', number: '2' },
    { path: '/despliegue', label: '🚀 Despliegue de Aplicaciones', number: '3' },
    { path: '/verificacion', label: '✅ Verificación y Pruebas', number: '4' },
    { path: '/seguridad', label: '🔐 Seguridad Básica', number: '5' },
    { path: '/test-seguridad', label: '🧪 Test Seguridad', number: '📝' },
    { path: '/documentacion', label: '📚 Documentación Técnica', number: '6' },

    // Nuevo capítulo añadido
    { path: '/git', label: '🧩 Control de Versiones con Git', number: '7' },

    { path: '/proyecto-final', label: '🎯 Proyecto Final', number: '8' },
    { path: '/despliegue-vps', label: '☁️ Despliegue en VPS', number: '9' },
    { path: '/anexos', label: '📎 Anexos', number: '10' }
  ]

  return (
    <aside className="sidebar">
      <h3>Índice del Manual</h3>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className={isActive(item.path)}>
              {item.number !== '' && (
                <span className="chapter-number">{item.number}</span>
              )}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
