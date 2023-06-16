const rutaNavbar = './assets/templates/navbar.html'
const rutaFooter = './assets/templates/footer.html'


async function lecturaHTML(ruta){

    // fetch al archivo html
    const resp = await fetch(ruta)
    
    // revisar si la peticion fue correcta
    if(!resp.ok) throw new Error(`No se lee el documento ${ruta}`)
    
    // convierto mi peticion a string
    const text = await resp.text()

    // return el text
    return text
}

// body del dom
const body = document.querySelector('body')

// funciones inyectoras
const injectFirstChild = component => body.prepend(component)
const injectLastChild = component => body.append(component)

const parseComponent = text => {
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

    // Convertir string a componente
    const navbar = parseComponent(navbarText);
    const footer = parseComponent(footerText);

    // inyectar componentes

    // como primer hijo al navbar
    injectFirstChild(navbar)

    // como el ultimo hijo el footer
    injectLastChild(footer)

    
    // const heightFooter = footer.offsetHeight
    const getNavbarHeight = () => `${navbar.offsetHeight}px`
    // const getFooterHeight = () => `${footer.offsetHeight}px`

    const resizeNavbarPadding = () => body.style.paddingTop = getNavbarHeight();
    // const resizeFooterPadding = () => body.style.paddingBottom = getFooterHeight();
    
    // actualizar padding en navbar
    resizeNavbarPadding()
    // resizeFooterPadding()
    
    // evento para actualizar padding al cambiar dimension del navegador
    window.addEventListener("resize", () => {
        resizeNavbarPadding()
        // resizeFooterPadding()
    })
}

// Arrancar funcion
createNavbarFooter()
