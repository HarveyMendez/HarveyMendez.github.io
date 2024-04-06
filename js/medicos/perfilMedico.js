// Obtener el ID de la persona de la URL
const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('id'));

// Buscar la persona por su ID
const perfiles = [
  { id: 1, identificacion: 303647322 , nombre: "Juan", especialidad: "Cirugia", ciudad: "Puntarenas" },
  { id: 2, identificacion: 303493122 , nombre: "María", especialidad: "Medicina Aeroespacial", ciudad: "Guanacaste" },
  { id: 4, identificacion: 303443022 , nombre: "Roberto", especialidad: "Medicina de Rehabilitación", ciudad: "Guanacaste" },
  { id: 3, identificacion: 303247322 , nombre: "Carlos", especialidad: "Cirugia", ciudad: "San José" }
  ];
const persona = perfiles.find(persona => persona.id === id);

// Mostrar la información de la persona en la página
const perfilContainer = document.getElementById("perfil");
const perfilHTML = `
  <div class="perfil">
    <h2>${persona.nombre}</h2>
    <p>Edad: ${persona.identificacion}</p>
    <p>Ciudad: ${persona.especialidad}</p>
    <p>Ciudad: ${persona.ciudad}</p>
    <a href="busquedaMedicos.html">Volver a la lista de perfiles</a>
  </div>
`;
perfilContainer.innerHTML = perfilHTML;