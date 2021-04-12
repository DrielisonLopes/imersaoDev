var cartaMadara = {
    nome: "MADARA",
    atributos: {
      ataque: 9998,
      defesa: 9998,
      magia: 9999
    }
  }
  var cartaChuck = {
    nome: "CHUCK NORRIS",
    atributos: {
      ataque: 9998,
      defesa: 9999,
      magia: 9998
    }
  }
  var cartaSaitama = {
    nome: "SAITAMA",
    atributos: {
      ataque: 9999,
      defesa: 9998,
      magia: 9998 
    }
  }
  
  var cartaMaquina = "";
  var cartaJogador = "";
  var cartaMaquinaImg = "";
  var cartaJogadorImg = "";
  var cartas = [cartaMadara, cartaChuck, cartaSaitama];
  var baralho = ["https://pm1.narvii.com/6234/36747717a91ffd2b106a06f9231189a3e2d934c7_hq.jpg", "https://pm1.narvii.com/6234/deb7547900ed566e694649ffdea55d4c175489e5_hq.jpg", "https://i.imgur.com/J8CKbvk.jpg"];
  
  var numero = "";
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
    
    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    cartaJogadorImg = baralho[numeroCartaJogador];
    carta.innerHTML = "<img src='" + cartaJogadorImg + "'>";
    console.log(cartaJogador);
    
    
    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;
    exibirOpcoes();
    
    return numero = numeroCartaMaquina;
  }
  
  function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes');
    var opcoesTexto = "";
    for(var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo');
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
      resultado.innerHTML = "Parabéns! Você venceu a carta máquina";
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
      resultado.innerHTML = "Você Perdeu. A carta da máquina é maior, tente novamente";
    } else {
      resultado.innerHTML = "Empatou!";
    }
    
    cartaMaquinaImg = baralho[numero];
    maquina.innerHTML = "<img src='" + cartaMaquinaImg + "'>";
    console.log(cartaMaquina);
  }
  
  //Paulinho quero fazer parte do time Alura!