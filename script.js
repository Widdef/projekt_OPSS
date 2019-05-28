function keyDownHandler(e){
    var kod = e.keyCode;
    switch(kod)
    {
        case 39: player.vx = 3; break; // RIGHT
        case 37: player.vx = -3; break; // LEFT
        case 38: 
            // console.log(player.y + player.size);
            // console.log(can_height - field.height);
            if(player.y + player.size >= can_height - field.height)
            {
                player.vy = -20;
            };
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
        // case 38: player.vy = 0; break; // UP
        // case 40: player.vy = 0; break; // DOWN
    }
}

function colision(e){
    var przemiszczenie
    if(player.vx!=0)
    {
        if((player.y > e.y)&&(player.y < e.y+e.height))
        {
            przemiszczenie = player.x + player.vx;
            if((przemeszczenie > e.x)&& (przemiszczenie < e.x + e.width))
            {
                return false;
            }
        }
        
    }
}

// function verlet(rx,ry,vy){
//     let dt_p = dt / 1000;
//     do{
//         rx = rx + player.vx * dt_p + 5 * dt_p*dt_p;
//         ry = ry + vy * dt_p + 5 * dt_p*dt_p;
//         vy = vy - 10 * dt_p;
//     }while(ry>field.y);
// }
//import game_element from "./game_element.js";

var field = new game_element;
field.x = 0;
field.type = 1;
field.height = 40;
field.color = `rgb(0,255,0)`;
field.y = can_height - field.height;
field.lenght = can_width;

var player = new game_element;
player.size = 10;
player.type = 0;
player.color = `rgb(120,40,255)`;
player.x = player.size + 10;
player.y = field.y - player.size;
player.life = 3;

var blok = new Array;
for(var i = 0; i < 3; i++)
{
    blok[i] = new game_element;
    blok[i].color = `rgb(150,75,0)`;
    blok[i].lenght = single_block.x;
    blok[i].height = single_block.y;
    blok[i].type = 1;
    blok[i].y = can_height - field.height - blok[i].height - 50;
    blok[i].x = 100 + i*single_block.x;
}

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
}
    
function callback()
{
    window.requestAnimationFrame(callback);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    print();
    move();
}
window.requestAnimationFrame(callback);

// window.setInterval(function(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     player.move();
//     player.rysowanie(0);
//     field.rysowanie(1);
// },dt);