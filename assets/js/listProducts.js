import { sugerenciaComponent } from "./components.js";
import httpClient from './httpClient.js';
import { endpoints } from './constants.js';

const containerList = document.querySelector("div#contenedor-inflables");

(async function (){

    const resp = await httpClient.get(endpoints.listProduct)
    const itemsFragment = document.createDocumentFragment()
    
    resp.forEach(el => {
        const item = sugerenciaComponent(el)
        itemsFragment.appendChild(item)
    });

    containerList.append(itemsFragment)
})()