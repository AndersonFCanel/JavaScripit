var botaoBuscaPacientes = document.querySelector("#buscar-pacientes");

botaoBuscaPacientes.addEventListener("click", function() {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {

        var spanErroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {

            spanErroAjax.classList.add("invisivel");

            var resposta = xhr.responseText;
            console.log(resposta);
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {

                adicionaPacienteNaTabela(paciente);
            });
        }

        else {
            spanErroAjax.classList.remove("invisivel");

            console.log(xhr.status);
            console.log(xhr.responseText);
        }


    });

    xhr.send();
});
