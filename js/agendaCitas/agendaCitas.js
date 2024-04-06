document.addEventListener('DOMContentLoaded', function () {

    var calendarEl = document.getElementById('calendar');
    var eventForm = document.getElementById('eventForm');
    var closeBtn = document.querySelector('.close');
    var saveBtn = document.getElementById('saveEvent');
    var eventNameInput = document.getElementById('eventName');
    var eventTimeInput = document.getElementById('eventTime');
    var currentMonth = new Date().getMonth();
    var currentYear = new Date().getFullYear();

    const optionsSelect = document.getElementById("perfiles");
    const options = ["Juan", "Maria", "Roberto", "Carlos"]; // Lista de medicos

    // Renderizar el calendario
    renderCalendar(currentMonth, currentYear);

    // Función para renderizar el calendario
    function renderCalendar(month, year) {
        var daysInMonth = new Date(year, month + 1, 0).getDate();
        var firstDayOfMonth = new Date(year, month, 1).getDay();

        var calendarHTML = '<div class="navigation">';
        calendarHTML += '<h2>' + getMonthName(month) + ' ' + year + '</h2>';
        calendarHTML += '</div>';
        calendarHTML += '<div class="week">';

        // espacios en blanco
        for (var i = 0; i < firstDayOfMonth; i++) {
            calendarHTML += '<div class="day"></div>';
        }

        // dias del mes
        for (var day = 1; day <= daysInMonth; day++) {
            calendarHTML += '<div class="day">' + day + '</div>';
            if ((firstDayOfMonth + day) % 7 === 0) {
                calendarHTML += '</div><div class="week">';
            }
        }

        calendarHTML += '</div>';
        calendarEl.innerHTML = calendarHTML;
    }




    // Función para mostrar el modal
    function openEventModal(day, month, year, cuadrado) {
        eventForm.style.display = 'block';
        saveBtn.onclick = function () {
            var eventName = eventNameInput.value;
            var eventTime = eventTimeInput.value;
            if (eventName && eventTime) {
                cuadrado.classList.add('event-added'); // Para cambiar el color del cuadrado del dia
                addEventToList(day, month, year, eventName, eventTime);
                eventForm.style.display = 'none';
            } else {
                alert('Por favor, complete todos los campos.');
            }
        }
        displayEvents(day, month, year);
    }



    // Al hacer click en cualquier dia
    calendarEl.addEventListener('click', function (event) {
        if (event.target.classList.contains('day')) {
            var day = parseInt(event.target.textContent);
            const cuadrado = event.target;
            openEventModal(day, currentMonth, currentYear, cuadrado);
        }
    });

    // Función para cerrar el modal
    closeBtn.addEventListener('click', function () {
        eventForm.style.display = 'none';
    });





    // Función para obtener el nombre del mes
    function getMonthName(month) {
        var monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        return monthNames[month];
    }

    // Función para cambiar al mes anterior
    function prevMonth() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    }

    // Función para cambiar al siguiente mes
    function nextMonth() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear); // Renderizar el calendario después de actualizar el mes
    }

    var nextButton = document.getElementById('nextBtn');
    nextButton.addEventListener('click', nextMonth);

    var prevButton = document.getElementById('prevBtn');
    prevButton.addEventListener('click', prevMonth);


    options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.text = option;
        optionsSelect.add(optionElement);
    });


});