var number = 0;
var field = new game_element;
field.x = 0;
field.type = 1;
field.height = 30;
field.color = `rgb(0,255,0)`;
field.y = can_height - field.height;
field.lenght = 2100;
obiekty[0] = field;
number++;

var player = new game_element;
player.size = 15;
player.type = 0;
player.color = `rgb(120,40,255)`;
player.life = 3;
player.x = player.size + 10;
player.y = field.y - player.size-15;
var start_x = player.x;
var start_y = player.y;

var blok = new Array;

var blok_poj = new game_element;
blok_poj.color = `rgb(150,75,0)`;
blok_poj.lenght = single_block.x;
blok_poj.height = single_block.y;
blok_poj.type = 1;
blok_poj.y = can_height - field.height - single_block.y*4;
blok_poj.x = 510;
obiekty[1] = blok_poj;
number++;
for(var i = 0; i < 5; i++)
{
    blok[i] = new game_element;
    blok[i].color = `rgb(150,75,0)`;
    blok[i].lenght = single_block.x;
    blok[i].height = single_block.y;
    blok[i].type = 1;
    blok[i].y = can_height - field.height - single_block.y*4;
    blok[i].x = 600 + i*single_block.x;
    obiekty[number+i] = blok[i];
}
number+=5;