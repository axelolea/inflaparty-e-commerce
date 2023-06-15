const rutaNavbar = './assets/templates/navbar.html'
const rutaFooter = './assets/templates/footer.html'


export async function lecturaHTML(ruta){

    // fetch al archivo html
    const resp = await fetch(ruta)
    
    // revisar si la peticion fue correcta
    if(!resp.ok) throw new Error(`No se lee el documento ${ruta}`)
    
    // convierto mi peticion a string
    const text = await resp.text()

    return text
}

// body del dom
const body = document.querySelector('body')

// funciones inyectoras
export const injectFirstChild = component => body.prepend(component)
export const injectLastChild = component => body.append(component)

export const parseComponent = text => {
    // Creo un nuevo dom e integro mi text con parseFromString
    const dom2 = new DOMParser().parseFromString(text, 'text/html')
    // a mi no me interesa el dom nuevo, me interesa el contenido que parseo

    // obtengo el elemento parseado
    const component = dom2.body.firstChild

    // retorno el elemento (por si una funcion async la nesesita)
    return component
}

async function createNavbarFooter(){
    // envocacion de funciones
    const navbarText = await lecturaHTML(rutaNavbar)
    const footerText = await lecturaHTML(rutaFooter)

    const navbar = parseComponent(navbarText);
    const footer = parseComponent(footerText);

    injectFirstChild(navbar)
    injectLastChild(footer)

    
    // const heightFooter = footer.offsetHeight
    const getNavbarHeight = () => `${navbar.offsetHeight}px`
    const resizePadding = () => body.style.paddingTop = getNavbarHeight();
    
    resizePadding()
    
    window.addEventListener("resize", resizePadding)
}

createNavbarFooter()
