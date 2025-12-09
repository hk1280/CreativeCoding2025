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

let inhaleDuration = 4000;
let holdDuration = 4000;
let exhaleDuration = 4000;
let totalDuration;

let pMillis = 0;

let circleRadius = 80;
let circleMin = 80;
let circleMax = 180;


function preload() {
  // Load the faceMesh model
  faceMesh = ml5.faceMesh(options);
}

function setup() {
  createCanvas(640, 480);

  totalDuration = inhaleDuration + holdDuration + exhaleDuration;

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

  let elapsed = millis()-pMillis;

  if(elapsed>totalDuration){
    pMillis = millis(); //reset timer after interval
    elapsed = 0; // reset elapsed
  }

  let guidePhase;
  let phaseTime;

  if (elapsed < inhaleDuration) {
    guidePhase = 'INHALE';
    phaseTime = elapsed / inhaleDuration;
  } else if (elapsed < inhaleDuration + holdDuration) {
    guidePhase = 'HOLD';
    phaseTime = (elapsed - inhaleDuration) / holdDuration;
  } else {
    guidePhase = 'EXHALE';
    phaseTime = (elapsed - inhaleDuration - holdDuration) / exhaleDuration;
  }

  // setting the radius by phase

  let targetRadius;

  if (guidePhase == 'INHALE') {
    targetRadius = lerp(circleMin, circleMax, phaseTime);
  } else if (guidePhase == 'HOLD') {
    targetRadius = circleMax;
  } else if (guidePhase == 'EXHALE') {
    targetRadius = lerp(circleMax, circleMin, phaseTime);
  }

  circleRadius = lerp(circleRadius, targetRadius, 0.1);

  
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
    // fill("rgba(146, 170, 221, 1)");
    // rect(0, height-30, 220, 30);
    // fill("rgba(255, 255, 255, 1)");
    // textSize(14);
    // textAlign(LEFT, CENTER);

    // toFixed is a javascript method that is part of the
    // Number.prototype object
    // gives you 3 decimal points below
    // text("mouthRatio: " + mouthRatio.toFixed(3), 10, height-15);

    let detectedPhase;

    if (mouthRatio < 0.08) {
      detectedPhase = 'INHALE';
    } else if (mouthRatio > 0.08) {
      detectedPhase = 'EXHALE';
    }

    let inSync = false;

    

    textSize(32);
    fill("rgba(255, 255, 255, 1)");

    if (guidePhase == 'INHALE' || guidePhase == 'HOLD') {
      if (detectedPhase == 'INHALE') inSync = true;
  } else if (guidePhase == 'EXHALE') {
    if (detectedPhase == 'EXHALE') inSync = true;
  }

  if (faces.length == 0) {
    stroke("rgb(0,0,0)");
    fill("rgba(214, 162, 246, 1)");
  } else if (inSync) {
    stroke("rgb(0,0,0)");
    fill("rgba(161, 252, 185, 1)");
  } else {
    stroke("rgb(0,0,0)");
    fill("rgba(157, 201, 255, 1)");
  }
 
  strokeWeight(3);
  circle(width/2, height/2, circleRadius*2);

  textSize(28);
  let instructionText = '';
  if (guidePhase == 'INHALE') {
    instructionText = "Breathe in slowly";
  } else if (guidePhase == 'HOLD') {
    instructionText = "Hold your breath";
  } else {
    instructionText = "Breathe out slowly"
  }

  text(instructionText, width/2, height/2);

  textAlign(LEFT, TOP);
  textSize(16);
  text("Guide phase: " + guidePhase, 10, 10);

  if (faces.length >0) {
    text("Detected phase: " + detectedPhase, 10, height-40);
    text("mouthRatio: " + mouthRatio.toFixed(3), 10, height-20);
  } else {
    text("No face detected",10,height-30);

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
}

// function drawCircle(phase) {

//   // setting the size of the circle based on phase
//   let targetRadius;
//   if (phase == 'INHALE') {
//     targetRadius = 60;
//   } else if (phase == 'EXHALE') {
//     targetRadius = 120;
//   }

//   // smooth transition b/w sizes
//   // lerp(start,stop,amt)
//   circleRadius = lerp(circleRadius, targetRadius, 0.05);

//   // setting the speed based on phase
//   let noiseSpeed;
//   if (phase == 'INHALE') {
//     noiseSpeed = 0.002;
//   } else if (phase == 'EXHALE'){
//     noiseSpeed = 0.006;
//   }
  
//   noisePosition = noisePosition + noiseSpeed;

//   beginShape();

//   // drawing the circle
//   // each loop iteration places one point on the circle
//   // smaller the incrementation, the smoother it is

//   for (let i=0; i<TWO_PI; i+=0.1) {

//     // noise(x, y, z)
//     // returns a value b/w 0 and 1
//     let wiggle = noise(cos(i), sin(i), noisePosition) * 20;
//     let radiusWiggle = circleRadius + wiggle;

//     let x = width/2 + cos(i) * radiusWiggle;
//     let y = height/2 + sin(i) * radiusWiggle;

//     vertex(x,y);

//   }
//   endShape(CLOSE);

// }


// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
}

function mousePressed() {
  if (faces.length>0) {
  let mouth = faces[0].lips.keypoints;
  console.log(mouth);
  }
}