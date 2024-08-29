const resultadoAluno = function (nota) {
    switch(Math.floor(nota)) {
        case 10: case 9:
            console.log('Meus parabéns!')
            break
            
        case 8: case 7:
            console.log('Aprovado!')
            break
            
        case 6: case 5: case 4:
            console.log('Recuperação!')
            break
            
        case 3: case 2: case 1: case 0:
            console.log('Reprovado!')
            break
            
        default: 
            console.log('Nota inválida!')
    }
}

resultadoAluno(10)
resultadoAluno(8.9)
resultadoAluno(6.55)
resultadoAluno(-1)
resultadoAluno(11)
resultadoAluno(1100)
resultadoAluno(0)

var temp = 20
var status = ''

switch(temp) {
    case(temp < 15):
        status = 'Frio'
        break

    case(temp >= 15 && temp < 25):
        status = 'Agradavel'
        break

    case(temp >= 25):
        status = 'Quente'
        break

    default:
        status = 'Temperatura inválida'
}