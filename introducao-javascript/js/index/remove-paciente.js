var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {

    var alvoDoEvento = event.target;
    var paiDoAlvo = alvoDoEvento.parentNode;

    paiDoAlvo.classList.add("fade-out");

    setTimeout(function() {

        paiDoAlvo.remove();
    }, 500);
    
});
