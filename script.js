document.querySelector('input[type="button"]').addEventListener('click', function() {
    const nome = document.querySelector('#name input').value;
    const alturaCm = parseFloat(document.querySelector('#height input').value);
    const peso = parseFloat(document.querySelector('#weight input').value);

    if (!nome || isNaN(alturaCm) || isNaN(peso)) {
        return;
    }

    const alturaM = alturaCm / 100;
    const imc = peso / (alturaM * alturaM);

    let classificacao = '';
    if (imc < 16) {
        classificacao = 'Baixo peso muito grave';
    } else if (imc >= 16 && imc < 16.99) {
        classificacao = 'Baixo peso grave';
    } else if (imc >= 17 && imc < 18.49) {
        classificacao = 'Baixo peso';
    } else if (imc >= 18.50 && imc < 24.99) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.99) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.99) {
        classificacao = 'Obesidade grau I';
    } else if (imc >= 35 && imc < 39.99) {
        classificacao = 'Obesidade grau II';
    } else {
        classificacao = 'Obesidade grau III';
    }

    document.querySelector('#resultado').textContent = `${nome} possui índice de massa corporal igual a ${imc.toFixed(2)}, sendo classificado como: ${classificacao}.`;
});
