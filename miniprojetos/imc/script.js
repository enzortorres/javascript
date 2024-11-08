function calcularImc() {
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);
    var res = document.getElementById('res');

    var imc = peso / (altura * altura);

    res.textContent = `IMC: ${imc.toFixed(2)}`;

    if (imc < 18.5) {
        res.textContent += " - Abaixo do peso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        res.textContent += " - Peso normal.";
    } else if (imc >= 25 && imc < 29.9) {
        res.textContent += " - Sobrepeso.";
    } else if (imc >= 30 && imc < 34.99) {
        res.textContent += " - Obesidade grau I.";
    } else if (imc >= 35 && imc < 39.99) {
        res.textContent += " - Obesidade grau II (severa).";
    } else {
        res.textContent += " - Obesidade grau III (mórbida).";
    }
}
