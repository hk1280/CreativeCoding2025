let myHearts = [];

let numberOfHearts = 20;

function setup() {
  createCanvas(400, 400);

    for (let i=0; i<numberOfHearts; i++) {
    let heartX = random(width);
    let heartY = random(height);
    let heartRange = random(1,3);
    let heartSize = random(0.08,0.1);
    let heartColor = color(random(240,255), random(100,160), random(200,255));
    let hearts = (heartX, heartY, heartRange, heartSize, heartColor);
    myHearts.push(hearts);
  }
  
}

function draw() {
  background("rgb(0,0,0)");

  for (let i=0; i< myHearts.length; i++) {
    drunkHeart(myHearts[i]);
    drawHeart(myHearts[i]);
  }

  
}

function drunkHeart() {

  heartX += heartRange;
  heartY += heartRange;

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


