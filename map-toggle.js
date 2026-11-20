const mapButton = document.querySelector('[data-map-toggle]');
const mapPanel = document.getElementById(mapButton.getAttribute('aria-controls'));
mapButton.addEventListener('click', () => {
  const opening = mapPanel.hidden;
  mapPanel.hidden = !opening;
  mapButton.setAttribute('aria-expanded', String(opening));
  mapButton.textContent = opening ? 'Haritayı kapat' : 'Haritada gör';
  if (!opening) return;
  const frame = mapPanel.querySelector('iframe');
  if (!frame.hasAttribute('src')) frame.src = frame.dataset.src;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  mapPanel.scrollIntoView({ block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' });
});
