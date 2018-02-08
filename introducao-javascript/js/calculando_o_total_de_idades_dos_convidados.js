function criaListaConvidados() {

    var itens = document.querySelectorAll(".convidado");

    var convidados = [];

    for(var i = 0; i < itens.length; i++) {

        var convidado = {

            nome: itens[i].querySelector(".nome").textContent,
            idade: parseInt(itens[i].querySelector(".idade").textContent)
        }

        convidados.push(convidado);
    }

    return convidados;
}

function calculaTotalIdades(convidados) {

    var total = 0;

    for(var i = 0; i < convidados.length; i++) {

        total = total + convidados[i].idade;
    }

    return total;
}

function exibeTotalIdades(total) {

    document.querySelector(".total").textContent = total;
}


var convidados = criaListaConvidados();
var totalIdades = calculaTotalIdades(convidados);

exibeTotalIdades(totalIdades);
