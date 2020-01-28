class Horse {
  constructor(ctx, width, height, gameWidth, gameHeight, keys) {
    this.ctx = ctx;

    this.image = new Image();
    this.image.src =
      "./imagenes/Horse_paint_brown_blacksaddled_smallsaddle.png";
    this.image.onload = () => {
      this.width = width;
      this.height = height;

      this.posX = 100;
      // this.posX0 = this.posX;
      this.posY = 100;
      this.posY0 = this.posY;

      this.framesX = 9;
      this.framesY = 18;
      this.framesIndexX = 0;
      this.framesIndexY = 3;

      this.keys = keys;

      this.velX = 0.001;
      this.velY = 0.001;
    };

    // this.setListeners();
  }

  // draw(framesCounter) {
  //     this.ctx.drawImage(
  //       this.image,
  //       this.framesIndexX * Math.floor(this.image.width / this.framesX),
  //       this.framesIndexY,
  //       Math.floor(this.image.width / this.framesX),
  //       Math.floor(this.image.height / this.framesY),
  //       this.posX,
  //       this.posY,
  //       this.width,
  //       this.height
  //     )

  //     // this.animate(framesCounter);

  // }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }

  animate(framesCounter) {
    if (framesCounter % 6 == 0) {
      this.image.framesIndex++;
    }
    if (this.image.framesIndex > this.image.framesX - 1) {
      this.image.framesIndex = 0;
    }
  }

  move() {
    let gravity = 0.4;

    if (this.posY < this.posY0) {
      this.posY += this.velY;
      this.velY += gravity;
    } else {
      //   this.posY = this.posY0;
      //   this.velY = 1;
    }
  }

  //   setListeners() {
  //     document.addEventListener("keydown", e => {
  //       switch (e.keyCode) {
  //         case this.keys.JUMP:
  //           if (this.posY <= this.posY0) {
  //             this.posY -= 40;
  //             this.velY += 8;
  //             console.log("SALTANDO!");
  //           }
  //           break;

  //         case this.keys.LEFT:
  //             if (this.posX < this.posX0){
  //           console.log("TROTA A LA IZQUIERDA!");
  //         }
  //           break;
  //       }
  //     });
  // }
}
