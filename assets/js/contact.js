//1.- Traer los elemnto del Html
const formularioContacto = document.getElementById("formularioContacto");


//2.- llamar el evento

formularioContacto.addEventListener("submit", validarFormulario);

//3.- la funcion que queremos que se ejecute cuando ocurra el evento:

function validarFormulario(event) {
    
    event.preventDefault();

    const nombre = document.querySelector("#nombreContacto").value;

    const email = document.querySelector("#emailContacto").value;

    const asunto = document.querySelector("#asuntoContacto").value;




    if (nombre.length == 0) {

        alert("Es necesario ingresar un nombre");
        
        return;
    }

    if (email.length == 0) {

        alert("Es necesario ingresar un correo electronico");
        return
    }

    if (asunto.length == 0) {
        alert("Es necesario ingresar un mensaje");
        return
    }


    alert("tu mensanje se ha enviado con exito");




}