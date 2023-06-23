import httpClient from './httpClient.js'
import { endpoints } from './constants.js'

class SessionManagement{

    #tokenSessionStorage = "inflaparty-token";

    constructor(){}

    isLogin(session){
        sessionStorage.setItem(this.#tokenSessionStorage, session)
    }

    login(body){

        const data = httpClient.post(endpoints.registerUser, body)
        
    }


    register(data){
        httpClient.post()
    }

    logout(){
        sessionStorage.removeItem(this.#tokenSessionStorage)
        window.location = "./index.html"
    }

}

const sessionManagement = new SessionManagement();

export default sessionManagement;