import { PracticeBox, WarningBox, CodeBlock } from "./ContentBoxes";

const SeccionDocker = () => {
  return (
    <div className="chapter-card">
      <h2>3.8. Docker: entornos contenerizados y despliegue profesional</h2>

      <p>
        En despliegue profesional, el gran reto no suele ser “hacer el código”, sino
        conseguir que la aplicación <strong>funcione igual</strong> en distintos sitios:
        tu ordenador, el del compañero, un servidor de pruebas y producción.
      </p>

      <p>
        <strong>Docker</strong> es una herramienta que ayuda a resolver eso creando
        <strong> entornos reproducibles</strong> para ejecutar aplicaciones.
      </p>

      {/* =========================================================
         3.8.1
      ========================================================== */}
      <h3>3.8.1. ¿Qué es Docker exactamente?</h3>

      <p>
        Docker es un <strong>software</strong> que se instala en tu PC o en un servidor (como Node o MySQL).
        Su función es <strong>crear y ejecutar contenedores</strong>.
      </p>

      <PracticeBox title="Definición clara">
        <p>
          <strong>Docker</strong> es un programa que ejecuta aplicaciones dentro de{" "}
          <strong>contenedores</strong>: “cajas” controladas que incluyen lo necesario
          para que la app funcione siempre igual.
        </p>
      </PracticeBox>

      <WarningBox title="No confundir">
        <ul>
          <li>Docker <strong>no</strong> es un lenguaje.</li>
          <li>Docker <strong>no</strong> es un framework.</li>
          <li>Docker <strong>no</strong> es “la nube”.</li>
          <li>Docker es una <strong>herramienta de entorno</strong>.</li>
        </ul>
      </WarningBox>

      {/* =========================================================
         3.8.2
      ========================================================== */}
      <h3>3.8.2. ¿Qué problema soluciona Docker?</h3>

      <p>Docker aparece para evitar problemas típicos de equipos y proyectos:</p>

      <ul>
        <li>“En mi ordenador funciona, en el tuyo no”</li>
        <li>“Yo tengo Node 18, tú Node 20”</li>
        <li>“En local va bien, pero en el servidor falla”</li>
        <li>“Cada persona ha configurado el entorno diferente”</li>
      </ul>

      <PracticeBox title="Idea clave (la que debes recordar)">
        <p>
          Docker no empaqueta solo el código.{" "}
          <strong>Empaqueta el entorno donde el código se ejecuta</strong>.
        </p>
      </PracticeBox>

      {/* =========================================================
         3.8.3
      ========================================================== */}
      <h3>3.8.3. Conceptos básicos: Dockerfile, imagen y contenedor</h3>

      <p>Para entender Docker, necesitas distinguir estas 3 piezas:</p>

      <ul>
        <li>
          <strong>Dockerfile</strong>: instrucciones (la “receta”)
        </li>
        <li>
          <strong>Imagen</strong>: resultado de aplicar la receta (algo “preparado”, pero apagado)
        </li>
        <li>
          <strong>Contenedor</strong>: la imagen en funcionamiento (la app “encendida”)
        </li>
      </ul>

      <PracticeBox title="Flujo mental">
        <p>
          Dockerfile → Imagen → Contenedor
        </p>
      </PracticeBox>

      <p>
        <strong>Imagen</strong> significa “paquete preparado”: contiene todo lo necesario para ejecutar la aplicación,
        pero <strong>todavía no está en marcha</strong>. Cuando la “arrancas”, se convierte en un contenedor.
      </p>

      <WarningBox title="Comparación rápida">
        <p>
          <strong>Máquina virtual:</strong> un ordenador completo dentro de otro. <br />
          <strong>Contenedor:</strong> la aplicación dentro de una “caja” aislada (más ligera y rápida).
        </p>
      </WarningBox>

      {/* =========================================================
         3.8.4
      ========================================================== */}
      <h3>3.8.4. ¿Qué es un Dockerfile y cómo se crea? (introducción)</h3>

      <p>
        Un <strong>Dockerfile</strong> es un archivo de texto (se llama exactamente <code>Dockerfile</code>, sin extensión)
        que le dice a Docker <strong>cómo preparar el entorno</strong> de tu aplicación.
      </p>

      <p>Normalmente se coloca en la raíz del proyecto (junto a <code>package.json</code>).</p>

      <PracticeBox title="Qué suele indicar un Dockerfile">
        <ul>
          <li>Desde qué entorno parto (por ejemplo, Node 18)</li>
          <li>Qué carpeta de trabajo usar dentro del contenedor</li>
          <li>Qué archivos copiar</li>
          <li>Qué dependencias instalar</li>
          <li>Qué puerto usa la app</li>
          <li>Cómo arrancar la aplicación</li>
        </ul>
      </PracticeBox>

      <CodeBlock
        code={`# Dockerfile (Node/Express) - ejemplo mínimo y típico

# 1) Partimos de una imagen base que ya trae Node
FROM node:18

# 2) Carpeta de trabajo dentro del contenedor
WORKDIR /app

# 3) Copiamos package.json y package-lock para instalar dependencias
COPY package*.json ./

# 4) Instalamos dependencias dentro del contenedor
RUN npm install

# 5) Copiamos el resto del proyecto
COPY . .

# 6) Documentamos el puerto (ej: 3000)
EXPOSE 3000

# 7) Comando de arranque del contenedor
CMD ["npm", "start"]`}
      />

      <WarningBox title="Ojo (muy típico en clase)">
        <ul>
          <li>El Dockerfile <strong>no</strong> es tu aplicación.</li>
          <li>El Dockerfile <strong>no</strong> se ejecuta solo.</li>
          <li>Es una “receta” que Docker usa para construir una imagen.</li>
        </ul>
      </WarningBox>

      {/* =========================================================
         3.8.5
      ========================================================== */}
      <h3>3.8.5. Docker aplicado a vuestro proyecto (Bazar / DevCampus)</h3>

      <p>
        En un proyecto como <strong>Bazar</strong> o <strong>DevCampus</strong>, Docker suele organizarse por servicios:
      </p>

      <ul>
        <li>🧩 Frontend (React)</li>
        <li>🧠 Backend (Node/Express)</li>
        <li>🗄️ Base de datos (MySQL)</li>
      </ul>

      <p>
        La ventaja es que todos arrancan <strong>con el mismo entorno</strong>, y el equipo no depende de instalaciones
        “a mano” distintas en cada ordenador.
      </p>

      <PracticeBox title="Comparación con lo que ya conoces">
        <ul>
          <li>
            <strong>Sin Docker:</strong> instalar Node + MySQL + configurar puertos + variables + versiones…
          </li>
          <li>
            <strong>Con Docker:</strong> instalar Docker y ejecutar una orden para levantar el entorno.
          </li>
        </ul>
      </PracticeBox>

      {/* =========================================================
         3.8.6
      ========================================================== */}
      <h3>3.8.6. ¿Por qué las empresas prefieren Docker a “manuales de instalación”?</h3>

      <p>
        Un manual depende de que una persona lo lea y lo siga bien. En la práctica, siempre hay diferencias:
        versiones distintas, pasos olvidados, configuraciones no iguales…
      </p>

      <PracticeBox title="Docker vs manual">
        <ul>
          <li>
            <strong>Manual:</strong> instrucciones para humanos (fácil equivocarse).
          </li>
          <li>
            <strong>Docker:</strong> instrucciones que ejecuta la máquina (repetible y exacto).
          </li>
        </ul>
      </PracticeBox>

      <p>
        Por eso Docker es tan común en equipos, CI/CD y servidores: reduce errores humanos y hace el despliegue
        más reproducible.
      </p>

      {/* =========================================================
         3.8.7
      ========================================================== */}
      <h3>3.8.7. ¿Por qué Docker no se usa siempre? ¿Cuándo NO compensa?</h3>

      <p>
        Docker también tiene un coste: añade conceptos nuevos y algo de complejidad.
        Por eso no siempre merece la pena.
      </p>

      <PracticeBox title="No suele compensar cuando">
        <ul>
          <li>El proyecto es pequeño y simple</li>
          <li>Trabajas tú sola</li>
          <li>Estás aprendiendo lo básico (primero entiende Node, DB, hosting)</li>
          <li>El despliegue es en hosting compartido que no permite Docker</li>
        </ul>
      </PracticeBox>

      <WarningBox title="Mensaje final para el alumno">
        <p>
          Docker <strong>no es obligatorio</strong> en este módulo. Lo importante es que sepas{" "}
          <strong>qué es</strong>, <strong>para qué sirve</strong> y <strong>cuándo tiene sentido</strong>.
        </p>
      </WarningBox>

      <PracticeBox title="Conclusión">
        <p>
          Docker se usa para ejecutar aplicaciones en entornos controlados y repetibles.  
          En empresas, se prefiere porque reduce diferencias y sustituye “manuales” por configuraciones ejecutables.
        </p>
      </PracticeBox>
    </div>
  );
};

export default SeccionDocker;
