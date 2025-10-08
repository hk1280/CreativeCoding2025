let buttonWidth = 200;
let buttonHeight = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background("rgba(234, 217, 120, 1)");
  strokeWeight(4);



let buttonLeft = width/2-buttonWidth/2; // x coord of top left
let buttonTop = height/3; // y coordinate of top right
let buttonRight = buttonLeft+buttonWidth; // x coord of bottom right
let buttonBottom = buttonTop + buttonHeight; // y coord of bottom right


rect(buttonLeft, buttonTop, buttonWidth, buttonHeight,20)

beginShape();
curveVertex(buttonLeft, buttonBottom);
curveVertex(buttonLeft+10, buttonBottom);
curveVertex(buttonLeft+5, buttonBottom+22);
curveVertex(buttonLeft-50, buttonBottom+80);
curveVertex(buttonLeft-30, windowHeight-80);
curveVertex(buttonRight+30, windowHeight-80);
curveVertex(buttonRight+50, buttonBottom+80);
curveVertex(buttonRight+5, buttonBottom+22);
curveVertex(buttonRight-10, buttonBottom);
curveVertex(buttonRight, buttonBottom);
endShape();


}
