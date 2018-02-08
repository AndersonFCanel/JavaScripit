var produtosLi = document.querySelectorAll(".produto");

for (var i = 0; i < produtosLi.length; i++) {

    var produto = produtosLi[i];

    var textoProdutos = produto.textContent;

    console.log(textoProdutos);
}
