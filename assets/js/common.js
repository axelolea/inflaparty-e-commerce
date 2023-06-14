const rutaNavbar = 'navbar.html'
const rutaFooter = 'footer.html'


function lecturaHTML(ruta, callback){
    fetch(ruta)
        .then(resp => {
            if(!resp.ok) throw new Error(`No se lee el documento ${ruta}`)
            return resp.text()
        })
        .then(text => {
            const component = new DOMParser().parseFromString(text, 'text/html')
            callback(component.body.firstChild)
        })
}

const body = document.querySelector('body')

const injectNavbar = component => body.prepend(component)
const injectFooter = component => body.prepend(component)

lecturaHTML(rutaNavbar, injectNavbar)
lecturaHTML(rutaFooter, injectFooter)
