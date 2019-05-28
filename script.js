var canvas = document.querySelector('#mario');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const can_width = canvas.width;
const can_height = canvas.height;
//const dt = 10;

function keyDownHandler(e){
    var kod = e.keyCode;
    switch(kod)
    {
        case 39: player.vx = 1; break; // RIGHT
        case 37: player.vx = -1; break; // LEFT
        case 38: 
            console.log(player.y + player.size);
            console.log(can_height - field.height);
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
        case 38: player.vy = 0; break; // UP
        // case 40: player.vy = 0; break; // DOWN
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
field.height = 40;
field.color = `rgb(0,255,0)`;
field.y = can_height - field.height;
field.lenght = can_width;
field.rysowanie(1);

var player = new game_element;
player.size = 10;
player.color = `rgb(120,40,255)`;
player.x = player.size + 10;
player.y = field.y - player.size;
player.life = 3;
player.rysowanie(0);

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function callback()
{
    window.requestAnimationFrame(callback);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.move();
    player.rysowanie(0);
    field.rysowanie(1);
}

window.requestAnimationFrame(callback);

// window.setInterval(function(){
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     player.move();
//     player.rysowanie(0);
//     field.rysowanie(1);
// },dt);