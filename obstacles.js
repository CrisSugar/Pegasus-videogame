const ObstacleTypes = {
    win: "win",
    gameover: "gameover",
}

class Obstacles {
  constructor(ctx, width, height, posX, posY, type, image) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.type = type;
    this.posX = posX;
    this.posX0 = this.posX;
    this.posY = posY;
    this.posY0 = this.posY;
    this.image = new Image();
    this.image.src = image;
    this.touched = false;
  }

  setAsTouched() {
    this.touched = true;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }
}
