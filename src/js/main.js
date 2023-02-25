import { GameWindow } from "./GameWindow.js";
import { Player } from "./Player";
import { Sprite } from "./Sprite";

function generateGameWindow() {
  const canvas = document.querySelector("#gameWindow");
  const context = canvas.getContext("2d");
  new GameWindow(canvas.height, canvas.width, context);
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

export default initialize;
