import { lecturaHTML, injectLastChild, parseComponent } from "./common.js";

const dialog = "./assets/templates/dialog.html";
const calendario = "./assets/templates/boton-calendario.html";

async function createDialogComponents() {
  const dialogText = await lecturaHTML(dialog);
  const calendarioText = await lecturaHTML(calendario);

  const dialogComponent = parseComponent(dialogText);
  const calendarioBtn = parseComponent(calendarioText);

  injectLastChild(dialogComponent);
  injectLastChild(calendarioBtn);

  const closeBtn = dialogComponent.querySelector("#close");

  calendarioBtn.addEventListener("click", () => dialogComponent.showModal());
  closeBtn.addEventListener("click", () => dialogComponent.close());

  /*------------------------------*/
  //Traerme los elementos del dialog.html
  const daysContainer = document.querySelector(".days");
  const month = document.querySelector(".month");
  //Botones 
  const nextBtn = document.querySelector(".next-btn");
  const todayBtn = document.querySelector(".today-btn");

  //Array de los 12 meses
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const date = new Date();

  //Traer el mes actual
  let currentMonth = date.getMonth();
  //Traer año actual
  let currentYear = date.getFullYear();
  //console.log(date, currentMonth, currentYear);

  //funcion
  function Calendario() {

    //Establecemos la fecha del objeto (date) en el primer día del mes. 
    //Nos asegura que empezamos a contar desde el principio del mes.
    date.setDate(1);

    //firstDay representa el primer día del mes en curso. 
    //Se utiliza para determinar el día de la semana (por ejemplo, domingo, lunes) en el que comienza el mes.
    const firstDay = new Date(currentYear, currentMonth, 1);

    //crea un nuevo objeto Date lastDay que representa el último día del mes actual. 
    //Al poner el día a 0, (se refiere al último día del mes anterior). Esto es útil para determinar el número total de días del mes actual.
    const lastDay = new Date(currentYear, currentMonth + 1, 0);

    //obtiene el índice del día de la semana (0-6, donde 0 es domingo y 6 es sábado) para el último día del mes actual. 
    //Ayuda a determinar la posición inicial de los días del mes siguiente en el calendario.
    const lastDayIndex = lastDay.getDay();

    //obtiene la fecha (día del mes) del último día del mes en curso. Proporciona el número total de días del mes en curso.
    const lastDayDate = lastDay.getDate();

    //crea un nuevo objeto Date prevLastDay que representa el último día del mes anterior. 
    //Al poner el día a 0, (se refiere al último día del mes anterior al mes anterior). Esto es útil para mostrar los días restantes del mes anterior en el calendario.
    const prevLastDay = new Date(currentYear, currentMonth, 0);

    //obtiene la fecha (día del mes) del último día del mes anterior. Proporciona el número total de días del mes anterior.
    const prevLastDayDate = prevLastDay.getDate();

    //calcula el número de días del mes siguiente que deben mostrarse en el calendario del mes actual. 
    //Resta el lastDayIndex (el índice del último día del mes actual) de 7 (total de días en una semana) y luego resta 1 para tener en cuenta el día actual. 
    const nextDays = 7 - lastDayIndex - 1;

    // Actualizar el año y mes en la cabecera 
    month.innerHTML = `${months[currentMonth]} ${currentYear}`;

    // actualizar days en el html
    let days = "";

    // prev days html
    for (let x = firstDay.getDay(); x > 0; x--) {
      days += `<div class="day prev">${prevLastDayDate - x + 1}</div>`;
    }

    // current month days
    for (let i = 1; i <= lastDayDate; i++) {
      // Revisa si es el dia de hoy, then add today class
      if (
        i === new Date().getDate() &&
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear()
      ) {
        // si date mes año coincide añadir today
        days += `<div class="day today">${i}</div>`;
      } else {
        //si no, no añada today
        days += `<div class="day ">${i}</div>`;
      }
    }

    // próximos días del Month (mes)
    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="day next">${j}</div>`;
    }

    // Invocar la funcion 
    hideTodayBtn();

    daysContainer.innerHTML = days;
  } //fin de la funcion
  //invocar la funcion 
  Calendario();

  //AddEventListener para el boton del nextBtn
  nextBtn.addEventListener("click", () => {
    // aumentar en uno el mes en curso
    currentMonth++;
    if (currentMonth > 11) {
      // si el mes es mayor que 11 hazlo 0 y aumenta el año en uno
      currentMonth = 0;
      currentYear++;
    }
    // rerender calendar
    Calendario();
  });


  // go to today
  todayBtn.addEventListener("click", () => {
    // poner el mes y el año en curso
    currentMonth = date.getMonth();
    currentYear = date.getFullYear();
    // Invocar la funcion
    Calendario();
  });

  // Funcion que permite ocultar btnToday si ya es el mes actual y viceversa
  function hideTodayBtn() {
    if (
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
    ) {
      todayBtn.style.display = "none";
    } else {
      todayBtn.style.display = "flex";
    }
  } //fin de la funcion

  //fin del funcion createDialogComponents
}document.addEventListener("DOMContentLoaded", createDialogComponents);
