const items = [
    {
        id: 0,
        nome: 'Pizza de Mussarela',
        img: 'Img/pizza_mussarela.jpg',
        des: 'Molho de Tomamte, Queijo Mussarela e azeitona',
        valor: 'R$ 22,00',
        quantidade: 0
    },

    {
        id: 1,
        nome: 'Pizza de Calabresa',
        img: 'Img/pizza_calabresa.jpg',
        des: 'Molho Tomate, Queijo Mussarela e Calabresa',
        valor: 'R$ 25,00',
        quantidade: 0
    },

    {
        id: 2,
        nome: 'Pizza de Frango c/ caputiry',
        img: 'Img/pizza_frangocheddar.jpg',
        des: 'Molho Tomate, Frango Desfiado e Catupiry',
        valor: 'R$ 35,00',
        quantidade: 0
    },




]

inicializarLoja = () => { //mostrar produto
    var containerProdutos = document.getElementById ('produtos');
    items.map((val)=>{
        containerProdutos.innerHTML+=`

        <div class = "containerCardMobile">
           <div class = "cardMenuMobile"> 
             <div class = "imgCard">
             <p> <img src="`+val.img+`" class="card-img" /> </p> </div>
              <div class = "menu-partOneMobile"><p>`+val.nome+` </p> </div>
              <div class = "sobre-parteOneMobile"><p>`+val.des+`</p> </div>
              <div class = "valor-partOneMobile">`+val.valor+`</div>
              


             <p class = "btnAdd" ><a  class= "mod" key="`+val.id+`"> Adicionar ao carrinho! </a> </p>
             <p class = "remAdd" ><a class= "mod" rem="`+val.id+`"> Remover do carrinho! </a> </p>
            </div>
        </div>   
        `;
    })
}

inicializarLoja();

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById ('carrinho');
    containerCarrinho.innerHTML = "";
    items.map((val)=>{
        if (val.quantidade > 0){
            containerCarrinho.innerHTML+=`
            <p>`+val.nome+`<br> quantidade: `+val.quantidade+`<br> preço: `+val.valor+`</p>
            <hr>
        `;
        }
    })
}

var links = document.getElementsByTagName ('a');

for (var i=0; i < links.length; i++){
    links[i].addEventListener("click",function(){
        var key = this.getAttribute('key');
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}

var links = document.getElementsByTagName ('a');

for (var i=0; i < links.length; i++){
    links[i].addEventListener("click",function(){
        var rem = this.getAttribute('rem');
        items[rem].quantidade--;
        atualizarCarrinho();
        return false;
    })
}