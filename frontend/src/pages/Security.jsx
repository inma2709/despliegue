import NavigationButtons from "../components/NavigationButtons";
import { PracticeBox, CodeBlock, WarningBox } from "../components/ContentBoxes";

const Security = () => {
  return (
    <div className="security">
      <h1>5. Seguridad básica en aplicaciones web</h1>

      <p>
        En una app web, “seguridad básica” significa algo muy práctico:
        <strong> controlar quién puede acceder a qué</strong>, tratar bien los errores y
        <strong> no exponer datos sensibles</strong>.
      </p>

      {/* =========================================================
         5.1
      ========================================================== */}
      <h2>5.1. Proteger rutas (acceso a recursos)</h2>

      <div className="chapter-card">
        <p>
          Una situación típica: tienes una ruta como <code>/pedidos/2</code>. Aunque el usuario
          pueda escribir esa URL, <strong>solo debería ver sus propios datos</strong>.
        </p>

        <p>
          La idea clave es: <strong>validar permisos en el backend</strong> (no en el frontend).
          El frontend puede “ocultar botones”, pero quien manda es el servidor.
        </p>

        <CodeBlock
          code={`// ✅ EJEMPLO: comprobar que el pedido pertenece al usuario logueado
app.get("/pedidos/:id", async (req, res) => {
  const pedidoId = req.params.id;
  const userId = req.user.id; // viene del middleware de auth

  const [rows] = await pool.query(
    "SELECT * FROM pedidos WHERE id = ? AND usuario_id = ?",
    [pedidoId, userId]
  );

  if (rows.length === 0) return res.status(403).json({ error: "No autorizado" });
  res.json(rows[0]);
});`}
        />

        <WarningBox title="Recuerda">
          <ul>
            <li>El control de permisos se hace en el backend (siempre).</li>
            <li>No basta con “no enseñar” el enlace en el frontend.</li>
          </ul>
        </WarningBox>
      </div>

      {/* =========================================================
         5.2
      ========================================================== */}
      <h2>5.2. Contraseñas: lo mínimo imprescindible</h2>

      <div className="chapter-card">
        <h3>Regla de oro</h3>
        <ul>
          <li>❌ Nunca guardes contraseñas “tal cual” en la base de datos.</li>
          <li>✅ Guarda un <strong>hash</strong> (una “huella” irreversible).</li>
          <li>✅ Para comprobar, usa <strong>verify</strong> contra el hash.</li>
        </ul>
      </div>

      <CodeBlock
        code={`// ✅ Node/Express (recomendado en tu proyecto Bazar)
import bcrypt from "bcryptjs";

// REGISTRO
const passwordHash = await bcrypt.hash(password, 10);
// Guardas passwordHash en la BD

// LOGIN
const ok = await bcrypt.compare(password, user.passwordHash);
if (!ok) return res.status(401).json({ error: "Credenciales incorrectas" });`}
      />

      <PracticeBox title="Mini-ejercicio">
        <p>
          En tu tabla <code>usuarios</code>, crea una columna <code>password_hash</code> y elimina
          cualquier columna <code>password</code> en texto plano.
        </p>
      </PracticeBox>

      {/* =========================================================
         5.3
      ========================================================== */}
      <h2>5.3. Mensajes al usuario (UX) vs mensajes para el desarrollador (logs)</h2>

      <div className="chapter-card">
        <p>
          En una aplicación hay <strong>dos “tipos” de mensajes</strong> y cumplen funciones distintas:
        </p>

        <ul>
          <li>
            <strong>Mensajes UX (para el usuario)</strong>: claros, cortos, orientados a acción.
            Ej: “No se pudo completar la operación. Inténtalo de nuevo.”
          </li>
          <li>
            <strong>Logs (para ti como desarrolladora)</strong>: detalle técnico para investigar.
            Ej: errores, datos de depuración, trazas, etc.
          </li>
        </ul>

        <h3>¿Dónde se ven esos mensajes?</h3>
        <ul>
          <li>
            <strong>Frontend</strong>:
            <ul>
              <li>Mensajes UX: se ven en la interfaz (alerta, toast, texto en pantalla).</li>
              <li>
                <code>console.log()</code>: se ve en el <strong>navegador</strong> (DevTools → Console).
              </li>
            </ul>
          </li>

          <li>
            <strong>Backend</strong>:
            <ul>
              <li>Mensajes UX: lo que devuelve la API (JSON / status) y el frontend lo muestra.</li>
              <li>
                <code>console.log()</code> / <code>console.error()</code>: se ven en la{" "}
                <strong>terminal</strong> donde corre Node (tu PC, servidor, logs del hosting).
              </li>
            </ul>
          </li>
        </ul>

        <p>
          La práctica recomendada es: <strong>usuario = mensaje simple</strong>,{" "}
          <strong>desarrollador = detalle en logs</strong>.
        </p>
      </div>

      <CodeBlock
        code={`// ✅ Backend: log interno + respuesta simple
app.use((err, req, res, next) => {
  console.error("ERROR:", err.message); // lo ves en la terminal del backend
  res.status(500).json({ error: "Error interno del servidor" }); // lo ve el usuario (a través del frontend)
});`}
      />

      <CodeBlock
        code={`// ✅ Frontend: UX al usuario + console para depurar
try {
  // ...llamada fetch/axios
} catch (err) {
  console.log("Fallo en el frontend:", err); // lo ves en DevTools del navegador
  setError("No se pudo completar la operación. Inténtalo de nuevo."); // lo ve el usuario en pantalla
}`}
      />

      <WarningBox title="Nunca hagas esto en producción">
        <ul>
          <li>Mostrar SQL en pantalla</li>
          <li>Mostrar rutas del servidor (paths)</li>
          <li>Mostrar el stack trace completo al usuario</li>
        </ul>
      </WarningBox>

      {/* =========================================================
         5.4 (igual)
      ========================================================== */}
      <h2>5.4. Archivos sensibles (env y config)</h2>

      <div className="chapter-card">
        <h3>¿Qué va en .env?</h3>
        <ul>
          <li>Contraseña de la BD</li>
          <li>JWT_SECRET</li>
          <li>Claves de API</li>
        </ul>
        <p>
          <strong>.env no se sube a Git</strong> y no debe ser accesible desde el navegador.
        </p>
      </div>

      <CodeBlock
        code={`# ✅ .gitignore (mínimo)
node_modules
.env
dist
logs`}
      />

      {/* =========================================================
         5.5 (igual)
      ========================================================== */}
      <h2>5.5. Backups de base de datos </h2>

      <p>Para empezar, no necesitas scripts complejos: con un comando ya tienes un backup.</p>

      <p>
        Un <strong>script</strong> es simplemente un <strong>archivo con una serie de instrucciones</strong>{" "}
        que el ordenador ejecuta automáticamente, una detrás de otra.
      </p>

      <p>
        En lugar de escribir los mismos comandos cada vez a mano, los guardas en un archivo (por ejemplo{" "}
        <code>backup.sh</code> o <code>backup.js</code>) y el sistema los ejecuta por ti.
      </p>

      <p>Más adelante, cuando tu proyecto crezca, podrás usar scripts para:</p>

      <ul>
        <li>Crear copias de seguridad automáticamente</li>
        <li>Ejecutarlas cada día o cada semana</li>
        <li>Evitar errores humanos al escribir comandos</li>
      </ul>

      <p>
        De momento, para aprender, es suficiente entender que un script es{" "}
        <strong>una forma de automatizar tareas repetitivas</strong>.
      </p>

      <div className="chapter-card">
        <h3>¿Qué es un script? (explicado fácil)</h3>

        <p>
          Un <strong>script</strong> es un archivo que guarda <strong>pasos que normalmente harías a mano</strong>,
          para que el ordenador los ejecute por ti.
        </p>

        <p>
          Por ejemplo, si siempre escribes el mismo comando para hacer un backup, ese comando se puede guardar
          en un archivo y ejecutarlo cuando lo necesites. Ese archivo es un script.
        </p>

        <p>
          <strong>No es una página web</strong> ni se abre en el navegador. Se ejecuta desde la terminal o el servidor.
        </p>

        <p>
          Para ejecutar un script se usa una <strong>orden (comando)</strong> en la terminal. La orden depende del tipo
          de script que sea.
        </p>

        <ul>
          <li>
            <strong>Script de terminal (Bash)</strong>: <code>./nombre_del_script.sh</code>
          </li>

          <li>
            <strong>Script en JavaScript (Node)</strong>: <code>node nombre_del_script.js</code>
          </li>

          <li>
            <strong>Script en PHP</strong>: <code>php nombre_del_script.php</code>
          </li>
        </ul>

        <p>Es importante estar situado en la <strong>carpeta donde está el archivo</strong> antes de ejecutarlo.</p>

        <p>
          ⚠️ Un script <strong>no se ejecuta solo</strong>. Siempre hay una orden que lo pone en marcha.
        </p>

        <p>¿Sabes que script tenemos nosotros preparados en nuestro ejercicio bazar?</p>

        <ul>
          <li>📄 Archivo normal (como cualquier otro)</li>
          <li>▶️ Se ejecuta cuando tú lo decides</li>
          <li>🔁 Sirve para repetir tareas sin errores</li>
        </ul>
      </div>

      <CodeBlock
        code={`# ✅ Backup manual (MySQL)
mysqldump -u TU_USUARIO -p TU_BD > backup.sql

# ✅ Restaurar
mysql -u TU_USUARIO -p TU_BD < backup.sql`}
      />

      {/* =========================================================
         5.6 (nuevo)
      ========================================================== */}
      <h2>5.6. .gitignore en backend y frontend + cómo recuperar un proyecto al clonarlo</h2>

      <div className="chapter-card">
        <p>
          <strong>.gitignore</strong> sirve para decirle a Git qué cosas <strong>NO</strong> debe subir al repositorio.
          No porque “sean malas”, sino porque:
        </p>

        <ul>
          <li>son archivos generados automáticamente (se pueden recrear),</li>
          <li>son pesados (ocupan mucho),</li>
          <li>o contienen datos sensibles (por ejemplo, <code>.env</code>).</li>
        </ul>

        <h3>¿Qué se ignora normalmente?</h3>
        <ul>
          <li>
            <strong>Backend</strong>: <code>node_modules</code>, <code>.env</code>, <code>logs</code>
          </li>
          <li>
            <strong>Frontend (React/Vite)</strong>: <code>node_modules</code>, <code>dist</code>, <code>.env</code>
          </li>
        </ul>

        <CodeBlock
          code={`# ✅ Ejemplo razonable de .gitignore (sirve para back y front)
node_modules/
dist/
.env
.env.*
logs/
*.log
.DS_Store`}
        />

        <h3>Entonces… si lo clono, ¿qué falta?</h3>
        <p>
          Cuando clonas un repositorio, lo normal es que <strong>NO</strong> te venga <code>node_modules</code>{" "}
          (y en frontend tampoco <code>dist</code>). Eso está bien.
        </p>

        <p>
          Lo que se hace al recuperar el proyecto es:
          <strong> instalar dependencias</strong> y, si toca, <strong>crear el .env</strong>.
        </p>

        <CodeBlock
          code={`# ✅ Recuperar un proyecto Node/React tras clonar
git clone URL_DEL_REPO
cd carpeta-del-proyecto

# 1) Instalar dependencias (crea node_modules)
npm install

# 2) (si existe) crear tu .env a partir de ejemplo
#    - a veces el repo incluye .env.example (o similar)
#    - lo copias y rellenas valores
# cp .env.example .env

# 3) Ejecutar
npm run dev     # desarrollo (front o back si tienes script dev)
npm start       # producción/back (si tu proyecto lo usa)`}
        />

        <h3>¿Y la carpeta dist?</h3>
        <p>
          En un frontend tipo React/Vite, <code>dist</code> se genera con:
        </p>

        <CodeBlock
          code={`# ✅ Generar dist (solo cuando vas a desplegar)
npm run build`}
        />

        <WarningBox title="Importante para clase y para hosting">
          <ul>
            <li>
              Si un alumno clona y “no funciona”, casi siempre falta hacer <code>npm install</code>.
            </li>
            <li>
              Si falta configuración, revisa si necesita <code>.env</code> (y si hay <code>.env.example</code>).
            </li>
            <li>
              En frontend, si no hay <code>dist</code>, es normal: se genera con <code>npm run build</code>.
            </li>
          </ul>
        </WarningBox>
      </div>

      <NavigationButtons
        prevPath="/verificacion"
        nextPath="/documentacion"
        prevTitle="4. Verificación y Pruebas"
        nextTitle="6. Documentación Técnica"
      />
    </div>
  );
};

export default Security;
