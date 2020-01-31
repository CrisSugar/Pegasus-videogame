class Horse {
  constructor(ctx, width, height, gameWidth, gameHeight, framesCounter) {
    this.ctx = ctx;

    this.image = new Image();
    this.image.src =
      "./imagenes/horse.png";
    this.image.onload = () => {
      this.width = 60;
      this.height = 40;

      this.posX = 920;
      this.posX0 = this.posX;
      this.posY = 470;
      this.posY0 = this.posY;

      this.framesX = 11;
      this.framesY = 18;
      this.framesIndexX = 0;
      this.framesIndexY = 14;     

      this.velX = 0.1;
      this.velY = 0.1;
      this.accelerationRate = 0.1;
      this.orientation = "right"
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



  animate(framesCounter) {

    if (framesCounter % 10 == 0) {
      this.framesIndexX++;
    }
    if (this.framesIndexX > this.framesX - 1) {
      this.framesIndexX = 0;
    }
    
  }

  jumpRight() {
    let xAdvance = 90
    const elongation = 100
    const yOriginal = this.posY

    const intervalID = setInterval(() => {
        // how fast the jump animation takes place xAdvance
        xAdvance+=2

        if (xAdvance > 270) {
            clearInterval(intervalID);
            return;
        }
        
        // how far in the X we advance every jump
        this.posX+=1
        // elongation measures how high the jump reaches
        this.posY = yOriginal + elongation * Math.cos(xAdvance * Math.PI / 180)

        
    }, 10)
  }

  jumpLeft() {
    let xAdvance = 90
    const elongation = 100
    const yOriginal = this.posY

    const intervalID = setInterval(() => {
        // how fast the jump animation takes place xAdvance
        xAdvance+=2

        if (xAdvance > 270) {
            clearInterval(intervalID);
            return;
        }
        
        // how far in the X we advance every jump
        this.posX-=1
        // elongation measures how high the jump reaches
        this.posY = yOriginal + elongation * Math.cos(xAdvance * Math.PI / 180)

        
    }, 10)
  }

 
  moveRight() {
      this.orientation = "right"
    this.velX += this.accelerationRate;
    this.posX += this.velX;
  }

  moveLeft() {
    this.orientation = "left"
    this.velX += this.accelerationRate;
    this.posX -= this.velX;
  }

  moveUp() {
    this.velY += this.accelerationRate;
    this.posY -= this.velY;
  }

  moveDown() {
    this.velY += this.accelerationRate;
    this.posY += this.velY;
  }

}

// move() {
//     switch (this.direction) {
//       case "up":
//         if (this.posY <= this.height) {
//           this.posY === this.posY;
//         } else {
//           this.posY -= this.velY;
//         }
//         break;
//       case "down":
//         if (this.posY + 30 >= this.gameHeight) {
//           this.posY = this.gameHeight - 30;
//         } else {
//           this.posY += this.velY;
//         }
//         break;
//       case "right":
//         if (this.posX + 30 >= this.gameWidth) {
//           this.posX = this.gameWidth - 30;
//         } else {
//           this.posX += this.velX;
//         }
//         break;
//       case "left":
//         if (this.posX < this.width) {
//           this.posX = this.posX;
//         } else {
//           this.posX -= this.velX;
//         }
//         break;
//     }
//   }
// }
