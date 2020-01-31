window.onload = () => {
    let startBtn = document.querySelector('#start')
    let startScreen = document.querySelector('.begin')
    let gameOver = document.querySelector('.gameOver')
    let youWin = document.querySelector('.youWin')
    let canvas = document.querySelector('#canvas')
    let retryBtn = document.querySelector(`#retry`)

    

    startBtn.addEventListener('click',() => {
        game.init()
        startScreen.classList.replace('show', 'hide');
    })

    // retryBtn.addEventListener('click',() => {
    //     game.init()
    //     gameOverScreen.classList.replace('show', 'hide');
    //     gameScreen.classList.replace('hide','show');  
    // })





    
}
