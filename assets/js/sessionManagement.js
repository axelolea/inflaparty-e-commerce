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
        const data = localStorage.getItem(this.#usersSessionStorage)
        const users = JSON.parse(data)
        localStorage.setItem(this.#usersSessionStorage, [...users, data])
    }

    loginLocalStorage(data){
        const data = localStorage.getItem(this.#usersSessionStorage)
        const users = JSON.parse(data)

        users.forEach(user => {
            const { email, password } = user
            if(data.email === email && data.password === password) return true;
            return false
        });
    }

}

const sessionManagement = new SessionManagement();

export default sessionManagement;