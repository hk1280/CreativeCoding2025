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

    // let verticalDist = dist(upperLip.x, upperLip.y, bottomLip.x, bottomLip.y);
    // let horizontalDist = dist(leftLip.x, leftLip.y, rightLip.x, rightLip.y);
    // let mouthRatio = verticalDist / horizontalDist;

    // fill("rgba(120, 49, 49, 1)");
    // rect(0, height-30, 220, 30);
    // fill(255);
    // textSize(14);
    // textAlign(LEFT, CENTER);
    // text("mouthRatio: " + mouthRatio.toFixed(3), 10, height-15);


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