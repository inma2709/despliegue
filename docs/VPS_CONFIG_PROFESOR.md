# Guía de Configuración VPS para Profesores

## 📋 Información del VPS Hostinger

### Datos de acceso
- **IP del VPS:** `[Completar con tu IP]`
- **Usuario:** `root`
- **Contraseña:** `[Tu contraseña]`
- **Dominio principal:** `[tu-dominio.com]`
- **Panel de control:** https://hpanel.hostinger.com

### Configuración DNS realizada
```
Tipo: A
Nombre: *
Valor: [IP_DEL_VPS]
TTL: 3600
```

## 🛠️ Configuración inicial del VPS (Ya realizada)

### Stack instalado
- **Sistema Operativo:** Ubuntu 22.04 LTS
- **Node.js:** v20.x LTS
- **MariaDB:** 10.6+
- **Nginx:** 1.18+
- **PM2:** Última versión
- **Certbot:** Para SSL automático

### Servicios configurados
- **Nginx:** Puerto 80/443
- **MariaDB:** Puerto 3306
- **Aplicaciones Node.js:** Puertos 3001-3050

## 👥 Gestión de Estudiantes

### Crear nuevo alumno

1. **Crear base de datos:**
```sql
CREATE DATABASE alumno_nombre_proyecto;
CREATE USER 'alumno_nombre'@'localhost' IDENTIFIED BY 'password_segura_123';
GRANT ALL PRIVILEGES ON alumno_nombre_proyecto.* TO 'alumno_nombre'@'localhost';
FLUSH PRIVILEGES;
```

2. **Asignar puerto único:**
- Alumno1: Puerto 3001
- Alumno2: Puerto 3002
- Alumno3: Porto 3003
- etc.

3. **Crear subdominio:**
- alumno1.tu-dominio.com → Puerto 3001
- alumno2.tu-dominio.com → Puerto 3002
- etc.

### Lista de alumnos asignados
```
| Alumno    | Subdominio                    | Puerto | DB User       | DB Name               |
|-----------|-------------------------------|--------|---------------|-----------------------|
| juan      | juan.tu-dominio.com           | 3001   | juan          | juan_proyecto         |
| maria     | maria.tu-dominio.com          | 3002   | maria         | maria_proyecto        |
| carlos    | carlos.tu-dominio.com         | 3003   | carlos        | carlos_proyecto       |
| ana       | ana.tu-dominio.com            | 3004   | ana           | ana_proyecto          |
| luis      | luis.tu-dominio.com           | 3005   | luis          | luis_proyecto         |
```

## 🔧 Comandos útiles de administración

### Gestión de PM2
```bash
# Ver todas las aplicaciones
pm2 list

# Ver logs de un alumno específico
pm2 logs juan-backend

# Reiniciar aplicación de un alumno
pm2 restart juan-backend

# Parar aplicación
pm2 stop juan-backend

# Ver monitoreo en tiempo real
pm2 monit
```

### Gestión de Nginx
```bash
# Verificar configuración
sudo nginx -t

# Recargar configuración
sudo systemctl reload nginx

# Ver logs de error
sudo tail -f /var/log/nginx/error.log

# Ver logs de acceso de un dominio
sudo tail -f /var/log/nginx/access.log | grep "alumno.tu-dominio.com"
```

### Gestión de base de datos
```bash
# Acceder a MariaDB
sudo mysql -u root -p

# Ver todas las bases de datos
SHOW DATABASES;

# Ver usuarios
SELECT user,host FROM mysql.user;

# Backup de base de datos de un alumno
mysqldump -u root -p juan_proyecto > juan_backup.sql

# Restaurar backup
mysql -u root -p juan_proyecto < juan_backup.sql
```

### Gestión de SSL
```bash
# Renovar todos los certificados
sudo certbot renew

# Añadir SSL para nuevo dominio
sudo certbot --nginx -d nuevo-alumno.tu-dominio.com

# Ver estado de certificados
sudo certbot certificates
```

## 📊 Monitoreo del servidor

### Recursos del sistema
```bash
# Uso de CPU y memoria
htop

# Espacio en disco
df -h

# Uso de memoria
free -h

# Procesos de Node.js
ps aux | grep node

# Conectiones activas
netstat -tulpn | grep :80
netstat -tulpn | grep :443
```

### Logs importantes
```bash
# Logs del sistema
sudo journalctl -f

# Logs de Nginx
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# Logs de aplicaciones Node.js
pm2 logs --lines 100
```

## 🚨 Solución de problemas comunes

### Aplicación no responde
```bash
# 1. Verificar si PM2 está ejecutándose
pm2 list

# 2. Verificar logs de la aplicación
pm2 logs nombre-alumno-backend

# 3. Reiniciar aplicación
pm2 restart nombre-alumno-backend
```

### Error 502 Bad Gateway
```bash
# 1. Verificar que el backend esté corriendo
pm2 list | grep nombre-alumno

# 2. Verificar configuración de Nginx
sudo nginx -t

# 3. Verificar puerto en configuración
sudo cat /etc/nginx/sites-available/alumno.tu-dominio.com
```

### Base de datos no conecta
```bash
# 1. Verificar que MariaDB esté ejecutándose
sudo systemctl status mariadb

# 2. Verificar usuario y permisos
sudo mysql -u root -p
SELECT user,host FROM mysql.user WHERE user='nombre_alumno';

# 3. Verificar configuración .env del alumno
cat /var/www/nombre_alumno/backend/.env
```

## 📁 Estructura de archivos en el servidor

```
/var/www/
├── alumno1/
│   ├── frontend/dist/
│   └── backend/
│       ├── server.js
│       ├── .env
│       └── ecosystem.config.js
├── alumno2/
│   ├── frontend/dist/
│   └── backend/
└── ...

/etc/nginx/sites-available/
├── alumno1.tu-dominio.com
├── alumno2.tu-dominio.com
└── ...

/etc/nginx/sites-enabled/
├── alumno1.tu-dominio.com -> ../sites-available/alumno1.tu-dominio.com
├── alumno2.tu-dominio.com -> ../sites-available/alumno2.tu-dominio.com
└── ...
```

## 📞 Contacto y soporte

### Información de Hostinger
- **Soporte técnico:** https://support.hostinger.com
- **Documentación VPS:** https://support.hostinger.com/en/collections/1638613-vps

### Contacto del administrador del curso
- **Email:** [tu-email@dominio.com]
- **Teléfono:** [Tu teléfono]
- **Horario de soporte:** Lunes a Viernes, 9:00 - 17:00

## 🔄 Backup y recuperación

### Backup automático (configurar cron)
```bash
# Editar crontab
sudo crontab -e

# Añadir backup diario a las 2:00 AM
0 2 * * * /root/scripts/backup_all.sh

# Backup semanal completo los domingos a las 3:00 AM
0 3 * * 0 /root/scripts/full_backup.sh
```

### Script de backup (crear en /root/scripts/backup_all.sh)
```bash
#!/bin/bash
BACKUP_DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups/$BACKUP_DATE"

mkdir -p $BACKUP_DIR

# Backup de todas las bases de datos
for db in $(mysql -u root -p[PASSWORD] -e "SHOW DATABASES;" | grep -v "Database\|information_schema\|performance_schema\|mysql\|sys"); do
    mysqldump -u root -p[PASSWORD] $db > $BACKUP_DIR/$db.sql
done

# Backup de archivos web
tar -czf $BACKUP_DIR/websites.tar.gz /var/www/

# Backup de configuraciones Nginx
tar -czf $BACKUP_DIR/nginx.tar.gz /etc/nginx/

# Limpiar backups antiguos (conservar últimos 7 días)
find /backups -type d -mtime +7 -exec rm -rf {} \;
```
