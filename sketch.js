var canvas,backgroundImage
var gameState=0
var playercount
var database
var form,player,game
  
function setup() {
  canvas=createCanvas(400,400)

  database=firebase.database()
  gmae=new game()
  game.getState()
  game.start()
}

function draw() {
  
}