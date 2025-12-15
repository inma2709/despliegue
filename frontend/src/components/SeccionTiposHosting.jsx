import { ActivityBox, PracticeBox, CodeBlock, WarningBox } from './ContentBoxes';

const SeccionTiposHosting = () => {
  return (
    <div className="chapter-card">
      <h2>3.2. Tipos de hosting ¿Qué hosting elegir?</h2>

      <p>
        En esta sección vamos a pasar definitivamente de la teoría a la práctica.
        Hasta ahora hemos visto conceptos como dominio, servidor, DNS y VPS.
        Ahora toca responder a una pregunta clave:
        <strong> ¿cómo se sube realmente una página web a Internet?</strong>
      </p>

      <p>
        Empezaremos por el caso más sencillo y habitual:
        <strong> desplegar una página web en un hosting compartido</strong>.
        Este tipo de alojamiento es ideal para dar los primeros pasos y entender
        el proceso general de publicación de un proyecto web.
      </p>

      {/* ================================================= */}
      <ActivityBox title="Antes de empezar · Decálogo para elegir un buen hosting">
        <p>
          Antes de desplegar cualquier proyecto, es importante saber
          <strong> en qué debemos fijarnos al elegir un proveedor de hosting</strong>.
          No todos los hostings ofrecen lo mismo, aunque el precio sea parecido.
        </p>

        <ol>
          <li>Que permita subir archivos fácilmente (gestor de archivos o FTP).</li>
          <li>Que incluya un panel de control claro e intuitivo.</li>
          <li>Que ofrezca certificados SSL gratuitos (HTTPS).</li>
          <li>Que permita gestionar dominios y subdominios.</li>
          <li>Que tenga buena velocidad y estabilidad.</li>
          <li>Que ofrezca soporte técnico accesible.</li>
          <li>Que permita escalar a planes superiores (VPS) si el proyecto crece.</li>
          <li>Que sea compatible con proyectos web estándar (HTML, CSS, JS).</li>
          <li>Que tenga buena documentación.</li>
          <li>Que sea un proveedor conocido y fiable.</li>
        </ol>

        <p>
          En este curso utilizaremos un <strong>hosting real</strong> ya configurado,
          de forma que podamos centrarnos en aprender el proceso sin depender de
          cuentas individuales para cada alumno.
        </p>
      </ActivityBox>

      {/* ================================================= */}
      <details>
        <summary><strong>¿Por qué empezamos con hosting compartido?</strong></summary>

        <p>
          El hosting compartido es el punto de entrada más común al mundo del
          despliegue web. No requiere conocimientos avanzados de servidores y
          permite centrarse en lo importante: entender el flujo completo de
          publicación de un proyecto.
        </p>

        <ul>
          <li>No requiere configuración de servidores.</li>
          <li>Suele incluir un panel de control gráfico.</li>
          <li>Permite subir archivos fácilmente.</li>
          <li>Es suficiente para páginas HTML, CSS y JavaScript.</li>
        </ul>
      </details>

      {/* ================================================= */}
      <ActivityBox title="Qué vamos a desplegar">
        <p>
          En este primer ejercicio práctico vamos a desplegar una
          <strong> página web estática</strong>, compuesta por:
        </p>

        <ul>
          <li>Un archivo <code>index.html</code>.</li>
          <li>Una hoja de estilos <code>style.css</code>.</li>
          <li>Opcionalmente, imágenes o JavaScript.</li>
        </ul>

        <p>
          El objetivo no es el diseño, sino entender el proceso de despliegue:
          dónde se suben los archivos y cómo se accede a ellos desde Internet.
        </p>
      </ActivityBox>

      {/* ================================================= */}
      <PracticeBox title="Paso 1 · Acceder al hosting compartido">
        <p>
          El primer paso es acceder al panel de control del hosting compartido
          que vamos a utilizar para el ejercicio práctico.
        </p>

        <p>
          Desde este panel podremos gestionar todos los elementos básicos del
          sitio web, como:
        </p>

        <ul>
          <li>Archivos del sitio web.</li>
          <li>Dominios y subdominios.</li>
          <li>Certificados SSL.</li>
        </ul>
      </PracticeBox>

      {/* ================================================= */}
      <PracticeBox title="Paso 2 · Identificar la carpeta pública del sitio">
        <p>
          En los hostings compartidos existe una carpeta especial donde deben
          colocarse los archivos visibles desde Internet. Suele llamarse:
        </p>

        <ul>
          <li><code>public_html</code></li>
          <li><code>www</code></li>
          <li>o similar</li>
        </ul>

        <p>
          Todo lo que esté dentro de esa carpeta será accesible desde el navegador.
          Si colocamos ahí un archivo <code>index.html</code>, será la página que
          se muestre por defecto.
        </p>
      </PracticeBox>

      {/* ================================================= */}
      <PracticeBox title="Paso 3 · Subir los archivos del proyecto">
        <p>
          Existen varias formas de subir los archivos al hosting compartido:
        </p>

        <ul>
          <li>Gestor de archivos del panel de control.</li>
          <li>FTP (por ejemplo, usando FileZilla).</li>
        </ul>

        <p>
          En este primer ejercicio utilizaremos el método más sencillo:
          <strong> el gestor de archivos del hosting</strong>.
        </p>
      </PracticeBox>

      {/* ================================================= */}
      <WarningBox title="Errores comunes en el primer despliegue">
        <ul>
          <li>Subir los archivos fuera de la carpeta pública.</li>
          <li>No llamar <code>index.html</code> al archivo principal.</li>
          <li>Esperar que funcione una app Node en hosting compartido.</li>
          <li>Confundir dominio con carpeta del servidor.</li>
        </ul>
      </WarningBox>

      <p>
  Muchos alumnos ya han desplegado proyectos con <strong>Vercel</strong> o <strong>Netlify</strong>,
  y eso es una base excelente: aprendes a publicar rápido y a entender qué significa “producción”.
  Sin embargo, estos servicios están pensados sobre todo para <strong>frontends</strong> (sitios estáticos
  o frameworks como React/Next) y, cuando el proyecto crece y aparece un backend real (Node/Express),
  una base de datos propia o la necesidad de controlar el servidor, el paso lógico es evolucionar hacia
  un <strong>hosting</strong> (si solo subes archivos) o un <strong>VPS</strong> (si tu aplicación se ejecuta
  como proceso y necesita configuración real de servidor).
</p>
<div className="chapter-card">
  <h4>Comparativa rápida: Vercel/Netlify vs Hosting compartido vs VPS</h4>

  <table className="table">
    <thead>
      <tr>
        <th>Opción</th>
        <th>¿Para qué es ideal?</th>
        <th>Ventajas principales</th>
        <th>Limitaciones</th>
        <th>Cuándo es el paso lógico</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Vercel / Netlify</strong></td>
        <td>Frontends (HTML/CSS/JS, React, Next, sitios estáticos)</td>
        <td>
          Muy rápido, CI/CD con Git, HTTPS fácil, despliegue automático.
        </td>
        <td>
          Backend limitado (serverless), menos control de servidor y procesos, base de datos suele ir aparte.
        </td>
        <td>
          Primer despliegue ideal. Perfecto para portfolios y frontends.
        </td>
      </tr>

      <tr>
        <td><strong>Hosting compartido</strong></td>
        <td>Webs estáticas, CMS (WordPress), proyectos sencillos</td>
        <td>
          Barato, panel de control, subir archivos fácil, MySQL suele venir incluido.
        </td>
        <td>
          Poco control, no es lo ideal para ejecutar procesos Node/Express de forma continua.
        </td>
        <td>
          Cuando pasas de “deploy fácil” a entender carpetas del servidor, dominio y DNS con más realismo.
        </td>
      </tr>

      <tr>
        <td><strong>VPS</strong></td>
        <td>Apps completas: Node/Express, APIs, auth, proyectos tipo Bazar</td>
        <td>
          Control total, puedes instalar Nginx/Apache, PM2, bases de datos, subdominios, escalado.
        </td>
        <td>
          Requiere configuración y mantenimiento (Linux, seguridad, backups).
        </td>
        <td>
          Cuando tu proyecto “se ejecuta” (backend) y necesitas entorno real de empresa.
        </td>
      </tr>
    </tbody>
  </table>

  <p>
    <strong>Idea clave:</strong> Vercel/Netlify te enseña a publicar rápido un frontend.
    El hosting compartido te introduce al mundo del servidor y el dominio. El VPS es el paso
    profesional para aplicaciones con backend real (Node/Express) y base de datos.
  </p>
</div>
<p>
  <strong>Ruta típica de aprendizaje:</strong> Vercel/Netlify (frontend) → Hosting compartido (web clásica) → VPS (aplicación completa con backend).
</p>

    </div>
  );
};

export default SeccionTiposHosting;
