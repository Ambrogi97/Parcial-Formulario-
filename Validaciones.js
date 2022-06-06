const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("email");
const edad = document.getElementById("edad");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".input");

form.addEventListener("submit", (e) =>{
	e.preventDefault();

	listInputs.forEach((element) => {
		element.lastElementChild.innerHTML = "";
	})

	if (nombre.value.length < 3 || nombre.value.trim() == "") {
		mostrarMensajeError("nombre", "campo obligatorio - el nombre debe tener mas de 3 caracteres*")
	}
	if (apellido.value.length < 3 || apellido.value.trim() == "") {
		mostrarMensajeError("apellido", "campo obligatorio - el apellido debe tener mas de 3 caracteres*")
	}
	if (email.value.length < 3 || email.value.trim() == "") {
		mostrarMensajeError("email", "campo obligatorio*")
	}

	function mostrarMensajeError(claseInput, mensaje) {
		let elemento = document.querySelector(`.${claseInput}`);
		elemento.lastElementChild.innerHTML = mensaje;
	  }
})