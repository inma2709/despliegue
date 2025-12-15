import NavigationButtons from '../components/NavigationButtons'
import { ActivityBox, PracticeBox } from '../components/ContentBoxes'

const Introduction = () => {
  return (
    <div className="introduction">
      <h1>0. Introducción a la Unidad de Competencia</h1>
      
      <h2>0.1. ¿Qué es una UC y qué se evalúa?</h2>
      <p>
        Una Unidad de Competencia (UC) es el conjunto mínimo de competencias profesionales 
        que se pueden reconocer y acreditar de forma oficial. La UC0493_3 forma parte del 
        Certificado de Profesionalidad de   {' '}<strong>“Desarrollo de Aplicaciones con Tecnologías Web”</strong> 
        y se centra en el tramo final del proceso:   {' '}<strong>implantar, verificar y documentar</strong> 
        una aplicación web ya desarrollada.
      </p>
      <p>
        En esta unidad vas a ver el resultado de todo tu esfuerzo previo: pasarás de tener 
        “código que funciona en tu equipo” a tener una   {' '}<strong>aplicación web implantada, probada, 
        segura y documentada</strong>, como se hace en el entorno profesional.
      </p>

      <h3>Objetivos UC0493_3:</h3>
      <ul>
        <li>CE1: Implementar aplicaciones web en diferentes entornos (local, red interna, internet).</li>
        <li>CE2: Verificar el funcionamiento de las aplicaciones mediante pruebas.</li>
        <li>CE3: Documentar técnicamente las aplicaciones (instalación, uso y mantenimiento).</li>
        <li>CE4: Establecer procedimientos de mantenimiento y actualización.</li>
      </ul>

      <h2>0.2. Relación entre UC0493_3 y MF0493_3</h2>
      <p>
        De forma oficial, la UC0493_3 se desarrolla a través del Módulo Formativo MF0493_3 
        con una duración mínima de 90 horas, estructuradas en:
      </p>
      <ul>
        <li>  {' '}<strong>UF1:</strong> Implantación de aplicaciones web (30h)</li>
        <li>  {' '}<strong>UF2:</strong> Verificación y documentación (30h)</li>
        <li>  {' '}<strong>UF3:</strong> Mantenimiento y actualización (30h)</li>
      </ul>
      <p>
        En este manual hemos concentrado los contenidos clave de estas tres unidades,
        seleccionando lo más importante y práctico para que puedas:
        implantar tu aplicación, comprobar que funciona correctamente, aplicar una 
        seguridad mínima razonable y documentar el proyecto como un profesional.
      </p>

      <h2>0.3. Perfil profesional al que prepara</h2>
      <p>
        Todo el trabajo que vas a realizar en esta unidad está muy cerca de lo que 
        se pide en el mercado laboral. Este bloque te prepara para desempeñar funciones como:
      </p>
      <ul>
        <li>Técnico en implantación de aplicaciones web.</li>
        <li>Responsable de despliegue y mantenimiento web en pequeñas empresas.</li>
        <li>Administrador de aplicaciones web en entornos locales o en la nube.</li>
        <li>Técnico en testing y QA web en proyectos de desarrollo.</li>
      </ul>
      <p>
        Es, en resumen, la parte en la que tu proyecto deja de ser solo “código de clase” 
        para convertirse en una   {' '}<strong>aplicación que otros pueden usar y entender</strong>.
      </p>

      <h2>0.4. Objetivos de aprendizaje de esta unidad</h2>
      <div className="chapter-card">
        <h3>¿Qué serás capaz de hacer al terminar?</h3>
        <ul>
          <li>
              {' '}<strong>Despliegue en local y en red:</strong> publicar tu aplicación en 
            <em>localhost</em> y en una   {' '}<strong>red WiFi compartida</strong> para que tus compañeros 
            puedan acceder desde sus propios dispositivos.
          </li>
          <li>
              {' '}<strong>Comprensión de entornos:</strong> diferenciar entre 
              {' '}<strong>Internet, LAN, VPN, Intranet y Extranet</strong> y entender en qué 
            contexto se utiliza cada uno.
          </li>
          <li>
              {' '}<strong>Despliegue en un servidor real:</strong> realizar un despliegue en un 
              {' '}<strong>VPS de Hostinger</strong>, conocer qué es un VPS y cómo se diferencia 
            de un hosting compartido.
          </li>
          <li>
              {' '}<strong>Herramientas profesionales:</strong> utilizar herramientas como 
              {' '}<strong>FileZilla</strong> para subir archivos al servidor y comprender el papel 
            de servidores web como   {' '}<strong>Apache</strong> y   {' '}<strong>Nginx</strong>.
          </li>
          <li>
              {' '}<strong>Seguridad mínima y cookies:</strong> aplicar medidas básicas de seguridad, 
            entender qué son las   {' '}<strong>cookies</strong>, para qué sirven y cómo deben gestionarse.
          </li>
          <li>
              {' '}<strong>Verificación de la aplicación:</strong> realizar pruebas básicas de 
            funcionamiento y acceso (en local, en red y, si procede, en internet).
          </li>
          <li>
              {' '}<strong>Documentación clara:</strong> elaborar una documentación sencilla pero 
            completa: guía de instalación, guía de uso, guía de despliegue e informe de pruebas.
          </li>
        </ul>
      </div>

      <h2>0.5. Proyecto final de la UC</h2>
      <p>
        Todo lo que has ido construyendo en las unidades anteriores desemboca aquí. 
        Este módulo es el   {' '}<strong>cierre del ciclo</strong>: vas a demostrar que eres capaz 
        de llevar una aplicación web desde tu editor de código hasta un entorno donde 
        otras personas puedan usarla, probarla y comprenderla.
      </p>
      <p>
        El proyecto final consistirá en la implementación completa de una aplicación web 
        que incluya implantación, pruebas, seguridad mínima y documentación.
      </p>
      
      <div className="practice-box">
        <h4>Entregables del proyecto final:</h4>
        <ul>
          <li>Aplicación web funcional desplegada (en local, red y/o servidor VPS).</li>
          <li>Manual de instalación y despliegue (paso a paso).</li>
          <li>Manual de usuario para personas no técnicas. Readme.md</li>
          <li>Documentación técnica básica (estructura, tecnologías, configuración).Jsdoc.</li>
          <li>Informe de pruebas realizadas y resultados.</li>
          <li>Plan de mantenimiento mínimo (copias, incidencias, actualizaciones).</li>
        </ul>
        <p>
          Este proyecto es la muestra de todo tu esfuerzo: no es solo “un ejercicio más”, 
          es una   {' '}<strong>prueba real de lo que eres capaz de hacer como desarrollador/a web</strong>.
        </p>
      </div>

      <ActivityBox title="Reflexión inicial: el recorrido que ya has hecho">
        <p>
          Antes de continuar, tómate un momento para valorar todo el camino recorrido 
          hasta llegar aquí. Piensa en estas preguntas:
        </p>
        <ul>
          <li>¿Recuerdas cómo empezaste con tus primeras páginas HTML y CSS?</li>
          <li>¿Cómo ha cambiado tu forma de entender una aplicación web desde entonces?</li>
          <li>¿Qué te gustaría que alguien pudiera hacer con tu proyecto cuando esté desplegado?</li>
          <li>¿Qué te daría orgullo poder enseñar al terminar esta unidad?</li>
        </ul>
        <p>
          Esta unidad es tu oportunidad para   {' '}<strong>cerrar el círculo</strong> y ver tu trabajo 
          convertido en algo completo, probado y listo para enseñar.
        </p>
      </ActivityBox>

      <div className="warning-box">
        <h4>⚠️ Requisitos previos</h4>
        <p>
          Para aprovechar al máximo esta unidad es recomendable que ya tengas:
        </p>
        <ul>
          <li>Conocimientos básicos de HTML, CSS y JavaScript.</li>
          <li>Experiencia previa con algún lenguaje de programación web (PHP, Node.js, etc.).</li>
          <li>Nociones básicas de bases de datos (crear tablas, hacer consultas simples).</li>
          <li>Capacidad para trabajar con archivos y carpetas en tu sistema operativo.</li>
        </ul>
        <p>
          No se espera que lo sepas todo ni que seas experto/a en nada: 
            {' '}<strong>esta unidad está pensada precisamente para ayudarte a unir todas las piezas</strong> 
          y ver el resultado final de tu aprendizaje.
        </p>
      </div>

      <NavigationButtons 
        prevPath="/"
        nextPath="/entornos-web"
        prevTitle="Inicio"
        nextTitle="1. Entornos Web"
      />
    </div>
  )
}

export default Introduction
