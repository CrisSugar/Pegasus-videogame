class Horse {
    constructor(ctx){
        this.ctx = ctx;


        this.image = new Image ();
        this.image.src = "./imagenes/Horse_paint_brown_blacksaddled_smallsaddle.png";

        this.horseWidth = 90;
        this.horseHeight = 50;

        this.posX = this.gameWidth - this.horseWidth + 45;
        this.posX0 = this.posX;
        this.posY = this.gameHeight - this.horseHeight + 25;
        this.posY0 = this.posY;


        this.image.frames = ;
        this.image.framesIndex = 0;

        this.keys = game.keys;

        this.velX = 1;
        this.velY = 1;


        // this.setListeners();
    }

    draw(framesCounter) {
        this.ctx.drawImage(
          this.image,
          this.image.framesIndex * Math.floor(this.image.width / this.image.frames),
          0,
          Math.floor(this.image.width / this.image.frames),
          this.image.height,
          this.posX,
          this.posY,
          this.width,
          this.height
        )

        // this.animate(framesCounter);

    }   

    // draw() {
    //     this.ctx.drawImage(this.image, this.posX, this.posY, this.horseWidth,this.horseHeight);

    // }

    animate(framesCounter) {
        if (framesCounter % 9 == 0) {
          this.image.framesIndex++;
        }
        if (this.image.framesIndex > this.image.frames - 1) {
          this.image.framesIndex = 0;
        }
    }


    move() {
        let gravity = 0.4;
    
        if (this.posY < this.posY0) {
          this.posY += this.velY;
          this.velY += gravity;
        } else {
          this.posY = this.posY0;
          this.velY = 1;
        }
    
    }

    //   setListeners() {
    //     document.addEventListener("keydown", e => {
    //       switch (e.keyCode) {
    //         case this.keys.TOP:
    //           if (this.horse.posX. >= this.horse.posX0) {
    //             this.posX -= 40;
    //             this.velX += 8;
    //             console.log("SALTANDO!");
    //           }
    //           break;


    //           moveCar() {
    //             window.onkeydown = e => {
    //                 if (e.keyCode === 39) {
    //                     if (this.car.CarX>300) {
    //                          this.car.CarX=300;
    //                     } else {
    //                         this.car.CarX+=10;
    //                     }
    //                 }
    //                 else if (e.keyCode === 37) {
    //                     if (this.car.CarX<50) {
    //                         this.car.CarX=50;
    //                    } else {
    //                        this.car.CarX-=10;
    //                    }
    //                 }
    //             }

            // case this.keys.LEFT:
            //   console.log("TROTA A LA IZQUIERDA!");
            //   this.shoot();
    //         //   break;
    //       }
    //     });
    // }

};