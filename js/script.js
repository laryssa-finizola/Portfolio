// transformacao do menu para um X
document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu-hamburguer");
    const navResponsive = document.querySelector(".nav-responsive");

    menuBtn.addEventListener("click", function() {
        navResponsive.classList.toggle("nav-active");
        menuBtn.classList.toggle("change");
    });
});