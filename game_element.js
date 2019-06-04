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
    this.type;
    this.rysowanie = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        switch(this.type)
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
        let flag = true;
        for(var i = 0; i < obiekty.length;i++)
        {
            if(colision(obiekty[i]))
            {
                flag = false;
                console.log("tu jest");
            }   
        }
        if(flag)
        {
            this.vy += 1;
        }
        else
        {
            this.vy = 0;
        }
        if(this.y + this.size > can_height - field.height)
        {
            this.y = can_height - field.height - this.size;
        }
    }
}
//export {game_element};