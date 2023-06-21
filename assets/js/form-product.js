
//Implementa una función Javascript que valide los campos del formulario y muestre errores en caso de existir usando las Alertas de Bootstrap.


let form = document.querySelector("form");

//Traer mis elementos del formulario form-product.html
let nombreDelProducto = document.querySelector("#nombreDelProducto");
let precioDelProducto = document.querySelector("#precioDelProducto");
let tipoDelProducto = document.querySelector("#tipoDelProducto");
let descripcionDelProducto = document.querySelector("#descripcionDelProducto");

//Traer mis Botones del form-product.html
let btnAgregarImagen = document.querySelector("#btnAgregarImagen");
let fileInput = document.querySelector("#fileInput");
//let btnEnviar = document.querySelector("form");

//Event Listeners:
btnAgregarImagen.addEventListener("click", function(event){
    event.preventDefault();
    fileInput.click();
})

fileInput.addEventListener("change", function(){

});


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

//Creamos el evento con el boton Enviar (Se pasa le funcion (validar))
form.addEventListener("submit", validar);

//Función para validar los campos 
function validar(event){
    event.preventDefault();

    //Obtener los values de los inputs
    let valorInputnombreDelProducto = nombreDelProducto.value;
    let valorInputprecioDelProducto = precioDelProducto.value;
    let valorInputtipoDelProducto = tipoDelProducto.value;
    let valorInputdescripcionDelProducto  = descripcionDelProducto.value;

    //Validando el nombre del producto 
    if(valorInputnombreDelProducto==""){
        alert("Este campo Nombre del producto no puede quedarse vacio"); //Sale alerta si el campo no esta llenado
        return; 
    }
    //Validamos el precio del producto 
    if(valorInputprecioDelProducto==""){
        alert("Porfavor ingrese un Precio al Producto que desea registrar"); //Sale alerta si el campo no esta llenado
        return;
    }
    //Validamos el tipo de producto
    if (valorInputtipoDelProducto =="Seleccionar uno"){
        alert("Porfavor seleccione un tipo de producto"); //Sale alerta si el campo sigue con "seleccionar uno"
        return;

    }

    //validamos la descripcion del producto
    if(valorInputdescripcionDelProducto ==""){
        alert("Por favor describa su producto"); //Sale alerta si el campo no esta llenado
        return; 

    }

    //Validamos Agregar Imagen
    if(fileInput.files.length === 0) {
        alert("Por favor, agregue una imagen");
        return;
    }

    //Una vez validados los campos crea un objeto javascript en formato json con toda la información del formulario.

let formProduct = {
    nombreProducto: valorInputnombreDelProducto,
    precioProducto: valorInputprecioDelProducto,
    tipoProducto: valorInputtipoDelProducto,
    descripcionProducto: valorInputdescripcionDelProducto,
    //imagenProducto: 
  };


  let formProdctSerializado = JSON.stringify(formProduct);
  console.log(formProdctSerializado);


    //Manda una alerta cuando todo el formulario se haya mandado con exito
alert("Haz mandado tu producto con exito!");
//Se habilita para que el formulario se pueda mandar:    
//form.submit();

//Por el momento retorna false, para poder ver los objetos en la consola.
return false;

}







