class ShoppingCartManagement {

    #keyLocalStorage = "inflaparty-carrito";
    #currentCart;
    #defaultCart = []

    constructor(){
        this.#currentCart = this.#getCartLocalStorage();
    }

    getCart(){
        return this.#currentCart;
    }

    setItemCart(item){

        if(typeof item !== 'number') throw new Error(`Valor ${item} no valido`)

        this.#currentCart.push(item)
        this.#saveCartLocalStorage(this.#currentCart)

    }

    deleteItemCart(item){

        if(typeof item !== 'number') throw new Error(`Valor ${item} no valido`)

        const indice = this.#currentCart.indexOf(item)

        if(indice === -1) throw new Error(`No se encontro ${item} en carrito`)

        this.#currentCart.splice(indice, 1)
        this.#saveCartLocalStorage(this.#currentCart)
        
    }
    
    clearCart(){
        this.#currentCart = this.#defaultCart;
        localStorage.removeItem(this.#keyLocalStorage)
    }

    isInCart(itemSearch){
        return this.#currentCart.some(item => itemSearch == item)
    }

    #getCartLocalStorage(){
        // datos de local storage
        
        const dataLS = localStorage.getItem(this.#keyLocalStorage);

        
        if(!dataLS) return this.#defaultCart;
        
        const dataClean = JSON.parse(dataLS)
        
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

export const carrito = new ShoppingCartManagement()
