import httpClient from "./httpClient.js";
import {endpoints} from "./constants.js";
import session from "./sessionManagement.js";

const forms = document.querySelector(".forms"),
formularioContacto = document.getElementById("formulario"),
pwShowHide = document.querySelectorAll(".bi-eye-slash");

//Mostrar contraseñas

pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach(password => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bi-eye-slash", "bi-eye-fill");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bi-eye-fill", "bi-eye-slash");
    })
  })
})

//Validar contraseñas
//La funcion check muestra un mensaje de coincidencia

document.getElementById("pwd").addEventListener("keyup", check);
document.getElementById("rpwd").addEventListener("keyup", check);

function check(){
  if (document.getElementById('pwd').value ==
    document.getElementById('rpwd').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'Coinciden';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'No Coinciden';
  }
}


//llamar el evento

formularioContacto.addEventListener("submit", validarFormulario);

//la funcion que queremos que se ejecute cuando ocurra el evento:

function validarFormulario(event) {

  event.preventDefault();

  const nombre = document.querySelector("#name").value;
  const apellido = document.querySelector("#apellido").value;
  const email = document.querySelector("#email").value;
  const telefono = document.querySelector("#tel").value;
  const contraseña = document.querySelector("#pwd").value;

  //Evaluamos que ninguno de los campos del formulario se quede vacio
  //validacion de nombre
  if (nombre.length == 0) {
    alert("Es necesario ingresar un nombre");
    return;
  }
  //validacion de apellido
  if (apellido.length == 0) {
    alert("Es necesario ingresar sus apellidos");
    return;
  }

  // validacion de correo, usamos Regexp
  function validarCorreo(email) {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar un correo
    return regexCorreo.test(email);
  }
  if (!validarCorreo(email) || email.length == 0) {
    alert("Es necesario ingresar un correo electronico valido");
    return
  }

  // Evaluamos el dato de telefono usando RegExp
  // declaramos una funcion que devolvera un valor booleano:

  function validarTelefono(telefono) {
    const regex = /^\d{10}$/; // Expresión regular para validar un número de teléfono de 10 dígitos
    return regex.test(telefono);
  }

  if (!validarTelefono(telefono) || telefono.length == 0) {
    alert("El dato que ingreso no es un número de teléfono correcto, por favor ingrese un número de 10 digitos");
    return
  }
  //validacion del mensaje

  // validacion de contraseña, usamos Regexp
  function validarContraseña(contraseña) {
    const regexContra = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/; // Expresión regular para validar un correo
    return regexContra.test(contraseña);

    //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  }



  // validacion de contraseña, usamos Regexp
  if (!validarContraseña(contraseña) || contraseña.length == 0) {
    alert("La contraseña no es valida, por favor ingrese una contraseña cumpliendo con los datos requeridos.");
    return
  }

  //Validacion de contraseña 1 y contraseña 2
  function onChange(){
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=password2]');
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      return false;
    }
  }
  
  if (onChange()==false) {
    alert("Las contraseñas no coinciden.");
    return
  }


//Funcion procesaTodo sive para el JSON y el http
  function procesaTodo() {
    const datos = new FormData(event.target);
    const datosCompletos = Object.fromEntries(datos.entries());
    console.log(datosCompletos);

    session.registerLocalStorage(datosCompletos);

    httpClient.post(endpoints.registerUser,datosCompletos)
    .then(response=>
      console.log(response)
    )
    .catch(err=>
      console.log(err)
    )
  }

  procesaTodo();  
  alert("Se ha registrado con exito");
  this.submit();
}
