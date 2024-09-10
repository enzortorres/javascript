const universidade = "unilasalle"

console.log(universidade.charAt(4))
if (universidade.charAt(10) == '') {
    console.log("Não encontrei!")
} else {
    console.log(universidade.charAt(10))
}

console.log(universidade.charCodeAt(3))
console.log(universidade.indexOf('e'))

console.log(universidade.substring(1)) // mostre a string a partir do indíce 1
console.log(universidade.substring(0,3)) // mostre a string a partir do indíce 0 até o indíce 3

console.log('universidade '.concat(universidade).concat('!'))
console.log('universidade ' + universidade + '!')
console.log(universidade.replace('e', 3))
console.log(universidade.replace(/\w/g, 3)) // /\d/ é uma expressão regular, serve para substituir todos os digítos. /\w\ para as letras e se botar a tag g no final substituí tudo.
console.log('    Remove whitespace   '.trim());

console.log('Ana, Maria, Pedro'.split(','))
const up = text => text.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)