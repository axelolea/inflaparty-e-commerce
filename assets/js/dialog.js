import { lecturaHTML, injectLastChild, parseComponent } from './common.js'

const dialog = './assets/templates/dialog.html'
const calendario = './assets/templates/boton-calendario.html'

async function createDialogComponents(){
    const dialogText = await lecturaHTML(dialog);
    const calendarioText = await lecturaHTML(calendario);

    const dialogComponent = parseComponent(dialogText)
    const calendarioBtn = parseComponent(calendarioText)

    injectLastChild(dialogComponent)
    injectLastChild(calendarioBtn)

    const closeBtn = dialogComponent.querySelector('#close')

    calendarioBtn.addEventListener('click', () => dialogComponent.showModal())
    closeBtn.addEventListener('click', () => dialogComponent.close())





/*------------------------------*/ 

const daysContainer = document.querySelector(".days");
const prevBtn = document.querySelector(".prev-btn");
const month = document.querySelector(".month");




const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio","julio", "septiembre", "octubre", "noviembre", "diciembre"];

const days = ["dom", "lun", "mar", "mie", "jue", "vie", "sab"];


//Traer la fecha actual
const date = new Date();

//Traer el mes actual
let currentMonth = date.getMonth();

//Traer año actual
let currentYear = date.getFullYear();

//console.log(date, currentMonth, currentYear);


//funcion
function renderCalendar(){

    //Traer el prev month, current month and next month days
    date.setDate(1);
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const lastDayIndex = lastDay.getDay();
    const lastDayDate = lastDay.getDate();
    const prevLastDay = new Date(currentYear, currentMonth, 0);
    const prevLastDayDate = prevLastDay.getDate();
    const nextDays = 7 - lastDayIndex - 1;

  console.log("firstDay:", firstDay);
  console.log("lastDay:", lastDay);
  console.log("lastDayIndex:", lastDayIndex);
  console.log("lastDayDate:", lastDayDate);
  console.log("prevLastDay:", prevLastDay);
  console.log("prevLastDayDate:", prevLastDayDate);
  console.log("nextDays:", nextDays);
  console.log("month:", month);

    //actualizar el año actual y el mes en el Header
    month.innerHTML = `${months[currentMonth]} ${currentYear}`;


    //Actualizar los dias
    // update days html
  let days = "";

  // prev days html
  for (let x = firstDay.getDay(); x > 0; x--) {
    days += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
  }

  // current month days
  for (let i = 1; i <= lastDayDate; i++) {
    // check if its today then add today class
    if (
      i === new Date().getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      // if date month year matches add today
      days += `<div class="day today">${i}</div>`;
    } else {
      //else dont add today
      days += `<div class="day ">${i}</div>`;
    }
  }


  daysContainer.innerHTML = days;
}renderCalendar();

}



document.addEventListener("DOMContentLoaded", createDialogComponents);





