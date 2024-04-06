document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      dateClick: function(info) {
        // Abre el modal cuando se hace clic en una fecha del calendario
        openModal();
      }
    });
    calendar.render();
  
    // Obtén referencias a los elementos del modal
    var modal = document.getElementById('modal');
    var modalForm = document.getElementById('modal-form');
    var closeBtn = document.querySelector('.close');
  
    // Agrega un evento para cerrar el modal cuando se hace clic en el botón de cierre
    closeBtn.addEventListener('click', closeModal);
  
    // Agrega un evento para cerrar el modal cuando se hace clic fuera de él
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        closeModal();
      }
    });
  
    // Agrega un evento para enviar el formulario del modal
    modalForm.addEventListener('submit', function(event) {
      event.preventDefault();
      saveActivity();
    });
  
    // Función para abrir el modal
    function openModal() {
      modal.style.display = 'block';
    }
  
    // Función para cerrar el modal
    function closeModal() {
      modal.style.display = 'none';
    }
  
    // Función para guardar la actividad en el calendario
    function saveActivity() {
      var hora = document.getElementById('hora').value;
      var persona = document.getElementById('persona').value;
      var lugar = document.getElementById('lugar').value;
      var fecha = info.dateStr; // fecha de la celda clicada

      alert("Iniciar Sesion exitoso");
  
      // Crear el evento y agregarlo al calendario
      calendar.addEvent({
        title: persona + ' - ' + lugar,
        start: fecha + 'T' + hora,
        allDay: false
      });
  
      // Cerrar el modal después de guardar la actividad
      closeModal();
    }
  });