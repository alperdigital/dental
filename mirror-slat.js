const reflectionAngles = [0.65, -0.7, 0.25, 1, -0.8, 0.52, -0.35, 0.16, -0.92, 0.76];

class MirrorSlatImage {
  constructor(element, {
    imageSrc, alt, slatCount = 18, distortionStrength = 1,
    perspectiveDepth = 1, animationDuration = 425, staggerDelay = 6,
    borderRadius = '3px', interactionMode = 'auto',
  } = {}) {
    this.element = element;
    this.image = element.querySelector('img');
    this.slatCount = Math.max(6, Math.min(28, Math.round(slatCount)));
    this.distortionStrength = distortionStrength;
    this.perspectiveDepth = perspectiveDepth;
    if (imageSrc) {
      this.image.removeAttribute('srcset');
      this.image.src = imageSrc;
    }
    if (alt !== undefined) this.image.alt = alt;

    element.style.setProperty('--slat-duration', `${animationDuration}ms`);
    element.style.setProperty('--slat-stagger', `${staggerDelay}ms`);
    element.style.setProperty('--slat-radius', borderRadius);
    element.style.setProperty('--slat-finish', `${animationDuration + (this.slatCount - 1) * staggerDelay}ms`);
    element.dataset.mode = interactionMode;
    const card = element.closest('.card');
    this.toggle = card.querySelector('.mirror-toggle');
    this.inView = false;
    this.manualReveal = null;
    this.toggle.addEventListener('click', () => {
      this.manualReveal = !element.hasAttribute('data-revealed');
      this.updateReveal();
    });
    if (interactionMode === 'auto') {
      const mobile = matchMedia('(hover: none), (any-pointer: coarse), (max-width: 680px)');
      const observer = new IntersectionObserver(([entry]) => {
        const inView = entry.isIntersecting;
        if (this.inView && !inView) this.manualReveal = null;
        this.inView = inView;
        this.updateReveal();
      }, { rootMargin: '0px 0px 32px 0px' });
      const syncObserver = () => {
        if (mobile.matches) {
          observer.observe(element);
        } else {
          observer.disconnect();
          this.inView = false;
          this.manualReveal = null;
          this.updateReveal();
        }
      };
      mobile.addEventListener('change', syncObserver);
      syncObserver();
    }
    if (this.image.complete && this.image.naturalWidth) {
      this.mount();
    } else {
      this.image.addEventListener('load', () => this.mount(), { once: true });
    }
  }

  updateReveal() {
    const revealed = this.manualReveal ?? this.inView;
    this.toggle.setAttribute('aria-pressed', String(revealed));
    this.element.toggleAttribute('data-revealed', revealed);
  }

  mount() {
    const layer = document.createElement('div');
    layer.className = 'mirror-slats';
    layer.setAttribute('aria-hidden', 'true');
    for (let index = 0; index < this.slatCount; index++) {
      const start = index * 100 / this.slatCount;
      const center = start + 50 / this.slatCount;
      const angle = reflectionAngles[index % reflectionAngles.length];
      const edge = Math.sin(Math.PI * center / 100);
      // Let neighboring strips sample overlapping parts of the same image.
      const shift = (4.9 * angle + 2.4 * Math.sin(index * 0.8)) * edge * this.distortionStrength;
      const slat = document.createElement('span');
      slat.className = 'mirror-slat';
      slat.style.setProperty('--start', start);
      slat.style.setProperty('--span', 100 / this.slatCount);
      slat.style.setProperty('--center', center);
      slat.style.setProperty('--shift', shift);
      slat.style.setProperty('--skew', `${angle * 1.4 * edge * this.perspectiveDepth}deg`);
      slat.style.setProperty('--stretch', 1 + Math.abs(angle) * 0.18 * this.perspectiveDepth);
      slat.style.setProperty('--shade', 0.06 + Math.abs(angle) * 0.14);
      slat.style.setProperty('--tone', angle > 0 ? '#e2caab' : '#564a3e');
      slat.style.setProperty('--order', index);
      const reflection = this.image.cloneNode();
      reflection.alt = '';
      reflection.loading = 'eager';
      reflection.classList.add('mirror-reflection');
      slat.append(reflection);
      layer.append(slat);
    }
    this.element.append(layer);
    this.element.dataset.ready = '';
  }
}

document.querySelectorAll('[data-mirror-slat]').forEach(element => {
  new MirrorSlatImage(element, {
    slatCount: Number(element.dataset.slatCount),
    distortionStrength: Number(element.dataset.distortionStrength),
  });
});
