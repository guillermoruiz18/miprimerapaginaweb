
function showAlert() { alert('¡hola, esta es una alerta desde javaScript!');
}
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})