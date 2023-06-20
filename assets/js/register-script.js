const forms = document.querySelector(".forms"),
  formularioContacto = document.getElementById("formulario");

pwShowHide = document.querySelectorAll(".eye-icon");

//Mostrar contraseñas

pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach(password => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    })
  })
})

//Validar contraseñas

function onChange() {
  const password = document.querySelector('input[name=pwd]');
  const confirm = document.querySelector('input[name=rpwd]');
  if (confirm.value === password.value) {
    confirm.setCustomValidity('');
  } else {
    confirm.setCustomValidity('Passwords do not match');
  }
}

var check = function () {
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
    alert("Es necesario ingresar sus appellidos");
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
    alert("El dato que ingreso no es un numero de telefono correcto, por favor ingrese un numero de 10 digitos");
    return
  }
  //validacion del mensaje

  // validacion de correo, usamos Regexp
  function validarContraseña(contraseña) {
    const regexContra = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/; // Expresión regular para validar un correo
    return regexContra.test(contraseña);

    //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  }
  // validacion de correo, usamos Regexp
  if (!validarContraseña(contraseña) || contraseña.length == 0) {
    alert("La contraseña no es valida, por favor ingrese una contraseña cumpliendo con los datos requeridos.");
    return
  }

  alert("Se ha registrado con exito");
  this.submit();
}

  const procesaTodo = (event) =>{
    event.preventDefault();
    const datos = new FormData(event.target);
    const datosCompletos = Object.fromEntries(datos.entries());
    console.log(JSON.stringify(datosCompletos));
  }



formularioContacto.addEventListener('submit', procesaTodo);


//JSON Configurar con la validación de formulario (posiblemente funcione si se agrega dentro)
/*formularioContacto.addEventListener("submit", formularioJSON);
function formularioJSON(event) {
  event.preventDefault();

  const dataFormulario = new FormData(formularioContacto);
  const data = Object.fromEntries(dataFormulario);
  const jsonData = JSON.stringify(data);


  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonData
  }).then(res => res.json())
    .then(result => console.log(result))
    .catch(err => console.log(err))
}*/