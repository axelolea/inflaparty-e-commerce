import httpClient from './httpClient.js'
import { endpoints } from './constants.js'


// Traer elementos del html
const formularioRecuperarContraseña = document.getElementById("formularioRecuperarContraseña");
const correo = document.getElementById("email");

//2.- llamar el evento
formularioRecuperarContraseña.addEventListener("submit", validarFormulario);

//3.- la funcion que queremos que se ejecute cuando ocurra el evento:
function validarFormulario(event) {
    event.preventDefault();

    const email = correo.value;
    

   
    //validar correo
    function validarCorreo(email) {

        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar un correo
        return regexCorreo.test(email);
    };

    if (!validarCorreo(email) || email.length == 0) {

        alert("Es necesario ingresar un correo electronico valido");
        
        return
    };

    
    
        alert("Su correo se ha enviado con éxito");
        //this.submit();
        
    

    const datos={
        email
    };

    httpClient.post(endpoints.recover,datos)
    .then(JSON=>console.log(JSON))
    .catch (error=>console.log(error))

    console.log(datos);


};