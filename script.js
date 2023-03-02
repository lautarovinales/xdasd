var preguntar = true;
 
	window.onbeforeunload = preguntarAntesDeSalir;
 
	function preguntarAntesDeSalir () {
		var respuesta;
 
		if ( preguntar ) {
			respuesta = confirm ( '¿Seguro que quieres salir?' );
 
			if ( respuesta ) {
				window.onunload = function () {
					return true;
				}
			} else {
				return false;
			}
		}
	}

const edadDelUsuario = parseInt(prompt("Esta página no está permitida para menores de 18 años. ¿Cual es tu edad?"));
if(edadDelUsuario >= 18){
    alert("Puedes continuar");
}else{
    alert("Entra bajo su responsabilidad");
}

function inicio(){
    location.href = "index.html"
}

function contacto(){
    location.href = "contacto.html"
}

function descargas(){
    location.href = "descargas.html"
}
