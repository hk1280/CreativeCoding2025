let heartX;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background("rgb(0,0,0)");
  fill("rgba(250, 132, 252, 1)");
  push();


  // heart width is 330 - 70 = 260
  // half of width is 130
  // has to travel 400 + 260 = 660
  // half the heart is 130
  // on the right side, has to travel
  // 130 + 200 = 330


  let heartX = frameCount % 660 - 330; 
  // frameCount increases by 1 each frame
  // loop it back to 0 when the left side
  // of heart reaches the width
  // have the right side of heart start
  // from 0
  // % gives the remainder


  translate(heartX, -20); // estimation of center
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

  
  
