function keyDownHandler(e){
    var kod = e.keyCode;
    switch(kod)
    {
        case 39: player.vx = 3; break; // RIGHT
        case 37: player.vx = -3; break; // LEFT
        case 38: 
            for(let i = 0; i < obiekty.length;i++)
            {
                if(!colision(obiekty[i]))
                {
                    if(player.vy == 0)
                    {
                        player.vy = -20;
                    }
                }
            }
            break; // UP
        // case 40: player.vy = 1; break; // DOWN
    }
}

function keyUpHandler(e) {
    var kod = e.keyCode;
    switch(kod)
    {
        case 39: player.vx = 0; break; // RIGHT
        case 37: player.vx = 0; break; // LEFT
    }
}

function move_map(){
    if(player.x > canvas.width/3)
    {
        for(var i = 0; i<obiekty.length; i++)
        {
            obiekty[i].x -= 6;
        }
        player.x -= 3;
    }
}

function colision(e){
    var przemieszczenie;
    if((player.y + player.size > e.y)&&(player.y < e.y+e.height))
    {
        przemieszczenie = player.x + player.size + player.vx;
        if((przemieszczenie > e.x)&&(przemieszczenie < e.x + e.lenght))
        {
            return true;
        }
    }
    if((player.x + player.size >= e.x)&&(player.x <= e.x + e.lenght))
    {
        przemieszczenie = player.y + player.size + player.vy;
        if((przemieszczenie > e.y)&& (przemieszczenie < e.y + e.height))
        {
            return true;
        }
    }
    return false;
}

function game_over(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var img_game_over = new Image();
    img_game_over.onload = function(){
        ctx.drawImage(img_game_over,0,0);
    }
    img_game_over.src = "";
}

function death(){
    if(player.life > 0)
    {
        player.life--;
    }
    else
    {
        game_over();
    }
}