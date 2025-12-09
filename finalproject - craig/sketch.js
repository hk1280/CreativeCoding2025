let circleOsc = 0;
let pMillis = 0;
let interval = 4000;
let circleGrowRange = 150;
let circleBaseSize = 250;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(255);
  let timer = millis()-pMillis;
  if(timer>interval){
    pMillis = millis(); //reset timer after interval
  }

  text(timer.toFixed(0),50,50);

  // converts the millis into percentage of cycle
  // 0 beginning, 1 is end
  let timePercentage = timer/interval;
  text(timePercentage.toFixed(5),50,60);
  
  // map to convert the percentage into an angle in radians
  // when 0 angle is 0, 1 is 2 pi
  // so over 4 seconds, one full circle around the sin wave

  let timeAngle = map(timePercentage,0,1,0,2*PI);
  text(timeAngle.toFixed(5),50,70);

// sin(timeAngle) b/w -1 and 1 as timeAngle goes from 0 to 2 pi
  circleOsc = (sin(timeAngle)*circleGrowRange);
  circle(width/2,height/2,circleOsc+circleBaseSize);
}