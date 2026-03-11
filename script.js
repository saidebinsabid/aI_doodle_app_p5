let doodleNet;
let canvas;

function setup() {
    canvas = createCanvas(500, 500);
    // Remove canvas.center() and instead attach it to our div
    canvas.parent("canvas-container");
    background(255);
    doodleNet = ml5.imageClassifier("DoodleNet", modelLoaded);
}

function modelLoaded() {
    console.log("DoodleNet Model Loaded!");
}

function draw() {
    stroke(document.getElementById("colorSelector").value);
    strokeWeight(document.getElementById("strokeSelector").value);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function clearCanvas() {
    background(255);
    document.getElementById("result").innerText = "Prediction: ...";
}

function predictDoodle() {
    doodleNet.classify(canvas, gotResult);
}


function gotResult(results) {
    // Display the result and confidence
    console.log(results); // This should already show results in the console
    let prediction = results[0].label;
    let confidence = (results[0].confidence * 100).toFixed(2);
    document.getElementById("result").innerText = "Prediction: " + prediction + " (" + confidence + "%)";

}

