let sushi = [];

function setup() {
createCanvas(windowWidth,windowHeight);
rectMode(CENTER);


}

function draw() {
  background("rgba(74, 177, 255, 1)");

  for (let i=0; i<sushi.length; i++){
    sushi[i].drawSushi();
  }
  }

function keyPressed(){
    let fish;
    if (key == 's'){
      type = 'salmon';
    } else if (key == 't'){
      type = 'tuna';
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
    if (size == "small") {
      this.width = 115;
    } else if (size == "medium") {
      this.width = 150
    } else if (size == "large") {
      this.width = 200
    }
    this.fish = fish;

    }

    drawSushi() {
      push();
      translate(this.sushiX, this.sushiY);
      rectMode(CENTER);
      noStroke();

      // rect(0,30,115,30,10);
      // rect(0,10,140,55,30);

      // rice
      fill("rgba(255, 255, 255, 1)");
      rect(this.sushiX,this.sushiY,this.width,this.width*0.26,10);
      // rect(this.x, this.y-20,this.width*1.22,0.48*this.width,30)

      if (this.fish == "salmon") {
      fill("rgb(255, 172, 28)");
      rect(this.x, this.y-20,this.width*1.22,0.48*this.width,30)
      
      // fill("rgba(255, 227, 227, 1)");
      // rect(-40,10,8,55);
      // rect(-20,10,8,55);
      // rect(0,10,8,55);
      // rect(20,10,8,55);
      // rect(40,10,8,55);
      }

      else if (this.fish == "tuna") {  
      fill("rgb(207, 52, 67)");
      rect(this.x, this.y-20,this.width*1.22,0.48*this.width,30)

      // fill("rgba(251, 189, 189, 1)");
      // rect(-40,180,8,55);
      // rect(-20,180,8,55);
      // rect(0,180,8,55);
      // rect(20,180,8,55);
      // rect(40,180,8,55);

}
pop();


      }
    }


