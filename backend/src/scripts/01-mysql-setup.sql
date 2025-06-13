DROP DATABASE IF EXISTS `buzztrip`;
DROP USER IF EXISTS `buzztrip_admin`@`%`;
DROP USER IF EXISTS `buzztrip_user`@`%`;
CREATE DATABASE IF NOT EXISTS `buzztrip` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS `buzztrip_admin`@`%` IDENTIFIED WITH mysql_native_password BY 'password';
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, DROP, REFERENCES, INDEX, ALTER, EXECUTE, CREATE VIEW, SHOW VIEW,
    CREATE ROUTINE, ALTER ROUTINE, EVENT, TRIGGER ON `buzztrip`.* TO `buzztrip_admin`@`%`;
CREATE USER IF NOT EXISTS `buzztrip_user`@`%` IDENTIFIED WITH mysql_native_password BY 'password';
GRANT SELECT, INSERT, UPDATE, DELETE, SHOW VIEW ON `buzztrip`.* TO `buzztrip_user`@`%`;
FLUSH PRIVILEGES;