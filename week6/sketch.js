// let harry; // this is a variable to store my object
// let samantha; // this will store another object

let drunks = []; // square brackets indicate I'm making an array
let drunkAmount = 50;

// an array is a variable that contains multiple variables
// each individual variable can be accessed using an 
// index number that is fed into the square brackets
// like so: drunk[5] would give me the 6th drunk in the list

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100,180,130);
  x=width/2;
  y=height/2;
  colorMode(HSB);

  for (let i=0;i<drunkAmount;i++){
    let drunkD = random(10,50); // diameters from 10 to 100
    let drunkSpeed = random(1,7); // speeds from 1 to 7
    let drunkHue = random(0,60); // hues from 0 to 60
    drunks[i] = new Drunk(width/2,height/2,drunkD,drunkSpeed,drunkHue);
  }

  // harry = new Drunk(width/2,height/2,30,3,180);
  // samantha = new Drunk(width/2,height/2,20,5,20);
}

function draw() {
  for (let i=0; i<drunks.length;i++){
    drunks[i].move();
    drunks[i].drawDrunk();
  }

}

// function draw() {
//   harry.move(); // drunk object move method
//   harry.drawDrunk(); // drunk object draw method
//   samantha.move();
//   samantha.drawDrunk();
// }

// function draw() {
// // METHOD 1: MOVE THE DRUNK
//   x = x+random(-speed,speed);
//   y = y+random(-speed,speed);
// // METHOD 2: DRAW THE DRUNK
//   fill(hue,70,100,opacity);
//   circle(x,y,d);

// drawDrunk(9,10,100);
  
// }

// // making your own function
// function drawDrunk(drunkSpeed,drunkHue,drunkDiameter) {
//   x = x+random(-drunkSpeed,drunkSpeed);
//   y = y+random(-drunkSpeed,drunkSpeed);
//   fill(drunkHue, 70,100,opacity);
//   circle(x,y,drunkDiameter);
// }

class Drunk{ // class declares a new type of object
  constructor(x,y,diameter,speed,hue){
    this.x=x;
    this.y=y;
    this.diameter=diameter;
    this.speed=speed;
    this.hue=hue;
    this.opacity=random(0,1); // you can also initialize variables here
  }

  move(){
  // when you're in a class, you can declare functions or 
  // methods like this
  this.x = this.x+random(-this.speed,this.speed);
  this.y = this.y+random(-this.speed,this.speed);
  }

  drawDrunk(){
    fill(this.hue,70,100,this.opacity);
    circle(this.x,this.y,this.diameter);
  }

}