function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  fill("rgba(132, 189, 247, 1)");
  noStroke();
  rect(windowWidth*0.52,50,50,windowHeight);
  // middle blue line down the middle
  rect(windowWidth*0.32,windowHeight*0.45,windowWidth*0.68,50);
  // blue straight line across the middle 

  fill("rgb(0,0,0)");
  rect(0,windowHeight*0.45+50,windowWidth*0.32,windowHeight*0.45+50)
  // black box on the bottom left

  fill("rgba(112, 112, 112, 1)");
  noStroke();
  rect(0,0,windowWidth,50);
  // gray line at the top
  rect(0,windowHeight-50,windowWidth,50);
  // gray line at the bottom





}
