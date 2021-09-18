var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var op = document.getElementById('operator');
generateQues();

document.getElementById('check').addEventListener('click', () => {
  var result = document.getElementById('result').value;
  var exp = num1.innerText + op.innerText + num2.innerText;
  var res = eval(exp);
  
  if (Math.abs(result - res) <= 0.01) {
    alert(`Your answer is correct. Hooray!!!`);
  } else {
    alert(`Sorry, the correct answer is ${res}.`);
  }
  generateQues();
})

function generateQues() {
  num1.innerText = Math.floor(Math.random() * 50 + 1);
  num2.innerText = Math.floor(Math.random() * 50 + 1);
  op.innerText = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
  result.value = '';
}