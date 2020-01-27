const game = {
    constructor = {
        canvas: undefined,
        ctx : undefined,
        width : 1000,
        height: 800,

    },

    init(){
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width=this.width;
        this.canvas.height=this.height;
        this.background = new Background(this.ctx,this.width,this.height);
        this.background.draw();
    },

    drawAll() {
        this.interval = setInterval(() => {
            this.clear();
            this.background.draw();
      
    },10);

    },

    clear(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    },

};

game.init();
game.drawAll();

