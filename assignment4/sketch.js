// sushi

// nigiri

// maki 

function setup() {
createCanvas(windowWidth,windowHeight);
background("rgba(74, 177, 255, 1)");

}

function draw() {

  translate(width/2, height/2);
  rectMode(CENTER);

  // rice for salmon nigiri
  noStroke();
  fill("rgba(255, 255, 255, 1)");
  rect(0,30,115,30,10);
  
  // salmon for nigiri
  fill("rgb(255, 172, 28)");
  rect(0,10,140,55,30);
  fill("rgba(255, 227, 227, 1)");
  rect(-40,10,8,55);
  rect(-20,10,8,55);
  rect(0,10,8,55);
  rect(20,10,8,55);
  rect(40,10,8,55);

    // rice for tuna nigiri
  noStroke();
  fill("rgba(255, 255, 255, 1)");
  rect(0,200,115,30,10);
  
  // tuna for nigiri
  fill("rgb(207, 52, 67)");
  rect(0,180,140,55,30);
  fill("rgba(251, 189, 189, 1)");
  rect(-40,180,8,55);
  rect(-20,180,8,55);
  rect(0,180,8,55);
  rect(20,180,8,55);
  rect(40,180,8,55);


 

}