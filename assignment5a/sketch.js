let heartSpeed = 0.02;
let heartX = 0;
let heartY = 0;

function setup() {
  createCanvas(400,400);
  heartX = random(100); // random number between 0 and 100
  heartY = random(100); // random number between 0 and 100
  
}

function draw() {
  background("rgb(0,0,0)");  
  // translate(width/2, height/2);
  fill("rgba(250, 132, 252, 1)");

  // using Perlin noise to create motion by mapping
  // x and y position 
  // noise() produces number between 0 and 1 
  // to a possible range b/w 0 and width, height
  // respectively
  // noise is smooth, unlike random

  let heartXPos = map(noise(heartX),0,1,0,width);
  let heartYPos = map(noise(heartY),0,1,0,height);

  // drawing the heart
  beginShape();
  curveVertex(heartXPos,150); // xPos changes the top of the heart smoothly left to right
  curveVertex(200,150);
  curveVertex(290,110);
  curveVertex(340,200);
  curveVertex(200,350);
  curveVertex(60,200);
  curveVertex(110,110);
  curveVertex(200,150);
  curveVertex(200,heartYPos); // yPos changes up and down
  endShape();

  heartX+=heartSpeed; // movement
  heartY+=heartSpeed; // movement

}

