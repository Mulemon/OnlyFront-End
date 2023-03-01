class Sprite {
    currentFrame;
    frameIndex;
    img;
    totalFrames;
    src;
    width;
    height;
    context;
    constructor(src, width, height, totalFrames) {
        this.img = new Image(width, height);
        this.img.src = src;
        this.currentFrame = 0;
        this.frameIndex = 0;
    }
}
class RenderSprite extends Sprite {
    constructor(src, width, height, totalFrames) {
        super(src, width, height, totalFrames);
    }
    update() {
        // Atualiza a pose atual do sprite
        this.frameIndex++;
        if (this.frameIndex >= (this.currentFrame + 1) * this.totalFrames) {
            this.frameIndex = this.currentFrame * this.totalFrames;
        }
    }
    stop(x, y) {
        this.frameIndex = 0;
        this.currentFrame = 0;
        this.draw(this.context, x, y);
    }
    draw(context, x, y) {
        // Renderiza a imagem na tela
        context.drawImage(this.img, this.frameIndex * this.width, this.currentFrame * this.height, this.width, this.height, x, y, this.width, this.height);
    }
    animate(x, y) {
        // Atualiza a pose atual do sprite
        this.update();
        // Limpa o canvas
        this.context.clearRect(x, y, this.width, this.height);
        // Renderiza o sprite na tela
        this.draw(this.context, 0, 0);
    }
}
export { Sprite, RenderSprite };
