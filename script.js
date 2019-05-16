var canvas = document.querySelector("#mario");
var ctx = canvas.getContext('2d');

var canvas_style = window.getComputedStyle(canvas);
var can_width = canvas_style.width;
var can_height = canvas_style.height;

function keyDownHandler(e){

}
function keyUpHandler(e) {
    var kod = e.keyCode;
    
}
function genplayer() {
    this.size = 3;
    this.x = 4;
    this.y = 4;
    this.vx = 0;
    this.vy = 0;
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
        ctx.stroke();
        ctx.fill();
    }
}
var player = new genplayer;
player.rysowanie();
var field = new plansza;
field.x = 0;
field.y = 1260;
field.lenght = 800;
field.height = 20;
field.rysowanie();
document.addEventListener("keydown", keyUpHandler);
document.addEventListener("keyup", keyUpHandler);