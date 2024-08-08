valor1 = prompt('Digite um valor: ')
valor2 = prompt('Digite um valor: ')
oper = prompt("Selecione o operador: (+, -)")
valor3 = prompt('Digite um valor: ')
valor4 = prompt('Digite um valor: ')
numero1 = valor1 + valor2
numero2 = valor3 + valor4
numero1 = Number(numero1)
numero2 = Number(numero2)
if (oper == '+') {
    res = numero1 + numero2
} else if (oper == '-') {
    res = valor1 - valor2
}
alert(`Resultado: ${res}`)


// const nomeCap = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()
// document.write(`O nome é ${nomeCap} e tem ${idade} anos.`) 