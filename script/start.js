document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function print()
{
    player.rysowanie();
    field.rysowanie();
    for(var i = 1; i<number;i++)
    {
        blok[i].rysowanie();
    }
}
function move()
{
    if(player.life==0)
        game_over();
    player.move();
    if(player.y > canvas.height)
        death();
    move_map();
}
    
function callback()
{
    window.requestAnimationFrame(callback);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    print();
    move();
}
window.requestAnimationFrame(callback);