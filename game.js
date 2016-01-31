// Creating variableas
var current_message = "";
var whichbackground = "bg0"; 
var player = new Player();
var en_timer=31;
var enemies=[];
var color_map = map_description[0];
var basicsel=document.getElementById("basicSel");
var specialsel=document.getElementById("specialSel");
var basicunsel=document.getElementById("basicUnsel");
var specialunsel=document.getElementById("specialUnsel");
var disbasic = document.getElementById("basicDis");
var disspecial = document.getElementById("specialDis");

var buton, my_turn;


var current_attacker;
buton = new GameButton(basicSel, basicUnsel, basicDis,canvas.width-basicSel.width-10, canvas.height-basicSel.height);
special_buton = new GameButton(specialSel, specialUnsel, specialDis,+canvas.width-10-specialSel.width, canvas.height-basicSel.height-specialSel.height-5);

function update() {
	player.move();
        whichDirection();        
	//console.log(player.strength)
	if(en_timer <= 0 && state == states.ADVENTURE && player.is_moving||isKeyPressed[90]==1){
		if(Math.random()<=0.001||isKeyPressed[90]==1){
			state = states.BATTLE;
                       
		}
	}else{
		en_timer--;	
	}
        if(state == states.BATTLE){
             BattleScreenModule.doBattle(player, buton, special_buton, current_attacker);
        }
}
function draw() {
	// This is how you draw a rectangle
	var bg; 
	switch(state)
	{
		case states.ADVENTURE:
			bg = document.getElementById(whichbackground);
			context.drawImage(bg, 0, 0)
			context.drawImage(player.avatar, player.my_fucking_x, player.my_fucking_y);
			updateTextBox();
			break;
		case states.BATTLE:
                    BattleScreenModule.redrawScreen();
                    break;		
	}
}
function keydown(key) {
	// Show the pressed keycode in the console
	holdArrowKey(key);
	player.move();
}
function keyup(key){
	releaseArrowKey(key);
}
function mouseup() {
	// Show coordinates of mouse on click
	buton.checkState("up");
        console.log(mouseX, mouseY)
	//special_buton.checkState("up")
}
/*
left arrow: 37 
up arrow: 38
right arrow: 39
down arrow: 40
use for PP Matura MT Script Capitals
*/