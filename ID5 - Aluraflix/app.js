function adicionarFilme() {
  
    var campoFilmeFavorito = document.getElementById('filme')
    console.log(campoFilmeFavorito)
    
    var filmeFavorito = campoFilmeFavorito.value
    if (filmeFavorito.endsWith('.jpg')) {
        listarFilmesNaTela(filmeFavorito)
    } else {
        alert("Imagem inválida")
    }
    campoFilmeFavorito.value = ""
}

function listarFilmesNaTela(filme) {
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}