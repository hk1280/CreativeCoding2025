let heartX;
let heartY;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background("rgb(0,0,0)");
  fill("rgba(250, 132, 252, 1)");
  push();
  let heartX = frameCount%width; 
  let heartY = height/2;
  translate(heartX-200, 0);
  drawHeart();
  pop();

}

function drawHeart() {
  beginShape();
  curveVertex(200,150);
  curveVertex(200,150);
  curveVertex(290,110);
  curveVertex(340,200);
  curveVertex(200,350);
  curveVertex(60,200);
  curveVertex(110,110);
  curveVertex(200,150);
  curveVertex(200,150);
  endShape();
}

  
  
