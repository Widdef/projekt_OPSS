var number = 0;
var field = new game_element;
field.x = 0;
field.type = 1;
field.height = 30;
field.color = `rgb(0,255,0)`;
field.y = can_height - field.height;
field.lenght = 2070;
obiekty[0] = field;
number++;

var player = new game_element;
player.size = 15;
player.type = 0;
player.color = `rgb(120,40,255)`;
player.life = 3;
player.x = 120;
player.y = field.y - player.size-15;
var start_x = player.x;
var start_y = player.y;

obiekty[number] = new game_element;
obiekty[number].color = `rgb(150,75,0)`;
obiekty[number].lenght = single_block.x;
obiekty[number].height = single_block.y;
obiekty[number].type = 1;
obiekty[number].y = can_height - field.height - single_block.y*4;
obiekty[number].x = 510;
number++;
for(var i = 0; i < 5; i++)
{
    obiekty[number] = new game_element;
    obiekty[number].color = `rgb(150,75,0)`;
    obiekty[number].lenght = single_block.x;
    obiekty[number].height = single_block.y;
    obiekty[number].type = 1;
    obiekty[number].y = can_height - field.height - single_block.y*4;
    obiekty[number].x = 630 + i*single_block.x;
    number++;
}

obiekty[number] = new game_element;
obiekty[number].color = `rgb(150,75,0)`;
obiekty[number].lenght = single_block.x;
obiekty[number].height = single_block.y;
obiekty[number].type = 1;
obiekty[number].y = can_height - field.height - single_block.y*8;
obiekty[number].x = 690;
number++;

for(var i = 0; i < 2; i++)
{
    for(var j = 0; j < 2; j++)
    {
        obiekty[number] = new game_element;
        obiekty[number].color = `rgb(0,255,0)`;
        obiekty[number].lenght = single_block.x;
        obiekty[number].height = single_block.y;
        obiekty[number].type = 1;
        obiekty[number].y = can_height - field.height - single_block.y*(i+1);
        obiekty[number].x = 870 + single_block.x * j;
        number++;
    }
}

for(var i = 0; i < 3; i++)
{
    for(var j = 0; j < 2; j++)
    {
        obiekty[number] = new game_element;
        obiekty[number].color = `rgb(0,255,0)`;
        obiekty[number].lenght = single_block.x;
        obiekty[number].height = single_block.y;
        obiekty[number].type = 1;
        obiekty[number].y = can_height - field.height - single_block.y*(i+1);
        obiekty[number].x = 1170 + single_block.x * j;
        number++;
    }
}

for(var i = 0; i < 4; i++)
{
    for(var j = 0; j < 2; j++)
    {
        obiekty[number] = new game_element;
        obiekty[number].color = `rgb(0,255,0)`;
        obiekty[number].lenght = single_block.x;
        obiekty[number].height = single_block.y;
        obiekty[number].type = 1;
        obiekty[number].y = can_height - field.height - single_block.y*(i+1);
        obiekty[number].x = 1410 + single_block.x * j;
        number++;
    }
}

for(var i = 0; i < 4; i++)
{
    for(var j = 0; j < 2; j++)
    {
        obiekty[number] = new game_element;
        obiekty[number].color = `rgb(0,255,0)`;
        obiekty[number].lenght = single_block.x;
        obiekty[number].height = single_block.y;
        obiekty[number].type = 1;
        obiekty[number].y = can_height - field.height - single_block.y*(i+1);
        obiekty[number].x = 1740 + single_block.x * j;
        number++;
    }
}
obiekty[number] = new game_element;
obiekty[number].color = `rgb(150,75,0)`;
obiekty[number].lenght = single_block.x;
obiekty[number].height = single_block.y;
obiekty[number].type = 1;
obiekty[number].y = can_height - field.height - single_block.y*5;
obiekty[number].x = 1950;
number++;

obiekty[number] = new game_element;
obiekty[number].x = 2130;
obiekty[number].type = 1;
obiekty[number].height = 30;
obiekty[number].color = `rgb(0,255,0)`;
obiekty[number].y = can_height - obiekty[number].height;
obiekty[number].lenght = 450;
number++;

for(var i = 0; i < 3; i++)
{
    obiekty[number] = new game_element;
    obiekty[number].color = `rgb(150,75,0)`;
    obiekty[number].lenght = single_block.x;
    obiekty[number].height = single_block.y;
    obiekty[number].type = 1;
    obiekty[number].y = can_height - field.height - single_block.y*4;
    obiekty[number].x = 2340 + i*single_block.x;
    number++;
}

for(var i = 0; i < 8; i++)
{
    obiekty[number] = new game_element;
    obiekty[number].color = `rgb(150,75,0)`;
    obiekty[number].lenght = single_block.x;
    obiekty[number].height = single_block.y;
    obiekty[number].type = 1;
    obiekty[number].y = can_height - field.height - single_block.y*8;
    obiekty[number].x = 2430 + i*single_block.x;
    number++;
}