class begin{
    constructor(ctx, width, height, posX, posY) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
        this.image = new Image()
        this.image.src ="./imagenes/portada.png"
    }
    draw() {
        this.ctx.drawImage(this.image, this.width, this.height, this.posX, this.posY);
    }
   
}