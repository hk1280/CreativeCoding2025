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
    }

    if (key == 's' || key == 't'){
      let sizes = ["small", "medium", "large"];
      let randomSize = random(sizes);

    let mySushi = new Sushi(randomSize, fish);
    sushi.push(mySushi);

    }
  }


class Sushi {
  constructor(size, fish) {
    this.sushiX = random(width);
    this.sushiY = random(height);
    this.fishHeight = 0.34;
    this.fishWidth = 1.2;
    this.offset = 0.13; 
    // affects the y pos b/c multiply to the x pos
    // to see where the fish sits on the rice

    // pick width by size
    if (size == "small") {
      this.width = 110; // width of rice
      this.rice = 0.24; // multiply to the width to give height of rice
    } else if (size == "medium") {
      this.width = 140;
      this.rice = 0.26;
    } else if (size == "large") {
      this.width = 180; 
      this.rice = 0.28;
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

      if (this.fish == "salmon") {
      fill("rgb(255, 172, 28)");
      } else if (this.fish == "tuna") {  
      fill("rgb(207, 52, 67)");

}

rect (0, -this.width*this.offset, this.width*this.fishWidth, this.width*this.fishHeight, 30);
pop();


      }
    }


