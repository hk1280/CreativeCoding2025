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

// breathing in milliseconds
let inhaleDuration = 4000;
let holdDuration = 4000;
let exhaleDuration = 4000;
let totalDuration;

// stores the time in milliseconds when the current breathing cycle started
let pMillis = 0;

// circle radius
let circleRadius = 80;
let circleMin = 80;
let circleMax = 180;

let currentScreen = 'intro';


function preload() {
  // Load the faceMesh model
  faceMesh = ml5.faceMesh(options);
}

function setup() {
  createCanvas(640, 480);

  // total duration of one full breathing cycle in ms
  // 12 seconds (12,000 ms)
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

  if (currentScreen == 'intro') {
    drawIntroScreen();
    return;
  }

  background("rgba(121, 177, 240, 1)");

  // millis() gives the time in ms since the sketch started
  // elapsed is how much time has passed since the current breathing cycle began

  let elapsed = millis()-pMillis;

  if(elapsed>totalDuration){
    pMillis = millis(); // reset timer after interval
    elapsed = 0; // reset elapsed
  }

  let guidePhase; // setting the different phases of inhale, hold, exhale
  let phaseTime; // fraction to tell us how far we are into that phase
  
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
    // from small to big
    targetRadius = lerp(circleMin, circleMax, phaseTime); 
  } else if (guidePhase == 'HOLD') {
    // keep at maximum size
    targetRadius = circleMax;
  } else if (guidePhase == 'EXHALE') {
    // from big to small
    targetRadius = lerp(circleMax, circleMin, phaseTime);
  }

  // smoothly change the circle radius to target radius
  circleRadius = lerp(circleRadius, targetRadius, 0.1);

  // if we have a face detected

  if (faces.length>0){
    let upperLip = faces[0].keypoints[13];
    let bottomLip = faces[0].keypoints[14];
    let leftLip = faces[0].keypoints[61];
    let rightLip = faces[0].keypoints[291];

    fill("rgb(0,0,0)");
    noStroke();
    circle(upperLip.x, upperLip.y, 8);
    circle(bottomLip.x, bottomLip.y, 8);
    circle(leftLip.x, leftLip.y, 8);
    circle(rightLip.x, rightLip.y, 8);

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

    // what the camera detects the user is doing

    let detectedPhase;

    if (mouthRatio < 0.08) {
      detectedPhase = 'INHALE';
    } else if (mouthRatio > 0.08) {
      detectedPhase = 'EXHALE';
    }

    // boolean to see if the user is in sync with the guided breathing

    let inSync = false;

    
    // textSize(32);
    // fill("rgba(255, 255, 255, 1)");

    if (guidePhase == 'INHALE' || guidePhase == 'HOLD') {
      if (detectedPhase == 'INHALE') inSync = true;
  } else if (guidePhase == 'EXHALE') {
    if (detectedPhase == 'EXHALE') inSync = true;
  }

  // if no face is detected then purple
  if (faces.length == 0) {
    // stroke("rgba(0,0,0,1)");
    fill("rgba(214, 162, 246, 1)");

    // if you're in sync then green
  } else if (inSync) {
    // stroke("rgba(0,0,0,0.5)");
    fill("rgba(161, 252, 185, 1)");

  } else {
    // not in sync then red
    // stroke("rgba(0,0,0,0.5)");
    fill("rgba(251, 125, 125, 1)");
  }

  // breathing circle
  noStroke();
  circle(width/2, height/2, circleRadius*2);

  // setting the instructions for the guided breathing
  textSize(28);
  textAlign(CENTER, TOP);
  fill("rgba(255, 255, 255, 1)");


  let instructionText = '';
  if (guidePhase == 'INHALE') {
    instructionText = "Breathe in slowly";
  } else if (guidePhase == 'HOLD') {
    instructionText = "Hold your breath";
  } else {
    instructionText = "Breathe out slowly"
  }

  text(instructionText, width/2, 20);


  textAlign(LEFT, TOP);
  textSize(16);
  text("Guide phase: " + guidePhase, 10, 10);

  if (faces.length > 0) {
    text("Detected phase: " + detectedPhase, 10, 30);
    text("mouthRatio: " + mouthRatio.toFixed(3), 10, 50);
  } else {
    text("No face detected", 10, 70);

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

// intro screen

// drawing the intro screen
function drawIntroScreen() {
  background("rgba(56, 45, 174, 1)");

  // title
  textAlign(CENTER, TOP);
  fill(255);
  textSize(32);
  text("Guided Breathing", width/2, 40);

  // instructions
  textSize(16);
  let instructions = 'This project uses your webcam and face tracking\n to detect how you breathe and guide you through\na simple box breathing exercise.\nSit comfortably and look at the screen\nMake sure your face is visible to the camera\nFollow the circle and the text instructions.'

  text(instructions, width/2, 110);

  // button to enter

  let buttonWidth = 200;
  let buttonHeight = 50;
  let buttonX = width/2 - buttonWidth/2;
  let buttonY = height - 140;

  fill("rgb(0,0,0)");
  noStroke();
  rect(buttonX, buttonY, buttonWidth, buttonHeight, 10);

  fill(0);
  textSize(20);
  text('Start Breathing', width/2, buttonY+buttonHeight/2-5);


}

// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
}

function mousePressed() {

  if (currentScreen == 'intro') {
    let buttonWidth = 200;
    let buttonHeight = 50;
    let buttonX = width/2 - buttonWidth/2;
    let buttonY = height - 140;

    if (mouseX > buttonX && mouseX < buttonX + buttonWidth && 
      mouseY > buttonY && mouseY < buttonY + buttonHeight) {
        currentScreen = 'breathe';
        pMillis = millis();
      }
  } else if (currentScreen == 'breathe') {
  if (faces.length>0) {
  let mouth = faces[0].lips.keypoints;
  console.log(mouth);
  }
}
}