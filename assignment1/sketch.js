let myDiameter = 70;
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
  fill("rgba(132, 189, 247, 1)");
  noStroke();
  rect(windowWidth*0.52,50,50,windowHeight);
  // middle blue line down the middle
  rect(windowWidth*0.28,windowHeight*0.45,windowWidth*0.68,50);
  // blue straight line across the middle 

  fill("rgb(0,0,0)");
  rect(0,windowHeight*0.45+50,windowWidth*0.28,windowHeight*0.45+50)
  // black box on the bottom left

  fill("rgba(112, 112, 112, 1)");
  noStroke();
  rect(0,0,windowWidth,50);
  // gray line at the top
  rect(0,windowHeight-50,windowWidth,50);
  // gray line at the bottom

  noFill();
  stroke("rgba(253, 0, 0, 1)");
  strokeWeight(3);
  circle(windowWidth*0.9,windowHeight*0.2,myDiameter);
  // smaller red circle on the right

  stroke("rgba(252, 255, 101, 1)");
  circle(windowWidth*0.4,windowHeight*0.33,myDiameter*1.5);
  // bigger yellow circle on the left
  // used myDiameter as a variable
  // made it 55% bigger
 
  stroke("rgba(232, 101, 101, 1)");
  strokeWeight(4);
  line(0,100,150,100);
  
  fill("rgb(0,0,0)");
  noStroke();
  beginShape();
  vertex(windowWidth*0.32-50,50);
  vertex(windowWidth*0.32,50);
  vertex(windowWidth*0.15,windowHeight*0.4)
  vertex(windowWidth*0.08,windowHeight*0.36);
  endShape(CLOSE);
  // the solid black filled polygon on the top left
  












}
