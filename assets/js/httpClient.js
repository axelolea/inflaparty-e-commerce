class HTTPClient{

    // Diccionarios con metodos
    #methodsRequest = {
        get: 'GET',
        post: 'POST',
        put: 'PUT',
        delete: 'DELETE'
    }
    // Cabezera
    headersJson = {
        "Content-type": "application/json"
    }

    headersMultipart = {
        "Content-type": "multipart/form-data"
    }

    constructor(){}

    get(url, params = null, headers = this.headersJson){
        return this.#requestHandler(url, params, this.#methodsRequest.get, headers)
    }

    post(url, params = null, headers = this.headersJson){
        return this.#requestHandler(url, params, this.#methodsRequest.post, headers)
    }

    put(url, params = null, headers = this.headersJson){
        return this.#requestHandler(url, params, this.#methodsRequest.put, headers)
    }

    delete(url, params = null, headers = this.headersJson){
        return this.#requestHandler(url, params, this.#methodsRequest.delete, headers)
    }

    async #requestHandler(urlRequest, paramsBody, methodRequest, headers){

        // Creando las opciones para el fetch
        const fecthOptions = {
            // Metodo de la peticion
            method: methodRequest,
            // Cabezera para respuesta json
            headers: headers,
            cache: "force-cache",
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