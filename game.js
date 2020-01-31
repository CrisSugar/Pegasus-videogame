let game = {
  canvas: undefined,
  ctx: undefined,
  widht: undefined,
  height: undefined,
  FPS: 60,
  framesCounter: 0,
  obstacles: [],
  score: 0,
  actualScore: 0,
  collides: undefined,
  velX: Number,
  velY: Number,
  keys: {
    TOP: 38,
    LEFT: 37,
    RIGHT: 39,
    BOTTON: 40,
    JUMP: 32
  },
  meta: {
    posX: 1100,
    posY: 370,
  },

  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.setDimensions();
    score.init(this.ctx);
    this.setListeners();
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
      this.velX++;
      this.velY++;
      this.checkObstacles();
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
    this.obstacles.forEach(obstacles => obstacles.draw());
    this.drawScore();
    
  },

  moveAll() {
  
  },

  reset() {
    this.background = new Background(
      this.ctx,
      this.width,
      this.height,
      "./img/bg.png"
    );

    this.horse = new Horse(this.ctx, 910, 370);

    this.obstacles = [
      new Obstacles(
        this.ctx,
        25,
        50,
        270,
        100,
        ObstacleTypes.win,
        "./imagenes/banderin2.png"
      ),
      new Obstacles(
        this.ctx,
        60,
        40,
        600,
        15,
        ObstacleTypes.gameover,
        "./imagenes/valla.png"
      ),
      new Obstacles(
        this.ctx,
        60,
        40,
        950,
        17,
        ObstacleTypes.gameover,
        "./imagenes/valla.png"
      ),
      new Obstacles(
        this.ctx,
        60,
        40,
        150,
        350,
        ObstacleTypes.gameover,
        "./imagenes/valla.png"
      ),
      new Obstacles(
        this.ctx,
        25,
        50,
        220,
        550,
        ObstacleTypes.win,
        "./imagenes/banderin2.png"
      ),
      new Obstacles(
        this.ctx,
        25,
        50,
        500,
        560,
        ObstacleTypes.win,
        "./imagenes/banderin2.png"
      ),
      new Obstacles(
        this.ctx,
        60,
        40,
        750,
        130,
        ObstacleTypes.gameover,
        "./imagenes/valla.png"
      )
    ];
    this.gameOver = new gameOver(
        this.ctx, 
        this.width, 
        this.height,
        this.posX,
        this.posY
        )
    
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  isCollision(obstacle) {
    if (
      this.horse.posX + this.horse.width >= obstacle.posX &&
      this.horse.posY + this.horse.height >= obstacle.posY &&
      this.horse.posX <= obstacle.posX + obstacle.width &&
      this.horse.posY <= obstacle.posY + obstacle.height &&
      !obstacle.touched
    ) {
      obstacle.setAsTouched();
      return true;
    }
  },

  

  checkObstacles() {
    this.obstacles.forEach(obstacle => {
      if (this.isCollision(obstacle)) {
        if (obstacle.type === ObstacleTypes.win) {
          this.score += 5;
        } else {
          this.gameOver.stopGame(this.interval, this.canvas);
        }
      }
    });
  },

  drawScore() {
    score.update(this.score);
  },



  youWin() {
      if(this.horse.position=meta.position){
    
    this.youWin.draw();
      }

    clearInterval(this.interval);
},

  setListeners() {
    document.addEventListener("keydown", e => {
      switch (e.keyCode) {
        case this.keys.JUMP:
          //   if (this.horse.posY <= this.horse.posY0) {
          if (this.horse.orientation === "right") {
            this.horse.jumpRight();
          }

          if (this.horse.orientation === "left") {
            this.horse.jumpLeft();
          }

          break;

        case this.keys.RIGHT:
          this.horse.moveRight();
          this.horse.framesIndexY = 3;
          break;

        case this.keys.LEFT:
          this.horse.moveLeft();
          
          break;

        case this.keys.BOTTON:
          this.horse.moveDown();
          this.horse.framesIndexY = 13;
          break;

        case this.keys.TOP:
          this.horse.moveUp();
          this.horse.framesIndexY = 16;
          break;
      }
    });

    document.addEventListener("keyup", e => {
      this.horse.framesIndexX = 0;

      switch (e.keyCode) {
        case this.keys.RIGHT:
          this.horse.stopRight();
          break;
        case this.keys.LEFT:
          this.horse.stopLeft()
          break;
        case this.keys.TOP:
          this.horse.stopUp();
          break;
        case this.keys.BOTTON:
          this.horse.stopDown();
          break;
      }
    });

  }
};
