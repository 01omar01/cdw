var mysql = require('mysql');
var mysql_username = 'root';
var mysql_password = '';

var client = mysql.createConnection({
  host     : 'localhost',
  user: mysql_username,
  password: mysql_password,
});

client.query("USE cdw");

exports.inicio = function(callback){
	client.query(' call spinicio_pagina ',
		function(err, results, fiels){
			if(err){
				callback({estado:'0',err: err});
				return;
			}else{
				callback({estado:'1',results: results});
				return;
			}
		});
};

exports.login = function(datos, callback){
	client.query(' call spseg_mae_usuarios_login (?,?)',[datos.usuario, datos.pass],
		function(err, results, fiels){			
			if(err){
				callback({estado:'0',err: err});
				return;
			}else{
				callback({estado:'1',results: results});
				return;
			}
		});
};

exports.registro = function(datos, callback){
	client.query(' call spseg_mae_usuarios_registro (?,?,?,?)',[datos.usuario, datos.nombre, datos.email, datos.pass],
		function(err, results, fiels){			
			if(err){
				callback({estado:'0',err: err});
				return;
			}else{
				callback({estado:'1',results: results});
				return;
			}
		});
};
exports.validar_disponibilidad = function(datos, callback){
	client.query(' call spseg_mae_usuarios_disponibilidad (?)',[datos.usuario],
		function(err, results, fiels){			
			if(err){
				callback({estado:'0',err: err});
				return;
			}else{
				callback({estado:'1',results: results});
				return;
			}
		});
};

exports.edit_avatar = function(datos, callback){
	client.query(' call spseg_mae_usuarios_edit_avatar (?,?)',[datos.id_usuario, datos.avatar],
		function(err, results, fiels){
			if(err){
				callback({estado:'0',err: err});
				return;
			}else{
				callback({estado:'1',results: results});
				return;
			}			
		});
};

exports.cambiar_contrasena = function(datos, callback){
	client.query(' call spseg_mae_usuarios_edit_pass (?,?,?)',[datos.id_usuario, datos.pass_actual, datos.pass_nueva],
		function(err, results, fiels){
			if(err){
				callback({estado:'0',err: err});
				return;
			}else{
				callback({estado:'1',results: results});
				return;
			}			
		});
};
//Tutoriales
exports.tutoriales_listar_activos = function(callback){
	client.query(' call spm_tutoriales_mov_tutoriales_listar_activos ',
		function(err, results, fiels){
			if(err){
				callback({estado:'0',err: err});
				return;
			}else{
				callback({estado:'1',results: results});
				return;
			}	
	});
};

//Videotutoriales
exports.videotutoriales_listar_activos = function(callback){
	client.query(' call spm_videotutoriales_mov_videos_listar_activos ',
		function(err, results, fiels){
			if(err){
				callback({estado:'0',err: err});
				return;
			}else{
				callback({estado:'1',results: results});
				return;
			}	
	});
};
exports.videotutoriales_getbyid = function(datos, callback){
	client.query(' call spm_videotutoriales_mov_videos_getbyid (?)',[datos.id_videotutorial],
		function(err, results, fiels){
			if(err){
				callback({estado:'0',err: err});
				return;
			}else{
				callback({estado:'1',results: results});
				return;
			}
		});
};
