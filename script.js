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
        case 39: player.x += 1; break; // RIGHT
        case 37: player.y -= 1; break; // LEFT
        case 38: player.y -= 1; break; // UP
        case 40: player.y += 1; break; // DOWN
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

function genplayer() {
    this.size;
    this.life;
    this.x;
    this.y;
    this.vx;
    this.vy;
    this.color = `rgb(120,40,255)`;
    this.rysowanie = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.stroke();
        ctx.fill();
    }
}

function plansza(){
    this.x;
    this.y;
    this.lenght;
    this.height;
    this.color = `rgb(0,255,0)`;
    this.rysowanie = function(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.rect(this.x,this.y,this.lenght,this.height);
        ctx.fill();
    }
}


var field = new plansza;
field.x = 0;
field.height = 40;
field.y = can_height - field.height;
field.lenght = can_width;
field.rysowanie();

var player = new genplayer;
player.size = 10;
player.x = player.size + 10;
player.y = field.y - player.size;
player.life = 3;
player.rysowanie();

var i = 0;
document.addEventListener("keydown", keyDownHandler);
//document.addEventListener("keyup", keyUpHandler);
while(i<1000)
{
    setTimeout(function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        player.rysowanie();
        field.rysowanie();
        i++;
    },100*i++);
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