// // Considere o seguinte código JavaScript:
// const arr = [1, 2, 3, 4, 5]
// const filteredArr = arr.filter(function(element, index) { // Metodo filter() percorre todos elementos do array, os elementos que atendem a condição entram no novo array
//     return element % 2 === 0
// })
// console.log(filteredArr)

// // Com base no código apresentado, qual é o resultado exibido no console após a
// // execução do código?
// // a) [2, 4] <-
// // b) [1, 3, 5]
// // c) [1, 2, 3, 4, 5]
// // d) [false, true, false, true, false]


const produtos = [
    {
        nome: "Tenis",
        imagem: "https://unisport.fbitsstatic.net/img/p/tenis-nike-metcon-9-prm-feminino-preto-color-151423/340869-1.jpg?w=256&h=256",
        preco: 349.99
    },
    {
        nome: "Camisa",
        imagem: "https://unisport.fbitsstatic.net/img/p/camiseta-nike-dri-fit-slub-masculino-verde-musgo-153202/343667-1.jpg?w=256&h=256",
        preco: 110.99
    },
    {
        nome: "Casaco",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTluiCUguhDKCrV0toSzlz1mDahCG8SKYDXRw&s",
        preco: 249.99
    }
]

const container = document.createElement("div");
document.body.appendChild(container);

function criarCards(produtos) {
    produtos.forEach((produto) => {
        const card = document.createElement("div");
        
        const img = document.createElement("img");
        img.src = produto.imagem;
        card.appendChild(img);

        const nome = document.createElement("h1");
        nome.textContent = produto.nome;
        card.appendChild(nome);

        const preco = document.createElement("p");
        preco.textContent = produto.preco;
        card.appendChild(preco);

        const botao = document.createElement("button");
        botao.textContent = "Comprar";
        botao.addEventListener("click", () => {
            alert(`Você comprou um ${produto.nome}`);
        })
        card.appendChild(botao);

        container.appendChild(card);
    })
}



criarCards(produtos);