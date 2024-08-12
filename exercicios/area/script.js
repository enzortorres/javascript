// PI * raio * raio
const PI = Math.PI

let raio = 10
let area = PI * raio ** 2
area = parseFloat(area.toFixed(2)) // para definer a quantidade de números após o "."
console.log(`O resultado da area é ${area}m²`)