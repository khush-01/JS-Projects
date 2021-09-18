var balloons = document.getElementsByClassName('balloon');

for (i = 0; i < balloons.length; i++) {
  const el = balloons[i];
  el.addEventListener('mouseover', () => {
    if (el.style.background !== 'none') {
      el.style.background = 'none';
      el.innerText = 'POP!';
    }
  })
  el.addEventListener('mouseout', () => {
    el.innerText = '';
  })
}

document.addEventListener('mouseover', () => {
  var flag = true;
  for (i = 0; i < balloons.length; i++) {
    const el = balloons[i];
    if (el.style.background !== 'none')
      flag = false;
  }
  if (flag) {
    for (i = 0; i < balloons.length; i++) {
      balloons[i].style.display = 'none';
    }
    document.getElementById('no-balloons').style.display = 'block';
  }
}, false)
