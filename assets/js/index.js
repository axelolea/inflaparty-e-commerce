import {indicadorComponent, sugerenciaComponent} from './components.js'

const dataUrl = "./assets/indexData.json"

// imagenes en carrousel
const imagesCarrousel = document.querySelectorAll(".carousel-inner .carousel-item img")

// items  en listado de productos
const inflablesContainer = document.querySelector("#inflables-container")
const trampolinesContainer = document.querySelector("#trampolines-container")

// funcion para fetch de datos y inyectar
async function getDataAndInject(){

    // fetch al json con contenido
    const resp = await fetch(dataUrl)
    
    // si no salio bien, tirar un error
    if(!resp.ok) new Error("No se encontro los datos")

    // convertir json
    const json = await resp.json()

    // altualizar imagenes del carrousel con datos del json
    actualizarCarrousel(json.carrousel)

    // actualizar los elementos del listados
    updateDataItems(json.inflables, inflablesContainer)
    updateDataItems(json.trampolines, trampolinesContainer)
}

// carrousel

function actualizarCarrousel(items){

    // Elementos del carrousel
    const carrousel = document.querySelector("#carouselExampleIndicators")
    const indicadoresContainer = carrousel.querySelector(".carousel-indicators")
    const carrouselContainer = carrousel.querySelector(".carousel-inner")

    // Crear fragment para contener todos los indicadores a crear
    const indicadoresFragment = document.createDocumentFragment()

    // iterar al numero de elementos del array para los indicadores
    for(let i = 0; i < items.length; i++){

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
    items.forEach((element, pos) => {
        // Crear img element
        const anchor = document.createElement("a")
        const img = document.createElement("img");
        
        anchor.append(img)
        // Agregar propiedades a img
        anchor.classList.add("carousel-item")
        anchor.href = `${element.enlace}`
        img.classList.add("d-block", "w-100")
        img.src = `${element.image}`
        img.alt = `${element.nombre}`
        // Si es el primer elemento, agregar la clase active
        if(pos === 0){
            anchor.classList.add("active")
        }
        // Agregar img al fragment
        imagenesFragment.append(anchor);
    });
    // agregar imagenes al carrousel
    carrouselContainer.append(imagenesFragment)
}

// actualizar datos de lista de items
function updateDataItems(items, container){
    // Creando fragment para contener las sugerencias a crear
    const sugerenciasFragment = document.createDocumentFragment()

    // Iterar el array de las sugerencias
    items.forEach(obj => {

        // Creando componente sugerencia con cada elemento del array
        const sugerencia = sugerenciaComponent(obj);

        // Integrar al fragment
        sugerenciasFragment.appendChild(sugerencia);

    });

    // Agregar el fragment al contenedor de sugerencias 
    container.append(sugerenciasFragment)
}

getDataAndInject()