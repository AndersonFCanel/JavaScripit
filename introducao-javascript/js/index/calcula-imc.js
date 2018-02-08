function calculaImc(peso, altura) {

    var formulaImc = peso / (altura * altura);
    return formulaImc.toFixed(2);
}

function validaPeso(peso) {

    if (peso >= 0 && peso <= 1000) {
        return true;
    }

    else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.00) {
        return true;
    }

    else {
        return false;
    }
}



var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

    /* Capturando os dados dos pacientes */
    var paciente = pacientes[i];

    var pesoTd = paciente.querySelector(".info-peso");
    var peso = pesoTd.textContent;

    var alturaTd = paciente.querySelector(".info-altura");
    var altura = alturaTd.textContent;

    var imcTd = paciente.querySelector(".info-imc");

    /* Validando peso e altura */
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        imcTd.textContent = "Peso inválido";
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        imcTd.textContent = "Altura inválida";
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        imcTd.textContent = imc;
    }
}
