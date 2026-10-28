(() => {
  'use strict';
  const root = document.documentElement;
  const languageButtons = [...document.querySelectorAll('[data-language]')];
  const toast = document.getElementById('toast');
  let toastTimer;
  const messages = {
    es: { copied: 'Color copiado: ', failed: 'No se pudo copiar. Selecciona el código y cópialo manualmente: ', title: 'Black Diamond Grill — Manual de marca' },
    en: { copied: 'Color copied: ', failed: 'Could not copy. Select the code and copy it manually: ', title: 'Black Diamond Grill — Brand guidelines' }
  };
  function setLanguage(language) {
    if (!['es', 'en'].includes(language)) return;
    root.lang = language;
    document.title = messages[language].title;
    document.querySelector('meta[name="description"]').content = language === 'es'
      ? 'Manual de marca bilingüe de Black Diamond Grill. Versión 1.0.'
      : 'Bilingual Black Diamond Grill brand guidelines. Version 1.0.';
    languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
    document.querySelectorAll('[data-alt-es]').forEach(image => { image.alt = image.getAttribute('data-alt-' + language); });
    document.querySelector('nav').setAttribute('aria-label', language === 'es' ? 'Índice' : 'Contents');
    document.querySelector('.language-switch').setAttribute('aria-label', language === 'es' ? 'Idioma' : 'Language');
    document.querySelectorAll('[data-copy]').forEach(button => button.setAttribute('aria-label', (language === 'es' ? 'Copiar ' : 'Copy ') + button.dataset.copy));
    toast.classList.remove('visible');
    try { localStorage.setItem('bdg-brandbook-language', language); } catch (_) { /* Optional preference only. */ }
  }
  let initialLanguage = 'es';
  try { const saved = localStorage.getItem('bdg-brandbook-language'); if (saved === 'en') initialLanguage = saved; } catch (_) { /* Spanish remains the default. */ }
  setLanguage(initialLanguage);
  languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  function announce(message) {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('visible');
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 5500);
  }
  async function copyColor(value) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const field = document.createElement('textarea');
        field.value = value;
        field.setAttribute('readonly', '');
        field.style.cssText = 'position:fixed;left:-9999px;top:0';
        document.body.appendChild(field);
        const focused = document.activeElement;
        let copied = false;
        try { field.select(); copied = document.execCommand('copy'); }
        finally { field.remove(); if (focused && focused.focus) focused.focus(); }
        if (!copied) throw new Error('Clipboard unavailable');
      }
      announce(messages[root.lang].copied + value);
    } catch (_) { announce(messages[root.lang].failed + value); }
  }
  document.querySelectorAll('[data-copy]').forEach(button => button.addEventListener('click', () => copyColor(button.dataset.copy)));
  ['print', 'print-bottom'].forEach(id => document.getElementById(id).addEventListener('click', () => window.print()));
  const tocLinks = [...document.querySelectorAll('.sidebar nav a')];
  const chapters = [...document.querySelectorAll('.chapter')];
  let scheduled = false;
  function updateToc() {
    scheduled = false;
    let active = chapters[0];
    for (const chapter of chapters) {
      if (chapter.getBoundingClientRect().top <= 180) active = chapter;
    }
    tocLinks.forEach(link => {
      if (link.hash === '#' + active.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateToc); }
  }, { passive: true });
  window.addEventListener('resize', updateToc);
  updateToc();
})();
