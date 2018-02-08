function criaLi(texto) {

    var li = document.createElement("li");
    li.textContent = texto;
    return li;
}

var botaoAdicionar = document.querySelector(".adicionar-tarefa");

botaoAdicionar.addEventListener("click", function(event) {

    event.preventDefault();

    var input = document.querySelector("input");
    var lista = document.querySelector(".afazeres");

    var li = criaLi(input.value);

    lista.appendChild(li);

    input.value = "";
    input.focus();
});
