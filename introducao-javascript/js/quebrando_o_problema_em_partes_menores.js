function pega(elemento) {

    var elemento = document.querySelector(elemento);
    return elemento;
}

function multiplica(num1, num2) {

    var multiplicacao = num1 * num2;
    return multiplicacao;
}


var botao = pega(".botao");

botao.addEventListener("click", function() {

    var inputN1 = pega(".numero");

    var inputN2 = pega(".tabuada");

    var resultado = multiplica(inputN1.value, inputN2.value);

    var spanResultado = pega(".resultado");
    spanResultado.textContent = resultado;

    inputN1.value = "";
    inputN2.value = "";

    inputN1.focus();
});
