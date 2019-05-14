var canvas = document.querySelector("#mario");
var ctx = canvas.getContext('2d');

function keyDownHandler(e){

}
function keyUpHandler(e) {
    var kod = e.keyCode;
    
}
function genplayer() {
    this.size = 3;
    this.x = 40;
    this.y = 40;
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
var player = new genplayer;
player.rysowanie();
document.addEventListener("keydown", keyUpHandler);
document.addEventListener("keyup", keyUpHandler);