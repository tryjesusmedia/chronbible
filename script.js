(() => {
  'use strict';

  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-nav');

  const isSpanish = document.documentElement.lang === 'es';
  const openLabel = isSpanish ? 'Abrir menú' : 'Open navigation';
  const closeLabel = isSpanish ? 'Cerrar menú' : 'Close navigation';

  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', openLabel);
    menu.hidden = true;
  }

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const opening = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(opening));
      toggle.setAttribute('aria-label', opening ? closeLabel : openLabel);
      menu.hidden = !opening;
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !menu.hidden) {
        closeMenu();
        toggle.focus();
      }
    });

    document.addEventListener('click', (event) => {
      if (!menu.hidden && !menu.contains(event.target) && !toggle.contains(event.target)) {
        closeMenu();
      }
    });

  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Omnisend owns the bilingual form's fields, consent, submission, and styling.
})();