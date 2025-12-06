import Game from "./engine/Game.js";
import Input from "./engine/Input.js";
import Player from "./entities/Player.js";

const canvas = document.querySelector("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;

const game = new Game(canvas);
const input = new Input();

const groundY = canvas.height - 100;

const player = new Player(200, groundY, input);
game.addEntity(player);

game.start();