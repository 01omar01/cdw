
var cdw = require('../models/cdw.js')
var error = 'Se produjo un error, estamos trabajando para solucionarlo.';


exports.index = function(req, res){
	if(req.session.datos_usuario){
		res.render('index', { title: 'DCW', data: req.session.datos_usuario});
	}else{
		res.render('index', { title: 'DCW' });
	}
};
exports.login = function(req,res){
	validar_session(req, res);
	res.render('login', { title: 'DCW'});
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
					id_usuario : data[0].id_usuario,
					usuario    : data[0].usuario,
					avatar     : data[0].avatar,
					nombre     : data[0].nombre_usuario
				};	
				res.redirect('/');
			}else{
				res.render('login', { title: 'DCW', error: 'Usuario o Contraseña incorrectos' });
			}			
		}else{
			res.render('login', { title: 'DCW', error: error });
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
			res.render('index', { title: 'DCW'});
		}else{
			res.render('login', { title: 'DCW', error: error });
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