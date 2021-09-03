document.getElementById('submit').addEventListener('click', () =>{
  var height = parseFloat(document.getElementById('height').value) / 100;
  var weight = parseFloat(document.getElementById('weight').value);

  var bmi = weight / (height * height);
  
  document.getElementById('result').innerText = `BMI = ${bmi.toFixed(1)}`;
})