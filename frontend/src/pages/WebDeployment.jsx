// src/pages/WebDeployment.jsx
import NavigationButtons from '../components/NavigationButtons';
import { PracticeBox, WarningBox } from '../components/ContentBoxes';

import SeccionConceptosBasicos from '../components/SeccionConceptosBasicos';
import SeccionTiposHosting from '../components/SeccionTiposHosting';
import SeccionDNS from '../components/SeccionDNS';
import SeccionVPS from '../components/SeccionVPS';
import SeccionServidorWeb from '../components/SeccionServidorWeb';
import SeccionSSL from '../components/SeccionSSL';
import SeccionSubdominios from '../components/SeccionSubdominios';
import SeccionDocker from '../components/SeccionDocker'; // ✅ NUEVO
import SeccionDespliegueEstatico from '../components/SeccionDespliegueEstatico';
import SeccionDespliegueBackend from '../components/SeccionDespliegueBackend';
import SeccionLocalhost from '../components/SeccionLocalhost';
import SeccionProyectoFinal from '../components/SeccionProyectoFinal';
import SeccionCarpetaDist from '../components/SeccionCarpetaDist';

const WebDeployment = () => {
  return (
    <div className="web-deployment">
      <h1>3. Despliegue de Aplicaciones Web (Hosting, VPS y Localhost)</h1>

      {/* ===========================
          3.0. INTRODUCCIÓN GENERAL
      ============================ */}
      <section id="t3-introduccion" className="chapter-card">
        <h2>3.0. Introducción: ¿qué entendemos por &quot;despliegue&quot;?</h2>

        <p>
          Hasta ahora has trabajado sobre todo en <strong>entornos de desarrollo</strong>:
          tu propio ordenador, XAMPP, Node.js, React, Bazar… Todo eso está muy bien,
          pero una aplicación web solo cobra sentido cuando es accesible desde fuera:
          desde la red de un centro, desde Internet o desde un dominio como{' '}
          <code>devcampus.es</code>.
        </p>

        <p>
          A ese proceso de pasar de “mi proyecto en local” a “mi aplicación disponible
          para otros usuarios” lo llamamos <strong>implantación</strong> o{' '}
          <strong>despliegue</strong>. Es mucho más que subir archivos: implica
          preparar el servidor, configurar dominio y DNS, asegurar la conexión con
          HTTPS, conectar con la base de datos y verificar que todo funciona.
        </p>

        <h3>3.0.1. Tipos de entornos donde desplegar</h3>

        <div className="chapter-card">
          <h4>Tipos de despliegue</h4>
          <ul>
            <li>
              <strong>Desarrollo: </strong>
              entorno local del programador (tu PC con XAMPP, Node, React…). Aquí se
              prueba y se rompe todo lo necesario.
            </li>
            <li>
              <strong>Testing / Staging: </strong>
              entorno de pruebas que imita producción. Sirve para validar una versión
              antes de publicarla de verdad.
            </li>
            <li>
              <strong>Producción: </strong>
              entorno real accesible a los usuarios. Es donde estará, por ejemplo,
              <code> devcampus.es</code> o <code> alumno1.devcampus.es</code>.
            </li>
          </ul>
        </div>

        <PracticeBox title="Checklist mental antes de desplegar">
          <p>
            Antes de ponerte a tocar servidores, conviene tener claro qué piezas vas
            a necesitar. Piensa en Bazar o en cualquier app web moderna:
          </p>
          <ul>
            <li>¿Tendrá solo frontend (HTML/CSS/JS) o también backend?</li>
            <li>¿Qué base de datos usará (MySQL/MariaDB, PostgreSQL…)?</li>
            <li>¿Va a vivir en un hosting compartido, un VPS, o en ambos?</li>
            <li>¿Qué dominio y subdominios usará (por ejemplo, alumno1.devcampus.es)?</li>
            <li>¿Necesita HTTPS y certificados SSL (respuesta corta: casi siempre sí)?</li>
          </ul>
        </PracticeBox>

        <WarningBox title="Idea clave">
          <p>
            El despliegue no es un truco mágico que hace un “hosting” por ti.
            Tú eres quien entiende la arquitectura de la aplicación (tema 2) y quien
            decide cómo repartirla entre dominio, servidor web, base de datos y
            servicios adicionales.
          </p>
        </WarningBox>
      </section>

      {/* ===========================
          ÍNDICE DEL TEMA 3
      ============================ */}
      <section id="t3-indice" className="chapter-card">
        <h2>Índice del Tema 3</h2>
        <ol>
          <li>
            <a href="#t3-1">3.1. Conceptos básicos de despliegue</a>
          </li>
          <li>
            <a href="#t3-2">3.2. Tipos de hosting y elección de proveedor</a>
          </li>
          <li>
            <a href="#t3-3">3.3. Dominios, DNS y registros básicos</a>
          </li>
          <li>
            <a href="#t3-12">3.4. Carpeta dist: compilar y subir a public_html (Hostinger)</a>
          </li>

          <li>
            <a href="#t3-4">3.4. ¿Qué es un VPS? Arquitectura real de DevCampus</a>
          </li>
          <li>
            <a href="#t3-5">3.5. Servidor web (Nginx/Apache), puertos y rutas</a>
          </li>
          <li>
            <a href="#t3-6">3.6. Certificados SSL y HTTPS</a>
          </li>
          <li>
            <a href="#t3-7">3.7. Subdominios para proyectos de alumnos</a>
          </li>

          {/* ✅ NUEVO: Docker como ampliación profesional */}
          <li>
            <a href="#t3-docker">3.7 bis. Docker: entornos reproducibles (ampliación profesional)</a>
          </li>

          <li>
            <a href="#t3-8">3.8. Despliegue de una aplicación estática (HTML/CSS/JS)</a>
          </li>
          <li>
            <a href="#t3-9">3.9. Despliegue de una aplicación backend (Node.js / Bazar)</a>
          </li>
          <li>
            <a href="#t3-10">3.10. Despliegue en Localhost / XAMPP como entrenamiento</a>
          </li>
          <li>
            <a href="#t3-11">3.11. Proyecto guiado: mini DevCampus en producción</a>
          </li>
        </ol>
      </section>

      {/* ===========================
          SECCIONES (COMPONENTES)
      ============================ */}
      <section id="t3-1">
        <SeccionConceptosBasicos />
      </section>

      <section id="t3-2">
        <SeccionTiposHosting />
      </section>

      <section id="t3-3">
        <SeccionDNS />
      </section>

      <section id="t3-12">
        <SeccionCarpetaDist />
      </section>

      <section id="t3-4">
        <SeccionVPS />
      </section>

      <section id="t3-5">
        <SeccionServidorWeb />
      </section>

      <section id="t3-6">
        <SeccionSSL />
      </section>

      <section id="t3-7">
        <SeccionSubdominios />
      </section>

      {/* ✅ NUEVO: Docker */}
      <section id="t3-docker">
        <SeccionDocker />
      </section>

      <section id="t3-8">
        <SeccionDespliegueEstatico />
      </section>

      <section id="t3-9">
        <SeccionDespliegueBackend />
      </section>

      <section id="t3-10">
        <SeccionLocalhost />
      </section>

      <section id="t3-11">
        <SeccionProyectoFinal />
      </section>

      <NavigationButtons
        prevPath="/arquitectura-web"
        nextPath="/verificacion"
        prevTitle="2. Arquitectura Web"
        nextTitle="4. Verificación y Pruebas"
      />
    </div>
  );
};

export default WebDeployment;
