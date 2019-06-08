var canvas = document.querySelector('#mario');
var ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 360;
const can_width = canvas.width;
const can_height = canvas.height;
var single_block = {
    x: 30,
    y: 30
};
var obiekty = new Array;
var img_game_over;