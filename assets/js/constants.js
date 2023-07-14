const prod = true

const prodDomain = "https://inflaparty-backend-production.up.railway.app"
const devDomain = "http://localhost:8080"

const domain = prod ? prodDomain : devDomain

// EndPoints Test
const endpointsTest = {
    mainData: "./assets/indexData.json",
    detailProduct: "./assets/detailsData.json",
    registerUser: "",
    loginUser: "",
    contacto: "",
    crearProducto: "",
    enviarCarrito: "",
    getUsuario: "",
    listProduct: "./assets/list-products.json"
}

// EndPoints (igual que los de test)
export const endpoints = {
    ...endpointsTest,
    crearProducto: domain + "/products",
    listProduct: domain + "/products",
    detailProduct: domain + "/products",
    deleteProduct: domain + "/products"
};