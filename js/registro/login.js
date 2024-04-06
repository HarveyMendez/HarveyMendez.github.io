document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formLogin")


    formulario.addEventListener("submit", (event) => {

        event.preventDefault();
        const {cedula, password} = obtenerDatosFormulario();
        const esValido = validarIdentidad(cedula) && validarContrasenna(password);
        esValido ? manejarExito() : manejarError();

    });

});



const obtenerDatosFormulario = () => {
    const cedula = document.getElementById("personId").value.trim();
    const password = document.getElementById("contrasenna").value.trim();

    return {cedula, password};
};

const validarIdentidad = (cedula) => {

    const formatoValido = /^\d{2}-\d{4}-\d{4}$/;
    if (!formatoValido.test(cedula)) {
        alert('El número de identidad debe tener el formato ##-####-####');
        return false;
    }

    /* VALIDAR QUE EXISTA */
    return true;
};

const validarContrasenna = (password) => {
    const formatoValido = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,11}$/;
    if (!formatoValido.test(password)) {
        alert('La contraseña no tiene el formato adecuado');
        return false;
    }
    /* VALIDAR QUE EXISTA */
    return true;
};

const manejarExito = () => {
    alert("Iniciar Sesion exitoso");
    limpiarConsola(); 
};

const manejarError = () => {
    alert("Datos Invalidos");
};