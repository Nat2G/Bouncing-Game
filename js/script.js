const canvas = $(".canvas").get(0); // Get the DOM element from jQuery object
const ctx = canvas.getContext("2d"); // Now this works

const wid=680
const hei=660





const centerX = 250; // X-coordinate of the center
const centerY = 450; // Y-coordinate of the center
const radius = 20;   // Radius of the circle



// THE UPPER YELLOW BALLS 


for (let j = 0; j < 6; j++) { // Loop for rows
  const ballsInRow = 11 - j; // Decrease the number of balls in each row
  const startX = 140 + j * radius; // Offset to center the row

  for (let i = 0; i < ballsInRow; i++) { // Loop for balls in the current row
    const x = startX + i * (2 * radius); // Calculate the x-coordinate
    const y = 50 + j * (2 * radius); // Calculate the y-coordinate for each row

    // Draw the circle
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2); // Draw a full circle
    ctx.fillStyle = "yellow"; // Set the fill color
    ctx.fill(); // Fill the circle
    ctx.strokeStyle = "black"; // Set the border color
    ctx.stroke(); // Draw the border
  }
}




// THE BLUE BALL TO HIT THE YELLOW BALLS

ctx.beginPath();
ctx.arc(wid/2, hei-70, radius, 0, Math.PI * 2); // Draw a full circle
ctx.fillStyle = "blue"; // Set the fill color
ctx.fill();             // Fill the circle
ctx.strokeStyle = "black"; // Set the border color
ctx.stroke();


//THE FLOATING GREEN RECTANGLE TO BOUNCE THE BLUE BALL

ctx.fillStyle = "green"; // Fixed case
ctx.fillRect(wid/2-radius*2-10, hei-50, 100,30);



// THE MOVMENT OF THE BALL
let d="up"








// const canvas = $(".canvas").get(0); // Get the DOM element from jQuery object
// const ctx = canvas.getContext("2d"); // Get the 2D context

// const wid = 680;
// const hei = 660;
// const radius = 20; // Radius of the ball
// let paddleX = wid / 2 - 50; // Initial x-coordinate of the paddle
// const paddleWidth = 100;
// const paddleHeight = 30;
// let ballX = wid / 2; // Initial x-coordinate of the ball
// let ballY = hei - 100; // Initial y-coordinate of the ball
// let dx = 2; // Horizontal speed of the ball
// let dy = -2; // Vertical speed of the ball
// let yellowBalls = []; // Array to store yellow balls

// // Populate the yellow balls
// for (let j = 0; j < 6; j++) {
//   const ballsInRow = 11 - j;
//   const startX = 140 + j * radius;
//   for (let i = 0; i < ballsInRow; i++) {
//     const x = startX + i * (2 * radius);
//     const y = 50 + j * (2 * radius);
//     yellowBalls.push({ x, y, isHit: false });
//   }
// }

// // Draw the yellow balls
// function drawYellowBalls() {
//   yellowBalls.forEach(ball => {
//     if (!ball.isHit) {
//       ctx.beginPath();
//       ctx.arc(ball.x, ball.y, radius, 0, Math.PI * 2);
//       ctx.fillStyle = "yellow";
//       ctx.fill();
//       ctx.strokeStyle = "black";
//       ctx.stroke();
//     }
//   });
// }

// // Draw the paddle
// function drawPaddle() {
//   ctx.fillStyle = "green";
//   ctx.fillRect(paddleX, hei - 50, paddleWidth, paddleHeight);
// }

// // Draw the blue ball
// function drawBlueBall() {
//   ctx.beginPath();
//   ctx.arc(ballX, ballY, radius, 0, Math.PI * 2);
//   ctx.fillStyle = "blue";
//   ctx.fill();
//   ctx.strokeStyle = "black";
//   ctx.stroke();
// }

// // Move the ball and handle collisions
// function moveBall() {
//   ballX += dx;
//   ballY += dy;

//   // Ball collision with walls
//   if (ballX - radius < 0 || ballX + radius > wid) dx = -dx; // Left or right wall
//   if (ballY - radius < 0) dy = -dy; // Top wall

//   // Ball collision with the paddle
//   if (
//     ballY + radius > hei - 50 &&
//     ballX > paddleX &&
//     ballX < paddleX + paddleWidth
//   ) {
//     dy = -dy;
//   }

//   // Ball collision with yellow balls
//   yellowBalls.forEach(ball => {
//     if (!ball.isHit) {
//       const dist = Math.sqrt(
//         Math.pow(ballX - ball.x, 2) + Math.pow(ballY - ball.y, 2)
//       );
//       if (dist < radius * 2) {
//         ball.isHit = true;
//         dy = -dy;
//       }
//     }
//   });

//   // Game over if the ball falls below the paddle
//   if (ballY - radius > hei) {
//     alert("Game Over!");
//     document.location.reload();
//   }
// }

// // Move the paddle
// function movePaddle(event) {
//   if (event.key === "ArrowLeft" && paddleX > 0) {
//     paddleX -= 20;
//   } else if (event.key === "ArrowRight" && paddleX + paddleWidth < wid) {
//     paddleX += 20;
//   }
// }

// // Draw the game
// function draw() {
//   ctx.clearRect(0, 0, wid, hei); // Clear the canvas
//   drawYellowBalls();
//   drawPaddle();
//   drawBlueBall();
//   moveBall();
//   requestAnimationFrame(draw); // Animate
// }

// // Event listener for paddle movement
// document.addEventListener("keydown", movePaddle);

// // Start the game
// draw();



