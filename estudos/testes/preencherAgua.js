// básicamente são pilares, quando chove, preenche de água entre os pilares, como no exemplo

/*
    *Pilares vazios
          |
      | | |
    | | | |
    -------

    *Choveu

          |
      |A|A|
    |A|A|A|
    -------
*/

const pilares = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

let maiorEsq = [0,0,0,0,0,0,0,0,0,0,0,0];
for (let i = 1; i < pilares.length; i++) {
    maiorEsq[i] = Math.max(maiorEsq[i - 1], pilares[i - 1]);
}

let maiorDir = [0,0,0,0,0,0,0,0,0,0,0,0];
for (let i = pilares.length - 2; i >= 0; i--) {
    maiorDir[i] = Math.max(maiorDir[i + 1], pilares[i + 1]);
}

// console.log(maiorDir)
// //* console.log(Math.max(...maiorDir)) // spread operator ("espalha" os elentos de um array, passa cada elemento do array como um argumento individual para a função)
// // console.log(...maiorDir)
// console.log(maiorEsq)
// // console.log(Math.max(...maiorEsq))
// // console.log(...maiorEsq)


//TODO [ 0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3 ] maior esquerda
//TODO [ 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1, 0 ] maior direita
//!    [ 0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 ] pilares

let blocoAgua = 0; 
for (let i = 0; i < pilares.length; i++) {
    const alturaAgua = Math.min(maiorEsq[i], maiorDir[i]) - pilares[i]; //? 0, -1, 1, -1, 1, 2, 1, -1, 0, 1, -1, -1, -1
    if (alturaAgua > 0) {
        blocoAgua += alturaAgua; //? 0, 0, 1, 1, 2, 4, 5, 5, 5, 6, 6, 6, 6
    } 
}

console.log(`A quantidade de blocos de poça formados foram: ${blocoAgua}`);