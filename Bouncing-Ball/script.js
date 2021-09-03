var canvas = document.getElementById('cnv');
var ctx = canvas.getContext('2d');

var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 25;
var dx = 3;
var dy = -3;

var paddleHeight = 15;
var paddleWidth = 72;
var paddleX = (canvas.width - paddleWidth) / 2;
var paddleY = canvas.height - 15;
var leftPressed = false;
var rightPressed = false;

var brickData = {
  rows : 5,
  cols : 7,
  width : 80,
  height : 24,
  padding : 10,
  offsetTop : 35,
  offsetLeft : 15,
};
var bricks = [];
for (c = 0; c < brickData.cols; c++) {
  bricks[c] = [];
  for (r = 0; r < brickData.rows; r++) {
    bricks[c][r] = {x : 0, y : 0, status: 1};
  }
}

var score = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    leftPressed = true;
  } else if (e.key === 'ArrowRight') {
    rightPressed = true;
  }
}, false);

document.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowLeft') {
    leftPressed = false;
  } else if (e.key === 'ArrowRight') {
    rightPressed = false;
  }
}, false);

document.addEventListener('mousemove', (e) => {
  var mouseX = e.clientX - canvas.offsetLeft;
  if (mouseX > 0 && mouseX < canvas.width) {
    paddleX = mouseX - paddleWidth / 2;
  }
}, false);


function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
  ctx.fillStyle = 'darkorange';
  ctx.fill();
  ctx.closePath();
}

function drawBricks() {
  for (c = 0; c < brickData.cols; c++) {
    for (r = 0; r < brickData.rows; r++) {
      if (bricks[c][r].status === 1) {
        var brickX = c * (brickData.width + brickData.padding) + brickData.offsetLeft;
        var brickY = r * (brickData.height + brickData.padding) + brickData.offsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickData.width, brickData.height);
        ctx.fillStyle = '#6600cc';
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function collisionDetection() {
  for (c = 0; c < brickData.cols; c++) {
    for ( r = 0; r < brickData.rows; r++) {
      var b = bricks[c][r];
      if(b.status === 1) {
        if (x > b.x && x < b.x + brickData.width && y > b.y && y < b.y + brickData.height) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score === brickData.rows * brickData.cols) {
            setTimeout(() => {
              alert('Congratulations!!!! \n You\'ve won the game');
              document.location.reload();
            }, 500);
            
          }
        }
      }
    }
  }
}

function drawScore() {
  ctx.font = '20px sans-serif';
  ctx.fillStyle = 'red';
  ctx.fillText(`Score: ${score}`, 5, 22);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawBricks();
  drawScore();
  collisionDetection();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx
  }
  if (y + dy < ballRadius) {
    dy = -dy
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      alert('GAME OVER!!!');
      x = canvas.width / 2;
      y = canvas.height - 30;
      paddleX = (canvas.width - paddleWidth) / 2;
      paddleY = canvas.height - 20;
      document.location.reload();
    }
  }
  if (leftPressed && paddleX > 0) {
    paddleX -= 5;
  }
  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 5;
  }

  x += dx;
  y += dy;
}

setInterval(draw, 10);