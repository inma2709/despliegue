import NavigationButtons from "../components/NavigationButtons";
import { ActivityBox, PracticeBox, CodeBlock, WarningBox } from "../components/ContentBoxes";

const Security = () => {
  return (
    <div className="security">
      <h1>5. Seguridad básica en aplicaciones web</h1>

      <p>
        Seguridad no es “ser paranoico”: es <strong>no fiarse de lo que llega del usuario</strong> y
        <strong> controlar qué se muestra</strong> cuando algo falla.
      </p>

      <h2>5.1. 3 riesgos típicos (los que verás siempre)</h2>

      <div className="chapter-card">
        <h3>1) SQL Injection (inyección SQL)</h3>
        <p>
          Pasa cuando construyes una consulta pegando texto. Un usuario puede “colarse” dentro del SQL.
          <strong> Solución: consultas preparadas (prepared statements)</strong>.
        </p>

        <CodeBlock
          code={`// ❌ MAL: concatenar texto (peligroso)
const email = req.body.email;
const sql = "SELECT * FROM usuarios WHERE email = '" + email + "'";

// ✅ BIEN: consulta preparada (seguro)
const [rows] = await pool.query(
  "SELECT * FROM usuarios WHERE email = ?",
  [email]
);`}
        />

        <h3>2) XSS (meter JS en tu página)</h3>
        <p>
          Pasa cuando muestras texto del usuario como HTML. Si alguien guarda <code>&lt;script&gt;</code>,
          se ejecuta en el navegador.
          <strong> Solución: escapar/sanitizar</strong> y no usar <code>innerHTML</code>.
        </p>

        <CodeBlock
          code={`// ❌ MAL (frontend): inserta HTML sin control
div.innerHTML = "<p>" + comentario + "</p>";

// ✅ BIEN: texto plano (no ejecuta scripts)
div.textContent = comentario;`}
        />

        <h3>3) Rutas / acceso inseguro (IDOR / rutas abiertas)</h3>
        <p>
          Pasa cuando alguien accede a <code>/pedido/2</code> y ve datos que no son suyos.
          <strong> Solución: comprobar permiso/propietario en el backend</strong>.
        </p>

        <CodeBlock
          code={`// ✅ EJEMPLO simple: comprobar que el pedido es del usuario logueado
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
      </div>

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

      <h2>5.3. Errores: lo que ve el usuario vs lo que guardas tú</h2>

      <div className="chapter-card">
        <h3>Idea simple</h3>
        <ul>
          <li>✅ El usuario ve un mensaje corto: <em>“Ha ocurrido un error”</em>.</li>
          <li>✅ Tú guardas el detalle en logs para poder arreglarlo.</li>
        </ul>
      </div>

      <CodeBlock
        code={`// ✅ Middleware de errores (Express)
app.use((err, req, res, next) => {
  console.error("ERROR:", err.message); // log interno
  res.status(500).json({ error: "Error interno del servidor" }); // mensaje simple
});`}
      />

      <WarningBox title="Nunca hagas esto en producción">
        <ul>
          <li>Mostrar el SQL en pantalla</li>
          <li>Mostrar rutas del servidor (paths)</li>
          <li>Mostrar el stack trace completo</li>
        </ul>
      </WarningBox>

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

      <h2>5.5. Backups de base de datos </h2>

      <p>
  Para empezar, no necesitas scripts complejos: con un comando ya tienes un backup.
</p>

<p>
  Un <strong>script</strong> es simplemente un <strong>archivo con una serie de instrucciones</strong>
  que el ordenador ejecuta automáticamente, una detrás de otra.
</p>

<p>
  En lugar de escribir los mismos comandos cada vez a mano, los guardas en un archivo
  (por ejemplo <code>backup.sh</code> o <code>backup.js</code>) y el sistema los ejecuta por ti.
</p>

<p>
  Más adelante, cuando tu proyecto crezca, podrás usar scripts para:
</p>

<ul>
  <li>Crear copias de seguridad automáticamente</li>
  <li>Ejecutarlas cada día o cada semana</li>
  <li>Evitar errores humanos al escribir comandos</li>
</ul>

<p>
  De momento, para aprender, es suficiente entender que un script es
  <strong>una forma de automatizar tareas repetitivas</strong>.
</p>
<div className="chapter-card">
  <h3>¿Qué es un script? (explicado fácil)</h3>

  <p>
    Un <strong>script</strong> es un archivo que guarda <strong>pasos que normalmente harías a mano</strong>,
    para que el ordenador los ejecute por ti.
  </p>

  <p>
    Por ejemplo, si siempre escribes el mismo comando para hacer un backup,
    ese comando se puede guardar en un archivo y ejecutarlo cuando lo necesites.
    Ese archivo es un script.
  </p>

  <p>
    <strong>No es una página web</strong> ni se abre en el navegador.
    Se ejecuta desde la terminal o el servidor.
  </p>
  <p>
  Para ejecutar un script se usa una <strong>orden (comando)</strong> en la terminal.
  La orden depende del tipo de script que sea.
</p>

<ul>
  <li>
    <strong>Script de terminal (Bash)</strong>:
    <code>./nombre_del_script.sh</code>
  </li>

  <li>
    <strong>Script en JavaScript (Node)</strong>:
    <code>node nombre_del_script.js</code>
  </li>

  <li>
    <strong>Script en PHP</strong>:
    <code>php nombre_del_script.php</code>
  </li>
</ul>

<p>
  Es importante estar situado en la <strong>carpeta donde está el archivo</strong>
  antes de ejecutarlo.
</p>
<p>
  ⚠️ Un script <strong>no se ejecuta solo</strong>.  
  Siempre hay una orden que lo pone en marcha.
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

     
      <h2>5.6. Checklist de seguridad </h2>

      <div className="chapter-card">
        <h3>Antes de “publicar” (aunque sea en hosting)</h3>
        <ul>
          <li>✅ Variables en <code>.env</code> (no hardcode)</li>
          <li>✅ CORS bien configurado (solo tus dominios)</li>
          <li>✅ No hay <code>console.log</code> con datos sensibles</li>
          <li>✅ Contraseñas con hash</li>
          <li>✅ Endpoints con permisos (no todo público)</li>
        </ul>
      </div>

   {/*
<ActivityBox title="Actividad: encuentra 4 fallos (modo fácil)">
  <p>Lee este código y apunta fallos de seguridad:</p>

  <CodeBlock
    code={`// ❌ EJEMPLO con fallos
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // 1) SQL Injection (concatenación)
  const sql = "SELECT * FROM usuarios WHERE email='" + email + "' AND password='" + password + "'";
  const [rows] = await pool.query(sql);

  // 2) Si falla, da demasiada info
  if (rows.length === 0) 
    return res.status(401).send("Usuario no existe o password incorrecta: " + email);

  // 3) Guarda todo el usuario completo (puede incluir datos sensibles)
  req.session.user = rows[0];

  // 4) Falta rate limit / bloqueo por intentos (fácil de atacar)
  res.json({ ok: true });
});`}
  />

  <p><strong>Respuestas esperadas:</strong></p>
  <ol>
    <li>Consulta vulnerable (SQL Injection)</li>
    <li>Contraseña en texto plano (mal diseño)</li>
    <li>Mensaje de error con demasiado detalle</li>
    <li>No hay protección contra muchos intentos (brute force)</li>
  </ol>
</ActivityBox>
*/}


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
