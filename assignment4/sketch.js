// empty array to hold all sushi objects
let sushi = [];

function setup() {
createCanvas(windowWidth,windowHeight);
rectMode(CENTER);

}

function draw() {
  background("rgba(74, 177, 255, 1)");

  // go through every element in my sushi array
  // run the drawSushi function on each object

  for (let i=0; i<sushi.length; i++){
    sushi[i].drawSushi();
  }
  }

function keyPressed(){
    let fish;
    if (key == 's'){
      fish = 'salmon';
    } else if (key == 't'){
      fish = 'tuna';
    } else if (key == 'e'){
      fish = 'egg';
    }

    // press these keys that are connected to each fish
    // it will generate different sized sushis

    if (key == 's' || key == 't' || key == 'e'){
      let sizes = ["small", "medium", "large"];
      let randomSize = random(sizes);

    let mySushi = new Sushi(randomSize, fish);
    sushi.push(mySushi);
    // pushes the newly generated sushi into the
    // the sushi array

    }
  }


class Sushi {
  constructor(size, fish) {
    this.sushiX = random(width);
    this.sushiY = random(height);
    // setting percentages to multiply to width for
    // the diff ratios
    this.fishHeight = 0.34; // fish height percentage
    this.fishWidth = 1.2; // fish width percentage 
    this.rice = 0.24; // multiply to width to get height of rice
    this.offset = 0.13; 
    // affects the y pos b/c multiply to the x pos
    // to see where the fish sits on the rice

    // pick width by size
    if (size == "small") {
      this.width = 110; // width of rice
    } else if (size == "medium") {
      this.width = 140;
    } else if (size == "large") {
      this.width = 180;
    }
    this.fish = fish;

    }

    drawSushi() {
      push();
      translate(this.sushiX, this.sushiY);
      noStroke();

      // rice
      fill("rgba(255, 255, 255, 1)");
      rect(0,0,this.width,this.width*this.rice,10);

      //fish/egg
      if (this.fish == "salmon") {
      fill("rgb(255, 172, 28)");
      } else if (this.fish == "tuna") {  
      fill("rgb(207, 52, 67)");
      } else if (this.fish == "egg") {
      fill("rgba(255, 255, 120, 1)");
      }
    
      rect (0, -this.width*this.offset, this.width*this.fishWidth, this.width*this.fishHeight, 30);
     
      // nori for the tamago
      if (this.fish == "egg") {
        fill("rgb(0,0,0)");
        rect(0,-this.width*this.offset, this.width*this.fishWidth*0.25, this.width*this.fishHeight);
      }

 pop();

      }
    }


