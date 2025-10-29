let heartX;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background("rgb(0,0,0)");
  fill("rgba(250, 132, 252, 1)");
  push();

  let heartX = frameCount % width; 
  // frameCount increases by 1 each frame
  // loop it back to 0 when it reaches the width
  // % gives the remainder
  // 0 to 400, left to right
  // 401 - starts again from the left side

  translate(heartX-200, -20); // estimation of center
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

  
  
