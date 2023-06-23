class HTTPClient{

    // Dominio para hacer las peticiones
    #domain = "localhost:5500";
    // Diccionarios con metodos
    #methodsRequest = {
        get: 'GET',
        post: 'POST',
        put: 'PUT',
        delete: 'DELETE'
    }
    // Cabezera
    #headers = {
        "Content-type": "application/json"
    }

    constructor(){}

    get(url, params = null){
        return this.#requestHandler(url, params, this.#methodsRequest.get)
    }

    post(url, params = null){
        return this.#requestHandler(url, params, this.#methodsRequest.post)
    }

    put(url, params = null){
        return this.#requestHandler(url, params, this.#methodsRequest.put)
    }

    delete(url, params = null){
        return this.#requestHandler(url, params, this.#methodsRequest.delete)
    }

    async #requestHandler(urlRequest, paramsBody, methodRequest){

        // Creando las opciones para el fetch
        const fecthOptions = {
            // Metodo de la peticion
            method: methodRequest,
            // Cabezera para respuesta json
            headers: this.#headers,
            // Body con los parametros (Solo si la peticion es diferente a GET)
            body: methodRequest !== this.#methodsRequest.get
                    ? JSON.stringify(paramsBody)
                    : null
        }

        // Crear peticion
        const resp = await fetch(urlRequest, fecthOptions)

        // Verificar si la peticion, crear error en caso contrario
        if(!resp.ok) throw new Error(`[${resp.statusText}] Fetch error`);

        // Crear o parsearlos datos recibidos
        const data = resp.json()
        
        // Devolver los datos (promesa)
        return data
    }
}

const httpClient = new HTTPClient();

export default httpClient;