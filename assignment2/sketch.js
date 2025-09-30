

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);

  for(let i = 0; i < 10; i++){
    console.log(i);
  }
}

function draw() {
  background("#eec869ff");
  strokeWeight(3);
  stroke("rgba(93, 90, 90, 1)");
  let hue = 0;
  let sat = 0;

  // HSB (hue, saturation, brightness)
  // hue is pure color represented by a circle
  // 0 is red, 120 is green, 240 is blue
  // saturation is how vivid the color is
  // max is 100% purest form of hue
  // brightness is how light or dark color is
  // 0% brightness is black, 100% full intensity of color

  // two-dimensional for loop
  // first one is for y axis
  // this repeats as long as y is less than the height
  // of canvas and increases by 100 with each loop
  // second one is for x axis
  // identical to the y axis but for the x axis

  

  for (let y=0; y<height; y+=100){
    for (let x=0; x<width;x+=100) {
      hue = map(x,0,width,0,255);
      sat = map(y,0,height,0,255);
      fill(hue,sat,100);
      push();
      translate(x,y);

  // drawing a strawberry
  // making the whole thing fit within 100 by 100 pixels

  // drawing the leaf stem portion first
  // to go under the body of the strawberry

  beginShape();
  // fill("rgba(84, 222, 130, 1)")
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
  // using curveVertex function to get the rounded lines

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