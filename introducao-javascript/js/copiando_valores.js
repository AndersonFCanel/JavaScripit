function adicionaFraseDigitada() {

    var inputFrase = document.querySelector(".frase");
    var span = document.querySelector(".copia");

    span.textContent = inputFrase.value;

    inputFrase.value = "";
    inputFrase.focus();
}

var botaoCopiar = document.querySelector(".botao");

botaoCopiar.addEventListener("click", adicionaFraseDigitada);
