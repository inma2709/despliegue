import NavigationButtons from '../components/NavigationButtons'
import { ActivityBox, PracticeBox, CodeBlock, WarningBox } from '../components/ContentBoxes'

const Testing = () => {
  return (
    <div className="testing">
      <h1>4. Verificación y Pruebas de la Aplicación</h1>

      <p>
        En un proyecto real, <strong>testing</strong> significa comprobar que la app funciona como se espera
        en condiciones “normales” y también cuando algo falla. El objetivo no es “buscar culpables”:
        es <strong>reducir errores</strong> y <strong>ganar confianza</strong> antes de publicar.
      </p>

      {/* =========================================================
         4.0 · Entorno real de trabajo (nuevo)
      ========================================================== */}
      <h2>4.0. ¿Cómo es un entorno de trabajo de testing?</h2>

      <div className="chapter-card">
        <h3>Tu “puesto de trabajo” de testing</h3>
        <ul>
          <li><strong>Navegador + DevTools</strong> (Console, Network, Application/Storage)</li>
          <li><strong>Editor</strong> (VS Code)</li>
          <li><strong>Cliente de API</strong> (Thunder Client / Postman)</li>
          <li><strong>Terminal</strong> (npm scripts, logs del servidor)</li>
          <li><strong>Repo Git</strong> (ramas, commits, issues/tareas)</li>
        </ul>

        <h3>Objetivos típicos de un tester (o de un dev haciendo testing)</h3>
        <ul>
          <li>✅ Verificar requisitos (lo que “debe hacer” la app)</li>
          <li>✅ Detectar fallos reproducibles (pasos claros para repetir el error)</li>
          <li>✅ Validar casos límite (campos vacíos, formatos raros, errores de red)</li>
          <li>✅ Comprobar permisos y rutas protegidas</li>
          <li>✅ Confirmar que el rendimiento y la accesibilidad son aceptables</li>
        </ul>

        <WarningBox title="Idea importante">
          <p>
            El testing no es solo “probar si carga”. Es trabajar con un <strong>método</strong>:
            casos de prueba, evidencias (capturas), y resultados esperados.
          </p>
        </WarningBox>
      </div>

      {/* =========================================================
         4.1
      ========================================================== */}
      <h2>4.1. ¿Qué es verificar? Diferencia entre probar y depurar</h2>

      <div className="chapter-card">
        <h3>Definiciones importantes</h3>
        <ul>
          <li><strong>Verificar:</strong> comprobar que la aplicación cumple los requisitos</li>
          <li><strong>Probar (Testing):</strong> ejecutar con datos de prueba para encontrar fallos</li>
          <li><strong>Depurar (Debug):</strong> localizar la causa del fallo y corregir el código</li>
          <li><strong>Validar:</strong> confirmar que satisface lo que el usuario necesita</li>
        </ul>
      </div>

      {/* =========================================================
         4.2
      ========================================================== */}
      <h2>4.2. Pruebas funcionales</h2>

      <p>
        Las pruebas funcionales comprueban que cada parte de la app hace lo que tiene que hacer:
        botones, formularios, rutas, API, login, pedidos, etc.
      </p>

      <div className="chapter-card">
        <h3>Tipos de pruebas funcionales</h3>

        <h4>Pruebas de unidad</h4>
        <p>Verifican funciones o piezas pequeñas de código (por ejemplo, validaciones).</p>

        <CodeBlock
          code={`// ✅ Ejemplo simple: función de validación (JS)
function validarEmail(email) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
}

// Casos de prueba rápidos
console.log(validarEmail("usuario@ejemplo.com")); // true
console.log(validarEmail("email-invalido"));      // false
console.log(validarEmail(""));                    // false`}
        />

        <h4>Pruebas de integración</h4>
        <p>Verifican que distintas partes trabajan juntas (frontend ↔ backend ↔ BD).</p>

        <h4>Pruebas de sistema</h4>
        <p>Verifican el flujo completo como lo usaría un usuario (de principio a fin).</p>
      </div>

      {/* =========================================================
         4.3
      ========================================================== */}
      <h2>4.3. Pruebas de validación (formularios, campos obligatorios)</h2>

      <PracticeBox title="Checklist para formularios (cliente y servidor)">
        <h4>Validaciones en el cliente (frontend)</h4>
        <ul>
          <li>✅ Campos obligatorios marcados</li>
          <li>✅ Formato de email</li>
          <li>✅ Longitud mínima de contraseñas</li>
          <li>✅ Confirmación de contraseña</li>
          <li>✅ Mensajes claros cerca del campo</li>
        </ul>

        <h4>Validaciones en el servidor (backend)</h4>
        <ul>
          <li>✅ Revalidar todo (no confiar en el navegador)</li>
          <li>✅ Sanitizar/validar tipos (string, número, email…)</li>
          <li>✅ Comprobar duplicados (email repetido)</li>
          <li>✅ Limitar tamaño (inputs y ficheros)</li>
        </ul>
      </PracticeBox>

      <CodeBlock
        code={`// ✅ Ejemplo (backend Node/Express): validar datos de registro de forma simple
function validarRegistro({ nombre, email, password }) {
  const errores = [];

  if (!nombre || nombre.trim().length < 2) errores.push("El nombre debe tener al menos 2 caracteres");
  if (!email || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) errores.push("El email no es válido");
  if (!password || password.length < 8) errores.push("La contraseña debe tener al menos 8 caracteres");

  return errores;
}

// Uso típico en un endpoint:
app.post("/auth/register", (req, res) => {
  const errores = validarRegistro(req.body);
  if (errores.length) return res.status(400).json({ errores });
  res.json({ ok: true });
});`}
      />

      {/* =========================================================
         4.4 (PHP -> Node)
      ========================================================== */}
      <h2>4.4. Pruebas de integración (frontend – API – BD)</h2>

      <p>
        Aquí comprobamos que la API responde bien y que los datos “van y vuelven” correctamente.
        En un entorno real, esto se prueba con <strong>Thunder Client/Postman</strong> y también con
        scripts pequeños de Node.
      </p>

      <h3>Script de prueba (Node): comprobar endpoints</h3>
      <CodeBlock
        code={`// test-api.js (Node 18+)
// Ejecuta: node test-api.js
// (Si tu API usa auth, adapta el token en headers)

const baseURL = "http://localhost:3000"; // cambia a tu puerto real

async function testEndpoint(path) {
  const res = await fetch(baseURL + path);
  const text = await res.text();
  console.log(path, "->", res.status, "|", text.slice(0, 120));
}

(async () => {
  try {
    await testEndpoint("/health");       // recomendable tener un endpoint de salud
    await testEndpoint("/api/productos"); // ejemplo típico
    await testEndpoint("/api/pedidos");   // debería estar protegido si requiere login
  } catch (err) {
    console.error("Fallo al probar API:", err.message);
  }
})();`}
      />

      <WarningBox title="Tip profesional">
        <p>
          Es buena práctica tener un endpoint <code>/health</code> que devuelva OK y confirme que el servidor está vivo.
        </p>
      </WarningBox>

      {/* =========================================================
         4.5
      ========================================================== */}
      <h2>4.5. Pruebas de rendimiento básicas (Lighthouse)</h2>

      <PracticeBox title="Herramientas de rendimiento">
        <h4>Lighthouse (en Chrome)</h4>
        <ol>
          <li>Abrir DevTools (F12)</li>
          <li>Ir a pestaña “Lighthouse”</li>
          <li>Seleccionar categorías</li>
          <li>Ejecutar análisis</li>
          <li>Aplicar recomendaciones</li>
        </ol>

        <h4>Métricas que te miran en un proyecto</h4>
        <ul>
          <li><strong>Performance</strong> (carga)</li>
          <li><strong>Accessibility</strong> (accesibilidad)</li>
          <li><strong>Best Practices</strong> (buenas prácticas)</li>
          <li><strong>SEO</strong> (búsqueda)</li>
        </ul>
      </PracticeBox>

      {/* =========================================================
         4.6
      ========================================================== */}
      <h2>4.6. Pruebas manuales con el navegador</h2>

      <div className="chapter-card">
        <h3>Checklist de pruebas manuales</h3>

        <h4>Funcionalidad básica</h4>
        <ul>
          <li>✅ Todas las páginas cargan</li>
          <li>✅ Enlaces funcionan</li>
          <li>✅ Formularios se envían</li>
          <li>✅ Login/Logout funciona</li>
          <li>✅ Manejo de errores (sin pantallas “rotas”)</li>
        </ul>

        <h4>Responsive</h4>
        <ul>
          <li>✅ Desktop</li>
          <li>✅ Tablet</li>
          <li>✅ Móvil</li>
        </ul>

        <h4>DevTools que usarás sí o sí</h4>
        <ul>
          <li><strong>Console</strong>: errores y logs del frontend</li>
          <li><strong>Network</strong>: ver requests, tiempos, status 200/400/500</li>
          <li><strong>Application</strong>: localStorage/sessionStorage/cookies (tokens)</li>
        </ul>
      </div>

      {/* =========================================================
         4.7
      ========================================================== */}
      <h2>4.7. Pruebas de API con Postman / Thunder Client</h2>

      <p>
        Estas herramientas te permiten probar la API sin depender del frontend.
        Es decir: <strong>si falla algo</strong>, puedes saber si el problema está en la API o en la interfaz.
      </p>

      <div className="chapter-card">
        <h3>Thunder Client en VS Code (flujo típico)</h3>
        <ol>
          <li>Instalar extensión “Thunder Client”</li>
          <li>Crear colección “API Tests”</li>
          <li>Guardar requests: login, productos, pedidos…</li>
          <li>Repetir pruebas rápidamente cuando cambias código</li>
        </ol>
      </div>

      <CodeBlock
        code={`// ✅ Ejemplos de requests (Thunder Client / Postman)

// 1) GET - Listar productos
GET http://localhost:3000/api/productos

// 2) POST - Login (ejemplo)
POST http://localhost:3000/auth/login
Headers: Content-Type: application/json
Body: { "email": "test@demo.com", "password": "password123" }

// 3) GET - Ruta protegida (con token)
GET http://localhost:3000/api/pedidos
Headers: Authorization: Bearer TU_TOKEN`}
      />

      {/* =========================================================
         4.8 (PHP -> enfoque profesional)
      ========================================================== */}
      <h2>4.8. Comprobación de rutas, permisos y errores (lo que se revisa en equipos)</h2>

      <div className="chapter-card">
        <h3>Qué se comprueba</h3>
        <ul>
          <li>✅ Rutas públicas responden bien (200)</li>
          <li>✅ Rutas inexistentes devuelven 404</li>
          <li>✅ Rutas protegidas sin token devuelven 401</li>
          <li>✅ Rutas protegidas con token inválido devuelven 403 (según diseño)</li>
          <li>✅ Errores controlados devuelven mensajes claros (sin filtrar información)</li>
        </ul>
      </div>

      <CodeBlock
        code={`// ✅ Script Node para probar códigos de estado (rápido)
// Ejecuta: node test-rutas.js

const baseURL = "http://localhost:3000";
const routes = ["/", "/login", "/api/productos", "/api/pedidos", "/ruta-que-no-existe"];

(async () => {
  for (const r of routes) {
    try {
      const res = await fetch(baseURL + r);
      console.log(r, "->", res.status);
    } catch (e) {
      console.log(r, "-> ERROR de conexión");
    }
  }
})();`}
      />

      {/* =========================================================
         4.9
      ========================================================== */}
      <h2>4.9. Simulación de errores típicos y solución</h2>

      <WarningBox title="Errores comunes y cómo se abordan">
        <h4>400 - Bad Request</h4>
        <ul>
          <li><strong>Causa:</strong> validación falla (faltan campos, formatos incorrectos)</li>
          <li><strong>Solución:</strong> revisar body enviado y mensajes de validación</li>
        </ul>

        <h4>401/403 - No autorizado</h4>
        <ul>
          <li><strong>Causa:</strong> falta token o permisos</li>
          <li><strong>Solución:</strong> probar login, headers Authorization, y reglas de acceso</li>
        </ul>

        <h4>500 - Error interno</h4>
        <ul>
          <li><strong>Causa:</strong> fallo en backend (query, excepción, servidor)</li>
          <li><strong>Solución:</strong> mirar logs del backend (terminal/hosting) y reproducir pasos</li>
        </ul>
      </WarningBox>

      {/* =========================================================
         4.10
      ========================================================== */}
      <h2>4.10. Informe de verificación (cómo se documenta el testing)</h2>

      <PracticeBox title="Plantilla de informe de pruebas (simple y realista)">
        <CodeBlock
          code={`# INFORME DE VERIFICACIÓN

## Proyecto
- Nombre: [Nombre del proyecto]
- Versión: [vX.Y.Z]
- Fecha: [DD/MM/AAAA]
- Responsable: [Nombre]

## Entorno de pruebas
- Frontend: [React/Vite...]
- Backend: [Node/Express...]
- BD: [MySQL...]
- Navegadores: [Chrome/Firefox...]
- URL local / staging: [http://...]

## Casos de prueba (resumen)
| ID | Caso | Resultado esperado | Resultado real | Estado |
|----|------|--------------------|----------------|--------|
| 01 | Login correcto | Entra al panel | Entra al panel | ✅ OK |
| 02 | Login incorrecto | Mensaje claro | Mensaje claro | ✅ OK |
| 03 | Ruta /api/pedidos sin token | 401 | 401 | ✅ OK |

## Incidencias encontradas
- INC-01: [Descripción + pasos para reproducir]
- INC-02: [Descripción + pasos para reproducir]

## Conclusión
[Estado general: Apta / Apta con incidencias / No apta]`}
        />
      </PracticeBox>

      <ActivityBox title="Actividad: crea 10 casos de prueba (modo equipo)">
        <p>
          Imagina que trabajas como tester o dev en un equipo. Crea 10 casos de prueba para una aplicación
          de gestión de tareas.
        </p>
        <p>
          Para cada caso incluye: <strong>prerrequisitos</strong>, <strong>pasos</strong>,{" "}
          <strong>resultado esperado</strong> y <strong>criterios de aceptación</strong>.
        </p>
        <ol>
          <li>Registro de nuevo usuario</li>
          <li>Login con credenciales válidas</li>
          <li>Login con credenciales inválidas</li>
          <li>Crear nueva tarea</li>
          <li>Marcar tarea como completada</li>
          <li>Editar tarea existente</li>
          <li>Eliminar tarea</li>
          <li>Filtrar tareas por estado</li>
          <li>Buscar tareas por texto</li>
          <li>Cerrar sesión</li>
        </ol>
      </ActivityBox>

      <NavigationButtons
        prevPath="/despliegue"
        nextPath="/seguridad"
        prevTitle="3. Despliegue"
        nextTitle="5. Seguridad Básica"
      />
    </div>
  )
}

export default Testing
