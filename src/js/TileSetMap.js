/**
 * @type MapColumnData
 * @description This type fields are used for tileMap definition, which the first array index is
 * the tileset tile index, the second index is to define if the tile is blockable, and the third index is to set
 * if the tile is animated.
 *
 */
class Tileset {
    image;
    tileWidth;
    tileHeight;
    constructor(image, tileWidth, tileHeight) {
        this.image = image;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
    }
    getTile(index) {
        const x = (index % this.image.width) * this.tileWidth;
        const y = Math.floor(index / this.image.width) * this.tileHeight;
        return { x, y, width: this.tileWidth, height: this.tileHeight };
    }
    get _image() {
        return this.image;
    }
}
class TileMap {
    tileset;
    map;
    tileWidth;
    tileHeight;
    constructor(tileset, map, tileWidth, tileHeight) {
        this.tileset = tileset;
        this.map = map;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
    }
    draw(context, options = {}) {
        const mapWidth = this.map[0].length * this.tileWidth;
        const mapHeight = this.map.length * this.tileHeight;
        for (let row = 0; row < this.map.length; row++) {
            for (let col = 0; col < this.map[row].length; col++) {
                const tileIndex = this.map[row][col][0];
                const tile = this.tileset.getTile(tileIndex);
                console.log(tile.x, tile.y);
                context.drawImage(this.tileset._image, tile.x, tile.y, tile.width, tile.height, col * this.tileWidth + options.srcX, row * this.tileHeight + options.srcY, this.tileWidth, this.tileHeight);
            }
        }
    }
}
export { Tileset, TileMap };
