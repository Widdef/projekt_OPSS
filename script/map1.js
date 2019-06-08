var field = new game_element;
field.x = 0;
field.type = 1;
field.height = 40;
field.color = `rgb(0,255,0)`;
field.y = can_height - field.height;
field.lenght = 200;//2100;
obiekty[0] = field;

var player = new game_element;
player.size = 10;
player.type = 0;
player.color = `rgb(120,40,255)`;
player.life = 3;
var start_x = player.x = player.size + 10;
var start_y = player.y = field.y - player.size;

var blok = new Array;
for(var i = 0; i < 3; i++)
{
    blok[i] = new game_element;
    blok[i].color = `rgb(150,75,0)`;
    blok[i].lenght = single_block.x;
    blok[i].height = single_block.y;
    blok[i].type = 1;
    blok[i].y = can_height - field.height - blok[i].height - 50;
    blok[i].x = 100 + i*single_block.x;
    obiekty[i+1] = blok[i];
}