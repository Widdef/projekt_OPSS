function keyDownHandler(e){
    var kod = e.keyCode;
    switch(kod)
    {
        case 39: player.vx = 3; break; // RIGHT
        case 37: player.vx = -3; break; // LEFT
        case 38: 
            for(let i = 0; i < obiekty.length;i++)
            {
                if(!colisionY(obiekty[i]))
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

function colisionY(e){
    var przemieszczenie;
    if((player.x + player.size > e.x)&&(player.x+1 < e.x + e.lenght))
    {
        if(player.vy < 0)
            przemieszczenie = player.y + player.vy;
        else
            przemieszczenie = player.y + player.vy + player.size;
        if((przemieszczenie > e.y)&& (przemieszczenie < e.y + e.height))
        {
            return true;
        }
    }
    return false;
}
function colisionX(e){
    var przemieszczenie;
    if((player.y + player.size-1 > e.y)&&(player.y < e.y+e.height))
    {
        if(player.vx < 0)
            przemieszczenie = player.x + player.vx;
        else
            przemieszczenie = player.x + player.size + 1 + player.vx;
        if((przemieszczenie > e.x)&&(przemieszczenie < e.x + e.lenght))
        {
            return true;
        }
    }
    return false;
}

function game_over(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    img_end = new Image(480,270);
    img_end.src = "img/game_over.jpg";
    ctx.drawImage(img_end,0,0);
}

function death(){
    player.life--;
    map1();
    player.x = start_x;
    player.y = start_y-player.size;
}

function win(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    img_end = new Image(480,270);
    img_end.src = "img/win.jpg";
    ctx.drawImage(img_end,0,0);
}