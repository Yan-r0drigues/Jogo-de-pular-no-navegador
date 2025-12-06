export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.entities = [];
    this.lastTime = 0;

    this.ctx.imageSmoothingEnabled = false;
  }

  addEntity(entity) {
    this.entities.push(entity);
  }

  start() {
    requestAnimationFrame(this.loop.bind(this));
  }

  loop(timestamp) {
    const delta = timestamp - this.lastTime;
    this.lastTime = timestamp;

    this.update(delta);
    this.draw();

    requestAnimationFrame(this.loop.bind(this));
  }

  update(delta) {
    for(let entity of this.entities) {
        entity.update(delta);
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let entity of this.entities) {
      entity.draw(this.ctx);
    }
  }
}