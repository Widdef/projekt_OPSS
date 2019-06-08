var canvas = document.querySelector('#mario');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth*2/3;
canvas.height = window.innerHeight*2/3;
const can_width = canvas.width;
const can_height = canvas.height;
var single_block = {
    x: 30,
    y: 30
};
var obiekty = new Array;