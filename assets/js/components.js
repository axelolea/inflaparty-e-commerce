import { carrito } from './shoppingCartManagement.js'

// Funciones flecha para crear componentes
export const indicadorComponent = num => {
    
    // Creamos el componente boton para el indicador
    const btn = document.createElement("button");

    // Agregar valores adicionales al primer indicador del carrosel
    if(num === 0){
        btn.classList.add("active")
        btn.setAttribute("aria-current", "true")
    }

    // A mi no me digas nada, lo dice la docs de bootstrap
    btn.type = "button"
    // Valores de bootstrap para detectar cada indicador de carrusel
    btn.setAttribute("data-bs-target", "#carouselExampleIndicators")
    btn.setAttribute("data-bs-slide-to", `${num}`);
    btn.setAttribute("aria-label", `${num + 1}`);
    
    return btn
}

export const sugerenciaComponent = data => {
    // Craendo elemntos
    const [
        componente,
        previewItem,
        infoContainer,
        addBtn,
        titleItem,
        priceItem
    ] = [
        "a",
        "div",
        "div",
        "div",
        "span",
        "button"
    ].map( selector => document.createElement(selector));
    // Agregando valores al componente
    componente.href = `${data.enlace}`;
    componente.classList.add("col-lg-4", "col-md-6", "col-12", "item", "anim-container")

    //agregando clases a img container
    previewItem.classList.add("rounded-4", "mb-2", "img-container", "wrapperCarritoEstatico", "position-relative")
    previewItem.style.backgroundImage = `url(${data.imagen})`;    

    if(!carrito.isInCart(data.id)){

        previewItem.appendChild(addBtn)

        addBtn.classList.add("buttonCarritoEstatico", "position-absolute", "top-0", "end-0")
        addBtn.innerHTML = '<div class="iconSE"><i class="fas fa-plus"></i></div>'

        addBtn.onclick = () => {
            addBtn.remove()
            carrito.setItemCart(data.id)
        }
    }


    // agregando clases a info  container
    infoContainer.classList.add("d-flex", "justify-content-between")
    infoContainer.appendChild(titleItem)
    infoContainer.appendChild(priceItem)

    // Agregando propiedades a imagen
    // imgItem.classList.add("imgItem", "card-img");
    

    // Agregando propiedades a titulo y precio
    titleItem.classList.add("titleItem", "align-self-center");
    titleItem.textContent = `${data.nombre}`;

    priceItem.classList.add("btn", "buttonPrecio", "priceItem")
    priceItem.textContent = `${data.precio} MXN`;

    // Agregando hijos a componente
    componente.appendChild(previewItem)
    componente.appendChild(infoContainer)

    return componente
}

export const resenasComponent = ({nombre, puntaje, resena}) => {

    const [
        review,
        headReview,
        bodyReview,
        reviewer,
        rating,
        icon,
        name,
        rate
    ] = [
        "div",
        "div",
        "p",
        "div",
        "div",
        "div",
        "span",
        "span"
    ].map(selector => document.createElement(selector));

    review.classList.add("review", "d-flex", "flex-column", "gap-3");

    headReview.classList.add("d-flex", "justify-content-between", "gap-3")
    bodyReview.classList.add("body-text")

    review.append(headReview)
    review.append(bodyReview)

    reviewer.classList.add("d-flex", "justify-content-start", "gap-3")
    rating.classList.add("d-flex", "justify-content-start", "gap-3")

    headReview.append(reviewer)
    headReview.append(rating)

    icon.classList.add("icon")
    name.classList.add("my-auto", "name-review")

    reviewer.append(icon)
    reviewer.append(name)

    rate.classList.add("rate-review", "my-auto")

    rating.innerHTML = '<i class="bi bi-star-fill star-rate my-auto"></i>'

    rating.append(rate)

    // Agregar valores

    bodyReview.textContent = resena
    name.textContent = nombre
    rate.textContent = `${puntaje}`
    icon.textContent = `${nombre.at(0).toUpperCase()}`
 
    return review
}