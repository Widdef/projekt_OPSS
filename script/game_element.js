function game_element() {
    this.size;
    this.life;
    this.lenght;
    this.height;
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.color;
    this.type;
    this.image;
    this.rysowanie = function(){
        switch(this.type)
        {
            case 0: ctx.drawImage(this.image,this.x,this.y); break;
            case 1: ctx.beginPath();
                    ctx.fillStyle = this.color;
                    ctx.rect(this.x,this.y,this.lenght,this.height); 
                    ctx.stroke();
                    ctx.fill();
                    break;
        }
    }
    this.move = function(){
        if(this.x + this.vx - this.size <0)
            this.vx = 0;
        let flag = true;
        for(var i = 0; i < obiekty.length;i++)
        {
            if(colisionX(obiekty[i]))
            {
                flag = false;
            }   
        }
        if(!flag)
        {
            this.vx = 0;
        }
        this.x += this.vx;
        flag = true;
        for(var i = 0; i < obiekty.length;i++)
        {
            if(colisionY(obiekty[i]))
            {
                flag = false;
            }   
        }
        if(flag)
        {
            if(this.vy <25)
                this.vy += 1;
        }
        else
        {
            this.vy = 0;
        }
        this.y += this.vy;
    }
}
