var count = document.getElementById('count');
var guessCount = parseInt(count.innerText);
var guess = document.getElementById('guess');
var previous = document.getElementById('prev');
var result = document.getElementById('result');
var hint = document.getElementById('hint');

var hiddenNumber = Math.ceil(Math.random() * 500);

document.getElementById('check').addEventListener('click', () => {
  if (guess.value === '') {
    alert('Enter a value first!!');
    return false;
  }
  guessCount--;
  count.innerText = guessCount;
  previous.innerText += ` ${guess.value}`;
  if (guessCount >= 0) {
    if (guess.value > hiddenNumber) {
      result.innerText = 'Wrong!';
      hint.innerText = 'The guess was too high. Try lower!';
    } else if (guess.value < hiddenNumber) {
      result.innerText = 'Wrong!';
      hint.innerText = 'The guess was too low. Try higher!';      
    } else {
      result.innerText = 'Correct!';
      hint.innerText = `The hidden number was ${hiddenNumber}`;
      document.getElementById('restart').style.display = 'inline-block';
    }
  }
  if (guessCount === 0){
    guess.disabled = true;
    document.getElementById('restart').style.display = 'inline-block';
  }
  guess.value = '';
})

document.getElementById('restart').addEventListener('click', () => {
  location.reload();
})