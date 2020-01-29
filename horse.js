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

      this.velX = 0.1;
      this.velY = 0.001;
      this.accelerationRate = 0.1;
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
    console.log("SALTANDO desde horse!");
    let xAdvance = 90
    const elongation = 70
    const yOriginal = this.posY

    const intervalID = setInterval(() => {
        // how fast the jump animation takes place xAdvance
        xAdvance+=5

        if (xAdvance > 270) {
            clearInterval(intervalID);
            return;
        }
        
        // how far in the X we advance every jump
        this.posX+=1
        // elongation measures how high the jump reaches
        this.posY = yOriginal + elongation * Math.cos(xAdvance * Math.PI / 180)

        
    }, 10)
    // let gravity = 0.0001;

    // if (this.posY < this.posY0) {
    // //   this.posY += this.velY;
    // //   this.posX += this.velX;
    // //   this.velY += gravity;
    // } else {
    //     this.posY = this.posY0;
    //     this.velY = 1;
    //     this.velX = 1;
    // }

  }
 
  moveX() {
    this.velX += this.accelerationRate;
    this.posX += this.velX;
  }

  moveY() {
    this.posY ++;
  }



    
  
}
