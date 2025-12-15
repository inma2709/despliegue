import NavigationButtons from '../components/NavigationButtons'
import { ActivityBox, PracticeBox, CodeBlock, WarningBox } from '../components/ContentBoxes'

const Security = () => {
  return (
    <div className="security">
      <h1>5. Seguridad Básica en Aplicaciones Web</h1>
      
      <h2>5.1. Riesgos comunes: XSS, SQL Injection, rutas inseguras</h2>
      
      <div className="chapter-card">
        <h3>Top 5 vulnerabilidades web más comunes:</h3>
        
        <h4>1. Inyección SQL (SQL Injection)</h4>
        <p>Inserción de código SQL malicioso en campos de entrada.</p>
        <CodeBlock code={`// ❌ VULNERABLE
$sql = "SELECT * FROM usuarios WHERE email = '" . $_POST['email'] . "'";

// ✅ SEGURO
$stmt = $pdo->prepare("SELECT * FROM usuarios WHERE email = ?");
$stmt->execute([$_POST['email']]);`} />

        <h4>2. Cross-Site Scripting (XSS)</h4>
        <p>Inyección de scripts maliciosos en páginas web.</p>
        <CodeBlock code={`// ❌ VULNERABLE
echo "Hola " . $_GET['nombre'];

// ✅ SEGURO
echo "Hola " . htmlspecialchars($_GET['nombre'], ENT_QUOTES, 'UTF-8');`} />

        <h4>3. Rutas inseguras</h4>
        <p>Acceso no autorizado a archivos o directorios.</p>
        <CodeBlock code={`// ❌ VULNERABLE
include $_GET['page'] . '.php';

// ✅ SEGURO
$allowed_pages = ['home', 'about', 'contact'];
$page = $_GET['page'] ?? 'home';
if (in_array($page, $allowed_pages)) {
    include $page . '.php';
}`} />

        <h4>4. Autenticación débil</h4>
        <p>Contraseñas sin encriptar o sesiones inseguras.</p>

        <h4>5. Configuración insegura</h4>
        <p>Servidores mal configurados o información sensible expuesta.</p>
      </div>

      <h2>5.2. Contraseñas: hashing y almacenamiento seguro</h2>
      
      <h3>Mejores prácticas para contraseñas:</h3>
      <CodeBlock code={`<?php
// Registrar usuario con contraseña segura
function registrarUsuario($email, $password) {
    // Validar fortaleza de contraseña
    if (!validarPassword($password)) {
        return false;
    }
    
    // Hash seguro de la contraseña
    $password_hash = password_hash($password, PASSWORD_DEFAULT);
    
    // Guardar en base de datos
    $stmt = $pdo->prepare("INSERT INTO usuarios (email, password_hash) VALUES (?, ?)");
    return $stmt->execute([$email, $password_hash]);
}

// Verificar contraseña en login
function verificarUsuario($email, $password) {
    $stmt = $pdo->prepare("SELECT password_hash FROM usuarios WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();
    
    if ($user && password_verify($password, $user['password_hash'])) {
        return true;
    }
    return false;
}

// Validar fortaleza de contraseña
function validarPassword($password) {
    return strlen($password) >= 8 &&
           preg_match('/[A-Z]/', $password) &&      // Mayúscula
           preg_match('/[a-z]/', $password) &&      // Minúscula
           preg_match('/[0-9]/', $password) &&      // Número
           preg_match('/[^A-Za-z0-9]/', $password); // Carácter especial
}
?>`} />

      <h2>5.3. Gestión de errores visibles vs controlados</h2>
      
      <PracticeBox title="Configuración de errores en desarrollo vs producción">
        <h4>Entorno de desarrollo:</h4>
        <CodeBlock code={`// php.ini para desarrollo
display_errors = On
error_reporting = E_ALL
log_errors = On
error_log = C:\\xampp\\php\\logs\\php_error.log`} />

        <h4>Entorno de producción:</h4>
        <CodeBlock code={`// php.ini para producción
display_errors = Off
error_reporting = E_ERROR
log_errors = On
error_log = /var/log/php_errors.log`} />
      </PracticeBox>

      <h3>Manejo seguro de errores:</h3>
      <CodeBlock code={`<?php
// error-handler.php
function manejarError($nivel, $mensaje, $archivo, $linea) {
    $error_info = [
        'nivel' => $nivel,
        'mensaje' => $mensaje,
        'archivo' => $archivo,
        'linea' => $linea,
        'fecha' => date('Y-m-d H:i:s'),
        'ip' => $_SERVER['REMOTE_ADDR'] ?? 'unknown'
    ];
    
    // Log del error
    error_log(json_encode($error_info), 3, 'logs/errores.log');
    
    // En producción, mostrar mensaje genérico
    if (!DEBUG_MODE) {
        echo "Ha ocurrido un error. Contacte al administrador.";
        exit();
    }
}

set_error_handler('manejarError');
?>`} />

      <h2>5.4. Seguridad de archivos (.env, configs)</h2>
      
      <WarningBox title="Protección de archivos sensibles">
        <h4>Archivos que nunca deben ser públicos:</h4>
        <ul>
          <li><code>.env</code> - Variables de entorno</li>
          <li><code>config/database.php</code> - Configuración de BD</li>
          <li><code>logs/</code> - Archivos de registro</li>
          <li><code>backup/</code> - Copias de seguridad</li>
          <li><code>composer.json</code> - Dependencias</li>
        </ul>
      </WarningBox>

      <h3>Archivo .htaccess de protección:</h3>
      <CodeBlock code={`# .htaccess en directorio raíz
# Denegar acceso a archivos sensibles
<Files ".env">
    Order allow,deny
    Deny from all
</Files>

<Files "config.php">
    Order allow,deny
    Deny from all
</Files>

# Denegar acceso a directorios específicos
<Directory "logs">
    Order allow,deny
    Deny from all
</Directory>

<Directory "backup">
    Order allow,deny
    Deny from all
</Directory>

# Ocultar información del servidor
ServerSignature Off
Header always unset X-Powered-By`} />

      <h2>5.5. Backup de la base de datos</h2>
      
      <h3>Script automatizado de backup:</h3>
      <CodeBlock code={`<?php
// backup-database.php
class DatabaseBackup {
    private $host = 'localhost';
    private $username = 'root';
    private $password = '';
    private $database = 'mi_aplicacion';
    
    public function crearBackup() {
        $fecha = date('Y-m-d_H-i-s');
        $archivo = "backup/backup_db_{$fecha}.sql";
        
        // Comando mysqldump
        $comando = "mysqldump --host={$this->host} --user={$this->username} ";
        if ($this->password) {
            $comando .= "--password={$this->password} ";
        }
        $comando .= "{$this->database} > {$archivo}";
        
        exec($comando, $output, $return_var);
        
        if ($return_var === 0) {
            echo "✅ Backup creado: {$archivo}\\n";
            $this->limpiarBackupsAntiguos();
            return $archivo;
        } else {
            echo "❌ Error creando backup\\n";
            return false;
        }
    }
    
    private function limpiarBackupsAntiguos() {
        $archivos = glob('backup/backup_db_*.sql');
        usort($archivos, function($a, $b) {
            return filemtime($b) - filemtime($a);
        });
        
        // Mantener solo los 7 backups más recientes
        $archivos_eliminar = array_slice($archivos, 7);
        foreach ($archivos_eliminar as $archivo) {
            unlink($archivo);
        }
    }
}

// Ejecutar backup
$backup = new DatabaseBackup();
$backup->crearBackup();
?>`} />

      <h2>5.6. Buenas prácticas en despliegues (aunque sea local)</h2>
      
      <div className="chapter-card">
        <h3>Checklist de seguridad para despliegue:</h3>
        
        <h4>Antes del despliegue:</h4>
        <ul>
          <li>✅ Actualizar dependencias a versiones seguras</li>
          <li>✅ Configurar variables de entorno apropiadas</li>
          <li>✅ Deshabilitar modo debug en producción</li>
          <li>✅ Revisar permisos de archivos y carpetas</li>
          <li>✅ Configurar SSL/HTTPS</li>
        </ul>

        <h4>Durante el despliegue:</h4>
        <ul>
          <li>✅ Backup de la BD actual</li>
          <li>✅ Verificar conectividad</li>
          <li>✅ Migrar base de datos si es necesario</li>
          <li>✅ Probar funcionalidades críticas</li>
        </ul>

        <h4>Después del despliegue:</h4>
        <ul>
          <li>✅ Monitorear logs de error</li>
          <li>✅ Verificar rendimiento</li>
          <li>✅ Documentar cambios realizados</li>
          <li>✅ Plan de rollback preparado</li>
        </ul>
      </div>

      <h3>Configuración segura de PHP:</h3>
      <CodeBlock code={`; Configuración recomendada para php.ini

; Ocultar versión de PHP
expose_php = Off

; Deshabilitar funciones peligrosas
disable_functions = exec,passthru,shell_exec,system,proc_open,popen

; Límites de recursos
memory_limit = 128M
max_execution_time = 30
max_input_time = 30

; Subida de archivos
file_uploads = On
upload_max_filesize = 2M
post_max_size = 2M

; Seguridad de sesiones
session.use_only_cookies = 1
session.cookie_httponly = 1
session.cookie_secure = 0  ; Cambiar a 1 con HTTPS`} />

      <ActivityBox title="Encuentra al menos 3 fallos de seguridad simulados">
        <p>Revisa el siguiente código y identifica los problemas de seguridad:</p>
        <CodeBlock code={`<?php
// login.php - CÓDIGO CON FALLOS DE SEGURIDAD
$email = $_POST['email'];
$password = $_POST['password'];

// Fallo 1: SQL Injection
$sql = "SELECT * FROM usuarios WHERE email = '$email' AND password = '$password'";
$result = mysql_query($sql);

if (mysql_num_rows($result) > 0) {
    // Fallo 2: Información sensible en sesión
    $_SESSION['user_data'] = mysql_fetch_array($result);
    echo "Login exitoso para: " . $email;
} else {
    // Fallo 3: Información detallada de errores
    echo "Error: Usuario no encontrado o contraseña incorrecta para email: " . $email;
}

// Fallo 4: Include inseguro
include $_GET['page'] . '.php';
?>`} />
        
        <p><strong>Respuestas esperadas:</strong></p>
        <ol>
          <li>SQL Injection en la consulta directa</li>
          <li>Contraseña sin hash</li>
          <li>Información detallada en errores</li>
          <li>Include vulnerable a LFI</li>
          <li>Uso de mysql_* (funciones obsoletas)</li>
        </ol>
      </ActivityBox>

      <NavigationButtons 
        prevPath="/verificacion"
        nextPath="/documentacion"
        prevTitle="4. Verificación y Pruebas"
        nextTitle="6. Documentación Técnica"
      />
    </div>
  )
}

export default Security
