let game = {
    canvas : undefined,
    ctx : undefined,
    widht : undefined,
    height : undefined,
    FPS : 60,

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.setDimensions();
        this.start();
    },

    start() {
        this.reset();
        this.interval = setInterval(()=>{
            if(this.framesCounter>5000){
                this.framesCounter = 0;
            }
            this.framesCounter++;
            this.clear();
            this.drawAll();
        },1000/this.FPS);

    },

    setDimensions() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;

    },

    drawAll() {
        this.background.draw()
    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height, "./img/bg.png");
        
    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },  
    

}
