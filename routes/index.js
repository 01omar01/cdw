
var cdw = require('../models/cdw.js')
var error = 'Se produjo un error, estamos trabajando para solucionarlo.';


exports.index = function(req, res){
  res.render('index', { title: 'DCW' });
};
exports.login = function(req,res){
	res.render('login', { title: 'DCW'});
};

exports.iniciar_session = function(req, res){
	var datos = {
		usuario: req.body['txt-user-login'],
		pass  : req.body['txt-pass-login']
	};
	cdw.login(datos,function(resultado){
		if(resultado.estado=='1'){
			var data = resultado.results[0];			
			if(data.length>0){				
				res.render('index', { title: 'DCW', data: data});
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