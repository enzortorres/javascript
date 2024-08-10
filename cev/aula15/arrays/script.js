let num = [8,6,5,7,4]
// num[3] = 6 // ELE CRIA AUTOMATICAMENTE A CASA 3
// num.push(7) // ACRESCENTA MAIS UM VALOR COMO ULTIMA CASA
// num.length // PARA VER QUANTOS ELEMENTOS TEM NA ARRAY
// num.sort() // SORTEIA TODOS ELEMENTOS EM ORDEM CRESCENTE
// console.log(num)
// num.push(1)
// num.sort()
// console.log(num)
// console.log(`A array possuí ${num.length} posiçÕes`)
// console.log(`O primeiro valor da array é ${num[0]}`)
// for (let i = 0; i < num.length; i++) {
//     console.log(`O elemento ${i} tem valor ${num[i]}`)
// }
for (let i in num) {
    console.log(`O elemento ${i} tem valor ${num[i]}`)
}
console.log(num.indexOf(7))
console.log(num.indexOf(3))