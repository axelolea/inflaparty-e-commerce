import { appendItemsCart } from './itemsCart.js'
import { generateSummary } from './summaryBuy.js'

const fakeData = [
    {
        "id": 1,
        "nombre": "Castillo Saltos Mágicos",
        "imagen": "https://live.staticflickr.com/65535/52976256873_591beedc10_n.jpg",
        "precio": 800,
        "puntaje": 4.5,
        "enlace": "./details-product.html",
        "descripcion": "Sumérgete en un mundo lleno de magia y diversión con este brincolín en forma de castillo, donde los niños pueden disfrutar de emocionantes saltos y rebotes. Este brincolín transporta a los pequeños a un mundo de fantasía, donde pueden saltar junto a personajes mágicos y sumergirse en aventuras increíbles.",
        "tipo": "inflable"
    },
    {
        "id": 2,
        "nombre": "Castillo Reino de la Diversión",
        "imagen": "https://live.staticflickr.com/65535/52976256838_3f0212f796_n.jpg",
        "precio": 900,
        "puntaje": 4.6,
        "enlace": "./details-product.html",
        "descripcion": "Este brincolín en forma de castillo crea un reino de diversión para niños de todas las edades. Con sus torres inflables, paredes coloridas y amplias áreas de salto, ofrece un espacio seguro y emocionante donde los niños pueden disfrutar de horas de diversión saltando, corriendo y deslizándose.",
        "tipo": "inflable"
    },
    {
        "id": 3,
        "nombre": "Castillo Dulce",
        "imagen": "https://live.staticflickr.com/65535/52975949549_806bb018c3_n.jpg",
        "precio": 800,
        "puntaje": 4.4,
        "enlace": "./details-product.html",
        "descripcion": "Sumérgete en un mundo encantador y lleno de magia con este hermoso brincolin de color rosa. Sus paredes suaves crean un ambiente de cuento de hadas donde los sueños se hacen realidad. Las niñas y niños pueden disfrutar de emocionantes aventuras dentro de esta casita, saltando en las amplias áreas de salto, deslizándose y explorando cada rincón.",
        "tipo": "inflable"
    },
    {
        "id": 4,
        "nombre": "Escaladora Aventuras",
        "imagen": "https://live.staticflickr.com/65535/52976256828_9828078cc5_n.jpg",
        "precio": 1150,
        "puntaje": 4.5,
        "enlace": "./details-product.html",
        "descripcion": "Sumérgete en una experiencia de escalada única con esta escaladora. Este brincolín combina la emoción de escalar con la diversión de un inflable. Los niños pueden desafiar su agilidad y coordinación mientras suben por las paredes inflables y superan obstáculos. Con su diseño colorido y seguro, brinda a los pequeños escaladores un entorno estimulante donde pueden disfrutar de una emocionante aventura.",
        "tipo": "inflable"
    }
]

const userInfoFake = {
    name: "Felipe",
    lastname: "Maqueda",
    address: "Calle 12, colonia tal nombre, EdoMex"
}

export function updateShoppingCartData(){

    /* Aqui finjimos peticion al servidor */

    const data = fakeData;
    const infoUser = userInfoFake;

    appendItemsCart(data);
    generateSummary(data, infoUser, 2);
    
}


updateShoppingCartData()