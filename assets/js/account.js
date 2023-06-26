import { endpoints } from './constants.js'
import httpClient from './httpClient.js'
import sessionManagement from './sessionManagement.js'

const formElement = document.querySelector("#accountForm")
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

console.log(accountForm.entries())

// const token = sessionManagement.getToken()

// httpClient.get(endpoints.getUsuario, { token })
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err))