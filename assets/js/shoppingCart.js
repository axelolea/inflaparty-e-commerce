import { appendItemsCart } from './itemsCart.js'
import { generateSummary } from './summaryBuy.js'

const fakeData = [
    {
        "id": 7,
        "nombre": "El nombre de inflable 7",
        "imagen": "https://live.staticflickr.com/65535/52976173920_822d75f4d4_n.jpg",
        "precio": 400,
        "puntaje": 5.0,
        "enlace": "./details-product.html",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, est a laoreet malesuada, orci libero tincidunt quam, eu euismod ex sapien vel est. Duis rhoncus metus sagittis ex vestibulum, id facilisis nisi rutrum. Fusce nec quam lectus. Nulla dignissim, odio quis consequat dapibus, eros ex mattis eros, a mollis nisi mauris sed nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec aliquet pretium urna, at ornare lorem egestas eget.",
        "tipo": "inflable"
    },
    {
        "id": 8,
        "nombre": "El nombre de inflable 8",
        "imagen": "https://live.staticflickr.com/65535/52975205292_c757d36477_n.jpg",
        "precio": 400,
        "puntaje": 5.0,
        "enlace": "./details-product.html",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, est a laoreet malesuada, orci libero tincidunt quam, eu euismod ex sapien vel est. Duis rhoncus metus sagittis ex vestibulum, id facilisis nisi rutrum. Fusce nec quam lectus. Nulla dignissim, odio quis consequat dapibus, eros ex mattis eros, a mollis nisi mauris sed nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec aliquet pretium urna, at ornare lorem egestas eget.",
        "tipo": "inflable"
    },
    {
        "id": 9,
        "nombre": "El nombre de inflable 9",
        "imagen": "https://live.staticflickr.com/65535/52976025709_eeea4b7a5f_n.jpg",
        "precio": 400,
        "puntaje": 5.0,
        "enlace": "./details-product.html",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, est a laoreet malesuada, orci libero tincidunt quam, eu euismod ex sapien vel est. Duis rhoncus metus sagittis ex vestibulum, id facilisis nisi rutrum. Fusce nec quam lectus. Nulla dignissim, odio quis consequat dapibus, eros ex mattis eros, a mollis nisi mauris sed nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec aliquet pretium urna, at ornare lorem egestas eget.",
        "tipo": "inflable"
    },
    {
        "id": 10,
        "nombre": "El nombre de inflable 10",
        "imagen": "https://live.staticflickr.com/65535/52976331818_b798568e67_n.jpg",
        "precio": 400,
        "puntaje": 5.0,
        "enlace": "./details-product.html",
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper, est a laoreet malesuada, orci libero tincidunt quam, eu euismod ex sapien vel est. Duis rhoncus metus sagittis ex vestibulum, id facilisis nisi rutrum. Fusce nec quam lectus. Nulla dignissim, odio quis consequat dapibus, eros ex mattis eros, a mollis nisi mauris sed nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec aliquet pretium urna, at ornare lorem egestas eget.",
        "tipo": "inflable"
    }
]

const userInfoFake = {
    name: "Felipe",
    lastname: "Maqueda",
    address: "Calle 12, colonia tal nombre, EdoMex"
}

function updateShoppingCartData(){

    /* Aqui finjimos peticion al servidor */

    const data = fakeData;
    const infoUser = userInfoFake;

    appendItemsCart(data);
    generateSummary(data, infoUser);
    
}


updateShoppingCartData()