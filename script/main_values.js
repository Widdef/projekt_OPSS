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
var obiekty = new Array;
var img_game_over;