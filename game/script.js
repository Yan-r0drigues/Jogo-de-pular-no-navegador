const jumping = (()=>{

  const cenario = ()=>{}
  const controleJogo = ()=>{
    const verificarColisao =(objetoA, objetoB)=>{
      return objetoA.right > objetoB.left &&
      playobjetoAerRect.left < objetoB.right &&
      objetoA.bottom > objetoB.top &&
      objetoA.top < objetoB.bottom;

    }
    return{}
  }
  const player = ()=>{}
  const obstaculos = ()=>{}
  const pickups = ()=>{}
  
  const controles = ()=>{}

  const criarContainer = ()=>{}
  const initMensagens = ()=>{}
  const initPlayer = ()=>{}
  const initCaixas = ()=>{}
  const initScore = ()=>{}
  const init = ()=>{
      criarContainer();
      initMensagens();
      initPlayer();
      initCaixas();
      initScore();
  }
  return{
     init : init
  }
})();
jumping.init();












const container = document.createElement("div");
container.className = "container";

const player = document.createElement("div");
player.className = "player";
player.style.backgroundImage = "url('./img/player-01.png')";
player.style.backgroundSize = "cover";





const caixa = {
    elemento : null,    
    height:0,
    width:0,
    x:0,
    y:0,
    velocidade:0
}
const criarCaixa = ()=>{
      const c = document.createElement("div");
      c.className = "caixa";
      c.style.backgroundImage = "url('./img/box.png')";
      c.style.backgroundSize = "cover";
      return c;
    }


const mensagem = document.createElement("div");
mensagem.className = "mensagem";
mensagem.innerHTML = `
  <h1>GAME OVER!</h1>
  <a href="#">Restart</a>`;

mensagem.style.display = "none";
document.body.appendChild(mensagem);

const playerFrames = [
  "./img/player.png",
  "./img/player-01.png",
  "./img/player-02.png",
  "./img/player-03.png",
  "./img/player-04.png"
];
let frameIndex = 0;

let score = 0;
let ultimaLegenda = "";

const nivelUsuario = function () {
  if (score < 5) {
    return "Noob 🤓";
  } else if (score <= 10) {
    return "Baby 👶";
  } else if (score <= 15) {
    return "Hardcore 😎";
  } else if (score <= 20) {
    return "Jogador profissional 👾";
  } else {
    return "HACKER 💀";
  }
};

const legendaScore = function () {
  return "SCORE: " + score + " | NÍVEL: " + nivelUsuario();
};

const scoreText = document.createElement("div");
scoreText.className = "scoreText";
scoreText.innerText = legendaScore();

let pulando = false;
let velocidadeObjeto = 9;
let subindo = false;
let botaoPressionado = false;
const puloMaximo = 200;
const puloMetade = 100;
let contadorInterval = null;

const pular = function () {
  if (pulando) return;

  pulando = true;
  let altura = 30;
  subindo = true;

  const intervalo = setInterval(() => {
    if (subindo) {
      altura += 6;
      player.style.bottom = altura + "px";

      if (altura >= puloMaximo) {
        subindo = false;
      } else {
        if (altura <= puloMetade) {
          altura += 6;
          player.style.bottom = altura + "px";
        }
      }
    } else {
      altura -= 6;
      player.style.bottom = altura + "px";

      if (altura <= 30) {
        clearInterval(intervalo);
        player.style.bottom = "30px";
        pulando = false;
      }
    }
  }, 20);
};

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const loopcaixa = function () {
  let posicao = window.innerWidth - 40;
  let tamanhoAleatorio = gerarNumeroAleatorio(40, 80);

  setInterval(() => {
    frameIndex = (frameIndex + 1) % playerFrames.length;
    player.style.backgroundImage = `url('${playerFrames[frameIndex]}`

    if (pulando === true) {
      player.style.backgroundImage = `url('${playerFrames[0]}`
    }

  }, 135);

  setInterval(() => {
    posicao -= velocidadeObjeto;
    caixa.style.right = window.innerWidth - posicao + "px";

    if (posicao <= -40) {
      posicao = window.innerWidth;
      tamanhoAleatorio = gerarNumeroAleatorio(40, 70);
      caixa.style.height = tamanhoAleatorio + "px";
      caixa.style.width = tamanhoAleatorio + "px";
      velocidadeObjeto++;
      score++;
      scoreText.innerText = legendaScore();
    }

    const playerRect = player.getBoundingClientRect();
    const caixaRect = caixa.getBoundingClientRect();

    const colisao =
      playerRect.right > caixaRect.left &&
      playerRect.left < caixaRect.right &&
      playerRect.bottom > caixaRect.top &&
      playerRect.top < caixaRect.bottom;

    if (colisao) {
      mensagem.style.display = "flex";
      ultimaLegenda = legendaScore();
      posicao = window.innerWidth;
      score = 0;
      scoreText.innerText = legendaScore();
      velocidadeObjeto = 9;
    }
    // else {
    //   teste = setInterval( )
    // }
  }, 20);
};

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && !botaoPressionado && !pulando) {
    botaoPressionado = true;
    pular();
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code === "Space") {
    botaoPressionado = false;
    contadorInterval = setTimeout(() => {
      if (puloMetade <= puloMaximo) {
        subindo = false;
      }
    }, 100);
  }
});

document.addEventListener("click", (e) => {
  mensagem.style.display = "none";
});

container.appendChild(player);
container.appendChild(caixa);
document.body.appendChild(scoreText);
document.body.appendChild(container);

loopcaixa();
