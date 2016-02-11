function cambio(){
	var type=document.getElementById("tipo");
	type.innerHTML=document.getElementById("categorias").value.toLowerCase();
	
	
	var arrayCategorias = new Array(
	
	["Clase","Centro"],
	["ESO","Bachillerato"],
	["Notas","Escolarización"]
	
	);
	
	var seleccionado1=document.getElementById("categorias").selectedIndex;
	var opciones1=arrayCategorias[seleccionado1];
	for(var i=0;i<opciones1.length;i++){
		document.getElementById("datos").options[i].innerHTML=opciones1[i];
	}

}