

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let i = 0; i < 10; i++){
    console.log(i);
  }
}

function draw() {
  background("#eec869ff");
  strokeWeight(3);
  stroke("rgba(93, 90, 90, 1)");

  for (let y=0; y<height; y+=100){
    for (let x=0; x<width;x+=100) {
      push();
      translate(x,y);

  
  
  // drawing the leaf stem portion
  beginShape();
  fill("rgba(84, 222, 130, 1)")
  curveVertex(0,50);
  curveVertex(50,50);
  curveVertex(25,7);
  curveVertex(35,8);
  curveVertex(38,7);
  curveVertex(50,1);
  curveVertex(62,7);
  curveVertex(65,8);
  curveVertex(75,7);
  curveVertex(50,50);
  curveVertex(100,50);
  endShape();

  // drawing the body of strawberry
  fill("rgba(235, 71, 142, 1)");
  beginShape();
  curveVertex(50,25);
  curveVertex(50,25);
  curveVertex(25,10);
  curveVertex(5,25);
  curveVertex(13,75);
  curveVertex(50,100);
  curveVertex(87,75);
  curveVertex(95,25);
  curveVertex(75,10);
  curveVertex(50,25);
  curveVertex(50,25);
  endShape();

  // drawing the seeds
  fill("rgba(93, 90, 90, 1)");
  ellipse(38,45,5,13);
  ellipse(62,45,5,13);
  ellipse(50,68,5,13);
  
  pop();


  }}}