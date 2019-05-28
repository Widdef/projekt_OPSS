function game_element() {
    this.size;
    this.life;
    this.lenght;
    this.height;
    this.x;
    this.y;
    this.vx = 0;
    this.vy = 0;
    this.color;
    this.rysowanie = function(type){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        switch(type)
        {
            case 0: ctx.arc(this.x, this.y, this.size, 0, Math.PI*2); break;
            case 1: ctx.rect(this.x,this.y,this.lenght,this.height); break;
        }
        ctx.stroke();
        ctx.fill();
    }
    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;
        if(this.y + this.size < can_height - field.height)
        {
            this.vy += 2;
            // console.log(this.vy);
        }
        else
        {
            this.vy = 0;
        }
        
    }
}
//export {game_element};