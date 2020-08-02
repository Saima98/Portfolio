function color(a) {
		var color = document.getElementsByClassName("color-skin");
		for (var i=0; i<color.length;i++) {
			color[i].style.color = a;
		}
	}
function bg(a) {
	var b = document.getElementsByClassName("bg-skin");
	for (var i=0; i<b.length;i++) {
		b[i].style.backgroundColor = a;
	}
}
function border_btn(a) {
	var b = document.getElementsByClassName("border-btn");
	for (var i=0; i<b.length;i++) {
		b[i].style.borderColor  = a;
	}
}
function box_btn(a) {
	var b = document.getElementsByClassName("box-btn");
	for (var i=0; i<b.length;i++) {
		b[i].style.backgroundColor  = a;
	}
}
function header_area(a) {
	var b = document.getElementsByClassName("header-area");
	for (var i=0; i<b.length;i++) {
		b[i].style.backgroundColor  = a;
	}
}
function header_area2(a) {
	var b = document.getElementsByClassName("header-area2");
	for (var i=0; i<b.length;i++) {
		b[i].style.backgroundColor  = a;
	}
}
function logo(a) {
	var b = document.getElementsByClassName("logo");
	for (var i=0; i<b.length;i++) {
		b[i].style.color  = "white";
	}
}
function menu_li_a(a) {
	var b = document.getElementsByClassName("menu_li_a");
	for (var i=0; i<b.length;i++) {
		b[i].style.color  = "white";
	}
}
function img_back_2(a) {
	var b = document.getElementsByClassName("img-back-2");
	for (var i=0; i<b.length;i++) {
		if(a=="#16ac49"){
			b[i].style.backgroundColor  = "#16ac4987";
		}
		else if(a=="teal"){
			b[i].style.backgroundColor  = "#00808096 ";
		}
		else if(a=="#020240"){
			b[i].style.backgroundColor  = "#020240a6  ";
		}
		else if(a=="#4d0857"){
			b[i].style.backgroundColor  = "#4d085791   ";
		}
		else if(a=="#c17d25"){
			b[i].style.backgroundColor  = "#c17d25a1    ";
		}
		
	}
}
function img_after(a) {
	var b = document.getElementsByClassName("img-after");
	for (var i=0; i<b.length;i++) {
		b[i].style.borderColor  = a;
	}
}
function single_service(a) {
	var b = document.getElementsByClassName("single-service");
	for (var i=0; i<b.length;i++) {
		b[i].style.color  = a;
	}
}
function service_hover_left(a) {
	var b = document.getElementsByClassName("service-hover-left");
	for (var i=0; i<b.length;i++) {
		b[i].style.borderColor  = a;
	}
}
function service_hover_right(a) {
	var b = document.getElementsByClassName("service-hover-right");
	for (var i=0; i<b.length;i++) {
		b[i].style.borderColor  = a;
	}
}
function port_btn(a) {
	var b = document.getElementsByClassName("port-btn");
	for (var i=0; i<b.length;i++) {
		b[i].style.backgroundColor  = a;
	}
}
function barf(a) {
	$('#bar1').barfiller({barColor: a,duration: '500'});
				$('#bar2').barfiller({barColor: a,duration: '500'});
				$('#bar3').barfiller({barColor: a,duration: '500'});
				$('#bar4').barfiller({barColor: a,duration: '500'});
				$('#bar5').barfiller({barColor: a,duration: '500'});
				$('#bar6').barfiller({barColor: a,duration: '500'});
				$('#bar7').barfiller({barColor: a,duration: '500'});
				$('#bar8').barfiller({barColor: a,duration: '500'});
}
function style_changer(a) {
	bg(a);
	color(a);
	border_btn(a);
	box_btn(a);
	header_area(a);
	header_area2(a);
	logo(a);
	menu_li_a(a);
	img_back_2(a);
	img_after(a);
	single_service(a);
	service_hover_left(a);
	service_hover_right(a);
	port_btn(a);
	barf(a);
}