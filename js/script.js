const canvas = $(".canvas").get(0); // Get the DOM element from jQuery object
const ctx = canvas.getContext("2d"); // Now this works
console.log(ctx); // Logs the canvas context




const centerX = 250; // X-coordinate of the center
const centerY = 450; // Y-coordinate of the center
const radius = 20;   // Radius of the circle



//For the upper ball
for (let row = 0; row < 4; row++) { // Loop for rows (4 rows)
    const ballsInRow = 11 - row * 2; // Number of balls in the current row
    const startX = 50 + row * radius; // Offset to center the row like a pyramid
  
    for (let col = 0; col < ballsInRow; col++) { // Loop for columns
      const x = startX + col * (2 * radius); // Calculate the x-coordinate for each ball
      const y = 50 + row * (2 * radius); // Calculate the y-coordinate for each row
  
      // Draw the circle
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2); // Draw a full circle
      ctx.fillStyle = "yellow"; // Set the fill color
      ctx.fill(); // Fill the circle
      ctx.strokeStyle = "black"; // Set the border color
      ctx.stroke(); // Draw the border
    }
  }

// Draw the circle
ctx.beginPath();
ctx.arc(centerX, centerY, radius, 0, Math.PI * 2); // Draw a full circle
ctx.fillStyle = "blue"; // Set the fill color
ctx.fill();             // Fill the circle
ctx.strokeStyle = "black"; // Set the border color
ctx.stroke();



ctx.fillStyle = "green"; // Fixed case
ctx.fillRect(centerX-radius*2,centerY+radius, 80,40);

