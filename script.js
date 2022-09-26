//JavaScript Document
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//the frog
let frog = new Image();
frog.src = "FroggerSprites2.png";
let sx =38;
let sy = 48;
let swidth = 110;
let sheight = 110;
let x = 50;
let y = 444;
let width = 30;
let height = 30;

//Button Movement
let rightPressed = false
let leftPressed = false
let upPressed = false 
let downPressed = false

let up = true
let down = true
let right = true 
let left = true

//All Car Variables
let car = new Image(); 
car.src = "froggercars.png";
//1st Car
let carX1 = 100
let carSX1 = 0
let carY1 = 400
let carWidth = 60
let carHeight = 35
//2nd Car
let carX2 = 500
let carSX2 = 60
let carY2 = 400
//3rd Car
let carX3 = 460;
let carSX3 = 155;
let carY3 = 355;
//4th Car
let carX4 = 400
let carSX4 = 490
let carY4 = 310
//5th Car
let carX5 = 360
let carSX5 = 0
let carY5 = 265
//6th Car
let carX6 = 60 
let carSX6 = 160
let carY6 = 355
//7th Car
let carX7 = 100
let carSX7 = 320
let carY7 = 310
//8th Car
let carX8 = 160
let carSX8 = 0
let carY8 = 265

//All Log Variables
//log 1
let logX1 = 300;
let logY1 = 180;
let logWidth = 120;
let logHeight = 30;
//log 2
let logX2 = 40;
let logY2 = 180;
//log 3
let logX3 = 100
let logY3 = 136
//log 4
let logX4 = 400
let logY4 = 136
//log 5
let logX5 = 480
let logY5 = 92
//log 6
let logX6 = 60
let logY6 = 92
//log 7
let logX7 = 120 
let logY7 = 48
//log 8
let logX8 = 500
let logY8 = 48
//All Pads
let padWidth = 30;
let padHeight = 30;
let padX1 = 20
let padY1 = 4
let padX2 = 120
let padY2 = 4
let padX3 = 220
let padY3 = 4
let padX4 = 320
let padY4 = 4
let padX5 = 420
let padY5 = 4
let padX6 = 520
let padY6 = 4

let pad1 = false;
let pad2 = false;
let pad3 = false;
let pad4 = false;
let pad5 = false;
let pad6 = false;

//Lives Lost Variable
let lives = 3;
let livesLost = 0;
let play = true;
let victoryCondition = false;

//console.dir(car)

document.addEventListener('keydown', keyDownHandler, false)
document.addEventListener('keyup', keyUpHandler, false)

function keyDownHandler(e)
{
  if(e.keyCode == 39) {rightPressed = true; console.log(e.keyCode)} 
  if(e.keyCode == 37) {leftPressed = true}
  if(e.keyCode == 38) {upPressed = true}
  if(e.keyCode == 40) {downPressed = true}
}
function keyUpHandler(e)
{
  if(e.keyCode == 39) {rightPressed = false}
  if(e.keyCode == 37) {leftPressed = false}
  if(e.keyCode == 38) {upPressed = false}
  if(e.keyCode == 40) {downPressed = false}
}


// The Road
function drawBackground() {
  //drawing two strips of grass
  ctx.fillStyle = "lime";
  ctx.fillRect(0, 440, 570, 45);
  ctx.fillRect(0, 220, 570, 45);

  //dashed white center line
  ctx.beginPath();
  ctx.moveTo(0, 395);
  ctx.lineTo(570, 395);
  ctx.strokeStyle = "white";
  ctx.setLineDash([5]);
  ctx.strokeWidth = 2;
  ctx.stroke();

  //solid white line
  ctx.beginPath();
  ctx.moveTo(0, 350);
  ctx.lineTo(570, 350);
  ctx.strokeStyle = "white";
  ctx.setLineDash([0]);
  ctx.strokeWidth = 4;
  ctx.stroke();

  //another dotted white line
  ctx.beginPath();
  ctx.moveTo(0, 305);
  ctx.lineTo(570, 305);
  ctx.strokeStyle = "white";
  ctx.setLineDash([5]);
  ctx.strokeWidth = 2;
  ctx.stroke();

  //water background here
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, 570, 220);
}

function drawFrog() {
  ctx.drawImage(frog, sx, sy, swidth, sheight, x, y, width, height);
}

//move frog
function moveFrog(){
  if (upPressed == true && up == true && y > 20){
    y = y - 44;
    up = false
    sx = 38
    sy = 48
  }
  if (upPressed == false){
    up = true
  }

  if (downPressed == true && down == true && y + height < canvas.height - 80){
    y = y + 44;
    down = false
    sx = 38
    sy = 48
  }
  if (downPressed == false){
    down = true
  }
  if (rightPressed == true && right == true && x + width < canvas.width-20){
    x = x + 44;
    right = false
    sx = 146
    sy = 55
  }
  if (rightPressed == false){
    right = true
  }
if (leftPressed == true && left == true && x > 20){
    x = x - 44;
    left = false
    sx = 255
    sy = 55
  }
  if (leftPressed == false){
    left = true
  }
}

// Draw Cars Function
function drawCars(){
  //Arrays
  let carsSX = [carSX1, carSX2, carSX3, carSX4, carSX5,carSX6, carSX7, carSX8];
  let carsX = [carX1, carX2, carX3, carX4, carX5, carX6, carX7, carX8];
  let carsY = [carY1, carY2, carY3, carY4, carY5, carY6, carY7, carY8];

  for(i = 0; i < carsX.length; i++){
    ctx.drawImage(car, carsSX[i], 0, 155, 85, carsX[i], carsY[i], carWidth, carHeight)
  }

}
//Move Cars
function moveCars(){
  //car 1
  if(carX1 < canvas.width + 100){
    carX1 = carX1 + 2
  } else { 
    carX1 = -100
    carSX1 = (Math.floor(Math.random() * 4)) * 160
  }
  //car 2
  if(carX2 < canvas.width + 100){
    carX2 = carX2 + 2
  } else { 
    carX2 = -100
    carSX2 = (Math.floor(Math.random() * 4)) * 160
  }
  //car 3
  if(carX3 > -100){
    carX3 = carX3 - 2;
  }
  else{
    carX3 = canvas.width + 100;
    carSX3 = (Math.floor(Math.random() * 4)) * 160
  }
  //car 4
  if(carX4 < canvas.width + 100){
    carX4 = carX4 + 2
  } else { 
    carX4 = -100
    carSX4 = (Math.floor(Math.random() * 4)) * 160
  }
  //car 5
  if(carX5 > -100){
    carX5 = carX5 - 2;
  }
  else{
    carX5 = canvas.width + 100;
    carSX5 = (Math.floor(Math.random() * 4)) * 160
  }
  //car 6
  if(carX6 > -100){
    carX6 = carX6 - 2;
  }
  else{
    carX6 = canvas.width + 100;
    carSX6 = (Math.floor(Math.random() * 4)) * 160
  }
//car 7
if(carX7 < canvas.width + 100){
  carX7 = carX7 + 2
} else { 
  carX7 = -100
  carSX7 = (Math.floor(Math.random() * 4)) * 160
}
//car 8
if(carX8 > -100){
  carX8 = carX8 - 2;
}
else{
  carX8 = canvas.width + 100;
  carSX8 = (Math.floor(Math.random() * 4)) * 160
}
}
//Run Over
function runOver(){

let carsX = [carX1, carX2, carX3, carX4, carX5, carX6, carX7, carX8];
let carsY = [carY1, carY2, carY3, carY4, carY5, carY6, carY7, carY8];

for(i = 0; i < carsX.length; i++){

if(carsX[i] <= x + width && 
  carsX[i] + carWidth >= x && carsY[i] + carHeight >= y && carsY[i] <= y + height){
  y=488;
  livesLost ++;
}
}
}
//Draw Logs
function drawLogs(){
  ctx.fillStyle ="tan";
  let logsX = [logX1, logX2, logX3, logX4, logX5, logX6, logX7, logX8];
  let logsY = [logY1, logY2, logY3, logY4, logY5, logY6, logY7, logY8]

  for(i = 0; i < logsX.length; i++){
  ctx.fillRect(logsX[i], logsY[i], logWidth, logHeight);
}
}
//Move Logs
function moveLogs(){
  if(logX1 < canvas.width + 100){
    logX1 = logX1 + 1;
  } else {
    logX1 = -100
  }
    if(logX2 < canvas.width + 100){
      logX2 = logX2 + 1;
    } else {
      logX2 = -100
    }
    if(logX3 > 0 - logWidth){
      logX3 = logX3 - 1;
    } else {
      logX3 = canvas.width + 100
    }
    if (logX4 > 0-logWidth){
      logX4 = logX4 - 1;
    }
    else {
      logX4 = canvas.width + 100;
    }
    if (logX5 < canvas.width + 100){
      logX5 = logX5 + 1
    }
    else {
      logX5 = -100
    }
    if (logX6 < canvas.width + 100){
      logX6 = logX6 + 1
    }
    else {
      logX6 = -100;
    }
    if (logX7 > 0 - logWidth){
      logX7 = logX7 -1 
    }
    else {
      logX7 = canvas.width + 100;
    }
      
      if (logX8 > 0-logWidth){
        logX8 = logX8 - 1;
      }
      else {
        logX8 = canvas.width + 100;
      }
}
//Float
function float(){
  
     if (logX1 <= x + width && 
      logX1 + logWidth >= x &&
    logY1 + logHeight >= y &&
    logY1 <= y + height){
      if(x < canvas.width-30){
        x = x +1;
      }
    }
    else if (logX2 <= x + width &&
      logX2 + logWidth >= x &&
      logY2 + logHeight >= y &&
      logY2 <= y + height){
        if(x < canvas.width - 30){ 
          x = x + 1;
        }
      }
else if (logX3 <= x + width &&
  logX3 + logWidth >= x &&
  logY3 + logHeight >= y &&
  logY3 <= y + height){
    if (x > 0){
      x = x - 1;
  }}
  else if (logX4 <= x + width &&
    logX4 + logWidth >= x &&
    logY4 + logHeight >= y &&
    logY4 <= y + height){
      if (x > 0){
        x = x - 1;
      }
    }
    else if (logX5 <= x + width &&
      logX5 + logWidth >= x &&
      logY5 + logHeight >= y &&
      logY5 <= y + height){
        if (x < canvas.width -30){
          x =x +1;
        }
      }
      else if (logX6 <= x + width &&
        logX6 + logWidth >= x &&
        logY6 + logHeight >= y &&
        logY6 <= y + height){
          if (x < canvas.width - 30){
            x = x +1;
          }}
          else if (logX7 <= x + width &&
            logX7 + logWidth >= x &&
            logY7 + logHeight >= y &&
            logY7 <= y + height){
              if (x > 0){
                x = x - 1;
              }
            }

              else if (logX8 <= x + width &&
                logX8 + logWidth >= x &&
                logY8 + logHeight >= y &&
                logY8 <= y + height){
                  if (x > 0){
                    x = x - 1;
                  }}
    else if (y < 220 && y > 44) {
      y = 488;
      livesLost ++;
    }
}
//Draw Pads
function drawPads(){
  ctx.fillStyle = "seagreen";
  let padsX = [padX1, padX2, padX3, padX4, padX5, padX6]
  let padsY = [padY1, padY2, padY3, padY4, padY5, padY6]

  for (i = 0; i< padsX.length; i++){
    ctx.fillRect(padsX[i], padsY[i], padWidth, padHeight)
  }
}

//Draw Lives Win state
function drawLives(){
  //count and display lives left
  if (lives - livesLost !=0){
    ctx.fillStyle = "white"
    ctx.font = "30px Arial"
    ctx.fillText("LIVES: " + (lives - livesLost), (canvas.width/2)-70, 525);
  }
}
//Victory
function victory () {
  if (pad1 && pad2 && pad3 && pad4 && pad5 && pad6){
    //print "You Won!" at (220, 488)
    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText("You won!", (canvas.width/2)-60, 525);
    victoryCondition = true;
  }
}
//Game Over Function
function gameOver(){
  //end game if they run out of lives
  if (lives - livesLost == 0) {
    play = false;
    ctx.fillStyle = "white"
    ctx.font = "87px Impact"
    ctx.fillText("GAME OVER", 70, 200);
    ctx.font = "28px Impact";
    ctx.fillText("Refresh to Try Again!", 170, 250);
  }
}
//Pad Reset Function
function onPad(){
  if (padX1 <= x + width &&
      padX1 + padWidth >= x &&
      padY1 + padHeight >= y &&
      padY1 <= y + height) {
        pad1 = true;
        y = 488;
      }
    else if (padX2 <= x + width &&
        padX2 + padWidth >= x &&
        padY2 + padHeight >= y &&
        padY2 <= y + height){
          pad2 = true;
          y = 488;
        }
  
    else if (padX3 <= x + width &&
          padX3 + padWidth >= x &&
          padY3 + padHeight >= y &&
          padY3 <= y + height){
            pad3 = true;
            y = 488;
          }
  
    else if (padX4 <= x + width &&
            padX4 + padWidth >= x &&
            padY4 + padHeight >= y &&
            padY4 <= y + height) {
              pad4 = true;
              y = 488;
            }
  
    else if (padX5 <= x + width &&
              padX5 + padWidth >= x &&
              padY5 + padHeight >= y &&
              padY5 <= y + height){
                pad5 = true;
                y = 488;
              }
  
    else if (padX6 <= x + width &&
                padX6 + padWidth >= x &&
                padY6 + padHeight >= y &&
                padY6 <= y + height){
                  pad6 = true
                  y = 488
                }
  
  else if (y < 48){
          y = 488;
          livesLost ++;
        }
  
  let pads = [pad1, pad2, pad3, pad4, pad5, pad6];
  let padsX = [padX1, padX2, padX3, padX4, padX5, padX6];
  let padsY = [padY1, padY2, padY3, padY4, padY5, padY6];
  
        for (i = 0; i < pads.length; i++){
          if (pads[i] === true) {
            ctx.drawImage(frog, 0, 0, 40, 40, padsX[i], padsY[i], 30, 30)
          }
        }
  }
//Draw Screen function
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  if (victoryCondition === false) {
    gameOver();
    drawLives();
  }
  if (play){
  drawBackground();
  drawLogs();
  moveLogs();
  drawPads();
  onPad();
  drawFrog();
  moveFrog();
  drawCars();
  moveCars();
  runOver();
  float()
  }
requestAnimationFrame(draw);
}
draw();
