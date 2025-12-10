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
let circleRadius = 80; // current radius of breathing circle
let circleMin = 80;
let circleMax = 180;

// setting the 2 different screens, intro & breathing
// intro is to show instructions with call to action button to enter
// the breathe page - the breathing exercise
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

  // breathing phases of inhale, hold, exhale

  let guidePhase; // setting the different phases of inhale, hold, exhale
  let phaseTime; // fraction to tell us how far we are into that phase
  
  if (elapsed < inhaleDuration) {
    // if elapsed is less than the first 4 seconds then inhale stage
    guidePhase = 'INHALE';
    phaseTime = elapsed / inhaleDuration; // 0 to 1 over the 4 seconds
  } else if (elapsed < inhaleDuration + holdDuration) {
    // if elapsed is between the next 4 seconds then in hold stage
    guidePhase = 'HOLD';
    phaseTime = (elapsed - inhaleDuration) / holdDuration; // 0 to 1 over those 4 seconds
  } else {
    guidePhase = 'EXHALE'; // last 4 seconds
    phaseTime = (elapsed - inhaleDuration - holdDuration) / exhaleDuration; // 0 to 1 over 4 seconds
  }

  // setting the radius of the cirlce by phase

  let targetRadius; // target radius of circle

  if (guidePhase == 'INHALE') {
    // from small to big
    // lerp(start,stop,amt);
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

    // fill("rgb(0,0,0)");
    noFill();
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
    } else {
      detectedPhase = 'EXHALE';
    }

    // boolean to see if the user is in sync with the guided breathing
    // starts as false and will be set to true if detected matches the guide

    let inSync = false;

    
    // textSize(32);
    // fill("rgba(255, 255, 255, 1)");

    // if the guide says to inhale or hold then the mouth should look like it's inhaling (mouth more closed)
    // if the guide says to exhale, then we should look like we're exhaling (mouth more open)
    // if these are all aligned, then in sync is true

    if (guidePhase == 'INHALE' || guidePhase == 'HOLD') {
      if (detectedPhase == 'INHALE') inSync = true;
  } else if (guidePhase == 'EXHALE') {
    if (detectedPhase == 'EXHALE') inSync = true;
  }

  // if no face is detected then purple
  if (faces.length == 0) {
    fill("rgba(214, 162, 246, 1)");

    // if you're in sync then green
  } else if (inSync) {
    fill("rgba(161, 252, 185, 1)");

  } else {
    // not in sync then red
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

  // if a face is detected then the phase it detects you in
  // or if it's not detected

  if (faces.length > 0) {
    text("Detected phase: " + detectedPhase, 10, 30);
    text("mouthRatio: " + mouthRatio.toFixed(3), 10, 50);
  } else {
    text("No face detected", 10, 70);

  }
  
}
}

// drawing the intro screen

function drawIntroScreen() {
  background("rgba(176, 205, 225, 1)");

  // title "The Breathing Room"
  textAlign(CENTER, TOP);
  fill("rgb(70,75,82)");
  textSize(32);
  text("The Breathing Room", width/2, 40);

  // instructions
  textSize(16);
  fill("rgb(100,115,130)")
  let instructions = 'This project uses your webcam and face tracking\n to guide you through a simple box breathing exercise.\nSit comfortably and look at the screen\nMake sure your face is visible to the camera\nFollow the circle and the text instructions.'

  text(instructions, width/2, 110);

  // button to enter
  let buttonWidth = 200;
  let buttonHeight = 50;
  let buttonX = width/2 - buttonWidth/2;
  let buttonY = height - 140;

  fill("rgb(246,226,231)");
  noStroke();
  rect(buttonX, buttonY, buttonWidth, buttonHeight, 10);

  fill("rgba(70, 93, 115, 1)");
  textSize(20);
  text('Start Your Calm', width/2, buttonY+buttonHeight/2-8);
}

// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
}

function mousePressed() {

  if (currentScreen == 'intro') {

    // same as the button measurements above
    let buttonWidth = 200;
    let buttonHeight = 50;
    let buttonX = width/2 - buttonWidth/2;
    let buttonY = height - 140;

    // if the mouse is within the button
    // click it to change the screen to the breathing exercise
    // reset pMillis so the timer starts fresh
  

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