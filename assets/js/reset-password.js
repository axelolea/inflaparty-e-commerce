import httpClient from './httpClient.js'
import { endpoints } from './constants.js'



// Traer elementos del html
const formularioRetablecerContraseña = document.getElementById("formularioRestablecerContraseña");
const contraseña = document.getElementById("contraseña");
const confirmarContraseña = document.getElementById("confirmarContraseña");


//2.- llamar el evento
formularioRestablecerContraseña.addEventListener("submit", validarFormulario);

//3.- la funcion que queremos que se ejecute cuando ocurra el evento:
function validarFormulario(event) {
    event.preventDefault();


    const datoContraseña = contraseña.value;
    const datoConfirmarContraseña = confirmarContraseña.value;



    // Validacion de la primera contraseña
    function validarContraseña(datoContraseña) {

        const regexContraseña = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/; // Expresión regular para una contraseña. La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.Puede tener otros símbolos.

        return regexContraseña.test(datoContraseña);
    };

    if (!validarContraseña(datoContraseña) || datoContraseña.length == 0) {

        alert("Es necesario ingresar una contraseña valida");

        return
    };

    // Validacion de confirmarContraseña
    if (!validarContraseña(datoConfirmarContraseña) || datoConfirmarContraseña.length == 0) {

        alert("Es necesario ingresar una contraseña valida");

        return

    } else if (datoConfirmarContraseña !== datoContraseña) {

        alert("las contraseñas no coinciden");

        return

    };

    alert("Su mensaje se ha enviado con éxito");
    // this.submit();
    


const datos = {
    datoContraseña, datoConfirmarContraseña
};

httpClient.post(endpoints.reset,datos)
    .then(JSON => console.log(JSON))
    .catch(error => console.log(error))

console.log(datos);

};

// mostrar contraseñas

const check1 = document.getElementById("check1");
check1.addEventListener("change", mostrarContraseña);

function mostrarContraseña() {

    if (check1.checked) {
        contraseña.type = "text";
    } else {
        contraseña.type = "password"
    }

};



