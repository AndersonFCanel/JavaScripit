function calculaPorcentagemCategoria(despesaCategoria, rendaTotal) {

    var formulaPorcentagemPorCategoria = (despesaCategoria / rendaTotal) * 100;
    return formulaPorcentagemPorCategoria.toFixed(1);
}

console.log(calculaPorcentagemCategoria(1532, 6255));
