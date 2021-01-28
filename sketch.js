
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

var gameState = 0;
var database;
var form;
var game;

var player;
var playerCount;
var allPlayers;

var player1,player2,player3,player4;
var players;

var nameDisplayed;

var invisibleGround;

var position;

function setup() {
	database = firebase.database();
	canvas = createCanvas(windowWidth,windowHeight);
	game = new Game();
  game.getState();
  game.start();
}



  function draw() {
    rectMode(CENTER);
    background(0);
    
  
    if(playerCount >= 4){
      gameState == 1;
      game.update(1);
    }
  
    if(gameState == 1){
      game.play();
}

  }

