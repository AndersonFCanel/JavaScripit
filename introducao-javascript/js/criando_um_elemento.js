/*

Qual código Javascript cria uma <div> como esta?

<div>
    <h1 class="titulo">Mirror Fashion</h1>
    <p>Uma loja de roupa fantástica</p>
</div>

*/

function criaElemento(elemento, texto) {

    var elemento = document.createElement(elemento);
    elemento.textContent = texto;

    return elemento;
}


var div = document.createElement("div");

var h1 = criaElemento("h1", "Mirror Fashion");
h1.classList.add("titulo");

var p = criaElemento("p", "Uma loja de roupa fantástica");

div.appendChild(h1);
div.appendChild(p);

var body = document.querySelector("body");

body.appendChild(div);
