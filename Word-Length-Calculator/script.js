document.getElementById('calculate').addEventListener('click', () => {
  var len = document.getElementById('phrase').value.length;

  document.getElementById('result').innerText = len;
})