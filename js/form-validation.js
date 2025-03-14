document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se recargue la página

        let nombre = form.nombre.value.trim();
        let email = form.email.value.trim();
        let mensaje = form.mensaje.value.trim();
        let valid = true;

        // Expresión regular para validar email
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Limpiar mensajes de error anteriores
        document.querySelectorAll(".error-message").forEach(el => el.remove());

        // Validar Nombre
        if (nombre === "") {
            showError(form.nombre, "El nombre es obligatorio.");
            valid = false;
        }

        // Validar Email
        if (email === "") {
            showError(form.email, "El correo electrónico es obligatorio.");
            valid = false;
        } else if (!emailRegex.test(email)) {
            showError(form.email, "El correo no es válido.");
            valid = false;
        }

        // Validar Mensaje
        if (mensaje === "") {
            showError(form.mensaje, "El mensaje no puede estar vacío.");
            valid = false;
        }

        // Si todo está correcto, enviar formulario
        if (valid) {
            alert("Mensaje enviado con éxito.");
            form.reset();
        }
    });

    // Función para mostrar mensajes de error
    function showError(input, message) {
        const error = document.createElement("p");
        error.className = "error-message";
        error.style.color = "red";
        error.style.fontSize = "14px";
        error.textContent = message;
        input.insertAdjacentElement("afterend", error);
    }
});
