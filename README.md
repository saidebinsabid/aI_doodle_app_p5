# AI Doodle Recognition App 🎨✨

**Live Demo:** 🔴 [https://saidebinsabid.github.io/aI_doodle_app_p5/](https://saidebinsabid.github.io/aI_doodle_app_p5/) 🔴

## 📝 Short Description
The **AI Doodle Recognition App** is a fun and interactive drawing tool that uses Artificial Intelligence to guess what you are drawing! You can scratch out anything on the canvas, and the AI will try to predict your doodle. 🤖🖌️

## 📄 Formal Project Description
This project is a web-based artificial intelligence application built to recognize hand-drawn doodles. It integrates interactive front-end web technologies with a pre-trained machine learning model. Users are provided with a digital canvas where they can draw freely, adjust stroke colors, and change brush sizes. Upon clicking the "Predict" button, the application processes the canvas image and uses a neural network to classify the drawing, instantly displaying the top prediction along with its confidence score! 🚀

## 🛠️ Tools & Required CDN Links
This project uses the following libraries and tools:
- 🌐 **HTML5, CSS3, JavaScript**: For the structure, styling, and logic.
- 🖼️ **p5.js**: A JavaScript library for creative coding, used here to create the interactive drawing canvas.
  - 🔗 CDN: `https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js`
- 🧠 **ml5.js**: A friendly machine learning library for the web.
  - 🔗 CDN: `https://unpkg.com/ml5@latest/dist/ml5.min.js`
- 🔤 **Google Fonts (Poppins)**: For beautiful typography.

## 🤖 The AI Model (DoodleNet)
This project uses **DoodleNet**, an image classification model provided by the ml5.js library. DoodleNet is pre-trained on millions of doodles from the "Quick, Draw!" dataset by Google. Because it has "seen" millions of drawings, it can easily recognize common shapes, objects, animals, and items drawn by users! 🐈🚗🍎

## ⚙️ How the Full Project Works (Simple Explanation)
The project is built to be simple and easy to understand. Here is how it works under the hood:

1. 🖌️ **Setting up the Canvas (p5.js):** When you open the webpage, the JavaScript code (`setup` function) creates a 500x500 blank digital canvas. 
2. 📥 **Loading the AI:** While the page loads, it silently downloads the "DoodleNet" AI model into your browser.
3. ✏️ **Drawing on the Screen:** The `draw` function continuously checks if you are clicking and dragging your mouse. If you are, it follows your mouse and draws a line. It also listens to the HTML color and size pickers to change your brush style.
4. 🔍 **Predicting the Doodle:** When you click the "Predict" button, the `predictDoodle` function activates. It takes a quick snapshot of whatever is drawn on the canvas and gives it to the AI.
5. 📊 **Getting the Result:** The AI looks at the snapshot and replies with its best guess (`gotResult` function). It updates the text on the screen to show what it thinks you drew, along with a percentage of how confident it feels!
6. 🧼 **Clearing:** Whenever you click "Clear", the `clearCanvas` function paints over the entire canvas with a white background so you can start fresh.
