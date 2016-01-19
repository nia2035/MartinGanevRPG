function Player(){
	this.avatar = document.getElementById("mehplayer");
	this.is_moving = false;
	this.my_fucking_x = 101;
	this.my_fucking_y = 73;
	this.health=328;
	this.strength = 5;
	// states 'normal', 'attacking', 'attacked'
	this.state = creature_states.WAIT_TO_ATTACK;
	
	
	var health_to_decrease = 0;
	this.updateHealthBar = function()
	{
		if(health_to_decrease > 0)
		{
			this.health-=0.5;
			health_to_decrease-=0.5;
		}
		else{
			health_to_decrease = 0;
			this.state = creature_states.WAIT_TO_ATTACK;
		}
	}
	
	
	this.draw = function()
	{
		context.fillStyle = "#000000"
		context.font = "26px Matura MT Script Capitals";
		context.fillText("Martin | HP:" + this.health, 110, 480)
	}
	
	this.attack = function(_enemy){
		
		_enemy.getAttack(this.strength);
		
		this.state = creature_states.ATTACKING;
	}
	
	this.getAttack = function(strength)
	{
		health_to_decrease = strength;
		this.state = creature_states.ATTACKED;
	};
	this.canGoLeft = function(){
		if(isKeyPressed[37]==1||isKeyPressed[65]==1)
		{
			for(var i=0;i<this.avatar.height;i++){
				if(maps[room_id][this.my_fucking_x-1][this.my_fucking_y+i]!=color_map.free_area){
					return false;
				}
			}
			return true;
		}
		return false;
	}
	this.canGoRight = function(){
		if(isKeyPressed[39]==1||isKeyPressed[68]==1){
			for(var i=0;i<this.avatar.height;i++){
				if(maps[room_id][this.my_fucking_x+this.avatar.width+1][this.my_fucking_y+i]!=color_map.free_area){
					return false;
				}
			}
			return true;
		}
		return false;	
	}
	
	this.canGoUp = function(){
		if(isKeyPressed[38]==1||isKeyPressed[87]==1){
			for(var i=0;i<this.avatar.width;i++){
				if(maps[room_id][this.my_fucking_x+i][this.my_fucking_y-1]!=color_map.free_area){
					return false;
				}
			}
			return true;
		}
		return false;
	}
	this.canGoDown = function(){
		if(isKeyPressed[40]==1||isKeyPressed[83]==1){
			for(var i=0;i<this.avatar.width;i++){
				if(maps[room_id][this.my_fucking_x+i][this.my_fucking_y+this.avatar.height+1]!=color_map.free_area){
					return false;
				}
			}
			return true;
		}
		return false;
	}
	this.move = function(){
		this.is_moving=false;
		if(this.canGoLeft()){
			this.my_fucking_x--;
			this.is_moving=true;
		}
		if(this.canGoRight()){
			this.my_fucking_x++;
			this.is_moving=true;
		}
		if(this.canGoUp()){
			this.my_fucking_y--;
			this.is_moving=true;
		}
		if(this.canGoDown()){
			this.my_fucking_y++;
			this.is_moving=true;
		}
	}
	
}

function Enemy(e_health, e_strength){
	console.log("new enemy: " + e_health, e_strength);
	this.health = e_health;
	this.battlex=50;
	this.battley=20;
	this.speed = 2;
	this.strength=e_strength;
	// states 'normal', 'attacking', 'attacked'
	this.state = creature_states.NORMAL;
	var health_to_decrease = 0;
	this.updateHealthBar = function()
	{
		if(health_to_decrease > 0)
		{
			this.health-=0.1;
			health_to_decrease-=0.1;
			console.log(this.health, health_to_decrease, this.state)
		}else{
			health_to_decrease = 0;
			this.state = creature_states.WAIT_TO_ATTACK;
		}
	}
	
	this.draw = function()
	{
		context.fillRect(this.battlex, this.battley, this.health, 10);
	}
	
	this.attack = function(player){
		player.getAttack(this.strength);
		this.state = creature_states.ATTACKING;
	}
	this.getAttack = function(_strength)
	{
		health_to_decrease = _strength;	
		this.state = creature_states.ATTACKED;
	}
}
function GameButton(selbutton, unselbutton, disabledbutton, x, y){
	var button = unselbutton;
	this.selected=false;
	this.disabled = false;
	this.checkState = function(mouse_state){
		if(mouseX>=x&&mouseX<=x+button.width&&mouseY>=y&&mouseY<=y+button.height){
			if(this.disabled){
				button = disabledbutton;
				return;
			}
			
			if(mouse_state=="up"){
				player.attack(enemies[0]);
				current_attacker = player;
				disableButtons();
				timer_attack=90;
				attacking_timer=30;
			}
			button = selbutton;
		}else{
			button = unselbutton;
		}
		
	}
	this.drawButton = function(){
		context.drawImage(button, x, y);


	}
}