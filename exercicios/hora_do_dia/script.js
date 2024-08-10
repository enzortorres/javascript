function carregar() {
    var txt = document.querySelector("div#text")
    var img = document.querySelector("img#imagem")
    var agora = new Date()
    var hora = agora.getHours()
    var minuto = agora.getMinutes()
    
    txt.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`
    if (hora >= 0 && hora < 12) {
        img.src = 'images/manha.jpg'
        document.body.style.background = '#FCD0A2'
    } else if (hora < 18) {
        img.src = 'images/tarde.jpg'
        document.body.style.background = '#F37308'
    } else {
        img.src = 'images/noite.jpg'
        document.body.style.background = '#6B6BF1'
    }
}
