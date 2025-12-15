import { PracticeBox, WarningBox } from "./ContentBoxes";

const SeccionCarpetaDist = () => {
  return (
    <div className="chapter-card">
      <h2>
        3.4. Carpeta <code> dist </code>: compilar y subir a <code>public_html</code>
      </h2>

      <p>
        En proyectos modernos basados en frameworks (React, Vue, Angular, Vite),
        el código que escribe el desarrollador <strong>no se sube directamente</strong> al servidor.
        Primero se <strong>compila</strong> y se genera una carpeta <code>dist</code>, que contiene
        los archivos finales (HTML, CSS y JavaScript) listos para producción, porque el navegador
        no entiende JSX, imports modernos, TypeScript, etc. Recuerda: el navegador solo sabe
        interpretar <strong>HTML, CSS y JavaScript puro</strong>. El <code>index.html</code> será lo que
        se ve en el navegador.
      </p>

      <p>
        En cambio, si el proyecto es una web clásica basada únicamente en{" "}
        <strong>HTML, CSS y JavaScript</strong>, no es necesaria ninguna compilación:
        los propios archivos del proyecto se suben directamente a la carpeta pública del hosting.
      </p>

      <p>
        Aunque en este apartado usaremos <strong>Hostinger</strong> como ejemplo, el proceso es el mismo
        en <strong>cualquier hosting compartido</strong> (Raiola Networks, SiteGround, DonDominio, OVH, IONOS, etc.).
      </p>

      <p>
        Todos estos proveedores disponen de una <strong>carpeta pública</strong> asociada al dominio.
        Puede llamarse <code>public_html</code>, <code>httpdocs</code>, <code>www</code> u otro nombre similar,
        pero su función es siempre la misma: <strong>contener los archivos visibles desde Internet</strong>.
      </p>

      {/* 3.4.1 */}
      <details>
        <summary>
          <strong>3.4.1. Generar la carpeta </strong>
          <code>dist</code>
        </summary>

        <PracticeBox title="Comandos habituales (Vite/React)">
          <ol>
            <li>
              <strong>Instalar dependencias</strong> (si hace falta): <code>npm install</code>
            </li>
            <li>
              <strong>Compilar</strong>: <code>npm run build</code>
            </li>
            <li>
              Se crea la carpeta <code>dist/</code> en la raíz del proyecto.
            </li>
          </ol>
        </PracticeBox>
      </details>

      {/* 3.4.2 */}
      <details>
        <summary>
          <strong>3.4.2. ¿Cuándo existe la carpeta </strong>
          <code>dist</code>
          <strong> y qué se sube al hosting?</strong>
        </summary>

        <PracticeBox title="Cuadro comparativo">
          <table className="table">
            <thead>
              <tr>
                <th>Tipo de proyecto</th>
                <th>
                  ¿Existe carpeta <code>dist</code>?
                </th>
                <th>¿Qué se sube al hosting?</th>
                <th>Entorno habitual</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HTML / CSS / JS clásico</td>
                <td>❌ No</td>
                <td>
                  Archivos del proyecto directamente (<code>index.html</code>, <code>css/</code>, <code>js/</code>,{" "}
                  <code>img/</code>)
                </td>
                <td>Hosting compartido</td>
              </tr>
              <tr>
                <td>React / Vue / Angular</td>
                <td>✅ Sí</td>
                <td>
                  <strong>Contenido</strong> de la carpeta <code>dist/</code>
                </td>
                <td>Hosting compartido / VPS</td>
              </tr>
              <tr>
                <td>Vite (frontend)</td>
                <td>✅ Sí</td>
                <td>
                  <strong>Contenido</strong> de la carpeta <code>dist/</code>
                </td>
                <td>Hosting compartido / VPS</td>
              </tr>
              <tr>
                <td>Backend Node.js / Express</td>
                <td>❌ No</td>
                <td>
                  Código del backend (<code>server.js</code>, <code>routes/</code>, <code>controllers/</code>)
                </td>
                <td>VPS</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: "1rem" }}>
            <strong>Regla práctica:</strong> si has ejecutado <code>npm run build</code>, existe una carpeta{" "}
            <code>dist</code>. Si no has usado herramientas de compilación, no hay <code>dist</code>.
          </p>
        </PracticeBox>

        <WarningBox title="Ojo">
          <p>
            Si tu hosting compartido solo sirve archivos estáticos, esto funciona perfecto para: HTML/CSS/JS,
            Vite/React compilado, landing, manuales, etc. Pero <strong>NO ejecuta Node/Express</strong> (eso normalmente va en VPS).
          </p>
        </WarningBox>
      </details>

      {/* 3.4.3 */}
      <details>
        <summary>
          <strong>3.4.3. Subir </strong>
          <code>dist</code>
          <strong> a Hostinger (hosting compartido)</strong>
        </summary>

        <p>Hay dos formas típicas:</p>
        <ul>
          <li>
            <strong>Administrador de archivos</strong> (hPanel → Archivos → Administrador).
          </li>
          <li>
            <strong>FTP (FileZilla)</strong> con usuario/clave FTP del hosting.
          </li>
        </ul>

        <PracticeBox title="Pasos (lo más importante)">
          <ol>
            <li>
              Entra en <code>public_html/</code> del dominio.
            </li>
            <li>
              Borra o renombra lo anterior (por ejemplo, guarda una copia como <code>backup_old</code>).
            </li>
            <li>
              Sube <strong>el contenido</strong> de <code>dist/</code> (no “dist” dentro de <code>public_html</code>, sino
              sus archivos dentro).
            </li>
            <li>
              Verifica que exista <code>index.html</code> directamente dentro de <code>public_html/</code>.
            </li>
          </ol>
        </PracticeBox>
      </details>

      {/* 3.4.4 */}
      <details>
        <summary>
          <strong>3.4.4. ¿Existe una carpeta </strong>
          <code>public</code>
          <strong> en VPS?</strong>
        </summary>

        <p>
          En un VPS <strong>no hay una carpeta “public” obligatoria</strong>. La carpeta pública es la que tú definas
          como raíz del sitio en Nginx/Apache (document root). Puedes crear una estructura tipo:
        </p>

        <ul>
          <li>
            <code>/var/www/devcampus.es/dist</code> (si sirves el build)
          </li>
          <li>
            <code>/var/www/devcampus.es/public</code> (si quieres llamarla “public”)
          </li>
        </ul>

        <WarningBox title="Idea clave para recordar">
          <p>
            En hosting compartido, <code>public_html</code> es “el sitio”. En VPS, “el sitio” es la ruta que tú configures
            en el servidor web.
          </p>
        </WarningBox>
      </details>
    </div>
  );
};

export default SeccionCarpetaDist;
