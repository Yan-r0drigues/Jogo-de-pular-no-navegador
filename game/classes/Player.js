import { PATH_DUCK_IMAGE } from "../utils/constans.js";

class Player {
  constructor(canvasWidth, canvasHeight) {
    this.width = 16 * 3;
    this.height = 16 * 3;
    this.jumping = 8;
    this.jumpLimit = 240;

    this.position = {
      x: 100,
      y: 400,
    };

    this.image = this.getImage(PATH_DUCK_IMAGE);
  }

  getImage(path) {
    const image = new Image();
    image.src = path;
    return image;
  }

  jump() {
    if (this.position.y >= 240) {
        this.position.y -= this.jumping;
    }
  }

  down() {
    if (this.position.y <= 399) {
        this.position.y += this.jumping;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

export default Player;
