
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,30,30)
}

function draw() 
{
  background(30);
  if(keyDown("down") ){
    box.position.y = box.position.y + 5
  }
  if(keyDown("up") ){
    box.position.y = box.position.y - 5
  }
  if(keyDown("left") ){
    box.position.x = box.position.x - 5
  }
  if(keyDown("right") ){
    box.position.x = box.position.x + 5
  }
drawSprites()
}




