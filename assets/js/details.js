// Importando componentes
import {indicadorComponent, sugerenciaComponent, resenasComponent} from './components.js'

// Elementos del carrousel
const carrousel = document.querySelector("#carouselExampleIndicators")
const indicadoresContainer = carrousel.querySelector(".carousel-indicators")
const carrouselContainer = carrousel.querySelector(".carousel-inner")

// Elementos Sugerencias
const sugerenciasContainer = document.querySelector("#sugerencias")

// Reseñas container
const resenasContainer = document.querySelector("#reviews")

// URL de fecth de datos para la pagina
const dataDetailsUrl = "./assets/detailsData.json";

(async function (){

    // fetch al json con contenido
    const resp = await fetch(dataDetailsUrl)
    
    // si no salio bien, tirar un error
    if(!resp.ok) new Error("No se encontro los datos")

    // convertir json
    const json = await resp.json()

    // Actualizar con los datos de json

    // altualizar imagenes del carrousel
    actualizatCarrousel(json.imagenes)
    // Actualizar informacion principal
    actualizarPrincipal(json)
    // Actualizar sugerencias
    actualizarSugerencias(json.sugerencias)
    // Actualizar reseñas
    actualizarResenas(json.resenas)
})()

function actualizatCarrousel(images){
    // Crear fragment para contener todos los indicadores a crear
    const indicadoresFragment = document.createDocumentFragment()

    // iterar al numero de elementos del array para los indicadores
    for(let i = 0; i < images.length; i++){

        // Crear componente indicador
        const indicator = indicadorComponent(i);
        // Integrar componente al fragment 
        indicadoresFragment.append(indicator);

    }

    // Agregar indicadores al container
    indicadoresContainer.append(indicadoresFragment)

    // Crear fragment de imagenes
    const imagenesFragment = document.createDocumentFragment()

    // Iterar imagenes y crear componentes 
    images.forEach((element, pos) => {
        // Crear img element
        const img = document.createElement("img");
        // Agregar propiedades a img
        img.classList.add("carousel-item")
        img.src = `${element.url}`
        img.alt = `${element.nombre}`
        // Si es el primer elemento, agregar la clase active
        if(pos === 0){
            img.classList.add("active")
        }
        // Agregar img al fragment
        imagenesFragment.append(img);
    });
    // agregar imagenes al carrousel
    carrouselContainer.append(imagenesFragment)
}

function actualizarPrincipal({nombre, descripcion, puntaje, precio}){

    // Elementos basicos
    const title = document.querySelector("#title")
    const description = document.querySelector("#description")
    const rate = document.querySelector("#rate")

    const price = document.querySelector("#price")
    const days = document.querySelector("#days")
    const finalPriceElement = document.querySelector("#finalPrice")

    // Dias de servicio
    const daysService = 2 // ToDo: Agregan getDays con local storage

    // Cambiando el titulo de la pagina
    document.querySelector("title").innerText = `${nombre} | InflaParty`

    // Agregando nombre, descripcion, y puntaje del producto
    title.textContent = nombre
    description.textContent = descripcion
    rate.textContent = puntaje

    // Agregando precio
    price.textContent = `${precio} MXN`
    
    // Agregando dias de servicios
    days.textContent = `x${daysService}`

    // Calcular precio final
    const finalPrice = daysService * precio

    // Agregar precio final
    finalPriceElement.textContent = `${finalPrice} MXN`

}

// Actualizar el container de sugerencias
function actualizarSugerencias(data){

    // Creando fragment para contener las sugerencias a crear
    const sugerenciasFragment = document.createDocumentFragment()

    // Iterar el array de las sugerencias
    data.forEach(obj => {

        // Creando componente sugerencia con cada elemento del array
        const sugerencia = sugerenciaComponent(obj);

        // Integrar al fragment
        sugerenciasFragment.appendChild(sugerencia);

    });

    // Agregar el fragment al contenedor de sugerencias 
    sugerenciasContainer.append(sugerenciasFragment)

}

function actualizarResenas(data){
    
    // Creando fragment para contener las sugerencias a crear
    const resenasFragment = document.createDocumentFragment()

    // Iterar el array de las sugerencias
    data.forEach(obj => {

        // Creando componente sugerencia con cada elemento del array
        const resena = resenasComponent(obj);

        // Integrar al fragment
        resenasFragment.appendChild(resena);

    });

    // Agregar el fragment al contenedor de sugerencias 
    resenasContainer.append(resenasFragment)

}