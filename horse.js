class Horse {
  constructor(ctx, width, height, gameWidth, gameHeight, framesCounter) {
    this.ctx = ctx;

    this.image = new Image();
    this.image.src =
      "./imagenes/Horse_paint_brown_blacksaddled_smallsaddle.png";
    this.image.onload = () => {
      this.width = 60;
      this.height = 40;

      this.posX = 90;
      this.posX0 = this.posX;
      this.posY = 180;
      this.posY0 = this.posY;

      this.framesX = 9;
      this.framesY = 18;
      this.framesIndexX = 0;
      this.framesIndexY = 0;     

      this.velX = 0.001;
      this.velY = 0.001;
    };

    
  }

  draw(framesCounter) {
      this.ctx.drawImage(
        this.image,
        this.framesIndexX * Math.floor(this.image.width / this.framesX),
        this.framesIndexY * Math.floor(this.image.height/this.framesY),
        Math.floor(this.image.width / this.framesX),
        Math.floor(this.image.height / this.framesY),
        this.posX,
        this.posY,
        this.width,
        this.height
      )

      this.animate(framesCounter);

  }

//   draw() {
//     this.ctx.drawImage(
//       this.image,
//       this.posX,
//       this.posY,
//       this.width,
//       this.height
//     );
//   }

  animate(framesCounter) {

    if (framesCounter % 10 == 0) {
      this.framesIndexX++;
    }
    if (this.framesIndexX > this.framesX - 1) {
      this.framesIndexX = 0;
    }
    
  }

  jump() {
    let gravity = 0.001;

    if (this.posY < this.posY0) {
      this.posY += this.velY;
      this.velY += gravity;
    } else {
        this.posY = this.posY0;
        this.velY = 1;
    }

  }
 
  moveX() {
    this.posX ++;
  }

  moveY() {
    this.posY ++;
  }



    
  
}
