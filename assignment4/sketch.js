
// sushi
// rice - same size
// different types of fish on top
// different toppings on fish

let mySushi = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("rgb(0,0,0)");

  
}

function draw() {
  drawRice();
  drawFish();

}

function drawRice() {
  push();
  translate(100,100);
  fill("rgba(255, 255, 255, 1)");
  ellipse(0, 18, 160, 60);
  pop();
}

function drawFish() {
  push();
  translate(100,100);
  fill("rgba(244, 158, 72, 1)");
  ellipse(0, 0, 160, 60);
  pop();

}

class Sushi {
  constructor(x,y,range) {
  this.x = x;
  this.y = y;
  this.range = range;
  }
}