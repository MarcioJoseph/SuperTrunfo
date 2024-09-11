var carta1 = {
    nome: "Guts",
    imagem:
      "https://i.pinimg.com/originals/16/4b/ea/164beabbaacec4ce3071b13c9339b3b4.gif",
    atributos: {
      Carisma: 4,
      Habilidade: 9,
      Foco: 8
    }
  };
  
  var carta2 = {
    nome: "King",
    imagem:
      "https://i.pinimg.com/originals/27/64/d6/2764d6d288891d96150d534837dfcc4d.gif",
    atributos: {
      Carisma: 9,
      Habilidade: 1,
      Foco: 2
    }
  };
  
  var carta3 = {
    nome: "Yumeko",
    imagem:
      "https://i.pinimg.com/originals/b9/6c/55/b96c55affb97873a4de1c4f36090fc76.gif",
    atributos: {
      Carisma: 7,
      Habilidade: 8,
      Foco: 7
    }
  };
  
  var carta4 = {
    nome: "Kim",
    imagem: "https://fightersgeneration.com/characters2/kim-nicemoves.gif",
    atributos: {
      Carisma: 5,
      Habilidade: 8,
      Foco: 7
    }
  };
  
  var carta5 = {
    nome: "Xena",
    imagem: "https://media.tenor.com/TAMYWLcgk1AAAAAC/xena-sword.gif",
    atributos: {
      Carisma: 5,
      Habilidade: 8,
      Foco: 6
    }
  };
  
  var carta6 = {
    nome: "Beatrix",
    imagem:
      "https://media.vogue.co.uk/photos/652966b3191e1aeb4de0bc22/1:1/w_242,h_242,c_limit/08-beatrix-kiddo-kill-bill.gif",
    atributos: {
      Carisma: 5,
      Habilidade: 9,
      Foco: 9
    }
  };
  
  var carta7 = {
    nome: "Nobara",
    imagem: "https://c.tenor.com/5M8sdidgArYAAAAd/jujutsu-kaisen-nobara.gif",
    atributos: {
      Carisma: 7,
      Habilidade: 6,
      Foco: 6
    }
  };
  
  var carta8 = {
    nome: "Ocelot",
    imagem: "https://c.tenor.com/NL5gtpdYcugAAAAC/revolver-ocelot-gaming.gif",
    atributos: {
      Carisma: 9,
      Habilidade: 9,
      Foco: 9
    }
  };
  
  var carta9 = {
    nome: "Takamura",
    imagem: "https://media.tenor.com/Pi8vJvu3lWgAAAAC/takamura-hajimenoippo.gif",
    atributos: {
      Carisma: 10,
      Habilidade: 8,
      Foco: 9
    }
  };
  
  var carta10 = {
    nome: "Clementine",
    imagem:
      "https://media.tenor.com/9h7Fuvd5EAUAAAAC/the-walking-dead-clementine.gif",
    atributos: {
      Carisma: 6,
      Habilidade: 8,
      Foco: 8
    }
  };
  
  var carta11 = {
    nome: "Erwin",
    imagem: "https://media.tenor.com/d0WCJfhrUxcAAAAd/aot.gif",
    atributos: {
      Carisma: 3,
      Habilidade: 6,
      Foco: 10
    }
  };
  
  var carta12 = {
    nome: "Kaguya",
    imagem: "https://media.tenor.com/d5Ki2wL3UccAAAAC/kaguya-sama.gif",
    atributos: {
      Carisma: 5,
      Habilidade: 10,
      Foco: 6
    }
  };

  var carta13 = {
    nome: "Kara",
    imagem: "https://64.media.tumblr.com/51ff24fea4675e239599f57759c5aca4/tumblr_pb3d4lBX4R1vq5v6do1_540.gif",
    atributos: {
        Carisma: 2,
        Habilidade: 9,
        Foco: 9
    }
  };

  var carta14 = {
    nome: "Zero",
    imagem: "https://pa1.aminoapps.com/6691/ea760b5e28d212512e3618768cd740c68cf46e68_hq.gif",
    atributos: {
        Carisma: 5,
        Habilidade: 8,
        Foco: 7
    }
  };
  
  var cartas = [
    carta1,
    carta2,
    carta3,
    carta4,
    carta5,
    carta6,
    carta7,
    carta8,
    carta9,
    carta10,
    carta11,
    carta12,
    carta13,
    carta14
  ];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 14);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 14);
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 14);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    document.getElementById("resultado").innerHTML = "";
  
    exibirCartaJogador();
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    // var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    // var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
    var botaoJogarNovamente = document.getElementById("btnJogarNovamente");
    var divResultado = document.getElementById("resultado");
    var botaoJogar = document.getElementById("btnJogar");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      //elementoResultado.innerHTML = "você venceu";
      htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Perdeu</p>";
      //elementoResultado.innerHTML = "você perdeu, a carta da maquina é maior";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou</p>";
      //elementoResultado.innerHTML = "empatou";
    }
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnSortear").disabled = true;
    botaoJogar.disabled = true;
    botaoJogarNovamente.disabled = false;
  
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    //  divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id= 'opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function reiniciar() {
    var botaoJogar = document.getElementById("btnJogar");
    var botaoSortear = document.getElementById("btnSortear");
    var botaoJogarNovamente = document.getElementById("btnJogarNovamente");
    var elementoResultado = document.getElementById("resultado");
    var opcoes = document.getElementById("opcoes");
  
    cartaJogador = "";
    cartaMaquina = "";
    elementoResultado.innerHTML = "";
    opcoes.innerHTML = "";
  
    botaoJogar.disabled = true;
    botaoSortear.disabled = false;
    botaoJogarNovamente.disabled = false;
  }
  