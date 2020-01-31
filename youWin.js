class youWin{
    constructor(ctx, width, height, posX, posY) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
        this.image = new Image()
        this.image.src ="./imagenes/pantalla you win.jpg"
    }
    

    winGame(intervalId, canvas) {
        console.log(this.gameOverScreen)
        clearInterval(intervalId)
        this.youWinScreen.classList.replace('hide','show');
        canvas.classList.replace('show','hide')
    }

}