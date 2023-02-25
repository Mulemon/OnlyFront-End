import { Sprite } from "./Sprite";

class Player extends Sprite {
  constructor(down = 0, up = 0, left = 0, right = 1) {
    super();
    this.direction = {
      down,
      up,
      right,
      left,
    };
    this.x = 0;
    this.y = 0;
  }
}

export { Player };
