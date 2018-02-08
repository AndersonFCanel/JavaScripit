function calculaTaxaDeSucesso(vendas, clientesAbordados, mediaTentativas) {

    var formulaTaxa = vendas / (clientesAbordados * mediaTentativas);
    return formulaTaxa;
}

var taxaDeSucesso = calculaTaxaDeSucesso(10, 25, 4);

console.log(taxaDeSucesso);
