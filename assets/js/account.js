/*import { endpoints } from './constants.js'
import httpClient from './httpClient.js'
import sessionManagement from './sessionManagement.js'


(const formElement = document.querySelector("#accountForm")
const accountForm = new FormData(formElement)

const data = {
    nombre: "Axel",
    apellidos: "Olea",
    correo: "axel@olea.com",
    telefono: "12121212",
    direccion: "Calle de al lado #12, colonia colinas terremoto, cdmx"
}

Object.entries(data).forEach(item => {
    const [key, value] = item;
    accountForm.append(key, value)
    accountForm.set(key, value)
})

console.log(accountForm.entries()) */

// const token = sessionManagement.getToken()

// httpClient.get(endpoints.getUsuario, { token })
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err)) 

//Reusar código para 

import { endpoints } from './constants.js'
import httpClient from './httpClient.js'
import sessionManagement from './sessionManagement.js'

window.addEventListener('DOMContentLoaded', (event) => {
  const productSection = document.getElementById('product-section');

  const products = ['Producto 1', 'Producto 2', 'Producto 3']; // Esto es solo para demostración

  // Condición para productos
  if (products.length > 0) {
    products.forEach((product) => {
      const productItem = document.createElement('p');
      productItem.textContent = product;
      productSection.appendChild(productItem);
    });
  } else {
    const noProductsMessage = document.createElement('p');
    noProductsMessage.textContent = 'No hay productos disponibles.';
    productSection.appendChild(noProductsMessage);
  }

  const reservationSection = document.getElementById('reservation-section');

  const reservations = ['Reserva 1', 'Reserva 2', 'Reserva 3']; // Esto es solo para demostración

  // Condición para reservas
  if (reservations.length > 0) {
    reservations.forEach((reservation) => {
      const reservationItem = document.createElement('p');
      reservationItem.textContent = reservation;
      reservationSection.appendChild(reservationItem);
    });
  } else {
    const noReservationsMessage = document.createElement('p');
    noReservationsMessage.textContent = 'No hay reservas disponibles.';
    reservationSection.appendChild(noReservationsMessage);
  }

  const fotoPerfilInput = document.getElementById('fotoPerfilInput');
  const fotoPerfilPreview = document.getElementById('fotoPerfil');

  //para agregar la foto de perfil
  fotoPerfilInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      fotoPerfilPreview.src = e.target.result;
    };

    reader.readAsDataURL(file);
  });
});