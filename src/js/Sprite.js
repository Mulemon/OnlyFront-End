import { GameWindow } from "./GameWindow.js";

class Sprite extends GameWindow {
  constructor(src, width, height, totalFrames) {
    super();
    this.img = new Image(src);
    this.width = width;
    this.height = height;
    this.totalFrames = totalFrames;
    this.currentFrame = 0;
    this.frameIndex = 0;
  }
  update() {
    // Atualiza a pose atual do sprite
    this.frameIndex++;
    if (this.frameIndex >= (this.currentFrame + 1) * this.totalFrames) {
      this.frameIndex = this.currentFrame * this.totalFrames;
    }
  }

  stop() {
    this.frameIndex = 0;
    this.currentFrame = 0;
  }

  draw(context, x, y) {
    // Renderiza a imagem na tela
    context.drawImage(
      this.image,
      this.frameIndex * this.width,
      this.currentFrame * this.height,
      this.width,
      this.height,
      x,
      y,
      this.width,
      this.height
    );
  }
  animate() {
    // Atualiza a pose atual do sprite
    this.update();

    // Limpa o canvas

    this.context.clearRect(0, 0, canvas.width, canvas.height);

    // Renderiza o sprite na tela
    this.draw(context, 0, 0);
  }
}

export { Sprite };
