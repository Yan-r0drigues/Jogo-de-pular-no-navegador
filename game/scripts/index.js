import Player from "../classes/Player.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const groundY = canvas.height * 3;

canvas.width = innerWidth;
canvas.height = innerHeight;

ctx.imageSmoothingEnabled = false;

const player = new Player(canvas.width / 2, canvas.height);

const keys = {
    jump: false,
}

const gameLoop = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, groundY);
    ctx.lineTo(canvas.width, groundY);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;
    ctx.stroke();

    if (keys.jump === true) {
        player.jump();
    } 

    if (keys.jump === false) {
        player.down();
    }

    player.draw(ctx);
    requestAnimationFrame(gameLoop);
}

addEventListener("keydown", (event) => {
    const key = event.key.toLocaleLowerCase();

    if (key === "w") {
        keys.jump = true;
    }
});

addEventListener("keyup", (event) => {
    const key = event.key.toLocaleLowerCase();

    if (key === "w") keys.jump = false;
});


gameLoop();