
var cdw = require('../models/cdw.js')
var error = 'Se produjo un error, estamos trabajando para solucionarlo.';
var title = "DCW";

exports.index = function(req, res){
	cdw.inicio(function(resultado){
		if(resultado.estado=='1'){
			if(req.session.datos_usuario){
				res.render('index', { title: title, data: req.session.datos_usuario, post: resultado.results[0] });
			}else{
				res.render('index', { title: title, post: resultado.results[0] });
			}
		}else{			
			if(req.session.datos_usuario){
				res.render('index', { title: title, data: req.session.datos_usuario, error: error });
			}else{
				res.render('index', { title: title, error: error });
			}
		}	
	});
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


exports.tutoriales = function(req, res){
	cdw.tutoriales_listar_activos(function(resultado){
		if(resultado.estado=='1'){
			if(req.session.datos_usuario){
				res.render('index', { title: title, data: req.session.datos_usuario, post: resultado.results[0] });
			}else{
				res.render('index', { title: title, post: resultado.results[0] });
			}
		}else{			
			if(req.session.datos_usuario){
				res.render('index', { title: title, data: req.session.datos_usuario, error: error });
			}else{
				res.render('index', { title: title, error: error });
			}
		}	
	});
};

exports.videotutoriales = function(req, res){
	cdw.videotutoriales_listar_activos(function(resultado){
		if(resultado.estado=='1'){
			if(req.session.datos_usuario){
				res.render('index', { title: title, data: req.session.datos_usuario, post: resultado.results[0] });
			}else{
				res.render('index', { title: title, post: resultado.results[0] });
			}
		}else{			
			if(req.session.datos_usuario){
				res.render('index', { title: title, data: req.session.datos_usuario, error: error });
			}else{
				res.render('index', { title: title, error: error });
			}
		}	
	});
};

exports.videotutorialesgetbyid = function(req, res){
	var datos = {
		id_videotutorial: req.param("id")
	};
	cdw.videotutoriales_getbyid(datos, function(resultado){
		if(resultado.estado=='1'){
			var videotutorial = resultado.results[0];
			cdw.top5(function(resultado){
				if(resultado.estado=='1'){
					var top5 = resultado.results[0];

					cdw.videotutoriales_comentarios(datos, function(resultado){
						if(resultado.estado=='1'){
							var videotutorial_comentarios = resultado.results[0];
							if(req.session.datos_usuario){
								res.render('index', { title: title, data: req.session.datos_usuario, videotutorial: videotutorial, top5: top5, videotutorial_comentarios: videotutorial_comentarios });
							}else{
								res.render('index', { title: title, videotutorial: videotutorial, top5: top5, videotutorial_comentarios: videotutorial_comentarios });
							}							
						}else{
							if(req.session.datos_usuario){
								res.render('index', { title: title, data: req.session.datos_usuario, error: error });
							}else{
								res.render('index', { title: title, error: error });
							}							
						}
					});
				}else{
					if(req.session.datos_usuario){
						res.render('index', { title: title, data: req.session.datos_usuario, error: error });
					}else{
						res.render('index', { title: title, error: error });
					}						
				}
			});
		}else{
			if(req.session.datos_usuario){
				res.render('index', { title: title, data: req.session.datos_usuario, error: error });
			}else{
				res.render('index', { title: title, error: error });
			}			
		}
	});
}




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