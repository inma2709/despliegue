import { ActivityBox, PracticeBox, CodeBlock, WarningBox } from "./ContentBoxes";

const SeccionVPS = () => {
  return (
    <div className="chapter-card">
      <h2>3.4. ¿Qué es un VPS? Arquitectura real de DevCampus</h2>

      {/* 3.4.1 */}
      <details>
        <summary>
          <strong>3.4.1. ¿Qué es realmente un VPS?</strong>
        </summary>

        <p>
          Un <strong>VPS (Virtual Private Server)</strong> es un servidor virtual que funciona como
          un <strong>ordenador independiente conectado a Internet</strong>.
          Tiene su propio sistema operativo (normalmente Linux),
          su propia memoria, CPU, disco y una IP pública.
        </p>

        <p>
          Aunque físicamente comparte máquina con otros VPS, a nivel práctico es como
          tener <strong>tu propio servidor dedicado</strong>.
          Tú decides qué software instalar, cómo configurar el sistema
          y qué aplicaciones se ejecutan.
        </p>

        <p>
          Esto lo convierte en la opción ideal para proyectos profesionales:
          APIs, backends en Node.js, servidores con Nginx, bases de datos,
          aplicaciones full stack, etc.
        </p>

        <WarningBox title="Idea importante">
          <p>
            Un VPS <strong>no es solo un alojamiento de archivos</strong>.
            Es una máquina que ejecuta procesos continuamente.
          </p>
        </WarningBox>
      </details>

      {/* 3.4.2 */}
      <details>
        <summary>
          <strong>3.4.2. Diferencia clave: hosting compartido vs VPS</strong>
        </summary>

        <PracticeBox title="Comparación clara">
          <table className="table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Hosting compartido</th>
                <th>VPS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tipo de acceso</td>
                <td>Panel (hPanel / cPanel)</td>
                <td>Acceso SSH (terminal)</td>
              </tr>
              <tr>
                <td>Ejecutar Node.js</td>
                <td>❌ No</td>
                <td>✅ Sí</td>
              </tr>
              <tr>
                <td>Instalar software</td>
                <td>❌ No</td>
                <td>✅ Sí</td>
              </tr>
              <tr>
                <td>Control del servidor</td>
                <td>Muy limitado</td>
                <td>Total</td>
              </tr>
              <tr>
                <td>Ideal para</td>
                <td>Webs estáticas</td>
                <td>Backends y proyectos reales</td>
              </tr>
            </tbody>
          </table>
        </PracticeBox>

        <p>
          En resumen: el hosting compartido sirve para <strong>mostrar archivos</strong>,
          mientras que el VPS sirve para <strong>ejecutar aplicaciones</strong>.
        </p>
      </details>

      {/* 3.4.3 */}
      <details>
        <summary>
          <strong>3.4.3. El VPS de DevCampus: arquitectura real</strong>
        </summary>

        <p>
          En DevCampus usamos un <strong>VPS Hostinger KVM</strong> como servidor central.
          Este VPS actúa como el corazón del sistema:
        </p>

        <ul>
          <li>Ejecuta APIs en <strong>Node.js + Express</strong></li>
          <li>Sirve proyectos frontend compilados</li>
          <li>Gestiona dominios y subdominios</li>
          <li>Centraliza la seguridad (HTTPS, firewall)</li>
        </ul>

        <PracticeBox title="Esquema simplificado">
          <p><strong>Navegador del usuario</strong></p>
          <p>⬇️ HTTPS</p>
          <p><strong>Nginx (servidor web)</strong></p>
          <p>⬇️</p>
          <ul>
            <li>Frontend compilado (dist)</li>
            <li>API Node.js (puerto interno)</li>
          </ul>
        </PracticeBox>

        <p>
          El usuario nunca ve Node.js directamente.
          Todo pasa primero por el servidor web (Nginx),
          que actúa como intermediario.
        </p>
      </details>

      {/* 3.4.4 */}
      <details>
        <summary>
          <strong>3.4.4. ¿Por qué Node.js necesita un VPS?</strong>
        </summary>

        <p>
          Node.js es un <strong>proceso en ejecución</strong>.
          Escucha peticiones en un puerto (3000, 4000, etc.)
          y debe estar siempre activo.
        </p>

        <p>
          Un hosting compartido:
        </p>

        <ul>
          <li>No permite procesos persistentes</li>
          <li>No permite abrir puertos</li>
          <li>No permite instalar Node</li>
        </ul>

        <p>
          Un VPS, en cambio, permite:
        </p>

        <ul>
          <li>Ejecutar Node.js 24/7</li>
          <li>Usar PM2 para mantener procesos activos</li>
          <li>Configurar Nginx como proxy inverso</li>
        </ul>

        <WarningBox title="Clave de examen">
          <p>
            <strong>Node.js = VPS</strong>.  
            <strong>HTML/CSS/JS = hosting compartido</strong>.
          </p>
        </WarningBox>
      </details>

      {/* 3.4.5 */}
      <details>
        <summary>
          <strong>3.4.5. Mentalidad profesional: ya no es “subir archivos”</strong>
        </summary>

        <p>
          Trabajar con un VPS implica cambiar la mentalidad:
        </p>

        <ul>
          <li>Piensas en <strong>servicios</strong>, no en carpetas</li>
          <li>Piensas en <strong>procesos</strong>, no solo en archivos</li>
          <li>Piensas en <strong>arquitectura</strong>, no solo en código</li>
        </ul>

        <ActivityBox title="Reflexión">
          <p>
            Cuando usas un VPS, estás trabajando como lo hacen las empresas reales:
            configurando servidores, desplegando aplicaciones y gestionando sistemas
            en producción.
          </p>
        </ActivityBox>
      </details>
    </div>
  );
};

export default SeccionVPS;
