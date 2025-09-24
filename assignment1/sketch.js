let myDiameter = 100;
// setting the base diameter of the smaller circle
// so I can use it as a variable

let myCross;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // making it scalable
  background("rgba(255, 236, 236, 1)");
  // cream colored background

}

function draw() {
  
  fill("rgba(84, 101, 255, 1)");
  noStroke();
  rect(windowWidth*0.52,50,50,windowHeight);
  // vertical blue line down the middle
  rect(windowWidth*0.28,windowHeight*0.45,windowWidth*0.72,50);
  // horizontal blue line across the middle 

  fill("rgba(55, 129, 48, 1)");
  noStroke();
  rect(windowWidth*0.8,windowHeight*0.57,35,windowHeight*0.28);
  // green vertical line in the fourth quadrant
  rect(windowWidth*0.8,windowHeight*0.66,windowWidth,35);
  // horizontal green line across the middle
  // windowWidth for the width b/c it goes to the end of the page

  fill("rgba(55, 129, 48, 1)");
  noStroke();
  beginShape();
  vertex(windowWidth*0.8,windowHeight*0.66);
  vertex(windowWidth*0.8,windowHeight*0.7);
  vertex(windowWidth*0.52+50,windowHeight*0.63);
  vertex(windowWidth*0.52+50,windowHeight*0.59);
  endShape(CLOSE);
  // the angled extension of the horizontal green line to the left
  // in the bottom right quadrant

  stroke("rgb(0, 0, 0)");
  strokeWeight(4);
  line(windowWidth*0.9,windowHeight*0.45+52,windowWidth*0.9,windowHeight*0.82);
  line(windowWidth*0.75,windowHeight*0.59,windowWidth*0.95,windowHeight*0.59);
  // black cross on the bottom left

  fill("rgb(0,0,0)");
  rect(0.77,windowHeight*0.45+50,windowWidth*0.28,windowHeight);
  // black box on the bottom left
  // the height is not actually windowHeight but b/c
  // it's at the bottom you can't tell

  fill("rgba(112, 112, 112, 1)");
  noStroke();
  rect(0,0,windowWidth,50);
  // gray line at the top with a height of 50
  rect(0,windowHeight-50,windowWidth,50);
  // gray line at the bottom
  // same as the one on top
  // putting these after the blue lines so they lay on top of them

  noFill();
  stroke("rgba(253, 0, 0, 1)");
  strokeWeight(3);
  circle(windowWidth*0.9,windowHeight*0.2,myDiameter);
  // smaller red circle on the right
  // set the diameter on top as a variable

  stroke("rgba(252, 255, 101, 1)");
  circle(windowWidth*0.38,windowHeight*0.3,myDiameter*1.6);
  // bigger yellow circle on the left
  // used myDiameter as a variable
  // made it 50% bigger
 
  stroke("rgba(232, 101, 101, 1)");
  strokeWeight(4);
  line(0,100,90,100);
  line(48,65,48,140);
  // red cross on the top left quadrant

  stroke("rgba(84, 101, 255, 1)");
  strokeWeight(4);
  line(windowWidth*0.7,80,windowWidth*0.8,80);
  line(windowWidth*0.75,50,windowWidth*0.75,130);
  // blue cross on the top right quadrant
  
  fill("rgb(0,0,0)");
  noStroke();
  beginShape();
  vertex(windowWidth*0.23,50);
  vertex(windowWidth*0.32,50);
  vertex(windowWidth*0.13,windowHeight*0.40)
  vertex(windowWidth*0.06,windowHeight*0.37);
  endShape(CLOSE);
  // the solid black filled polygon on the top left

  fill("rgba(84, 101, 255, 1)");
  noStroke();
  beginShape();
  vertex(windowWidth*0.28,windowHeight*0.45);
  vertex(windowWidth*0.28,windowHeight*0.45+50);
  vertex(windowWidth*0.10,windowHeight*0.45+3);
  vertex(windowWidth*0.13,windowHeight*0.4);
  endShape(CLOSE);
  // the angled extension of the horizontal blue line to the left
  // in the first quadrant
 
  // fill("rgb(0,0,0)");
  // noStroke();
  // vertex(windowWidth*0.75,windowHeight*0.3);
  // vertex(windowWidth*0.78,windowHeight*0.3);
  // vertex(windowWidth*0.90,windowHeight*0.4);
  // vertex(windowWidth*0.77,windowHeight*0.45-50)
  // vertex(windowWidth*0.75,windowHeight*0.3);
  // endShape();














}
