// JavaScript for Interactivity

// Array of colors for background changing
const colors = [
  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
];

// Array of texts for dynamic content
const texts = [
  "🎨 JavaScript made this text change!",
  "🚀 Dynamic content is amazing!",
  "✨ Web development is fun!",
  "🌟 You're learning so much!",
  "🎯 Keep practicing and coding!",
  "💡 The possibilities are endless!",
];

let currentColorIndex = 0;
let currentTextIndex = 0;

// Function to show alert message
function showAlert() {
  alert(
    "🎉 Congratulations! You've successfully triggered a JavaScript alert! This demonstrates how JavaScript can respond to user interactions and create dynamic experiences on web pages."
  );
}

// Function to change background color
function changeBackgroundColor() {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
  const interactiveSection = document.getElementById("interactiveSection");
  interactiveSection.style.background = colors[currentColorIndex];

  // Add a subtle animation effect
  interactiveSection.style.transition = "background 0.5s ease-in-out";
}

// Function to change dynamic text
function changeText() {
  const textElement = document.getElementById("dynamicText");
  currentTextIndex = (currentTextIndex + 1) % texts.length;

  // Add fade effect

  textElement.style.opacity = "0";

  setTimeout(() => {
    textElement.textContent = texts[currentTextIndex];
    textElement.style.opacity = "1";
  }, 250);
}

// Add welcome message when page loads
window.addEventListener("load", function () {
  setTimeout(() => {
    this.alert(
      "🎉 Welcome! Open your browser's developer tools (F12) to see this message and explore the code!"
    );
    console.log(
      "🎉 Welcome! Open your browser's developer tools to see this message and explore the code!"
    );

  }, 1000);
});
