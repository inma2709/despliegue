import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <header className="navbar">
      <div className="container">
        <nav>
          <div className="logo">
            <Link to="/">UC0493_3 Manual</Link>
          </div>
          

          <ul>
            <li>
              <Link to="/" className={isActive('/')}>Inicio</Link>
            </li>
            <li>
              <Link to="/introduccion" className={isActive('/introduccion')}>Introducción</Link>
            </li>
            <li>
              <Link to="/entornos-web" className={isActive('/entornos-web')}>Entornos Web</Link>
            </li>
            <li>
              <Link to="/implementacion" className={isActive('/implementacion')}>Implementación</Link>
            </li>
            <li>
              <Link to="/verificacion" className={isActive('/verificacion')}>Verificación</Link>
            </li>
            <li>
              <Link to="/seguridad" className={isActive('/seguridad')}>Seguridad</Link>
            </li>
            <li>
              <Link to="/documentacion" className={isActive('/documentacion')}>Documentación</Link>
            </li>
            <li>
              <Link to="/proyecto-final" className={isActive('/proyecto-final')}>Proyecto Final</Link>
            </li>
          </ul>

        </nav>
      </div>
    </header>
  )
}

export default Navbar
