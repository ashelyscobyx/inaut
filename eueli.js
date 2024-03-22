// Sure! Here's how you can use setInterval to increment the epoch time every second:
function incrementEpoch() {
  const currentEpoch = Math.floor(Date.now() / 1000); // Get the current epoch time in seconds
  console.log(`Current epoch time: ${currentEpoch}`);
}

// Call the function every second
setInterval(incrementEpoch, 1000);
