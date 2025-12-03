/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates face tracking on live video through ml5.faceMesh.
 */

let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };

let circleRadius = 80;
let noisePosition = 0;

function preload() {
  // Load the faceMesh model
  faceMesh = ml5.faceMesh(options);
}

function setup() {
  createCanvas(640, 480);
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  // Start detecting faces from the webcam video
  faceMesh.detectStart(video, gotFaces);
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);
  
  if (faces.length>0){
    let upperLip = faces[0].keypoints[13];
    let bottomLip = faces[0].keypoints[14];
    let leftLip = faces[0].keypoints[61];
    let rightLip = faces[0].keypoints[291];

    fill("rgb(0,0,0)");
    noStroke();
    circle(upperLip.x, upperLip.y, 10);
    circle(bottomLip.x, bottomLip.y, 10);
    circle(leftLip.x, leftLip.y, 10);
    circle(rightLip.x, rightLip.y, 10);


    // distance between upperlip and bottomLip
    // when there is small distance b/w the lips (closed),
    // you are inhaling through the nose
    // where there is bigger distance (open),
    // you are exhaling through the mouth
    let verticalDist = dist(upperLip.x, upperLip.y, bottomLip.x, bottomLip.y);
    
    // distance between the corners of the lips
    // when there is big distance b/w the corners
    // you are inhaling through the nose
    // when there is small distance b/w the corners of your lips
    // you are exhaling through the mouth
    let horizontalDist = dist(leftLip.x, leftLip.y, rightLip.x, rightLip.y);
    
    // ratio is consistent no matter how far you away you are
    // from the camera
    let mouthRatio = verticalDist / horizontalDist;

    // text box in corner stating mouth ratio
    fill("rgba(146, 170, 221, 1)");
    rect(0, height-30, 220, 30);
    fill("rgba(255, 255, 255, 1)");
    textSize(14);
    textAlign(LEFT, CENTER);

    // toFixed is a javascript method that is part of the
    // Number.prototype object
    // gives you 3 decimal points below
    text("mouthRatio: " + mouthRatio.toFixed(3), 10, height-15);

    let phase;
    if (mouthRatio < 0.08) {
      phase = 'INHALE';
    } else if (mouthRatio > 0.08) {
      phase = 'EXHALE';
    }

    textSize(32);
    fill("rgba(255, 255, 255, 1)");

    if (phase == 'INHALE') {
      text("You are inhaling", 10, 50);
    } else if (phase == 'EXHALE') {
      text("You are exhaling", 10, 50);
    }
     drawCircle(phase);
  }
 

  // // Draw all the tracked face points with the number
  // for (let i = 0; i < faces.length; i++) {
  //   let face = faces[i];
  //   for (let j = 0; j < face.keypoints.length; j++) {
  //     let keypoint = face.keypoints[j];
  //     fill(0, 255, 0);
  //     noStroke();
  //     text(j,keypoint.x, keypoint.y);
  //   }
  // }
}

function drawCircle(phase) {

  // setting the size of the circle based on phase
  let targetRadius;
  if (phase == 'INHALE') {
    targetRadius = 60;
  } else if (phase == 'EXHALE') {
    targetRadius = 120;
  }

  // smooth transition b/w sizes
  // lerp(start,stop,amt)
  circleRadius = lerp(circleRadius, targetRadius, 0.05);

  // setting the speed based on phase
  let noiseSpeed;
  if (phase == 'INHALE') {
    noiseSpeed = 0.002;
  } else if (phase == 'EXHALE'){
    noiseSpeed = 0.006;
  }
  
  noisePosition = noisePosition + noiseSpeed;

  beginShape();

  // drawing the circle
  // each loop iteration places one point on the circle
  // smaller the incrementation, the smoother it is

  for (let i=0; i<TWO_PI; i+=0.1) {

    // noise(x, y, z)
    // returns a value b/w 0 and 1
    let wiggle = noise(cos(i), sin(i), noisePosition) * 20;
    let radiusWiggle = circleRadius + wiggle;

    let x = width/2 + cos(i) * radiusWiggle;
    let y = height/2 + sin(i) * radiusWiggle;

    vertex(x,y);

  }
  endShape(CLOSE);

}


// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
}

function mousePressed(){
  if (faces.length>0) {
  let mouth = faces[0].lips.keypoints;
  console.log(mouth);
  }
}