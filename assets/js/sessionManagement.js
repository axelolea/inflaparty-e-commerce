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
        if(!dataClean){
            const newData = [data]
            localStorage.setItem(this.#usersSessionStorage, JSON.stringify(newData))
            return;
        }
        const users = JSON.parse(dataClean)
        if(Array.isArray(users)){
            const newData = [...users, data]
            localStorage.setItem(this.#usersSessionStorage, JSON.stringify(newData))
        }
    }

    loginLocalStorage(data){
        const dataClean = localStorage.getItem(this.#usersSessionStorage)
        const users = JSON.parse(dataClean)
        let flag = false
        users.forEach(user => {
            if(flag) return;
            const { email, password } = user
            if(data.email === email && data.password === password) flag = true;
        });
        return flag
    }

}

const sessionManagement = new SessionManagement();

export default sessionManagement;