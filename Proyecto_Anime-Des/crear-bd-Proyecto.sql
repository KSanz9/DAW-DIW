DROP DATABASE IF EXISTS animeDES;
-- REVOKE ALL PRIVILEGES , GRANT OPTION ON ajedrez.* FROM tomcat@localhost;
-- delete from mysql.db where user = 'tomcat';
-- DROP USER tomcat@localhost;
FLUSH PRIVILEGES;
CREATE DATABASE users;




CREATE USER IF NOT EXISTS admin@localhost IDENTIFIED BY 'admin';
GRANT ALL PRIVILEGES ON manga.* TO 'admin'@'localhost';
FLUSH PRIVILEGES;

USE users;

CREATE TABLE usuariosRegistrados (
 _idUser INT NOT NULL AUTO_INCREMENT,
 nombre VARCHAR(255) NOT NULL,
 email VARCHAR(255) NOT NULL,
 password VARCHAR(255) NOT NULL,
 PRIMARY KEY (_idUser));

INSERT INTO usuariosRegistrados VALUES (1, "admin",NULL,"admin");


