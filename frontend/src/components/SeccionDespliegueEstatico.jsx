import { CodeBlock, WarningBox } from "./ContentBoxes";

const SeccionDespliegueEstatico = () => {
  return (
    <div className="chapter-card">
      <h2>3.8. Despliegue de una aplicación estática (HTML/CSS/JS)</h2>

      <details>
        <summary>
          <strong>Qué significa “estática” en despliegue</strong>
        </summary>
        <p>
          Una aplicación estática es la que se entrega al navegador como{" "}
          <strong>archivos</strong>: <code>.html</code>, <code>.css</code>,{" "}
          <code>.js</code>, imágenes, fuentes, etc. El servidor web (Nginx/Apache)
          solo tiene que <strong>servir esos archivos</strong>.
        </p>
        <p>
          Esto es distinto a un backend Node/Express, donde el servidor{" "}
          <strong>ejecuta código</strong> en cada petición.
        </p>
      </details>

      <details>
        <summary>
          <strong>Qué es la carpeta dist y por qué se usa</strong>
        </summary>
        <p>
          <code>dist</code> (distribution) es la carpeta que contiene la{" "}
          <strong>versión compilada</strong> y lista para producción del
          frontend. En proyectos con bundler (por ejemplo Vite/React o Vite con
          vanilla), el código fuente vive en <code>src/</code>, pero lo que se
          despliega no es <code>src</code>, sino el resultado final en{" "}
          <code>dist</code>.
        </p>

        <ul>
          <li>
            <strong>Entrada:</strong> <code>src/</code> (código fuente, módulos,
            componentes, imports)
          </li>
          <li>
            <strong>Salida:</strong> <code>dist/</code> (HTML/CSS/JS final,
            minificado, con rutas resueltas)
          </li>
        </ul>

        <p>
          La razón es técnica: el navegador no entiende imports y estructura de
          proyecto tal cual están en <code>src</code> (ni procesa bundling,
          minificación o hash de assets). El proceso de build genera archivos
          finales optimizados en <code>dist</code>.
        </p>

        <CodeBlock
          code={`# Ejemplo típico (Vite)
npm install
npm run build
# → crea /dist con los archivos listos para subir al servidor`}
        />
      </details>

      <details>
        <summary>
          <strong>Cómo se usa dist en un VPS (subdominio de alumno)</strong>
        </summary>
        <p>
          En un VPS, el despliegue estático consiste en copiar el contenido de{" "}
          <code>dist</code> a la carpeta pública del subdominio (por ejemplo{" "}
          <code>/var/www/alumno1.dominio.com/public_html</code> o equivalente
          según el servidor).
        </p>

        <p>
          Lo importante es que el servidor apunte al directorio donde están los{" "}
          <strong>archivos generados</strong> (el contenido de <code>dist</code>)
          y no al código fuente.
        </p>

        <CodeBlock
          code={`# Esquema de despliegue
tu-proyecto/
  src/
  package.json
  dist/           ← esto es lo que se sube

# En el servidor (ejemplo):
/var/www/alumno1.dominio.com/public_html/
  index.html
  assets/
  ...`}
        />
      </details>

      <details>
  <summary>
    <strong>Relación con Vercel y Netlify</strong>
  </summary>

  <p>
    Vercel y Netlify automatizan el despliegue de aplicaciones estáticas siguiendo
    el mismo principio que en un VPS: <strong>publicar el resultado del build</strong>,
    no el código fuente.
  </p>

  <p>
    En ambos casos, el despliegue se realiza conectando el repositorio Git
    (GitHub, GitLab o Bitbucket) con la plataforma. A partir de ese momento, cada
    <code> git push</code> a la rama principal dispara un proceso automático de
    build y publicación.
  </p>

  <p>
    <strong>Flujo estándar de despliegue desde Git:</strong>
  </p>

  <ul>
    <li>
      Se conecta el repositorio a Vercel o Netlify
    </li>
    <li>
      Se configura el comando de build (por ejemplo <code>npm run build</code>)
    </li>
    <li>
      Se indica la carpeta de salida (normalmente <code>dist</code>)
    </li>
    <li>
      Cada <code>push</code> ejecuta el build y publica la nueva versión
    </li>
  </ul>

  <p>
    En proyectos con Vite, React o frontend puro HTML/CSS/JS, el proceso de build
    genera los archivos finales en <code>dist</code>, que son los que la
    plataforma sirve como sitio estático.
  </p>

  

  <ul>
    <li>
      En local: <code>npm run build</code> → genera <code>dist</code>
    </li>
    <li>
      En Vercel / Netlify: pipeline automático → genera y publica el build
    </li>
    <li>
      En VPS: el build se genera y se copia manualmente al directorio público
    </li>
  </ul>

  <p>
    El modelo mental es el mismo en todos los casos:
    <strong>lo que se despliega es siempre el resultado del build</strong>,
    nunca el proyecto fuente.
  </p>
</details>


      <details>
        <summary>
          <strong>
            Por qué Vercel/Netlify no encajan bien con Node + SQL tradicional
          </strong>
        </summary>
        <p>
          Vercel y Netlify son excelentes para frontends estáticos y para APIs
          pequeñas con funciones (serverless). El problema aparece cuando el
          backend necesita comportarse como un servidor Node/Express{" "}
          <strong>siempre disponible</strong> y además mantener conexión estable
          con una base de datos SQL (MySQL/Postgres) con pool de conexiones.
        </p>

        <p>
          En entornos serverless, las ejecuciones son efímeras: pueden levantarse
          y apagarse, y esto provoca problemas típicos con bases de datos como{" "}
          <strong>fugas o acumulación de conexiones</strong>, y necesidad de
          estrategias especiales de pooling. Además, existen límites de
          ejecución/tamaño/tiempo en funciones que condicionan tareas “de
          servidor” más clásicas.{" "}
        </p>

        <WarningBox title="Consecuencia práctica">
          <p>
            Si el backend es un Express “normal” + MySQL/Postgres con pool, lo
            habitual es desplegarlo como <strong>servicio web</strong> (PaaS o
            VPS), no como funciones dispersas.
          </p>
        </WarningBox>
      </details>

      <details>
        <summary>
          <strong>
            Plataformas con opciones gratuitas para backend + SQL y sus
            dificultades
          </strong>
        </summary>

        <p>
          Existen plataformas donde puedes desplegar un backend Node/Express con
          coste cero o muy bajo, pero casi siempre con limitaciones (recursos,
          suspensión por inactividad, cuotas, o SQL solo en Postgres).
        </p>

        <div className="chapter-card">
          <h3>Render</h3>
          <ul>
            <li>
              Permite desplegar <strong>web services</strong> (Node/Express) y
              también bases de datos gestionadas (Postgres) con planes gratuitos
              sujetos a límites.
            </li>
            <li>
              Dificultades típicas: horas mensuales, suspensión/pausa al agotar
              cuota o por inactividad, recursos limitados, y base de datos gratis
              con límites de tamaño/condiciones.
            </li>
          </ul>
        </div>

        <div className="chapter-card">
          <h3>Railway</h3>
          <ul>
            <li>
              Despliegue sencillo de servicios, pero el “gratis” suele funcionar
              como créditos/periodos, y puede requerir pasar a plan de pago para
              mantener servicios.
            </li>
            <li>
              Dificultades: control de gasto, servicios que paran al acabarse el
              crédito, y coste si se mantiene siempre activo.
            </li>
          </ul>
        </div>

        <div className="chapter-card">
          <h3>Supabase (Postgres)</h3>
          <ul>
            <li>
              Ofrece Postgres gestionado con plan gratuito con límites (tamaño,
              egress, pausas por inactividad, número de proyectos).
            </li>
            <li>
              Dificultad principal: es Postgres (no MySQL) y el proyecto puede
              pausarse si no se usa durante un tiempo.
            </li>
          </ul>
        </div>

        <div className="chapter-card">
          <h3>Neon (Postgres)</h3>
          <ul>
            <li>
              Postgres “serverless” con plan gratuito (en general pensado para
              desarrollo/staging).
            </li>
            <li>
              Dificultades: “wake up” (latencia inicial al reactivarse),
              limitaciones de recursos y enfoque Postgres.
            </li>
          </ul>
        </div>

      
      </details>
      
    </div>
    
  );
};

export default SeccionDespliegueEstatico;
