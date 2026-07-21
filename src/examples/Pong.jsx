import { useEffect, useRef } from "react"

export default function Pong() {
  const canvasRef = useRef(null)

  let canvas = null
  let context = null
  let ball = null
  let paddle = null
  let paddle2 = null

  useEffect(() => {
    canvas = canvasRef.current
    context = canvas.getContext("2d")
    // create a ball object with the initial position in the middle of the canvas
    ball = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      radius: 10,
      speed: 5,
      dx: 0,
      dy: 0,
    }

    // create a paddle object on the right side of the canvas
    paddle = {
      x: canvas.width - 20, // position the paddle on the right side of the canvas
      y: canvas.height / 2 - 50, // position the paddle in the middle vertically
      width: 10,
      height: 100,
      color: "white",
      score: 0,
    }

    // create a second paddle object on the left side of the canvas
    paddle2 = {
      x: 10, // position the paddle on the left side of the canvas
      y: canvas.height / 2 - 50, // position the paddle in the middle vertically
      width: 10,
      height: 100,
      color: "white",
      score: 0,
    }

    requestAnimationFrame(gameLoop)
  }, [])

  // Global list for keypressevents
  const keyPressEvents = []

  document.addEventListener("keydown", function (event) {
    // Only add keypressevents if they are not already in the list
    if (!keyPressEvents.includes(event.key)) {
      keyPressEvents.push(event.key)
    }
  })

  document.addEventListener("keyup", function (event) {
    // Only remove keypressevents if they are in the list
    if (keyPressEvents.includes(event.key)) {
      keyPressEvents.splice(keyPressEvents.indexOf(event.key), 1)
    }
  })

  function drawGameObjects() {
    if (!context) return
    // Draw the ball
    context.beginPath()
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false)
    context.fillStyle = "white"
    context.fill()
    context.closePath()

    // Draw the paddle
    context.beginPath()
    context.rect(paddle.x, paddle.y, paddle.width, paddle.height)
    context.fillStyle = paddle.color
    context.fill()
    context.closePath()

    // Draw the second paddle
    context.beginPath()
    context.rect(paddle2.x, paddle2.y, paddle2.width, paddle2.height)
    context.fillStyle = paddle2.color
    context.fill()
    context.closePath()
  }

  // Update position of game objects
  function updateGameObjects() {
    // Update the position of the ball
    ball.x += ball.dx
    ball.y += ball.dy

    // bounce the ball off the top and bottom walls only
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
      ball.dy = -ball.dy
    }

    // bounce the ball off the paddle
    if (
      ball.x + ball.radius > paddle.x &&
      ball.x - ball.radius < paddle.x + paddle.width &&
      ball.y + ball.radius > paddle.y &&
      ball.y - ball.radius < paddle.y + paddle.height
    ) {
      ball.dx = -ball.dx
      // Increase the speed of the ball
      ball.dx *= 1.1
    }

    // bounce the ball off the second paddle
    if (
      ball.x + ball.radius > paddle2.x &&
      ball.x - ball.radius < paddle2.x + paddle2.width &&
      ball.y + ball.radius > paddle2.y &&
      ball.y - ball.radius < paddle2.y + paddle2.height
    ) {
      ball.dx = -ball.dx
      // Increase the speed of the ball
      ball.dx *= 1.1
    }

    // If the ball goes out on the sides, reset the position to the middle
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
      // Increase the socre of the right player, if the ball goes out on the left
      if (ball.x - ball.radius < 0) {
        paddle2.score++
        // update the score for paddle2
        document.getElementById("paddle2Score").innerHTML = paddle2.score
      } else {
        paddle.score++
        // update the score for paddle
        document.getElementById("paddle1Score").innerHTML = paddle.score
      }

      ball.x = canvas.width / 2
      ball.y = canvas.height / 2
      // Give the ball a random direction
      ball.dx = Math.random() * 10 - 5
      ball.dy = Math.random() * 10 - 5
    }
  }

  function gameLoop() {
    if (context !== null) {
      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height)

      // Handle keypress events
      keyPressEvents.forEach(function (keyPressEvent) {
        // Update the position of the paddle based on the key press event
        if (keyPressEvent === "e") {
          paddle.y -= 10
        } else if (keyPressEvent === "d") {
          paddle.y += 10
        }

        // Update the position of the second paddle based on the key press event
        if (keyPressEvent === "q") {
          paddle2.y -= 10
        } else if (keyPressEvent === "a") {
          paddle2.y += 10
        }

        // Set random direction of the ball when s is pressed
        if (keyPressEvent === "s") {
          ball.dx = Math.random() * 10 - 5
          ball.dy = Math.random() * 10 - 5
        }
      })

      // Update game objects
      updateGameObjects()

      // Now call the drawGameObjects function within the gameLoop
      drawGameObjects()
    }

    // Call the gameLoop function on the next frame
    requestAnimationFrame(gameLoop)
  }

  return (
    <>
      <div
        id="scoreBoard"
        style={{ color: "white", textAlign: "center", fontSize: "24px" }}>
        <span id="paddle2Score">0</span> : <span id="paddle1Score">0</span>
      </div>
      <canvas
        style={{
          boxShadow: "0 0 3px white",
          border: "1px solid white",
          borderRadius: "5px",
        }}
        ref={canvasRef}
        width="800"
        height="400"></canvas>
    </>
  )
}
