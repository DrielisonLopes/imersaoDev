var cartaShishio = {
    nome: "Makoto Shihio",
    imagem: "http://2.bp.blogspot.com/-783DdKxraT8/TgzPQfaZChI/AAAAAAAAA_M/CfIvEprvAnk/s320/hk_shishio003.jpg",
    atributos: {
        ataque: 90,
        defesa: 90,
        magia: 90
    }
}

var cartaSeijuurou = {
    nome: "Seijuurou Hiko",
    imagem: "http://3.bp.blogspot.com/-A-21tyEcFVw/TgzOgY1u-FI/AAAAAAAAA_E/JQQz7NAXbVw/s320/hiko23.jpg",
    atributos: {
        ataque: 100,
        defesa: 100,
        magia: 100
    }
}

var cartaEnishi = {
    nome: "Enishi Yukishiro",
    imagem: "http://1.bp.blogspot.com/-iT1tleovpXg/TgzNXDESNHI/AAAAAAAAA-8/VcFQlE62wyI/s320/rk_enishi1.jpg",
    atributos: {
        ataque: 88,
        defesa: 90,
        magia: 80
    }
}

var cartaSaitou = {
    nome: "Hajime Saitou",
    imagem: "http://2.bp.blogspot.com/-rMZSSO07H4c/TgzL-Sfln9I/AAAAAAAAA-s/9Kiu932Yv2U/s320/saito_hajime_rurouni_kenshin.jpg",
    atributos: {
        ataque: 88,
        defesa: 88,
        magia: 50
    }
}

var cartaKenshin = {
    nome: "Kenshin Himura",
    imagem: "https://i.pinimg.com/originals/66/52/a9/6652a954fa914ab8537f724f792f03d8.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 80
    }
}

var cartaAoshi = {
    nome: "Aoshi Shinomori",
    imagem: "http://2.bp.blogspot.com/-fB7h-PvFUKs/TgzON_METXI/AAAAAAAAA_A/BUqiiaAKnUA/s320/aoshi5.jpg",
    atributos: {
        ataque: 70,
        defesa: 80,
        magia: 70
    }
}

var cartaSanosuke = {
    nome: "Sanosuke Sagara",
    imagem: "http://img1.wikia.nocookie.net/__cb20131007234631/kenshin/pt-br/images/c/c9/Sanosuke.jpg",
    atributos: {
        ataque: 65,
        defesa: 80,
        magia: 65
    }
}

var cartaJinei = {
    nome: "Jin-ei Udou",
    imagem: "https://buffy.mlpforums.com/blog-0330363001346475295.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 90
    }
}

var cartaBattousai = {
    nome: "Battousai Himura",
    imagem: "https://wallpaperaccess.com/full/370531.jpg",
    atributos: {
        ataque: 99,
        defesa: 90,
        magia: 90
    }
}

var cartaYahiko = {
    nome: "Yahiko miojin",
    imagem: "http://1.bp.blogspot.com/-HhihLYQj1gg/TgzMQypY83I/AAAAAAAAA-w/boIUlGf0UzA/s320/YAHIKO.jpg",
    atributos: {
        ataque: 50,
        defesa: 40,
        magia: 0
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaShishio, cartaSeijuurou, cartaEnishi, cartaSaitou, cartaKenshin, cartaAoshi, cartaSanosuke, cartaJinei, cartaBattousai, cartaYahiko]
//            0           1           2          3         4            5            6           7            8           9               10

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Maquina"

    divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if (cartas.length == 0) {
        alert("Fim de jogo")
        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Você venceu Samurai!</p>'
        } else if (pontosMaquina > pontosJogador) {
            htmlResultado = '<p class="resultado-final">Você foi derrotado!</p>'
        } else {
            htmlResultado = '<p class="resultado-final">Empatou!</p>'
        }
    } else {
        document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
}