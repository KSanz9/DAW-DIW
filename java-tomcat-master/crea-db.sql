DROP DATABASE IF EXISTS manga;
-- REVOKE ALL PRIVILEGES , GRANT OPTION ON ajedrez.* FROM tomcat@localhost;
-- delete from mysql.db where user = 'tomcat';
-- DROP USER tomcat@localhost;
FLUSH PRIVILEGES;
CREATE DATABASE manga;




CREATE USER IF NOT EXISTS tomcat@localhost IDENTIFIED BY 'tomcat';
GRANT ALL PRIVILEGES ON manga.* TO 'tomcat'@'localhost';
FLUSH PRIVILEGES;

USE manga;

CREATE TABLE mangasActuales (
 _idmanga INT NOT NULL AUTO_INCREMENT,
 nombre VARCHAR(255) NOT NULL,
 peso  INT NOT NULL,
 imagen VARCHAR(255) NOT NULL,
 PRIMARY KEY (_idmanga));

INSERT INTO mangasActuales VALUES (NULL, "To Love Ru-Darkness",8,"tlrd.jpg");
INSERT INTO mangasActuales VALUES (NULL, "Kimetsu no Yaiba",8,"kny.jpg");
INSERT INTO mangasActuales VALUES (NULL, "Slime Datta Ken",8,"sdk.png");
INSERT INTO mangasActuales VALUES (NULL, "One Piece",6,"op.jpg");
INSERT INTO mangasActuales VALUES (NULL, "Sword art Online-Progressive",10,"sp.webp");
INSERT INTO mangasActuales VALUES (NULL, "Gotobun no hanayome",7,"gnh.webp");

