let myDiameter;
// setting the base diameter
// so I can use it as a variable


function setup() {
  createCanvas(windowWidth, windowHeight);
  // making it scalable
  background("rgb(255, 237, 250)");
  // shade 1 pink colored background

}

function draw() {


  // shade 3 of pink box on the bottom left
  fill("rgb(236, 127, 169)");
  noStroke();
  rect(0,windowHeight*0.51,windowWidth*0.28,windowHeight);
  // the height is not actually windowHeight but b/c
  // it's at the bottom you can't tell

  // the solid shade 3 pink filled polygon on the top left
  fill("rgb(236, 127, 169)");
  noStroke();
  beginShape();
  vertex(windowWidth*0.23,windowHeight*0.058); // top left
  vertex(windowWidth*0.32,windowHeight*0.058); // top right
  vertex(windowWidth*0.13,windowHeight*0.40); // bottom left
  vertex(windowWidth*0.06,windowHeight*0.37); // bottom right
  endShape(CLOSE);

  // polygon on the top right quadrant in shade 3 pink
  stroke("rgb(236, 127, 169)");
  noFill();
  strokeWeight(3);
  beginShape();
  vertex(windowWidth*0.72,windowHeight*0.24); // top left
  vertex(windowWidth*0.80,windowHeight*0.24); // top right
  vertex(windowWidth*0.90,windowHeight*0.47); // bottom right
  vertex(windowWidth*0.82,windowHeight*0.47); // bottom left
  endShape(CLOSE);

  
  // shade 2 of pink cross on the top right quadrant 
  stroke("rgb(255, 184, 224)");
  strokeWeight(4);
  line(windowWidth*0.67,windowHeight*0.13,windowWidth*0.83,windowHeight*0.13); // the horizontal line
  line(windowWidth*0.75,windowHeight*0.058,windowWidth*0.75,windowHeight*0.2); // the vertical line

  // the angled extension of the horizontal shade 2 pink line to the left
  // in the top right quadrant
  fill("rgb(255, 184, 224)");
  noStroke();
  beginShape();
  vertex(windowWidth*0.28,windowHeight*0.45); // top right
  vertex(windowWidth*0.28,windowHeight*0.51); // bottom right
  vertex(windowWidth*0.10,windowHeight*0.45+3); // bottom left
  vertex(windowWidth*0.13,windowHeight*0.4); // top left
  endShape(CLOSE);

  // blue vertical line in the bottom right quadrant

  fill("rgba(148, 205, 215, 1)");
  noStroke();
  rect(windowWidth*0.8,windowHeight*0.57,windowWidth*0.044,windowHeight*0.28);

  // horizontal blue line across the middle in the bottom right
  // windowWidth for the width b/c it goes to the end of the page
  // not actually windowWidth but ensures it covers till the end
  rect(windowWidth*0.8,windowHeight*0.66,windowWidth,windowHeight*0.044);


  // the angled extension of the horizontal green line to the left
  // in the bottom right quadrant
  beginShape();
  vertex(windowWidth*0.8,windowHeight*0.66); // top right
  vertex(windowWidth*0.8,windowHeight*0.66+windowHeight*0.044); // bottom right
  vertex(windowWidth*0.51+0.07*windowWidth+2,windowHeight*0.63); // bottom left
  vertex(windowWidth*0.51+0.07*windowWidth+2,windowHeight*0.59); // top left
  endShape(CLOSE);

  // shade 3 of pink cross on the bottom right
  stroke("rgb(236, 127, 169)");
  strokeWeight(4);
  line(windowWidth*0.9,windowHeight*0.51+1,windowWidth*0.9,windowHeight*0.82); // vertical line
  line(windowWidth*0.75,windowHeight*0.59,windowWidth*0.95,windowHeight*0.59); // horizontal line


  // smaller purple circle on the right
  // set the diameter on top as a variable
  noFill();
  stroke("rgba(191, 133, 245, 1)");
  strokeWeight(3);
  myDiameter = 0.84*width;
  circle(windowWidth*0.87,windowHeight*0.2,myDiameter*0.13);

  // purple cross on the top left quadrant
  stroke("rgba(191, 133, 245, 1)");
  strokeWeight(4);
  line(0,windowHeight*0.16,windowWidth*0.17+1,windowHeight*0.16);
  line(windowWidth*0.09,windowHeight*0.09,windowWidth*0.09,windowHeight*0.24);


  // green polygon on the bottom left quadrant
  fill("rgba(132, 205, 127, 1)");
  noStroke();
  beginShape();
  vertex(windowWidth*0.28+5,windowHeight*0.75); // top left
  vertex(windowWidth*0.38,windowHeight*0.75); // top right
  vertex(windowWidth*0.51,windowHeight-windowHeight*0.058); //bottom right
  vertex(windowWidth*0.42+5,windowHeight-windowHeight*0.058); // bottom left
  endShape(CLOSE);


  // bigger green circle on the top left
  noFill();
  stroke("rgba(132, 205, 127, 1)");
  circle(windowWidth*0.38,windowHeight*0.3,myDiameter*0.2);
  // used myDiameter as a variable
  // made it 40% bigger

  // green line on bottom left quadrant
  strokeWeight(4);
  line(windowWidth*0.1,windowHeight*0.64,windowWidth*0.28,windowHeight*0.64);

  // purple cross on the bottom left quadrant
  stroke("rgba(191, 133, 245, 1)");
  strokeWeight(4);
  line(windowWidth*0.28+2,windowHeight*0.64,windowWidth*0.45,windowHeight*0.64);
  line(windowWidth*0.38,windowHeight*0.57,windowWidth*0.38,windowHeight*0.72);

  // the white outline of polygon on the bottom left
  noFill();
  strokeWeight(4);
  stroke("rgba(255, 255, 255, 1)");
  beginShape();
  vertex(windowWidth*0.24,windowHeight*0.6); // top right
  vertex(windowWidth*0.13,windowHeight*0.85); // bottom right
  vertex(windowWidth*0.05,windowHeight*0.85) // bottom left
  vertex(windowWidth*0.16,windowHeight*0.6); // top left
  endShape(CLOSE);


  // vertical shade 2 pink line down the middle
   fill("rgb(255, 184, 224)");
  noStroke();
  rect(windowWidth*0.51,windowHeight*0.05,windowWidth*0.07+2,windowHeight);
  // horizontal pink line across the middle
  rect(windowWidth*0.28,windowHeight*0.45,windowWidth*0.72,windowHeight*0.06);


  // shade 4 pink line at the top with 5.8% of the height
  fill("rgb(190, 89, 133)");
  noStroke();
  rect(0,0,windowWidth,windowHeight*0.058);
 
  // shade 4 pinkline at the bottom
  rect(0,windowHeight-windowHeight*0.058,windowWidth,windowHeight*0.058);
  // same as the one on top
  // putting these at the end so they lay on top of the pink lines

}