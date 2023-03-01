class GameMap extends Image {
    mapWidth;
    mapHeight;
    constructor(src) {
        super();
        this.mapWidth = this.width / 32;
        this.mapHeight = this.height / 32;
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
