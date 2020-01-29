class Obstacles {
    constructor(ctx, width, height, posX, posY, type){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.type = type;
        this.posX = posX;
        this.posX0 = this.posX;
        this.posY = posY;
        this.posY0 = this.posY;
    }

    draw() {
        this.ctx.fillStyle = "brown";
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height, this.type);
      }
}

