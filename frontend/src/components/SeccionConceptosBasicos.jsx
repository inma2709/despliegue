// src/components/tema3/SeccionConceptosBasicos.jsx
import { PracticeBox, CodeBlock } from './ContentBoxes';

const SeccionConceptosBasicos = () => (
  <div className="chapter-card">
    <h2>3.1. Conceptos básicos de despliegue</h2>

    <p>
      Cuando hablamos de <strong>despliegue</strong> no hablamos de programar,
      sino de <strong>poner en marcha</strong> algo que ya está programado.
      Es el momento en el que tu proyecto deja de vivir solo en tu ordenador
      y pasa a estar disponible para otras personas.
    </p>

    <p>
      En cualquier despliegue, por sencillo que sea, siempre aparecen
      las mismas piezas básicas:
      <strong> código de la aplicación</strong>,{' '}
      <strong>servidor web</strong>, <strong>base de datos</strong>,{' '}
      <strong>dominio/DNS</strong> y, casi siempre, un{' '}
      <strong>certificado SSL</strong> para que el navegador no se queje.
    </p>

    <p>
      Una forma fácil de recordarlo es pensar siempre en el recorrido completo:
      <strong> usuario → dominio → servidor → aplicación → base de datos</strong>.
      Todo el Tema 3 consiste en entender y controlar cada paso de ese recorrido.
    </p>

    {/* BLOQUE 1: VISIÓN GENERAL */}
    <details open>
      <summary><strong>3.1.1. Las 5 piezas mínimas de un despliegue</strong></summary>

      <ul>
        <li>
          <strong>1) Código de la aplicación: </strong>
          tus archivos HTML, CSS, JavaScript, PHP, Node.js, imágenes, etc.
        </li>
        <li>
          <strong>2) Servidor web: </strong>
          programa que atiende las peticiones de los usuarios.
          Ejemplos: <strong>Nginx</strong>, <strong>Apache</strong>.
        </li>
        <li>
          <strong>3) Base de datos: </strong>
          almacena la información importante (usuarios, productos, pedidos…).
          Ejemplos: <strong>MySQL/MariaDB</strong>, PostgreSQL.
        </li>
        <li>
          <strong>4) Dominio y DNS: </strong>
          el dominio es el nombre fácil (<code>devcampus.es</code>) y el DNS es el
          “traductor” que lo convierte en una IP.
        </li>
        <li>
          <strong>5) Certificado SSL: </strong>
          permite usar <code>https://</code> y evita el aviso de “No es seguro”.
        </li>
      </ul>
    </details>

    {/* BLOQUE 2: EJEMPLO VISUAL */}
    <details>
      <summary><strong>3.1.2. El camino de un usuario al hacer clic</strong></summary>

      <p>
        Imagina que un alumno escribe <code>alumno1.devcampus.es</code> en su navegador.
        Por debajo, ocurre algo parecido a esto:
      </p>

      <CodeBlock
        code={`Usuario
  ↓ escribe la URL
navegador  ──► DNS (busca la IP de alumno1.devcampus.es)
              ↓
           Servidor (VPS)
              ↓
        Servidor web (Nginx/Apache)
              ↓
        Tu aplicación (HTML/JS, PHP, Node, etc.)
              ↓
          Base de datos (MySQL/MariaDB)`}
      />

      <p>En milésimas de segundo:</p>
      <ul>
        <li>El DNS encuentra la IP del servidor donde vive tu proyecto.</li>
        <li>El servidor web decide qué proyecto debe responder a esa URL.</li>
        <li>Tu aplicación genera la respuesta (por ejemplo, una lista de productos).</li>
        <li>El usuario ve la página en su navegador.</li>
      </ul>
    </details>
    {/* BLOQUE 3: EXPLICACIÓN DETALLADA */}
  <details>
  <summary><strong>3.1.3. Dominio, VPS y Servidor Web</strong></summary>

  <p>
    Cuando hablamos de desplegar una aplicación web, es fundamental entender que
    no todos los elementos tienen el mismo peso ni aparecen al mismo tiempo en el
    proceso. Uno de los errores más comunes es pensar que el primer paso es comprar
    un dominio, cuando en realidad el despliegue sigue un orden lógico distinto.
  </p>

  <p>
    Antes de que un usuario pueda escribir una dirección en el navegador, nuestra
    aplicación debe <strong>estar ejecutándose en algún sitio</strong>. Ese sitio
    es un <strong>servidor</strong>. El dominio vendrá después.
  </p>

  <h4>El camino lógico del despliegue</h4>

  <ul>
    <li>
      <strong>Aplicación funcionando en local</strong><br />
      El proyecto debe funcionar correctamente en nuestro ordenador.  
      Si no funciona en local, no funcionará en Internet.
    </li>

    <li>
      <strong>Servidor o alojamiento</strong><br />
      Elegimos dónde va a ejecutarse la aplicación. Este paso es clave, porque
      determina qué tipo de proyectos podremos desplegar y qué nivel de control
      tendremos.

      <p>Existen dos opciones habituales:</p>

      <ul>
        <li>
          <strong>Hosting compartido</strong> (opción básica y económica).<br />
          La aplicación se aloja junto a muchas otras en el mismo servidor físico,
          compartiendo recursos. El proveedor se encarga de la mayor parte de la
          configuración.
          <br /><br />
          Es adecuado para <strong>proyectos sencillos</strong>, como webs estáticas,
          blogs o CMS (WordPress), donde la base de datos existe pero no forma parte
          de una aplicación con lógica propia en el servidor.
        </li>

        <li>
          <strong>VPS (Servidor Privado Virtual)</strong> (uso profesional).<br />
          Es una parte aislada de un servidor físico con recursos reservados y un
          sistema operativo propio, que se administra como si fuera un servidor real.
          <br /><br />
          Es la opción recomendada para <strong>aplicaciones web completas</strong>
          y proyectos con backend propio.
        </li>
      </ul>

      <h4>¿Y si mi proyecto usa Node y Express?</h4>

      <p>
        Las aplicaciones desarrolladas con <strong>Node y Express no son solo
        archivos</strong>: son procesos que deben estar ejecutándose de forma
        continua en el servidor para atender peticiones, gestionar sesiones,
        acceder a la base de datos y aplicar lógica de negocio.
      </p>

      <p>
        Por este motivo, un <strong>hosting compartido tradicional no es adecuado</strong>
        para este tipo de proyectos. En cambio, un <strong>VPS sí es la opción correcta</strong>,
        ya que permite ejecutar procesos de servidor de manera permanente.
      </p>

      <p>
        Ejemplos claros de proyectos que <strong>necesitan VPS</strong>:
      </p>

      <ul>
        <li>Foros con usuarios registrados.</li>
        <li>Tiendas online con login, likes, carrito y compras.</li>
        <li>APIs REST con autenticación.</li>
        <li>Aplicaciones con base de datos integrada en la lógica.</li>
      </ul>

      <p>
        En todos estos casos, la aplicación no es solo “una web”, sino un
        <strong>servicio en ejecución</strong>. Por tanto,
        <strong>sí, es necesario contratar un VPS</strong>.
      </p>

      <p>
        <strong>Resumen clave:</strong><br />
        El hosting compartido sirve para mostrar contenido.<br />
        El VPS es necesario para ejecutar aplicaciones.
      </p>
    </li>

    <li>
      <strong>Servidor web</strong><br />
      Es el software que atiende las peticiones HTTP y entrega la aplicación al
      navegador. Los más habituales son <strong>Apache</strong> y
      <strong>Nginx</strong>.
    </li>

    <li>
  <strong>Dominio</strong><br />
  Es el nombre legible por humanos que apunta al servidor, por ejemplo
  <code>devcampus.es</code>. No es imprescindible al principio, ya que siempre
  se puede acceder mediante la IP.

  <p>
    Una vez elegido el servidor o el alojamiento (hosting compartido o VPS),
    lo más habitual y recomendable para proyectos educativos o sencillos es
    contratar el dominio <strong>en el mismo proveedor de hosting</strong>.
    Esto no es obligatorio, pero suele simplificar mucho el proceso.
  </p>

  <p>
    <strong>Ventajas de contratar el dominio en el mismo hosting:</strong>
  </p>

  <ul>
    <li>
      <strong>Configuración más sencilla:</strong> el dominio y el servidor
      suelen quedar enlazados automáticamente, sin necesidad de configurar
      manualmente los registros DNS.
    </li>
    <li>
      <strong>Menos errores:</strong> se evitan fallos típicos de principiantes
      al apuntar el dominio a la IP correcta.
    </li>
    <li>
      <strong>Gestión centralizada:</strong> dominio, DNS, hosting y certificados
      SSL se administran desde un mismo panel de control.
    </li>
    <li>
      <strong>SSL más fácil:</strong> muchos proveedores incluyen certificados
      HTTPS automáticos cuando el dominio está con ellos.
    </li>
  </ul>

  <p>
    <strong>Desventajas de contratar el dominio en el mismo hosting:</strong>
  </p>

  <ul>
    <li>
      <strong>Menor independencia:</strong> si quieres cambiar de hosting en el
      futuro, tendrás que mover también el dominio o reconfigurar los DNS.
    </li>
    <li>
      <strong>Precio:</strong> algunos proveedores renuevan los dominios a un
      precio más alto que registradores especializados.
    </li>
    <li>
      <strong>Menos control avanzado:</strong> en ciertos hostings, las opciones
      de DNS pueden ser más limitadas.
    </li>
  </ul>

  <p>
    En proyectos profesionales o a largo plazo, es habitual separar el dominio
    y el hosting para tener mayor control. Sin embargo, para aprender, practicar
    y desplegar proyectos educativos, contratar el dominio junto al hosting
    suele ser la opción más cómoda y segura.
  </p>
</li>


    <li>
  <strong>DNS (Sistema de Nombres de Dominio)</strong><br />
  El DNS (Domain Name System) es el sistema que se encarga de traducir los
  nombres de dominio legibles por humanos (como <code>devcampus.es</code>)
  en direcciones IP reales (por ejemplo <code>192.168.1.10</code>), que son
  las que utilizan los servidores para comunicarse entre sí.
  
  <p>
    Dicho de forma sencilla: el DNS es <strong>la guía telefónica de Internet</strong>.
    Cuando escribes un dominio en el navegador, el DNS indica a qué servidor
    debe conectarse.
  </p>

  <p>
    <strong>¿Hay que configurar el DNS?</strong><br />
    Depende de cómo hayas contratado el dominio y el hosting.
  </p>

  <ul>
    <li>
      <strong>Si el dominio y el hosting están en el mismo proveedor:</strong><br />
      En la mayoría de los casos, <strong>no necesitas configurar nada</strong>.
      El proveedor enlaza automáticamente el dominio con el servidor y crea
      los registros DNS necesarios.
    </li>

    <li>
      <strong>Si el dominio y el hosting están en proveedores distintos:</strong><br />
      Sí, es necesario <strong>configurar el DNS manualmente</strong>, indicando
      que el dominio debe apuntar a la IP del servidor o a los servidores DNS
      del hosting.
    </li>
  </ul>

  <p>
    <strong>¿El DNS lo da el hosting?</strong><br />
    El DNS está asociado al <strong>dominio</strong>, pero suele ser gestionado
    por el proveedor donde está registrado el dominio. No obstante, los
    proveedores de hosting suelen facilitar:
  </p>

  <ul>
    <li>La dirección IP del servidor.</li>
    <li>Los registros DNS que hay que crear (A, CNAME, etc.).</li>
    <li>O incluso servidores DNS propios para que apuntes el dominio a ellos.</li>
  </ul>

  <p>
    Una vez configurado el DNS, los cambios no son inmediatos. Puede existir un
    tiempo de propagación (desde unos minutos hasta varias horas) hasta que el
    dominio apunte correctamente al servidor.
  </p>

  <p>
    <strong>Idea clave:</strong><br />
    El DNS no es algo que “instales”, es algo que se <strong>configura</strong>
    para decir qué dominio apunta a qué servidor. Ejemplo: <code>registro A</code> apuntando a una IP.
  </p>
</li>


    <li>
      <strong>Seguridad (HTTPS)</strong><br />
      Se añade un certificado SSL para asegurar la comunicación entre el navegador
      y el servidor.
    </li>
  </ul>

  <p>
    Entender este proceso evita errores muy comunes, como contratar un dominio sin
    saber aún dónde se va a desplegar la aplicación o intentar subir una app de
    Node a un hosting que no puede ejecutarla.
  </p>

  <p>
    <strong>Idea clave para el alumnado:</strong><br />
    El dominio pone el nombre.<br />
    El servidor pone la potencia.<br />
    La aplicación es lo que realmente importa.
  </p>
  <p>Ahora vamos a ver <strong>los tipos de hosting</strong> disponibles y cómo elegir el más adecuado para tu proyecto.</p>
  <p>Existen varias opciones de hosting, cada una con sus ventajas y desventajas:</p>
  <ul>
    <li>
      <strong>Hosting Compartido:</strong> Es la opción más económica y sencilla.
      Aquí, múltiples sitios web comparten los recursos de un mismo servidor.
      Es ideal para proyectos pequeños o personales, como blogs o páginas estáticas.
    </li>
    <li>
      <strong>VPS (Servidor Privado Virtual):</strong> Ofrece más control y recursos
      dedicados. Es adecuado para aplicaciones web más complejas que requieren
      configuraciones personalizadas, como tiendas online o aplicaciones con backend.
    </li>
    <li>
      <strong>Servidores Dedicados:</strong> Proporcionan un servidor completo
      para tu uso exclusivo. Son ideales para grandes proyectos empresariales
      que necesitan alto rendimiento y seguridad.
    </li>
    <li>
      <strong>Plataformas en la Nube:</strong> Servicios como AWS, Google Cloud
      o Azure permiten escalar recursos según la demanda. Son perfectos para aplicaciones
      que pueden experimentar picos de tráfico.
    </li>
  </ul>
  
  <p>
    En resumen, al elegir un tipo de hosting, considera las necesidades específicas de tu proyecto, como el tráfico esperado, la complejidad de la aplicación y el presupuesto disponible. Cada opción tiene sus ventajas y desventajas, así que elige sabiamente.
  </p>  
</details>




    {/* BLOQUE 3: MINI-CONEXIÓN CON BAZAR */}
    <details>
      <summary><strong>3.1.4. Relacionándolo con Bazar y DevCampus</strong></summary>

      <p>
        Si piensas en el proyecto <strong>Bazar</strong>, ya has usado todas estas piezas:
      </p>
      <ul>
        <li>
          <strong>Código de la aplicación: </strong> frontend (HTML/JS) + backend Node.js.
        </li>
        <li>
          <strong>Servidor web / backend: </strong> Express recibiendo peticiones en{' '}
          <code>http://localhost:3000</code>.
        </li>
        <li>
          <strong>Base de datos: </strong> MySQL/MariaDB con tablas de usuarios, productos,
          pedidos…
        </li>
        <li>
          <strong>Dominio: </strong> en local usamos <code>localhost</code>, pero la idea es
          la misma que con un dominio real.
        </li>
      </ul>

      <p>
        En el VPS de <strong>DevCampus</strong> haremos lo mismo, pero en “modo profesional”:
        dominio real (<code>devcampus.es</code>), subdominios para los alumnos y Nginx delante.
      </p>
    </details>

    {/* BLOQUE 4: ACTIVIDAD RÁPIDA */}
    <PracticeBox title="Actividad rápida: identifica las piezas en tu proyecto">
      <p>
        Piensa en el último proyecto web que has hecho (Bazar, una web estática,
        un trabajo de clase…) y responde:
      </p>
      <ol>
        <li>¿Dónde vivía el código (carpeta local, GitHub…)?</li>
        <li>¿Qué hacía de servidor web (Apache, Node/Express, solo HTML…)?</li>
        <li>¿Usaba base de datos? ¿Cuál y dónde estaba?</li>
        <li>¿Tenía dominio real o solo <code>localhost</code>?</li>
        <li>Si lo publicaras en Internet, ¿necesitaría HTTPS? ¿Por qué?</li>
      </ol>
      <p>
        Guarda estas respuestas: te ayudarán a entender mejor el resto del tema
        cuando pasemos a hosting, VPS y subdominios.
      </p>
    </PracticeBox>
  </div>
);

export default SeccionConceptosBasicos;
