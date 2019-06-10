document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
player.life = 3;

function print()
{
    player.rysowanie();
    field.rysowanie();
    for(var i = 1; i<number;i++)
    {
        obiekty[i].rysowanie();
    }
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
window.requestAnimationFrame(callback);