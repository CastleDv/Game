var ball;
var wall; 

function setup() {
  createCanvas(1520,741);

  ball = createSprite(400, 400, 1, 1);
  wall = createSprite(600, 600, 10, 150);
  wall2 = createSprite(wall.x, wall.y - 750, 10, 150);

  score = 0;

  wall.shapeColor = 250,250,250;
  wall2.shapeColor = 250,250,250;

  //wall2.debug = true;
  
  ball.setCollider("circle", 0, 0, 13)
  ball.debug = true;
  ellipseMode(RADIUS);
  edges = createEdgeSprites();
  ball.velocityX = 2;
  ball.velocityY = -2;
}

console.log(edges);
function bounceof(target1, target2)
{
a = 1;
b = -1;
  if (frameCount % 120 === 0){
  var rand = Math.round(random(1,2));
  if (rand == 1 & rand !== 2 & target1.velocityX > 0){
  a = 1;
  } else if (rand == 1 & rand !== 2 & target1.velocityX < 0){
  a = -1;
  } else if (rand == 2 & rand !== 1 & target1.velocityX < 0){
  a = -1;  
  } else if (rand == 2 & rand !== 1 & target1.velocityX > 0){
  a = 1;
  } else {
  a = 1;
  }
  var rand2 = Math.round(random(1,2));
    if (rand2 == 1 & rand2 !== 2 & target1.velocityY > 0){
    b = 1;
    } else if (rand2 == 1 & rand2 !== 2 & target1.velocityY < 0){
    b = -1;
    } else if (rand2 == 2 & rand2 !== 1 & target1.velocityY < 0){
    b = -1;  
    } else if (rand2 == 2 & rand2 !== 1 & target1.velocityY > 0){
    b = 1;
    } else {
    b = 1;  
    }
  }  
  if(target1.isTouching(target2)){
    target1.velocityX = target1.velocityX*a;
    target1.velocityY = target1.velocityY*b;
  }
  if (frameCount % 120 === 0){
    console.log("bounceoff", rand);
    console.log("bounceoff", rand2)
    }
}
function draw() 
{
background("#323232");
fill("white");

bounceof(ball, edges);
bounceof(ball, wall);
bounceof(ball, wall2);

text("score: "+ score, 500, 50);

score = Math.round(frameCount/60);

console.log("1",wall.y);
console.log("2",wall2.y);
ball.bounciness = 1;

if (wall.y < 75 & wall2.y < -75){
  wall2.y = 816;
}
if (wall.y > 675 & wall2.y > 816){
  wall2.y = -75;
}
 
if (wall2.y < 75 & wall.y < 66){
  wall.y = 816;
 }
 if (wall2.y > 675 & wall.y > 816){
   wall.y = -75;
 }

 //movimiento de pared arriba
if (wall.y < 816 || wall.y > -75){
 if (keyIsDown(UP_ARROW)){
  wall.position.y -= 20;
 }
} 
if (keyIsDown(LEFT_ARROW)) {        
   wall.position.x -= 20;
 } 
 if (keyIsDown(RIGHT_ARROW)) {
   wall.position.x += 20; 
 }
 //movimiento de pared abajo
if (wall.y < 816 || wall.y > -75){ 
 if (keyIsDown(DOWN_ARROW)){
  wall.position.y += 20;
 }
}

//movimiento de pared arriba
if (wall2.y < 816 || wall2.y > -75){
 if (keyIsDown(UP_ARROW)){
  wall2.position.y -= 20;
 }
} 
if (keyIsDown(LEFT_ARROW)) {        
   wall2.position.x -= 20;
 } 
 if (keyIsDown(RIGHT_ARROW)) {
   wall2.position.x += 20; 
 }
  //movimiento de pared abajo
if (wall2.y < 816 || wall2.y > -75){ 
 if (keyIsDown(DOWN_ARROW)){
  wall2.position.y += 20;
 }
} 

 drawSprites();
 ellipse(ball.x, ball.y, 25, 25);

 }

