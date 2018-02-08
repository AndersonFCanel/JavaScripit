function pega(elemento) {

    var elemento = document.querySelector(elemento);
    return elemento;
}

function criaNovaLi(texto) {

    var li = document.createElement("li");
    li.textContent = texto;

    return li;
}


var botaoAdicionar = pega("#botao");
var lista = pega(".lista");

botaoAdicionar.addEventListener("click", function() {

    var input = pega("input");
    var novaLi = criaNovaLi(input.value);

    lista.appendChild(novaLi);

    input.value = "";
    input.focus();
});


lista.addEventListener("click", function(event) {

    console.log(event.target.textContent);
});
