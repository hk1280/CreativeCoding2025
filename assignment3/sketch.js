// top part of jar
let buttonWidth = 200;
let buttonHeight = 40;
let radius = 10;

// waves

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background("rgba(77, 75, 117, 1)");
  strokeWeight(4);



let buttonLeft = width/2-buttonWidth/2; // x coord of top left
let buttonTop = height/3; // y coordinate of top right
let buttonRight = buttonLeft+buttonWidth; // x coord of bottom right
let buttonBottom = buttonTop + buttonHeight; // y coord of bottom right


// body of the jar

stroke("rgb(0,0,0)")
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

// liquid in the jar

fill("rgba(247, 160, 84, 1)");
beginShape();
noStroke();
curveVertex(buttonLeft, buttonBottom+100);
curveVertex(buttonLeft-50, buttonBottom+100);
curveVertex(buttonLeft-30, windowHeight-80);
curveVertex(buttonRight+30, windowHeight-80);
curveVertex(buttonRight+50, buttonBottom+100);
curveVertex(buttonRight, buttonBottom+22);
endShape();

// top of the jar

fill("white");
stroke("rgb(0,0,0)");
rect(buttonLeft, buttonTop, buttonWidth, buttonHeight,20) // 20 gives the rounded the edges

// sun / moon

fill("rgba(255, 250, 92, 1)");
noStroke();
circle(windowWidth-150,100,100);



// bubbles in the liquid

for (let x=buttonLeft; x<buttonRight; x+=40) { 
for (let y=buttonBottom+80; y<windowHeight-80; y+=40){
 
    push();
    translate(x,y);
    noFill();
    strokeWeight(2);
    stroke("rgba(244, 218, 69, 1)");

    let scalingX = map(x,buttonLeft,buttonRight,1,1.3);
    scale(scalingX);
    // let scalingY = map(y,buttonBottom+80,windowHeight-80,1,1.3);
    // scale(scalingY);

    circle(buttonLeft, 80, 10); 
    pop()

}
}

}
