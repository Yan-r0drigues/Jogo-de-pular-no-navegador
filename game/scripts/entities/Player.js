import SpriteAnimator from "../core/SpriteAnimator.js";
import Physics from "../engine/Physics.js";

export default class Player {
  constructor(x, groundY, input) {
    this.width = 128;
    this.height = 128;

    this.position = { x: 0, y: groundY - this.height };
    this.velocity = { x: 0, y: 0 };
    this.gravity = 1;

    this.onGround = true;

    this.input = input;
    this.groundY = groundY;

    this.animRight = new SpriteAnimator(
      [
        "./img/jobinho-01.png",
        "./img/jobinho-02.png",
        "./img/jobinho-03.png",
        "./img/jobinho-04.png",
      ],
      80
    );

    this.animLeft = new SpriteAnimator(
      [
        "./img/jobinho-01-left.png",
        "./img/jobinho-02-left.png",
        "./img/jobinho-03-left.png",
        "./img/jobinho-04-left.png",
      ],
      80
    );

    this.animIdle = new SpriteAnimator(["./img/jobinho-01.png"], 500);

    this.currentAnim = this.animIdle;
  }

  update(delta) {
    if (this.input.isDown("a")) {
      this.position.x -= 5;
      this.currentAnim = this.animLeft;
    } else if (this.input.isDown("d")) {
      this.position.x += 5;
      this.currentAnim = this.animRight;
    } else {
      this.currentAnim = this.animIdle;
    }

    if (this.input.isDown("w") && this.onGround) {
      this.velocity.y = -20;
      this.onGround = false;
    }

    Physics.applyGravity(this, this.groundY);

    this.currentAnim.update(delta);
  }

  draw(ctx) {
    ctx.drawImage(
      this.currentAnim.getImage(),
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
