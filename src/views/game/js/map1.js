const map1TileSetImage = "/assets/img/game/scene/tileset.png";
const ground = [4];
const water = [6];
const mapSize = {
    width: 50,
    height: 30,
};
const waterMarginWidth = 4;
const waterMarginHeight = 2;
const waterLayer = Array.from({ length: mapSize.height }).map((item) => Array.from({ length: mapSize.width }).map((item) => water));
const baseLayer = Array.from({ length: mapSize.height }).map((item, index) => {
    return index < waterMarginHeight ||
        index >= mapSize.height - waterMarginWidth
        ? Array.from({ length: mapSize.height }).map((item) => water)
        : Array.from({ length: mapSize.width }).map((item, index) => index < waterMarginWidth || index >= mapSize.width - waterMarginWidth
            ? [water]
            : ground);
});
const groundStructuresLayer = [];
const map1 = [waterLayer, baseLayer];
export { map1, map1TileSetImage, waterMarginHeight, waterMarginWidth };
