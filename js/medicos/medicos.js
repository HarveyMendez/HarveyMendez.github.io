// Array de perfiles de ejemplo
const perfiles = [
  { id: 1, nombre: "Juan", edad: 30, ciudad: "Buenos Aires" },
  { id: 2, nombre: "María", edad: 25, ciudad: "Madrid" },
  { id: 4, nombre: "Roberto", edad: 26, ciudad: "Madrid" },
  { id: 3, nombre: "Carlos", edad: 35, ciudad: "Ciudad de México" }
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
        <p>Edad: ${persona.edad}</p>
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
    persona.edad.toString().includes(termino) ||
    persona.ciudad.toLowerCase().includes(termino.toLowerCase())
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

// Mostrar perfiles al cargar la página
mostrarPerfiles(perfiles, "nombre");