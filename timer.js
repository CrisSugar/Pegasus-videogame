//to-do: refactor to pure object rather than class
class Timer {
    constructor(ctx, width, height, posX, posY){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
        this.timer = 0;
    }

    setTimer(timer){
        this.timer = timer
    }

    draw(){
        this.ctx.beginPath()
        this.ctx.strokeStyle ="red"
        this.ctx.strokeRect(this.posX, this.posY, this.width, this.height);
        this.ctx.fillStyle ="black"
        this.ctx.fillText("Time", this.posX, this.posY + 50 );
        this.ctx.closePath()
    }
}