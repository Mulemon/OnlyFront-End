import { Tileset, TileMap } from "../../../js/TileSetMap.js";
import { KeyMap } from "../../../js/KeyMap.js";
const canvas = document.querySelector("canvas#gamewindow");
const borders = document.querySelectorAll(".borderimg");
const navbar = document.querySelector("navbar");
canvas.width = window.innerWidth - borders[0].clientWidth * 2;
canvas.height = window.innerHeight - navbar.clientHeight - 20;
window.onresize = function (e) {
    canvas.width = window.innerWidth - borders[0].clientWidth * 2;
    canvas.height = window.innerHeight - navbar.clientHeight - 20;
};
const ctx = canvas.getContext("2d");
const keyMap = new KeyMap().keys;
const tilesetImage = new Image();
tilesetImage.src = "/assets/img/game/scene/tileset.png";
tilesetImage.onload = () => {
    setKeyBindingActions();
    gameLoop();
};
let zoom = 1;
let size = 32 * zoom;
let srcX = 0;
let srcY = 0;
let movingDirection = {
    right: false,
    left: false,
    up: false,
    down: false,
    zoomIn: false,
    zoomOut: false,
    update() {
        this.zoomIn = false;
        this.zoomOut = false;
        this.right = false;
        this.left = false;
        this.up = false;
        this.down = false;
    },
};
const mapData = [
    [
        [0, true],
        [4, true],
        [0, true],
        [0, true],
        [0, true],
    ],
    [
        [0, true],
        [4, true],
        [1, true],
        [1, true],
        [0, true],
    ],
    [
        [0, true],
        [1, true],
        [2, true],
        [1, true],
        [0, true],
    ],
    [
        [0, true],
        [1, true],
        [1, true],
        [1, true],
        [0, true],
    ],
    [
        [0, true],
        [0, true],
        [0, true],
        [0, true],
        [0, true],
    ],
];
window.addEventListener("keydown", keyDownHandler);
window.addEventListener("keyup", keyUpHandler);
function keyDownHandler(e) {
    const key = e.keyCode;
    keyMap[key] && keyMap[key].mapAction();
    render();
}
function keyUpHandler(e) {
    const key = e.keyCode;
    keyMap[key] && movingDirection.update();
}
function setKeyBindingActions() {
    keyMap[33].mapAction = () => {
        zoom <= 1.8 && (zoom += 0.2);
    };
    keyMap[34].mapAction = () => {
        zoom >= 1.2 && (zoom -= 0.2);
    };
    keyMap[37].mapAction = () => {
        srcX >= 5 && ((srcX -= 5), (movingDirection.left = true));
    };
    keyMap[38].mapAction = () => {
        srcY >= 5 && ((srcY -= 5), (movingDirection.up = true));
    };
    keyMap[39].mapAction = () => {
        srcX <= canvas.width - 5 - mapData[0].length * size &&
            ((srcX += 5), (movingDirection.right = true));
    };
    keyMap[40].mapAction = () => {
        srcY <= canvas.height - 5 - mapData.length * size &&
            ((srcY += 5), (movingDirection.down = true));
    };
}
function updateMapZoom(zoom) {
    size = 64 * zoom;
}
function renderGameMap() {
    updateMapZoom(zoom);
    const tileset = new Tileset(tilesetImage, 32, 32);
    const tileMap = new TileMap(tileset, mapData, size, size);
    tileMap.draw(ctx, { srcX, srcY });
}
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    renderGameMap();
}
function update() { }
function gameLoop() {
    requestAnimationFrame(() => {
        render();
        gameLoop();
    });
}
