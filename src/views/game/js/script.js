import { Tileset, TileMap } from "../../../js/TileSetMap.js";
import { KeyMap } from "../../../js/KeyMap.js";
import { gameMap, tileSetImageSrc } from "../js/gameMaps.js";
import { waterMarginHeight, waterMarginWidth } from "./map1.js";
const canvas = document.querySelector("canvas#gamewindow");
const borders = document.querySelectorAll(".borderimg");
const navbar = document.querySelector("navbar");
canvas.width = window.innerWidth - borders[0].clientWidth * 2;
canvas.height = window.innerHeight - navbar.clientHeight - 20;
window.onresize = function (e) {
    canvas.width = window.innerWidth - borders[0].clientWidth * 2;
    canvas.height = window.innerHeight - navbar.clientHeight - 20;
};
let gamePlayStarted = false;
const mapData = gameMap[0];
let zoom = 1;
let size = 64 * zoom;
const playerStartPoint = {
    x: 4,
    y: 4,
};
let cameraX = (playerStartPoint.x + waterMarginWidth) * size - canvas.width / 2 + size;
// let cameraX = (playerStartPoint.x - waterMarginWidth) * size;
let cameraY = (playerStartPoint.y + waterMarginHeight) * size - canvas.height / 2 + size;
// let cameraY = (playerStartPoint.y - waterMarginHeight) * size;
let movingDirection = {
    right: false,
    left: false,
    up: false,
    down: false,
    zoomIn: false,
    zoomOut: false,
    update() {
        console.log(this);
        this.zoomIn = false;
        this.zoomOut = false;
        this.right = false;
        this.left = false;
        this.up = false;
        this.down = false;
    },
};
const MIN_ZOOM = 64 / size;
const MAX_ZOOM = (64 / size) * 2;
const ctx = canvas.getContext("2d");
const keyMap = new KeyMap().keys;
const tilesetImage = new Image();
tilesetImage.src = tileSetImageSrc;
tilesetImage.onload = () => {
    setKeyBindingActions();
    gameLoop();
};
window.addEventListener("keydown", keyDownHandler);
window.addEventListener("keyup", keyUpHandler);
function keyDownHandler(e) {
    const key = e.keyCode;
    keyMap[key] && console.log(keyMap[key].name);
    keyMap[key] && keyMap[key].mapAction();
    render();
}
function keyUpHandler(e) {
    const key = e.keyCode;
    keyMap[key] && movingDirection.update();
}
function setKeyBindingActions() {
    keyMap[33].mapAction = () => {
        zoom <= MAX_ZOOM - 0.2 && (zoom += 0.2);
    };
    keyMap[34].mapAction = () => {
        zoom >= MIN_ZOOM + 0.2 && (zoom -= 0.2);
    };
    keyMap[37].mapAction = () => {
        (movingDirection.left = true), cameraX >= 5 * zoom && (cameraX -= 5 * zoom);
    };
    keyMap[38].mapAction = () => {
        (movingDirection.up = true), cameraY >= 5 * zoom && (cameraY -= 5 * zoom);
    };
    keyMap[39].mapAction = () => {
        (movingDirection.right = true),
            cameraX <= mapData[0][0].length * size - canvas.width - 5 &&
                (cameraX += 5 * zoom);
    };
    keyMap[40].mapAction = () => {
        (movingDirection.down = true),
            cameraY <= mapData[0].length * size - canvas.height - 5 * zoom &&
                (cameraY += 5 * zoom);
    };
}
function updateMapZoom(zoom) {
    size = 64 * zoom;
}
function renderPlayer() {
    const playerPosition = {
        x: 0,
        y: 0,
    };
    !gamePlayStarted &&
        ((playerPosition.x =
            (playerStartPoint.x + waterMarginWidth) * size - size / 2),
            (playerPosition.y =
                (playerStartPoint.y + waterMarginHeight) * size - size / 2));
    gamePlayStarted &&
        ((playerPosition.x = (playerPosition.x + cameraX) * size),
            (playerPosition.y = (playerPosition.y + cameraY) * size));
    ctx.fillStyle = "#005";
    ctx.fillRect(playerPosition.x, playerPosition.y, size / 2, size / 2);
}
function renderGame() {
    updateMapZoom(zoom);
    const tileset = new Tileset(tilesetImage, 32, 32);
    const tileMap = new TileMap(tileset, mapData, size, size);
    tileMap.draw(ctx, { cameraX, cameraY });
    renderPlayer();
}
function render() {
    // console.log("rendering");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    renderGame();
}
function update() { }
function gameLoop() {
    render();
    requestAnimationFrame(gameLoop);
}
