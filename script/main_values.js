var canvas = document.querySelector('#mario');
var ctx = canvas.getContext('2d');

canvas.width = 1200;
canvas.height = 720;
const can_width = canvas.width;
const can_height = canvas.height;
var single_block = {
    x: 30,
    y: 30
};
var sound = new Sound("music/ThemeSong.mp3");
var obiekty = new Array;
var number = 0;
var img_end;
var animacja = 0;

var field = new game_element;
field.type = 1;
field.height = 30;
field.color = `rgb(0,255,0)`;
field.y = can_height - field.height;
field.lenght = 2070;
obiekty[0] = field;
number++;

var player = new game_element;
player.size = 30;
player.type = 0;
player.color = `rgb(120,40,255)`;
player.life = 3;
player.x = 120;
player.y = field.y - player.size;
player.image = new Image(30,30);
player.image.src = "img/player/player.png";
var start_x = player.x;
var start_y = player.y;
