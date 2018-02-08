function seleciona(elemento) {

    return document.querySelector(elemento);
}


/* Selecionando os títulos, subtítulos e parágrafos */
var titulo = seleciona(".titulo");
var intro = seleciona(".intro");
var subTitulo = seleciona(".sub-titulo");
var corpo = seleciona(".corpo");


/* Trocando as cores */

var tituloAlerta = titulo.textContent == "Alerta!";
var tituloAviso = titulo.textContent == "Aviso!";
var subtituloAlerta = subTitulo.textContent == "Alerta!";
var subtituloAviso = subTitulo.textContent == "Aviso!";

if ( (tituloAlerta || tituloAviso) || (subtituloAlerta || subtituloAviso) ) {

    corpo.classList.add("cor-paragrafo-aviso-alerta");
    intro.classList.add("cor-paragrafo-aviso-alerta");
}
