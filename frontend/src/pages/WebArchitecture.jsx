import NavigationButtons from '../components/NavigationButtons'
import { ActivityBox, PracticeBox, CodeBlock, WarningBox } from '../components/ContentBoxes'

const WebArchitecture = () => {
  return (
    <div className="web-architecture">
      <h1>2. Arquitectura de una Aplicación Web</h1>
      
      <p>
        Hasta ahora has ido montando piezas casi sin darte cuenta: pantallas con HTML y CSS,
        un backend que respondía a peticiones y una base de datos con productos, usuarios
        y pedidos (en el proyecto <strong>Bazar</strong>).  
        Es normal que la palabra <strong>MVC</strong> todavía te haga dudar un poco.
      </p>
      <p>
        En esta lección no vamos a complicar más las cosas. Al revés: 
        vamos a <strong>simplificar</strong>. Queremos que tengas en la cabeza una idea clara:
        una aplicación web es, sobre todo, <strong>un equipo de tres jugadores</strong>:
        el navegador, el servidor y la base de datos.
      </p>

      <h2>2.1. La idea clave: tres piezas que se hablan</h2>
      <p>
        Imagina que tu aplicación web es un restaurante:
      </p>
      <ul>
        <li>
          El <strong>cliente (frontend)</strong> sería el comedor: las mesas, la carta,
          los camareros que hablan con el cliente.
        </li>
        <li>
          El <strong>servidor / cocina (backend)</strong> sería la cocina donde se preparan
          los platos a partir de lo que piden los clientes.
        </li>
        <li>
          La <strong>base de datos</strong> sería la despensa donde se guarda la comida:
          los ingredientes, las bebidas, etc.
        </li>
      </ul>
      <p>
        En el proyecto <strong>Bazar</strong> pasa algo muy parecido:
      </p>
      <ul>
        <li>El usuario ve la tienda, el carrito, los botones (frontend).</li>
        <li>Tu código decide qué hacer cuando hace clic en “Añadir al carrito” (backend).</li>
        <li>La base de datos guarda los productos, los usuarios y los pedidos (BD).</li>
      </ul>

      <h2>2.2. Componentes básicos</h2>

      <div className="chapter-card">
        <h3>1) Cliente (Frontend)</h3>
        <p>
          Es lo que el usuario ve en la pantalla. Lo puedes pensar como 
          “la parte bonita y visible” de tu aplicación.
        </p>
        <ul>
          <li><strong>HTML:</strong> estructura (títulos, textos, botones, formularios).</li>
          <li><strong>CSS:</strong> colores, tamaños, márgenes, diseño.</li>
          <li><strong>JavaScript:</strong> pequeñas “inteligencias” en la página:
            mostrar/ocultar cosas, validar formularios, llamar al servidor con <code>fetch</code>, etc.</li>
        </ul>

        <h3>2) Servidor (Backend)</h3>
        <p>
          Es el “cerebro” que no se ve. Recibe peticiones, piensa qué hacer y devuelve una respuesta.
        </p>
        <ul>
          <li>En Bazar, el backend era Node/Express.</li>
          <li>Con XAMPP, el backend suele ser PHP.</li>
          <li>Da igual el lenguaje: la idea es la misma → recibe, procesa, responde.</li>
        </ul>

        <h3>3) Base de datos</h3>
        <p>
          Es el lugar donde se guarda la información de forma ordenada.
        </p>
        <ul>
          <li>Productos (nombre, precio, stock…).</li>
          <li>Usuarios (email, contraseña cifrada, rol…).</li>
          <li>Pedidos (qué ha comprado cada usuario y cuándo).</li>
        </ul>

        <h3>4) Archivos estáticos</h3>
        <p>
          Todo lo que no cambia “por dentro” en el servidor:
        </p>
        <ul>
          <li>Imágenes (logos, fotos de productos).</li>
          <li>Estilos CSS.</li>
          <li>Archivos JavaScript del lado cliente.</li>
        </ul>
      </div>

      <h2>2.3. Cómo se relaciona esto con tu Bazar</h2>
      <p>
        Para que lo veas muy claro, piensa en tu <strong>Bazar</strong>:
      </p>
      <ul>
        <li>
          Cuando el usuario abre la página de productos, el <strong>frontend</strong> muestra
          una lista bonita con sus precios y botones.
        </li>
        <li>
          Cuando el usuario hace clic en “Añadir al carrito”, el <strong>backend</strong> recibe
          esa petición, actualiza el carrito y responde con el estado nuevo.
        </li>
        <li>
          Cuando se confirma el pedido, se guarda la información en la 
          <strong> base de datos</strong>.
        </li>
      </ul>
      <p>
        Esa forma de separar responsabilidades (pantalla, lógica, datos) es lo que está
        detrás de muchos términos que escucharás en el sector: <strong>MVC, capas, arquitectura</strong>.  
        No hace falta que ahora domines todo eso. De momento, quédate con:
      </p>
      <p>
        <strong>“Una aplicación web bien montada no es un archivo gigante, 
        sino varias piezas que se reparten el trabajo.”</strong>
      </p>
<h2>2.4. Una estructura de carpetas sencilla</h2>

<p>
  Todo el código del backend de nuestro proyecto web estará dentro de una carpeta,
  por ejemplo <code className="etiqueta-codigo">backend</code>. Esta será una
  estructura sencilla pero ordenada, suficiente para trabajar correctamente
  sin complicarnos:
</p>

<pre className="bloque-codigo">
  <code>
{`mi-proyecto-web/
├── public/                // Parte visible para el usuario (frontend)
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── img/
│
├── backend/               // Parte del servidor (lógica y datos)
│   ├── package.json       // Configuración del proyecto backend
│   ├── server.js          // Punto de entrada del servidor
│   ├── .env               // Variables de entorno
│   ├── config/
│   │   └── db.js          // Conexión a la base de datos
│   ├── models/            // Acceso a datos (consultas)
│   ├── controllers/       // Lógica de la aplicación
│   └── routes/            // Rutas de la API
│
├── database/              // Scripts SQL y notas de base de datos
└── docs/                  // Documentación del proyecto`}
  </code>
</pre>

     <PracticeBox title="Bonus · Crear la estructura desde el terminal">
  <p>
    A continuación se muestran los comandos básicos que podemos usar en el
    terminal para crear esta estructura de carpetas y archivos desde cero.
    Son comandos habituales en entornos Linux, macOS y Git Bash en Windows.
  </p>
  <p>El comando <code className="etiqueta-codigo">mkdir</code> se emplea para crear carpetas, mientras que la opción <code className="etiqueta-codigo">-p</code> permite generar varias carpetas anidadas de una sola vez, aunque las carpetas “padre” no existan previamente. Por su parte, el comando <code className="etiqueta-codigo">touch</code> se utiliza para crear archivos vacíos que posteriormente rellenaremos con código, y <code className="etiqueta-codigo">cd</code> nos permite movernos entre directorios. Con estas órdenes básicas dejamos preparada la estructura mínima del proyecto, tanto del frontend como del backend, antes de comenzar el desarrollo propiamente dicho. </p>
<p> Estas órdenes deben ejecutarse desde la carpeta donde queramos crear el proyecto, normalmente un directorio de trabajo personal como <code className="etiqueta-codigo">Documentos</code>, <code className="etiqueta-codigo">Escritorio</code> o una carpeta específica para proyectos. Es decir, antes de empezar, el terminal debe estar situado en la ubicación “padre” del proyecto, ya que el primer comando <code className="etiqueta-codigo">mkdir mi-proyecto-web</code> creará la carpeta raíz. A partir de ese momento, al ejecutar <code className="etiqueta-codigo">cd mi-proyecto-web</code>, todas las órdenes siguientes se lanzarán dentro del propio proyecto, construyendo su estructura interna de forma correcta y ordenada. </p>
  <CodeBlock
    code={`# 1. Crear la carpeta raíz del proyecto
mkdir mi-proyecto-web
cd mi-proyecto-web

# 2. Crear la estructura del frontend
mkdir -p public/css public/js public/img
touch public/index.html

# 3. Crear la estructura del backend
mkdir -p backend/config backend/models backend/controllers backend/routes
touch backend/package.json
touch backend/server.js
touch backend/.env
touch backend/config/db.js

# 4. Crear carpetas adicionales
mkdir database
mkdir docs`}
  />

  <p>
    <strong>Explicación rápida:</strong>
  </p>

  <ul>
    <li>
      <code className="etiqueta-codigo">mkdir</code> crea carpetas.
    </li>
    <li>
      <code className="etiqueta-codigo">mkdir -p</code> permite crear varias carpetas
      anidadas de una sola vez.
    </li>
    <li>
      <code className="etiqueta-codigo">touch</code> crea archivos vacíos.
    </li>
    <li>
      <code className="etiqueta-codigo">cd</code> sirve para entrar en una carpeta.
    </li>
  </ul>

  <p>
    Con estos comandos tenemos lista la base del proyecto para empezar a
    desarrollar tanto el frontend como el backend de forma ordenada.
  </p>
</PracticeBox>


      <h2>2.5. El viaje de una petición </h2>
      <p>
        Cuando haces clic en un botón o escribes una URL, pasan varias cosas “por detrás”.
        No hace falta memorizarlo palabra por palabra, pero sí que te suene este viaje:
      </p>

      <CodeBlock code={`1. El usuario hace algo (clic, formulario, URL...).
2. El navegador envía una petición al servidor.
3. El servidor piensa: mira los datos, decide qué hacer.
4. Si hace falta, pregunta a la base de datos.
5. La base de datos responde.
6. El servidor prepara una respuesta (HTML, JSON...).
7. El navegador dibuja en pantalla el resultado.`} />

      <ActivityBox title="Actividad: tu Bazar en tres cajas">
        <p>
          Haz un dibujo en tu cuaderno (o en una hoja en blanco) con tres cajas grandes:
        </p>
        <ul>
          <li><strong>Caja 1:</strong> Navegador / Frontend.</li>
          <li><strong>Caja 2:</strong> Servidor / Backend.</li>
          <li><strong>Caja 3:</strong> Base de datos.</li>
        </ul>
        <p>
          Dentro de cada caja, escribe ejemplos concretos de tu proyecto Bazar:
        </p>
        <ul>
          <li>En la caja 1: “lista de productos”, “formulario de login”…</li>
          <li>En la caja 2: “ruta POST /login”, “controlador de pedidos”…</li>
          <li>En la caja 3: “tabla productos”, “tabla usuarios”, “tabla pedidos”…</li>
        </ul>
        <p>
          No busques hacerlo perfecto: la idea es que empieces a <strong>ver tu proyecto
          como un sistema de piezas que se comunican</strong>, no como un montón de archivos sueltos.
        </p>
      </ActivityBox>

      <WarningBox title="Buenas prácticas sencillas (sin tecnicismos)">
        <ul>
          <li>No mezclarlo todo en la misma carpeta “cajón desastre”.</li>
          <li>Intentar que lo visual (HTML/CSS) no tenga lógica complicada.</li>
          <li>Guardar la lógica “seria” (cálculos, validaciones) en el backend.</li>
          <li>Usar la base de datos para datos importantes, no para cosas temporales.</li>
          <li>Escribir pequeñas notas o documentación para ayudarte a ti mismo/a.</li>
        </ul>
      </WarningBox>

      <PracticeBox title="Mini ejercicio guiado">
        <ol>
          <li>Crea una carpeta llamada <code>mi-mini-bazar</code> en tu equipo.</li>
          <li>
            Dentro, crea solo estas tres carpetas: <code>public</code>, <code>backend</code> 
            y <code>database</code>.
          </li>
          <li>
            En <code>public</code>, crea un <code>index.html</code> muy simple con un título 
            “Bienvenido a mi mini Bazar”.
          </li>
          <li>
            En <code>database</code>, crea un archivo <code>notas-bd.txt</code> donde escribas:
            “Aquí irían las tablas productos, usuarios y pedidos”.
          </li>
          <li>
            En <code>backend</code>, crea un archivo vacío llamado <code>ideas-backend.txt</code>
            y apunta qué te gustaría que hiciera el servidor (por ejemplo: “iniciar sesión”,
            “guardar pedido”).
          </li>
        </ol>
        <p>
          Con esto no hemos programado nada nuevo, pero sí hemos dado un paso muy importante:
          <strong>organizar tu cabeza y tus carpetas como lo haría un profesional</strong>.
        </p>
      </PracticeBox>

      <NavigationButtons 
        prevPath="/entornos-web"
        nextPath="/despliegue"
        prevTitle="1. Entornos Web"
        nextTitle="3. Despliegue de Aplicaciones"
      />
    </div>
  )
}

export default WebArchitecture
