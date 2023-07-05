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
    // Obtén las referencias a los elementos relevantes
    const monthElement = dialogComponent.querySelector('.calendar .header .month');
    const prevButton = dialogComponent.querySelector('.calendar .header .prev-btn');
    const nextButton = dialogComponent.querySelector('.calendar .header .next-btn');
    const daysContainer = dialogComponent.querySelector('.calendar .days');
    const todayButton = dialogComponent.querySelector('.calendar .header .today-btn');
  
    // Define los nombres de los meses
    const monthNames = [
      'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
      'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
  
    // Obtén la fecha actual
    const currentDate = new Date();
  
    // Define la fecha actual como la fecha mostrada inicialmente
    let displayedDate = currentDate;

    // Variables para almacenar las fechas seleccionadas
    let startDate = null;
    let endDate = null;
    let dayElements = null; // Variable global para los elementos de los días
  
    // Función para mostrar el mes y año actual
    function displayMonth() {
      const month = displayedDate.getMonth();
      const year = displayedDate.getFullYear();
      monthElement.textContent = `${monthNames[month]} ${year}`;
    }


     
  
    // Función para generar los días del mes actual
    function generateCalendar() {
      const year = displayedDate.getFullYear();
      const month = displayedDate.getMonth();
      const today = new Date();
    
      // Determina el primer y último día del mes
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
    
      // Calcula el número de días en el mes anterior y siguiente para rellenar el calendario
      const prevMonthDays = firstDay.getDay();
      const nextMonthDays = 6 - lastDay.getDay();
    
      // Crea la lista de días del mes actual
      let daysHTML = '';
    
      // Agrega los días del mes anterior al principio
      for (let i = prevMonthDays; i > 0; i--) {
        const day = new Date(year, month, -i + 1);
        daysHTML += `<div class="day prev disabled">${day.getDate()}</div>`;
      }
    
      // Agrega los días del mes actual
      for (let i = 1; i <= lastDay.getDate(); i++) {
        const day = new Date(year, month, i);
        const isCurrentDay = day.toDateString() === currentDate.toDateString();
        const isPastDay = day < today;
        const isSelectedDay = startDate && endDate && day >= startDate && day <= endDate;
        const className = isCurrentDay ? 'day today' : isPastDay ? 'day prev disabled' : 'day';
        if (isSelectedDay) {
          className += ' selected';
        }
        daysHTML += `<div class="${className}">${i}</div>`;
      }
    
      // Agrega los días del mes siguiente al final
      for (let i = 1; i <= nextMonthDays; i++) {
        const day = new Date(year, month + 1, i);
        daysHTML += `<div class="day next">${day.getDate()}</div>`;
      }
    
      // Actualiza el contenido del contenedor de días
      daysContainer.innerHTML = daysHTML;

       // Query the day elements within the dialog component
      dayElements = dialogComponent.querySelectorAll('.days .day');
      dayElements.forEach((dayElement) => {
        dayElement.addEventListener('click', handleDayClick);
      });

    } //fin de funcion 



   



// Función para manejar el evento de clic en un día
  function handleDayClick(event) {
    const selectedDay = event.target;
    const year = displayedDate.getFullYear();
    const month = displayedDate.getMonth();
    const selectedDate = new Date(year, month, parseInt(selectedDay.textContent));

    if (!startDate || (startDate && endDate)) {
      // No hay fecha de inicio o ya se seleccionaron dos fechas, establecer una nueva fecha de inicio
      startDate = selectedDate;
      endDate = null;
    } else if (startDate && !endDate) {
      // Hay una fecha de inicio pero no una fecha de fin, establecer una nueva fecha de fin
      endDate = selectedDate;

      // Verificar si la fecha de inicio es posterior a la fecha de fin, intercambiarlas si es necesario
      if (endDate < startDate) {
        const temp = startDate;
        startDate = endDate;
        endDate = temp;
      }
    }

    // Query the day elements within the dialog component
    dayElements = dialogComponent.querySelectorAll('.days .day');

    // Highlight the selected day
    dayElements.forEach((dayElement) => {
      dayElement.classList.remove('selected');
    });
    selectedDay.classList.add('selected');
  

    

    // Marcar el rango de fechas seleccionadas al generar el calendario
    generateCalendar();

    // Highlight the selected day

    
   // Query the day elements within the dialog component
  dayElements = dialogComponent.querySelectorAll('.days .day');
  dayElements.forEach((dayElement) => {
  dayElement.addEventListener('click', handleDayClick);
});
  } //fin de funcion




    



  
    // Función para manejar el evento del botón anterior
    function handlePrevButtonClick() {
      // Resta un mes a la fecha mostrada
      displayedDate = new Date(displayedDate.getFullYear(), displayedDate.getMonth() - 1);
  
      // Actualiza el mes y genera el nuevo calendario
      displayMonth();
      generateCalendar();
  
      // Verifica si se debe deshabilitar el botón prev
      checkPrevButtonState();
    }
  
    // Función para manejar el evento del botón siguiente
    function handleNextButtonClick() {
      // Añade un mes a la fecha mostrada
      displayedDate = new Date(displayedDate.getFullYear(), displayedDate.getMonth() + 1);
  
      // Actualiza el mes y genera el nuevo calendario
      displayMonth();
      generateCalendar();
  
      // Verifica si se debe deshabilitar el botón prev
      checkPrevButtonState();
    }
  
    // Función para verificar y actualizar el estado del botón prev
    function checkPrevButtonState() {
      const today = new Date();
      prevButton.classList.toggle('disabled', displayedDate <= today);
    }
  
    // Asigna los manejadores de eventos a los botones
    prevButton.addEventListener('click', handlePrevButtonClick);
    nextButton.addEventListener('click', handleNextButtonClick);
  
    // Muestra el mes y año actual y genera el calendario
    displayMonth();
    generateCalendar();
  
    // Verifica y establece el estado inicial del botón prev
    checkPrevButtonState();
    /*------------------------------*/
    
    // Función para manejar el evento del botón "Hoy"
function handleTodayButtonClick() {
  // Establece la fecha actual como la fecha mostrada
  displayedDate = currentDate;

  // Actualiza el mes y genera el nuevo calendario
  displayMonth();
  generateCalendar();

  // Verifica si se debe deshabilitar el botón prev
  checkPrevButtonState();
}

// Asigna el manejador de eventos al botón "Hoy"
todayButton.addEventListener('click', handleTodayButtonClick);

  //fin del funcion createDialogComponents
}

// Invoking the calendar component function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
  
  // Invoke the function to create dialog components
  createDialogComponents();
});

