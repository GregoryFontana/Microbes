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

//All Cars
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

//Log Variables
//log 1
let logX1 = 300;
let logY1 = 180;
let logWidth = 120;
let logHeight = 30;
//log 2
let logX2 = 40;
let logY2 = 180;
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
    carX1 = carX1 + 5
  } else { 
    carX1 = -100
    carSX1 = (Math.floor(Math.random() * 4)) * 160
  }
  //car 2
  if(carX2 < canvas.width + 100){
    carX2 = carX2 + 5
  } else { 
    carX2 = -100
    carSX2 = (Math.floor(Math.random() * 4)) * 160
  }
  //car 3
  if(carX3 > -100){
    carX3 = carX3 - 5;
  }
  else{
    carX3 = canvas.width + 100;
    carSX3 = (Math.floor(Math.random() * 4)) * 160
  }
  //car 4
  if(carX4 < canvas.width + 100){
    carX4 = carX4 + 5
  } else { 
    carX4 = -100
    carSX4 = (Math.floor(Math.random() * 4)) * 160
  }
  //car 5
  if(carX5 > -100){
    carX5 = carX5 - 5;
  }
  else{
    carX5 = canvas.width + 100;
    carSX5 = (Math.floor(Math.random() * 4)) * 160
  }
  //car 6
  if(carX6 > -100){
    carX6 = carX6 - 5;
  }
  else{
    carX6 = canvas.width + 100;
    carSX6 = (Math.floor(Math.random() * 4)) * 160
  }
//car 7
if(carX7 < canvas.width + 100){
  carX7 = carX7 + 5
} else { 
  carX7 = -100
  carSX7 = (Math.floor(Math.random() * 4)) * 160
}
//car 8
if(carX8 > -100){
  carX8 = carX8 - 5;
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
  y=488
}
}}
//Draw Logs
function drawLogs(){
  ctx.fillStyle ="tan";
  let logsX = [logX1, logX2];
  let logsY = [logY1, logY2]

  for(i = 0; i < logsX.length; i++){
  ctx.fillRect(logsX[i], logsY[i], logWidth, logHeight);
}
}
//Move Logs
function moveLogs(){
  if(logX1 < canvas.width + 100){
    logX1 = logX1 + 2;
  } else {
    logX1 = -100
  }
}
//Float
function float(){
  if(y < 220){
    if (logX1 <= x + width && 
      logX1 + logWidth >= x &&
    logY1 + logHeight >= y &&
    logY1 <= y + height){
      if(x < canvas.width-30){
        x = x +2
      }
    }

}
//Draw Screen function
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawBackground();
  drawLogs()
  moveLogs()
  drawFrog();
  moveFrog();
  drawCars();
  moveCars();
  runOver();
  float()

requestAnimationFrame(draw);
}
draw();
