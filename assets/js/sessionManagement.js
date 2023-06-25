class SessionManagement{

    #tokenSessionStorage = "inflaparty-token";

    constructor(){}

    isLogin(){
        return !!sessionStorage.get(this.#tokenSessionStorage);
    }

    login(token){
        sessionStorage.set(this.#tokenSessionStorage, token);
    }

    logout(){
        sessionStorage.removeItem(this.#tokenSessionStorage)
        window.location = "./index.html"
    }

    getToken(){
        return sessionStorage.getItem(this.#tokenSessionStorage)
    }

}

const sessionManagement = new SessionManagement();

export default sessionManagement;