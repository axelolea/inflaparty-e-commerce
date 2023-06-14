import { lecturaHTML, injectLastChild, parseComponent } from './common.js';

const dialog = './assets/templates/dialog.html'
const calendario = './assets/templates/boton-calendario.html'

async function createDialogComponents(){
    const dialogText = await lecturaHTML(dialog);
    const calendarioText = await lecturaHTML(calendario);

    const dialogComponent = parseComponent(dialogText)
    const calendarioBtn = parseComponent(calendarioText)

    const closeBtn = dialogComponent.querySelector('#close')

    calendarioBtn.addEventListener('click', () => dialogComponent.showModal())
    closeBtn.addEventListener('click', () => dialogComponent.close())

}

createDialogComponents()
