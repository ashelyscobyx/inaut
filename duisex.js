// Function to generate a random number between min and max
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to create a shooting star element
function createShootingStar() {
  const star = document.createElement('div');
  star.className = 'shooting-star';
  
  // Set initial position randomly across the screen
  const x = getRandomNumber(0, window.innerWidth);
  const y = getRandomNumber(0, window.innerHeight);
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;
  
  document.body.appendChild(star);
  
  // Animate the shooting star
  setTimeout(() => {
    star.remove(); // Remove the star after some time
  }, 3000); // Adjust the time as per your needs
}

// Generate 13 shooting stars
for (let i = 0; i < 13; i++) {
  createShootingStar();
}
