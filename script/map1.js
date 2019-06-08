var number = 0;
var field = new game_element;
field.x = 0;
field.type = 1;
field.height = 30;
field.color = `rgb(0,255,0)`;
field.y = can_height - field.height;
field.lenght = 2100;
obiekty[number++] = field;

var player = new game_element;
player.size = 15;
player.type = 0;
player.color = `rgb(120,40,255)`;
player.life = 3;
var start_x = player.x = player.size + 10;
var start_y = player.y = field.y - player.size;

var blok = new Array;

blok[number] = new game_element;
blok[number].color = `rgb(150,75,0)`;
blok[number].lenght = single_block.x;
blok[number].height = single_block.y;
blok[number].type = 1;
blok[number].y = can_height - field.height - blok[number].height*4;
blok[number].x = 510;
obiekty[number] = blok[number];
number++;

for(var i = 0; i < 5; i++)
{
    blok[i+number] = new game_element;
    blok[i+number].color = `rgb(150,75,0)`;
    blok[i+number].lenght = single_block.x;
    blok[i+number].height = single_block.y;
    blok[i+number].type = 1;
    blok[i+number].y = can_height - field.height - single_block.y*4;
    blok[i+number].x = 630 + i*single_block.x;
    obiekty[i] = blok[i];
}
number+=5;