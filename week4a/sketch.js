

function setup() {
  createCanvas(windowWidth, windowHeight);


  // iteration operators:
  // i++ : adds 1 to i
  // i+=10 : adds 10 to 1
  // i-- : subtracts 1 from i
  // i-=5 : subtracts 5 from i

  for(let i = 0; i<10; i++){
    console.log(i);
  }
  
}

function draw() {
  background("rgba(250, 199, 110, 1)");

  for(let x = 50;x<width-50;x+=100){
  push();
  translate(x,50);
  // everything within this push/pop block
  // will be centered, with 0,0 as the center
  // point

  strokeWeight(3);
  fill("rgba(250, 239, 144, 1)");
  circle(0,0,100);
  circle(-15,-10,10);
  circle(15,-10,10);
  arc(0,0,60,60,radians(30),radians(150));
  pop();
  }

    // circle(x,50,100);
  }

 
