/*let bemvindo = document.querySelector('.one-msg');
let usuariostring = localStorage.getItem('usuario');
let usuario = JSON.parse(usuariostring);
bemvindo.innerHTML = 'Seja Bem Vindo(a) ' + usuario.user;*/


let compra = document.querySelector('.one-msg');
let carrinhostring = localStorage.getItem('carrinho');
let listPizza = JSON.parse(carrinhostring);
compra.innerHTML = 'Seu Pedido foi: ' + listPizza.id;

console.log(carrinhostring)


