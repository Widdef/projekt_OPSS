var canvas = document.querySelector('#mario');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const can_width = canvas.width;
const can_height = canvas.height;

function keyDownHandler(e){

}
function keyUpHandler(e) {
    var kod = e.keyCode;
    
}

function verlet(){
    
}

function genplayer() {
    this.size;
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
field.height = 20;
field.y = can_height - field.height;
field.lenght = can_width;
field.rysowanie();
var player = new genplayer;
player.size = 5;
player.x = 10;
player.y = field.y - player.size;
player.rysowanie();
document.addEventListener("keydown", keyUpHandler);
document.addEventListener("keyup", keyUpHandler);