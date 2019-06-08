document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function print()
{
    player.rysowanie();
    field.rysowanie();
    blok[0].rysowanie();
    blok[1].rysowanie();
    blok[2].rysowanie();
}
function move()
{
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