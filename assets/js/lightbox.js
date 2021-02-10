
var path = "assets/img"
var format = ".jpeg"

function abrirLightbox (elemento){
	var local = elemento.children[0].src;
	var lightBox = document.getElementById("lightBox");
	var lightBoxImg = lightBox.children[2];

	lightBox.style.visibility = "visible";
	lightBoxImg.src = local;
}
function fecharLightbox(){
	var lightBox = document.getElementById("lightBox");
	lightBox.style.visibility = "hidden";
}
function proximaFoto(){
	var foto = document.getElementById("imageLightBox");
	var contador = foto.src;
	contador = contador[contador.length - 6];
	contador++
	if (contador == 13) {
		foto.src = path+"/galeria" + 1 + format;
	}else{
		foto.src = path+"/galeria" + contador + format;
	}
}
function fotoAnterior(){
	var foto = document.getElementById("imageLightBox");
	var contador = foto.src;
	contador = contador[contador.length - 6];
	contador--
	if (contador == 0) {
		foto.src = path+"/galeria" + 12 + format;
	}else{
		foto.src = path+"/galeria" + contador + format;
	}
}
