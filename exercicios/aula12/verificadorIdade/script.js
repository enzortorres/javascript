function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Kid
                img.setAttribute('src', ) 
            } else if (idade < 21) {
                // Teen
            } else if (idade < 50) {
                // Adult
            } else {
                // Granny
            }
        } else { 
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Kid
            } else if (idade < 21) {
                // Teen
            } else if (idade < 50) {
                // Adult
            } else {
                // Granny
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}