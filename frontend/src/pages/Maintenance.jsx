import NavigationButtons from '../components/NavigationButtons'
import { ActivityBox, PracticeBox, CodeBlock, WarningBox } from '../components/ContentBoxes'

const Maintenance = () => {
  return (
    <div className="maintenance">
      <h1>7. Mantenimiento de la Aplicación</h1>
      
      <h2>7.1. Tipos de mantenimiento: preventivo, correctivo, evolutivo</h2>
      
      <div className="chapter-card">
        <h3>Tipos de mantenimiento de software:</h3>
        
        <h4>🛡️ Mantenimiento Preventivo</h4>
        <p>Acciones planificadas para evitar problemas futuros.</p>
        <ul>
          <li>Actualizaciones de seguridad</li>
          <li>Optimización de rendimiento</li>
          <li>Limpieza de archivos temporales</li>
          <li>Copias de seguridad regulares</li>
        </ul>

        <h4>🔧 Mantenimiento Correctivo</h4>
        <p>Solución de errores y problemas identificados.</p>
        <ul>
          <li>Correción de bugs reportados</li>
          <li>Solución de vulnerabilidades</li>
          <li>Reparación de funcionalidades rotas</li>
          <li>Recuperación ante fallos</li>
        </ul>

        <h4>🚀 Mantenimiento Evolutivo</h4>
        <p>Mejoras y nuevas funcionalidades.</p>
        <ul>
          <li>Nuevas características</li>
          <li>Mejoras de usabilidad</li>
          <li>Adaptación a nuevos requisitos</li>
          <li>Migración a nuevas tecnologías</li>
        </ul>

        <h4>🔄 Mantenimiento Adaptativo</h4>
        <p>Adaptación a cambios del entorno.</p>
        <ul>
          <li>Compatibilidad con nuevos navegadores</li>
          <li>Adaptación a cambios normativos</li>
          <li>Migración de servidores</li>
          <li>Integración con nuevas APIs</li>
        </ul>
      </div>

      <h2>7.2. Logs y registros</h2>
      
      <h3>Configuración de logs en PHP:</h3>
      <CodeBlock code={`<?php
// Configuración de logging personalizado
class Logger {
    private static $logFile = 'logs/app.log';
    
    public static function info($message) {
        self::writeLog('INFO', $message);
    }
    
    public static function warning($message) {
        self::writeLog('WARNING', $message);
    }
    
    public static function error($message) {
        self::writeLog('ERROR', $message);
    }
    
    private static function writeLog($level, $message) {
        $timestamp = date('Y-m-d H:i:s');
        $ip = $_SERVER['REMOTE_ADDR'] ?? 'CLI';
        $user = $_SESSION['user_id'] ?? 'anonymous';
        
        $logEntry = "[{$timestamp}] [{$level}] [IP: {$ip}] [User: {$user}] {$message}" . PHP_EOL;
        
        file_put_contents(self::$logFile, $logEntry, FILE_APPEND | LOCK_EX);
    }
}

// Ejemplos de uso
Logger::info('Usuario logueado: ' . $email);
Logger::warning('Intento de acceso no autorizado desde: ' . $ip);
Logger::error('Error en conexión a BD: ' . $error_message);
?>`} />

      <h3>Tipos de logs importantes:</h3>
      <PracticeBox title="Logs esenciales para monitoreo">
        <h4>1. Logs de aplicación (app.log)</h4>
        <ul>
          <li>Inicios de sesión</li>
          <li>Acciones importantes de usuarios</li>
          <li>Errores de aplicación</li>
          <li>Transacciones críticas</li>
        </ul>

        <h4>2. Logs de acceso (access.log)</h4>
        <ul>
          <li>Todas las peticiones HTTP</li>
          <li>IPs y user agents</li>
          <li>Códigos de respuesta</li>
          <li>Tiempo de respuesta</li>
        </ul>

        <h4>3. Logs de error (error.log)</h4>
        <ul>
          <li>Errores de PHP</li>
          <li>Errores de Apache</li>
          <li>Errores de MySQL</li>
          <li>Warnings y notices</li>
        </ul>

        <h4>4. Logs de seguridad (security.log)</h4>
        <ul>
          <li>Intentos de login fallidos</li>
          <li>Accesos sospechosos</li>
          <li>Cambios en permisos</li>
          <li>Alertas de seguridad</li>
        </ul>
      </PracticeBox>

      <h2>7.3. Cómo reiniciar servicios</h2>
      
      <h3>Reinicio de servicios en XAMPP:</h3>
      <CodeBlock code={`# Desde XAMPP Control Panel
1. Stop Apache
2. Stop MySQL  
3. Start Apache
4. Start MySQL

# Desde línea de comandos (Windows)
net stop apache2.4
net stop mysql
net start apache2.4
net start mysql

# Verificar estado de servicios
sc query apache2.4
sc query mysql`} />

      <h3>Script automatizado de reinicio:</h3>
      <CodeBlock code={`@echo off
REM restart-services.bat
echo Reiniciando servicios XAMPP...

echo Deteniendo Apache...
net stop apache2.4

echo Deteniendo MySQL...
net stop mysql

echo Esperando 5 segundos...
timeout /t 5

echo Iniciando Apache...
net start apache2.4

echo Iniciando MySQL...
net start mysql

echo Servicios reiniciados exitosamente!
pause`} />

      <h2>7.4. Cómo actualizar versiones</h2>
      
      <PracticeBox title="Proceso de actualización segura">
        <h4>Antes de actualizar:</h4>
        <ol>
          <li>✅ Backup completo de BD y archivos</li>
          <li>✅ Documentar versión actual</li>
          <li>✅ Leer changelog de nueva versión</li>
          <li>✅ Probar en entorno de desarrollo</li>
          <li>✅ Planificar ventana de mantenimiento</li>
        </ol>

        <h4>Durante la actualización:</h4>
        <ol>
          <li>🔧 Poner aplicación en modo mantenimiento</li>
          <li>🔧 Detener servicios web</li>
          <li>🔧 Actualizar archivos</li>
          <li>🔧 Ejecutar migraciones de BD</li>
          <li>🔧 Verificar configuraciones</li>
          <li>🔧 Reiniciar servicios</li>
          <li>🔧 Probar funcionalidades críticas</li>
        </ol>

        <h4>Después de actualizar:</h4>
        <ol>
          <li>✅ Monitorear logs de error</li>
          <li>✅ Verificar rendimiento</li>
          <li>✅ Confirmar funcionalidades</li>
          <li>✅ Documentar cambios</li>
          <li>✅ Comunicar a usuarios</li>
        </ol>
      </PracticeBox>

      <h2>7.5. Copias de seguridad de la BD</h2>
      
      <h3>Script de backup automatizado:</h3>
      <CodeBlock code={`#!/bin/bash
# backup-script.sh

# Configuración
DB_USER="root"
DB_PASS=""
DB_NAME="mi_aplicacion"
BACKUP_DIR="C:\\xampp\\backups"
DATE=$(date +%Y%m%d_%H%M%S)

# Crear directorio si no existe
mkdir -p "$BACKUP_DIR"

# Backup de base de datos
echo "Iniciando backup de $DB_NAME..."
mysqldump -u$DB_USER -p$DB_PASS $DB_NAME > "$BACKUP_DIR/backup_$DB_NAME_$DATE.sql"

# Comprimir backup
gzip "$BACKUP_DIR/backup_$DB_NAME_$DATE.sql"

# Limpiar backups antiguos (mantener últimos 30 días)
find "$BACKUP_DIR" -name "backup_$DB_NAME_*.sql.gz" -mtime +30 -delete

echo "Backup completado: backup_$DB_NAME_$DATE.sql.gz"

# Log del backup
echo "$(date): Backup realizado - backup_$DB_NAME_$DATE.sql.gz" >> "$BACKUP_DIR/backup.log"`} />

      <h3>Programar backups automáticos:</h3>
      <CodeBlock code={`# Windows Task Scheduler
# Crear tarea programada que ejecute:
C:\\xampp\\php\\php.exe C:\\xampp\\htdocs\\mi-app\\scripts\\backup.php

# Configurar para ejecutar:
# - Diariamente a las 2:00 AM
# - Solo cuando el usuario esté logueado
# - Con privilegios de administrador`} />

      <h2>7.6. Recuperación ante fallos (backup & restore)</h2>
      
      <h3>Procedimiento de restauración:</h3>
      <CodeBlock code={`<?php
// restore-database.php
class DatabaseRestore {
    private $host = 'localhost';
    private $user = 'root';
    private $pass = '';
    private $dbname = 'mi_aplicacion';
    
    public function restaurarBackup($backupFile) {
        // Verificar que el archivo existe
        if (!file_exists($backupFile)) {
            throw new Exception("Archivo de backup no encontrado: $backupFile");
        }
        
        // Descomprimir si es necesario
        if (pathinfo($backupFile, PATHINFO_EXTENSION) === 'gz') {
            $backupFile = $this->descomprimirBackup($backupFile);
        }
        
        // Ejecutar restauración
        $comando = "mysql -h{$this->host} -u{$this->user}";
        if ($this->pass) {
            $comando .= " -p{$this->pass}";
        }
        $comando .= " {$this->dbname} < {$backupFile}";
        
        exec($comando, $output, $return_var);
        
        if ($return_var === 0) {
            $this->logRestauracion($backupFile);
            return true;
        } else {
            throw new Exception("Error al restaurar backup");
        }
    }
    
    private function descomprimirBackup($gzFile) {
        $sqlFile = str_replace('.gz', '', $gzFile);
        
        $gz = gzopen($gzFile, 'rb');
        $sql = fopen($sqlFile, 'w');
        
        while (!gzeof($gz)) {
            fwrite($sql, gzread($gz, 4096));
        }
        
        gzclose($gz);
        fclose($sql);
        
        return $sqlFile;
    }
    
    private function logRestauracion($backupFile) {
        $log = date('Y-m-d H:i:s') . " - Restauración exitosa: $backupFile\n";
        file_put_contents('logs/restore.log', $log, FILE_APPEND);
    }
}

// Uso
try {
    $restore = new DatabaseRestore();
    $restore->restaurarBackup('backups/backup_mi_aplicacion_20241201_020000.sql.gz');
    echo "✅ Base de datos restaurada exitosamente";
} catch (Exception $e) {
    echo "❌ Error: " . $e->getMessage();
}
?>`} />

      <h3>Plan de recuperación ante desastres:</h3>
      <WarningBox title="Plan de contingencia">
        <h4>Escenarios de fallo y soluciones:</h4>
        
        <h5>1. Corrupción de base de datos:</h5>
        <ul>
          <li>Restaurar desde último backup</li>
          <li>Verificar integridad de datos</li>
          <li>Ejecutar reparaciones si es necesario</li>
        </ul>

        <h5>2. Fallo del servidor web:</h5>
        <ul>
          <li>Reiniciar servicios Apache</li>
          <li>Verificar configuración</li>
          <li>Revisar logs de error</li>
        </ul>

        <h5>3. Pérdida de archivos:</h5>
        <ul>
          <li>Restaurar desde backup de archivos</li>
          <li>Verificar permisos</li>
          <li>Probar funcionalidades</li>
        </ul>

        <h5>4. Ataque de seguridad:</h5>
        <ul>
          <li>Aislar servidor comprometido</li>
          <li>Restaurar desde backup limpio</li>
          <li>Aplicar parches de seguridad</li>
          <li>Cambiar credenciales</li>
        </ul>
      </WarningBox>

      <ActivityBox title="Crear un plan de mantenimiento básico">
        <p>
          Desarrolla un plan de mantenimiento para una aplicación de e-commerce que incluya:
        </p>
        
        <h4>Tareas diarias:</h4>
        <ul>
          <li>Monitoreo de logs</li>
          <li>Verificación de servicios</li>
          <li>Backup incremental</li>
        </ul>

        <h4>Tareas semanales:</h4>
        <ul>
          <li>Backup completo</li>
          <li>Análisis de rendimiento</li>
          <li>Limpieza de archivos temporales</li>
        </ul>

        <h4>Tareas mensuales:</h4>
        <ul>
          <li>Actualizaciones de seguridad</li>
          <li>Optimización de base de datos</li>
          <li>Revisión de métricas</li>
        </ul>

        <h4>Procedimientos de emergencia:</h4>
        <ul>
          <li>Plan de respuesta ante caídas</li>
          <li>Contactos de emergencia</li>
          <li>Pasos de escalado</li>
        </ul>
      </ActivityBox>

      <NavigationButtons 
        prevPath="/documentacion"
        nextPath="/proyecto-final"
        prevTitle="6. Documentación"
        nextTitle="8. Proyecto Final"
      />
    </div>
  )
}

export default Maintenance
