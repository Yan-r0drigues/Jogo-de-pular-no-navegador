export default class SpriteAnimator {
  constructor(frames, interval = 100) {
    this.frames = frames;
    this.interval = interval;
    this.currentTime = 0;
    this.currentFrame = 0;

    this.image = new Image();
    this.image.src = this.frames[0];
  }

  update(delta) {
    this.currentTime += delta;

    if (this.currentTime >= this.interval) {
      this.currentFrame = (this.currentFrame + 1) % this.frames.length;
      this.image.src = this.frames[this.currentFrame];
      this.currentTime = 0;
    }
  }

  getImage() {
    return this.image;
  }
}