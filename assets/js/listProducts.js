// Para generar la lista de productos:

var contenedorInflables = document.getElementById("contenedor-inflables");
var urlJson = "/assets/list-products.json";

fetch(urlJson) // Petición para traer el JSON
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    data.forEach(function (inflable) { // Vamos a recorrer cada uno de los objetos del JSON

      //Aquí se van a crear los elementos que se verán en el listado
      var divInflable = document.createElement("div");
      divInflable.className = "inflable";

      var imgSmall = document.createElement("img");
      imgSmall.src = inflable.imagenes["small-image"];
      divInflable.appendChild(imgSmall);

      var nombre = document.createElement("h3");
      nombre.textContent = inflable.nombre;
      divInflable.appendChild(nombre);

      var precio = document.createElement("p");
      precio.textContent = "Precio: $" + inflable.precio;
      divInflable.appendChild(precio);

      var estrellas = document.createElement("p");
      estrellas.textContent = "Estrellas: " + inflable.estrellas;
      divInflable.appendChild(estrellas);

      var descripcion = document.createElement("p");
      descripcion.textContent = inflable.descripcion;
      divInflable.appendChild(descripcion);

      // Lo agregamos al contendor div que está en el HTML
      contenedorInflables.appendChild(divInflable);
    });
  })
  .catch(function (error) { //Colocamos el catch como buena práctica para que nos devuelva algún error que se presente
    console.log("Error al obtener los datos del JSON:", error);
  });

