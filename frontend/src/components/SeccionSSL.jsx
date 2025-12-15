import { ActivityBox, PracticeBox, CodeBlock, WarningBox } from "./ContentBoxes";

const SeccionSSL = () => {
  return (
    <div className="chapter-card">
      <h2>3.6. Certificados SSL y HTTPS</h2>

      {/* 3.6.1 */}
      <details>
        <summary>
          <strong>3.6.1. ¿Qué es HTTPS y por qué a veces aparece “No es seguro”?</strong>
        </summary>

        <p>
          Cuando una web no tiene certificado SSL, el navegador se conecta por{" "}
          <strong>HTTP</strong> (sin cifrado). Eso significa que la información
          viaja “en abierto” y puede ser interceptada en redes públicas.
          Por eso los navegadores modernos muestran avisos como{" "}
          <strong>“No es seguro”</strong>.
        </p>

        <p>
          Con <strong>HTTPS</strong> (HTTP + SSL/TLS) la conexión va{" "}
          <strong>cifrada</strong>, el navegador verifica que el dominio es real
          y se evita que terceros puedan leer o modificar datos en tránsito.
        </p>

        <WarningBox title="Idea clave">
          <p>
            Hoy en día, <strong>HTTPS no es opcional</strong>: es un estándar
            mínimo de confianza, posicionamiento (SEO) y seguridad.
          </p>
        </WarningBox>
      </details>

      {/* 3.6.2 */}
      <details>
        <summary>
          <strong>3.6.2. ¿Qué es un certificado SSL (y qué es Let’s Encrypt)?</strong>
        </summary>

        <p>
          Un <strong>certificado SSL/TLS</strong> es un “documento digital” que
          permite:
        </p>

        <ul>
          <li>
            <strong>Cifrar</strong> la comunicación (nadie ve los datos en tránsito)
          </li>
          <li>
            <strong>Autenticar</strong> el dominio (el sitio es quien dice ser)
          </li>
          <li>
            Evitar modificaciones maliciosas en la conexión (integridad)
          </li>
        </ul>

        <p>
          <strong>Let’s Encrypt</strong> es una autoridad de certificación que
          emite certificados gratuitos y automatizables. Muchos hostings la
          integran directamente en su panel, y en VPS se suele gestionar con{" "}
          <strong>Certbot</strong>.
        </p>

        <PracticeBox title="¿Qué suele pasar en la práctica?">
          <ul>
            <li>
              <strong>Hosting compartido:</strong> activas SSL con un botón en el panel.
            </li>
            <li>
              <strong>VPS:</strong> el administrador configura SSL (Nginx/Apache + Certbot).
            </li>
          </ul>
        </PracticeBox>
      </details>

      {/* 3.6.3 */}
      <details>
        <summary>
          <strong>3.6.3. Servicios de seguridad típicos que ofrece un hosting</strong>
        </summary>

        <p>
          Además del SSL, muchos proveedores incluyen (gratis o de pago) un conjunto
          de servicios de seguridad. Es importante conocerlos porque en despliegue real
          no solo “subimos archivos”: también <strong>protegemos el sitio</strong>.
        </p>

        <PracticeBox title="Servicios habituales (gratis o incluidos en el plan)">
          <ul>
            <li>
              <strong>SSL gratis</strong> (Let’s Encrypt) para dominio y subdominios
            </li>
            <li>
              <strong>Redirección automática HTTP → HTTPS</strong>
            </li>
            <li>
              <strong>Copias de seguridad</strong> (diarias/semanales según plan)
            </li>
            <li>
              <strong>Protección básica anti-malware</strong> o escaneo
            </li>
            <li>
              <strong>Firewall / WAF básico</strong> (a veces limitado)
            </li>
            <li>
              <strong>Protección anti brute-force</strong> en panel/FTP
            </li>
          </ul>
        </PracticeBox>

        <PracticeBox title="Servicios de pago o “premium” (muy comunes)">
          <ul>
            <li>
              <strong>WAF avanzado</strong> (bloqueo de ataques por reglas)
            </li>
            <li>
              <strong>CDN</strong> (mejora rendimiento + capa extra de protección)
            </li>
            <li>
              <strong>Protección DDoS</strong> mejorada
            </li>
            <li>
              <strong>Backups bajo demanda</strong> o restauraciones ilimitadas
            </li>
            <li>
              <strong>Monitorización</strong> (uptime, alertas, seguridad)
            </li>
            <li>
              <strong>Servicios anti-malware</strong> con limpieza automática
            </li>
          </ul>
        </PracticeBox>

        <WarningBox title="Ojo (muy importante)">
          <p>
            Que un hosting tenga SSL no significa que “ya está todo seguro”.
            SSL protege la <strong>comunicación</strong>, pero tu aplicación aún
            puede tener vulnerabilidades (formularios inseguros, contraseñas débiles,
            permisos mal puestos, etc.).
          </p>
        </WarningBox>
      </details>

      {/* 3.6.4 */}
      <details>
        <summary>
          <strong>3.6.4. ¿Cómo ver qué servicios de seguridad ofrece tu hosting?</strong>
        </summary>

        <p>
          Cada proveedor lo presenta de forma diferente, pero casi todos tienen
          un panel con apartados similares. Lo importante es que sepas{" "}
          <strong>dónde mirar</strong>.
        </p>

        <PracticeBox title="Checklist para revisar tu hosting (en 2 minutos)">
          <ol>
            <li>
              Entra al panel del hosting (hPanel / cPanel / panel propio).
            </li>
            <li>
              Busca secciones tipo: <strong>Seguridad</strong>, <strong>SSL</strong>,{" "}
              <strong>Backups</strong>, <strong>Protección</strong>, <strong>CDN</strong>.
            </li>
            <li>
              Abre el apartado <strong>SSL</strong> y comprueba:
              <ul>
                <li>¿SSL gratis (Let’s Encrypt) incluido?</li>
                <li>¿Permite SSL para subdominios?</li>
                <li>¿Renovación automática?</li>
              </ul>
            </li>
            <li>
              Abre el apartado <strong>Copias de seguridad</strong> y mira:
              <ul>
                <li>Frecuencia (diaria/semanal)</li>
                <li>Cuántos días retiene</li>
                <li>Si restaurar tiene coste</li>
              </ul>
            </li>
            <li>
              Busca si existe algo como <strong>WAF / Firewall</strong> o{" "}
              <strong>Protección DDoS</strong> (básica o avanzada).
            </li>
          </ol>
        </PracticeBox>

        <ActivityBox title="Actividad rápida (para alumnos)">
          <p>
            Entra en el panel de tu hosting (o revisa la página de tu plan) y anota:
          </p>
          <ul>
            <li>¿Incluye SSL gratis? ¿para subdominios?</li>
            <li>¿Incluye copias de seguridad? ¿cada cuánto?</li>
            <li>¿Hay WAF/Firewall o protección DDoS?</li>
            <li>¿Hay escaneo anti-malware?</li>
          </ul>
          <p>
            Después, explica en 3 frases por qué <strong>HTTPS</strong> es imprescindible.
          </p>
        </ActivityBox>
      </details>

      {/* 3.6.5 */}
      <details>
        <summary>
          <strong>3.6.5. SSL en DevCampus: qué verás tú como alumno</strong>
        </summary>

        <p>
          En DevCampus, el SSL de los subdominios se prepara en el VPS
          para que tú puedas desplegar sin pelearte con la configuración.
          Aun así, debes saber reconocer que está bien configurado.
        </p>

        <PracticeBox title="Cómo comprobar que tu subdominio está correcto">
          <ol>
            <li>
              Tu URL debe empezar por <code>https://</code>
            </li>
            <li>
              Debe aparecer el candado en el navegador (sin avisos)
            </li>
            <li>
              Si entras por <code>http://</code>, debe redirigir automáticamente a <code>https://</code>
            </li>
          </ol>
        </PracticeBox>

        <WarningBox title="Si algo falla">
          <p>
            Si ves “No es seguro” o no hay redirección a HTTPS, normalmente es
            un problema de certificado o configuración del servidor web
            (Nginx/Apache). En ese caso, se revisa desde el VPS.
          </p>
        </WarningBox>
      </details>
    </div>
  );
};

export default SeccionSSL;
