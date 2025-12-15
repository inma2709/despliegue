import { ActivityBox, PracticeBox, CodeBlock, WarningBox } from './ContentBoxes';

const SeccionProyectoFinal = () => {
  return (
    <div className="chapter-card">
      <h2>3.11. Proyecto guiado: mini DevCampus en producción</h2>
      
      <details>
        <summary><strong>Contenido en desarrollo</strong></summary>
        <p>
          Cerraremos el tema con un proyecto guiado donde montarás un recorrido
          completo: dominio, VPS, subdominio para un alumno, despliegue de una
          página estática y, si es posible, una pequeña API sencilla.
        </p>
        
        <ActivityBox title="Actividad de cierre del Tema 3">
          <ol>
            <li>Elegir un proyecto sencillo (por ejemplo, portfolio o mini tienda).</li>
            <li>Asignarle un subdominio (por ejemplo, <code>alumno1.devcampus.es</code>).</li>
            <li>Preparar la carpeta correspondiente en el servidor.</li>
            <li>Subir los archivos y configurar el servidor web.</li>
            <li>Comprobar que el dominio resuelve y carga la página.</li>
            <li>Documentar el proceso de despliegue paso a paso.</li>
          </ol>
        </ActivityBox>
      </details>
    </div>
  );
};

export default SeccionProyectoFinal;
