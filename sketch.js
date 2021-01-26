var fixedRect, movingRect;
var rect1,rect2,rect3,rect4
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
rect1=createSprite(870,565,20,55)
rect1.shapeColor="orange"
rect1.debug=true
rect2=createSprite(390,590,50,67)
rect2.shapeColor="blue"
rect3=createSprite(390,200,20,55)
rect3.shapeColor="white"
rect3.debug=true
rect2.debug=true
rect4=createSprite(810,565,20,55)
rect4.shapeColor="red"
rect4.debug=true
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  rect1.velocityX=-5
  rect3.velocityY=5
  rect2.velocityY=-5
  rect4.velocityX=5
}

function draw() {
  background(0,0,0);  
bounceOff(fixedRect,movingRect)
bounceOff(rect1,rect4)
bounceOff(rect1,rect3)
  drawSprites();
}
function bounceOff(frect,mrect){
  if (mrect.x - frect.x <frect.width/2 + mrect.width/2
    && frect.x - mrect.x < frect.width/2 + mrect.width/2) {
  mrect.velocityX = mrect.velocityX * (-1);
  frect.velocityX = frect.velocityX * (-1);
}
if (mrect.y - frect.y < frect.height/2 + mrect.height/2
  && frect.y - mrect.y < frect.height/2 + mrect.height/2){
    mrect.velocityY = mrect.velocityY * (-1);
    frect.velocityY = frect.velocityY * (-1);
}
}