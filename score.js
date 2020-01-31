//to-do: refactor to pure object rather than class
const score = {
    
        ctx : undefined,
        init(ctx){
            this.ctx=ctx;
            this.ctx.font = "20px Arial";
            this.ctx.fillStyle = "red";
            this.width = 200;
            this.height = 100;

        },

        update(score){
            
            this.ctx.fillText(`Score: ${+score} `, 65, 80);
        }

    };



