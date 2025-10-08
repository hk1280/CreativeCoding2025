// very much a work in progress
// there's a vision but not executed yet
// trying to apply what i have learned so far

let buttonWidth = 200;
let buttonHeight = 20;
let radius = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background("rgba(77, 75, 117, 1)");
  
// top part of jar
strokeWeight(4);
let buttonLeft = width/2-buttonWidth/2; // x coord of top left
let buttonTop = height/3; // y coordinate of top right
let buttonRight = buttonLeft+buttonWidth; // x coord of bottom right
let buttonBottom = buttonTop + buttonHeight; // y coord of bottom right

fill("rgba(77, 75, 117, 1)");
stroke("rgb(0,0,0)");
rect(buttonLeft, buttonTop, buttonWidth, buttonHeight,20) // 20 gives the rounded the edges


// table
fill("rgba(144, 144, 144, 1)");
noStroke();
rect(0,windowHeight-80,width,height);


// body of the jar

stroke("rgba(0, 0, 0, 1)");
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



// SCOBY (symbiotic culture of bacteria & yeast)
// gelatinous, cellulose-based mat = pellicle

fill("rgba(216, 197, 111, 1)");
noStroke();
beginShape();
curveVertex(buttonLeft, buttonBottom+70);
curveVertex(buttonLeft-50, buttonBottom+70);
curveVertex(buttonLeft-50, buttonBottom+100);
curveVertex(buttonRight+50, buttonBottom+100);
curveVertex(buttonRight+50, buttonBottom+70);
curveVertex(buttonRight, buttonBottom+70);
endShape();

// liquid in the jar

fill("rgba(196, 118, 50, 1)");
beginShape();
noStroke();
curveVertex(buttonLeft, buttonBottom+100);
curveVertex(buttonLeft-50, buttonBottom+100);
curveVertex(buttonLeft-30, windowHeight-80);
curveVertex(buttonRight+30, windowHeight-80);
curveVertex(buttonRight+50, buttonBottom+100);
curveVertex(buttonRight, buttonBottom+22);
endShape();



// sun / moon

fill("rgba(255, 250, 92, 1)");
noStroke();
circle(windowWidth-150,100,100);


// bubbles in the liquid row by row
// two dimensional for loop for x and y axis
// within the liquid of the jar


for (let x=buttonLeft-20; x<buttonRight+40; x+=30) { 
for (let y=buttonBottom+110; y<windowHeight-80; y+=60){
 
    push();
    translate(x,y);
    noFill();
    strokeWeight(3);
    stroke("rgba(244, 218, 69, 1)");

    // changing the sizes of the bubbles randomly across the x
    // noLoop so that it's not constantly running and freaking out

    let scalingX = map(x,buttonLeft,buttonRight,random(),random(1.2));
    scale(scalingX);
    // let scalingY = map(y,buttonBottom+80,windowHeight-80, random(0.5), random(1.2));
    // scale(scalingY);
    noLoop();

    circle(0, 0, 20); 
    pop()

}
}

// easier for me to think of as a separate nested loop
// the pellicle area has smaller bubbles in orange

for (let x=buttonLeft-30; x<buttonRight+56; x+=50) { 
for (let y=buttonBottom+80; y<buttonBottom+110; y+=15){
 
    push();
    translate(x,y);
    noFill();
    strokeWeight(4);
    stroke("rgba(242, 153, 45, 1)");
    // changing the sizes of the bubbles randomly across the x
    // noLoop so that it's not constantly running and freaking out

    let scalingY = map(x,buttonLeft,buttonRight,random(0.5),random(0.5));
    scale(scalingY);
    noLoop();

    circle(0, 0, 20); 
    pop()

}
}

}
