// --- Variables ---
// doodleNet will store our AI Model
let doodleNet;
// canvas will store our drawing board
let canvas;

// --- Setup Function ---
// This runs once when the webpage loads
function setup() {
    // Create a 500x500 pixel drawing board
    canvas = createCanvas(500, 500);
    // Put the canvas inside the HTML element with id "canvas-container"
    canvas.parent("canvas-container");
    // Make the background white (255 stands for white)
    background(255);
    // Load the "DoodleNet" AI model to recognize our drawings
    doodleNet = ml5.imageClassifier("DoodleNet", modelLoaded);
}

// This function tells us when the AI is ready
function modelLoaded() {
    console.log("DoodleNet Model Loaded!");
}

// --- Draw Function ---
// This loops continuously, drawing things on the screen
function draw() {
    // Set the drawing color to whatever the user picked
    stroke(document.getElementById("colorSelector").value);
    // Set the drawing thickness (brush size) to whatever the user picked
    strokeWeight(document.getElementById("strokeSelector").value);
    
    // Check if the user is holding down their mouse button
    if (mouseIsPressed) {
        // Draw a line connecting the previous mouse position to the current mouse position
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

// --- Button Functions ---
// This function clears all drawings when the "Clear" button is clicked
function clearCanvas() {
    // Paint over everything with a solid white background
    background(255);
    // Reset the result text to default
    document.getElementById("result").innerText = "Prediction: ...";
}

// This function asks the AI to start predicting when the "Predict" button is clicked
function predictDoodle() {
    // Tell the AI model to look at the 'canvas' drawing board and give its best guess
    doodleNet.classify(canvas, gotResult);
}

// --- Result Function ---
// This function receives the final answer from the AI model
function gotResult(results) {
    // 'results' is a list of its top guesses, where the most confident guess is at the top (results[0])
    console.log(results); // Display all guesses in developer tools
    
    // Get the name/label of the best guess
    let prediction = results[0].label;
    // Calculate the 'confidence' percentage (convert from a decimal like 0.85 to 85.00%)
    let confidence = (results[0].confidence * 100).toFixed(2);
    
    // Show the prediction text and confidence to the user on the webpage
    document.getElementById("result").innerText = "Prediction: " + prediction + " (" + confidence + "%)";
}
