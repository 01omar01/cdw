
var cdw = require('../models/cdw.js')
var error = 'Se produjo un error, estamos trabajando para solucionarlo.';
var title = "DCW";

exports.index = function(req, res){
	if(req.session.datos_usuario){
		res.render('index', { title: title, data: req.session.datos_usuario});
	}else{
		res.render('index', { title: title });
	}
};
exports.login = function(req,res){
	validar_session(req, res);	
	res.render('login', { title: title});
};

exports.iniciar_session = function(req, res){
	validar_session(req, res);
	var datos = {
		usuario: req.body['txt-user-login'],
		pass  : req.body['txt-pass-login']
	};
	cdw.login(datos,function(resultado){
		if(resultado.estado=='1'){
			var data = resultado.results[0];			
			if(data.length>0){
				req.session.datos_usuario = {
					id_usuario 		: data[0].id_usuario,
					usuario    		: data[0].usuario,
					avatar     		: data[0].avatar,
					nombre_usuario	: data[0].nombre_usuario
				};	
				res.redirect('/');
			}else{
				res.render('login', { title: title, error: 'Usuario o Contraseña incorrectos' });
			}			
		}else{
			res.render('login', { title: title, error: error });
		}
	});
};

exports.edit_perfil = function(req, res){
	if(req.session.datos_usuario){
		res.render('index', { title: title, data: req.session.datos_usuario, edit_perfil: true});
	}else{
		res.render('login', { title: title, error: 'Debes iniciar sesión para continuar' });
	}
};
exports.edit_avatar = function(req, res){
	if(req.session.datos_usuario){
		var datos = {
			id_usuario: req.session.datos_usuario.id_usuario,
			avatar:  req.body['txt-avatar-perfil']
		};
		cdw.edit_avatar(datos,function(resultado){
			if(resultado.estado == '1'){
				req.session.datos_usuario.avatar = req.body['txt-avatar-perfil'];
				res.redirect('/');
			}else{
				res.render('index', { title: title, data: req.session.datos_usuario, error: error});
			}
		});	
	}else{
		res.redirect('/login');
	}
};

exports.edit_pass = function(datos, callback){
	cdw.cambiar_contrasena(datos, function(resultado){		
		if(resultado.estado=='1'){
			callback({ estado: '1', resultado: resultado.results[0][0] });
			return;
		}else{
			callback({ estado:'0', error: error});
			return;
		}
	});
};

exports.validar_disponibilidad_usuario = function(usuario, callback){
	var datos = { usuario: usuario };
	cdw.validar_disponibilidad(datos,function(resultado){
		if(resultado.estado=='1'){			
			callback({ estado: '1', resultado: resultado.results[0][0] });
			return;
		}else{			
			callback({ estado: '0', error: error});
			return;
		}
	});	
};
exports.registro = function(req, res){
	validar_session(req, res);
	var datos = {
		usuario: req.body['txt-usuario-registro'],
		nombre : req.body['txt-nombre-registro'],
		email : req.body['txt-email-registro'],
		pass  : req.body['txt-pass-registro']
	};
	cdw.registro(datos,function(resultado){
		if(resultado.estado=='1'){
			res.render('index', { title: title});
		}else{
			res.render('login', { title: title, error: error });
		}
	});
};

exports.logout = function(req, res){
	req.session.destroy();	
	res.redirect('/');
};

function validar_session(req, res){
	if(req.session.datos_usuario){
		res.redirect('/');
	}
}
function redirect_login(req, res){
	if(req.session.datos_usuario){
		res.redirect('/login');
	}
}