export default class Input {
  constructor() {
    this.keys = {};

    addEventListener("keydown", e => {
        this.keys[e.key.toLocaleLowerCase()] = true;
    });

    addEventListener("keyup", e => {
        this.keys[e.key.toLocaleLowerCase()] = false;
    });
  }

  isDown(key) {
    return this.keys[key];
  }
}
