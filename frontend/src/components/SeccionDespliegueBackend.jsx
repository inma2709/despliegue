import { ActivityBox, PracticeBox, CodeBlock, WarningBox } from './ContentBoxes';

const SeccionDespliegueBackend = () => {
  return (
    <div className="chapter-card">
      <h2>3.9. Despliegue de una aplicación backend (Node.js / Bazar)</h2>
      
      <details>
        <summary><strong>Contenido en desarrollo</strong></summary>
        <p>
          Aquí daremos el salto a un despliegue más completo: una API Node.js con
          base de datos (similar a Bazar) sirviendo datos a un frontend. Hablaremos
          de procesos (PM2 o similares), variables de entorno y conexión segura a
          la base de datos.
        </p>
      </details>
    </div>
  );
};

export default SeccionDespliegueBackend;
