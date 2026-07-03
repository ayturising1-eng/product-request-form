// C130 Technical Sheet Path Fix
// GitHub Pages project URL fix for technical PDF files.
// This file is intentionally loaded after app.js and after the technical sheet modal markup.

(function () {
  const FIX_VERSION = 'c130-technical-sheet-path-fix';

  function resolvePageAsset(path) {
    const cleanPath = String(path || '').replace(/^\/+/, '');
    if (!cleanPath) return '';
    if (/^https?:\/\//i.test(cleanPath)) return cleanPath;

    const base = window.location.pathname.endsWith('/')
      ? window.location.href
      : window.location.href.replace(/[^/]*$/, '');

    return new URL(cleanPath, base).href;
  }

  function getLabelFromApp(fnName, fallback) {
    try {
      if (typeof window[fnName] === 'function') return window[fnName]();
    } catch (error) {
      // Keep fallback.
    }
    return fallback;
  }

  function getTechnicalSheetRawPath() {
    try {
      if (typeof window.getCurrentTechnicalSheetUrl === 'function') {
        const fromApp = window.getCurrentTechnicalSheetUrl();
        if (fromApp) return fromApp;
      }
    } catch (error) {
      // Keep fallback.
    }

    const btn = document.getElementById('technicalSheetBtn');
    return btn ? (btn.dataset.sheetPath || btn.dataset.sheetUrl || '') : '';
  }

  function getTechnicalSheetResolvedUrl() {
    return resolvePageAsset(getTechnicalSheetRawPath());
  }

  function refreshTechnicalSheetButtonFixed() {
    const wrap = document.getElementById('technicalSheetWrap');
    const btn = document.getElementById('technicalSheetBtn');
    if (!wrap || !btn) return;

    const rawPath = getTechnicalSheetRawPath();
    const resolvedUrl = resolvePageAsset(rawPath);

    btn.dataset.sheetPath = rawPath;
    btn.dataset.sheetUrl = resolvedUrl;
    btn.textContent = getLabelFromApp('getTechnicalSheetLabel', 'Technical Sheet');
    wrap.classList.toggle('hidden', !rawPath);
  }

  function openTechnicalSheetFixed(event) {
    const button = event.target && event.target.closest ? event.target.closest('#technicalSheetBtn') : null;
    if (!button) return;

    const url = getTechnicalSheetResolvedUrl();
    if (!url) return;

    event.preventDefault();
    event.stopPropagation();
    if (typeof event.stopImmediatePropagation === 'function') {
      event.stopImmediatePropagation();
    }

    const modal = document.getElementById('technicalSheetModal');
    const frame = document.getElementById('technicalSheetFrame');
    const title = document.getElementById('technicalSheetTitle');
    const openLink = document.getElementById('technicalSheetOpenLink');
    const closeBtn = document.getElementById('technicalSheetCloseBtn');

    if (!modal || !frame) {
      window.open(url, '_blank', 'noopener');
      return;
    }

    if (title) title.textContent = getLabelFromApp('getTechnicalSheetLabel', 'Technical Sheet');
    if (openLink) {
      openLink.textContent = getLabelFromApp('getOpenPdfLabel', 'Open PDF');
      openLink.href = url;
    }
    if (closeBtn) closeBtn.textContent = getLabelFromApp('getCloseLabel', 'Close');

    frame.src = url;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeTechnicalSheetFixed(event) {
    const closeButton = event.target && event.target.closest ? event.target.closest('#technicalSheetCloseBtn') : null;
    const modal = document.getElementById('technicalSheetModal');

    if (!closeButton && event.target !== modal) return;

    event.preventDefault();
    event.stopPropagation();
    if (typeof event.stopImmediatePropagation === 'function') {
      event.stopImmediatePropagation();
    }

    if (modal) modal.classList.add('hidden');

    const frame = document.getElementById('technicalSheetFrame');
    if (frame) frame.src = 'about:blank';

    document.body.style.overflow = '';
  }

  // Capture phase: block the old relative-path click handler from app.js.
  document.addEventListener('click', openTechnicalSheetFixed, true);
  document.addEventListener('click', closeTechnicalSheetFixed, true);

  ['productFamilySelect', 'productGroupSelect', 'productSubGroupSelect'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', () => setTimeout(refreshTechnicalSheetButtonFixed, 120));
  });

  window.addEventListener('load', () => setTimeout(refreshTechnicalSheetButtonFixed, 200));
  document.addEventListener('change', () => setTimeout(refreshTechnicalSheetButtonFixed, 150), true);
  document.addEventListener('click', () => setTimeout(refreshTechnicalSheetButtonFixed, 150), true);
  setTimeout(refreshTechnicalSheetButtonFixed, 300);

  // PWA cache refresh for already installed app/browser.
  if ('caches' in window) {
    caches.keys()
      .then((keys) => Promise.all(keys
        .filter((key) => key.includes('product-request-form-c129') || key.includes('product-request-form-c130'))
        .map((key) => key === 'product-request-form-c130-technical-sheet-path-fix' ? null : caches.delete(key))
        .filter(Boolean)))
      .catch(() => {});
  }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(`sw.js?v=${FIX_VERSION}`).catch(() => {});
    });
  }

  window.resolvePageAsset = resolvePageAsset;
  window.refreshTechnicalSheetButtonFixed = refreshTechnicalSheetButtonFixed;
})();
