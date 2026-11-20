if (typeof HTMLDialogElement !== 'undefined' && HTMLDialogElement.prototype.showModal) {
  const link = document.querySelector('footer a[href="kvkk.html"]');

  link?.addEventListener('click', async event => {
    if (event.defaultPrevented || event.button || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (link.dataset.loading) return;
    link.dataset.loading = 'true';

    try {
      const response = await fetch(link.href, { mode: 'same-origin' });
      if (!response.ok) throw new Error('Privacy page unavailable');
      const source = new DOMParser().parseFromString(await response.text(), 'text/html');
      const notice = source.querySelector('#privacy-notice');
      const heading = source.querySelector('main h1');
      if (!notice || !heading) throw new Error('Privacy notice missing');

      const dialog = document.createElement('dialog');
      dialog.className = 'privacy-dialog';
      dialog.setAttribute('aria-labelledby', 'privacy-dialog-title');

      const title = document.createElement('h2');
      title.id = 'privacy-dialog-title';
      title.textContent = heading.textContent;

      const close = document.createElement('button');
      close.type = 'button';
      close.className = 'button secondary';
      close.textContent = 'Kapat';
      close.autofocus = true;
      close.addEventListener('click', () => dialog.close());

      const header = document.createElement('div');
      header.className = 'privacy-dialog-header';
      header.append(title, close);
      dialog.append(header, notice);
      document.body.append(dialog);
      dialog.addEventListener('close', () => {
        dialog.remove();
        link.focus({ preventScroll: true });
      }, { once: true });
      dialog.showModal();
    } catch {
      location.assign(link.href);
    } finally {
      delete link.dataset.loading;
    }
  });
}
