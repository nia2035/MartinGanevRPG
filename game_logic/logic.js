var states = 
{
	ADVENTURE:"Adventure",
	BATTLE:"Battle"
};
var creature_states = {
		NORMAL: 'normal', 
		ATTACKED: 'attacked', 
		ATTACKING: 'attacking',
		WAIT_TO_ATTACK: 'ready_to_attack'
	};

var state = states.ADVENTURE;

function makeEnemies(){
	for(i=0;i<Math.ceil(Math.random()*3);i++)
	{
		enemies[i] = new Enemy(100, 5)
	}
}
function goToNextRoom(){
	if(myX>=800-player.avatar.width+10){
		myX=0;
	}
	if(myX<=-10){
		myX=800-player.avatar.width;
	}
	if(myY<=-10){
		myY=600-player.avatar.height;
	}
	if(myY>=600-player.avatar.height+10){
		myY=0;
	}
}


/*
left arrow: 37 
up arrow: 38
right arrow: 39
down arrow: 40
use for PP Matura MT Script Capitals
*/
var whichDirection = function(){
		var c;
                var descr;
            if(isKeyPressed[39]==1){
                
		for(var i=0;i<player.avatar.height;i++){
                    c = maps[room_id][player.my_fucking_x+player.avatar.width+3][player.my_fucking_y+i]
                    descr = getDescription(c)
                    current_message = descr.text;
                    if(descr.type == "door")
                    {
                        room_id = descr.id;
                        whichbackground="bg" + descr.id;
                        color_map = map_description[descr.id];
                        player.my_fucking_x = descr.x;
                        player.my_fucking_y = descr.y;
                    }
                    break;
                }
            }else if(isKeyPressed[37]==1){
                 
		for(var i=0;i<player.avatar.height;i++){
                    c = maps[room_id][player.my_fucking_x-15][player.my_fucking_y+i];                
                    descr = getDescription(c)
                    current_message = descr.text;
                    
                    if(descr.type == "door")
                    {
                        room_id = descr.id;
                        whichbackground="bg" + descr.id;
                        color_map = map_description[descr.id];
                        player.my_fucking_x = descr.x;
                        player.my_fucking_y = descr.y;

                    }
                    break;
                }
            }else if(isKeyPressed[40]==1){
		for(var i=0;i<player.avatar.height;i++){
                    c = maps[room_id][player.my_fucking_x+i][player.my_fucking_y+player.avatar.height+15];
                    descr = getDescription(c)
                    current_message = descr.text;                    
                    if(descr.type == "door")
                    {
                        room_id = descr.id;
                        whichbackground="bg" + descr.id;
                        color_map = map_description[descr.id];
                        player.my_fucking_x = descr.x;
                        player.my_fucking_y = descr.y;
                    }        
                    break;  	
                }
            }else if(isKeyPressed[38]==1){
                
		for(var i=0;i<player.avatar.height;i++){
                    c=maps[room_id][player.my_fucking_x+i][player.my_fucking_y-15]
                    descr = getDescription(c)
                    current_message = descr.text;
                    if(descr.type == "door")
                    {
                        room_id = descr.id;
                        whichbackground="bg" + descr.id;
                        color_map = map_description[descr.id];
                        player.my_fucking_x = descr.x;
                        player.my_fucking_y = descr.y;

                    }
                    break;
		}
            }
            
	//return "Welcome to hell";
	
	};
function updateTextBox(){
    var text = current_message;
    
    if(text!=""){
    context.fillStyle  = "white"
    context.fillRect(100, 550, 600, 50)
    context.fillStyle  = "black"
    context.lineWidth = "4"
    context.strokeRect(100, 550, 600-2, 50-2)
    
    }
    context.font = "32px Arial ";
    context.fillStyle = "#000000";
    context.fillText(text, 400, 585)
    context.textAlign="center"
}
function disableButtons(){
	buton.disabled=true;
	special_buton.disabled = true;
}
function enableButtons(){
	buton.disabled=false;
	special_buton.disabled = false;
}
function getDescription(color)
{
	for(var element_ = 0; element_ < color_map.description.length; element_++)
	{
		if(color_map.description[element_].code == color) 
			return color_map.description[element_];
	}
	
	return {text:""};
}
function setPlayerSpawn(direction){
    if(direction == "right"){
        for(broqch = 800-player.avatar.width-10; broqch  > 0; broqch -= 10){
            console.log(direction)    
            if(maps[room_id][broqch+player.avatar.width][player.my_fucking_y] == map_description[room_id].free_area){
                return broqch;
            }
        }
    }
    if(direction == "left"){
        for(broqch = player.avatar.width+10; broqch  < 800; broqch += 10){
            console.log(direction)
            if(maps[room_id][broqch][player.my_fucking_y] == map_description[room_id].free_area){
                
                return broqch;
            }
        }
    }
    if(direction == "up"){
        for(broqch = 600; broqch  > player.avatar.height; broqch -= 10){
            console.log(direction)
            if(maps[room_id][player.my_fucking_x][broqch] == map_description[room_id].free_area){
                return broqch-player.avatar.height;
            }
        }
    }
    if(direction == "down"){
        for(broqch = player.avatar.height+10; broqch  < 600; broqch += 10){
            console.log(direction)
            if(maps[room_id][player.my_fucking_x][broqch+player.avatar.height] == map_description[room_id].free_area){
                return broqch;
            }
        }
    }
}

function holdArrowKey(key){
}
function releaseArrowKey(key){
}