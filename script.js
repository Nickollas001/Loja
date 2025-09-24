const containerDaListaDeProdutos = document.querySelector(".listaDeProdutos");
const campoDePesquisa = document.querySelector("#campoPesquisar");

// Lista de produtos individuais
const produtosIndividuais = [
    {
        nome: "Caneca Branca Personalizada",
        poster: "canecas/canecaBrancas/canecaBranca.png",
        link: "canecas/canecaBrancas/index.html"
    },
    {
        nome: "Creatina Max Titanium 300g",
        poster: "suplementos/creatine-max-titanium-300g-1.webp",
        link: "suplementos/CreatinaMaxTitanium.html"
    },
];

// Função para ordenar produtos por nome (ordem alfabética)
function ordenarPorNome(lista) {
    return lista.slice().sort((a, b) => {
        const nomeA = a.nome.toLowerCase();
        const nomeB = b.nome.toLowerCase();
        if (nomeA < nomeB) return -1;
        if (nomeA > nomeB) return 1;
        return 0;
    });
}

// Função que carrega a lista de produtos no container
function carregarListaDeProdutos(lista = produtosIndividuais) {
    containerDaListaDeProdutos.innerHTML = "";

    lista.forEach((item) => {
        containerDaListaDeProdutos.innerHTML += `
            <div class="produtos">
                <a href="${item.link}">
                    <img src="${item.poster}" alt="${item.nome}">
                </a>
                <h2 class="texto-produtos">${item.nome}</h2>
            </div>
        `;
    });
}

// Função para retirar acentos e normalizar texto para busca
function retirar_acentos(text){
    const a = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;';
    const b = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------';
    const p = new RegExp(a.split('').join('|'), 'g');
    return text.toString().toLowerCase().trim()
        .replace(p, c => b.charAt(a.indexOf(c)))
        .replace(/&/g, '-and-')
        .replace(/[\s\W-]+/g, ' ');
}

// Evento de busca (filtra e ordena os produtos conforme texto digitado)
campoDePesquisa.addEventListener("keyup", function () {
    const textoBusca = retirar_acentos(campoDePesquisa.value);

    if (textoBusca === "") {
        carregarListaDeProdutos(ordenarPorNome(produtosIndividuais));
        return;
    }

    const resultado = produtosIndividuais.filter(item =>
        retirar_acentos(item.nome).includes(textoBusca)
    );

    carregarListaDeProdutos(ordenarPorNome(resultado));
});

// Carrega a lista ordenada ao iniciar a página
carregarListaDeProdutos(ordenarPorNome(produtosIndividuais));
