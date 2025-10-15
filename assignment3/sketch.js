
let buttonWidth = 200;
let buttonHeight = 20;

let bubblePosition = 570;
let bubbleSpeed = 0;
let bubbleSize = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

// mapping the gradient in the background from day to night
// to the hour function 
// chose 2 specific colors to form the gradient (yellow and blue)
// the range is from 0 to 1 (midnight to next midnight - a full day)

  let backGradient = map(hour(),0,23,0,1);
  let dayColor = color(255,230,150); // yellow
  let nightColor = color(40,30,128); // dark blue 
  let bgColors = lerpColor(dayColor,nightColor,backGradient);
  background(bgColors);

  // https://p5js.org/reference/p5/lerpColor/
  // blends 2 colors to find a third color between them
  // gradient!
  // lerpColor(c1, c2, amt)
  // (interpolate from this color, to this color, amount b/w 0 and 1)
  // by default color() uses RGB model

  
// top part of jar

strokeWeight(4);
fill(bgColors);
let buttonLeft = width/2-buttonWidth/2; // x coord of top left
let buttonTop = height/3; // y coordinate of top right
let buttonRight = buttonLeft+buttonWidth; // x coord of bottom right
let buttonBottom = buttonTop + buttonHeight; // y coord of bottom right
stroke("rgb(0,0,0)");
rect(buttonLeft, buttonTop, buttonWidth, buttonHeight,20) // 20 gives the rounded edges


// table
fill("rgba(144, 144, 144, 1)");
noStroke();
rect(0,height-80,width,height);


// SCOBY (symbiotic culture of bacteria & yeast)
// gelatinous, cellulose-based mat = pellicle

fill("rgba(216, 197, 111, 1)");
noStroke();
beginShape();
curveVertex(buttonLeft-40, buttonBottom+70);
curveVertex(buttonLeft-50, buttonBottom+70);
curveVertex(buttonLeft-50, buttonBottom+100);
curveVertex(buttonLeft-20, buttonBottom+110);
curveVertex(buttonRight+20, buttonBottom+110);
curveVertex(buttonRight+50, buttonBottom+100);
curveVertex(buttonRight+50, buttonBottom+70);
curveVertex(buttonRight+40, buttonBottom+70);
endShape();


// foam at top of jar
// organic shape of foam
// a lot trial & error to get right shape

beginShape();
curveVertex(buttonLeft,buttonTop);
curveVertex(buttonLeft,buttonTop);
curveVertex(buttonLeft+20,buttonTop-30);
curveVertex(buttonLeft+40,buttonTop-40);
curveVertex(buttonLeft+80,buttonTop-20);
curveVertex(buttonLeft+110,buttonTop-30);
curveVertex(buttonLeft+130,buttonTop-20);
curveVertex(buttonLeft+160,buttonTop-30);
curveVertex(buttonRight-10, buttonTop-30);
curveVertex(buttonRight, buttonTop);
curveVertex(buttonRight, buttonTop);
endShape();


// liquid in the jar

// same thing I did with the background
// mapping the gradient of the liquid with the minute function
// remapping the minute to the range of dark orange
// to light tan color
// kombucha gets lighter as it ferments
// dark orange is (160,90,40)
// light tan is (251,238,172)

let liquidGradient = map(minute(),0,59,0,1);
let darkColor = color(160,90,40);
let lightColor = color(251,238,172)
let liquidColor = lerpColor(darkColor, lightColor, liquidGradient);
fill(liquidColor);


// fill("rgba(196, 118, 50, 1)");
beginShape();
noStroke();
curveVertex(buttonLeft, buttonBottom+100);
curveVertex(buttonLeft-50, buttonBottom+100);
curveVertex(buttonLeft-30, windowHeight-80);
curveVertex(buttonRight+30, windowHeight-80);
curveVertex(buttonRight+50, buttonBottom+100);
curveVertex(buttonRight, buttonBottom+22);
endShape();

// body of the jar

stroke("rgba(0, 0, 0, 1)");
noFill();
beginShape();
curveVertex(buttonLeft+10, buttonBottom);
curveVertex(buttonLeft+10, buttonBottom);
curveVertex(buttonLeft+5, buttonBottom+22);
curveVertex(buttonLeft-50, buttonBottom+80);
curveVertex(buttonLeft-30, windowHeight-80);
curveVertex(buttonRight+30, windowHeight-80);
curveVertex(buttonRight+50, buttonBottom+80);
curveVertex(buttonRight-5, buttonBottom+22);
curveVertex(buttonRight-10, buttonBottom);
curveVertex(buttonRight-10, buttonBottom);
endShape();

// bubbles in the liquid

// I initally drew static rows of bubbles in the entire liquid
// portion of the jar using a 2-dimensional for loop.
// I changed it to a single for loop for a row of bubbles 
// at the bottom because I wanted that row of bubbles
// to move up and disappear. I could not figure out how to 
// get the entire for loop to move up so I chose to 
// draw each bubble individually. When the bubbles hit
// the top of the liquid, they restart at the bottom.
// After drawing the static bubbles of diff colors
// and sizes in the middle using two dimensional for loops,
// I resized the moving bubbles in the middle.

// mapping the speed of the bubbles to the second function
let bubbleSpeed = map(second(),0,59,0.3,0.7);
bubblePosition = bubblePosition - bubbleSpeed; // minus to make it go the opposite direction - up!

if(bubblePosition < height-80 && bubblePosition > buttonBottom+110) {
strokeWeight(2);
stroke("rgba(244, 218, 69, 1)");

circle(buttonLeft+4, bubblePosition, 38);
circle(buttonLeft+55, bubblePosition, 25);
circle(buttonLeft+100, bubblePosition, 20);
circle(buttonLeft+145, bubblePosition, 30);
circle(buttonLeft+195, bubblePosition, 35);
} else if (bubblePosition < buttonBottom+110) {
  bubblePosition = height-80;
}

// drawing static bubbles inside the liquid
// using 2 dimensional for loops

for (let x=buttonLeft-20; x<buttonRight+40; x+=48) { 
for (let y=buttonBottom+120; y<windowHeight-90; y+=50){

    push();
    translate(x,y);
    noFill();
    strokeWeight(2);
    stroke("rgba(220, 160, 30, 1)");
    circle(0, 0, 12); 
    pop()

}}

for (let x=buttonLeft-40; x<buttonRight+60; x+=70) { 
for (let y=buttonBottom+150; y<windowHeight-100; y+=50){

    push();
    translate(x,y);
    noFill();
    strokeWeight(1);
    stroke("rgba(255, 231, 180, 1)");
    circle(0, 0, 7); 
    pop()

}}

// the pellicle area has smaller bubbles in orange
// visualizes as two rows of orange static bubbles
// executed by a two dimensional for loop below

for (let x=buttonLeft-30; x<buttonRight+56; x+=50) { 
for (let y=buttonBottom+80; y<buttonBottom+110; y+=15){
 
    push();
    translate(x,y);
    noFill();
    strokeWeight(2);
    stroke("rgba(242, 153, 45, 1)");
    circle(0, 0, 5); 
    pop()

}
}

// bubbles in the sky

// I originally had 3 separate two-dimensional for loops.
// They all had a random aspect to it, so i included the noLoop().
// I realized the noLoop() would stop the time so I got rid of it.

// diff rows of diff bubbles in the next 3 two dimensional 
// for loops

for (let x=50; x<width-50; x+=80) { 
  for (let y=40; y<height/4; y+=90){
 
    push();
    translate(x,y);
    noFill();
    strokeWeight(2);
    stroke("rgba(244, 218, 69, 1)");
    circle(0, 0, 10); 
    pop()
}
}

for (let x=20; x<width-30; x+=80) { 
  for (let y=70; y<height/4; y+=100){
 
    push();
    translate(x,y);
    noFill();
    strokeWeight(1);
    stroke("rgba(220, 160, 30, 1)");
    circle(0, 0, 15); 
    pop()
}
}

for (let x=70; x<width-30; x+=80) { 
  for (let y=100; y<height/4; y+=100){
 
    push();
    translate(x,y);
    noFill();
    strokeWeight(3);
    stroke("rgba(208, 188, 145, 1)");
    circle(0, 0, 5); 
    pop()
}
}
// sun / moon

fill("rgba(255, 250, 92, 1)");
noStroke();
circle(windowWidth-100,75,200);

fill("rgba(255, 253, 253, 1)");

// time stamp - needed this to make sure it was running
  textSize(20);
  text(hour() + ":" + minute() + ":" + second(),10, 250)


}
