// 1kg = 2.20462262185lbs
var kilos = document.getElementById('kgs');
var pounds = document.getElementById('lbs');

function kgtolb(kgs) {
  var pd = parseFloat(kgs) * 2.20462262185;
  pounds.value = pd.toFixed(2);
}

function lbtokg(lbs) {
  var kg = parseFloat(lbs) / 2.20462262185;
  kilos.value = kg.toFixed(2);
}
