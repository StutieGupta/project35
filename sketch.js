var balloon, balloon1;
var bg,database,position

function preload(){

  balloon1 = loadImage("balloon.png");
  bg = loadImage("background.png")
}


function setup() {
  database = firebase.database();
  console.log(database);

  createCanvas(1500,600);
  balloon = createSprite(300, 280, 50, 50);
  balloon.addImage(balloon1)

  var balloonposition = database.ref('balloon/position');
  balloonposition.on("value", readPosition, showError);
}

function draw() {
  background(bg); 
  
  if(keyDown(UP_ARROW)){
    balloon.y = balloon.y -10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y +10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +10;
  }
  else if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10;
  }
  drawSprites();
}


function changePosition(x,y){
  balloon.x = ball.x + x;
  balloon.y = ball.y + y;
}

function readPosition(data){
  position = data.val();
  console.log(position)
  
  balloon.x = position.x;
  balloon.y = position.y;

}

function showError(){
  console.log("show error");
}

function writePosition(x,y){
  database.ref('ball/position').set({
      'x': position.x + x,
      'y': position.y + y
  })
}
