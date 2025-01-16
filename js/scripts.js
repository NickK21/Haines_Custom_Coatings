// Array of background images
const backgrounds = [
  '../images/EXT_House2_Background.jpeg',
  '../images/INT_Background.jpeg',
  '../images/INT_Background2.jpeg',
  '../images/INT_Background3.jpeg'
];

let currentIndex = 0;

// Function to change the background
function changeBackground() {
  document.body.style.backgroundImage = `url('${backgrounds[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % backgrounds.length;
}

// Initial background setup
changeBackground();

// Change background every 5 seconds
setInterval(changeBackground, 3000);