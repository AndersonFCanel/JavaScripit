function pega(elemento) {

    var elementoCapturado = document.querySelector(elemento);
    return elementoCapturado;
}


console.log("Prato do dia!");

var tds = document.querySelectorAll("td");

for (var i = 0; i < tds.length; i++) {

    var segundaFeira = pega("#segunda");

    var paiDasTds = tds[i].parentNode;

    if (paiDasTds == segundaFeira) {

        console.log(tds[i].textContent);
    }
}
