
// Vamos a crear una referencia al elemento del mensaje dinámico
const dynamicMessage = document.getElementById('dynamic-message');

// Colocamos los mensajes dinámico aleatorios que queramos que aparezcan 
const messages = [
  'Esta página no ofrece entretenimiento',
  'Aquí es probable que te aburras, ya que no hay mucho contenido',
  'Te recomendamos visitar nuestra página si buscas entretenimiento',
];
const randomIndex = Math.floor(Math.random() * messages.length);
const randomMessage = messages[randomIndex];

/* Aquí colocaremos algún icono o imagen, opcion 1 modificable
var imageElement = document.getElementById("imageElement");
imageElement.src = ""; */


// Mensaje dinámico para botón de Ir a Inicio
dynamicMessage.textContent = randomMessage; 

var inicioButton = document.getElementById('inicioButton');
var mensajeElement = document.getElementById('mensaje');

inicioButton.addEventListener('click', function() {
    mensajeElement.textContent = '¡Excelente decisión!';
    setTimeout(function() {
        window.location.href = '/index.html';
    }, 500);
});