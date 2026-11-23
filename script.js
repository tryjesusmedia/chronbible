(() => {
  'use strict';

  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-nav');

  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    menu.hidden = true;
  }

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const opening = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(opening));
      toggle.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
      menu.hidden = !opening;
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });

    document.addEventListener('click', (event) => {
      if (!menu.hidden && !menu.contains(event.target) && !toggle.contains(event.target)) {
        closeMenu();
      }
    });

    const desktop = window.matchMedia('(min-width: 861px)');
    desktop.addEventListener?.('change', (event) => {
      if (event.matches) closeMenu();
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Omnisend is deliberately not emulated here. Once you insert the actual
  // Omnisend embed into #omnisend-form-slot, the provider owns collection,
  // validation, submission, consent and styling.
})();