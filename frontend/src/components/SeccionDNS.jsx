import { ActivityBox, PracticeBox, WarningBox } from './ContentBoxes';

const SeccionDNS = () => {
  return (
    <div className="chapter-card">
      <h2>3.3. Dominios, DNS y registros básicos</h2>

      <p>
        En esta sección vamos a entender cómo un nombre como{' '}
        <code>devcampus.es</code> o <code>alumno1.devcampus.es</code> termina
        apuntando a un servidor real en Internet. Para ello necesitamos comprender
        dos conceptos clave: <strong>dominio</strong> y <strong>DNS</strong>.
      </p>

      {/* ===========================
          DOMINIO
      ============================ */}
      <details open>
        <summary><strong>¿Qué es un dominio?</strong></summary>

        <p>
          Un <strong>dominio</strong> es el nombre legible por humanos que usamos
          para acceder a una aplicación web. En lugar de memorizar direcciones IP
          numéricas (por ejemplo <code>185.123.45.67</code>), utilizamos nombres
          como <code>devcampus.es</code>.
        </p>

        <p>
          El dominio no contiene la aplicación ni el servidor: simplemente
          <strong>apunta</strong> al lugar donde está funcionando.
        </p>
      </details>

      {/* ===========================
          TIPOS DE DOMINIOS
      ============================ */}
      <details>
        <summary><strong>Tipos de dominios y cuándo usar cada uno</strong></summary>

        <ul>
          <li>
            <strong>Dominios genéricos (gTLD)</strong><br />
            Ejemplos: <code>.com</code>, <code>.net</code>, <code>.org</code><br />
            Son los más conocidos y usados a nivel internacional.
            <br />
            <em>Cuándo usarlos:</em> proyectos globales, empresas, productos o
            aplicaciones sin un enfoque geográfico concreto.
          </li>

          <li>
            <strong>Dominios geográficos (ccTLD)</strong><br />
            Ejemplos: <code>.es</code>, <code>.fr</code>, <code>.it</code><br />
            Identifican un país o región concreta.
            <br />
            <em>Cuándo usarlos:</em> proyectos locales, educativos o empresariales
            enfocados a un país específico (como <code>devcampus.es</code>).
          </li>

          <li>
            <strong>Dominios nuevos o temáticos</strong><br />
            Ejemplos: <code>.dev</code>, <code>.app</code>, <code>.tech</code><br />
            Son más descriptivos, pero menos conocidos.
            <br />
            <em>Cuándo usarlos:</em> proyectos tecnológicos o personales cuando
            quieres un dominio más expresivo.
          </li>
        </ul>

        <p>
          Para proyectos educativos y de aprendizaje, los dominios geográficos
          o un <code>.com</code> suelen ser la opción más clara y reconocible.
        </p>
      </details>

      {/* ===========================
          DNS
      ============================ */}
      <details>
        <summary><strong>¿Qué es el DNS?</strong></summary>

        <p>
          El <strong>DNS (Domain Name System)</strong> es el sistema que traduce
          los nombres de dominio en direcciones IP reales. Actúa como una
          <strong>agenda o guía telefónica de Internet</strong>.
        </p>

        <p>
          Cuando escribes <code>devcampus.es</code> en el navegador, el DNS se
          encarga de averiguar a qué servidor debe conectarse.
        </p>

        <p>
          El DNS no se instala ni se ejecuta en tu servidor: se
          <strong>configura</strong> indicando qué dominio apunta a qué IP o
          servicio.
        </p>
      </details>

      {/* ===========================
          REGISTROS DNS
      ============================ */}
     <details>
  <summary><strong>Registros DNS básicos</strong></summary>

  <p>
    Los <strong>registros DNS</strong> son las reglas que indican qué debe hacer
    un dominio cuando alguien intenta acceder a él. Cada tipo de registro cumple
    una función concreta. En los despliegues web más habituales, solo se usan unos
    pocos, pero es importante conocerlos bien.
  </p>

  <ul>
    <li>
      <strong>Registro A</strong><br />
      Es el registro más importante y el más utilizado en despliegues web.
      Asocia directamente un dominio o subdominio con una
      <strong>dirección IP</strong>, que es donde vive realmente la aplicación.
      <br /><br />
      <em>Ejemplo:</em><br />
      <code>alumno1.devcampus.es → 185.xxx.xxx.xxx</code>
      <br /><br />
      <strong>Cuándo se usa:</strong>
      <ul>
        <li>Cuando tienes un servidor propio o un VPS.</li>
        <li>Cuando despliegas una web, una API o una app Node/Express.</li>
        <li>Cuando quieres control total sobre el servidor.</li>
      </ul>
      <strong>Idea clave:</strong> si tu proyecto está en un VPS, casi seguro
      necesitas un registro A.
    </li>

    <li>
      <strong>Registro CNAME</strong><br />
      Sirve para crear un <strong>alias</strong> de otro dominio. No apunta a una
      IP directamente, sino a otro nombre de dominio.
      <br /><br />
      <em>Ejemplo:</em><br />
      <code>www.devcampus.es → devcampus.es</code>
      <br /><br />
      <strong>Cuándo se usa:</strong>
      <ul>
        <li>Para que <code>www</code> y el dominio principal funcionen igual.</li>
        <li>Cuando un servicio externo (Vercel, Netlify, etc.) pide un CNAME.</li>
      </ul>
      <strong>Limitación:</strong> el CNAME no sustituye al registro A principal,
      solo lo complementa.
    </li>

    <li>
      <strong>Registro MX</strong><br />
      Indica qué servidor se encarga de gestionar el
      <strong>correo electrónico</strong> de un dominio.
      <br /><br />
      <em>Ejemplo:</em><br />
      <code>mail.devcampus.es</code>
      <br /><br />
      <strong>Cuándo se usa:</strong>
      <ul>
        <li>Cuando se configuran cuentas de correo corporativas.</li>
        <li>Cuando se usan servicios como Gmail, Outlook o correos del hosting.</li>
      </ul>
      <strong>Importante:</strong> en despliegues web básicos no suele tocarse,
      pero cambiarlo mal puede romper el correo del dominio.
    </li>
  </ul>

  <p>
    En la mayoría de proyectos web educativos y profesionales, el
    <strong>registro A</strong> es el registro principal. El resto de registros
    aparecen como apoyo según las necesidades del proyecto.
  </p>
</details>


      {/* ===========================
          PRÁCTICA
      ============================ */}
      <PracticeBox title="Ejemplo mental de DNS">
        <p>
          Imagina el siguiente recorrido:
        </p>
        <ol>
          <li>El usuario escribe <code>alumno1.devcampus.es</code>.</li>
          <li>El navegador consulta al DNS.</li>
          <li>El DNS responde con la IP del VPS.</li>
          <li>El navegador se conecta a ese servidor.</li>
          <li>El servidor web entrega la aplicación.</li>
        </ol>
      </PracticeBox>

      <WarningBox title="Errores comunes con DNS">
        <ul>
          <li>Confundir dominio con servidor.</li>
          <li>Esperar que los cambios de DNS sean inmediatos (hay propagación).</li>
          <li>Apuntar un dominio a una IP incorrecta.</li>
          <li>Modificar registros sin entender su función.</li>
        </ul>
      </WarningBox>

      <p>
        Entender bien dominio y DNS es fundamental para el despliegue, ya que
        cualquier aplicación en producción depende de que el dominio apunte
        correctamente al servidor donde se ejecuta.
      </p>
    </div>
  );
};

export default SeccionDNS;
