
const containerDaListaDeProdutos = document.querySelector(".listaDeProdutos");
const campoDePesquisa = document.querySelector("#campoPesquisar");

const tabelaOriginal = [
    //  {
    //      id: 1,
    //      produto: 'Smartwatchs',
    //      poster: 'smartwatch/smartwatchY68/Y68.jpg',
    //      link: 'smartwatch.html'

    //  },
    {
        id:"2",
        produto: 'Amigurumis',
        poster: 'amigurumis/animes/Naruto/KakashiHatake/kakashiHatake-NoBg.png',
        link: 'amigurumis.html'

    },
    {
        id:"3",
        produto: 'Academia',
        poster: 'academia/handgrip/handgrip (1).png',
        link: 'academia.html'

    }
];

let tabelaDeProdutos = tabelaOriginal;

const carregarListaDeProdutos = function(){
    containerDaListaDeProdutos.innerHTML = "";

    tabelaDeProdutos.map( function(produto){
        containerDaListaDeProdutos.innerHTML +=  `

            <div class="produtos">
            <a href="${produto.link}"><img src="${produto.poster}" alt="${produto.produto}"></a>
                <h2 class="texto-produtos">${produto.produto}</h2>
            </div>
        `
    })
};

carregarListaDeProdutos();

function retirar_acentos(text){
    const a = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
    const b = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
    const p = new RegExp(a.split('').join('|'), 'g');
    return text.toString().toLowerCase().trim()
    .replace(p, c => b.charAt(a.indexOf(c)))
    .replace(/&/g, '-and-')
    .replace(/[\s\W-]+/g, ' ');
};

campoDePesquisa.addEventListener("keyup", function(){
    const resultado = tabelaDeProdutos.filter((produto)=> retirar_acentos(produto.produto).includes(retirar_acentos(campoDePesquisa.value)));
    tabelaDeProdutos = resultado;
    carregarListaDeProdutos();
    tabelaDeProdutos = tabelaOriginal;
});
