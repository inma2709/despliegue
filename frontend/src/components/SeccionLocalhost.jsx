import { ActivityBox, PracticeBox, CodeBlock, WarningBox } from './ContentBoxes';

const SeccionLocalhost = () => {
  return (
    <div className="chapter-card">
      <h2>3.10. Despliegue en Localhost / XAMPP como entrenamiento</h2>
      
      <details>
        <summary><strong>Contenido en desarrollo</strong></summary>
        <p>
          Esta sección reaprovechará lo que ya conoces de XAMPP: Apache, MySQL,
          phpMyAdmin, virtual hosts… Lo trataremos como un "simulador" de lo que
          luego harás en un servidor real.
        </p>
        <p>
          El objetivo es que puedas practicar en tu ordenador la misma lógica de
          despliegue que luego aplicarás en un VPS.
        </p>
      </details>
    </div>
  );
};

export default SeccionLocalhost;
