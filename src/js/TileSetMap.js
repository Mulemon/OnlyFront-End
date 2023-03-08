/**
 * @type TilesetDataLayer
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
    draw(context, options = { cameraX: 0, cameraY: 0 }) {
        for (let layer = 0; layer < this.map.length; layer++) {
            for (let row = 0; row < this.map[layer].length; row++) {
                for (let col = 0; col < this.map[layer][row].length; col++) {
                    const tileIndex = this.map[layer][row][col][0];
                    const tile = this.tileset.getTile(tileIndex);
                    // console.log(layer, row, col);
                    if (layer <= 0) {
                        context.drawImage(this.tileset._image, tile.x, tile.y, tile.width, tile.height, col * this.tileWidth, row * this.tileHeight, this.tileWidth, this.tileHeight);
                    }
                    context.drawImage(this.tileset._image, tile.x, tile.y, tile.width, tile.height, col * this.tileWidth - options.cameraX, row * this.tileHeight - options.cameraY, this.tileWidth, this.tileHeight);
                }
            }
        }
    }
}
export { Tileset, TileMap };
