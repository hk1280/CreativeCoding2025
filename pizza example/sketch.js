
// let x = 200;
// let y = 200;
// let diameter = 200;

// let ingredientPositions = [];
// // empty array for the ingredient positions
// // stable positions 
// // can fill the array in the push in the setup

// let numberOfIngredients = 20;

let myPizza;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myPizza = new Pizza(width/2,height/2,250,15);

}

function draw() {

  background(100);
  myPizza.display();
  
}

class Pizza {
  // similar to the declaration of variables
  // in the beginning of our code
  // translated into a class using the constructor
  constructor(x,y,diameter,numberOfIngredients){
  this.x=x;
  this.y=y;
  this.diameter=diameter;
  this.numberOfIngredients= numberOfIngredients;
  this.ingredientPositions = [];

   for(let i=0; i<this.numberOfIngredients; i++) {
    let spacing = 360/this.numberOfIngredients;
    // random polar coordinate system
    // deals with degrees
    let pepX = cos(radians(i*spacing))*((this.diameter/2)-30);
    // slice size * random radius = distributing the pepperoni slices around
    let pepY = sin(radians(i*spacing))*((this.diameter/2)-30);
    
    let newVector = createVector(pepX,pepY);
    // vector is a type of object that is built in to p5
    // holds onto 2 different paramenters

    // pushing the vectors into the array

    this.ingredientPositions.push(newVector);
  }

}

display(){

  // want to isolate the translation to the given object
  push();
  // equivalent to draw()
  translate(this.x,this.y);
  circle(0,0,this.diameter+40); // crust
  circle(0,0,this.diameter); // cheese

  for (let i=0; i<this.numberOfIngredients; i++){
    circle(this.ingredientPositions[i].x,this.ingredientPositions[i].y,20);

  }
  pop();

}}
