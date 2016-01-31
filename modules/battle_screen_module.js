var BattleScreenModule = (new function(){
    
    var bg_image = new Image(); 
    bg_image.src = "screens/img/battle.jpg";
    var enemy;
    
    
    
    
   this.battleController = function()
   {
       this.current_attacker;
       this.player;
       this.enemies = [];
   }
    this.doBattle = function(player, buton, special_buton,current_attacker)
    {        
        enemy = this.createEnemy();
        buton.checkState("over");
        console.log("checkstate na buton")
        special_buton.checkState("over");
        if(enemy.state == creature_states.WAIT_TO_ATTACK){
            enemy.attack(player);
            current_attacker = enemy;
        }else if(player.state == creature_states.WAIT_TO_ATTACK){
            enableButtons();
        }
    }
    this.doAttack = function(player)
    {        
        player.attack(enemy);
    }
    this.redrawScreen = function(){
        context.drawImage(bg_image, 0, 0)
        buton.drawButton();
        if(enemy.state == creature_states.ATTACKED){
                enemy.updateHealthBar();
        }else{
                player.updateHealthBar();
        }
        if(enemy.health<=0){
                state = states.ADVENTURE;
        }
        special_buton.drawButton();
        enemy.draw();
        player.draw();
    }
    this.createEnemy = function(){
        return new Enemy(100, 5);
    }
}());


