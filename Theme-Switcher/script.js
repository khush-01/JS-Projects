document.getElementById('grayBtn').onclick = graySwitch;
document.getElementById('whiteBtn').onclick = whiteSwitch;
document.getElementById('blueBtn').onclick = blueSwitch;
document.getElementById('yellowBtn').onclick = yellowSwitch;

function graySwitch() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'gray';
  document.getElementsByTagName('body')[0].style.color = 'white';
}

function whiteSwitch() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
  document.getElementsByTagName('body')[0].style.color = 'black';
}
function blueSwitch() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'blue';
  document.getElementsByTagName('body')[0].style.color = 'white';
}
function yellowSwitch() {
  document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow';
  document.getElementsByTagName('body')[0].style.color = 'black';
}
