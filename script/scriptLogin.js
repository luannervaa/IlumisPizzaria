let usuariostring = localStorage.getItem('usuario');
let usuario = JSON.parse(usuariostring); 
const tentativa = '3';
const BTN = document.querySelector('#btn');
let modal = document.querySelector('.modal');
let closeButton = document.querySelector('.close-button');
let text;
let textArea = document.querySelector('.text-area');





BTN.addEventListener('click', function (event){
    event.preventDefault();

    let login = document.querySelector('.camp1').value;
    let password = document.querySelector('.camp2').value;
    
    textArea.textContent = ' ';
    
    if (login == usuario.user && password == usuario.password)
    {
        window.location = 'home.html'; 
    } 
    else if (login != usuario.user && password != usuario.password)
    {
        text = document.createTextNode('Usuário e Senha Inválidos');
        
    }
    else if (login != usuario.user) {
        text = document.createTextNode('Usuário inválido')
    }
    else if (password != usuario.password)
    {
        text = document.createTextNode('Senha Inválida');
    }

    textArea.appendChild(text);
    toggleModal();
});

function toggleModal() {
    modal.classList.toggle('show-modal');
}

function windowOnClick (event) {
    if (event.target === modal) {
        toggleModal();
    }
}

closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

