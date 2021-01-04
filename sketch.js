var fixedRect, movingRect;

var gameObject;

var gameObject2;

function setup() {
  createCanvas(1200,800);
 // fixedRect = createSprite(400, 100, 50, 80);
  //fixedRect.shapeColor = "blue";

  

 // gameObject=createSprite(600,100,30,90);
 // gameObject.shapeColor="red";
 
  gameObject2=createSprite(400,100,50,60);
  gameObject2.shapeColor="purple";
  
  movingRect = createSprite(400,500,80,30);
  movingRect.shapeColor = "green";

  movingRect.velocityY= -2;
  gameObject2.velocityY= 3;

 // movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;

 // fixedRect.velocityX=6;
 // gameObject.velocityX= -6;
}

function draw() {
  background(0,0,0);  
 
  bounceOff(gameObject2,movingRect);
 
  drawSprites();
}
