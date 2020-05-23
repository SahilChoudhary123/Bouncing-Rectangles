var movingr, stillr;
function setup() {
  createCanvas(1200,800);
  movingr = createSprite(400, 200, 20, 40);
  stillr = createSprite(400, 700, 20, 40);
  movingr.shapeColor = "green";
  stillr.shapeColor = "blue";
  movingr.velocityY = 5;
  stillr.velocityY = -5;
}

function draw() {
  background(0,0,0);
  if(movingr.x-stillr.x<movingr.width/2+stillr.width/2 && stillr.x-movingr.x<stillr.width/2+movingr.width/2){
    movingr.velocityX = movingr.velocityX * (-1);
    stillr.velocityX = stillr.velocityX * (-1);
  }
  if(movingr.y-stillr.y<movingr.height/2+stillr.height/2 && stillr.y-movingr.y<stillr.height/2+movingr.height/2){
    movingr.velocityY = movingr.velocityY * (-1);
    stillr.velocityY = stillr.velocityY * (-1);
  }
  drawSprites();
}
