// Inicio da Função botão do Menu
let menuNav = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuNav.onclick = () => {

    menuNav.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
// Termino da Função botão do Menu