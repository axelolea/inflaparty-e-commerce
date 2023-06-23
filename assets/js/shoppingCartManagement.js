class ShoppingCartManagement {

    #keyLocalStorage = "inflaparty-carrito";
    #currentCart;
    #defaultCart = []

    constructor(){
        // Pedir al crear una instancia el carrito del localStorage
        this.#currentCart = this.#getCartLocalStorage();
    }

    // Getter
    getCart(){
        // Devolver el carrito
        return this.#currentCart;
    }

    // Numeros
    setItemCart(itemId){

        // Validar que el itemID es un numero
        if(typeof itemId !== 'number') throw new Error(`Valor ${itemId} no valido`)

        // Todo evitar elementos duplicados

        this.#currentCart.push(itemId)
        this.#saveCartLocalStorage(this.#currentCart)

    }

    deleteItemCart(itemId){

        // Validar que el itemID es un numero
        if(typeof itemId !== 'number') throw new Error(`Valor ${itemId} no valido`)

        // Obtener el indice del elemento
        const indice = this.#currentCart.indexOf(itemId) // -1

        // Validar si esta en el carrito
        if(indice === -1) throw new Error(`No se encontro ${itemId} en carrito`)

        this.#currentCart.splice(indice, 1)
        this.#saveCartLocalStorage(this.#currentCart)
        
    }
    
    clearCart(){
        this.#currentCart = this.#defaultCart;
        localStorage.removeItem(this.#keyLocalStorage)
    }

    isInCart(itemSearch){
        return this.#currentCart.some(itemId => itemSearch == itemId)
    }

    #getCartLocalStorage(){
        
        // obtener datos de local storage, con la key
        const dataLS = localStorage.getItem(this.#keyLocalStorage);
        
        // Si no hay datos en el LocalStorage, devolver carrito por defecto
        if(!dataLS) return this.#defaultCart;
        
        // Convertir mi data a array
        const dataClean = JSON.parse(dataLS)
        
        // Imprimi contenido del carrito
        console.log(dataClean)

        return dataClean
    }

    #saveCartLocalStorage(data){

        // si la data no es un array devolver un alert
        if(typeof data !== 'object' || !Array.isArray(data)){
            throw new Error("El dato no es un array, no se puede almacenar en el localstorage")
        }

        this.#currentCart = data
        const dataString = JSON.stringify(data);
        localStorage.setItem(this.#keyLocalStorage, dataString)

    }
}

// Carrito weh o.Ó
export const carrito = new ShoppingCartManagement()

export default carrito;