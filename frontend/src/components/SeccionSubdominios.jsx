import { ActivityBox, PracticeBox, CodeBlock, WarningBox } from "./ContentBoxes";

const SeccionSubdominios = () => {
  return (
    <div className="chapter-card">
      <h2>3.7. Subdominios para proyectos de alumnos</h2>

      {/* 3.7.1 */}
      <details>
        <summary>
          <strong>3.7.1. ¿Qué es un subdominio y por qué usar uno por alumno?</strong>
        </summary>

        <p>
          Un <strong>subdominio</strong> es una extensión de un dominio principal
          que permite crear sitios independientes bajo una misma estructura.
        </p>

        <p>Por ejemplo:</p>

        <CodeBlock
          language="text"
          code={`devcampus.com
alumno1.devcampus.com
alumno2.devcampus.com`}
        />

        <p>
          En DevCampus usamos subdominios porque permiten:
        </p>

        <ul>
          <li>Aislar proyectos (cada alumno tiene su espacio)</li>
          <li>Evitar conflictos entre aplicaciones</li>
          <li>Simular un entorno profesional real</li>
          <li>Evaluar despliegues individuales</li>
        </ul>

        <WarningBox title="Idea clave">
          <p>
            Un subdominio es <strong>un sitio web independiente</strong>,
            aunque comparta dominio y servidor.
          </p>
        </WarningBox>
      </details>

      {/* 3.7.2 */}
      <details>
        <summary>
          <strong>3.7.2. El caso real: alumno1.devcampus.com</strong>
        </summary>

        <p>
          Antes de que los alumnos desplieguen sus proyectos, se ha preparado
          un subdominio de prueba:
        </p>

        <CodeBlock
          language="text"
          code={`https://alumno1.devcampus.com`}
        />

        <p>
          Este subdominio se utiliza como <strong>entorno de referencia</strong>
          para explicar todo el proceso de despliegue.
        </p>

        <p>
          En él se va a desplegar una aplicación completa:
        </p>

        <PracticeBox title="Proyecto de prueba">
          <ul>
            <li>Frontend compilado (Vite / React)</li>
            <li>Backend Node.js + Express</li>
            <li>Base de datos MySQL</li>
            <li>HTTPS activo</li>
          </ul>
        </PracticeBox>

        <p>
          Es decir: <strong>un proyecto real en producción</strong>,
          no un ejemplo simplificado.
        </p>
      </details>

      {/* 3.7.3 */}
      <details>
        <summary>
          <strong>3.7.3. Qué se ha configurado en el hosting y en el VPS</strong>
        </summary>

        <p>
          La configuración técnica del subdominio <strong>ya está hecha</strong>
          para que el alumnado pueda centrarse en desplegar la aplicación.
        </p>

        <PracticeBox title="Configuración previa (no la hace el alumno)">
          <ul>
            <li>Registro del subdominio en DNS</li>
            <li>Apuntado del subdominio al VPS</li>
            <li>Server block en Nginx</li>
            <li>Certificado SSL activo</li>
            <li>Carpeta del proyecto creada</li>
          </ul>
        </PracticeBox>

        <p>
          A nivel de servidor, la estructura sigue un patrón claro:
        </p>

        <CodeBlock
          language="text"
          code={`/var/www/
└── alumnos/
    └── alumno1/
        ├── frontend/
        └── backend/`}
        />

        <WarningBox title="Importante">
          <p>
            El alumno <strong>no crea el subdominio</strong>,
            pero debe entender que existe una relación directa entre:
            dominio → servidor → carpetas → aplicación.
          </p>
        </WarningBox>
      </details>

      {/* 3.7.4 */}
      <details>
        <summary>
          <strong>3.7.4. Qué hará el alumno sobre su subdominio</strong>
        </summary>

        <p>
          Una vez preparado el subdominio, el trabajo del alumno es
          exactamente el que haría un desarrollador junior en una empresa.
        </p>

        <PracticeBox title="Tareas del alumno">
          <ol>
            <li>Compilar el frontend del proyecto (carpeta <code>dist</code>)</li>
            <li>Subirlo a la carpeta asignada</li>
            <li>Conectar el frontend con el backend</li>
            <li>Verificar que la app funciona en HTTPS</li>
          </ol>
        </PracticeBox>

        <ActivityBox title="Objetivo didáctico">
          <p>
            El objetivo no es solo que la app funcione, sino que el alumno
            <strong>entienda dónde está desplegada</strong> y cómo accede el usuario final.
          </p>
        </ActivityBox>
      </details>

      {/* 3.7.5 */}
      <details>
        <summary>
          <strong>3.7.5. Escalando DevCampus: uno por alumno, grupo o proyecto</strong>
        </summary>

        <p>
          La misma estrategia usada con <code>alumno1</code> se puede escalar fácilmente:
        </p>

        <PracticeBox title="Estrategias posibles">
          <ul>
            <li>
              <strong>Un subdominio por alumno</strong>  
              (ideal para evaluación individual)
            </li>
            <li>
              <strong>Un subdominio por grupo</strong>  
              (proyectos colaborativos)
            </li>
            <li>
              <strong>Un subdominio por proyecto</strong>  
              (portfolio profesional)
            </li>
          </ul>
        </PracticeBox>

        <WarningBox title="Mentalidad profesional">
          <p>
            Esta estructura es la misma que usan academias, bootcamps y empresas
            para gestionar múltiples aplicaciones en un mismo servidor.
          </p>
        </WarningBox>
      </details>
    </div>
  );
};

export default SeccionSubdominios;
