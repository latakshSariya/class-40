class gameObject{
    constructor()
    {
        //constructor//
    }

    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value",function(data){
            GameState = data.val();
        });
    }

    update(state){
        database.ref('/').update({
           'gameState': state
        })
    }
 async start(){
    if(GameState === 0){
        players = new Player();
        var playerRef = await database.ref('playerCount').once("value");
        if(playerRef.exists()){
            PlayerCount = playerRef.val();
            players.getCount();
        }
        Form1  = new form();
        Form1.display();

        
    }
    car1 = createSprite(100,100);
    car2 = createSprite(300,100);
    car3 = createSprite(500,100);
    car4 = createSprite(700,100);
    car = [car1,car2,car3,car4];

}

 play(){
    
    Form1.hide();   
    Player.getPlayerInfo();

    if(PlayersInfo !== undefined){
      var index = 0;
      var x = 0;
      var y = 0;
      for(var plr in PlayersInfo){
        x = x + 250;
        y = displayHeight - PlayersInfo[plr].distance;
        car[index].x = x;
        car[index].y = y;
        index = index + 1;


        if ( index = players.index){
          car[index-1].shapeColor = "red";
          camera.position.x = displayWidth/2        
          camera.position.y = car[index-1].y;
        }
  
      }

    }


    if(keyIsDown(UP_ARROW) && players.index !== null){
      players.distance +=50
      players.update();
    }
    drawSprites()
  }

}

   // check hte brakets
//did you find any error...the output is correct only the color is not coming