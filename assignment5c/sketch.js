// let hearts = [];
// let numberOfHearts = 20;

let drunkHeartX = 200; // current x position
let drunkHeartY = 200; // current y position
let drunkHeartRange = 3; // range of movement
let drunkHeartSize = 0.1; // size of heart


function setup() {
  createCanvas(400,400);

}
  

function draw() {
  background("rgb(0,0,0)");  

  drunkHeartX += random(-drunkHeartRange,drunkHeartRange); // adding random movement in the range
  drunkHeartY += random(-drunkHeartRange,drunkHeartRange); // adding random movement in the range

  push();
  translate(drunkHeartX, drunkHeartY);
  scale(drunkHeartSize); // scales the heart down
  fill("rgba(250, 132, 252, 1)");
  drawHeart();
  pop();

}



function drawHeart() {

  beginShape();
  curveVertex(200,150); 
  curveVertex(200,150);
  curveVertex(290,110);
  curveVertex(330,200);
  curveVertex(200,350);
  curveVertex(70,200);
  curveVertex(110,110);
  curveVertex(200,150);
  curveVertex(200,150); 
  endShape();

}

