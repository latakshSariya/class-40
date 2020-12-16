var database;
var GameState = 0;
var PlayerCount;
var Form1;
var players;
var PlayersInfo;
var game;
var distance=0;

var car1 , car2 , car3 , car4;
var car;

function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    game = new gameObject();
    game.getState();
    game.start();
  
}

function draw(){
    if(PlayerCount === 4){
        game.update(1);
    }
    if(GameState === 1){
        clear();
        game.play();
    }
}