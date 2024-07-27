var agora = new Date()
var horas = agora.getHours()
var minutos = agora.getMinutes()
console.log(`Agora são exatamente ${horas} horas e ${minutos} minutos.`)
if (horas < 6) {
    console.log(`Boa madrugada!`)
} else if (horas < 12) {
    console.log(`Bom dia!`)
} else if (horas < 18) {
    console.log(`Boa tarde!`)
} else if (horas <= 24) {
    console.log(`Boa noite!`)
} else {
    console.log(`Hora digitada inválida!`)
}