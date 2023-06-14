//1.- Traer los elemnto del Html
const formularioContacto = document.getElementById("formularioContacto");


//2.- llamar el evento

formularioContacto.addEventListener("submit", validarFormulario);

//3.- la funcion que queremos que se ejecute cuando ocurra el evento:

function validarFormulario(event) {

    event.preventDefault();

    const nombre = document.querySelector("#nombreContacto").value;

    const email = document.querySelector("#emailContacto").value;

    const telefono = document.querySelector("#telefonoContacto").value;

    const asunto = document.querySelector("#asuntoContacto").value;

    //Evaluamos que ninguno de los campos del formulario se quede vacio

    //validacion de nombre

    if (nombre.length == 0) {

        alert("Es necesario ingresar un nombre");

        return;
    }

    // validacion de correo

    if (email.length == 0) {

        alert("Es necesario ingresar un correo electronico");
        return
    }

    // Evaluamos el dato de telefono usando RegExp

    // declaramos una funcion que devolvera un valor booleano:

    function validarTelefono(telefono) {
        const regex = /^\d{10}$/; // Expresión regular para validar un número de teléfono de 10 dígitos
        return regex.test(telefono);
    }

    if (validarTelefono(telefono)) {

        alert("el numero es correcto");

    } else { alert("El dato que ingreso no es un numero de telefono"); }


    //validacion del mensaje

    if (asunto.length == 0) {
        alert("Es necesario ingresar un mensaje");
        return
    }

    alert("tu mensanje se ha enviado con exito");


    console.log(telefono);

}


