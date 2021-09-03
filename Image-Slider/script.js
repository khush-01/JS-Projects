idx = 0;
showImage(idx);

function slide(n) {
  idx += n;
  showImage(idx);
}

function showImage(n) {
  var img = document.getElementsByClassName('slides');
  for (let index = 0; index < img.length; index++) {
    img[index].style.display = 'none';
  }

  if (n >= img.length) idx = 0;
  if (n <= -1) idx = img.length - 1;

  img[idx].style.display = 'block';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') slide(-1);
  else if (e.key === 'ArrowRight') slide(1);
})
