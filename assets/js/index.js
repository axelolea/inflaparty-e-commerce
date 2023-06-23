import { indicadorComponent, itemCarrouselComponent, sugerenciaComponent } from './components.js'
import { endpoints } from './constants.js'
import httpClient from './httpClient.js'

// items  en listado de productos
const inflablesContainer = document.querySelector("#inflables-container")
const trampolinesContainer = document.querySelector("#trampolines-container")

// funcion para fetch de datos y inyectar
async function getDataAndInject(){

    // Obtener datos con el httpClient
    const json = await httpClient.get(endpoints.mainData)

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
        const imageComponent = itemCarrouselComponent(element, pos)
        // Agregar img al fragment
        imagenesFragment.append(imageComponent);
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