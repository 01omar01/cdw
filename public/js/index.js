$(document).ready(inicio_index);
var socket = io.connect();
socket.on('edit_pass',success_edit_pass);
socket.on('error',error);
socket.on('ventana_agregar_comentario', success_ventana_agregar_comentario);
function inicio_index(){
	inicializar_objetos_index();
	eventos_index();
}
function inicializar_objetos_index(){
	$("#txt-busqueda-principal").focus();
}
function eventos_index(){
	$("#btn-cambiar-contrasena").on('click',btn_cambiar_contrasena_click);
	$("#btn-vista-previa-avatar").on('click',btn_vista_previa_avatar_click);
	$("#close-comentarios").on('click',close_comentarios_click);
	$("#close-error").on('click',close_error_click);
	$( "#inicio-pagina article" ).mouseover(function() {
		$(this).find('div[class*="mas"]').attr('style','display:block;').animate({opacity: 1,},999);
	}).mouseout(function() {
		$(this).find('div[class*="mas"]').attr('style','display:none;background: #fff;opacity:0;').animate();
	});



	$("#menu").on("click",menu_click);
}
function btn_cambiar_contrasena_click(){
	var pass = $("#txt-nueva-pass-perfil").val();
	var pass_conf = $("#txt-conf-nueva-pass-perfil").val();
	if(pass==pass_conf){
		if(validationPass(pass)){
			var datos = {
				pass_actual: $("#txt-pass-actual-perfil").val(),
				pass_nueva: pass,
				pass_conf: pass_conf
			};
			socket.emit('edit_pass',datos);
		}else{
			msj_edit_perfil('La contraseña nueva no cumple con los requisitos');
		}
	}else{
		$("#txt-conf-nueva-pass-perfil").val('');
		$("#txt-nueva-pass-perfil").val('');
		msj_edit_perfil('Las contraseñas no coinciden');
	}

}
function btn_vista_previa_avatar_click(){
	var url = $("#txt-avatar-perfil").val();
	if(validationUrl(url)){
		msj_edit_perfil("");
		$("#frm-edit-avatar img").attr("src",url);
	}else{
		msj_edit_perfil('Debe ingresar una Url valida');
	}
}
function close_comentarios_click(){
	$("#venta_comentarios").addClass('display-none');
}
function close_error_click(){
	window.location.replace('/');
}
function menu_click(){
	if($(".menu-lista").hasClass("display-none")){
		$(".menu-lista").removeClass("display-none");
		$(this).css('color','red');
	}else{
		$(".menu-lista").addClass("display-none");
		$(this).css('color','#000');
	}
}

function success_edit_pass(resultado){
	if(resultado.estado=='1'){
		limpirform("frm-edit-perfil");
	}
	msj_edit_perfil(resultado.msj);
}
function success_ventana_agregar_comentario(resultado){
	venta_comentarios(resultado.html);
}


function validar_add_comentario(param, id){
	switch(param){
		case 'vdt':
			socket.emit('validar_add_comentario', { param: param, id: id });
			break;
	}
}

function error(error){
	$("#error_socket").removeClass('display-none').find('div').append(error.error);
}
function limpirform(form){
	$("#"+form+"")[0].reset();
}
function msj_edit_perfil(msj){
	if($.trim(msj)!=""){
		$("#msj_edit_perfil").html(msj).show();
	}else{
		$("#msj_edit_perfil").html("").hide();
	}	
}
function venta_comentarios(html){
	$("#venta_comentarios").find('article').html('');
	$("#venta_comentarios").removeClass('display-none').find('div').append(html);
}
function validationPass(value){
	return /[a-zA-Z0-9]{5,}/.test(value);
}
function validationUrl(value){
	return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
}