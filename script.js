document.getElementById('burger').addEventListener('click', () => {
  document.querySelector('header').classList.toggle('open');
  if(document.querySelector('header').classList.contains('open')){
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }
});