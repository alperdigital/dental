const mobileWrap = matchMedia('(max-width: 680px)');
const firstLineRatio = 0.65;

function findBreak(words, width, measure) {
  if (measure(words.join(' ')) <= width) return 0;

  let target = 0;
  for (let index = 1; index < words.length; index++) {
    const first = measure(words.slice(0, index).join(' '));
    const second = measure(words.slice(index).join(' '));
    if (first > width || second > width) continue;
    if (first <= width * firstLineRatio) target = index;
  }
  return target;
}

for (const label of document.querySelectorAll('[data-mobile-wrap]')) {
  const original = label.textContent;
  const words = original.trim().split(/\s+/);
  let activeBreak = 0;

  function update() {
    let nextBreak = 0;
    if (mobileWrap.matches && words.length > 1) {
      const width = label.getBoundingClientRect().width;
      // Use the rendered font and letter spacing without changing the measured box.
      const probe = document.createElement('span');
      probe.setAttribute('aria-hidden', 'true');
      probe.style.cssText = 'position:fixed;visibility:hidden;white-space:pre;text-wrap:nowrap;width:max-content';
      label.append(probe);
      nextBreak = findBreak(words, width, text => {
        probe.textContent = text;
        return probe.getBoundingClientRect().width;
      });
      probe.remove();
    }

    if (nextBreak === activeBreak) return;
    activeBreak = nextBreak;
    if (nextBreak) {
      label.replaceChildren(words.slice(0, nextBreak).join(' ') + ' ', document.createElement('br'), words.slice(nextBreak).join(' '));
    } else {
      label.textContent = original;
    }
  }

  new ResizeObserver(update).observe(label);
  mobileWrap.addEventListener('change', update);
  document.fonts.ready.then(update);
  update();
}
