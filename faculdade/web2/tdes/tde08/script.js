// var contadorA = 0; //! EXERCÍCIO 1
// var reset = document.getElementById('reset')

// document.addEventListener('keydown', (event) => {
//     if (event.key == 'a' || event.key == 'A') {
//         contadorA += 1;
//     }
//     document.getElementById('res').innerText = `Quantidade de a's digitados: ${contadorA}`
// })

// reset.addEventListener('click', () => {
//     contadorA = 0;
//     document.getElementById('res').innerText = `Quantidade de a's digitados: ${contadorA}`
// })




// document.addEventListener('keydown', (event) => { //! EXERCÍCIO 3
//     if (event.ctrlKey) {
//         if(event.key === 's') {
//             event.preventDefault();
//             document.getElementById('res').innerText = 'Projeto salvo!'
//         }
//     }
//     if(event.ctrlKey) {
//         if (event.key === 'p') {
//             event.preventDefault();
//             document.getElementById('res').innerText = 'Projeto impresso'
//         }
//     }

//     setTimeout(() => {
//         document.getElementById('res').innerText = ''
//     }, 1500)
// })
