function map1()
{
    number = 1;
    field.x = 0;

    obiekty[number] = new game_element;
    obiekty[number].color = `rgb(150,75,0)`;
    obiekty[number].lenght = single_block.x;
    obiekty[number].height = single_block.y;
    obiekty[number].type = 1;
    obiekty[number].y = can_height - field.height - single_block.y*5;
    obiekty[number].x = 510;
    number++;
    for(var i = 0; i < 5; i++)
    {
        obiekty[number] = new game_element;
        obiekty[number].color = `rgb(150,75,0)`;
        obiekty[number].lenght = single_block.x;
        obiekty[number].height = single_block.y;
        obiekty[number].type = 1;
        obiekty[number].y = can_height - field.height - single_block.y*5;
        obiekty[number].x = 630 + i*single_block.x;
        number++;
    }




    //2-ga platforma
    obiekty[number] = new game_element;
    obiekty[number].color = `rgb(150,75,0)`;
    obiekty[number].lenght = single_block.x;
    obiekty[number].height = single_block.y;
    obiekty[number].type = 1;
    obiekty[number].y = can_height - field.height - single_block.y*9;
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
        obiekty[number].y = can_height - field.height - single_block.y*5;
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
        obiekty[number].y = can_height - field.height - single_block.y*9;
        obiekty[number].x = 2430 + i*single_block.x;
        number++;
    }




    //3-cia platforma
    obiekty[number] = new game_element;
    obiekty[number].x = 2730;
    obiekty[number].type = 1;
    obiekty[number].height = 30;
    obiekty[number].color = `rgb(0,255,0)`;
    obiekty[number].y = can_height - obiekty[number].height;
    obiekty[number].lenght = 2010;
    number++;

    for(var i = 0; i < 4; i++)
    {
        obiekty[number] = new game_element;
        obiekty[number].color = `rgb(150,75,0)`;
        obiekty[number].lenght = single_block.x;
        obiekty[number].height = single_block.y;
        obiekty[number].type = 1;
        obiekty[number].y = can_height - field.height - single_block.y*9;
        obiekty[number].x = 2790 + i*single_block.x;
        number++;
    }

    obiekty[number] = new game_element;
    obiekty[number].color = `rgb(150,75,0)`;
    obiekty[number].lenght = single_block.x;
    obiekty[number].height = single_block.y;
    obiekty[number].type = 1;
    obiekty[number].y = can_height - field.height - single_block.y*5;
    obiekty[number].x = 2880;
    number++;

    for(var i = 0; i < 2; i++)
    {
        obiekty[number] = new game_element;
        obiekty[number].color = `rgb(150,75,0)`;
        obiekty[number].lenght = single_block.x;
        obiekty[number].height = single_block.y;
        obiekty[number].type = 1;
        obiekty[number].y = can_height - field.height - single_block.y*5;
        obiekty[number].x = 3060 + i*single_block.x;
        number++;
    }

    obiekty[number] = new game_element;
    obiekty[number].color = `rgb(150,75,0)`;
    obiekty[number].lenght = single_block.x;
    obiekty[number].height = single_block.y;
    obiekty[number].type = 1;
    obiekty[number].y = can_height - field.height - single_block.y*5;
    obiekty[number].x = 3270;
    number++;

    obiekty[number] = new game_element;
    obiekty[number].color = `rgb(150,75,0)`;
    obiekty[number].lenght = single_block.x;
    obiekty[number].height = single_block.y;
    obiekty[number].type = 1;
    obiekty[number].y = can_height - field.height - single_block.y*5;
    obiekty[number].x = 3390;
    number++;

    obiekty[number] = new game_element;
    obiekty[number].color = `rgb(150,75,0)`;
    obiekty[number].lenght = single_block.x;
    obiekty[number].height = single_block.y;
    obiekty[number].type = 1;
    obiekty[number].y = can_height - field.height - single_block.y*9;
    obiekty[number].x = 3390;
    number++;

    obiekty[number] = new game_element;
    obiekty[number].color = `rgb(150,75,0)`;
    obiekty[number].lenght = single_block.x;
    obiekty[number].height = single_block.y;
    obiekty[number].type = 1;
    obiekty[number].y = can_height - field.height - single_block.y*5;
    obiekty[number].x = 3510;
    number++;

    obiekty[number] = new game_element;
    obiekty[number].color = `rgb(150,75,0)`;
    obiekty[number].lenght = single_block.x;
    obiekty[number].height = single_block.y;
    obiekty[number].type = 1;
    obiekty[number].y = can_height - field.height - single_block.y*5;
    obiekty[number].x = 3690;
    number++;

    for(var i = 0; i < 3; i++)
    {
        obiekty[number] = new game_element;
        obiekty[number].color = `rgb(150,75,0)`;
        obiekty[number].lenght = single_block.x;
        obiekty[number].height = single_block.y;
        obiekty[number].type = 1;
        obiekty[number].y = can_height - field.height - single_block.y*9;
        obiekty[number].x = 3780 + i*single_block.x;
        number++;
    }

    for(var i = 0; i < 4; i++)
    {
        obiekty[number] = new game_element;
        obiekty[number].color = `rgb(150,75,0)`;
        obiekty[number].lenght = single_block.x;
        obiekty[number].height = single_block.y;
        obiekty[number].type = 1;
        obiekty[number].y = can_height - field.height - single_block.y*9;
        obiekty[number].x = 3990 + i*single_block.x;
        number++;
    }

    for(var i = 0; i < 2; i++)
    {
        obiekty[number] = new game_element;
        obiekty[number].color = `rgb(150,75,0)`;
        obiekty[number].lenght = single_block.x;
        obiekty[number].height = single_block.y;
        obiekty[number].type = 1;
        obiekty[number].y = can_height - field.height - single_block.y*5;
        obiekty[number].x = 4020 + i*single_block.x;
        number++;
    }

    for(var j = 0; j < 4; j++)
    {
        for(var i = j; i < 4; i++)
        {
            obiekty[number] = new game_element;
            obiekty[number].color = `rgb(150,75,0)`;
            obiekty[number].lenght = single_block.x;
            obiekty[number].height = single_block.y;
            obiekty[number].type = 1;
            obiekty[number].y = can_height - field.height - single_block.y*(1+j);
            obiekty[number].x = 4170 + i*single_block.x;
            number++;
        }
    }

    for(var j = 4; j > 0; j--)
    {
        for(var i = j; i > 0; i--)
        {
            obiekty[number] = new game_element;
            obiekty[number].color = `rgb(150,75,0)`;
            obiekty[number].lenght = single_block.x;
            obiekty[number].height = single_block.y;
            obiekty[number].type = 1;
            obiekty[number].y = can_height - field.height - single_block.y*(5-j);
            obiekty[number].x = 4350 + i*single_block.x;
            number++;
        }
    }

    for(var j = 0; j < 4; j++)
    {
        for(var i = j; i <= 4; i++)
        {
            obiekty[number] = new game_element;
            obiekty[number].color = `rgb(150,75,0)`;
            obiekty[number].lenght = single_block.x;
            obiekty[number].height = single_block.y;
            obiekty[number].type = 1;
            obiekty[number].y = can_height - field.height - single_block.y*(1+j);
            obiekty[number].x = 4590 + i*single_block.x;
            number++;
        }
    }



    //4-ta platforma
    obiekty[number] = new game_element;
    obiekty[number].x = 4800;
    obiekty[number].type = 1;
    obiekty[number].height = 30;
    obiekty[number].color = `rgb(0,255,0)`;
    obiekty[number].y = can_height - obiekty[number].height;
    obiekty[number].lenght = 1710;
    number++;

    for(var j = 4; j > 0; j--)
    {
        for(var i = j; i > 0; i--)
        {
            obiekty[number] = new game_element;
            obiekty[number].color = `rgb(150,75,0)`;
            obiekty[number].lenght = single_block.x;
            obiekty[number].height = single_block.y;
            obiekty[number].type = 1;
            obiekty[number].y = can_height - field.height - single_block.y*(5-j);
            obiekty[number].x = 4770 + i*single_block.x;
            number++;
        }
    }

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
            obiekty[number].x = 5040 + single_block.x * j;
            number++;
        }
    }

    for(var i = 0; i < 4; i++)
    {
        obiekty[number] = new game_element;
        obiekty[number].color = `rgb(150,75,0)`;
        obiekty[number].lenght = single_block.x;
        obiekty[number].height = single_block.y;
        obiekty[number].type = 1;
        obiekty[number].y = can_height - field.height - single_block.y*5;
        obiekty[number].x = 5190 + i*single_block.x;
        number++;
    }

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
            obiekty[number].x = 5520 + single_block.x * j;
            number++;
        }
    }

    for(var j = 0; j < 8; j++)
    {
        for(var i = j; i <= 8; i++)
        {
            obiekty[number] = new game_element;
            obiekty[number].color = `rgb(150,75,0)`;
            obiekty[number].lenght = single_block.x;
            obiekty[number].height = single_block.y;
            obiekty[number].type = 1;
            obiekty[number].y = can_height - field.height - single_block.y*(1+j);
            obiekty[number].x = 5580 + i*single_block.x;
            number++;
        }
    }

    obiekty[number] = new game_element;
    obiekty[number].color = `rgb(150,75,0)`;
    obiekty[number].lenght = single_block.x;
    obiekty[number].height = single_block.y;
    obiekty[number].type = 1;
    obiekty[number].y = can_height - field.height - single_block.y;
    obiekty[number].x = 6090;
    number++;
}