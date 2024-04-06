document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.getElementById("formRegistro")


    formulario.addEventListener("submit", (event) => {

        event.preventDefault();
        const {cedula, fullName, celular, correo, password, confirmedPassword} = obtenerDatosFormulario();
        const esValido = validarIdentidad(cedula) && validarNombre(fullName) && validarCelular(celular) && validarCorreo(correo) && validarContrasenna(password,confirmedPassword);
        if (esValido) {
            alert("Registro Exitoso");
        }

    });

});


const obtenerDatosFormulario = () => {
    const cedula = document.getElementById("personId").value.trim();
    const fullName = document.getElementById("fullName").value.trim();
    const celular = document.getElementById("telefono").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const password = document.getElementById("contrasenna").value.trim();
    const confirmedPassword = document.getElementById("confirmarContrasenna").value.trim();

    return { cedula, fullName, celular, correo, password, confirmedPassword};
};

const validarIdentidad = (cedula) => {

    const formatoValido = /^\d{2}-\d{4}-\d{4}$/;
    if (!formatoValido.test(cedula)) {
        alert('El número de identidad debe tener el formato ##-####-####');
        return false;
    }
    return true;
};

const validarNombre = (fullName) => {
    if (fullName.length > 20) {
        alert('El nombre completo debe tener como máximo 20 caracteres');
        return false;
    }
    return true;
};


const validarCelular = (celular) => {
    const formatoValido = /^\d{4}-\d{4}$/;
    if (!formatoValido.test(celular)) {
        alert('El número de celular debe tener el formato ####-####');
        return false;
    }
    return true;
};

const validarCorreo = (correo) => {
    const formatoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoValido.test(correo)) {
        alert('El correo electrónico debe tener el formato correcto (##@####.###)');
        return false;
    }
    return true;
};


const validarContrasenna = (password, confirmedPassword) => {
    const formatoValido = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,11}$/;
    if (!formatoValido.test(password)) {
        alert('La contraseña no tiene el formato adecuado');
        return false;
    }
    if (password !== confirmedPassword) {
        alert('La contraseña y la confirmación no coinciden.');
        return false;
    }
    return true;
};


