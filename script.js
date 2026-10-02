const concertList = document.querySelector('.concert-list');

if (concertList) {
  const now = Date.now();

  for (const concert of concertList.querySelectorAll('li[data-expires]')) {
    const expiresAt = Date.parse(concert.dataset.expires);
    if (Number.isFinite(expiresAt) && expiresAt <= now) concert.remove();
  }

  if (!concertList.querySelector('li')) {
    const message = document.createElement('p');
    message.className = 'concert-empty';
    message.textContent = 'Новые даты скоро появятся.';
    concertList.replaceWith(message);
  }
}
