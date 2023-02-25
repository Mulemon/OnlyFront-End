class GameMap extends Image {
  constructor(src, height, width) {
    super();
    this.src = src;
    this.height = height;
    this.width = width;
    this.mapWidth = this.calculateMapMaxBlockSize(this.width);
    this.mapHeight = this.calculateMapMaxBlockSize(this.height);
  }

  calculateMapMaxBlockSize(size) {
    return size / 32;
  }

  get height() {
    return this.height;
  }

  get width() {
    return this.width;
  }
}

class GameMapObject extends GameMap {
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
  }
}

class RenderGameMapObject extends GameMapObject {
  constructor() {
    super();
  }
  renderObject(x, y) {}
}

export { GameMap, GameMapObject, RenderGameMapObject };
