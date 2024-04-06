// Obtener el ID de la persona de la URL
const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('id'));

// Buscar la persona por su ID
const perfiles = [
    { id: 1, nombre: "Juan", edad: 30, ciudad: "Buenos Aires" },
    { id: 2, nombre: "María", edad: 25, ciudad: "Madrid" },
    { id: 3, nombre: "Carlos", edad: 35, ciudad: "Ciudad de México" }
  ];
const persona = perfiles.find(persona => persona.id === id);

// Mostrar la información de la persona en la página
const perfilContainer = document.getElementById("perfil");
const perfilHTML = `
  <div class="perfil">
    <h2>${persona.nombre}</h2>
    <p>Edad: ${persona.edad}</p>
    <p>Ciudad: ${persona.ciudad}</p>
    <a href="busquedaMedicos.html">Volver a la lista de perfiles</a>
  </div>
`;
perfilContainer.innerHTML = perfilHTML;