var cdw = require('./cdw.js')
var error = 'Se produjo un error, estamos trabajando para solucionarlo';

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

exports.armar_html_comentario = function(datos, callback){	
	var html = '';
	var onclick = '';
	switch(datos.param){
		case "vdt":
			onclick = 'add_comentario_videotutorial('+"'"+ datos.id +"'"+')';
		break;
	}	
	html += '<article>';
	html += '<textarea id="txt-comentario" name="txt-comentario" ></textarea>';
	html += '<button class="boton" id="btn_agregar_comentario" onclick="'+onclick+'" >Agregar Comentario</button>';
	html += '</article>';	
	callback({ html: html });
	return;

};