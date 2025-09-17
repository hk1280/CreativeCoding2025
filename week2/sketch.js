let originX = 50;
let originY = 100;


function setup() { // runs once at the start
  createCanvas(windowWidth, windowHeight);
  // createCanvas is a function
  // that creates a canvas for our p5.js sketch
  // to draw into. it takes 2 parameters,
  // width and height. windowWidth and windowHeight
  // are used to set the size to the full size
  // of our browser window.
  background(212,115,212);
}

// function draw() { // runs in a loop after setup
  circle(mouseX, mouseY, 20);
  // circle takes these parameters:
  // x position, y position, diameter
 
// }

function draw() {
  noStroke();
  // no stroke
  fill(248,222,126);
  // changed circle to yellow
  circle(width/2, height/2, 300);
  // circle at center that is 300 pixels wide

  stroke(252,215,249);
  // stroke is lilac
  strokeWeight(2);
  // thickness of stroke is 2
  fill(252,130,0);
  // color of triangle is orange
  triangle(originX, originY, originX+400, originY, originX, originY+200);
  // set variable of the x y coordinate on top and applied changes to it
  triangle(originX+400,originY+400, originX-25, originY+350, originX+50, originY+600)

  



}
