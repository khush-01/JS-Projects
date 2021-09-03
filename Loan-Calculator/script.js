function computeLoan() {
  var amount = document.getElementById('amount').value;
  var rate = document.getElementById('rate').value;
  var months = document.getElementById('months').value;
  
  var interest = amount * rate * 0.01 / months;
  var payment = (amount / months + interest).toFixed(2);

  payment = payment.toLocaleString('en-US');
  document.getElementById('payment').innerText = `Monthly Payment = ${payment}`;
}