// src/pages/Git.jsx
import NavigationButtons from "../components/NavigationButtons";
import { CodeBlock, WarningBox, PracticeBox } from "../components/ContentBoxes";

const Git = () => {
  return (
    <div className="git">
      <h1>7. Control de Versiones con Git</h1>

      {/* =========================================================
         SUMMARY GLOBAL
      ========================================================== */}
      <details open>
        <summary>🟦 Summary · ¿Por qué aprender Git?</summary>

        <p>
          En el desarrollo de aplicaciones web <strong>no trabajamos con una sola versión</strong> del
          proyecto, sino con muchas versiones a lo largo del tiempo.
        </p>

        <p>Cada vez que:</p>
        <ul>
          <li>una funcionalidad funciona,</li>
          <li>se corrige un error importante,</li>
          <li>se añade una mejora estable,</li>
        </ul>

        <p>
          debemos <strong>guardar ese estado del proyecto</strong> para poder:
        </p>
        <ul>
          <li>volver atrás si algo falla,</li>
          <li>comparar cambios,</li>
          <li>trabajar en equipo sin pisarnos el código.</li>
        </ul>

        <p>
          👉 <strong>Git es la herramienta estándar</strong> que permite gestionar esas versiones de
          forma profesional.
        </p>

        <p>
          <strong>Objetivo pedagógico clave:</strong> un desarrollador profesional no “guarda
          archivos”: guarda <strong>versiones funcionales</strong> de su proyecto.
        </p>

        <p>En esta lección aprenderás:</p>
        <ul>
          <li>qué es Git y cómo funciona,</li>
          <li>cómo guardar versiones funcionales (commits),</li>
          <li>cómo crear y usar ramas,</li>
          <li>cómo trabajar con Git en equipos y con repositorios remotos (GitHub).</li>
        </ul>
      </details>

      {/* =========================================================
         SECTION 1
      ========================================================== */}
      <details>
        <summary>🟦 Section 1 · ¿Qué es Git y por qué se usa en proyectos web?</summary>

        <p>
          Git es un <strong>sistema de control de versiones</strong>. Su función es registrar el
          historial de cambios de un proyecto (código, documentación y configuraciones) para poder:
        </p>

        <ul>
          <li>volver a estados anteriores con seguridad,</li>
          <li>trabajar en paralelo sin pisar cambios,</li>
          <li>revisar qué se cambió, cuándo y por quién,</li>
          <li>colaborar mediante repositorios remotos (GitHub, GitLab, Bitbucket).</li>
        </ul>

        <p>
          En proyectos web con Node/Express, Git se usa tanto para el desarrollo local como para
          despliegues basados en repositorio (Vercel/Netlify) y para mantener trazabilidad en entornos
          de servidor (VPS).
        </p>

        <p>
          <strong>Idea clave para el alumnado:</strong> Git no guarda archivos sueltos, guarda{" "}
          <strong>estados del proyecto</strong>.
        </p>

        <p>
          Cada estado importante se llama <strong>commit</strong> y representa:
        </p>
        <ul>
          <li>un proyecto que funciona,</li>
          <li>con un mensaje que explica qué se ha hecho.</li>
        </ul>
      </details>

      <details open>
  <summary>🟦 Entender Git desde cero (qué es local, qué es remoto y cómo encaja todo)</summary>

  <p>
    Git genera muchas dudas al principio porque intervienen varias herramientas distintas
    que se complementan entre sí. Por eso es importante dejarlo claro desde el inicio:
    <strong>Git, Git Bash, GitHub y GitLab NO son lo mismo</strong>, aunque trabajan juntos.
  </p>

  <p>
    Esta sección explica paso a paso cómo funciona Git de verdad, con mentalidad de clase
    y ejemplos reales, para evitar confusiones habituales.
  </p>

  <hr />

  <h3>🧩 Git, Git Bash, GitHub y GitLab: qué es cada cosa</h3>

  <p>
    <strong>Git</strong> es un <strong>sistema de control de versiones</strong>.
    Su función es guardar el historial de un proyecto y permitir volver a estados
    anteriores de forma segura.
  </p>

  <p>
    <strong>Git Bash</strong> no es Git. Es una <strong>terminal</strong> que se usa en Windows
    para poder ejecutar comandos Git, ya que Git funciona de forma nativa en Linux y macOS.
  </p>

  <p>
    Desde Git Bash se escriben comandos como:
  </p>

  <pre>
    <code>{`git init
git add .
git commit
git push`}</code>
  </pre>

  <p>
    <strong>Idea clave:</strong> Git Bash es solo el lugar donde escribes los comandos.
    No guarda repositorios en Internet ni es una plataforma web.
  </p>

  <p>
    <strong>GitHub</strong> y <strong>GitLab</strong> son <strong>plataformas web</strong>
    que alojan repositorios Git en remoto.
  </p>

  <ul>
    <li>GitHub es la más usada en entornos educativos y open source.</li>
    <li>GitLab es muy usada en empresas y permite CI/CD más integrado.</li>
  </ul>

  <p>
    A nivel básico, <strong>GitHub y GitLab hacen lo mismo</strong>: alojar repositorios Git.
  </p>

  <p>
    <strong>Frase clave:</strong> Git Bash es una terminal local; GitHub y GitLab son plataformas
    online que usan Git.
  </p>

  <hr />

  <h3>✅ Git es LOCAL</h3>

  <p>
    Git es una herramienta <strong>local</strong>. Se instala en tu ordenador y trabaja
    dentro de una carpeta de tu equipo.
  </p>

  <p>
    Cuando ejecutas:
  </p>

  <pre>
    <code>{`git init`}</code>
  </pre>

  <p>
    Git crea una carpeta oculta llamada <code>.git</code>. Esa carpeta es el corazón de Git.
  </p>

  <pre>
    <code>{`mi-proyecto/
├── .git/
├── index.html
├── app.js`}</code>
  </pre>

  <p>
    Dentro de <code>.git</code> se guardan:
  </p>

  <ul>
    <li>todas las versiones del proyecto (commits),</li>
    <li>todas las ramas,</li>
    <li>todo el historial completo.</li>
  </ul>

  <p>
    <strong>Nada se sube a Internet por defecto.</strong>
  </p>

  <hr />

  <h3>⏱️ ¿Cuándo guarda Git mis versiones?</h3>

  <p>
    Git <strong>NO guarda versiones automáticamente</strong>.
  </p>

  <p>
    Git <strong>NO guarda versiones</strong> cuando:
  </p>

  <ul>
    <li>guardas un archivo (Ctrl + S),</li>
    <li>escribes código,</li>
    <li>cierras el editor,</li>
    <li>apagas el ordenador,</li>
    <li>ejecutas el proyecto,</li>
    <li>haces <code>git add</code>.</li>
  </ul>

  <p>
    <strong>Git solo guarda una versión cuando haces un commit.</strong>
  </p>

  <pre>
    <code>{`git commit -m "Versión funcional"`}</code>
  </pre>

  <p>
    En ese momento Git:
  </p>

  <ul>
    <li>crea una versión del proyecto,</li>
    <li>la guarda en <code>.git</code>,</li>
    <li>la añade al historial,</li>
    <li>le pone un mensaje descriptivo.</li>
  </ul>

  <p>
    <strong>Cada commit es una versión real.</strong>
  </p>

  <hr />

  <h3>🧠 Flujo exacto de trabajo</h3>

  <ol>
    <li>Modificas archivos (working tree).</li>
    <li>Preparas cambios con <code>git add</code> (staging).</li>
    <li>Guardas la versión con <code>git commit</code> (historial local).</li>
  </ol>

  <p>
    <strong>git add prepara, git commit guarda.</strong>
  </p>

  <hr />

  <h3>🌐 ¿Cuándo entra GitHub?</h3>

  <p>
    GitHub es <strong>opcional</strong>. Git funciona perfectamente sin Internet.
  </p>

  <p>
    Usamos GitHub cuando queremos:
  </p>

  <ul>
    <li>compartir el proyecto,</li>
    <li>trabajar en equipo,</li>
    <li>tener copia de seguridad,</li>
    <li>desplegar automáticamente.</li>
  </ul>

  <p>
    Cuando ejecutas:
  </p>

  <pre>
    <code>{`git push origin main`}</code>
  </pre>

  <p>
    Git envía los commits locales a GitHub.
    <strong>GitHub no crea versiones</strong>, solo recibe las que tú ya creaste con
    <code>git commit</code>.
  </p>

  <hr />

  <h3>📥 fetch, pull y push: sin confusión</h3>

  <ul>
    <li>
      <strong><code>git commit</code></strong> → guarda versiones en tu ordenador.
    </li>
    <li>
      <strong><code>git push</code></strong> → sube esas versiones a GitHub.
    </li>
    <li>
      <strong><code>git fetch</code></strong> → descarga información del remoto y la guarda
      en referencias como <code>origin/main</code>, sin tocar tu código.
    </li>
    <li>
      <strong><code>git pull</code></strong> → descarga e integra cambios (fetch + merge).
    </li>
  </ul>

  <p>
    <strong>git fetch es seguro</strong>: no modifica archivos ni ramas locales.
  </p>

  <hr />

  <h3>🧠 Analogía final (muy importante)</h3>

  <ul>
    <li>📒 Git → tu cuaderno de versiones (en tu mesa).</li>
    <li>📸 Commit → hacer una foto del cuaderno.</li>
    <li>🗄️ GitHub → archivador común de la clase.</li>
    <li>📤 Push → llevar la foto al archivador.</li>
  </ul>

  <hr />

  <h3>🎓 Frases clave para examen</h3>

  <ul>
    <li>
      Git es un sistema de control de versiones local.
    </li>
    <li>
      Git guarda versiones solo cuando se hace un commit.
    </li>
    <li>
      GitHub se usa para compartir repositorios Git en Internet.
    </li>
    <li>
      git commit guarda en local; git push comparte en remoto.
    </li>
  </ul>

  <p>
    <strong>Mentalidad profesional:</strong> si algo funciona, se versiona.
    Si además debe compartirse o desplegarse, entonces se sube.
  </p>
</details>


      {/* =========================================================
         SECTION 2
      ========================================================== */}
      <details>
        <summary>🟦 Section 2 · Conceptos esenciales (repo, commit, rama, remoto, staging, HEAD)</summary>

        <div className="chapter-card">
          <h3>Repositorio, commit, rama y remoto</h3>
          <ul>
            <li>
              <strong>Repositorio (repo):</strong> carpeta del proyecto con historial de cambios
              gestionado por Git.
            </li>
            <li>
              <strong>Commit:</strong> “foto” o punto de control con cambios concretos y un mensaje
              descriptivo.
            </li>
            <li>
              <strong>Rama (branch):</strong> línea paralela de trabajo. Permite desarrollar sin tocar
              la rama principal.
            </li>
            <li>
              <strong>Remoto (remote):</strong> repositorio alojado (GitHub/GitLab) para compartir y
              sincronizar.
            </li>
          </ul>
        </div>

        <div className="chapter-card">
          <h3>Working tree, staging y HEAD</h3>
          <ul>
            <li>
              <strong>Working tree:</strong> archivos tal y como están en tu carpeta (cambios sin
              preparar).
            </li>
            <li>
              <strong>Staging (index):</strong> “zona de preparación” con los cambios que entrarán en
              el próximo commit.
            </li>
            <li>
              <strong>HEAD:</strong> commit actual en el que estás trabajando (puntero a tu estado
              actual).
            </li>
          </ul>
        </div>

        <CodeBlock
          code={`# Ver estado actual del repo
git status

# Ver historial de commits (resumen)
git log --oneline --decorate --graph --all`}
        />
      </details>

      {/* =========================================================
         SECTION 3
      ========================================================== */}
      <details>
        <summary>🟦 Section 3 · Repositorio Git: local vs remoto</summary>

        <p>
          Un <strong>repositorio Git</strong> es el lugar donde Git guarda el código, el historial de
          versiones y las ramas.
        </p>

        <p>Tipos de repositorio:</p>
        <ul>
          <li>
            <strong>Local</strong> → vive en tu ordenador.
          </li>
          <li>
            <strong>Remoto</strong> → vive en plataformas como GitHub, GitLab o Bitbucket.
          </li>
        </ul>

        <p>
          En clase empezaremos siempre por: ✔️ <strong>Repositorio local</strong>
        </p>
      </details>

      {/* =========================================================
         SECTION 4
      ========================================================== */}
      <details>
        <summary>🟦 Section 4 · Flujo básico de trabajo con Git</summary>

        <p>El ciclo de trabajo profesional es siempre el mismo:</p>
        <ol>
          <li>Modificar el código</li>
          <li>Comprobar que funciona</li>
          <li>Guardar una versión con Git</li>
          <li>Continuar desarrollando</li>
        </ol>

        <CodeBlock
          code={`git init           # Inicializa un repositorio
git status         # Ver el estado del proyecto
git add .          # Prepara los cambios
git commit -m ""   # Guarda una versión`}
        />

        <p>
          <strong>Regla de oro:</strong> nunca se hace un commit si el proyecto no funciona.
        </p>
      </details>

      {/* =========================================================
         SECTION 5
      ========================================================== */}
      <details>
        <summary>🟦 Section 5 · Inicialización del repositorio y primer flujo de commits</summary>

        <p>
          Un flujo mínimo y correcto consiste en: inicializar, ignorar lo que no debe versionarse,
          preparar cambios (staging) y crear commits con mensajes significativos.
        </p>

        <CodeBlock
          code={`# 1) Inicializar repo en la carpeta del proyecto
git init

# 2) Crear .gitignore (importante en Node)
#    (ver ejemplo abajo)

# 3) Preparar cambios para commit
git add .

# 4) Crear commit
git commit -m "Inicializa proyecto y estructura base"`}
        />

        <PracticeBox title="Ejemplo recomendado de .gitignore (Node/Express)">
          <CodeBlock
            code={`# Dependencias
node_modules/

# Entorno y secretos
.env
.env.*.local

# Logs
logs/
*.log

# Builds (si procede)
dist/
build/

# Cache
.cache/
.tmp/

# IDE
.vscode/
.idea/

# Sistema
.DS_Store`}
          />
        </PracticeBox>

        <WarningBox title="Regla operativa">
          <p>
            Un commit debe representar un cambio coherente: una funcionalidad pequeña, una corrección,
            una mejora concreta. Evita commits “todo junto” con cambios mezclados.
          </p>
        </WarningBox>
      </details>

      {/* =========================================================
         SECTION 6
      ========================================================== */}
      <details>
        <summary>🟦 Section 6 · Commits: guardar versiones funcionales</summary>

        <p>
          Un <strong>commit</strong> es una foto del proyecto en un momento concreto. Debe representar
          un estado estable.
        </p>

        <h3>✔️ Buen commit</h3>
        <ul>
          <li>Código funcional</li>
          <li>Cambios claros</li>
          <li>Mensaje descriptivo</li>
        </ul>

        <p>Ejemplos correctos:</p>
        <CodeBlock
          code={`git commit -m "Añade endpoint GET /productos"
git commit -m "Corrige validación de email en registro"
git commit -m "Configura CORS para dominio de producción"
git commit -m "Documenta controladores con JSDoc"
git commit -m "Añadida conexión a la base de datos"
git commit -m "Añadida validación del formulario de login"`}
        />

        <h3>❌ Mal commit</h3>
        <ul>
          <li>Código roto</li>
          <li>Cambios sin probar</li>
          <li>Mensajes poco claros</li>
        </ul>

        <p>Ejemplos incorrectos:</p>
        <ul>
          <li>commit -m "cambios"</li>
          <li>commit -m "pruebas"</li>
          <li>commit -m "asdf"</li>
          <li>commit -m "final"</li>
        </ul>

        <div className="chapter-card">
          <h3>Qué evita un buen commit</h3>
          <ul>
            <li>Commits con “arreglo cosas”, “update”, “cambios” sin contexto.</li>
            <li>Un único commit con múltiples funcionalidades mezcladas.</li>
            <li>Historial imposible de auditar en un entorno profesional.</li>
          </ul>
        </div>
      </details>

      {/* =========================================================
         SECTION 7
      ========================================================== */}
      <details>
        <summary>🟦 Section 7 · Ramas: main, develop y feature</summary>

        <p>
          Las <strong>ramas</strong> permiten experimentar, desarrollar nuevas funcionalidades o
          arreglar errores sin afectar a la versión principal del proyecto.
        </p>

        <p>
          Por convención, la rama principal se llama <code>main</code> (o <code>master</code>) y debe
          contener siempre la versión <strong>estable</strong> del proyecto.
        </p>

        <p>
          En proyectos individuales y educativos, un patrón habitual es:
        </p>
        <ul>
          <li>
            <strong>main:</strong> rama estable (lo que “funciona” y se puede desplegar).
          </li>
          <li>
            <strong>develop:</strong> integración de cambios antes de pasar a main (opcional).
          </li>
          <li>
            <strong>feature/*:</strong> ramas para nuevas funcionalidades o tareas concretas.
          </li>
        </ul>

        <h3>Crear y usar ramas</h3>
        <CodeBlock
          code={`git branch nombre-rama      # Crear rama
git checkout nombre-rama    # Cambiar de rama

# O en un solo paso:
git checkout -b nombre-rama`}
        />

        <p>Ejemplos:</p>
        <CodeBlock
          code={`# Ejemplo simple para alumnos
git checkout -b feature-login

# Convención alternativa
git checkout -b feature/login`}
        />

        <div className="chapter-card">
          <h3>Convención de nombres recomendada</h3>
          <ul>
            <li>
              <code>feature/login</code>, <code>feature/pedidos</code>
            </li>
            <li>
              <code>fix/cors</code>, <code>fix/validacion</code>
            </li>
            <li>
              <code>docs/readme</code>, <code>chore/deps</code>
            </li>
          </ul>
        </div>
      </details>

      {/* =========================================================
         SECTION 8
      ========================================================== */}
      <details>
        <summary>🟦 Section 8 · ¿Qué es una rama feature y por qué se usa?</summary>

        <p>
          <strong>feature</strong> (o <strong>features</strong>) <strong>NO</strong> es una rama
          especial de Git. Es un nombre por convención para indicar que esa rama sirve para desarrollar
          una <strong>nueva funcionalidad</strong>.
        </p>

        <p>
          <strong>Idea clave:</strong> una feature es una funcionalidad nueva del proyecto.
        </p>

        <p>Ejemplos de features:</p>
        <ul>
          <li>Login de usuarios</li>
          <li>Carrito de la compra</li>
          <li>Formulario de contacto</li>
          <li>Panel de administración</li>
          <li>Sistema de pedidos</li>
        </ul>

        <p>
          <strong>Regla profesional:</strong> las nuevas funcionalidades no se desarrollan directamente
          en <code>main</code>.
        </p>

        <p>¿Por qué se usa una rama feature?</p>
        <ul>
          <li>Permite trabajar sin romper la versión estable (main).</li>
          <li>Permite probar con tranquilidad.</li>
          <li>Permite borrar la rama si algo sale mal.</li>
        </ul>

        <h3>Convenciones habituales de nombres</h3>
        <ul>
          <li>
            <strong>Opción 1 (muy clara):</strong> <code>feature-login</code>, <code>feature-carrito</code>
            , <code>feature-pedidos</code>
          </li>
          <li>
            <strong>Opción 2 (muy usada):</strong> <code>feature/login</code>, <code>feature/carrito</code>
            , <code>feature/pedidos</code>
          </li>
        </ul>

        <h3>❌ Mala práctica</h3>
        <ul>
          <li>
            <code>rama1</code>
          </li>
          <li>
            <code>pruebas</code>
          </li>
          <li>
            <code>cosas</code>
          </li>
        </ul>

        <h3>Ejemplo práctico paso a paso</h3>
        <CodeBlock
          code={`# 1) Partimos de main estable
git checkout main

# 2) Creamos una rama para la funcionalidad
git checkout -b feature-login

# 3) Desarrollamos y cuando funciona → commit
git add .
git commit -m "Añadido formulario y validación de login"`}
        />

        <p>Después, cuando esté listo, lo fusionamos con main (lo verás en la siguiente sección).</p>

        <p>
          <strong>¿feature o features?</strong> ambas son válidas. Lo importante no es el nombre, sino
          la idea: ✔️ una rama = una funcionalidad.
        </p>

        <p>
          <strong>Frase clave para evaluación:</strong> una rama feature se utiliza para desarrollar
          una funcionalidad concreta sin afectar a la rama principal del proyecto.
        </p>
      </details>

      {/* =========================================================
         SECTION 9
      ========================================================== */}
      <details>
        <summary>🟦 Section 9 · Merge: integrar cambios de una rama</summary>

        <p>
          La orden <strong>git merge</strong> sirve para unir los cambios de una rama con otra.
        </p>

        <p>
          Dicho de forma sencilla: <strong>merge incorpora a una rama los cambios que se han hecho en otra</strong>.
        </p>

        <p>
          <strong>Regla fundamental:</strong> el merge siempre se hace desde la rama que recibe los cambios.
        </p>

        <p>Ejemplo típico:</p>
        <ul>
          <li>
            <code>main</code> es la versión estable del proyecto
          </li>
          <li>
            <code>feature-login</code> es la rama donde se desarrolló el login
          </li>
        </ul>

        <CodeBlock
          code={`# 1) Nos colocamos en la rama destino (la que RECIBE)
git checkout main

# 2) (Opcional con remoto) Trae cambios antes de fusionar
git pull

# 3) Fusiona la rama feature en main
git merge feature-login`}
        />

        <h3>¿Qué hace exactamente merge?</h3>
        <ul>
          <li>No borra ramas</li>
          <li>No elimina código</li>
          <li>Copia e integra los cambios</li>
          <li>Mantiene el historial del proyecto</li>
        </ul>

        <p>
          Después del merge, si todo va bien, la rama feature ya no es necesaria. Puedes borrarla:
        </p>
        <CodeBlock code={`git branch -d feature-login`} />

        <h3>Tipos de merge (nivel básico)</h3>
        <ul>
          <li>
            <strong>Merge automático:</strong> Git une cambios sin conflictos.
          </li>
          <li>
            <strong>Merge con conflictos:</strong> dos ramas modifican la misma zona y Git pide ayuda.
          </li>
        </ul>

        <p>
          <strong>Resumen mental:</strong> Rama = zona de trabajo segura · Feature = funcionalidad nueva · Merge = traer lo
          que funciona a <code>main</code>.
        </p>
      </details>

      {/* =========================================================
         SECTION 10
      ========================================================== */}
      <details>
        <summary>🟦 Section 10 · Conflictos de merge (qué son y cómo resolverlos)</summary>

        <p>
          Un conflicto ocurre cuando dos ramas modifican la misma línea del mismo archivo. Git detiene el merge y exige
          resolverlo manualmente.
        </p>

        <p>Git suele marcar el conflicto así:</p>
        <CodeBlock
          code={`<<<<<<< HEAD
código de main
=======
código de feature
>>>>>>> feature-login`}
        />

        <WarningBox title="Conflictos: criterio de resolución">
          <ul>
            <li>Revisar el objetivo funcional (qué debe quedar al final).</li>
            <li>Resolver archivo a archivo, probando el proyecto tras resolver.</li>
            <li>Hacer commit de resolución con mensaje específico.</li>
          </ul>
        </WarningBox>

        <CodeBlock
          code={`# Tras resolver conflictos en archivos:
git add .
git commit -m "Resuelve conflictos de merge en login"`}
        />
      </details>

      {/* =========================================================
     SECTION 11
========================================================== */}
<details>
  <summary>🟦 Section 11 · Repositorio remoto: GitHub y sincronización (push, fetch y pull)</summary>

  <p>
    Un remoto (GitHub/GitLab) permite guardar el proyecto fuera del equipo y trabajar en
    sincronización. La rama local y la rama remota deben mantenerse alineadas para evitar
    conflictos y pérdida de trabajo.
  </p>

  <p>
    En Git, la sincronización con un repositorio remoto se realiza principalmente mediante
    tres comandos: <code>git push</code>, <code>git fetch</code> y <code>git pull</code>.
  </p>

  <CodeBlock
    code={`# Asociar remoto (ejemplo GitHub)
git remote add origin https://github.com/usuario/proyecto.git

# Ver remotos configurados
git remote -v

# Subir rama main por primera vez
git push -u origin main

# Subir una rama feature
git push -u origin feature/login

# Descargar e integrar cambios del remoto
git pull`}
  />

  <div className="chapter-card">
    <h3>🚀 git push · Subir tus cambios al remoto</h3>
    <p>
      <code>git push</code> envía tus commits locales al repositorio remoto.
    </p>
    <p>
      Se utiliza cuando tu trabajo está probado y listo para ser compartido con el equipo
      o para disparar un despliegue automático.
    </p>
    <p>
      <strong>Idea mental:</strong> “Lo que he hecho en mi ordenador, súbelo al servidor”.
    </p>
  </div>

  <div className="chapter-card">
    <h3>📥 git fetch · Descargar cambios sin tocar tu código</h3>

    <p>
      <code>git fetch</code> descarga los cambios del repositorio remoto pero <strong>NO</strong>
      los integra en tu rama actual ni modifica tus archivos.
    </p>

    <p>
      Los cambios descargados se guardan internamente en Git, en las llamadas
      <strong> ramas remotas</strong>, con nombres como:
    </p>

    <ul>
      <li><code>origin/main</code></li>
      <li><code>origin/feature-login</code></li>
    </ul>

    <p>
      Estas ramas <strong>no son ramas de trabajo</strong>. Son referencias que indican
      cómo está el remoto en ese momento.
    </p>

    <p>
      <strong>Muy importante:</strong> tras un <code>git fetch</code>:
    </p>

    <ul>
      <li>tu rama local no cambia,</li>
      <li>tus archivos no se modifican,</li>
      <li>tu proyecto sigue exactamente igual.</li>
    </ul>

    <p>
      Para ver qué se ha descargado sin integrarlo:
    </p>

    <CodeBlock
      code={`# Ver commits que están en el remoto pero no en tu rama local
git log --oneline main..origin/main

# Vista visual completa del historial
git log --oneline --graph --decorate --all`}
    />
  </div>

  <div className="chapter-card">
    <h3>🔀 git pull · Descargar e integrar cambios</h3>
    <p>
      <code>git pull</code> combina dos acciones en una sola:
    </p>
    <ul>
      <li><code>git fetch</code> (descarga cambios del remoto)</li>
      <li><code>git merge</code> (integra esos cambios en tu rama)</li>
    </ul>

    <p>
      Por eso <code>git pull</code> <strong>sí puede generar conflictos</strong>, mientras que
      <code>git fetch</code> nunca los genera.
    </p>
  </div>

  <div className="chapter-card">
    <h3>🧠 Resumen rápido para el alumnado</h3>
    <ul>
      <li><code>git push</code> → sube tus commits al remoto</li>
      <li><code>git fetch</code> → descarga información del remoto sin tocar tu código</li>
      <li><code>git pull</code> → descarga e integra cambios en tu rama</li>
    </ul>
  </div>
</details>

      {/* =========================================================
     SECTION 12
========================================================== */}
<details>
  <summary>🟦 Section 12 · Git en equipo: trabajar sin pisarse</summary>

  <p>
    En un equipo, todos trabajan sobre el mismo proyecto, pero cada uno desde su
    ordenador. El objetivo es colaborar <strong>sin sobrescribir el trabajo de otros</strong>
    y manteniendo siempre una versión estable del proyecto.
  </p>

  <h3>Flujo básico en equipo</h3>
  <ol>
    <li>Clonar el repositorio central</li>
    <li>Crear una rama propia de trabajo</li>
    <li>Desarrollar cambios en esa rama</li>
    <li>Subir los cambios al repositorio remoto</li>
    <li>Revisar e integrar los cambios</li>
  </ol>

  <h3>Conceptos clave para trabajar en equipo</h3>
  <ul>
    <li>
      <strong>Nunca trabajar directamente en <code>main</code></strong>: debe
      contener siempre una versión estable.
    </li>
    <li>
      <strong>Cada persona → su propia rama</strong>: normalmente de tipo
      <code>feature/*</code>.
    </li>
    <li>
      <strong>Los cambios se revisan antes de fusionar</strong>, evitando errores
      y conflictos innecesarios.
    </li>
  </ul>

  <h3>La rama <code>develop</code>: integración del trabajo del equipo</h3>
  <p>
    En proyectos con varias personas o varias funcionalidades en paralelo, se
    utiliza una rama adicional llamada <strong><code>develop</code></strong>.
  </p>

  <p>
    La rama <code>develop</code> actúa como una <strong>zona de integración</strong>:
    es el lugar donde se van uniendo las distintas ramas de trabajo antes de pasar
    los cambios a <code>main</code>.
  </p>

  <ul>
    <li>
      <strong><code>main</code></strong>: versión estable y lista para producción.
    </li>
    <li>
      <strong><code>develop</code></strong>: integración de cambios en desarrollo.
    </li>
    <li>
      <strong><code>feature/*</code></strong>: desarrollo de funcionalidades concretas.
    </li>
  </ul>

  <p>
    De esta forma, aunque una funcionalidad funcione de manera individual, se
    comprueba primero junto al resto del proyecto en <code>develop</code> antes
    de integrarla en <code>main</code>.
  </p>

  <p>
    <strong>Importante:</strong> la rama <code>develop</code> no es obligatoria en
    Git. Es una <strong>convención de trabajo</strong> que se usa para organizar
    mejor proyectos medianos y grandes.
  </p>

  <p>
    En este curso se comienza trabajando solo con <code>main</code> y
    <code>feature</code> para afianzar los conceptos básicos, y posteriormente se
    introduce <code>develop</code> como evolución natural del trabajo en equipo.
  </p>
</details>

      {/* =========================================================
         SECTION 13
      ========================================================== */}
      <details>
        <summary>🟦 Section 13 · Errores típicos y cómo corregirlos</summary>

        <div className="chapter-card">
          <h3>1) Añadir secretos por error (.env)</h3>
          <ul>
            <li>
              Solución: añadir <code>.env</code> a <code>.gitignore</code>.
            </li>
            <li>
              Si ya se subió: rotar claves (cambiar passwords/JWT_SECRET) y eliminar del historial si procede.
            </li>
          </ul>
        </div>

        <div className="chapter-card">
          <h3>2) Confundir add/commit</h3>
          <p>
            <code>git add</code> prepara cambios. <code>git commit</code> crea el punto de control. Si no haces add, el
            commit no incluye los cambios.
          </p>
        </div>

        <div className="chapter-card">
          <h3>3) “Diverged” o historial desalineado</h3>
          <p>
            Ocurre cuando tu rama local y la remota han avanzado de forma distinta. Antes de forzar nada, revisa con{" "}
            <code>git status</code> y <code>git log</code>. En entornos educativos, lo normal es: <code>git pull</code> y
            resolver conflictos si aparecen.
          </p>
        </div>

        <WarningBox title="Evitar comandos destructivos sin criterio">
          <p>
            Comandos como <code>git reset --hard</code> o <code>git push --force</code> pueden eliminar trabajo. Úsalos
            solo con un criterio claro y entendiendo su impacto.
          </p>
        </WarningBox>
      </details>

      {/* =========================================================
         SECTION 14
      ========================================================== */}
      <details>
        <summary>🟦 Section 14 · Relación con despliegue: Vercel/Netlify y VPS</summary>

        <p>
          En despliegues basados en Git (Vercel/Netlify), cada push a la rama principal dispara el build y publica el
          resultado (frontend estático).
        </p>

        <p>
          En VPS, Git se usa como mecanismo de control y trazabilidad: el despliegue puede hacerse copiando artefactos
          (dist) o desplegando backend como servicio, pero el repositorio mantiene el historial de cambios.
        </p>

        <CodeBlock
          code={`# Ejemplo de flujo cuando el despliegue depende de Git
git checkout main
git pull
# cambios
git add .
git commit -m "Corrige CORS para producción"
git push`}
        />
      </details>

    {/* =========================================================
     SECTION 15
========================================================== */}
<details>
  <summary>🟦 Section 15 · Actividad práctica propuesta · Trabajo en equipo con Git</summary>

  <p>
    En esta actividad vamos a <strong>poner en práctica todo lo aprendido sobre Git</strong>
    simulando el trabajo real de un equipo de desarrollo profesional.
  </p>

  <p>
    No es un ejercicio individual ni de memorizar comandos, sino una dinámica de equipo
    donde aprenderás a <strong>trabajar con versiones, ramas y repositorios remotos</strong>
    de forma ordenada y segura.
  </p>

  <h3>🎯 Objetivos de la actividad</h3>
  <ul>
    <li>Trabajar con un <strong>repositorio Git real</strong>.</li>
    <li>Entender la diferencia entre <strong>trabajo local</strong> y <strong>remoto (GitHub)</strong>.</li>
    <li>Guardar versiones funcionales mediante <strong>commits</strong>.</li>
    <li>Crear y usar <strong>ramas</strong> para no romper la versión estable.</li>
    <li>Colaborar con otros compañeros <strong>sin pisar su trabajo</strong>.</li>
    <li>Integrar cambios siguiendo un <strong>flujo profesional</strong>.</li>
  </ul>

  <h3>🧩 En qué consiste la actividad</h3>
  <p>
    El proyecto ya está creado por el <strong>jefe del proyecto (profesor)</strong>.
    Se trata de un mini-portfolio sobre Git dividido en <strong>bloques numerados</strong>.
  </p>

  <p>
    Cada alumno trabajará en <strong>su propia rama</strong> y modificará
    <strong>un bloque concreto</strong> del proyecto, como si formara parte de un
    equipo real.
  </p>

  <ul>
    <li>Nadie trabaja directamente en <code>main</code>.</li>
    <li>Cada cambio tiene su propia rama <code>feature/*</code>.</li>
    <li>Solo se integran cambios probados y funcionales.</li>
  </ul>

  <h3>🟦 Paso 1 · Clonar el repositorio (inicio de la actividad)</h3>
  <p>
    Para comenzar, todos los alumnos deben <strong>clonar el repositorio original</strong>
    del proyecto en su ordenador:
  </p>

  <CodeBlock
    code={`git clone https://github.com/inma2709/aprendiendoGit
cd aprendiendoGit`}
  />

  <p>
    Con este paso tendrás:
  </p>
  <ul>
    <li>Una copia local completa del proyecto.</li>
    <li>El historial de versiones ya creado.</li>
    <li>Conexión con el repositorio remoto del equipo.</li>
  </ul>

  <p>
    <strong>Importante:</strong> clonar no es copiar archivos,
    es crear un repositorio Git local preparado para trabajar en equipo.
  </p>

  <h3>🟦 Flujo de trabajo que vamos a seguir</h3>
  <ol>
    <li>Clonar el repositorio del proyecto.</li>
    <li>Situarse en la rama <code>develop</code> (integración del equipo).</li>
    <li>Crear una rama propia <code>feature/*</code>.</li>
    <li>Modificar el bloque asignado.</li>
    <li>Probar que el proyecto sigue funcionando.</li>
    <li>Guardar una versión con <code>git commit</code>.</li>
    <li>Subir la rama al repositorio remoto.</li>
    <li>Integrar los cambios siguiendo el flujo del equipo.</li>
  </ol>

  <p>
    El flujo profesional que estamos simulando es:
  </p>

  <pre>
    <code>{`feature/*  →  develop  →  main`}</code>
  </pre>

  <h3>🔍 Visualizar el historial (muy recomendado)</h3>
  <p>
    Para entender mejor cómo evoluciona el proyecto y cómo se integran las ramas,
    puedes usar este comando:
  </p>

  <CodeBlock code={`git log --oneline --graph --decorate --all`} />

  <p>
    Este comando te ayuda a <strong>ver gráficamente las ramas, los commits y los merges</strong>,
    algo fundamental para aprender Git de verdad.
  </p>
</details>

{/* =========================================================
     SECTION · Git desde Visual Studio Code
========================================================== */}
<details>
  <summary>🟦 Section · Gestión de Git desde Visual Studio Code</summary>

  <p>
    Visual Studio Code incorpora un <strong>control de versiones integrado</strong>
    que permite trabajar con Git sin necesidad de escribir todos los comandos en la terminal.
  </p>

  <p>
    Aunque usemos botones y menús, es importante entender que
    <strong>VS Code no sustituye a Git</strong>:
    simplemente ejecuta los comandos Git por nosotros.
  </p>

  <h3>🧩 Panel de Control de Versiones</h3>
  <p>
    En la barra lateral izquierda encontrarás el icono de
    <strong>Source Control</strong> (normalmente con un símbolo de ramas).
  </p>

  <p>
    Desde este panel puedes:
  </p>
  <ul>
    <li>Ver archivos modificados.</li>
    <li>Preparar cambios para commit (stage).</li>
    <li>Crear commits.</li>
    <li>Cambiar de rama.</li>
    <li>Hacer push, pull y fetch.</li>
  </ul>

  <h3>🔍 Ver cambios (equivale a <code>git status</code>)</h3>
  <p>
    Cuando modificas un archivo, VS Code lo detecta automáticamente
    y lo muestra en el panel de control de versiones.
  </p>

  <p>
    Esto es lo mismo que ejecutar:
  </p>

  <pre>
    <code>{`git status`}</code>
  </pre>

  <p>
    VS Code incluso te muestra las diferencias línea a línea
    para que entiendas exactamente qué ha cambiado.
  </p>

  <h3>➕ Preparar cambios (Stage)</h3>
  <p>
    Antes de guardar una versión, debes indicar qué archivos
    quieres incluir en el commit.
  </p>

  <p>
    En VS Code:
  </p>
  <ul>
    <li>Pulsa el botón <strong>+</strong> junto al archivo.</li>
    <li>O usa <strong>Stage All Changes</strong>.</li>
  </ul>

  <p>
    Esto equivale a:
  </p>

  <pre>
    <code>{`git add archivo.js
git add .`}</code>
  </pre>

  <p>
    <strong>Importante:</strong> preparar cambios no crea una versión,
    solo selecciona qué se guardará después.
  </p>

  <h3>💾 Crear un commit</h3>
  <p>
    En la parte superior del panel de Git encontrarás un campo
    para escribir el mensaje de commit.
  </p>

  <ol>
    <li>Escribe un mensaje claro y descriptivo.</li>
    <li>Pulsa el botón <strong>Commit</strong>.</li>
  </ol>

  <p>
    VS Code ejecuta internamente:
  </p>

  <pre>
    <code>{`git commit -m "Mensaje del commit"`}</code>
  </pre>

  <p>
    En este momento se guarda una <strong>versión real del proyecto</strong>
    en tu ordenador.
  </p>

  <h3>🌿 Cambiar y crear ramas</h3>
  <p>
    En la esquina inferior izquierda de VS Code puedes ver
    la rama actual.
  </p>

  <p>
    Al hacer clic:
  </p>
  <ul>
    <li>Puedes cambiar de rama.</li>
    <li>Crear una nueva rama.</li>
  </ul>

  <p>
    Crear una rama desde VS Code equivale a:
  </p>

  <pre>
    <code>{`git checkout -b feature/nueva-funcionalidad`}</code>
  </pre>

  <p>
    Trabajar con ramas desde VS Code es una forma segura
    de no romper la versión principal del proyecto.
  </p>

  <h3>🌐 Sincronización con GitHub (push, pull, fetch)</h3>
  <p>
    En la parte superior del panel o en la barra inferior,
    VS Code muestra opciones para sincronizar el repositorio.
  </p>

  <ul>
    <li>
      <strong>Push:</strong> sube tus commits al repositorio remoto.
    </li>
    <li>
      <strong>Pull:</strong> descarga e integra cambios del remoto.
    </li>
    <li>
      <strong>Fetch:</strong> descarga información sin modificar tus archivos.
    </li>
  </ul>

  <p>
    Estos botones corresponden a los comandos:
  </p>

  <pre>
    <code>{`git push
git pull
git fetch`}</code>
  </pre>

  <p>
    VS Code suele avisarte si hay cambios en el remoto antes de hacer pull,
    ayudando a evitar conflictos.
  </p>

  <h3>⚠️ Buenas prácticas usando VS Code</h3>
  <ul>
    <li>Revisa siempre los archivos antes de hacer commit.</li>
    <li>No hagas commits automáticos sin leer el mensaje.</li>
    <li>Comprueba en qué rama estás antes de trabajar.</li>
    <li>Haz pull antes de empezar a trabajar en equipo.</li>
  </ul>

  <p>
    <strong>Conclusión:</strong> Visual Studio Code facilita el uso de Git,
    pero entender los comandos que hay detrás es lo que te convierte
    en un desarrollador profesional.
  </p>
</details>

{/* =========================================================
     SECTION · Historial de commits y botones en GitHub
========================================================== */}
<details>
  <summary>🟦 Section · Historial de commits y botones en GitHub</summary>

  <p>
    En GitHub, el historial de commits muestra todas las
    <strong>versiones del proyecto</strong> guardadas hasta el momento.
    Cada fila representa una versión concreta creada mediante un
    <code>git commit</code>.
  </p>

  <p>
    Esta vista es la versión web de lo que en local veríamos con:
  </p>

  <pre>
    <code>{`git log`}</code>
  </pre>

  <p>
    En el historial puedes ver:
  </p>
  <ul>
    <li>El mensaje del commit.</li>
    <li>La persona que lo realizó.</li>
    <li>La fecha y hora.</li>
    <li>La rama en la que se encuentra.</li>
    <li>El identificador único del commit (hash).</li>
  </ul>

  <h3>🔘 Botones que aparecen junto a cada commit</h3>

  <h4>📋 Copiar identificador del commit</h4>
  <p>
    El icono de copiar permite copiar el
    <strong>identificador del commit</strong> (hash), por ejemplo:
    <code>2d87a5d</code>.
  </p>

  <p>
    Este identificador es el “DNI” de la versión y se utiliza para:
  </p>
  <ul>
    <li>volver a una versión concreta,</li>
    <li>revertir un commit incorrecto,</li>
    <li>referirse a una versión exacta del proyecto.</li>
  </ul>

  <p>
    Ejemplo de uso:
  </p>

  <pre>
    <code>{`git revert 2d87a5d`}</code>
  </pre>

  <h4>🔍 Botón <code>&lt;&gt;</code> · Ver cambios del commit</h4>
  <p>
    Este botón muestra exactamente
    <strong>qué cambió en esa versión</strong>:
  </p>

  <ul>
    <li>líneas añadidas (en verde),</li>
    <li>líneas eliminadas (en rojo),</li>
    <li>archivos modificados.</li>
  </ul>

  <p>
    Permite responder a preguntas como:
  </p>
  <ul>
    <li>¿Qué hice en esta versión?</li>
    <li>¿Dónde se introdujo un error?</li>
    <li>¿Qué cambios hizo cada persona?</li>
  </ul>

  <h4>📁 Clic en el mensaje del commit</h4>
  <p>
    Al hacer clic en el mensaje del commit se accede a la
    <strong>vista completa de esa versión</strong>, donde se puede ver:
  </p>

  <ul>
    <li>el detalle de todos los archivos modificados,</li>
    <li>el diff completo,</li>
    <li>el hash largo del commit,</li>
    <li>opciones para comparar versiones.</li>
  </ul>

  <h3>🧠 Relación con lo aprendido en Git</h3>
  <p>
    Esta sección conecta directamente con conceptos clave del control de versiones:
  </p>

  <ul>
    <li>Un commit es una versión real del proyecto.</li>
    <li>Git no borra versiones, las conserva.</li>
    <li>Cada versión puede revisarse y recuperarse.</li>
    <li>El historial forma parte del proyecto.</li>
  </ul>

  <h3>🎓 Frase clave para manual o evaluación</h3>
  <p>
    <strong>
      GitHub permite consultar el historial de commits del repositorio y revisar cada versión,
      copiar su identificador y ver los cambios realizados en cada commit.
    </strong>
  </p>

  <p>
    Saber leer este historial es una habilidad fundamental para trabajar
    en equipo y mantener proyectos estables.
  </p>
</details>


      {/* =========================================================
         SECTION 16
      ========================================================== */}
      <details open>
        <summary>🧠 Consejos finales y errores a evitar en Git</summary>

        <h3>✔️ Consejos finales para trabajar bien con Git</h3>
        <ul>
          <li>
            <strong>Haz commits pequeños y frecuentes.</strong> Es mejor muchos commits claros que uno grande y confuso.
          </li>
          <li>
            <strong>Usa mensajes de commit descriptivos.</strong> El mensaje debe explicar qué se ha hecho, no cómo te
            sientes.
          </li>
          <li>
            <strong>Trabaja siempre con ramas.</strong> Usa <code>main</code> solo para versiones estables y funcionales.
          </li>
          <li>
            <strong>Comprueba que el proyecto funciona antes de hacer commit.</strong> Si no funciona, no se versiona.
          </li>
          <li>
            <strong>Haz merge solo cuando la funcionalidad esté terminada.</strong> Las ramas feature son zonas de
            pruebas, no versiones finales.
          </li>
          <li>
            <strong>Revisa el historial con frecuencia.</strong> Usar <code>git status</code> y <code>git log</code>{" "}
            ayuda a no perder el control.
          </li>
          <li>
            <strong>Piensa en Git como una red de seguridad.</strong> Git está para proteger tu trabajo, no para
            complicarlo.
          </li>
        </ul>

        <h3>❌ Errores típicos que debes evitar</h3>
        <ul>
          <li>
            <strong>Trabajar directamente en <code>main</code>.</strong> Esto elimina la seguridad del control de
            versiones.
          </li>
          <li>
            <strong>Hacer commits sin saber qué se está guardando.</strong> Siempre revisa con <code>git status</code>.
          </li>
          <li>
            <strong>Usar mensajes de commit poco claros.</strong> Mensajes como “cambios”, “pruebas” o “final” no aportan
            información.
          </li>
          <li>
            <strong>Fusionar ramas sin probar el código.</strong> Un merge con errores rompe la rama principal.
          </li>
          <li>
            <strong>Pensar que Git arregla los errores automáticamente.</strong> Git guarda versiones, no corrige fallos.
          </li>
          <li>
            <strong>Asustarse ante un conflicto de merge.</strong> Los conflictos son normales y forman parte del trabajo
            diario.
          </li>
          <li>
            <strong>Usar Git solo porque “lo pide el profesor”.</strong> Git es una herramienta profesional
            imprescindible.
          </li>
        </ul>

        <p>
          <strong>Recuerda:</strong> Git no sirve para complicarte la vida, sirve para que puedas trabajar con
          tranquilidad y sin miedo a romper tu proyecto.
        </p>

        <p>
          <strong>Un buen uso de Git es una señal clara de madurez como desarrollador.</strong>
        </p>

        <p>
          <strong>Cierre del tema:</strong> Git no es opcional en desarrollo profesional. Es la base para trabajar bien,
          trabajar en equipo y trabajar sin miedo.
        </p>

        <p>
          <strong>Un proyecto sin Git es un proyecto sin control.</strong>
        </p>

        <p>
          <strong>Mentalidad profesional:</strong> “Si algo funciona, se guarda. Si no, no se versiona.”
        </p>
      </details>
      <details>
  <summary>📚 Ampliación · Curso recomendado para seguir practicando (Git y GitHub)</summary>

  <p>
    Si quieres reforzar lo visto en clase con un curso completo, claro y con ejemplos,
    te recomiendo visitar este recurso (está en español y empieza desde cero).
  </p>

  <p>
    👉 <strong>FreeCodeCamp Español · Aprende Git y GitHub (curso desde cero)</strong>
  </p>

  <p>
    <a
      href="https://www.freecodecamp.org/espanol/news/aprende-git-y-github-curso-desde-cero/"
      target="_blank"
      rel="noreferrer"
    >
      Abrir el curso de Git y GitHub en FreeCodeCamp
    </a>
  </p>

  <p>
    <strong>Consejo:</strong> úsalo como repaso después de cada práctica. Si algo te falla en Git,
    vuelve a esta guía y repite los pasos con un proyecto pequeño.
  </p>
</details>


      {/* =========================================================
         NAV
      ========================================================== */}
      <NavigationButtons
        prevPath="/documentacion"
        nextPath="/proyecto-final"
        prevTitle="6. Documentación Técnica"
        nextTitle="8. Proyecto Final"
      />
    </div>
  );
};

export default Git;
