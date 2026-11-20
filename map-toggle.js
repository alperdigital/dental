const mapButton = document.querySelector('[data-map-toggle]');
const mapPanel = document.getElementById(mapButton.getAttribute('aria-controls'));
const mapNotice = document.getElementById('map-notice');
const frame = mapPanel.querySelector('iframe');

mapButton.addEventListener('click', () => {
  if (mapPanel.hidden) {
    mapNotice.returnValue = '';
    mapNotice.showModal();
    return;
  }

  mapPanel.hidden = true;
  frame.removeAttribute('src');
  mapButton.setAttribute('aria-expanded', 'false');
  mapButton.textContent = 'Google Maps haritasını aç';
});

mapNotice.addEventListener('close', () => {
  if (mapNotice.returnValue !== 'open') return;

  frame.src = frame.dataset.src;
  mapPanel.hidden = false;
  mapButton.setAttribute('aria-expanded', 'true');
  mapButton.textContent = 'Haritayı kapat';
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  mapPanel.scrollIntoView({ block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' });
});
