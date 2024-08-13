// PI * raio * raio
const PI = Math.PI

let raio = 10
let area = PI * Math.pow(raio, 2)
console.log(`O resultado da area é ${area.toFixed(2)}m²`) //  toFixed() serve para definir 2 casas de limite após a vírgula.
console.log(`O resultado da area é ${area.toString(2)}m²`) //  toString(2) serve para mostrar o número como binário.
console.log(typeof area)
console.log(typeof Number)
console.log(typeof Math)