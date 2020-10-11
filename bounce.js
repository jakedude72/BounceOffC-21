var fixedRect, movingRect;
var object1, object2;

function setup() { 
  createCanvas(1200,800); 
  fixedRect = createSprite(600, 300, 50, 50); 
  fixedRect.shapeColor = "green";
  movingRect = createSprite(600,500,50,50); 
  movingRect.shapeColor = "green";
  fixedRect.velocityY = 2; 
  movingRect.velocityY = -2; 
  fixedRect.velocityX = 2; 
  movingRect.velocityX = 2; 
}

function draw() { 
  background(0,0,0);

  bounceOff(movingRect, fixedRect);

  drawSprites(); 
}

function bounceOff(object1, object2) {
  if (object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2) {
    object2.velocityY = object2.velocityY * -1; 
    object1.velocityY = object1.velocityY * -1; 
    object2.velocityX = object2.velocityX * -1; 
    object1.velocityX = object1.velocityX * -1; 
  } 

  if (object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2) {
    object2.velocityX = object2.velocityX * -1; 
    object1.velocityX = object1.velocityX * -1; 
  } 
}