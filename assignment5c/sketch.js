let heartX;
let heartY;
let heartPositionX;
let heartPositionY;
let heartSpeed;

function setup() {
  createCanvas(400, 400);
  heartPositionX = random(1000);
  heartPositionY = random(1000);
  let heartSpeed = 0.1
  
}

function draw() {
  let heartX = map(noise(heartPositionX),0,1,0,width)
  let heartY = map(noise(heartPositionY),0,1,0,height);
  heartPositionX = heartPositionX + heartSpeed;
  heartPositionY = heartPositionY + heartSpeed;

  push();
  translate(heartX, heartY);

  beginShape();
  curveVertex(xPos,150);
  curveVertex(200,150);
  curveVertex(290,110);
  curveVertex(340,200);
  curveVertex(200,350);
  curveVertex(60,200);
  curveVertex(110,110);
  curveVertex(200,150);
  curveVertex(200,yPos);
  endShape();
  pop();
}
