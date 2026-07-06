// C131 Technical Data Repo Link Fix
// Bu dosya product-request-form reposunda ana dizine yüklenecek.
// Technical Sheet butonlarını ayrı technical-data reposundaki PDF linklerine bağlar.

(function () {
  const FIX_VERSION = 'c139-no-title-overlap';
  const TECHNICAL_DATA_BASE = 'https://ayturising1-eng.github.io/technical-data/technical-sheets/';

  const TECHNICAL_DATA_MAP = {
    // Pergola
    'pergola|falcate|minima': 'falcate-minima.pdf',
    'pergola|falcate|tectona': 'falcate-tectona.pdf',
    'pergola|subulate|minima': 'subulate-minima.pdf',
    'pergola|subulate|tectona': 'subulate-tectona.pdf',
    'pergola|unifoliate|minima': 'unifoliate-minima.pdf',
    'pergola|unifoliate|tectona': 'unifoliate-tectona.pdf',
    'pergola|pergo rise|': 'pergo-rise.pdf',
    'pergola|pergo rise|pergo rise': 'pergo-rise.pdf',

    // Bioclimatic
    'bioclimatic|b-cube|galaxy': 'b-cube-galaxy-space.pdf',
    'bioclimatic|b-cube|space': 'b-cube-galaxy-space.pdf',
    'bioclimatic|b-cube|freedom': 'b-cube-freedom-classic.pdf',
    'bioclimatic|b-cube|classic': 'b-cube-freedom-classic.pdf',
    'bioclimatic|b-cube|urban': 'b-cube-urban.pdf',
    'bioclimatic|bio-rise|': 'bio-rise.pdf',
    'bioclimatic|bio rise|': 'bio-rise.pdf',
    'bioclimatic|bio-rise|bio-rise': 'bio-rise.pdf',
    'bioclimatic|bio rise|bio rise': 'bio-rise.pdf',

    // Zip Screen - Awning - Curtain
    'zip screen - awning - curtain|janela cassette awning|': 'janela.pdf',
    'zip screen - awning - curtain|janela awning|': 'janela.pdf',
    'zip screen - awning - curtain|pars cassette awning|': 'pars.pdf',
    'zip screen - awning - curtain|pars plus cassette awning|': 'pars-plus.pdf',
    'zip screen - awning - curtain|pars plus luxe cassette awning|': 'pars-plus-lux.pdf',
    'zip screen - awning - curtain|pars plus lux cassette awning|': 'pars-plus-lux.pdf',
    'zip screen - awning - curtain|moonlight classic awning|motorlu': 'moonlight.pdf',
    'zip screen - awning - curtain|moonlight classic awning|şanzımanlı': 'moonlight.pdf',
    'zip screen - awning - curtain|moonlight awning|motorlu': 'moonlight.pdf',
    'zip screen - awning - curtain|moonlight awning|şanzımanlı': 'moonlight.pdf',
    'zip screen - awning - curtain|sunshine classic awning|motorlu': 'sunshine-awning.pdf',
    'zip screen - awning - curtain|sunshine classic awning|şanzımanlı': 'sunshine-awning.pdf',
    'zip screen - awning - curtain|sunshine awning|motorlu': 'sunshine-awning.pdf',
    'zip screen - awning - curtain|sunshine awning|şanzımanlı': 'sunshine-awning.pdf',
    'zip screen - awning - curtain|twins classic awning|motorlu': 'twins-awning.pdf',
    'zip screen - awning - curtain|twins classic awning|şanzımanlı': 'twins-awning.pdf',
    'zip screen - awning - curtain|twins awning|motorlu': 'twins-awning.pdf',
    'zip screen - awning - curtain|twins awning|şanzımanlı': 'twins-awning.pdf'
  };

  function normalizeKey(value) {
    return String(value || '')
      .trim()
      .toLocaleLowerCase('tr-TR')
      .replace(/\s+/g, ' ');
  }

  function getSelectedOptionText(selectId) {
    const select = document.getElementById(selectId);
    if (!select) return '';
    const option = select.options && select.selectedIndex >= 0 ? select.options[select.selectedIndex] : null;
    return option ? option.textContent.trim() : '';
  }

  function getLang() {
    return (window.currentLang || document.documentElement.lang || 'en').toLowerCase();
  }

  function technicalSheetLabel() {
    const lang = getLang();
    if (lang === 'tr') return 'Teknik Döküman';
    if (lang === 'de') return 'Technisches Datenblatt';
    if (lang === 'fr') return 'Fiche technique';
    return 'Technical Sheet';
  }

  function openPdfLabel() {
    const lang = getLang();
    if (lang === 'tr') return 'PDF Aç';
    if (lang === 'de') return 'PDF öffnen';
    if (lang === 'fr') return 'Ouvrir PDF';
    return 'Open PDF';
  }

  function closeLabel() {
    const lang = getLang();
    if (lang === 'tr') return 'Kapat';
    if (lang === 'de') return 'Schließen';
    if (lang === 'fr') return 'Fermer';
    return 'Close';
  }

  function getCurrentTechnicalDataPdfName() {
    const family = normalizeKey(getSelectedOptionText('productFamilySelect'));
    const group = normalizeKey(getSelectedOptionText('productGroupSelect'));
    const subGroup = normalizeKey(getSelectedOptionText('productSubGroupSelect'));

    const directKey = `${family}|${group}|${subGroup}`;
    const emptySubKey = `${family}|${group}|`;

    return TECHNICAL_DATA_MAP[directKey] || TECHNICAL_DATA_MAP[emptySubKey] || '';
  }

  function getCurrentTechnicalDataUrl() {
    const pdfName = getCurrentTechnicalDataPdfName();
    return pdfName ? `${TECHNICAL_DATA_BASE}${pdfName}` : '';
  }

  function refreshTechnicalSheetButtonFixed() {
    const wrap = document.getElementById('technicalSheetWrap');
    const btn = document.getElementById('technicalSheetBtn');
    if (!wrap || !btn) return;

    const pdfName = getCurrentTechnicalDataPdfName();
    const url = getCurrentTechnicalDataUrl();

    btn.textContent = technicalSheetLabel();
    btn.dataset.sheetPath = pdfName;
    btn.dataset.sheetUrl = url;

    wrap.classList.toggle('hidden', !url);
  }

  function openTechnicalSheetFixed(event) {
    const button = event.target && event.target.closest ? event.target.closest('#technicalSheetBtn') : null;
    if (!button) return;

    const url = getCurrentTechnicalDataUrl();
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

    if (title) title.textContent = technicalSheetLabel();
    if (openLink) {
      openLink.textContent = openPdfLabel();
      openLink.href = url;
    }
    if (closeBtn) closeBtn.textContent = closeLabel();

    frame.src = url;
    modal.classList.remove('hidden');
    document.body.classList.add('technical-sheet-open');
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
    document.body.classList.remove('technical-sheet-open');

    const frame = document.getElementById('technicalSheetFrame');
    if (frame) frame.src = 'about:blank';

    document.body.style.overflow = '';
  }

  // Capture phase: Eski app.js içindeki eski teknik dosya tıklamasını durdurup
  // yeni technical-data reposundaki tam PDF linkini açar.
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

  // Eski PWA cache'lerini temizlemeye çalışır.
  if ('caches' in window) {
    caches.keys()
      .then((keys) => Promise.all(keys
        .filter((key) => key.includes('product-request-form-c129') || key.includes('product-request-form-c130') || key.includes('product-request-form-c131') || key.includes('product-request-form-c132') || key.includes('product-request-form-c133') || key.includes('product-request-form-c134') || key.includes('product-request-form-c135'))
        .map((key) => key === 'product-request-form-c139-no-title-overlap' ? null : caches.delete(key))
        .filter(Boolean)))
      .catch(() => {});
  }

  // Yeni service worker sürümünü kaydet.
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register(`sw.js?v=${FIX_VERSION}`).catch(() => {});
    });
  }


  // C135 modal state sync: hide shortcut buttons while the Technical Sheet modal is open.
  function syncTechnicalSheetOpenClass() {
    const modal = document.getElementById('technicalSheetModal');
    const isOpen = !!(modal && !modal.classList.contains('hidden'));
    document.body.classList.toggle('technical-sheet-open', isOpen);
  }

  try {
    const modal = document.getElementById('technicalSheetModal');
    if (modal) {
      new MutationObserver(syncTechnicalSheetOpenClass)
        .observe(modal, { attributes: true, attributeFilter: ['class'] });
    }
  } catch {}

  window.addEventListener('load', syncTechnicalSheetOpenClass);
  setTimeout(syncTechnicalSheetOpenClass, 300);

  window.getCurrentTechnicalDataUrl = getCurrentTechnicalDataUrl;
  window.refreshTechnicalSheetButtonFixed = refreshTechnicalSheetButtonFixed;
})();
