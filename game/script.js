const container = document.createElement("div");
container.className = "container";

const player = document.createElement("div");
player.className = "player";
player.style.backgroundImage = "url('./img/player.png')";
player.style.backgroundSize = "cover";

const object = document.createElement("div");
object.className = "object";
object.style.backgroundImage = "url('./img/box.png')";
object.style.backgroundSize = "cover";

let score = 0;
let ultimaLegenda = "";

const nivelUsuario = function () {
  if (score < 5) {
    return "Noob 🤓";
  } else if (score <= 10) {
    return "Baby 👶";
  } else if (score <= 15) {
    return "GEINF hardcore 😎";
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

const loopObject = function () {
  let posicao = window.innerWidth - 40;
  let tamanhoAleatorio = gerarNumeroAleatorio(40, 80);

  setInterval(() => {
    posicao -= velocidadeObjeto;
    object.style.right = window.innerWidth - posicao + "px";

    if (posicao <= -40) {
      posicao = window.innerWidth;
      tamanhoAleatorio = gerarNumeroAleatorio(40, 70);
      object.style.height = tamanhoAleatorio + "px";
      object.style.width = tamanhoAleatorio + "px";
      velocidadeObjeto++;
      score++;
      scoreText.innerText = legendaScore();
    }

    const playerRect = player.getBoundingClientRect();
    const objectRect = object.getBoundingClientRect();

    const colisao =
      playerRect.right > objectRect.left &&
      playerRect.left < objectRect.right &&
      playerRect.bottom > objectRect.top &&
      playerRect.top < objectRect.bottom;

    if (colisao) {
      let message = `GAME OVER!! \nSCORE: ${score}`;

      if (ultimaLegenda != "") {
        message += `\nULTIMO SCORE: ${ultimaLegenda}`;
      }

      alert(message);

      ultimaLegenda = legendaScore();

      posicao = window.innerWidth;
      score = 0;
      scoreText.innerText = legendaScore();
      velocidadeObjeto = 9;
    }
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

container.appendChild(player);
container.appendChild(object);
document.body.appendChild(scoreText);
document.body.appendChild(container);

loopObject();
