const domain = "http://localhost:8080"

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
    crearProducto: domain + "/products"
};