import NavigationButtons from '../components/NavigationButtons'
import { ActivityBox, PracticeBox, CodeBlock, WarningBox } from '../components/ContentBoxes'

const WebEnvironments = () => {
  return (
    <div className="web-environments">
      <h1>1. Entornos Web: Internet, Intranet y Extranet</h1>

      <p>
        En esta lección vamos a responder a una pregunta muy importante:
        <strong> ¿dónde “vive” realmente una aplicación web?</strong>
        No es lo mismo que tu proyecto funcione solo en tu ordenador,
        que funcione dentro de la red del centro o que esté disponible
        para cualquier persona en Internet.
      </p>

      <p>
        Aprenderemos a diferenciar <strong>Internet, Intranet y Extranet</strong>,
        conoceremos conceptos como <strong>LAN, WiFi y VPN</strong>,
        y entenderemos qué es un <strong>servidor web</strong>
        y cómo funciona en un entorno real.
      </p>

      {/* ================================================= */}
      <h2>1.1. ¿Qué es un entorno web?</h2>

      <p>
        Cuando hablamos de <em>entorno web</em> nos referimos al
        <strong> contexto en el que se publica y se utiliza una aplicación</strong>:
        quién puede acceder, desde dónde, con qué permisos y a través de qué red.
      </p>

      <p>
        A nivel profesional, se suelen distinguir tres grandes entornos:
        <strong> Internet, Intranet y Extranet</strong>.
      </p>

      {/* ================================================= */}
      <h3>Internet</h3>

      <p>
        Internet es la <strong>red global pública</strong> a la que nos conectamos
        cada día desde el móvil u ordenador.
        Una aplicación web publicada en Internet está pensada para que
        pueda acceder prácticamente cualquier persona del mundo.
      </p>

      <ul>
        <li>Ejemplos: tiendas online, redes sociales, blogs, plataformas de vídeo.</li>
        <li>Normalmente usan dominio propio: <em>midominio.com</em>.</li>
        <li>Requieren especial atención a la <strong>seguridad</strong> y al rendimiento.</li>
      </ul>

      {/* ================================================= */}
      <h3>Intranet</h3>

      <p>
        Una Intranet es una <strong>red privada interna</strong> de una organización
        (empresa, instituto, hospital…) que utiliza tecnologías web,
        pero cuyo acceso está limitado a personas de la propia organización.
      </p>

      <ul>
        <li>Acceso solo desde la <strong>red interna (LAN)</strong>.</li>
        <li>Suele requerir usuario y contraseña corporativos.</li>
        <li>Ejemplos: portal del empleado, intranet del instituto.</li>
      </ul>

      {/* ================================================= */}
      <h3>Extranet</h3>

      <p>
        Una Extranet es una <strong>Intranet extendida hacia el exterior</strong>.
        Permite el acceso controlado a usuarios externos
        como clientes, proveedores o familias.
      </p>

      <ul>
        <li>Ejemplos: área privada de clientes, zona de proveedores.</li>
        <li>Requiere <strong>autenticación fuerte</strong> y conexión segura.</li>
      </ul>

      {/* ================================================= */}
      <h2>1.2. Conceptos básicos de red</h2>

      <p>
        Antes de hablar de despliegue y servidores,
        necesitamos entender algunos conceptos clave de red.
      </p>

      {/* ================= LAN ================= */}
      <h3>LAN (Local Area Network)</h3>

      <p>
        Una LAN es una <strong>red de área local</strong> que conecta dispositivos
        dentro de un espacio geográfico reducido:
        una casa, un aula, una empresa o un campus pequeño.
      </p>

      <ul>
        <li><strong>Alcance limitado:</strong> edificio, casa u oficina.</li>
        <li><strong>Propiedad privada:</strong> gestionada por la organización.</li>
        <li><strong>Alta velocidad:</strong> 100 Mbps, 1 Gbps o más.</li>
        <li><strong>Baja latencia (retardo):</strong> ideal para trabajo interno.</li>
      </ul>

      <p>
        En una LAN se comparten recursos como:
      </p>

      <ul>
        <li>Impresoras y escáneres.</li>
        <li>Servidores de archivos o NAS.</li>
        <li>Una única conexión a Internet.</li>
      </ul>

      <p>
        Los dispositivos se comunican mediante
        <strong> switches</strong> (comunicación interna)
        y <strong>routers</strong> (salida a Internet).
      </p>
      <p>Los switches permiten que los dispositivos se comuniquen eficientemente dentro de la propia LAN, mientras que el router conecta la LAN con redes externas (como Internet, que es una WAN).</p>

      <p>
        Según su alcance, distinguimos:
      </p>

      <ul>
        <li><strong>LAN:</strong> edificio o red local.</li>
        <li><strong>MAN:</strong> red metropolitana (ciudad).</li>
        <li><strong>WAN:</strong> grandes distancias (Internet).</li>
      </ul>

      {/* ================= VPN ================= */}
      <h3>VPN (Virtual Private Network)</h3>

      <p>
        Una Red Privada Virtual (VPN) es una tecnología que crea una conexión segura y encriptada (conocida como un "túnel") sobre una red pública e insegura, como Internet. Permite que un usuario o un dispositivo se conecte a una red privada remota (como la LAN de su empresa o un servidor VPN comercial) como si estuviera físicamente presente en esa red.
      </p>

      <p>
        Al usar una VPN:
      </p>

      <ul>
        <li>Túnel Encriptado: Cuando activas una VPN, todo tu tráfico de datos es encapsulado y encriptado. Este "túnel" viaja a través de Internet hasta un servidor VPN. Esto significa que si alguien intercepta tus datos en el camino, solo verá información cifrada e ilegible.</li>
        <li>Anonimato y Privacidad: El servidor VPN actúa como intermediario. Cuando accedes a sitios web, estos ven la dirección IP del servidor VPN, no tu dirección IP real. Esto ayuda a ocultar tu ubicación geográfica real y a proteger tu identidad.</li>
        <li>Acceso Remoto a Redes Privadas: Este es el propósito original de la VPN empresarial. Un empleado puede estar en casa y usar la VPN para conectarse a la red de la oficina. Una vez conectado, puede acceder a los archivos, impresoras y sistemas internos como si estuviera físicamente en la oficina.</li>
      </ul>

      <h4>Ventajas principales</h4>

    <ul> <li> <strong>Seguridad:</strong> La encriptación protege tus datos sensibles (contraseñas, información bancaria, correos electrónicos) frente a hackers, tu proveedor de internet (ISP) o terceros, especialmente cuando utilizas redes Wi-Fi públicas no seguras. </li> <li> <strong>Privacidad y geo-desbloqueo:</strong> Al cambiar tu dirección IP percibida por la del servidor VPN (que puede estar en otro país), puedes acceder a contenidos o servicios que están restringidos geográficamente en tu ubicación real. </li> <li> <strong>Evitar la censura:</strong> En regiones con restricciones de Internet, la VPN permite sortear filtros y acceder a contenido bloqueado por gobiernos o redes controladas. </li> </ul>
      <h4>Tipos de VPN</h4>

      <ul> <li> VPN de Acceso Remoto: Utilizada por individuos para conectarse a su red corporativa (trabajo) o por usuarios de servicios comerciales para proteger su privacidad. </li> <li> VPN Sitio a Sitio (Site-to-Site): Conecta dos redes LAN separadas geográficamente (por ejemplo, la oficina principal con una sucursal) para que funcionen como una sola red privada. </li> </ul>

      {/* ================= LAN vs VPN ================= */}
      <h3>LAN vs VPN</h3>

      <p>
        La diferencia clave es que:
      </p>

      <ul>
        <li><strong>LAN</strong> es la red física local.</li>
        <li><strong>VPN</strong> es el método seguro para acceder a esa red desde fuera.</li>
      </ul>

      <p>
        En resumen:
      </p>

      <ul>
        <li><strong>LAN:</strong> el “dónde”.</li>
        <li><strong>VPN:</strong> el “cómo”.</li>
      </ul>

      {/* ================= VPN: protocolo y servicio ================= */}
      <h3>VPN: protocolo y servicio</h3>

    <p> Un <strong>protocolo</strong> es el conjunto de reglas que define cómo se deben comunicar dos o más dispositivos. En el caso de las VPN, estos protocolos se encargan de establecer el <em>“túnel” seguro</em> y de <strong>encriptar los datos</strong> que viajan a través de la red. </p> <p> Cuando utilizamos una VPN, la seguridad de la conexión depende directamente del protocolo que se esté utilizando. </p> <h4>Protocolos VPN más comunes</h4> <ul> <li> <strong>IPsec (Internet Protocol Security):</strong><br /> Conjunto de protocolos que asegura las comunicaciones en la capa de red. Es muy utilizado en entornos corporativos. </li> <li> <strong>OpenVPN:</strong><br /> Uno de los protocolos más populares y versátiles, conocido por su alta seguridad y flexibilidad. </li> <li> <strong>WireGuard:</strong><br /> Protocolo más moderno, diseñado para ser significativamente más rápido y eficiente que sus predecesores. </li> <li> <strong>L2TP/IPsec (Layer 2 Tunneling Protocol):</strong><br /> Protocolo más antiguo que sigue utilizándose, normalmente combinado con IPsec para proporcionar encriptación. </li> </ul> <p> <strong>En resumen:</strong> cuando decimos “usar una VPN”, nos referimos a utilizar una conexión que está regida por uno de estos protocolos con el objetivo de <strong>garantizar la seguridad y confidencialidad</strong> de los datos. </p>

      <p>
        La VPN puede ser proporcionada por:
      </p>

      <ul>
        <li><strong>La empresa o centro educativo</strong> (VPN corporativa).</li>
        <li><strong>Un proveedor comercial</strong> (privacidad personal).</li>
      </ul>

      {/* ================= Protocolos ================= */}
      <h3>OpenVPN</h3>

      <p>
        OpenVPN es un protocolo veterano, muy seguro y ampliamente probado.
      </p>

      <ul>
        <li>Alta seguridad y compatibilidad.</li>
        <li>Funciona incluso en redes con censura.</li>
        <li>Más lento que WireGuard.</li>
      </ul>

      <h3>WireGuard</h3>

      <p>
        WireGuard es un protocolo moderno, rápido y eficiente.
      </p>

      <ul>
        <li>Velocidad muy alta.</li>
        <li>Código simple y fácil de auditar.</li>
        <li>Ideal para móviles y streaming.</li>
      </ul>



      <div className="chapter-card">
        <h3>Resumen corto:</h3>
        <ul>
          <li>Internet → red pública global.</li>
          <li>LAN / WiFi del aula → red local del centro.</li>
          <li>Intranet → aplicaciones dentro de la LAN.</li>
          <li>Extranet → acceso controlado desde fuera (a veces con VPN).</li>
        </ul>
      </div>

      <h2>1.3. Diferencias prácticas entre Internet, Intranet y Extranet</h2>
      
      <div className="chapter-card">
        <h3>Comparativa de entornos</h3>
        <table>
          <thead>
            <tr>
              <th>Característica</th>
              <th>Internet</th>
              <th>Intranet</th>
              <th>Extranet</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Acceso</td>
              <td>Público (según permisos de la app)</td>
              <td>Solo desde la red interna</td>
              <td>Usuarios externos autorizados</td>
            </tr>
            <tr>
              <td>Ubicación de usuarios</td>
              <td>En cualquier lugar del mundo</td>
              <td>En el centro o conectados a la LAN</td>
              <td>Fuera, pero con acceso controlado</td>
            </tr>
            <tr>
              <td>Ejemplo típico</td>
              <td>Tienda online</td>
              <td>Portal del empleado</td>
              <td>Portal de clientes o proveedores</td>
            </tr>
            <tr>
              <td>Seguridad</td>
              <td>Alta (HTTPS, protección contra ataques)</td>
              <td>Control desde la red y los usuarios</td>
              <td>Altísima (VPN, certificados, controles de acceso)</td>
            </tr>
          </tbody>
        </table>
      </div>

     <h2>1.4. Tipos de servidores web</h2>
      <p>
        Para que una aplicación web sea accesible, necesita “vivir” en un 
         {' '}<strong> servidor web</strong>. Un servidor web es un software que recibe peticiones 
        del navegador (cliente) y devuelve páginas, datos o archivos.
      </p>

      <h3>El Servidor Web como Portero</h3>
      <p>
        Piensa en el servidor web (como Apache o Nginx) como el portero profesional de tu servidor. Su función es crucial porque:
      </p>
      <ul>
        <li>
          Escucha: Está siempre atento en los puertos estándar (80 para HTTP y 443 para HTTPS).
        </li>
        <li>
          Dirige: Al recibir una petición, determina si debe servir un archivo estático (una imagen o HTML), o si debe pasar la petición a una aplicación de Backend (como tu Node.js).
        </li>
        <li>
          Organiza: Gracias a los Virtual Hosts o Bloques de Servidor, puede gestionar múltiples dominios y proyectos web distintos en la misma máquina física.
        </li>
      </ul>
      

      <h3>Servidores más comunes y la diferencia clave</h3>
      <ul>
        <li>
           {' '}<strong>Apache HTTP Server:</strong> 
          El servidor web más tradicional y más antiguo. Es muy flexible y cuenta con módulos que permiten una alta personalización (por ejemplo, los archivos `.htaccess`). Es excelente en la gestión de contenidos dinámicos (como PHP) y sigue siendo muy popular en hostings compartidos.
        </li>
        <li>
           {' '}<strong>Nginx (Engine-X):</strong> 
          Es el competidor moderno de Apache, diseñado para ser extremadamente rápido y eficiente en el manejo de muchas conexiones simultáneas. Se usa mucho como:
             <ul>
                 <li>Servidor Estático: Sirve HTML, CSS e imágenes más rápido que Apache.</li>
                 <li>Proxy Inverso: Actúa como intermediario seguro delante de aplicaciones de Backend (como Node.js o Python).</li>
             </ul>
             <p>
                <strong>📌 Nota importante:</strong> Empresas de hosting moderno como Hostinger usan Nginx como capa principal para maximizar la velocidad y el manejo de tráfico. Por eso, nos centraremos en aprender su configuración en el tema 3.
             </p>
        </li>
        <li>
           {' '}<strong>Microsoft IIS:</strong> 
          Servidor web de Microsoft, muy integrado con Windows Server y el ecosistema .NET.
        </li>
        <li>
           {' '}<strong>Apache Tomcat:</strong> 
          Orientado a aplicaciones Java (servlets, JSP, etc.), funcionando más como un "contenedor de servlets" que como un servidor web tradicional.
        </li>
        <li>
           {' '}<strong>Servidores de Node.js (Express, Koa):</strong> 
          Node.js permite crear un servidor HTTP con JavaScript. Aunque son potentes, en producción se suele colocar Nginx o Apache delante actuando como Proxy Inverso para encargarse de la seguridad (SSL) y el tráfico pesado.
        </li>
      </ul>
      
      <h3>El concepto de Proxy Inverso (Clave para Node.js)</h3>
      <p>
        Cuando despliegas una aplicación moderna con Backend (como el proyecto Bazar que usa Node.js/Express), tu aplicación está escuchando en un puerto privado (ej. `3001`). No queremos que Internet acceda directamente a ese puerto.
      </p>
      <p>
        Aquí es donde el Proxy Inverso es fundamental:
      </p>
      <ol>
        <li>El usuario accede por el puerto seguro `443` (HTTPS) a Nginx/Apache.</li>
        <li>Nginx/Apache recibe la petición y se encarga de la seguridad (SSL).</li>
        <li>Nginx/Apache internamente reenvía la petición al puerto privado de tu aplicación (`3001`).</li>
        <li>Tu aplicación de Node.js procesa la petición y devuelve la respuesta a Nginx/Apache.</li>
        <li>Nginx/Apache envía la respuesta final al usuario.</li>
      </ol>
      <p>
        Este mecanismo actúa como una máscara de seguridad y es el puente que conecta el tráfico web público con tu aplicación de Backend que está ejecutándose en privado.
      </p>

      <h2>1.5. Servidor local como simulación: XAMPP</h2>
      
      <p>
        Trabajar directamente en un servidor real de Internet no es práctico para aprender. 
        Por eso, en el aula usamos un  {' '}<strong>servidor local</strong>, es decir, 
        un servidor que se ejecuta en tu propio ordenador. 
      </p>
      
      <p>
         {' '}<strong>XAMPP</strong> es el paquete de software que incluye los componentes básicos
          para simular un servidor de producción:  {' '}<strong>Apache</strong> (servidor web), 
         {' '}<strong>MariaDB/MySQL</strong> (base de datos),  {' '}<strong>PHP</strong> y otras herramientas. 
        Esto nos permite trabajar en  {' '}<strong>localhost</strong>, que es el nombre local para "este mismo ordenador".
      </p>

      
      <h3>Diferencia clave: Apache de XAMPP vs. Apache de Producción</h3>
      
      <p>
        El Apache que enciendes en el panel de control de XAMPP es el mismo software que se usa en millones de servidores web, pero su propósito y configuración son muy diferentes:
      </p>

      <dl>
        <dt>Apache en XAMPP (Entorno Local)</dt>
        <dd>
          <p>
            Su función es simple: recibir la petición en tu navegador (`localhost`) y pasar el archivo `.php` o `.html` al intérprete o motor de ejecución. Actúa como un Servidor Web sencillo y único.
          </p>
          <ul>
            <li>
              Finalidad: Desarrollo y pruebas internas.
            </li>
            <li>
              Seguridad: Baja, no está configurado para resistir ataques externos.
            </li>
            <li>
              Tráfico: Solo gestiona las peticiones de tu propio ordenador.
            </li>
          </ul>
        </dd>

        <dt>Apache/Nginx en un VPS (Entorno de Producción)</dt>
        <dd>
          <p>
            Su función es compleja: es el portero profesional que recibe el tráfico de todo el mundo a través de un dominio real (`devcampus.es`), gestiona la seguridad (Certificados SSL) y dirige la petición a la aplicación correcta.
          </p>
          <ul>
            <li>
              Finalidad: Publicación y servicio real a usuarios.
            </li>
            <li>
              Seguridad: Alta, debe tener reglas de firewall y cifrado (HTTPS).
            </li>
            <li>
              Tráfico: Gestiona miles de peticiones simultáneas, organiza múltiples dominios (Virtual Hosts) y actúa como Proxy Inverso para tus Backends.
            </li>
          </ul>
        </dd>
      </dl>
      
      
      <h3>Apache/Nginx y el rol de Node.js</h3>
      
      <p>
        La confusión más común ocurre con Node.js:
      </p>

      <WarningBox title="Express vs. Nginx/Apache: ¿Quién es el servidor?">
        <p>
          En tu proyecto Bazar, usaste Express para crear un servidor. ¿Significa eso que Express es un servidor web? Sí y No.
        </p>
        <ul>
          <li>
            Express (Backend): Es un servidor de aplicación. Su trabajo es procesar lógica de negocio, interactuar con la Base de Datos, y generar respuestas JSON o HTML.
          </li>
          <li>
            Nginx/Apache (Servidor Web): Es el servidor de tráfico/seguridad. Su trabajo es recibir la petición del usuario, gestionar la capa HTTPS y el dominio, y actuar como Proxy Inverso para enviar la petición a tu Express (que sigue escuchando en un puerto interno y privado, como el 3001).
          </li>
        </ul>
        <p>
          En producción, Nginx siempre irá delante de Node.js (Express). Nginx maneja el tráfico pesado de forma eficiente, mientras que Express se concentra en ejecutar tu código.
        </p>
      </WarningBox>
      

      <h2>1.6. Node.js y Express: El servidor de Aplicación</h2>

    <p>
      Si tu aplicación web incluye lógica de Backend (como la gestión de usuarios, 
      el cálculo de precios o la comunicación con la base de datos), necesitarás 
      un <strong>servidor de aplicación</strong>.
    </p>

    <p>
      <strong>Node.js</strong> es el entorno que permite que JavaScript se ejecute fuera 
      del navegador (del lado del servidor). Es lo que llamamos el <strong>motor</strong>, 
      y Express es el framework que usas para construir tu aplicación sobre ese motor.
    </p>

    <h3>El doble rol de los servidores en Producción</h3>

    <p>
        En un proyecto real, es obligatorio entender que el Servidor Web (Nginx/Apache) y el Servidor de Aplicación (Node.js/Express) tienen funciones distintas pero complementarias.
    </p>

    <dl>
      <dt>Servidor Web (Nginx/Apache): El Portero</dt>
      <dd>
        <p>
          Se especializa en la gestión de la red: recibe el tráfico, gestiona el Dominio/DNS, 
          aplica el cifrado HTTPS/SSL, sirve archivos estáticos (HTML, CSS), y actúa como 
          <strong>Proxy Inverso</strong>. Es la primera línea de defensa.
        </p>
      </dd>

      <dt>Servidor de Aplicación (Node.js/Express): El Cerebro</dt>
      <dd>
        <p>
          Se especializa en la lógica de negocio: valida formularios, procesa la información, 
          interactúa con la base de datos y genera la respuesta dinámica (ej. el JSON con los productos). 
          Está siempre corriendo en un puerto interno y seguro (ej. 3001).
        </p>
      </dd>
    </dl>

    <WarningBox title="¡Sí, Node.js es esencial en producción!">
        <p>
            Si tu proyecto usa Backend, Node.js/Express DEBE estar corriendo en el VPS para que la lógica de tu aplicación funcione. Nginx/Apache solo le facilita el tráfico, pero no ejecuta tu código JavaScript.
        </p>
    </WarningBox>
    
    <h3>El flujo de la petición con Proxy Inverso</h3>
    <p>
        Para que el Servidor Web pase el trabajo al Servidor de Aplicación, se usa el Proxy Inverso. Esta es la configuración que haremos en el Tema 3 para que tu proyecto Bazar funcione:
    </p>
    
    <CodeBlock 
        code={`Usuario (Internet)
  ↓ Petición a Dominio:443 (HTTPS)
1. NGINX/APACHE (Servidor Web)
  ↓ (Proxy Inverso)
2. Node.js/Express (Servidor de Aplicación, Puerto 3001)
  ↓ (Lógica de negocio)
3. MariaDB (Base de Datos)
  ↓ (Respuesta de vuelta por la misma ruta)
  → Respuesta Final al Usuario`}
    />

      <h2>1.6. Compartir tu proyecto en la red WiFi del aula</h2>
      <p>
        Una de las experiencias más motivadoras para un desarrollador es 
         {' '}<strong>ver cómo otras personas utilizan su aplicación en tiempo real</strong>. 
        Aunque todavía no tengamos un servidor en Internet, 
        podemos conseguir algo parecido dentro del aula: 
        que tus compañeros accedan a tu proyecto usando la  {' '}<strong>WiFi del centro</strong>.
      </p>
      
      <PracticeBox title="Pasos para compartir tu proyecto en la red local (LAN)">
        <ol>
          <li>
             {' '}<strong>Asegúrate de que todos estáis en la misma red WiFi.</strong>  
            Tu ordenador y el de tus compañeros deben estar conectados a la misma red.
          </li>
          <li>
             {' '}<strong>Arranca tu servidor local.</strong>  
            En XAMPP, inicia Apache (y MySQL si tu proyecto lo necesita).
          </li>
          <li>
             {' '}<strong>Busca la IP de tu ordenador en la red local.</strong>  
            En Windows, abre <code>CMD</code> y escribe:
            <CodeBlock code={`ipconfig`} />
            Busca la línea <em>Dirección IPv4</em>, por ejemplo: <code>192.168.1.23</code>.
          </li>
          <li>
             {' '}<strong>Comprueba tu proyecto desde tu propio navegador.</strong>  
            En lugar de <code>http://localhost/tu-proyecto</code> prueba con:
            <code> http://192.168.1.23/tu-proyecto </code>
          </li>
          <li>
             {' '}<strong>Comparte esa URL con tus compañeros.</strong>  
            Pídeles que escriban en su navegador:
            <code> http://IP-DE-TU-ORDENADOR/tu-proyecto </code>
          </li>
          <li>
            Si no funciona, puede haber un bloqueo de  {' '}<strong>firewall</strong> o 
            restricciones de red del centro. Coméntalo con el profesor.
          </li>
        </ol>
        <p>
          Con este ejercicio estás simulando, a pequeña escala, 
          lo que ocurre cuando una aplicación se publica en un servidor de Internet: 
          tu ordenador se convierte en “servidor” y los demás, en “clientes”.
        </p>
      </PracticeBox>

      <h2>1.7. Arquitectura cliente–servidor</h2>
      
      <div className="chapter-card">
        <h3>Componentes básicos</h3>
        <ul>
          <li>
             {' '}<strong>Cliente (frontend):</strong> 
            el navegador web o la app móvil que el usuario utiliza.
          </li>
          <li>
             {' '}<strong>Servidor web:</strong> 
            recibe las peticiones y devuelve páginas o datos (Apache, Nginx, Node.js…).
          </li>
          <li>
             {' '}<strong>Servidor de aplicaciones:</strong> 
            donde vive la lógica de negocio (PHP, Node.js, Python, Java…).
          </li>
          <li>
             {' '}<strong>Base de datos:</strong> 
            guarda la información de usuarios, productos, reservas, etc.
          </li>
          <li>
             {' '}<strong>Red:</strong> 
            el “camino” por el que viajan las peticiones: Internet, LAN, VPN…
          </li>
        </ul>
      </div>

      <h2>1.8. Flujo de una petición HTTP</h2>
      
      <CodeBlock code={`1. El usuario escribe una URL en el navegador o pulsa un enlace.
2. El navegador busca la IP del servidor (DNS o red local).
3. Se establece la conexión con el servidor.
4. El cliente envía una petición HTTP (GET, POST...).
5. El servidor procesa la petición (código, base de datos, reglas de negocio).
6. El servidor genera una respuesta HTTP (HTML, JSON, etc.).
7. El cliente recibe la respuesta y la muestra en pantalla.
8. Opcionalmente, el cliente realiza nuevas peticiones (AJAX, fetch, etc.).`} />

      <ActivityBox title="Actividad: diseña una app en los 3 entornos">
        <p>
          Imagina una aplicación de gestión escolar y piensa cómo funcionaría en cada entorno:
        </p>
        <ul>
          <li>
             {' '}<strong>Internet:</strong> 
            ¿qué podría ver cualquier persona (página pública del centro, noticias, contacto…)?
          </li>
          <li>
             {' '}<strong>Intranet:</strong> 
            ¿qué verían solo profesores y personal del centro (horarios, notas internas, informes…)?
          </li>
          <li>
             {' '}<strong>Extranet:</strong> 
            ¿qué verían las familias y el alumnado (notas, faltas, comunicaciones, tareas…)?
          </li>
        </ul>
        <p>
          Escribe qué tipo de información mostrarías en cada caso y qué nivel de seguridad 
          exigirías (público, usuario y contraseña, conexión segura, etc.).
        </p>
      </ActivityBox>

      <div className="warning-box">
        <h4>⚠️ Ideas clave para recordar</h4>
        <ul>
          <li>Internet, Intranet y Extranet se diferencian sobre todo por  {' '}<strong>quién puede acceder</strong>.</li>
          <li>La  {' '}<strong>LAN y la WiFi del aula</strong> te permiten compartir proyectos entre compañeros.</li>
          <li>XAMPP es tu  {' '}<strong>laboratorio personal</strong> de servidores web en local.</li>
          <li>Compartir tu proyecto en la red local es el primer paso hacia publicarlo en Internet.</li>
        </ul>
      </div>

      <NavigationButtons 
        prevPath="/introduccion"
        nextPath="/arquitectura-web"
        prevTitle="0. Introducción"
        nextTitle="2. Arquitectura Web"
      />
    </div>
  )
}

export default WebEnvironments
