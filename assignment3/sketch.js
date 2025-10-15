
let buttonWidth = 200;
let buttonHeight = 20;

let bubblePosition = 570;
let bubbleSpeed = 0;
let bubbleSize = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(30); // sets a consistent frame rate
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
// needs better shaping

beginShape();
curveVertex(buttonLeft,buttonTop);
curveVertex(buttonLeft,buttonTop);
curveVertex(buttonLeft+25,buttonTop-30);
curveVertex(buttonLeft+40,buttonTop-26);
curveVertex(buttonLeft+60,buttonTop-20);
curveVertex(buttonLeft+70,buttonTop-30);
curveVertex(buttonLeft+130,buttonTop-20);
curveVertex(buttonLeft+140,buttonTop-30);
curveVertex(buttonRight-10, buttonTop-30);
curveVertex(buttonRight, buttonTop);
curveVertex(buttonRight, buttonTop);
endShape();


// liquid in the jar

// remapping the minute to the range of dark orange
// to light tan color
// kombucha gets lighter as it ferments
// dark orange is (160,90,40)
// light tan is (210,170,210)

let liquidR = map(minute(), 0, 59, 160, 210)
let liquidG = map(minute(), 0, 59, 90, 170);
let liquidB = map(minute(), 0, 59, 40, 210)
fill(liquidR, liquidG, liquidB);

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

// mapping the speed of the bubbles to the second function
let bubbleSpeed = map(second(),0,59,0.3,0.7);
bubblePosition = bubblePosition - bubbleSpeed; // minus to make it go the opposite direction - up!

if(bubblePosition < height-80 && bubblePosition > buttonBottom+110) {
strokeWeight(2);
stroke("rgba(244, 218, 69, 1)");
circle(buttonLeft-20, bubblePosition, 20);
circle(buttonLeft+10, bubblePosition, 20);
circle(buttonLeft+40, bubblePosition, 20);
circle(buttonLeft+70, bubblePosition, 20);
circle(buttonLeft+100, bubblePosition, 20);
circle(buttonLeft+130, bubblePosition, 20);
circle(buttonLeft+160, bubblePosition, 20);
circle(buttonLeft+190, bubblePosition, 20);
circle(buttonLeft+220, bubblePosition, 20);
} else if (bubblePosition < buttonBottom+110) {
  bubblePosition = height-80;
}


// for (let x=buttonLeft-20; x<buttonRight+40; x+=30) { 
// for (let y=buttonBottom+110; y<windowHeight-80; y+=70){
 
//     push();
//     translate(x,y);
//     noFill();
//     strokeWeight(3);
//     stroke("rgba(244, 218, 69, 1)");

// //     // changing the sizes of the bubbles randomly across the x
// //     // noLoop so that it's not constantly running and freaking out

//     let scalingX = map(x,buttonLeft,buttonRight,random(),random(1.2));
//     scale(scalingX);

// //     // let scalingY = map(y,buttonBottom+80,windowHeight-80, random(0.5), random(1.2));
// //     // scale(scalingY);
// //     // noLoop();

//     circle(0, 0, 20); 
//     pop()

// }
// }

// easier for me to think of as a separate nested loop
// the pellicle area has smaller bubbles in orange

for (let x=buttonLeft-30; x<buttonRight+56; x+=50) { 
for (let y=buttonBottom+80; y<buttonBottom+110; y+=15){
 
    push();
    translate(x,y);
    noFill();
    strokeWeight(2);
    stroke("rgba(242, 153, 45, 1)");
    // changing the sizes of the bubbles randomly across the x
    // noLoop so that it's not constantly running and freaking out

    // let scalingY = map(x,buttonLeft,buttonRight,0.2,0.5);
    // scale(scalingY);
    // noLoop();
    circle(0, 0, 5); 
    pop()

}
}

// bubbles in the sky

// I originally had 3 separate two-dimensional for loops.
// They all had a random aspect to it, so i included the noLoop().
// I realized the noLoop() would stop the time so
// I got rid of it.

for (let x=50; x<width-50; x+=80) { 
  for (let y=40; y<height/3; y+=90){
 
    push();
    translate(x,y);
    noFill();
    strokeWeight(4);
    stroke("rgba(244, 218, 69, 1)");
    let scalingZ = map(x,0,width,0.3,0.5);
    scale(scalingZ);
    circle(0, 0, 20); 
    pop()

}
}

// sun / moon

fill("rgba(255, 250, 92, 1)");
noStroke();
circle(windowWidth-100,75,100);

  textSize(20);
  text(hour() + ":" + minute() + ":" + second(),10, 250)


}
