// Função catalogo de produtos
const menu = document.querySelector('#show')
// Botão mostra catalogo
const showAll = document.querySelector('#showAll')
const showSal = document.querySelector('#showSal')
const showDoc = document.querySelector('#showDoc')
const showBebi = document.querySelector('#showBebi')


// Items
let items


// Menu Limpo
const clearItems = type => {
    items = ''

    if (type === 'normal')
        menu.innerHTML = '';
    else
      console.log("Debom");    
}


// Remover as NÃO selecionadas
const removeClasses = () => {
    showAll.classList.remove('activeMenu')
    showSal.classList.remove('activeMenu')
    showDoc.classList.remove('activeMenu')
    showBebi.classList.remove('activeMenu')
}


// Vereficar se tem item
const checkIfHaveItem = items => {
    if (items === ''){
        menu.innerHTML = '<p class="null"> Nenhum produto encontrado!</p>';
        console.log("Deu certo categoria vazia")
    } else
      menu.innerHTML = items
}


// Adicionar os cards
const addItemToArray = prod => {
    let price = prod.price.toFixed(2).toString().replace('.', ',')

    items +=
        `<div class="card">
            <div>
                <div class="cardImg">
                    <img src="./img/${prod.img}" alt="Imagem de um(a) ${prod.name}">
                </div>
                <h4>${prod.name}</h4>
                <p>${prod.description}</p>
            </div>
            <div>
                <p class="price">R$ <span class="valor">${price}</span></p>
                <button class="btnAdd" onclick="addToCart(${prod.id})">
                    <span> Adicionar ao Carrinho </span> 
                </button>
            </div>
        </div>`
}


// Mostrar Produtos
const showProducts = type => {
    clearItems('normal')
    
    if (type === 0) {
        products.forEach(prod => {
            if (prod.lastPrice === 0)
                addItemToArray(prod)
        })
    } else {
        products.forEach(prod => {
            if (prod.type === type && prod.lastPrice === 0)
                addItemToArray(prod)
        })
    }

    checkIfHaveItem(items)
    removeClasses()

    if (type === 0)
       showAll.classList.add('active')
    else if (type === 1)
       showSal.classList.add('active')
    else if (type === 2)
       showDoc.classList.add('active')
    else if (type === 3)
       showBebi.classList.add('active')
}


// Pegar clique do botão do menu
showAll.addEventListener('click',  function (){ showProducts(0)})
showSal.addEventListener('click',  function (){ showProducts(1)})
showDoc.addEventListener('click',  function (){ showProducts(2)})
showBebi.addEventListener('click',  function (){ showProducts(3)})

showProducts(0)