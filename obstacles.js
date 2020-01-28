class Obstacles {
    constructor(ctx, width, height){
        this.ctx = ctx;
        this.width = 30;
        this.height = 25;
        this.posX = 200;
        this.posX0 = this.posX;
        this.posY = 200;
        this.posY0 = this.posY;
    }

    draw() {
        this.ctx.fillStyle = "brown";
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
      }
}