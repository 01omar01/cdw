$(document).ready(inicio_index);
function inicio_index(){
	eventos_index();
}
function eventos_index(){
	$("#menu").on("click",menu_click);
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