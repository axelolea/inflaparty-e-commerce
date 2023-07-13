// Http functions
import httpClient from './httpClient.js'
import { endpoints } from './constants.js'

//Implementa una función Javascript que valide los campos del formulario y muestre errores en caso de existir usando las Alertas de Bootstrap.

//Traemos el id del form, porque alli esta el submit
let form = document.querySelector("#form");

//Traer mis elementos del formulario form-product.html
let nombreDelProducto = document.querySelector("#nombreDelProducto");
let precioDelProducto = document.querySelector("#precioDelProducto");
let tipoDelProducto = document.querySelector("#tipoDelProducto");
let descripcionDelProducto = document.querySelector("#descripcionDelProducto");

//Traer mis Botones del form-product.html
let btnAgregarImagen = document.querySelector("#btnAgregarImagen");
let fileInput = document.querySelector("#fileInput");
//let btnEnviar = document.querySelector("form");

//Event Listeners: //Del boton Agregar Imagen
btnAgregarImagen.addEventListener("click", function(event){
    event.preventDefault();
    fileInput.click();
});

//La imagen
fileInput.addEventListener("change", function(){
    //Get the selected file
    const selectedFile = fileInput.files[0];

    //Trarme lo del html
    const selectedFileNaemeElement = document.querySelector("#selectedFileName");
    selectedFileNaemeElement.innerHTML = selectedFile.name;

});


//Función para validar los campos 
function validar(event){
    event.preventDefault();

    //Obtener los values de los inputs
    const nombre = nombreDelProducto.value;
    let precio = precioDelProducto.value;
    const tipo = tipoDelProducto.value;
    const descripcion  = descripcionDelProducto.value;

    //Validando el nombre del producto 
    if(nombre==""){
        alert("Este campo Nombre del producto no puede quedarse vacio"); //Sale alerta si el campo no esta llenado
        return; 
    }

    //Validamos el precio del producto 
    if(precio==""){
        alert("Porfavor ingrese un Precio al Producto que desea registrar"); //Sale alerta si el campo no esta llenado
        return;
    }

    //Validamos el tipo de producto
    if (tipo =="Seleccionar uno"){
        alert("Porfavor seleccione un tipo de producto"); //Sale alerta si el campo sigue con "seleccionar uno"
        return;

    }

    //validamos la descripcion del producto
    if(descripcion ==""){
        alert("Por favor describa su producto"); //Sale alerta si el campo no esta llenado
        return; 

    }

    //Validamos Agregar Imagen
    if(fileInput.files.length === 0) {
        alert("Por favor, agregue una imagen");
        return;
    }
    
     //Manda una alerta cuando todo el formulario se haya mandado con exito
    alert("Haz mandado tu producto con exito!");
    //Se habilita para que el formulario se pueda mandar:    

    //Una vez validados los campos crea un objeto javascript en formato json con toda la información del formulario.
    const imageUrl = fileInput.files[0].name
    precio = precio.replace("$", "");

    const formProductdata = {
        nombre,
        precio,
        tipo,
        descripcion,
        imageUrl 
    }


  httpClient.post(endpoints.crearProducto, formProductdata)
    .then(json => console.log(json))
    .catch(e => {
        console.log("Esto es un error")
        console.log(e)
    })

  //console.log(formProductdata);

  //form.submit();


  let formProdctSerializado = JSON.stringify(formProductdata);
  console.log(formProdctSerializado);

//Por el momento retorna false, para poder ver los objetos en la consola.
//return false;

} //fin de la funcion validar

//console.log('Testing console');
//Creamos el evento con el boton Enviar (Se pasa le funcion (validar))
form.addEventListener("submit", validar);

//Event Listener para poner el simbolo $ en el input
precioDelProducto.addEventListener("blur", function(){
    //this.value es utilizado para acceder al valor del precioDelProducto
    if(!this.value.startsWith("$")){
        this.value ="$" + this.value;
    }
});


//La entrada del Precio solo sea numeros
precioDelProducto.addEventListener("input", function(){
    //Esto admite solo numeros y el punto
    this.value =this.value.replace(/[^0-9.]/g, ''); 
    //Despues de . , solo permite 2 numeros decimales. 
    this.value = this.value.replace(/^(\d+)\.(\d{0,2}).*$/, '$1.$2');
});






