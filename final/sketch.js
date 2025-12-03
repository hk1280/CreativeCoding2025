let speed = 0.01;
let noisePosition = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background("rgb(0,0,0)");
  translate(width/2, height/2);
  strokeWeight(3);
  stroke("rgba(219, 81, 81, 1)");
  noFill();
  let diam = noise(noisePosition);
  diam = map(diam, 0, 1, 0, height);
  circle(0,0,diam);

noisePosition = noisePosition + speed;
}