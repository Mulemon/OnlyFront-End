class GameMap {
    width;
    height;
    map;
    constructor(map) {
        this.width = 40;
        this.height = 25;
        this.map = map;
    }
    calculateMapMaxBlockSize(size) {
        return size / 32;
    }
    getHeight() {
        return this.height;
    }
    getWidth() {
        return this.width;
    }
}
class GameMapObject {
    src;
    position;
    constructor(src, x, y) {
        this.position.x = x;
        this.position.y = y;
    }
}
class RenderGameMapObject extends GameMapObject {
    gameMap;
    constructor(src, x, y) {
        super(src, x, y);
    }
    renderObject(src) { }
}
export { GameMap, GameMapObject, RenderGameMapObject };
