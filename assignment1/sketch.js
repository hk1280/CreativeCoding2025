let myDiameter;
// setting the base diameter
// so I can use it as a variable


function setup() {
  createCanvas(windowWidth, windowHeight);
  // making it scalable
  background("rgba(255, 236, 236, 1)");
  // cream colored background

}

function draw() {


  // black box on the bottom left
  fill("rgb(0,0,0)");
  rect(0,windowHeight*0.51,windowWidth*0.28,windowHeight);
  // the height is not actually windowHeight but b/c
  // it's at the bottom you can't tell

  // the solid black filled polygon on the top left
  fill("rgb(0,0,0)");
  noStroke();
  beginShape();
  vertex(windowWidth*0.23,50); // top left
  vertex(windowWidth*0.32,50); // top right
  vertex(windowWidth*0.13,windowHeight*0.40); // bottom left
  vertex(windowWidth*0.06,windowHeight*0.37); // bottom right
  endShape(CLOSE);

  // polygon on the top right quadrant
  stroke("rgb(0,0,0)");
  noFill();
  strokeWeight(3);
  beginShape();
  vertex(windowWidth*0.72,windowHeight*0.24); // top left
  vertex(windowWidth*0.80,windowHeight*0.24); // top right
  vertex(windowWidth*0.90,windowHeight*0.47); // bottom right
  vertex(windowWidth*0.82,windowHeight*0.47); // bottom left
  endShape(CLOSE);

  // vertical blue line down the middle
  fill("rgba(84, 101, 255, 1)");
  noStroke();
  rect(windowWidth*0.51,windowHeight*0.05,windowWidth*0.07+2,windowHeight);
  // horizontal blue line across the middle
  rect(windowWidth*0.28,windowHeight*0.45,windowWidth*0.72,windowHeight*0.06);
  
  // blue cross on the top right quadrant 
  stroke("rgba(84, 101, 255, 1)");
  strokeWeight(4);
  line(windowWidth*0.67,windowHeight*0.13,windowWidth*0.83,windowHeight*0.13); // the horizontal line
  line(windowWidth*0.75,50,windowWidth*0.75,windowHeight*0.2); // the vertical line

  // the angled extension of the horizontal blue line to the left
  // in the first quadrant
  fill("rgba(84, 101, 255, 1)");
  noStroke();
  beginShape();
  vertex(windowWidth*0.28,windowHeight*0.45); // top right
  vertex(windowWidth*0.28,windowHeight*0.51); // bottom right
  vertex(windowWidth*0.10,windowHeight*0.45+3); // bottom left
  vertex(windowWidth*0.13,windowHeight*0.4); // top left
  endShape(CLOSE);

  // green vertical line in the fourth quadrant

  fill("rgba(55, 129, 48, 1)");
  noStroke();
  rect(windowWidth*0.8,windowHeight*0.57,windowWidth*0.044,windowHeight*0.28);

  // horizontal green line across the middle in the bottom right
  // windowWidth for the width b/c it goes to the end of the page
  // not actually windowWidth but ensures it covers till the end
  rect(windowWidth*0.8,windowHeight*0.66,windowWidth,35);


  // the angled extension of the horizontal green line to the left
  // in the bottom right quadrant
  fill("rgba(55, 129, 48, 1)");
  noStroke();
  beginShape();
  vertex(windowWidth*0.8,windowHeight*0.66); // top right
  vertex(windowWidth*0.8,windowHeight*0.7); // bottom right
  vertex(windowWidth*0.52+50,windowHeight*0.63); // bottom left
  vertex(windowWidth*0.52+50,windowHeight*0.59); // bottom right
  endShape(CLOSE);

  // black cross on the bottom right
  stroke("rgb(0, 0, 0)");
  strokeWeight(4);
  line(windowWidth*0.9,windowHeight*0.45+52,windowWidth*0.9,windowHeight*0.82); // vertical line
  line(windowWidth*0.75,windowHeight*0.59,windowWidth*0.95,windowHeight*0.59); // horizontal line

  // gray line at the top with 5.8% of the height
  fill("rgba(112, 112, 112, 1)");
  noStroke();
  rect(0,0,windowWidth,windowHeight*0.058);
 
  // gray line at the bottom
  rect(0,windowHeight-windowHeight*0.058,windowWidth,windowHeight*0.058);
  // same as the one on top
  // putting these after the blue lines so they lay on top of them

  // smaller red circle on the right
  // set the diameter on top as a variable
  noFill();
  stroke("rgba(253, 0, 0, 1)");
  strokeWeight(3);
  myDiameter = width;
  circle(windowWidth*0.87,windowHeight*0.2,myDiameter*0.15);

  // red cross on the top left quadrant
  stroke("rgba(232, 101, 101, 1)");
  strokeWeight(4);
  line(0,windowHeight*0.16,windowWidth*0.17+1,windowHeight*0.16);
  line(windowWidth*0.09,windowHeight*0.09,windowWidth*0.09,windowHeight*0.24);



  // polygon on the bottom left quadrant
  fill("rgba(252, 255, 101, 1)");
  noStroke();
  beginShape();
  vertex(windowWidth*0.28+5,windowHeight*0.75); // top left
  vertex(windowWidth*0.38,windowHeight*0.75); // top right
  vertex(windowWidth*0.50+4,windowHeight-50); //bottom right
  vertex(windowWidth*0.42+5,windowHeight-50); // bottom left
  endShape(CLOSE);


  // bigger yellow circle on the top left
  noFill();
  stroke("rgba(252, 255, 101, 1)");
  circle(windowWidth*0.38,windowHeight*0.3,myDiameter*0.21);
  // used myDiameter as a variable
  // made it 40% bigger

  // yellow line on bottom left quadrant
  stroke("rgba(246, 236, 128, 1)");
  strokeWeight(4);
  line(windowWidth*0.1,windowHeight*0.64,windowWidth*0.28-3,windowHeight*0.64);

  // red cross on the bottom left quadrant
  stroke("rgba(232, 101, 101, 1)");
  strokeWeight(4);
  line(windowWidth*0.28,windowHeight*0.64,windowWidth*0.45,windowHeight*0.64);
  line(windowWidth*0.38,windowHeight*0.57,windowWidth*0.38,windowHeight*0.72);

  // the white outline of polygon on the bottom left
  noFill();
  strokeWeight(4);
  stroke("rgba(255, 255, 255, 1)");
  beginShape();
  vertex(windowWidth*0.22,windowHeight*0.6);
  vertex(windowWidth*0.15,windowHeight*0.85);
  vertex(windowWidth*0.09,windowHeight*0.85)
  vertex(windowWidth*0.16,windowHeight*0.6);
  endShape(CLOSE);








}