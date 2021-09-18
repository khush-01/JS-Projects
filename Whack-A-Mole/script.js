var scoreBoard = document.querySelector('#score');
var holes = document.querySelectorAll('.hole');
var moles = document.querySelectorAll('.mole');
var lastHole;
var timeUp = false;
var score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  var index = Math.floor(Math.random() * holes.length);
  var hole = holes[index];

  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  var time = randomTime(300, 1000);
  var hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp)
      peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 10000);
  setTimeout(() => alert('Game Over!'), 11000);
}

function wack(e) {
  if (!e.isTrusted) return;
    score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', wack));
