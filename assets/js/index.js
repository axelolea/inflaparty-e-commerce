const dataUrl = "/assets/index-data.json"

const imagesCarrousel = document.querySelectorAll(".carousel-inner .carousel-item img")

const inflablesItems = document.querySelectorAll("#inflables-container .item")
const trampolinesItems = document.querySelectorAll("#trampolines-container .item")

async function getDataAndInject(){
    const resp = await fetch(dataUrl)
    
    if(!resp.ok) new Error("No se encontro los datos")

    const json = await resp.json()

    updateDataCarrousel(json.carrousel)

    updateDataItems(json.inflables, inflablesItems)
    updateDataItems(json.inflables, trampolinesItems)
}

function updateDataCarrousel(data){

    for(let i = 0; i < data.length; i++){
        const imageUrl = data[i]
        const img = imagesCarrousel[i]
        // img.style.backgroundImage = `url(${imageUrl})`
        img.src = imageUrl
    }

}

function updateDataItems(data, items){
    for(let i = 0; i < items.length; i++){

        const item = items[i]
        const dataItem = data[i]

        const [
            titleComponent,
            imgComponent,
            priceComponent
        ] = [
            ".titleItem",
            ".imgItem",
            ".priceItem"
        ].map(selector => item.querySelector(selector))

        imgComponent.src = dataItem.image
        titleComponent.textContent = dataItem.name
        priceComponent.textContent = `${dataItem.price} MXN`

    }
}

getDataAndInject()