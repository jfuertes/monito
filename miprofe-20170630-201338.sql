--
-- DbNinja v3.2.7 for MySQL
--
-- Dump date: 2017-06-30 20:13:38 (UTC)
-- Server version: 10.1.21-MariaDB
-- Database: miprofe
--

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

DROP DATABASE IF EXISTS `u464094640_mipro`;
CREATE DATABASE `u464094640_mipro` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `u464094640_mipro`;

--
-- Structure for table: clase
--
CREATE TABLE `clase` (
  `id` int(99) NOT NULL AUTO_INCREMENT,
  `id_curso` int(10) NOT NULL,
  `username_pro` varchar(50) NOT NULL,
  `username_alu` varchar(50) NOT NULL,
  `status` int(5) DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `puntuacion` int(11) DEFAULT NULL,
  `comentario` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;


--
-- Structure for table: mp_alumno
--
CREATE TABLE `mp_alumno` (
  `username` varchar(20) NOT NULL,
  `nombres` varchar(50) DEFAULT NULL,
  `ape_paterno` varchar(30) DEFAULT NULL,
  `ape_materno` varchar(30) DEFAULT NULL,
  `celular` varchar(15) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `cursos` varchar(50) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `distritos` int(10) DEFAULT NULL,
  `extension_img` varchar(10) DEFAULT 'png',
  PRIMARY KEY (`username`),
  UNIQUE KEY `new_index_1` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


--
-- Structure for table: mp_curso
--
CREATE TABLE `mp_curso` (
  `id_curso` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `nivel` int(10) DEFAULT NULL,
  `seccion` int(10) DEFAULT NULL,
  PRIMARY KEY (`id_curso`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=latin1;


--
-- Structure for table: mp_distrito
--
CREATE TABLE `mp_distrito` (
  `id_distrito` int(10) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id_distrito`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;


--
-- Structure for table: mp_login
--
CREATE TABLE `mp_login` (
  `username` varchar(50) NOT NULL,
  `password` blob NOT NULL,
  `type` varchar(20) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `link_act` int(10) DEFAULT NULL,
  `link` int(10) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


--
-- Structure for table: mp_nivel
--
CREATE TABLE `mp_nivel` (
  `id_nivel` int(10) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id_nivel`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


--
-- Structure for table: mp_profesor
--
CREATE TABLE `mp_profesor` (
  `username` varchar(20) NOT NULL,
  `nombres` varchar(50) DEFAULT NULL,
  `ape_paterno` varchar(30) DEFAULT NULL,
  `ape_materno` varchar(30) DEFAULT NULL,
  `celular` varchar(15) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `link` varchar(50) DEFAULT 'https://www.youtube.com/watch?v=F0iWc9LbHH0',
  `id_uni` int(10) DEFAULT NULL,
  `distritos` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `descripcion` text,
  `online` int(11) DEFAULT NULL,
  `puntuacion` int(10) DEFAULT '4',
  `extension_img` varchar(10) DEFAULT 'png',
  PRIMARY KEY (`username`),
  UNIQUE KEY `new_index_1` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


--
-- Structure for table: mp_uni
--
CREATE TABLE `mp_uni` (
  `id_uni` int(10) NOT NULL AUTO_INCREMENT,
  `nombre_uni` varchar(50) NOT NULL,
  `abreviatura_uni` varchar(50) NOT NULL,
  PRIMARY KEY (`id_uni`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;


--
-- Structure for table: profecurso
--
CREATE TABLE `profecurso` (
  `id_curso` int(10) DEFAULT NULL,
  `username` varchar(50) DEFAULT NULL,
  `modalidad` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


--
-- Data for table: clase
--
LOCK TABLES `clase` WRITE;
ALTER TABLE `clase` DISABLE KEYS;

INSERT INTO `clase` (`id`,`id_curso`,`username_pro`,`username_alu`,`status`,`fecha`,`puntuacion`,`comentario`) VALUES (21,1,'profesor777','aleluis777',0,'2017-06-29 19:38:59',5,'asdasdasdasd'),(22,1,'profesor777','aleluis777',0,'2017-06-30 01:38:50',2,'asdasdfasdfawefwaefaewvsad'),(23,1,'profesor777','aleluis777',0,'2017-06-30 01:40:53',2,'sadfdsafdas'),(24,1,'profesor777','aleluis777',0,'2017-06-30 01:42:55',2,'dzgndgndgxnfxh');

ALTER TABLE `clase` ENABLE KEYS;
UNLOCK TABLES;
COMMIT;

--
-- Data for table: mp_alumno
--
LOCK TABLES `mp_alumno` WRITE;
ALTER TABLE `mp_alumno` DISABLE KEYS;

INSERT INTO `mp_alumno` (`username`,`nombres`,`ape_paterno`,`ape_materno`,`celular`,`telefono`,`cursos`,`direccion`,`email`,`create_at`,`distritos`,`extension_img`) VALUES ('aleluis777','luis','linares','burnes','asdfsdafsa',NULL,NULL,NULL,'luislinaresburnes@gmail.com','2017-06-29 18:16:05',26,'jpg'),('alumno1','jair','fuertes','linio','1234354',NULL,NULL,NULL,'jair@gmail.com','2017-06-30 14:59:35',18,'png');

ALTER TABLE `mp_alumno` ENABLE KEYS;
UNLOCK TABLES;
COMMIT;

--
-- Data for table: mp_curso
--
LOCK TABLES `mp_curso` WRITE;
ALTER TABLE `mp_curso` DISABLE KEYS;

INSERT INTO `mp_curso` (`id_curso`,`nombre`,`nivel`,`seccion`) VALUES (1,'matematica',1,NULL),(20,'matematica',3,NULL),(24,'matematica',2,NULL),(25,'matematica',4,NULL),(26,'fisica',1,NULL),(27,'fisica',2,NULL),(28,'fisica',3,NULL),(29,'fisica',4,NULL),(30,'quimica',1,NULL),(31,'quimica',2,NULL),(32,'quimica',3,NULL),(33,'quimica',4,NULL),(35,'idiomas',1,0),(36,'idiomas',2,0),(37,'idiomas',3,0),(38,'idiomas',4,0),(39,'letras',1,0),(40,'letras',2,0),(41,'letras',3,0),(42,'letras',4,0),(43,'computacion',1,NULL),(44,'computacion',2,NULL),(45,'computacion',3,NULL),(46,'computacion',4,NULL),(47,'musica',1,NULL),(48,'musica',2,NULL),(49,'musica',3,NULL),(50,'musica',4,NULL),(51,'ciencias',4,0),(52,'gestion',4,51),(53,'macroeconomia',4,51),(54,'microeconomia',4,51),(55,'ingles',1,35),(56,'ingles',2,36),(57,'ingles',3,37),(58,'ingles',4,38),(59,'frances',1,35),(60,'frances',2,36),(61,'frances',3,37),(62,'historia',1,39),(63,'geografia',1,39),(64,'literatura',1,39),(65,'lenguaje',1,39),(66,'historia',2,40),(67,'geografia',2,40),(68,'literatura',2,40),(69,'lenguaje',2,40),(70,'historia',3,41),(71,'geografia',3,41),(72,'literatura',3,41),(73,'lenguaje',3,41);

ALTER TABLE `mp_curso` ENABLE KEYS;
UNLOCK TABLES;
COMMIT;

--
-- Data for table: mp_distrito
--
LOCK TABLES `mp_distrito` WRITE;
ALTER TABLE `mp_distrito` DISABLE KEYS;

INSERT INTO `mp_distrito` (`id_distrito`,`nombre`) VALUES (1,'Ate'),(2,'Barranci'),(3,'Breña'),(4,'Cercado de Lima'),(5,'Chorrillos'),(6,'Comas'),(7,'El Agustino'),(8,'Independencia'),(9,'Jesús María'),(10,'La Molina'),(11,'La Victoria'),(12,'Lince'),(13,'Los Olivos'),(14,'Magdalena del Mar'),(15,'Miraflores'),(16,'Pueblo Libre'),(17,'Puente Piedra'),(18,'Rimac'),(19,'San Borja'),(20,'San Isidro'),(21,'San Juan de Lurigancho'),(22,'San Juan de Miraflores'),(23,'San Luis'),(24,'San Martin de Porres'),(25,'San Miguel'),(26,'Santa Anita'),(27,'Santa Rosa'),(28,'Santiago de Surco'),(29,'Surquillo'),(30,'Villa El Savador'),(31,'Villa María del Triunfo');

ALTER TABLE `mp_distrito` ENABLE KEYS;
UNLOCK TABLES;
COMMIT;

--
-- Data for table: mp_login
--
LOCK TABLES `mp_login` WRITE;
ALTER TABLE `mp_login` DISABLE KEYS;

INSERT INTO `mp_login` (`username`,`password`,`type`,`email`,`link_act`,`link`) VALUES ('aleluis777',X'6531306164633339343962613539616262653536653035376632306638383365','alumno','luislinaresburnes@gmail.com',666,666),('alumno1',X'6531306164633339343962613539616262653536653035376632306638383365','alumno','jair@gmail.com',666,NULL),('profesor1',X'6531306164633339343962613539616262653536653035376632306638383365','profesor','sacs@vassdvcads.com',666,NULL),('profesor777',X'6531306164633339343962613539616262653536653035376632306638383365','profesor','luislinaresburnes@gmail.com',666,666);

ALTER TABLE `mp_login` ENABLE KEYS;
UNLOCK TABLES;
COMMIT;

--
-- Data for table: mp_nivel
--
LOCK TABLES `mp_nivel` WRITE;
ALTER TABLE `mp_nivel` DISABLE KEYS;

INSERT INTO `mp_nivel` (`id_nivel`,`nombre`) VALUES (1,'primaria'),(2,'secundaria'),(3,'postulante'),(4,'universitario');

ALTER TABLE `mp_nivel` ENABLE KEYS;
UNLOCK TABLES;
COMMIT;

--
-- Data for table: mp_profesor
--
LOCK TABLES `mp_profesor` WRITE;
ALTER TABLE `mp_profesor` DISABLE KEYS;

INSERT INTO `mp_profesor` (`username`,`nombres`,`ape_paterno`,`ape_materno`,`celular`,`telefono`,`link`,`id_uni`,`distritos`,`email`,`direccion`,`descripcion`,`online`,`puntuacion`,`extension_img`) VALUES ('profesor1','marco','arevalo','arevalin','124314',NULL,NULL,4,'17','sacs@vassdvcads.com',NULL,NULL,NULL,4,'png'),('profesor777','Luis Alberto','Linares','Burnes','12345678',NULL,NULL,3,'18,19,21','luislinaresburnes@gmail.com',NULL,'soy un profesor que se levanta muy temprano y  trabaja sin descanzar :V',NULL,NULL,'png');

ALTER TABLE `mp_profesor` ENABLE KEYS;
UNLOCK TABLES;
COMMIT;

--
-- Data for table: mp_uni
--
LOCK TABLES `mp_uni` WRITE;
ALTER TABLE `mp_uni` DISABLE KEYS;

INSERT INTO `mp_uni` (`id_uni`,`nombre_uni`,`abreviatura_uni`) VALUES (1,'Universidad Nacional de Ingeniería','UNI'),(2,'Universidad Nacional Mayor de San Marcos','UNMSM'),(3,'Universidad Nacional Federico Villareal','UNFV'),(4,'Universidad Nacional del Callao','UNAC');

ALTER TABLE `mp_uni` ENABLE KEYS;
UNLOCK TABLES;
COMMIT;

--
-- Data for table: profecurso
--
LOCK TABLES `profecurso` WRITE;
ALTER TABLE `profecurso` DISABLE KEYS;

INSERT INTO `profecurso` (`id_curso`,`username`,`modalidad`) VALUES (1,'profesor777',0),(26,'profesor777',0),(26,'profesor777',1),(1,'profesor777',1),(28,'profesor777',0),(55,'profesor777',0),(50,'profesor777',0),(45,'profesor777',1),(58,'profesor777',0);

ALTER TABLE `profecurso` ENABLE KEYS;
UNLOCK TABLES;
COMMIT;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;

