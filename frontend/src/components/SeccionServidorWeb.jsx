import { ActivityBox, PracticeBox, CodeBlock, WarningBox } from "./ContentBoxes";

const SeccionServidorWeb = () => {
  return (
    <div className="chapter-card">
      <h2>3.5. Servidor web (Nginx / Apache), puertos y rutas</h2>

      {/* 3.5.1 */}
      <details>
        <summary>
          <strong>3.5.1. ¿Qué es un servidor web y por qué es imprescindible?</strong>
        </summary>

        <p>
          Un <strong>servidor web</strong> (como <strong>Nginx</strong> o{" "}
          <strong>Apache</strong>) es el software que se encarga de{" "}
          <strong>recibir las peticiones del navegador</strong> y devolver una
          respuesta (HTML, CSS, JS, JSON, etc.).
        </p>

        <p>Cuando un usuario escribe una dirección como:</p>

        <CodeBlock
          language="text"
          code={`https://alumno1.devcampus.es`}
        />

        <p>
          esa petición llega al <strong>servidor web del VPS</strong>, no
          directamente a tu proyecto. El servidor web decide:
        </p>

        <ul>
          <li>Qué dominio o subdominio se está usando</li>
          <li>Qué carpeta o aplicación responde</li>
          <li>Si la petición va a un frontend o a un backend</li>
        </ul>

        <WarningBox title="Idea clave">
          <p>
            El navegador <strong>nunca habla directamente con Node.js</strong>.
            Siempre pasa primero por el servidor web.
          </p>
        </WarningBox>
      </details>

      {/* 3.5.2 */}
      <details>
        <summary>
          <strong>3.5.2. Puertos: 80, 443 y los puertos internos</strong>
        </summary>

        <p>
          Un servidor puede escuchar en muchos <strong>puertos</strong>, pero en
          la web hay dos fundamentales:
        </p>

        <PracticeBox title="Puertos importantes">
          <ul>
            <li>
              <strong>Puerto 80</strong> → HTTP (sin cifrar)
            </li>
            <li>
              <strong>Puerto 443</strong> → HTTPS (con certificado SSL)
            </li>
          </ul>
        </PracticeBox>

        <p>
          Cuando accedes a una web, el navegador siempre se conecta al{" "}
          <strong> puerto 80 o 443</strong>. Sin embargo, aplicaciones como
          Node.js suelen ejecutarse en puertos internos:
        </p>

        <CodeBlock
          language="text"
          code={`3000
4000
5173`}
        />

        <p>
          Estos puertos <strong>no deben ser visibles</strong> desde Internet.
          El servidor web se encarga de recibir la petición y reenviarla
          internamente.
        </p>

        <WarningBox title="Regla profesional">
          <p>
            Solo Nginx/Apache escuchan en 80 y 443. Node.js escucha en puertos
            internos.
          </p>
        </WarningBox>
      </details>

      {/* 3.5.3 */}
      <details>
        <summary>
          <strong>3.5.3. Dominios, subdominios y server blocks</strong>
        </summary>

        <p>
          En un VPS, cada dominio o subdominio se configura mediante un{" "}
          <strong>server block</strong> (Nginx) o <strong>virtual host</strong>{" "}
          (Apache).
        </p>

        <p>Cada bloque indica:</p>

        <ul>
          <li>
            Qué dominio responde (<code>server_name</code>)
          </li>
          <li>En qué carpeta están los archivos</li>
          <li>Cómo se gestionan las peticiones</li>
        </ul>

        <PracticeBox title="Ejemplo conceptual (simplificado)">
          <CodeBlock
            language="nginx"
            code={`server {
  server_name alumno1.devcampus.es;
  root /var/www/alumno1/dist;
}`}
          />
        </PracticeBox>

        <p>
          Esto significa:{" "}
          <strong>
            cuando alguien entra en ese subdominio, se sirven los archivos de esa
            carpeta
          </strong>
          .
        </p>
      </details>

      {/* 3.5.4 */}
      <details>
        <summary>
          <strong>3.5.4. El despliegue del alumno en DevCampus</strong>
        </summary>

        <p>
          En DevCampus, los alumnos <strong>no configuran el servidor web</strong>.
          Esa parte ya está preparada para vosotros.
        </p>

        <p>Cada alumno recibe:</p>

        <ul>
          <li>
            Un <strong>subdominio propio</strong> (ej: alumnoX.devcampus.es)
          </li>
          <li>
            Una <strong>carpeta asignada</strong> en el VPS
          </li>
          <li>Un servidor web ya configurado</li>
        </ul>

        <p>El trabajo del alumno consiste en:</p>

        <PracticeBox title="Qué haces tú como alumno">
          <ol>
            <li>
              Compilar tu frontend (carpeta <code>dist</code>)
            </li>
            <li>Subirlo a la carpeta asignada</li>
            <li>Comprobar que se ve en tu subdominio</li>
          </ol>
        </PracticeBox>

        <ActivityBox title="Importante">
          <p>
            Aunque no configures Nginx directamente,{" "}
            <strong>entiendes cómo funciona</strong>. Eso te convierte en un
            desarrollador que sabe desplegar, no solo programar.
          </p>
        </ActivityBox>
      </details>

      {/* 3.5.5 */}
      <details>
        <summary>
          <strong>3.5.5. Mentalidad profesional</strong>
        </summary>

        <p>En un entorno real de empresa:</p>

        <ul>
          <li>No todos configuran servidores</li>
          <li>Pero todos entienden la arquitectura</li>
          <li>Y saben cómo desplegar correctamente</li>
        </ul>

        <WarningBox title="Clave UC0493_3">
          <p>
            No se evalúa que sepas montar Nginx desde cero, sino que{" "}
            <strong>entiendas cómo se conecta dominio, servidor y aplicación</strong>.
          </p>
        </WarningBox>
      </details>
    </div>
  );
};

export default SeccionServidorWeb;
