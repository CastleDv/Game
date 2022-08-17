var ball;
var wall, screen; 
var simple, normal, hard;
function setup() {
  createCanvas(1520,741);

  ball = createSprite(400, 400, 1, 1);
  wall = createSprite(600, 600, 10, 150);
  wall2 = createSprite(600, -141, 10, 150);
  wall3 = createSprite(-920, 600, 10, 150);
  screen =  createSprite(760,370,1520,741);

  gameState = 0;
  score = 0;
  
  simple = 0;
  normal= 0;
  hard = 0;

  wall.shapeColor = 250,250,250;
  wall2.shapeColor = 250,250,250;
  wall3.shapeColor = 123,234,88;
  
  wall2.debug = true;
  
  ball.setCollider("circle", 0, 0, 13)
  ball.debug = true;
  ellipseMode(RADIUS);
  edges = createEdgeSprites();
  ball.velocityX = 0;
  ball.velocityY = 0;
  frameRate(30);

}


function Changedirection(target)
{ 
var value, countdown;
if (hard === 1){
  value = null;
}
var number = 10;

if (frameCount % 30 === 0){
  countdown = countdown - 1;
}

if (frameCount === 1 || frameCount % 301 === 0){ 
var rand = Math.round(random(1,4)); 
value = rand;
number = 10;
countdown = number;
}

if (value === 1){
 text("ball will go up and left in... "+ countdown, 200, 25);
} else if (value === 2){
 text("ball will go up and right in... "+ countdown, 200, 25);
} else if (value === 3){
 text("ball will go down and left in... "+ countdown, 200, 25);
} else if (value === 4){
 text("ball will go down and right in... "+ countdown, 200, 25);
} else if (value === null || rand === undefined) {
 text("good luck :D", 200, 25);
}
if (normal === 1){
 if (frameCount % 300 === 0){
  console.log("hi >;D");
  if (value === 1){
   target.velocityX = target.velocityX*-1;
   target.velocityY = target.velocityY*-1;

  } else if (value === 2){
   target.velocityX = target.velocityX*1;
   target.velocityY = target.velocityY*-1;

  } else if (value === 3){
    target.velocityX = target.velocityX*-1;
    target.velocityY = target.velocityY*1;

  } else if (value === 4){
    target.velocityX = target.velocityX*1;
    target.velocityY = target.velocityY*1;

  } else if (value === null || value === undefined){
    target.velocityX = target.velocityX*-1;
    target.velocityY = target.velocityY*-1;
  }
 } 
} else if (hard === 1){
  if (frameCount % 150 === 0){
    console.log("hi >;D");
    if (value === 1){
     target.velocityX = target.velocityX*-1;
     target.velocityY = target.velocityY*-1;
  
    } else if (value === 2){
     target.velocityX = target.velocityX*1;
     target.velocityY = target.velocityY*-1;
  
    } else if (value === 3){
      target.velocityX = target.velocityX*-1;
      target.velocityY = target.velocityY*1;
  
    } else if (value === 4){
      target.velocityX = target.velocityX*1;
      target.velocityY = target.velocityY*1;
  
    } else if (value === null || value === undefined){
      target.velocityX = target.velocityX*-1;
      target.velocityY = target.velocityY*-1;
    }
   } 
} 
 //console.log(value);
 text("value = "+ value, 20, 40)
}

function draw() 
{
background("#323232");
fill("white");




ball.bounciness = 1.01;

//console.log ("wall1.y"+wall.y)
//console.log ("wall3.y"+wall3.y);
if (ball.x > 1541 || ball.x < -21 || ball.y > 762 || ball.y < -21) {
  gameState = 2;
}


//75 =antes del fuera del canvas relativo a la mitad de la altura/ancho de wall, misma situacion con -75
//816 = altura del canvas (716) + wall(150) de la parte de arriba
//666 = altura del canvas (716) - wall*.5(75) de la parte de abajo
//1595 = ancho del canvas (1520) + wall*.5(75) de la parte derecha
//1445 = ancho de canvas (1520) - wall*.5(75) de la derecha

//tp de wall

//tp de wall

////tp de wall3 fuera de pantalla en Y
if (gameState === 1){ 
  textSize(15); 
  text("score: "+ score, 20, 25);
  ellipse(ball.x, ball.y, 25, 25);
  score = Math.round(frameCount/600);  

  if (simple === 1 ){
  ball.velocityX = 3;
  ball.velocityY = -3;
  simple = 2;
  } else if (normal === 1){
  ball.velocityX = 3;
  ball.velocityY = -3;
  Changedirection(ball);
  } else if (hard === 1) {
  ball.velocityX = 5;
  ball.velocityY = -5;
  Changedirection(ball);
  }

  
  if (wall.y < 816 & wall.y > -75 & wall.x < 1595 & wall.x > -75){
    ball.bounceOff(wall);
    }
    if (wall2.y < 816 & wall2.y > -75 & wall2.x < 1595 & wall2.x > -75){
    ball.bounceOff(wall2); 
    }
    if (wall3.y < 816 & wall3.y > -75 & wall3.x < 1595 & wall3.x > -75){
    ball.bounceOff(wall3);
    }
  //tp de wall3 en Y relacionado con wall
  if (wall.y < 75 & wall3.y < -75 ){
  wall3.y = 816;
  wall3.x = wall.x;
  }
  //tp de wall3 en Y relacionado con wall
  if (wall.y > 666 & wall3.y > 816){
  wall3.y = -75;
  wall3.x = wall.x;
  }
  //tp de wall3 en Y relacionado con wall2
  if (wall2.y < 75 & wall3.y < -75){
  wall3.y = 816;
  wall3.x = wall2.x;
  }
  //tp de wall3 en Y relacionado con wall2
  if (wall2.y > 666 & wall3.y > 816){
  wall3.y = -75;
  wall3.x = wall2.x;
  }

////tp de wall2 fuera de pantalla en Y (default spawn)

  //tp de wall2 en Y relacionado con wall
  if (wall.y < 75 & wall2.y < -75 ){
  wall2.y = 816;
  wall2.x = wall.x;
  }
  //tp de wall2 en Y relacionado con wall
  if (wall.y > 666 & wall2.y > 816){
  wall2.y = -75;
  wall2.x = wall.x;
  }
  //tp de wall2 en Y relacionado con wall3
  if (wall3.y < 75 & wall2.y < -75 ){
  wall2.y = 816;
  wall2.x = wall3.x;
  }
  //tp de wall2 en Y relacionado con wall3
  if (wall3.y > 666 & wall2.y > 816){
  wall2.y = -75;
  wall2.x = wall3.x;
  }

////tp de wall1 fuera de pantalla en Y

  //tp de wall en Y relacionado con wall2
  if (wall2.y < 75 & wall.y < -75){
   wall.y = 816;
   wall.x = wall2.x;
  }
  //tp de wall en Y relacionado con wall2
  if (wall2.y > 666 & wall.y > 816){
    wall.y = -75;
    wall.x = wall2.x;
  }
  //tp de wall en Y relacionado con wall3
  if (wall3.y < 75 & wall.y < -75){
   wall.y = 816;
   wall.x = wall3.x;
  }
  //tp de wall en Y relacionado con wall3
  if (wall3.y > 666 & wall.y > 816){
   wall.y = -75;
   wall.x = wall3.x;
  } 

///tp en X       tp en X       tp en X

///tp en X       tp en X       tp en X

////tp de wall3 fuera de pantalla en X (default spawn)

  //tp de wall3 en X relacionado con wall
  if (wall3.x > 1595 & wall.x > 1445){
  wall3.x = -75;
  wall3.y = wall.y;
  }
  //tp de wall3 en X relacionado con wall
  if (wall3.x < -75 & wall.x < 75){
  wall3.x = 1595;
  wall3.y = wall.y;
  }
  //tp de wall3 en X relacionado con wall2
  if (wall3.x > 1595 & wall2.x > 1445){
  wall3.x = -75;
  wall3.y = wall2.y;
  }
  //tp de wall3 en X relacionado con wall2
  if (wall3.x < -75 & wall2.x < 75){
  wall3.x = 1595;
  wall3.y = wall2.y;
  }

////tp de wall2 fuera de pantalla en X 

  //tp de wall2 en X relacionado con wall
  if (wall2.x > 1595 & wall.x > 1445){
  wall2.x = -75;
  wall2.y = wall.y;
  }
  //tp de wall2 en X relacionado con wall
  if (wall2.x < -75 & wall.x < 75){
  wall2.x = 1595;
  wall2.y = wall.y;
  }
  //tp de wall2 en X relacionado con wall3
  if (wall2.x > 1595 & wall3.x > 1445){
  wall2.x = -75;
  wall2.y = wall3.y;
  }
  //tp de wall2 en X relacionado con wall3
  if (wall2.x < -75 & wall3.x < 75){
  wall2.x = 1595;
  wall2.y = wall3.y;
  }

////tp de wall fuera de pantalla en X

  //tp de wall en X relacionado con wall3
  if (wall.x > 1595 & wall3.x > 1445){
  wall.x = -75;
  wall.y = wall3.y;
  }
  //tp de wall en X relacionado con wall3
  if (wall.x < -75 & wall3.x < 75){
  wall.x = 1595;
  wall.y = wall3.y;
  }
  //tp de wall en X relacionado con wall2
  if (wall.x > 1595 & wall2.x > 1445){
  wall.x = -75;
  wall.y = wall2.y;
  }
  //tp de wall en X relacionado con wall2
  if (wall.x < -75 & wall2.x < 75){
  wall.x = 1595;
  wall.y = wall2.y;
  }



//movimiento de wall 
 //movimiento de wall arriba
if (wall.y < 816 || wall.y > -75){
 if (keyIsDown(UP_ARROW)){
  wall.position.y -= 10;
 }
} 
 //movimiento de wall <---
if (wall.x > -75 || wall.x < 1595){
 if (keyIsDown(LEFT_ARROW)) {        
   wall.position.x -= 10;
 }
} 
 //movimiento de wall --->
if (wall.x < 1595 || wall.x > -75 ){  
 if (keyIsDown(RIGHT_ARROW)) {
   wall.position.x += 10; 
 }
} 
 //movimiento de wall abajo
if (wall.y < 816 || wall.y > -75){ 
 if (keyIsDown(DOWN_ARROW)){
  wall.position.y += 10;
 }
}

//movimiento de wall2 
 //movimiento de wall2 arriba
 if (wall2.y < 816 || wall2.y > -75){
  if (keyIsDown(UP_ARROW)){
   wall2.position.y -= 10;
  }
 } 
 //movimiento de wall2 <---
 if (wall2.x > -75 || wall2.x < 1595){
  if (keyIsDown(LEFT_ARROW)) {        
    wall2.position.x -= 10;
  }
 } 
 //movimiento de wall2 --->
 if (wall2.x < 1595 || wall2.x > -75 ){  
  if (keyIsDown(RIGHT_ARROW)) {
    wall2.position.x += 10; 
  }
 } 
 
  //movimiento de wall2 abajo
 if (wall2.y < 816 || wall2.y > -75){ 
  if (keyIsDown(DOWN_ARROW)){
   wall2.position.y += 10;
  }
 }

//movimiento de wall3 
 //movimiento de wall3 arriba
 if (wall3.y < 816 || wall3.y > -75){
  if (keyIsDown(UP_ARROW)){
   wall3.position.y -= 10;
  }
 } 
 //movimiento de wall <---
 if (wall3.x > -75 || wall3.x < 1595){
  if (keyIsDown(LEFT_ARROW)) {        
    wall3.position.x -= 10;
  }
 } 
 //movimiento de wall --->
 if (wall3.x < 1595 || wall3.x > -75){  
  if (keyIsDown(RIGHT_ARROW)) {
    wall3.position.x += 10; 
  }
 } 
 
  //movimiento de wall abajo
 if (wall3.y < 816 || wall3.y > -75){ 
  if (keyIsDown(DOWN_ARROW)){
   wall3.position.y += 10;
  }
 }

 //rotation para wall, wall2 & wall3

 if (keyWentUp(32)){
  wall.rotation += 90;
 }
 if (keyWentUp(32)){
  wall2.rotation += 90;
 }
 if (keyWentUp(32)){
  wall3.rotation += 90;
 }
} else if (gameState === 2){
  ball.velocityX = 0;
  ball.velocityY = 0;
  ball.x = 400;
  ball.y = 400;
  text("Game Over", 700, 370);
  text("press R to try again",670 ,390);
  text("press D to select other gamemode", 620,410);
  if (keyWentUp(82)){
    if (simple === 2){
     simple = 1;
     gameState = 1;
    } else if (normal === 2){
     normal = 1;
     gameState = 1;
    } else if (hard === 2){
     hard = 1;
     gameState = 1;
    }
  }
  if (keyWentUp(68)){
    gameState = 0;
  }
} else if (gameState === 0){
  textSize(30);
  text("Hi, select your gamemode", 40, 40);
  score = 0;
  screen.shapeColor = 110,110,110;
  //screen.depth = 2;  
  
  if (keyWentUp(49)){
   gameState = .5;
   simple = 1;
  }
  if (keyWentUp(50)){
    gameState = .5;
    normal = 1;
  }
  if (keyWentUp(51)){
    gameState = .5;
    hard = 1;
  }
} else if (gameState === .5) {
  screen.depth = 0;
  screen.shapeColor = "#323232";
  
  if (keyWentUp(13)){
    gameState = 1;
  }
}
 drawSprites();

}
