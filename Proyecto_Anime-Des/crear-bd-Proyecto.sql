DROP DATABASE IF EXISTS animeDES;
-- REVOKE ALL PRIVILEGES , GRANT OPTION ON ajedrez.* FROM tomcat@localhost;
-- delete from mysql.db where user = 'tomcat';
-- DROP USER tomcat@localhost;
FLUSH PRIVILEGES;
CREATE DATABASE animeDES;




CREATE USER IF NOT EXISTS admin@localhost IDENTIFIED BY 'admin';
GRANT ALL PRIVILEGES ON animeDES.* TO 'admin'@'localhost';
FLUSH PRIVILEGES;

USE animeDES;

CREATE TABLE usuariosRegistrados (
 _idUser INT NOT NULL AUTO_INCREMENT,
 nombre VARCHAR(255) NOT NULL,
 email VARCHAR(255) NOT NULL,
 password VARCHAR(255) NOT NULL,
 PRIMARY KEY (_idUser));

INSERT INTO usuariosRegistrados VALUES (1, "admin","","admin");


