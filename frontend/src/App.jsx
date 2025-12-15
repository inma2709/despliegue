import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Introduction from './pages/Introduction'
import WebEnvironments from './pages/WebEnvironments'
import WebArchitecture from './pages/WebArchitecture'
import WebDeployment from './pages/WebDeployment'
import Testing from './pages/Testing'
import Security from './pages/Security'
import Documentation from './pages/Documentation'
import Maintenance from './pages/Maintenance'
import FinalProject from './pages/FinalProject'
import VPSDeployment from './pages/VPSDeployment'
import Annexes from './pages/Annexes'
import  Git from './pages/Git'
function App() {
  return (
    <div className="App">
     

      {/* 🔸 Este contenedor será el área central: sidebar + contenido */}
      <div className="layout-with-sidebar">
        <Sidebar />
        <main className="content-with-sidebar">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduccion" element={<Introduction />} />
            <Route path="/entornos-web" element={<WebEnvironments />} />
            <Route path="/arquitectura-web" element={<WebArchitecture />} />
            <Route path="/despliegue" element={<WebDeployment />} />
            <Route path="/verificacion" element={<Testing />} />
            <Route path="/seguridad" element={<Security />} />
            <Route path="/documentacion" element={<Documentation />} />
            <Route path="/mantenimiento" element={<Maintenance />} />
            <Route path="/proyecto-final" element={<FinalProject />} />
            <Route path="/despliegue-vps" element={<VPSDeployment />} />
            <Route path="/anexos" element={<Annexes />} />
            <Route path="/git" element={<Git />} />
          </Routes>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App
