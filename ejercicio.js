var lista_reservas = [];

var asiento = -1;
//var celdas = document.getElementsByTagName('td');
var asientos = [];


ini();


function ini(){
	for(var i = 0; i < 32; ++i){
		//var tmp_object = {'nombres': " ",'apellidos': " ",'dni': "0"};
		var tmp_object = {};
		tmp_object.nombres = " ";
		tmp_object.apellidos = " ";
		tmp_object.dni = "0";
		lista_reservas.push(tmp_object);
	}
}

function buscar(){
	asiento = -1;
	mostrarOcultar(true);
	var getDni = document.getElementsByName("dniS")[0].value;
	getDni= parseInt(getDni);
	for(var i = 0; i < 32; ++i){


		//if(parseInt(dni[i]) == getDni){
		if(parseInt(lista_reservas[i].dni) == getDni){	
			//alert(parseInt(dni[i]));
			//asiento = i;
			document.getElementById("nombreSearch").value = lista_reservas[i].nombres;
			document.getElementById("apellidoSearch").value = lista_reservas[i].apellidos;
			document.getElementById("dniSearch").value = lista_reservas[i].dni;
			return;
		}
	}


	document.getElementById("nombreSearch").value = " ";
	document.getElementById("apellidoSearch").value = " ";
	document.getElementById("dniSearch").value = " ";
	
}

function mostrarOcultar(a){
	if(a == true)
	document.getElementById("resultado").style.display = "block";
	else if(a == false)
	document.getElementById("resultado").style.display = "none";
	//document.write("gooo");
}

function cambiarAsiento(a){
	asiento = a;
}

function reservar(){
	//nombres[asiento] = document.getElementById("nombre").text;
	//document.write("CORRIENDO!");
	//lista_reservas[asiento].nombres = document.getElementsByName("nombre")[0].value;
	//lista_reservas[asiento].apellidos =document.getElementsByName("apellido")[0].value;
	//lista_reservas[asiento].dni = document.getElementsByName("dni")[0].value;

	//if(asiento<0) alert("Invalid index!");
	//asiento++;
	asiento = (asiento + 1)%32; 
	lista_reservas[asiento].nombres = document.getElementsByName("nombre")[0].value;
	lista_reservas[asiento].apellidos =document.getElementsByName("apellido")[0].value;
	lista_reservas[asiento].dni = document.getElementsByName("dni")[0].value;
}

function mostrar(){
	document.getElementsByName("nombre")[0].value = lista_reservas[asiento].nombres;
	document.getElementsByName("apellido")[0].value = lista_reservas[asiento].apellidos;
	document.getElementsByName("dni")[0].value = lista_reservas[asiento].dni;
}

function eliminar(){
	
	lista_reservas[asiento].nombres = " " ;
	lista_reservas[asiento].apellidos = " ";
	lista_reservas[asiento].dni = " ";
	mostrar();
}

/*for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}*/

/*
function mostrar(){
	document.write("<td>Nombres:</td>");
    //document.getElementById("mostrar").innerHTML=(event.target.textContent);
}
function reservar () {
	var nombre = document.getElementById("nombre").value;
	var apellido = document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value;
	var s = "";
	var s += nombre + apellido + dni ;
	document.getElementById("mostrarLista").innerHTML = asientos;
	 
}
*/






