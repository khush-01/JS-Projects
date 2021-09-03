var hex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

document.getElementById('switch').addEventListener('click', () => {
  var color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)];
  }
  document.getElementById('box').style.backgroundColor = color;
})
