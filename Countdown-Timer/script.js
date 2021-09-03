var input = prompt('Enter the date and time for countdown\n Format: MM/DD/YYYY HH:MM:SS', (new Date()).toLocaleDateString('en-US'));
var cdDate = new Date(input).getTime();

var timer = setInterval(() => {
  var now = new Date().getTime();
  var dist = cdDate - now;

  var days = Math.floor(dist / (1000 * 60 * 60 * 24));
  dist %= (1000 * 60 * 60 * 24);

  var hours = Math.floor(dist / (1000 * 60 * 60));
  dist %= (1000 * 60 * 60);

  var mins = Math.floor(dist / (1000 * 60));
  dist %= (1000 * 60);

  var secs = Math.floor(dist / 1000);

  var timeRem = `${days}D ${hours}H ${mins}M ${secs}S`;
  document.getElementById('root').innerText = timeRem;

  if (dist <= 0) {
    clearInterval(timer);
    document.getElementById('root').innerText = 'Time Expired!';
  }

}, 1000);