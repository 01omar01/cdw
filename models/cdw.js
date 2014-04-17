var mysql = require('mysql');
var mysql_username = 'root';
var mysql_password = '';

var client = mysql.createConnection({
  host     : 'localhost',
  user: mysql_username,
  password: mysql_password,
});

client.query("USE cdw");

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