import NavigationButtons from '../components/NavigationButtons'
import { ActivityBox, PracticeBox, CodeBlock, WarningBox } from '../components/ContentBoxes'

const Testing = () => {
  return (
    <div className="testing">
      <h1>4. Verificación y Pruebas de la Aplicación</h1>
      
      <h2>4.1. ¿Qué es verificar? Diferencia entre probar y depurar</h2>
      
      <div className="chapter-card">
        <h3>Definiciones importantes:</h3>
        <ul>
          <li><strong>Verificar:</strong> Comprobar que la aplicación cumple los requisitos especificados</li>
          <li><strong>Probar (Testing):</strong> Ejecutar la aplicación con datos de prueba para encontrar errores</li>
          <li><strong>Depurar (Debug):</strong> Identificar y corregir errores específicos en el código</li>
          <li><strong>Validar:</strong> Asegurar que la aplicación satisface las necesidades del usuario</li>
        </ul>
      </div>

      <h2>4.2. Pruebas funcionales</h2>
      
      <p>Las pruebas funcionales verifican que cada función de la aplicación opere conforme a los requisitos.</p>

      <h3>Tipos de pruebas funcionales:</h3>
      
      <div className="chapter-card">
        <h4>Pruebas de unidad:</h4>
        <p>Verifican el funcionamiento de componentes individuales.</p>
        <CodeBlock code={`// Ejemplo: Prueba de función de validación
function validarEmail(email) {
    const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return regex.test(email);
}

// Casos de prueba:
console.log(validarEmail("usuario@ejemplo.com")); // true
console.log(validarEmail("email-invalido"));      // false
console.log(validarEmail(""));                    // false`} />

        <h4>Pruebas de integración:</h4>
        <p>Verifican la comunicación entre diferentes componentes.</p>
        
        <h4>Pruebas de sistema:</h4>
        <p>Verifican el funcionamiento completo de la aplicación.</p>
      </div>

      <h2>4.3. Pruebas de validación (formularios, campos obligatorios)</h2>
      
      <PracticeBox title="Lista de verificación para formularios">
        <h4>Validaciones del lado del cliente (JavaScript):</h4>
        <ul>
          <li>✅ Campos obligatorios marcados</li>
          <li>✅ Formato de email válido</li>
          <li>✅ Longitud mínima de contraseñas</li>
          <li>✅ Confirmación de contraseña</li>
          <li>✅ Caracteres permitidos en campos</li>
        </ul>

        <h4>Validaciones del lado del servidor (PHP):</h4>
        <ul>
          <li>✅ Re-validación de todos los campos</li>
          <li>✅ Sanitización de datos</li>
          <li>✅ Verificación de duplicados</li>
          <li>✅ Límites de tamaño de archivos</li>
        </ul>
      </PracticeBox>

      <CodeBlock code={`<?php
// Ejemplo: Validación de formulario de registro
function validarRegistro($datos) {
    $errores = [];
    
    // Validar nombre
    if (empty($datos['nombre'])) {
        $errores[] = "El nombre es obligatorio";
    } elseif (strlen($datos['nombre']) < 2) {
        $errores[] = "El nombre debe tener al menos 2 caracteres";
    }
    
    // Validar email
    if (empty($datos['email'])) {
        $errores[] = "El email es obligatorio";
    } elseif (!filter_var($datos['email'], FILTER_VALIDATE_EMAIL)) {
        $errores[] = "El email no tiene un formato válido";
    }
    
    // Validar contraseña
    if (empty($datos['password'])) {
        $errores[] = "La contraseña es obligatoria";
    } elseif (strlen($datos['password']) < 8) {
        $errores[] = "La contraseña debe tener al menos 8 caracteres";
    }
    
    return $errores;
}
?>`} />

      <h2>4.4. Pruebas de integración (servidor–BD)</h2>
      
      <h3>Script de prueba de conexión:</h3>
      <CodeBlock code={`<?php
// test-database.php
require_once 'config/database.php';

class DatabaseTest {
    private $connection;
    
    public function __construct() {
        $db = new DatabaseConfig();
        $this->connection = $db->getConnection();
    }
    
    public function testConnection() {
        if ($this->connection) {
            echo "✅ Conexión a base de datos: OK\\n";
            return true;
        } else {
            echo "❌ Error en conexión a base de datos\\n";
            return false;
        }
    }
    
    public function testCRUDOperations() {
        try {
            // Test CREATE
            $stmt = $this->connection->prepare(
                "INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)"
            );
            $result = $stmt->execute(['Test User', 'test@test.com', 'password123']);
            echo $result ? "✅ INSERT: OK\\n" : "❌ INSERT: Error\\n";
            
            // Test READ
            $stmt = $this->connection->prepare("SELECT * FROM usuarios WHERE email = ?");
            $stmt->execute(['test@test.com']);
            $user = $stmt->fetch();
            echo $user ? "✅ SELECT: OK\\n" : "❌ SELECT: Error\\n";
            
            // Test UPDATE
            $stmt = $this->connection->prepare(
                "UPDATE usuarios SET nombre = ? WHERE id = ?"
            );
            $result = $stmt->execute(['Updated User', $user['id']]);
            echo $result ? "✅ UPDATE: OK\\n" : "❌ UPDATE: Error\\n";
            
            // Test DELETE
            $stmt = $this->connection->prepare("DELETE FROM usuarios WHERE id = ?");
            $result = $stmt->execute([$user['id']]);
            echo $result ? "✅ DELETE: OK\\n" : "❌ DELETE: Error\\n";
            
        } catch (Exception $e) {
            echo "❌ Error en operaciones CRUD: " . $e->getMessage() . "\\n";
        }
    }
}

// Ejecutar pruebas
$test = new DatabaseTest();
$test->testConnection();
$test->testCRUDOperations();
?>`} />

      <h2>4.5. Pruebas de rendimiento básicas (Lighthouse)</h2>
      
      <PracticeBox title="Herramientas de rendimiento">
        <h4>Google Lighthouse (Integrado en Chrome):</h4>
        <ol>
          <li>Abrir DevTools (F12)</li>
          <li>Ir a pestaña "Lighthouse"</li>
          <li>Seleccionar categorías a analizar</li>
          <li>Ejecutar análisis</li>
          <li>Revisar métricas y recomendaciones</li>
        </ol>

        <h4>Métricas importantes:</h4>
        <ul>
          <li><strong>Performance:</strong> Velocidad de carga</li>
          <li><strong>Accessibility:</strong> Accesibilidad</li>
          <li><strong>Best Practices:</strong> Mejores prácticas</li>
          <li><strong>SEO:</strong> Optimización para motores de búsqueda</li>
        </ul>
      </PracticeBox>

      <h2>4.6. Pruebas manuales con el navegador</h2>
      
      <h3>Checklist de pruebas manuales:</h3>
      <div className="chapter-card">
        <h4>Funcionalidad básica:</h4>
        <ul>
          <li>✅ Todas las páginas cargan correctamente</li>
          <li>✅ Enlaces funcionan</li>
          <li>✅ Formularios se envían</li>
          <li>✅ Autenticación funciona</li>
          <li>✅ Subida de archivos opera</li>
        </ul>

        <h4>Compatibilidad de navegadores:</h4>
        <ul>
          <li>✅ Chrome</li>
          <li>✅ Firefox</li>
          <li>✅ Safari</li>
          <li>✅ Edge</li>
        </ul>

        <h4>Responsive design:</h4>
        <ul>
          <li>✅ Desktop (1920x1080)</li>
          <li>✅ Tablet (768x1024)</li>
          <li>✅ Móvil (375x667)</li>
        </ul>
      </div>

      <h2>4.7. Pruebas con Postman / Thunder Client</h2>
      
      <h3>Configuración de Thunder Client en VS Code:</h3>
      <ol>
        <li>Instalar extensión "Thunder Client"</li>
        <li>Abrir panel de Thunder Client</li>
        <li>Crear nueva colección "API Tests"</li>
      </ol>

      <CodeBlock code={`// Ejemplos de pruebas API

// 1. GET - Obtener usuarios
GET http://localhost/mi-app/api/usuarios.php
Headers: Content-Type: application/json

// 2. POST - Crear usuario
POST http://localhost/mi-app/api/usuarios.php
Headers: Content-Type: application/json
Body: {
    "nombre": "Juan Pérez",
    "email": "juan@ejemplo.com",
    "password": "password123"
}

// 3. PUT - Actualizar usuario
PUT http://localhost/mi-app/api/usuarios.php?id=1
Headers: Content-Type: application/json
Body: {
    "nombre": "Juan Carlos Pérez"
}

// 4. DELETE - Eliminar usuario
DELETE http://localhost/mi-app/api/usuarios.php?id=1`} />

      <h2>4.8. Comprobación de rutas, permisos y errores</h2>
      
      <h3>Script de verificación de rutas:</h3>
      <CodeBlock code={`<?php
// test-routes.php
$routes_to_test = [
    '/',
    '/login.php',
    '/register.php',
    '/dashboard.php',
    '/admin/',
    '/api/usuarios.php'
];

foreach ($routes_to_test as $route) {
    $url = 'http://localhost/mi-app' . $route;
    $headers = get_headers($url);
    $status_code = substr($headers[0], 9, 3);
    
    echo "Ruta: {$route} - Estado: {$status_code}";
    
    if ($status_code == '200') {
        echo " ✅\\n";
    } elseif ($status_code == '404') {
        echo " ❌ (No encontrada)\\n";
    } else {
        echo " ⚠️ (Revisar)\\n";
    }
}
?>`} />

      <h2>4.9. Simulación de errores típicos y solución</h2>
      
      <WarningBox title="Errores comunes y soluciones">
        <h4>Error 500 - Internal Server Error:</h4>
        <ul>
          <li><strong>Causa:</strong> Error en código PHP, permisos</li>
          <li><strong>Solución:</strong> Revisar logs de error, verificar sintaxis</li>
        </ul>

        <h4>Error 404 - Page Not Found:</h4>
        <ul>
          <li><strong>Causa:</strong> Archivo no existe, ruta incorrecta</li>
          <li><strong>Solución:</strong> Verificar rutas, archivos .htaccess</li>
        </ul>

        <h4>Error de conexión a BD:</h4>
        <ul>
          <li><strong>Causa:</strong> Credenciales incorrectas, MySQL parado</li>
          <li><strong>Solución:</strong> Verificar config, reiniciar MySQL</li>
        </ul>
      </WarningBox>

      <h2>4.10. Informe de verificación</h2>
      
      <PracticeBox title="Plantilla de informe de pruebas">
        <CodeBlock code={`# INFORME DE VERIFICACIÓN DE APLICACIÓN WEB

## Información del proyecto
- Nombre: Mi Aplicación Web
- Versión: 1.0.0
- Fecha de pruebas: [FECHA]
- Responsable: [NOMBRE]

## Entorno de pruebas
- Servidor: XAMPP 8.2.0
- SO: Windows 11
- Navegador principal: Chrome 119.0

## Resumen de pruebas realizadas
| Tipo de prueba | Casos totales | Pasaron | Fallaron | % Éxito |
|----------------|---------------|---------|-----------|---------|
| Funcionales    | 25            | 24      | 1         | 96%     |
| Validación     | 15            | 15      | 0         | 100%    |
| Integración    | 8             | 7       | 1         | 87.5%   |
| Rendimiento    | 5             | 4       | 1         | 80%     |

## Errores encontrados
1. [Descripción del error]
2. [Descripción del error]

## Recomendaciones
1. [Recomendación 1]
2. [Recomendación 2]

## Conclusión
[Estado general de la aplicación]`} />
      </PracticeBox>

      <ActivityBox title="Realiza una hoja de pruebas con 10 casos">
        <p>Crea un documento con 10 casos de prueba para una aplicación de gestión de tareas:</p>
        <ol>
          <li>Caso 1: Registro de nuevo usuario</li>
          <li>Caso 2: Login con credenciales válidas</li>
          <li>Caso 3: Login con credenciales inválidas</li>
          <li>Caso 4: Crear nueva tarea</li>
          <li>Caso 5: Marcar tarea como completada</li>
          <li>Caso 6: Editar tarea existente</li>
          <li>Caso 7: Eliminar tarea</li>
          <li>Caso 8: Filtrar tareas por estado</li>
          <li>Caso 9: Buscar tareas por texto</li>
          <li>Caso 10: Cerrar sesión</li>
        </ol>
        <p>Para cada caso incluye: prerrequisitos, pasos, resultado esperado y criterios de aceptación.</p>
      </ActivityBox>

      <NavigationButtons 
        prevPath="/despliegue"
        nextPath="/seguridad"
        prevTitle="3. Despliegue"
        nextTitle="5. Seguridad Básica"
      />
    </div>
  )
}

export default Testing
