let game = {
  canvas: undefined,
  ctx: undefined,
  widht: undefined,
  height: undefined,
  FPS: 60,
  framesCounter: 0,
  obstacles: [],
  score: 0,
  timer: Number,
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
    // this.score.draw();
    // this.timer.draw();
  },

  moveAll() {
    // this.horse.jump(this.framesCounter);
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
    this.obstacles = [
      new Obstacles(
        this.ctx,
        (this.width = 50),
        (this.height = 20),
        (this.posX = 250),
        (this.posY = 200),
        "obsWin"
      ),
      new Obstacles(
        this.ctx,
        (this.width = 50),
        (this.height = 50),
        (this.posX = 450),
        (this.posY = 180),
        "obsGOver"
      )
    ];
    // this.score = new Score (
    //     this.ctx,
    //     this.width = 200,
    //     this.height = 100,
    //     this.posX = 60,
    //     this.posY = 40,
    // )
    // this.timer = new Timer (
    //     this.ctx,
    //     this.width = 200,
    //     this.height = 100,
    //     this.posX = 280,
    //     this.posY = 40,
    // )
  },

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  isCollision(obstacle) {
    if (
      this.horse.posX + this.horse.width >= obstacle.posX &&
      this.horse.posY + this.horse.height >= obstacle.posY &&
      this.horse.posX <= obstacle.posX + obstacle.width &&
      this.horse.posY <= obstacle.posY + obstacle.height
    ) {
      return true;
    }
  },

  gameOver() {
    clearInterval(this.interval);
  },

  checkObstacles() {
    this.obstacles.forEach(obstacle => {
      if (this.isCollision(obstacle)) {
        if (obstacle.type === "obsWin") {
          this.score += 5;
        } else {
          this.gameOver();
        }
      }
    });
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
