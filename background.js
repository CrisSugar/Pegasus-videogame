class Background {
    constructor(ctx, w, h) {
      this._ctx = ctx;
      this._width = screenWidth;
      this._height = screenHeight;
  
      this._image = new Image();
      this._image.src = "./imagenes/background.png"

      this._posX = 0;
      this._posY = 0;
    }

    draw(){
      this._ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
      this._ctx.drawImage(this._image,this._posX + this._width,this._posY,this._width,this._height);

    }
  };