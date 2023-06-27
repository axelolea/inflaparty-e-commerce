import session from './sessionManagement.js';


function ingresar() {

    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;

    console.log(email, password);
    

    if (session.loginLocalStorage({ email, password })) {
        alert("Bienvenido ");
        window.location.href = "index.html";
    }else{
alert("Usuario o contraseña incorrecto, Intente nuevamente")
    }
    
}

document.querySelector("#buttonRegistrar").addEventListener("click",ingresar);