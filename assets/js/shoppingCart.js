import { appendItemsCart } from './itemsCart.js'
import { generateSummary } from './summaryBuy.js'
import httpClient from './httpClient.js'
import { endpoints } from './constants.js'
import { carrito } from './shoppingCartManagement.js'

let cache = {};

const httpClientProxy = new Proxy(httpClient, {
    get(target, prop, receiver){

        const value = target[prop];

        if (value instanceof Function) {
            return function (...args) {
                const id = args[0];
                args[0] = `${endpoints.detailProduct}/${id}`

                const promiseCache = cache[id];
                if(promiseCache){
                    return cache[id];
                }
                
                const promise = value.apply(this === receiver ? target : this, args);
                cache[id] = promise;
                return promise;
            };
        }

        return value
    }
})

const userInfoFake = {
    name: "Felipe",
    lastname: "Maqueda",
    address: "Calle 12, colonia tal nombre, EdoMex"
}

export async function updateShoppingCartData(){

    /* Aqui finjimos peticion al servidor */

    const items = carrito.getCart();

    const itemsPromises = items.map(idItem => {
        return httpClientProxy.get(idItem)
    });

    const data = await Promise.all(itemsPromises);
    const clearData = data.filter(e => e instanceof Object)
    // console.log(data)
    const infoUser = userInfoFake;

    appendItemsCart(clearData);
    generateSummary(clearData, infoUser, 2);
    
}


updateShoppingCartData()