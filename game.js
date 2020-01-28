let game = {
  canvas: undefined,
  ctx: undefined,
  widht: undefined,
  height: undefined,
  FPS: 60,
  framesCounter: 0,
  obstaclesArr: [],
  keys: {
    TOP: 38,
    LEFT: 37,
    RIGHT: 39,
    BOTTON: 40,
    JUMP: 32
  },
  

  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.setDimensions();
    this.start();
  },

  start() {
    this.reset();
    this.interval = setInterval(() => {
      if (this.framesCounter > 5000) {
        this.framesCounter = 0;
      }
      this.framesCounter++;
      this.clear();
      this.drawAll();
      this.moveAll();
    }, 1000 / this.FPS);
  },

  setDimensions() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  },

  drawAll() {
    this.background.draw();
    this.horse.draw(this.framesCounter);
    this.obstacles.draw();
  },

  moveAll() {
    this.horse.jump(this.framesCounter);
  },

  reset() {
    this.background = new Background(
      this.ctx,
      this.width,
      this.height,
      "./img/bg.png"
    );
    this.horse = new Horse(
      this.ctx,
      900,
      1200,
      this.width,
      this.height,
      this.framesCounter
    );
    this.obstacles = new Obstacles(
        this.ctx,
        this.width,
        this.height
    )
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  generateObstacles() {
    
    
  },

  isCollision() {
    this.obstaclesArray.forEach(obstacle => {
        if ((this.horse.posX < obstacle.posX + obstacle.width) &&
            this.horse.posX + this.horse.width > obstacle.posX  &&
            this.horse.posY < obstacle.posY + obstacle.height &&
            this.horse.posY + this.horse.height > obstacle.posY) {
                alert(`game Over`)
            }
} )
  },

  gameOver() {
    clearInterval(this.interval);
  },

  setListeners() {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case this.keys.JUMP:
          if (this.horse.posY <= this.horse.posY0) {
            this.horse.posY -= 40;
            this.horse.velY += 8;
            console.log("SALTANDO!");
          }
          break;

        case this.keys.RIGHT:
          this.horse.moveX();
          this.horse.framesIndexY = 3;
          break;

        case this.keys.LEFT:
          this.horse.posX--;
          this.horse.framesIndexY = 7;
          break;

        case this.keys.BOTTON:
          this.horse.moveY();
          this.horse.framesIndexY = 13;
          break;

        case this.keys.TOP:
          this.horse.posY--;
          this.horse.framesIndexY = 16;
          break;
      }
    });

    document.addEventListener("keyup", e => {
      this.horse.framesIndexX = 0;

      switch (e.keyCode) {
        case this.keys.RIGHT:
          this.horse.framesIndexY = 0;
          break;
        case this.keys.LEFT:
          this.horse.framesIndexY = 5;
          break;
        case this.keys.TOP:
          this.horse.framesIndexY = 14;
          break;
        case this.keys.BOTTON:
          this.horse.framesIndexY = 10;
          break;
      }
    });
  }
};
