class gameOver{
    constructor(ctx, width, height, posX, posY) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
        this.image = new Image()
        this.gameOverScreen = document.querySelector('.gameOver')
    }

    stopGame(intervalId, canvas) {
        console.log(this.gameOverScreen)
        clearInterval(intervalId)
        this.gameOverScreen.classList.replace('hide','show')
        canvas.classList.replace('show','hide')
        // retryBtn.addEventListener('click',() => {
        //     game.init()
        //     gameOverScreen.classList.replace('show', 'hide');

    // }
}}