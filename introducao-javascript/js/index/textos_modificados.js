function pega(elemento) {

    var elemento = document.querySelector(elemento);
    return elemento;
}

var tituloPrincipal = pega(".titulo-principal");

tituloPrincipal.textContent = "Aparecida Nutricionista";
