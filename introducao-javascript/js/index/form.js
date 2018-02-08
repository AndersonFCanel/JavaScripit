function criaPaciente(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTd(texto, classe) {

    var td = document.createElement("td");
    td.textContent = texto;
    td.classList.add(classe);

    return td;
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function validaPaciente(paciente) {

    var erros = [];

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura inválida");
    }

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode estar em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode estar em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode estar em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode estar em branco");
    }

    return erros;
}

function exibeMensagemDeErro(erros) {

    var ulMensagensErro = document.querySelector("#mensagens-erro");
    ulMensagensErro.innerHTML = "";

    erros.forEach(function(erro) {

        var li = document.createElement("li");
        li.textContent = erro;

        ulMensagensErro.appendChild(li);
    });
}

function adicionaPacienteNaTabela(paciente) {

    var trPaciente = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(trPaciente);
}



var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event) {

    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = criaPaciente(form);

    var erros = validaPaciente(paciente);
    if (erros.length > 0) {

        exibeMensagemDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente)

    form.reset();

    var ulMensagensErro = document.querySelector("#mensagens-erro");
    ulMensagensErro.innerHTML = "";
});
