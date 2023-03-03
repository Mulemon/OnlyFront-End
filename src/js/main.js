import { GameWindow } from "./GameWindow";
import { Player } from "./Player";
import { Sprite } from "./Sprite";
import { GameMap } from "./GameMap";
function getTileSetMap(mapId) { }
function generateGameWindow() {
    const canvas = document.querySelector("canvas#gameWindow");
    const context = canvas.getContext("2d");
    return new GameWindow(canvas.height, canvas.width, context);
}
function generateGameMap(mapId) {
    const tileMap = getTileSetMap(mapId);
    const map = new GameMap();
    console.log(map.getWidth());
    return map;
}
function generateGameSprites() {
    const sprites = {
        player: new Sprite("../../assets/img/game/player/player.png", 32, 32, 5),
        pokemon: [
            new Sprite("../../assets/img/game/pokemon/pikachu.png", 32, 32, 5),
            new Sprite("../../assets/img/game/pokemon/bulbasaur.png", 32, 32, 5),
            new Sprite("../../assets/img/game/pokemon/squirtle.png", 32, 32, 5),
            new Sprite("../../assets/img/game/pokemon/chamander.png", 32, 32, 5),
        ],
        water: new Sprite("../../assets/img/game/scene/water.png", 32, 32, 3),
    };
    const player = new Player();
}
function initialize() {
    generateGameWindow();
    generateGameSprites();
}
export { generateGameWindow };
export default initialize;
