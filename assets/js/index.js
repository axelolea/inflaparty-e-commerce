const { title } = require("process")

const dataUrl = "./assets/index-data.json"

// imagenes en carrousel
const imagesCarrousel = document.querySelectorAll(".carousel-inner .carousel-item img")

// items  en listado de productos
const inflablesItems = document.querySelectorAll("#inflables-container .item")
const trampolinesItems = document.querySelectorAll("#trampolines-container .item")

// funcion para fetch de datos y inyectar
async function getDataAndInject(){

    // fetch al json con contenido
    const resp = await fetch(dataUrl)
    
    // si no salio bien, tirar un error
    if(!resp.ok) new Error("No se encontro los datos")

    // convertir json
    const json = await resp.json()

    // altualizar imagenes del carrousel con datos del json
    updateDataCarrousel(json.carrousel)

    // actualizar los elementos del listados
    updateDataItems(json.inflables, inflablesItems)
    updateDataItems(json.inflables, trampolinesItems)
}

// funcion para cambiar src delas imagenes
function updateDataCarrousel(data){

    // bucle para el array
    for(let i = 0; i < data.length; i++){
        // url de imagen y elemento de imagen
        const imageUrl = data[i]
        const img = imagesCarrousel[i]
        
        // set src con la url
        img.src = imageUrl
    }

}

// actualizar datos de lista de items
function updateDataItems(data, items){
    // iterar los datos
    for(let i = 0; i < items.length; i++){

        // datos y item a modificar
        const item = items[i]
        const dataItem = data[i]

        // Busqueda de elementos title, imagen y tag de precion en item
        const [
            titleComponent,
            imgComponent,
            priceComponent
        ] = [
            ".titleItem",
            ".imgItem",
            ".priceItem"
        ].map(selector => item.querySelector(selector)) // codigo elegante pero dudoso

        // añadiendo contenido o atributos
        imgComponent.src = dataItem.image
        imgComponent.alt = `Imagen de ${dataItem.name}`
        titleComponent.textContent = dataItem.name
        priceComponent.textContent = `${dataItem.price} MXN`

    }
}

getDataAndInject()