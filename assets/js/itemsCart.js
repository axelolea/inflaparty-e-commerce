/* Nahomi*/

import carrito from "./shoppingCartManagement.js";
export function appendItemsCart(items = []) {
    /*Integrar elementos de un array al dom*/

   

    //Obtener el elemento del DOM donde se agregarán los elementos del carrito
    const cartContainer = document.querySelector('#listItems');

    //Limpiamos el contenido existente en el carrito
    cartContainer.innerHTML = "";


    //Iteramos sobre cada elemento del array utilizando el método forEach
    items.forEach(item => {

        //Creamos los elementos y la clase de cada elemento
        //div del item
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item', 'd-flex', 'flex-column', 'flex-lg-row', 'gap-4');

        //div del wrapperCarrito
        const previewItem = document.createElement('div');
        previewItem.classList.add('wrapperCarritoEstatico', 'back-img');
        previewItem.style.backgroundImage = `url(${item.imagen})`;
        

        //div del buttonCarritoEstatico
        const deleteBtn = document.createElement('div');
        deleteBtn.classList.add('buttonCarritoEstatico');

        //div del boton eliminar
        const deleteIcon = document.createElement('div');
        deleteIcon.classList.add('iconSE');
        deleteIcon.innerHTML = '<i class="fas fa-times"></i>';
        deleteIcon.addEventListener('click',() => {
            console.log(item.id)
            carrito.deleteItemCart(item.id)
        })

        //agregamos como hijos del boton eliminar
        deleteBtn.appendChild(deleteIcon);
        previewItem.appendChild(deleteBtn);

        //contenedor del contenido de producto (nombre y precio)
        const itemContent = document.createElement('span');
        itemContent.classList.add('itemContent', 'd-flex', 'justify-content-between', 'flex-column');

        //nombre del producto
        const productName = document.createElement('h3');
        productName.classList.add('card-title');
        productName.textContent = item.nombre;

        //precio del producto
        const priceButton = document.createElement('button');
        priceButton.type = 'button';
        priceButton.classList.add('btn', 'buttonPrecio');
        priceButton.textContent = `${item.precio} MXN`;


        //Se agrega cada elemento como hijo al carrito
        itemContent.appendChild(productName);
        itemContent.appendChild(priceButton);

        itemContainer.appendChild(previewItem);
        itemContainer.appendChild(itemContent);

        cartContainer.appendChild(itemContainer);
    });


}