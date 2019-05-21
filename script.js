var canvas = document.querySelector('#mario');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const can_width = canvas.width;
const can_height = canvas.height;

function keyDownHandler(e){
    var kod = e.keyCode;
    switch(kod)
    {
        case 39: player.vx += 1; break; // RIGHT
        case 37: player.vx -= 1; break; // LEFT
        case 38: player.vy -= 1; break; // UP
        case 40: player.vy += 1; break; // DOWN
    }
}

/*function keyUpHandler(e) {
    var kod = e.keyCode;
    switch(kod)
    {
        case 39: alert("1"); break; // RIGHT
        case 37: alert("a2"); break; // LEFT
        case 38: alert("3"); break; // UP
        case 40: alert("4"); break; // DOWN
    }
}*/

function verlet(r,v,dt){
    r = r + v * dt + 5 * dt*dt;
    v = v + 10 * dt;
}
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

var i = 0;
document.addEventListener("keydown", keyDownHandler);
//document.addEventListener("keyup", keyUpHandler);
window.setInterval(function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.move();
    player.rysowanie(0);
    field.rysowanie(1);
    i++;
},1000);
if(player.x < 0 || player.y < 0 || player.x > can_width || player.y > field.y)
{
    alert("cos nie tak");
    player.life--;
}
/*while(player.life)
{
    setTimeout(function(){
        ctx.clearRect(0, 0, canvas.width, can_height - field.height);
        player.rysowanie();
        i++;
    },100*i);
    if(i == 10000)
    {
        player.life = 0;
    }
}*/