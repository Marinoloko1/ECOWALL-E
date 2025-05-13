// login.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    console.log("La función de validación está siendo ejecutada.");

    const username = document.querySelector('input[name="uname"]').value.trim();
    const password = document.querySelector('input[name="psw"]').value.trim();

    console.log("Usuario ingresado:", username);
    console.log("Contraseña ingresada:", password);

    if (username === "Angel" && password === "22411070200076") {
        localStorage.setItem("loggedUser", "Angel");
        alert("Inicio de sesión exitoso.");
        window.location.replace("Descanso.html");
    } else if (username === "Jose" && password === "22411070200217") {
        localStorage.setItem("loggedUser", "Jose");
        alert("Inicio de sesión exitoso.");
        window.location.replace("Descanso.html");
    } else if (username === "Fernanda" && password === "22411070200176") {
        localStorage.setItem("loggedUser", "Fernanda");
        alert("Inicio de sesión exitoso.");
        window.location.replace("Descanso.html");
    } else if (username === "Adrian" && password === "1234") {
        localStorage.setItem("loggedUser", "Adrian");
        alert("Inicio de sesión exitoso.");
        window.location.replace("Descanso.html");
    } else if (username === "Veronica" && password === "23411070200143") {
        localStorage.setItem("loggedUser", "Veronica");
        alert("Inicio de sesión exitoso.");
        window.location.replace("Descanso.html");
    } else {
        console.log("Credenciales incorrectas.");
        alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
    }
});
