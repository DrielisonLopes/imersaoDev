function adicionarJogador () {
    var nomeAdicionado = prompt("Qual o nome do novo Jogador?")
    var jogadorAdicionado = {
      nome: nomeAdicionado,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0,
    }
    jogadores.push(jogadorAdicionado)
    exibirJogadores(jogadores)
  }
  
  var jogadores = []
  
  function exibirJogadores(jogadores){
    var html = ""
    for (var i = 0; i < jogadores.length; i++){
      html += "<tr><td>" + jogadores[i].nome + "</td>";
      html += "<td>" + jogadores[i].vitorias + "</td>";
      html += "<td>" + jogadores[i].empates + "</td>";
      html += "<td>" + jogadores[i].derrotas + "</td>";
      html += "<td>" + jogadores[i].pontos + "</td>";
      html += "<td><button class='botao' onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
      html += "<td><button class='botao'onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
      html += "<td><button class='botao' onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = html;
  }
  
  exibirJogadores(jogadores)
  
  function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
  }
  
  function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador);
    exibirJogadores(jogadores)
  }
  
  function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador);
    exibirJogadores(jogadores)
  }
  
  function adicionarDerrota(i){
    var jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos = calculaPontos(jogador);
    exibirJogadores(jogadores)
  }
  