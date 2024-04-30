document.getElementById('burger').addEventListener('click', function() {
  document.querySelector('header').classList.toggle('open');

  if (document.querySelector('header').classList.contains('open')) {
    document.body.style.overflow = 'hidden';

    // Заблокируем скроллинг на мобильных устройствах
    document.addEventListener('touchmove', preventDefault, { passive: false });
  } else {
    document.body.style.overflow = 'visible';

    // Уберем блокировку скроллинга на мобильных устройствах
    document.removeEventListener('touchmove', preventDefault, { passive: false });
  }
});

function preventDefault(e) {
  e.preventDefault();
}