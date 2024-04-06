// Array de perfiles de ejemplo
const perfiles = [
  { id: 1, identificacion: 303647322 , nombre: "Juan", especialidad: "Cirugia", ciudad: "Puntarenas" },
  { id: 2, identificacion: 303493122 , nombre: "María", especialidad: "Medicina Aeroespacial", ciudad: "Guanacaste" },
  { id: 4, identificacion: 303443022 , nombre: "Roberto", especialidad: "Medicina de Rehabilitación", ciudad: "Guanacaste" },
  { id: 3, identificacion: 303247322 , nombre: "Carlos", especialidad: "Cirugia", ciudad: "San José" }
];

const perfilesContainer = document.getElementById("perfiles");
const busquedaInput = document.getElementById("busqueda");
const ordenSelect = document.getElementById("orden");

function mostrarPerfiles(personas, criterioOrden) {
  perfilesContainer.innerHTML = "";
  // Ordenar los perfiles según el criterio seleccionado
  personas.sort((a, b) => {
    if (a[criterioOrden] < b[criterioOrden]) return -1;
    if (a[criterioOrden] > b[criterioOrden]) return 1;
    return 0;
  });
  personas.forEach(persona => {
    const perfilHTML = `
      <div class="perfil">
        <h2>${persona.nombre}</h2>
        <p>Identificacion: ${persona.identificacion}</p>
        <p>Especialidad: ${persona.especialidad}</p>
        <p>Ciudad: ${persona.ciudad}</p>
        <a href="perfilMedico.html?id=${persona.id}">Ver más información</a>
      </div>
    `;
    perfilesContainer.innerHTML += perfilHTML;
  });
}

function buscarPerfiles(termino, criterioOrden) {
  const resultados = perfiles.filter(persona =>
    persona.nombre.toLowerCase().includes(termino.toLowerCase()) ||
    persona.especialidad.toLowerCase().includes(termino.toLowerCase()) ||
    persona.ciudad.toLowerCase().includes(termino.toLowerCase()) ||
    persona.identificacion.toString().includes(termino) // Convertimos el número a cadena de texto para buscar
  );
  mostrarPerfiles(resultados, criterioOrden);
}

busquedaInput.addEventListener("input", () => {
  const criterioOrden = ordenSelect.value;
  buscarPerfiles(busquedaInput.value, criterioOrden);
});

ordenSelect.addEventListener("change", () => {
  const criterioOrden = ordenSelect.value;
  const terminoBusqueda = busquedaInput.value;
  buscarPerfiles(terminoBusqueda, criterioOrden);
});


mostrarPerfiles(perfiles, "nombre"); // al cargar la pagina