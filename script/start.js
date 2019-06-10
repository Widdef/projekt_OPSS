document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
player.life = 3;

function print()
{
    if(player.vx != 0)
    {
        player.image.src = "img/player/player_move_" + (animacja++%3) + ".png";
    }
    else
    {
        animacja = 0;
        player.image.src = "img/player/player.png";
    }
    player.rysowanie();
    field.rysowanie();
    for(var i = 1; i<number;i++)
    {
        obiekty[i].rysowanie();
    }
    life();
}
function move()
{
    if(player.life<=0)
    {
        game_over();
    }
    player.move();
    if(player.x >= obiekty[number-1].x)
    {
        win();
    }
    if(player.y > canvas.height)
    {
        death();
    }
    move_map();
}
    
function callback()
{
    window.requestAnimationFrame(callback);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    print();
    move();
}
map1();
sound.play();
window.requestAnimationFrame(callback);