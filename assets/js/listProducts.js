
//Para obtener los datos desde un archivo JSON
const listProductosURL = '/assets/list-products.json'; 
fetch(listProductosURL)//con fetch() vamos realizar una solicitud HTTP a un archivo JSON
  .then(resp => {
    // Si la respuesta no es ok, marcar un error
    if (!resp.ok) throw new Error("No se encontró archivo JSON");
    // de la respuesta obtener un json
    return resp.json();
  })
  // Iterar la lista sobre los elementos del JSON 
  .then(json => {
    json.forEach(element => {
      console.log(element.nombre);//se muestra el nombre de cada elemento en la consola 
    });
  })
  .catch(error => {
    console.log("Error:", error);//Si ocurre algún error durante el proceso, se captura y se muestra en la consola
  });


  /*Crear una función que cree componentes. Iterar cada objeto y convertirlo en un componente del DOM*/

  //Aquí vamos a crear componentes del DOM a partir de los datos obtenidos
  function createComponents(data) { 
    const container = document.getElementById('container'); // Obtener el contenedor donde se agregarán los componentes
  
    // Iteramos sobre cada objeto en el array de datos
    data.forEach(obj => {
      // Se crean los elementos del componente
      const component = document.createElement('div');
      const title = document.createElement('h2');
      const image = document.createElement('img');
      const price = document.createElement('p');
      const description = document.createElement('p');
  
      // Asignamos los valores correspondientes del objeto a los elementos del componente
      title.textContent = obj.nombre;
      image.src = obj.imagenes['medium-image'];
      price.textContent = `Precio: ${obj.precio}`;
      description.textContent = obj.description;
  
      // Agregamos los elementos al componente
      component.appendChild(title);
      component.appendChild(image);
      component.appendChild(price);
      component.appendChild(description);
  
      // Agregamps el componente al contenedor
      container.appendChild(component);
    });
  }