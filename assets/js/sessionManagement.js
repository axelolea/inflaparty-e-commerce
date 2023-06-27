class SessionManagement{

    #tokenSessionStorage = "inflaparty-token";
    #usersSessionStorage = "inflaparty-users";

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

    registerLocalStorage(data){
        const dataClean = localStorage.getItem(this.#usersSessionStorage)
        const newData = [];
        if(!dataClean && typeof data === 'object') newData.push(data);
        else {
            const users = JSON.parse(dataClean)
            if(Array.isArray(users)) newData.push(...users, data);
        }
        localStorage.setItem(this.#usersSessionStorage, JSON.stringify(newData))
    }

    loginLocalStorage(data){
        const users = JSON.parse(localStorage.getItem(this.#usersSessionStorage))
        return users.reduce((acc, user) => {
            if(acc) return;
            const { email, password } = user;
            return data.email === email && data.password === password;
        }, false)
    }

}

const sessionManagement = new SessionManagement();

export default sessionManagement;