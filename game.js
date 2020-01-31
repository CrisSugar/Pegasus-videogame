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
  //   timer: Number,
  velX: Number,
  velY: Number,
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
      //   this.gameOver();
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
    // this.timeboard.draw();
  },

  moveAll() {
    // this.horse.continueMove();
    //     this.food.forEach(obs => obs.move());
  },

  reset() {
    this.background = new Background(
      this.ctx,
      this.width,
      this.height,
      "./img/bg.png"
    );

    this.horse = new Horse(this.ctx, 400, 590);

    this.obstacles = [
      new Obstacles(
        this.ctx,
        50,
        70,
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
        50,
        70,
        220,
        550,
        ObstacleTypes.win,
        "./imagenes/banderin2.png"
      ),
      new Obstacles(
        this.ctx,
        50,
        70,
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
    // this.scoreboard = new Score(this.ctx, 200, 100, 60, 40,this.score);
    // this.timeboard = new Timer(this.ctx, 200, 100, 280, 40);
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

  gameOver() {
    clearInterval(this.interval);
    alert("GAME OVER");
    // this.draw = function(){
    //     ctx.font = "60px Arial"
    //     ctx.fillStyle = "Black"
    //     ctx.fillText("GAMEOVER!!! Press Enter to retry!",20,100)
    //     clearInterval(animateInterval);
    // }
    // isGameOver = true;
  },

  checkObstacles() {
    this.obstacles.forEach(obstacle => {
      if (this.isCollision(obstacle)) {
        if (obstacle.type === ObstacleTypes.win) {
          this.score += 5;
        } else {
          this.gameOver();
        }
      }
    });
  },

  drawScore() {
    score.update(this.score);
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
          this.horse.framesIndexY = 7;
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

    // document.addEventListener("keyup", e => {
    //   this.horse.framesIndexX = 0;

    //   switch (e.keyCode) {
    //     case this.keys.RIGHT:
    //       this.horse.framesIndexY = 0;
    //       break;
    //     case this.keys.LEFT:
    //       this.horse.framesIndexY = 5;
    //       break;
    //     case this.keys.TOP:
    //       this.horse.framesIndexY = 14;
    //       break;
    //     case this.keys.BOTTON:
    //       this.horse.framesIndexY = 10;
    //       break;
    //   }
    // });

    // document.addEventListener("keydown", e => {
    //   let limit = 100;

    //   switch (e.keyCode) {
    //     case this.keys.TOP:
    //       this.direction = "up";
    //       break;
    //     case this.keys.LEFT:
    //       this.direction = "left";
    //       break;
    //     case this.keys.RIGHT:
    //       this.direction = "right";
    //       break;
    //     case this.keys.DOWN:
    //       this.direction = "down";
    //       break;
    //   }
    // });

    //     ctx.canvas.addEventListener('mousemove', function(event){

    //         if(isGameOver !== true) {

    //             auto.x = event.clientX-(auto.w*0.5)
    //             auto.y = event.clientY-(auto.h*0.5)
    //             Menu.stattX = event.clientX
    //             Menu.stattY = event.clientY
    //         }
    //     }),
  }
};
