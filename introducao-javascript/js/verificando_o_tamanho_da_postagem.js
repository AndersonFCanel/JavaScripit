function atualizaCaracteres() {

    var mensagem = document.querySelector("#corpo-postagem").value;
    var numeroDeCaracteres = mensagem.length;

    var spanQuantidade = document.querySelector("#numero-caracteres");
    spanQuantidade.innerHTML = numeroDeCaracteres;
}

var campoMensagem = document.querySelector("#corpo-postagem");

campoMensagem.addEventListener("input", atualizaCaracteres);
