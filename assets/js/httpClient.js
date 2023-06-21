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

export const httpClient = new HTTPClient()