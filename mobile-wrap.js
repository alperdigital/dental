const mobileWrap = matchMedia('(max-width: 680px)');
const firstLineRatio = 0.65;

function balanceLastLines(words, width, measure) {
  const lines = [[]];
  for (const word of words) {
    if (measure(word) > width) return [];
    const line = lines.at(-1);
    if (line.length && measure([...line, word].join(' ')) > width) {
      lines.push([word]);
    } else {
      line.push(word);
    }
  }

  if (lines.length < 2) return [];
  const upper = lines.at(-2);
  const lower = lines.at(-1);
  let moved = false;
  // Move whole words from the end of the upper line, in reading order.
  while (upper.length > 1 && measure(upper.join(' ')) > width * firstLineRatio) {
    const nextLower = [upper.at(-1), ...lower];
    if (measure(nextLower.join(' ')) > width) break;
    const currentGap = measure(upper.join(' ')) - measure(lower.join(' '));
    const nextGap = Math.abs(measure(upper.slice(0, -1).join(' ')) - measure(nextLower.join(' ')));
    if (nextGap >= currentGap) break;
    lower.unshift(upper.pop());
    moved = true;
  }

  return moved ? lines.map(line => line.join(' ')) : [];
}

for (const label of document.querySelectorAll('[data-mobile-wrap]')) {
  const original = label.textContent;
  const words = original.trim().split(/\s+/);
  let activeLayout = '';

  function update() {
    let lines = [];
    if (mobileWrap.matches && words.length > 1) {
      const width = label.getBoundingClientRect().width;
      // Use the rendered font and letter spacing without changing the measured box.
      const probe = document.createElement('span');
      probe.setAttribute('aria-hidden', 'true');
      probe.style.cssText = 'position:fixed;visibility:hidden;white-space:pre;text-wrap:nowrap;width:max-content';
      label.append(probe);
      lines = balanceLastLines(words, width, text => {
        probe.textContent = text;
        return probe.getBoundingClientRect().width;
      });
      probe.remove();
    }

    const layout = lines.join('\n');
    if (layout === activeLayout) return;
    activeLayout = layout;
    if (lines.length) {
      label.replaceChildren(...lines.flatMap((line, index) =>
        index < lines.length - 1 ? [line + ' ', document.createElement('br')] : [line]
      ));
    } else {
      label.textContent = original;
    }
  }

  new ResizeObserver(update).observe(label);
  mobileWrap.addEventListener('change', update);
  document.fonts.ready.then(update);
  update();
}
