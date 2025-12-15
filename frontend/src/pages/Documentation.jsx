import NavigationButtons from "../components/NavigationButtons";
import { PracticeBox, CodeBlock } from "../components/ContentBoxes";

const Documentation = () => {
  return (
    <div className="documentation">
      <h1>6. Documentación técnica de la aplicación</h1>

      <h2>6.1. Qué es documentar: objetivo y utilidad</h2>
      <p>
        La documentación técnica es el conjunto de textos y recursos que explican
        cómo funciona, se instala, se configura y se mantiene una aplicación web.
      </p>

      <div className="chapter-card">
        <h3>¿Para qué sirve documentar?</h3>
        <ul>
          <li>
            <strong>Mantenimiento:</strong> entender el proyecto cuando pasa tiempo o lo lleva otra persona.
          </li>
          <li>
            <strong>Comunicación:</strong> explicar decisiones técnicas y cómo usar el sistema.
          </li>
          <li>
            <strong>Calidad:</strong> ayuda a detectar incoherencias y aclarar responsabilidades del código.
          </li>
          <li>
            <strong>Trabajo en equipo:</strong> acelera la incorporación de nuevas personas.
          </li>
        </ul>
      </div>

      <h2>6.2. Cuándo documentar</h2>
      <p>
        Un hábito recomendable es documentar cuando terminas un archivo o una parte
        concreta (una ruta, un controlador, un módulo, etc.). En ese momento la
        funcionalidad está reciente y es más fácil describirla con precisión.
      </p>

      <h2>6.3. Documentación técnica vs documentación de usuario</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          margin: "2rem 0",
        }}
      >
        <div className="chapter-card">
          <h3>Documentación técnica</h3>
          <ul>
            <li>
              <strong>Audiencia:</strong> desarrolladores, administradores, mantenimiento
            </li>
            <li>
              <strong>Contenido:</strong> arquitectura, configuración, endpoints, base de datos, despliegue
            </li>
            <li>
              <strong>Formato:</strong> README, carpeta <code>docs/</code>, comentarios en el código, JSDoc
            </li>
          </ul>
        </div>

        <div className="chapter-card">
          <h3>Documentación de usuario</h3>
          <ul>
            <li>
              <strong>Audiencia:</strong> usuarios finales
            </li>
            <li>
              <strong>Contenido:</strong> cómo usar la aplicación (pantallas, acciones, flujos)
            </li>
            <li>
              <strong>Formato:</strong> guía, manual, FAQ, tutoriales
            </li>
          </ul>
        </div>
      </div>

      <h2>6.4. Documentación mínima del proyecto (Node + Express)</h2>

      <div className="chapter-card">
        <h3>Archivos recomendados</h3>
        <ul>
          <li>
            <strong>README.md</strong> (qué es el proyecto, cómo instalar, ejecutar y configurar)
          </li>
          <li>
            <strong>.env.example</strong> (plantilla de variables de entorno, sin secretos)
          </li>
          <li>
            <strong>docs/</strong> (opcional) con instalación, endpoints y decisiones técnicas
          </li>
          <li>
            <strong>JSDoc</strong> en funciones clave (controladores, servicios, utilidades)
          </li>
        </ul>
      </div>

      <h2>6.5. Estructura de un README profesional</h2>

      <PracticeBox title="Plantilla de README (Node + Express + MySQL)">
        <CodeBlock
          code={`# Nombre del proyecto

Descripción breve: qué hace la aplicación y para qué sirve.

## Tecnologías
- Node.js + Express
- MySQL (mysql2)
- JSON Web Tokens (JWT)
- CORS

## Requisitos
- Node.js 18+
- MySQL 5.7+ / MariaDB 10+
- npm

## Instalación
\`\`\`bash
git clone https://github.com/usuario/proyecto.git
cd proyecto
\`\`\`

### Backend
\`\`\`bash
cd backend
npm install
\`\`\`

## Configuración (.env)
Crea un archivo \`.env\` en \`/backend\` (puedes partir de \`.env.example\`):

\`\`\`env
PORT=3000
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_password
DB_NAME=tu_bd
JWT_SECRET=tu_secreto
CORS_ORIGIN=http://localhost:5173
\`\`\`

## Base de datos
- Crear la base de datos \`tu_bd\`
- Ejecutar el script de creación (si existe): \`npm run initdb\` o importar \`schema.sql\`

## Ejecución
### Desarrollo
\`\`\`bash
npm run dev
\`\`\`

### Producción
\`\`\`bash
npm start
\`\`\`

## Endpoints principales
- POST /auth/register
- POST /auth/login
- GET  /productos
- POST /pedidos

## Estructura del proyecto
- src/
  - routes/
  - controllers/
  - services/
  - db/
  - middleware/

## Licencia
Indica la licencia (MIT, etc.)

## Autoría
Tu nombre / GitHub`}
        />
      </PracticeBox>

      <h2>6.6. Manual de instalación (Node + Express)</h2>

      <PracticeBox title="Plantilla de manual de instalación">
        <CodeBlock
          code={`# Manual de instalación - Backend (Node + Express)

## 1. Requisitos
- Node.js 18+
- MySQL 5.7+ o MariaDB 10+
- npm

## 2. Obtener el proyecto
\`\`\`bash
git clone https://github.com/usuario/proyecto.git
cd proyecto/backend
\`\`\`

## 3. Instalar dependencias
\`\`\`bash
npm install
\`\`\`

## 4. Configurar variables de entorno
1) Copia el ejemplo:
\`\`\`bash
cp .env.example .env
\`\`\`
2) Edita \`.env\` con los datos de tu BD y tu JWT_SECRET.

## 5. Preparar la base de datos
- Crea la base de datos en MySQL
- Ejecuta el script de creación si el proyecto lo incluye:
  - \`npm run initdb\`
  - o importa \`schema.sql\` desde tu herramienta (Workbench/phpMyAdmin)

## 6. Arrancar el servidor
\`\`\`bash
npm run dev
\`\`\`

## 7. Verificación rápida
- Prueba un endpoint con Postman/Thunder Client:
  - GET http://localhost:3000/health
  - o GET http://localhost:3000/productos (según tu proyecto)`}
        />
      </PracticeBox>

      <h2>6.7. Manual de configuración</h2>

      <CodeBlock
        code={`# Manual de configuración

## Variables de entorno (.env)
- PORT: puerto del servidor
- DB_HOST/DB_PORT/DB_USER/DB_PASSWORD/DB_NAME: conexión MySQL
- JWT_SECRET: clave para firmar tokens
- CORS_ORIGIN: origen permitido del frontend

## CORS (ejemplo)
Permite solo tu frontend en desarrollo/producción.

## Logs
- Registrar errores del servidor (console/error o logger)
- No imprimir secretos (passwords, tokens completos)

## Producción
- APP_ENV=production (si se usa)
- DEBUG=false (si existe)
- Nunca exponer .env ni claves en el repositorio`}
      />

      <h2>6.8. JSDoc: documentar el código y generar documentación</h2>

      <p>
        JSDoc permite documentar funciones, módulos y clases con comentarios
        estructurados en JavaScript. A partir de esos comentarios se puede generar
        documentación en HTML.
      </p>

      <h3>6.8.1. Instalación</h3>
      <p>
        Instala JSDoc como dependencia de desarrollo en la carpeta donde tengas el{" "}
        <code>package.json</code> (normalmente <code>/backend</code>):
      </p>

      <CodeBlock code={`npm install jsdoc --save-dev`} />

      <h3>6.8.2. Sintaxis básica</h3>

      <CodeBlock
        code={`/**
 * Crea un token JWT para un usuario.
 * @param {{ id:number, email:string, role?:string }} user - Datos mínimos del usuario.
 * @returns {string} Token JWT firmado.
 */
export function crearToken(user) {
  // ...
  return "token";
}`}
      />

      <h3>6.8.3. Ejemplo aplicado a Express (controlador)</h3>

      <CodeBlock
        code={`/**
 * Controlador: registra un usuario.
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns {Promise<void>}
 */
export async function register(req, res) {
  const { email, password } = req.body;

  // validar datos, hashear password, insertar en BD...
  res.status(201).json({ ok: true });
}`}
      />

      <h3>6.8.4. Archivo jsdoc.json</h3>
      <p>
        Crea un archivo <code>jsdoc.json</code> en <code>/backend</code> para indicar qué carpeta
        documentar y dónde generar la salida:
      </p>

      <CodeBlock
        code={`{
  "source": {
    "include": ["./src"],
    "includePattern": ".js$"
  },
  "opts": {
    "destination": "./docs"
  }
}`}
      />

      <h3>6.8.5. Añadir scripts al package.json</h3>
      <p>
        Añadir un script permite ejecutar JSDoc con un comando estándar del proyecto.
      </p>

      <CodeBlock
        code={`{
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "doc": "jsdoc -c jsdoc.json"
  }
}`}
      />

    <h2>6.8. JSDoc: documentación del código en Node + Express</h2>

<p>
  JSDoc es un estándar para documentar código JavaScript mediante comentarios
  estructurados. Permite describir funciones, módulos y clases de forma clara y,
  además, generar documentación en HTML a partir del propio código fuente.
</p>

<p>
  En proyectos backend con Node y Express, JSDoc resulta especialmente útil para
  documentar la estructura interna de la aplicación sin necesidad de leer todo
  el código línea a línea.
</p>

<div className="chapter-card">
  <h3>Qué partes del backend conviene documentar con JSDoc</h3>
  <ul>
    <li>Controladores (routes / controllers)</li>
    <li>Servicios y lógica de negocio</li>
    <li>Middlewares</li>
    <li>Funciones de acceso a base de datos</li>
    <li>Utilidades compartidas</li>
  </ul>
</div>

<h3>6.8.1. Cuándo usar JSDoc</h3>
<p>
  JSDoc debe utilizarse en aquellas partes del código que tienen una
  responsabilidad clara y que son utilizadas por otras capas del sistema.
</p>

<ul>
  <li>Funciones públicas o exportadas</li>
  <li>Controladores de Express</li>
  <li>Servicios de negocio</li>
  <li>Middlewares</li>
  <li>Módulos reutilizables</li>
</ul>

<p>
  No es necesario documentar cada línea de código, sino aquellas piezas que
  definen el comportamiento del sistema.
</p>

<h3>6.8.2. Sintaxis básica de JSDoc</h3>
<p>
  Los comentarios JSDoc comienzan con <code>/**</code> y se colocan inmediatamente
  encima del elemento que documentan.
</p>

<CodeBlock
  code={`/**
 * Autentica a un usuario.
 *
 * @param {string} email - Email del usuario
 * @param {string} password - Contraseña en texto plano
 * @returns {Promise<Object>} Usuario autenticado
 */
export async function login(email, password) {
  // ...
}`}
/>

<h3>6.8.3. Etiquetas más utilizadas en backend</h3>

<table className="table">
  <thead>
    <tr>
      <th>Etiqueta</th>
      <th>Uso</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>@param</td>
      <td>Describe los parámetros de una función</td>
    </tr>
    <tr>
      <td>@returns</td>
      <td>Describe el valor devuelto</td>
    </tr>
    <tr>
      <td>@throws</td>
      <td>Indica errores que puede lanzar la función</td>
    </tr>
    <tr>
      <td>@example</td>
      <td>Incluye un ejemplo de uso</td>
    </tr>
    <tr>
      <td>@async</td>
      <td>Indica que la función es asíncrona</td>
    </tr>
    <tr>
      <td>@typedef</td>
      <td>Define estructuras de datos reutilizables</td>
    </tr>
  </tbody>
</table>

<h3>6.8.4. Documentar controladores de Express</h3>
<p>
  En los controladores es recomendable indicar los tipos de <code>req</code> y
  <code>res</code> para mejorar la comprensión del código y el autocompletado en
  el editor.
</p>

<CodeBlock
  code={`/**
 * Controlador que registra un usuario nuevo.
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns {Promise<void>}
 */
export async function register(req, res) {
  const { email, password } = req.body;
  // lógica de registro
  res.status(201).json({ ok: true });
}`}
/>

<h3>6.8.5. Documentar servicios y lógica de negocio</h3>
<p>
  Los servicios suelen contener la lógica principal de la aplicación y deben
  documentarse de forma clara, indicando entradas, salidas y posibles errores.
</p>

<CodeBlock
  code={`/**
 * Crea un pedido en base de datos.
 *
 * @param {number} userId - ID del usuario
 * @param {Array<{ productId:number, quantity:number }>} items - Productos del pedido
 * @returns {Promise<number>} ID del pedido creado
 * @throws {Error} Si el pedido no es válido
 */
export async function crearPedido(userId, items) {
  // ...
}`}
/>

<h3>6.8.6. Documentar middlewares</h3>
<p>
  Los middlewares tienen una firma específica que conviene documentar para dejar
  claro qué validan o modifican en la petición.
</p>

<CodeBlock
  code={`/**
 * Middleware de autenticación JWT.
 *
 * Verifica el token y añade req.user si es válido.
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
export function authMiddleware(req, res, next) {
  // ...
  next();
}`}
/>

<h3>6.8.7. Definir tipos reutilizables con @typedef</h3>
<p>
  Para estructuras de datos que se repiten en distintas partes del proyecto, se
  recomienda definir tipos reutilizables con <code>@typedef</code>.
</p>

<CodeBlock
  code={`/**
 * @typedef {Object} Usuario
 * @property {number} id
 * @property {string} email
 * @property {string} role
 */
`}
/>

<CodeBlock
  code={`/**
 * Crea un token JWT.
 *
 * @param {Usuario} user
 * @returns {string}
 */
export function crearToken(user) {
  // ...
}`}
/>

<h3>6.8.8. Instalación y configuración de JSDoc</h3>
<p>
  JSDoc se instala como dependencia de desarrollo en la carpeta donde se
  encuentra el <code>package.json</code>, normalmente en el backend.
</p>

<CodeBlock code={`npm install jsdoc --save-dev`} />

<p>
  Archivo de configuración <code>jsdoc.json</code> recomendado para un backend
  con estructura modular:
</p>

<CodeBlock
  code={`{
  "source": {
    "include": ["./src"],
    "includePattern": ".js$"
  },
  "opts": {
    "destination": "./docs",
    "recurse": true
  }
}`}
/>

<h3>6.8.9. Integración con package.json</h3>
<p>
  Añadir un script en el <code>package.json</code> permite generar la
  documentación con un único comando estándar del proyecto.
</p>

<CodeBlock
  code={`{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "doc": "jsdoc -c jsdoc.json"
  }
}`}
/>

<h3>6.8.10. Generar la documentación</h3>
<p>
  Una vez configurado, la documentación se genera ejecutando:
</p>

<CodeBlock code={`npm run doc`} />

<div className="chapter-card">
  <h3>Resultado de la generación</h3>
  <p>
    Se crea la carpeta <code>/backend/docs</code> con archivos HTML generados por
    JSDoc. Estos archivos incluyen:
  </p>
  <ul>
    <li>Índice de módulos y archivos</li>
    <li>Funciones, controladores y servicios documentados</li>
    <li>Parámetros, tipos y valores de retorno</li>
    <li>Tipos definidos con <code>@typedef</code></li>
  </ul>
  <p>
    Los archivos HTML pueden abrirse directamente en el navegador o publicarse
    junto al proyecto.
  </p>
</div>

<div className="chapter-card">
  <h3>Buenas prácticas con JSDoc</h3>
  <ul>
    <li>Usar descripciones claras y precisas</li>
    <li>Actualizar JSDoc cuando cambia la funcionalidad</li>
    <li>No documentar lo evidente</li>
    <li>Revisar que los tipos coincidan con el código real</li>
    <li>Evitar comentarios duplicados o desactualizados</li>
  </ul>
</div>

<div className="chapter-card">
  <h3>Errores comunes</h3>
  <ul>
    <li>Documentar funciones que ya no existen</li>
    <li>Tipos incorrectos en <code>@param</code></li>
    <li>No indicar el valor devuelto</li>
    <li>Mezclar lógica compleja con comentarios excesivos</li>
    <li>Generar la documentación una sola vez y no actualizarla</li>
  </ul>
</div>


      <h2>6.9. Capturas y flujo de navegación</h2>

      <div className="chapter-card">
        <h3>Qué conviene documentar con imágenes</h3>
        <ul>
          <li>Login y registro</li>
          <li>Flujo principal (crear, listar, editar, borrar)</li>
          <li>Flujos de error (validaciones, permisos, “no autorizado”)</li>
        </ul>
      </div>

     

      <NavigationButtons
        prevPath="/seguridad"
        nextPath="/mantenimiento"
        prevTitle="5. Seguridad Básica"
        nextTitle="7. Mantenimiento"
      />
    </div>
  );
};

export default Documentation;
export const meta = {
  title: "Documentación técnica (Node + Express)",
};
