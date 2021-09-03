document.getElementById('calculate').addEventListener('click', () => {
  var amount = parseFloat(document.getElementById('amt').value);
  var percent = parseFloat(document.getElementById('percent').value);

  var tip = amount * percent / 100;
  var total = amount + tip;

  document.getElementById('tip').value = tip.toFixed(2);
  document.getElementById('total').value = total.toFixed(2);
})
