var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var txt = document.querySelector("div#text")
var corpo = document.body;
txt.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`

if (hora < 12) {

} else if (hora < 18) {

} else {
    
}

