/*
SQLyog Community v8.71 
MySQL - 5.5.27 : Database - cdw
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`cdw` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_spanish_ci */;

USE `cdw`;

/*Table structure for table `m_guias_mov_comentarios` */

DROP TABLE IF EXISTS `m_guias_mov_comentarios`;

CREATE TABLE `m_guias_mov_comentarios` (
  `id_comentario` int(50) NOT NULL AUTO_INCREMENT,
  `id_guia` int(11) DEFAULT NULL,
  `contenido` longtext COLLATE latin1_spanish_ci,
  `fecha_larga` varchar(50) COLLATE latin1_spanish_ci DEFAULT NULL,
  `fecha` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `hora` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `id_usuario` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_comentario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `m_guias_mov_comentarios` */

/*Table structure for table `m_guias_mov_guias` */

DROP TABLE IF EXISTS `m_guias_mov_guias`;

CREATE TABLE `m_guias_mov_guias` (
  `id_guia` int(50) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `contenido` longtext COLLATE latin1_spanish_ci,
  `url_guia` longtext COLLATE latin1_spanish_ci,
  `url_img` longtext COLLATE latin1_spanish_ci,
  `fecha_larga` varchar(50) COLLATE latin1_spanish_ci DEFAULT NULL,
  `fecha` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `hora` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `id_usuario` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL,
  `estado` varchar(2) COLLATE latin1_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_guia`),
  KEY `fk_guias_usuarios` (`id_usuario`),
  CONSTRAINT `fk_guias_usuarios` FOREIGN KEY (`id_usuario`) REFERENCES `seg_mae_usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `m_guias_mov_guias` */

/*Table structure for table `m_tutoriales_mov_comentarios` */

DROP TABLE IF EXISTS `m_tutoriales_mov_comentarios`;

CREATE TABLE `m_tutoriales_mov_comentarios` (
  `id_comentario` int(50) NOT NULL AUTO_INCREMENT,
  `id_tutorial` int(11) DEFAULT NULL,
  `contenido` longtext COLLATE latin1_spanish_ci,
  `fecha_larga` varchar(50) COLLATE latin1_spanish_ci DEFAULT NULL,
  `fecha` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `hora` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `id_usuario` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_comentario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `m_tutoriales_mov_comentarios` */

/*Table structure for table `m_tutoriales_mov_tutoriales` */

DROP TABLE IF EXISTS `m_tutoriales_mov_tutoriales`;

CREATE TABLE `m_tutoriales_mov_tutoriales` (
  `id_tutorial` int(50) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `contenido` longtext COLLATE latin1_spanish_ci,
  `url_img` longtext COLLATE latin1_spanish_ci,
  `fecha_larga` varchar(50) COLLATE latin1_spanish_ci DEFAULT NULL,
  `fecha` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `hora` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `id_usuario` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL,
  `estado` varchar(2) COLLATE latin1_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_tutorial`),
  KEY `fk_tutoriales_usuarios` (`id_usuario`),
  CONSTRAINT `fk_tutoriales_usuarios` FOREIGN KEY (`id_usuario`) REFERENCES `seg_mae_usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `m_tutoriales_mov_tutoriales` */

insert  into `m_tutoriales_mov_tutoriales`(`id_tutorial`,`titulo`,`contenido`,`url_img`,`fecha_larga`,`fecha`,`hora`,`id_usuario`,`estado`) values (1,'Node.js','kndkandkasndk nskdn kasnd knakd ansd knaskd skndksandkans ansdk nkd \r\n','/images/logos/node-logo.png','18 de Marzo 2014','2014-04-08','20:50:01','NOVW56UVGHIJWXMN','1');

/*Table structure for table `m_videotutoriales_mov_videos` */

DROP TABLE IF EXISTS `m_videotutoriales_mov_videos`;

CREATE TABLE `m_videotutoriales_mov_videos` (
  `id_videotutorial` int(50) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `contenido` longtext COLLATE latin1_spanish_ci,
  `url_video` longtext COLLATE latin1_spanish_ci,
  `url_img` longtext COLLATE latin1_spanish_ci,
  `fecha_larga` varchar(50) COLLATE latin1_spanish_ci DEFAULT NULL,
  `fecha` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `hora` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `id_usuario` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL,
  `estado` varchar(2) COLLATE latin1_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_videotutorial`),
  KEY `fk_videotutoriales_usuarios` (`id_usuario`),
  CONSTRAINT `fk_videotutoriales_usuarios` FOREIGN KEY (`id_usuario`) REFERENCES `seg_mae_usuarios` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `m_videotutoriales_mov_videos` */

insert  into `m_videotutoriales_mov_videos`(`id_videotutorial`,`titulo`,`contenido`,`url_video`,`url_img`,`fecha_larga`,`fecha`,`hora`,`id_usuario`,`estado`) values (1,'Video','bjdbsaj djsabd jabsdj asjdb jabdjasb djbas djbsjd basjdb jsbdj ajsbd jbasj danb djab djabj dbaj bdjab djab djab djab ','THILRL3-ukU','/images/logos/js-logo.png','18 de Marzo 2014','2014-04-18','20:00:01','NOVW56UVGHIJWXMN','1');

/*Table structure for table `m_vidiotutoriales_mov_comentarios` */

DROP TABLE IF EXISTS `m_vidiotutoriales_mov_comentarios`;

CREATE TABLE `m_vidiotutoriales_mov_comentarios` (
  `id_comentario` int(50) NOT NULL AUTO_INCREMENT,
  `id_videotutorial` int(11) DEFAULT NULL,
  `contenido` longtext COLLATE latin1_spanish_ci,
  `fecha_larga` varchar(50) COLLATE latin1_spanish_ci DEFAULT NULL,
  `fecha` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `hora` varchar(10) COLLATE latin1_spanish_ci DEFAULT NULL,
  `id_usuario` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_comentario`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `m_vidiotutoriales_mov_comentarios` */

insert  into `m_vidiotutoriales_mov_comentarios`(`id_comentario`,`id_videotutorial`,`contenido`,`fecha_larga`,`fecha`,`hora`,`id_usuario`) values (1,1,'jjabsjdbsjsabjdba jsabdjsabdjbajdbajbdjsabdjasbdjasb jsbdjsbdjbajdbjabdjbasjdbsjbdjsabdjbsjdbjsbdjbdjbd jbdjsabdjbadjbjbdjabdjbajdbjabdjabdjbadjad','21 de Abril 2014','2014-04-21','20:55:06','NOVW56UVGHIJWXMN');

/*Table structure for table `seg_mae_usuarios` */

DROP TABLE IF EXISTS `seg_mae_usuarios`;

CREATE TABLE `seg_mae_usuarios` (
  `id_usuario` varchar(100) COLLATE latin1_spanish_ci NOT NULL,
  `usuario` varchar(50) COLLATE latin1_spanish_ci NOT NULL,
  `avatar` longtext COLLATE latin1_spanish_ci,
  `nombre_usuario` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL,
  `contrasena` varchar(50) COLLATE latin1_spanish_ci DEFAULT NULL,
  `email` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL,
  `estado` varchar(100) COLLATE latin1_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_usuario`,`usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `seg_mae_usuarios` */

insert  into `seg_mae_usuarios`(`id_usuario`,`usuario`,`avatar`,`nombre_usuario`,`contrasena`,`email`,`estado`) values ('NOVW56UVGHIJWXMN','osalgado','https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/t1.0-1/c46.46.577.577/s160x160/1045248_10201550652195117_1560511763_n.jpg','Omar Salgado','123456','omarsal@om.com','1');

/* Procedure structure for procedure `spinicio_pagina` */

/*!50003 DROP PROCEDURE IF EXISTS  `spinicio_pagina` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spinicio_pagina`()
BEGIN
SELECT t.* FROM(
	SELECT
		concat('guia_',a.id_guia) as id,
		'Guia' AS categoria,
		CONCAT('/guias/getbyid?id=',a.id_guia) AS link,
		a.titulo,
		CONCAT(SUBSTRING(a.contenido,1,30),'...') AS contenido,
		a.url_img,
		a.fecha,
		a.hora,
		a.fecha_larga,
		b.nombre_usuario,
		(
			SELECT COUNT(*) cantidad 
			FROM m_guias_mov_comentarios
			WHERE id_guia = a.id_guia
		) AS cantidad_comentarios	
	FROM m_guias_mov_guias a
		INNER JOIN seg_mae_usuarios b ON a.id_usuario = b.id_usuario
	WHERE a.estado = '1'
	UNION
	SELECT
		CONCAT('tutorial_',a.id_tutorial) AS id,
		'Tutorial' AS categoria,
		CONCAT('/tutoriales/getbyid?id=',a.id_tutorial) AS link,
		a.titulo,
		CONCAT(SUBSTRING(a.contenido,1,30),'...') AS contenido,
		a.url_img,
		a.fecha,
		a.hora,
		a.fecha_larga,
		b.nombre_usuario,
		(
			SELECT COUNT(*) cantidad 
			FROM m_tutoriales_mov_comentarios
			WHERE id_tutorial = a.id_tutorial
		) AS cantidad_comentarios
	FROM m_tutoriales_mov_tutoriales a
		INNER JOIN seg_mae_usuarios b ON a.id_usuario = b.id_usuario
	WHERE a.estado = '1'
	UNION
	SELECT
		CONCAT('videotutorial_',a.id_videotutorial) AS id,
		'Videotutorial' AS categoria,
		CONCAT('/videotutorial/getbyid?id=',a.id_videotutorial) AS link,
		a.titulo,
		concat(SUBSTRING(a.contenido,1,40),'...') AS contenido,
		a.url_img,
		a.fecha,
		a.hora,
		a.fecha_larga,
		b.nombre_usuario,
		(
			SELECT COUNT(*) cantidad 
			FROM m_vidiotutoriales_mov_comentarios
			WHERE id_videotutorial = a.id_videotutorial
		) as cantidad_comentarios
	FROM m_videotutoriales_mov_videos a
		INNER JOIN seg_mae_usuarios b ON a.id_usuario = b.id_usuario
	WHERE a.estado = '1'
) AS t
ORDER BY t.fecha DESC, t.hora DESC;
END */$$
DELIMITER ;

/* Procedure structure for procedure `splistar_top_5` */

/*!50003 DROP PROCEDURE IF EXISTS  `splistar_top_5` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `splistar_top_5`()
BEGIN
	SELECT t.* FROM(
		SELECT
			CONCAT('guia_',a.id_guia) AS id,
			'Guia' AS categoria,
			CONCAT('/guias/getbyid?id=',a.id_guia) AS link,
			a.titulo,
			CONCAT(SUBSTRING(a.contenido,1,20),'...') AS contenido,
			a.url_img,
			a.fecha,
			a.hora,
			a.fecha_larga,
			b.nombre_usuario,
			(
				SELECT COUNT(*) cantidad 
				FROM m_guias_mov_comentarios
				WHERE id_guia = a.id_guia
			) AS cantidad_comentarios	
		FROM m_guias_mov_guias a
			INNER JOIN seg_mae_usuarios b ON a.id_usuario = b.id_usuario
		WHERE a.estado = '1'
		UNION
		SELECT
			CONCAT('tutorial_',a.id_tutorial) AS id,
			'Tutorial' AS categoria,
			CONCAT('/tutoriales/getbyid?id=',a.id_tutorial) AS link,
			a.titulo,
			CONCAT(SUBSTRING(a.contenido,1,20),'...') AS contenido,
			a.url_img,
			a.fecha,
			a.hora,
			a.fecha_larga,
			b.nombre_usuario,
			(
				SELECT COUNT(*) cantidad 
				FROM m_tutoriales_mov_comentarios
				WHERE id_tutorial = a.id_tutorial
			) AS cantidad_comentarios
		FROM m_tutoriales_mov_tutoriales a
			INNER JOIN seg_mae_usuarios b ON a.id_usuario = b.id_usuario
		WHERE a.estado = '1'
		UNION
		SELECT
			CONCAT('videotutorial_',a.id_videotutorial) AS id,
			'Videotutorial' AS categoria,
			CONCAT('/videotutorial/getbyid?id=',a.id_videotutorial) AS link,
			a.titulo,
			CONCAT(SUBSTRING(a.contenido,1,20),'...') AS contenido,
			a.url_img,
			a.fecha,
			a.hora,
			a.fecha_larga,
			b.nombre_usuario,
			(
				SELECT COUNT(*) cantidad 
				FROM m_vidiotutoriales_mov_comentarios
				WHERE id_videotutorial = a.id_videotutorial
			) AS cantidad_comentarios
		FROM m_videotutoriales_mov_videos a
			INNER JOIN seg_mae_usuarios b ON a.id_usuario = b.id_usuario
		WHERE a.estado = '1'
	) AS t
	ORDER BY t.cantidad_comentarios DESC limit 5;
END */$$
DELIMITER ;

/* Procedure structure for procedure `spm_tutoriales_mov_tutoriales_listar_activos` */

/*!50003 DROP PROCEDURE IF EXISTS  `spm_tutoriales_mov_tutoriales_listar_activos` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spm_tutoriales_mov_tutoriales_listar_activos`()
BEGIN
	SELECT
		CONCAT('tutorial_',a.id_tutorial) AS id,
		'Tutorial' AS categoria,
		CONCAT('/tutoriales/getbyid?id=',a.id_tutorial) AS link,
		a.titulo,
		CONCAT(SUBSTRING(a.contenido,1,30),'...') AS contenido,
		a.url_img,
		a.fecha,
		a.hora,
		a.fecha_larga,
		b.nombre_usuario,
		(
			SELECT COUNT(*) cantidad 
			FROM m_tutoriales_mov_comentarios
			WHERE id_tutorial = a.id_tutorial
		) AS cantidad_comentarios
	FROM m_tutoriales_mov_tutoriales a
		INNER JOIN seg_mae_usuarios b ON a.id_usuario = b.id_usuario
	WHERE a.estado = '1';
END */$$
DELIMITER ;

/* Procedure structure for procedure `spm_videotutoriales_mov_videos_getbyid` */

/*!50003 DROP PROCEDURE IF EXISTS  `spm_videotutoriales_mov_videos_getbyid` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spm_videotutoriales_mov_videos_getbyid`(
pid_videotutorial varchar(100))
BEGIN
	select 
		a.*,
		b.usuario,
		b.avatar,
		b.nombre_usuario,
		(
			SELECT COUNT(*) cantidad 
			FROM m_vidiotutoriales_mov_comentarios
			WHERE id_videotutorial = a.id_videotutorial
		) AS cantidad_comentarios	
	from m_videotutoriales_mov_videos a
		inner join seg_mae_usuarios b on a.id_usuario = b.id_usuario
	where a.id_videotutorial = pid_videotutorial;
END */$$
DELIMITER ;

/* Procedure structure for procedure `spm_videotutoriales_mov_videos_listar_activos` */

/*!50003 DROP PROCEDURE IF EXISTS  `spm_videotutoriales_mov_videos_listar_activos` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spm_videotutoriales_mov_videos_listar_activos`()
BEGIN
	SELECT
		CONCAT('videotutorial_',a.id_videotutorial) AS id,
		'Videotutorial' AS categoria,
		CONCAT('/videotutorial/getbyid?id=',a.id_videotutorial) AS link,
		a.titulo,
		CONCAT(SUBSTRING(a.contenido,1,40),'...') AS contenido,
		a.url_img,
		a.fecha,
		a.hora,
		a.fecha_larga,
		b.nombre_usuario,
		(
			SELECT COUNT(*) cantidad 
			FROM m_vidiotutoriales_mov_comentarios
			WHERE id_videotutorial = a.id_videotutorial
		) AS cantidad_comentarios
	FROM m_videotutoriales_mov_videos a
		INNER JOIN seg_mae_usuarios b ON a.id_usuario = b.id_usuario
	WHERE a.estado = '1';
END */$$
DELIMITER ;

/* Procedure structure for procedure `spm_vidiotutoriales_mov_comentarios_listar_id_videotutorial` */

/*!50003 DROP PROCEDURE IF EXISTS  `spm_vidiotutoriales_mov_comentarios_listar_id_videotutorial` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spm_vidiotutoriales_mov_comentarios_listar_id_videotutorial`(
pid_videotutorial varchar(100))
BEGIN
	select
		a.*,
		b.avatar,
		b.usuario,
		b.nombre_usuario
	from m_vidiotutoriales_mov_comentarios a
		inner join seg_mae_usuarios b on a.id_usuario = b.id_usuario
	where a.id_videotutorial = pid_videotutorial;
END */$$
DELIMITER ;

/* Procedure structure for procedure `spseg_mae_usuarios_disponibilidad` */

/*!50003 DROP PROCEDURE IF EXISTS  `spseg_mae_usuarios_disponibilidad` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spseg_mae_usuarios_disponibilidad`(
pusuario varchar(50))
BEGIN
	select count(*) into @vcount from seg_mae_usuarios where usuario = pusuario;
	if (@vcount > 0) then
		select '0' estado, 'Usuario no disponible' as msj;
	else
		SELECT '1' estado, 'Usuario disponible' AS msj;
	end if;
END */$$
DELIMITER ;

/* Procedure structure for procedure `spseg_mae_usuarios_edit_avatar` */

/*!50003 DROP PROCEDURE IF EXISTS  `spseg_mae_usuarios_edit_avatar` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spseg_mae_usuarios_edit_avatar`(
pid_usuario varchar(100),
pavatar longtext)
BEGIN
	update seg_mae_usuarios
	set avatar = pavatar
	where id_usuario = pid_usuario;
END */$$
DELIMITER ;

/* Procedure structure for procedure `spseg_mae_usuarios_edit_pass` */

/*!50003 DROP PROCEDURE IF EXISTS  `spseg_mae_usuarios_edit_pass` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spseg_mae_usuarios_edit_pass`(
pid_usuairo varchar(100),
ppass_actual varchar(100),
ppass_nueva varchar(100))
BEGIN
	select count(*) into @vcount
	from seg_mae_usuarios
	where
		id_usuario = pid_usuairo and
		contrasena = ppass_actual;
	
	if (@vcount > 0)then
		update seg_mae_usuarios
		set contrasena = ppass_nueva
		WHERE id_usuario = pid_usuairo;
		select '1' as estado, 'Contraseña cambiada' as msj;
	else
		select '0' as estado, 'Contraseña actual incorrecta' as msj;
	end if;
END */$$
DELIMITER ;

/* Procedure structure for procedure `spseg_mae_usuarios_login` */

/*!50003 DROP PROCEDURE IF EXISTS  `spseg_mae_usuarios_login` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spseg_mae_usuarios_login`(
pusuario varchar(100),
ppass varchar(100))
BEGIN
	select * from seg_mae_usuarios where usuario = pusuario and contrasena = ppass;
END */$$
DELIMITER ;

/* Procedure structure for procedure `spseg_mae_usuarios_registro` */

/*!50003 DROP PROCEDURE IF EXISTS  `spseg_mae_usuarios_registro` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `spseg_mae_usuarios_registro`(
pusuario varchar(100),
pnombre_usuario varchar(100),
pemail varchar(100),
pcontrasena varchar(100)
)
BEGIN
	SELECT CONCAT(SUBSTRING('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', RAND()*36+1, 2),
		      SUBSTRING('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', RAND()*36+1, 2),
		      SUBSTRING('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', RAND()*36+1, 2),
		      SUBSTRING('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', RAND()*36+1, 2),
		      SUBSTRING('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', RAND()*36+1, 2),
		      SUBSTRING('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', RAND()*36+1, 2),
		      SUBSTRING('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', RAND()*36+1, 2),
		      SUBSTRING('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', RAND()*36+1, 2)
	) into @pid_usuario;
	
	SELECT COUNT(*) into @vcount FROM seg_mae_usuarios WHERE email = pemail;
	
	if ( @vcount > 0 )then
		select '0' as estado, 'Ya hay un email registrado con esta cuenta' as msj;
	else
		INSERT INTO seg_mae_usuarios(id_usuario, usuario, avatar, nombre_usuario, contrasena, email, estado)
		VALUES (@pid_usuario, pusuario, '/images/avatar_default.png', trim(pnombre_usuario), pcontrasena, pemail, '1');
		select '1' as estado;
	end if;
	 
END */$$
DELIMITER ;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
