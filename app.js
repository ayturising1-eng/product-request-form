const DATA = window.PRODUCT_DATA;
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const state = {
  selectedProductId: 'galaxy'
};

const STORAGE_PROFILE = 'prf_profile_v2';
const STORAGE_ORDER = 'prf_order_v5';

const fields = {
  companyName: $('#companyName'),
  contactPerson: $('#contactPerson'),
  phone: $('#phone'),
  email: $('#email'),
  address: $('#address'),
  orderNo: $('#orderNo'),
  orderDate: $('#orderDate'),
  notes: $('#notes')
};

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function autoOrderNo() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `REQ-${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}`;
}

function toast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => el.classList.remove('show'), 2300);
}

function safeId(text) {
  return String(text).toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

function getProduct() {
  return DATA.products.find((p) => p.id === state.selectedProductId) || DATA.products[0];
}

function getGroup(product = getProduct()) {
  return DATA.groups[product.group];
}

function isGalaxy(product = getProduct()) {
  return product.specialForm === 'galaxy';
}

function renderProducts() {
  const select = $('#productSelect');
  select.innerHTML = DATA.products.map((product) => {
    const groupLabel = DATA.groups[product.group].label;
    return `<option value="${product.id}">${product.name} — ${groupLabel}</option>`;
  }).join('');
  select.value = state.selectedProductId;
  updateProductHint();
}

function updateProductHint() {
  const product = getProduct();
  const group = getGroup(product);
  $('#productGroupHint').textContent = isGalaxy(product)
    ? `${group.label} | Special B-Cube GALAXY form active`
    : group.label;
}

function onProductChange() {
  state.selectedProductId = $('#productSelect').value;
  updateProductHint();
  renderForm();
  saveOrderDraft();
  updatePreview();
}

function createInputField(field) {
  if (field.type === 'choice') return createChoiceField(field);

  const label = document.createElement('label');
  label.textContent = field.label;
  label.className = field.unit || field.unitAuto ? 'unit-label' : '';

  const wrap = document.createElement('div');
  wrap.className = 'input-unit-wrap';

  let control;
  if (field.type === 'select') {
    control = document.createElement('select');
    control.innerHTML = field.options.map((option) => {
      const text = option === '' ? 'Select...' : option;
      return `<option value="${option}">${text}</option>`;
    }).join('');
    if (field.defaultValue !== undefined) control.value = field.defaultValue;
  } else {
    control = document.createElement('input');
    control.type = field.type === 'number' ? 'number' : 'text';
    if (field.type === 'number') control.inputMode = 'decimal';
    control.placeholder = field.unit || field.unitAuto ? 'Enter value' : '';
    if (field.defaultValue !== undefined) control.value = field.defaultValue;
  }
  control.id = `dyn_${field.id}`;
  control.dataset.fieldId = field.id;
  control.dataset.fieldLabel = field.label;
  control.dataset.unit = field.unit || '';
  control.dataset.unitAuto = field.unitAuto || '';
  control.addEventListener('input', onAnyInput);
  control.addEventListener('change', onAnyInput);

  wrap.appendChild(control);
  if (field.unit) {
    const unit = document.createElement('span');
    unit.className = 'unit-suffix';
    unit.textContent = field.unit;
    wrap.appendChild(unit);
  }
  if (field.unitAuto === 'pcpcs') {
    const unit = document.createElement('span');
    unit.className = 'unit-suffix auto-unit';
    unit.dataset.autoFor = field.id;
    unit.textContent = 'pcs';
    wrap.appendChild(unit);
  }

  label.appendChild(wrap);
  return label;
}

function createChoiceField(field) {
  const wrapper = document.createElement('div');
  wrapper.className = 'choice-field';

  const heading = document.createElement('div');
  heading.className = 'field-heading';
  heading.textContent = field.label;

  const row = document.createElement('div');
  row.className = 'choice-row';

  field.options.forEach((option) => {
    const id = `dyn_${field.id}_${safeId(option)}`;
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');
    input.id = id;
    input.type = 'radio';
    input.name = `dyn_${field.id}`;
    input.value = option;
    input.dataset.fieldId = field.id;
    input.dataset.fieldLabel = field.label;
    if (field.defaultValue !== undefined && option === field.defaultValue) input.checked = true;
    input.addEventListener('change', onAnyInput);
    span.textContent = option;
    label.appendChild(input);
    label.appendChild(span);
    row.appendChild(label);
  });

  wrapper.appendChild(heading);
  wrapper.appendChild(row);
  return wrapper;
}

function createFormSection(title, items, className = 'grid two') {
  const section = document.createElement('div');
  section.className = 'dynamic-section';
  section.id = `section_${safeId(title)}`;
  const h3 = document.createElement('h3');
  h3.textContent = title;
  const grid = document.createElement('div');
  grid.className = className;
  items.forEach((item) => grid.appendChild(createInputField(item)));
  section.appendChild(h3);
  section.appendChild(grid);
  return section;
}

function createCheckboxSection(title, fieldName, items) {
  const section = document.createElement('div');
  section.className = 'dynamic-section';
  section.id = `section_${safeId(title)}`;
  const h3 = document.createElement('h3');
  h3.textContent = title;
  const grid = document.createElement('div');
  grid.className = 'checkbox-grid';
  items.forEach((option) => {
    const id = `${fieldName}_${safeId(option)}`;
    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');
    input.id = id;
    input.type = 'checkbox';
    input.name = fieldName;
    input.value = option;
    input.addEventListener('change', onAnyInput);
    span.textContent = option;
    label.appendChild(input);
    label.appendChild(span);
    grid.appendChild(label);
  });
  section.appendChild(h3);
  section.appendChild(grid);
  return section;
}

function renderGalaxyForm() {
  const wrap = $('#formArea');
  const form = DATA.galaxyForm;
  wrap.innerHTML = '';
  wrap.appendChild(createFormSection('Project Details', form.projectDetails, 'grid two'));
  wrap.appendChild(createFormSection('Color Details', form.colorDetails, 'grid two'));
  wrap.appendChild(createFormSection('Motor & Remote Control', form.operation, 'grid two'));
  wrap.appendChild(createFormSection('Panel Options', form.panelOptions, 'grid two'));
  wrap.appendChild(createCheckboxSection('Lighting', 'lighting', form.lighting));
  wrap.appendChild(createFormSection('Light Dimmers', form.dimmers, 'grid two'));
  wrap.appendChild(createFormSection('Sensors', form.sensors, 'grid two'));
  wrap.appendChild(createFormSection('Heater & Packaging', form.heaterPackaging, 'grid two'));
  updateAutoUnits();
}

function renderGenericForm() {
  const product = getProduct();
  const group = getGroup(product);
  const wrap = $('#formArea');
  wrap.innerHTML = '';

  const projectItems = [
    { id: 'quantity', label: 'Quantity', type: 'number' },
    ...DATA.common.dimensionFields.map((f) => ({ id: f.id, label: f.label, type: 'number', unit: f.unit }))
  ];
  const colorItems = group.colorFields.map((label) => ({ id: safeId(label), label, type: 'text' }));
  const installItems = [
    { id: 'installationType', label: 'Installation Type', type: 'select', options: DATA.common.installationTypes },
    { id: 'glassType', label: 'Glass Type', type: 'select', options: DATA.common.glassTypes },
    { id: 'electricPower', label: 'Electric Power', type: 'select', options: DATA.common.electricPower },
    { id: 'motor', label: 'Motor', type: 'select', options: DATA.common.motor },
    { id: 'remoteControl', label: 'Remote Control', type: 'select', options: DATA.common.remoteControl },
    { id: 'manualCrank', label: 'Manual Crank Operation', type: 'select', options: DATA.common.manualCrank }
  ];
  const lighting = product.id === 'galaxy'
    ? [...group.lighting, 'Louver LED']
    : group.lighting;

  wrap.appendChild(createFormSection('Project Details', projectItems, 'grid two'));
  wrap.appendChild(createFormSection('Colours / System', colorItems, 'grid two'));
  wrap.appendChild(createFormSection('Technical Selections', installItems, 'grid two'));
  wrap.appendChild(createCheckboxSection('Lighting', 'lighting', lighting));
  wrap.appendChild(createCheckboxSection('Additional Accessories', 'accessories', group.accessories));
}

function renderForm() {
  if (isGalaxy()) renderGalaxyForm();
  else renderGenericForm();
}

function getDynamicValues() {
  return $$('[data-field-id]').reduce((acc, el) => {
    const id = el.dataset.fieldId;
    if (el.type === 'radio') {
      if (!(id in acc)) acc[id] = '';
      if (el.checked) acc[id] = el.value;
    } else {
      acc[id] = el.value;
    }
    return acc;
  }, {});
}

function getChecked(name) {
  return $$(`input[name="${name}"]:checked`).map((x) => x.value);
}

function formatValue(value, unit, unitAuto) {
  const clean = String(value ?? '').trim();
  if (!clean) return '-';
  if (unit) return `${clean} ${unit}`;
  if (unitAuto === 'pcpcs') {
    const n = Number(clean.replace(',', '.'));
    const suffix = n === 1 ? 'pc' : 'pcs';
    return `${clean} ${suffix}`;
  }
  return clean;
}

function codePart(text, fallback = 'XX') {
  const cleaned = ascii(text || '').replace(/[^A-Za-z0-9]/g, '').toUpperCase();
  return (cleaned.slice(0, 2) || fallback).padEnd(2, 'X');
}

function uniqueProductCode(productName) {
  const name = ascii(productName || '').toUpperCase();
  const keys = ['GALAXY', 'FREEDOM', 'URBAN', 'MINIMA', 'TECTONA'];
  const hit = keys.find((key) => name.includes(key));
  return codePart(hit || name, 'PR');
}

function cleanDimensionForOrderNo(value) {
  const raw = String(value || '').replace(',', '.').trim();
  if (!raw) return '0';
  const n = Number(raw);
  if (Number.isFinite(n)) return String(raw).replace(/[^0-9.]/g, '').replace(/\.0+$/, '');
  return ascii(raw).replace(/[^A-Za-z0-9]/g, '') || '0';
}

function generatedOrderNo(profile, productName, values) {
  const customer = codePart(profile.companyName || profile.contactPerson, 'CU');
  const product = uniqueProductCode(productName);
  const width = cleanDimensionForOrderNo(values.width || values.frontH || values.quantity);
  const projection = cleanDimensionForOrderNo(values.projection);
  return `${customer}-${product}-${width}x${projection}`;
}

function getFieldValue(field) {
  const radios = $$(`input[type="radio"][name="dyn_${field.id}"]`);
  if (radios.length) {
    return radios.find((radio) => radio.checked)?.value || '';
  }
  const el = $(`#dyn_${field.id}`);
  return el?.value || '';
}

function fieldRows(fieldList) {
  return fieldList.map((field) => {
    return [field.label, formatValue(getFieldValue(field), field.unit || '', field.unitAuto || '')];
  });
}

function genericRows() {
  const group = getGroup();
  const projectFields = [
    { id: 'quantity', label: 'Quantity' },
    ...DATA.common.dimensionFields.map((f) => ({ id: f.id, label: f.label, unit: f.unit }))
  ];
  const colorFields = group.colorFields.map((label) => ({ id: safeId(label), label }));
  const techFields = ['installationType', 'glassType', 'electricPower', 'motor', 'remoteControl', 'manualCrank'].map((id) => {
    const el = $(`#dyn_${id}`);
    return [el?.dataset.fieldLabel || id, formatValue(el?.value || '')];
  });
  return {
    systemQuantity: formatValue($('#dyn_quantity')?.value || ''),
    sections: [
      { title: 'Project Details', rows: fieldRows(projectFields) },
      { title: 'Colours / System', rows: fieldRows(colorFields) },
      { title: 'Technical Selections', rows: techFields },
      { title: 'Lighting', rows: [['Selected', getChecked('lighting').join(', ') || '-']] },
      { title: 'Additional Accessories', rows: [['Selected', getChecked('accessories').join(', ') || '-']] }
    ]
  };
}

function galaxyRows() {
  const form = DATA.galaxyForm;
  return {
    systemQuantity: formatValue($('#dyn_systemQuantity')?.value || ''),
    sections: [
      { title: 'Project Details', rows: fieldRows(form.projectDetails) },
      { title: 'Color Details', rows: fieldRows(form.colorDetails) },
      { title: 'Motor & Remote Control', rows: fieldRows(form.operation) },
      { title: 'Panel Options', rows: fieldRows(form.panelOptions) },
      { title: 'Lighting', rows: [['Selected', getChecked('lighting').join(', ') || '-']] },
      { title: 'Light Dimmers', rows: fieldRows(form.dimmers) },
      { title: 'Sensors', rows: fieldRows(form.sensors) },
      { title: 'Heater & Packaging', rows: fieldRows(form.heaterPackaging) }
    ]
  };
}

function getOrderData() {
  const product = getProduct();
  const group = getGroup(product);
  const dynamic = isGalaxy(product) ? galaxyRows() : genericRows();
  const profile = {
    companyName: fields.companyName.value.trim(),
    contactPerson: fields.contactPerson.value.trim(),
    phone: fields.phone.value.trim(),
    email: fields.email.value.trim(),
    address: fields.address.value.trim()
  };
  const values = getDynamicValues();
  const manualOrderNo = fields.orderNo.value.trim();

  return {
    profile,
    orderNo: manualOrderNo || generatedOrderNo(profile, product.name, values),
    manualOrderNo,
    orderDate: fields.orderDate.value,
    productName: product.name,
    productGroup: group.label,
    sections: dynamic.sections,
    values,
    notes: fields.notes.value.trim()
  };
}

function setText(key, value) {
  $$(`[data-preview="${key}"]`).forEach((el) => {
    el.textContent = value || '-';
  });
}

function renderPreviewSections(sections) {
  $('#previewSections').innerHTML = sections.map((section) => `
    <div class="pdf-section">
      <h3>${section.title}</h3>
      <table><tbody>
        ${section.rows.map(([label, value]) => `<tr><td>${label}</td><td>${value || '-'}</td></tr>`).join('')}
      </tbody></table>
    </div>
  `).join('');
}

function updateAutoUnits() {
  $$('[data-unit-auto="pcpcs"]').forEach((el) => {
    const target = $(`[data-auto-for="${el.dataset.fieldId}"]`);
    if (!target) return;
    const n = Number(String(el.value || '').replace(',', '.'));
    target.textContent = n === 1 ? 'pc' : 'pcs';
  });
}

function updatePreview() {
  updateAutoUnits();
  const data = getOrderData();
  setText('companyName', data.profile.companyName);
  setText('contactPerson', data.profile.contactPerson);
  setText('phone', data.profile.phone);
  setText('email', data.profile.email);
  setText('address', data.profile.address);
  setText('orderDate', data.orderDate);
  setText('orderNo', data.orderNo);
  setText('productName', data.productName);
  setText('productGroup', data.productGroup);
  setText('notes', data.notes || '-');
  renderPreviewSections(data.sections);
}

function saveProfile() {
  const profile = {
    companyName: fields.companyName.value.trim(),
    contactPerson: fields.contactPerson.value.trim(),
    phone: fields.phone.value.trim(),
    email: fields.email.value.trim(),
    address: fields.address.value.trim()
  };
  localStorage.setItem(STORAGE_PROFILE, JSON.stringify(profile));
  toast('Company details saved.');
}

function loadProfile() {
  try {
    const profile = JSON.parse(localStorage.getItem(STORAGE_PROFILE) || '{}');
    Object.keys(profile).forEach((key) => {
      if (fields[key]) fields[key].value = profile[key] || '';
    });
  } catch {}
}

function clearProfile() {
  localStorage.removeItem(STORAGE_PROFILE);
  ['companyName', 'contactPerson', 'phone', 'email', 'address'].forEach((key) => fields[key].value = '');
  onAnyInput();
  toast('Company details cleared.');
}

function saveOrderDraft() {
  const data = getOrderData();
  localStorage.setItem(STORAGE_ORDER, JSON.stringify({
    selectedProductId: state.selectedProductId,
    orderNo: data.manualOrderNo,
    orderDate: data.orderDate,
    notes: data.notes,
    values: data.values,
    lighting: getChecked('lighting'),
    accessories: getChecked('accessories')
  }));
}

function loadOrderDraft() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_ORDER) || '{}');
    if (saved.selectedProductId && DATA.products.some((p) => p.id === saved.selectedProductId)) {
      state.selectedProductId = saved.selectedProductId;
      renderProducts();
      renderForm();
    }
    fields.orderNo.value = saved.orderNo || '';
    fields.orderDate.value = saved.orderDate || todayISO();
    fields.notes.value = saved.notes || '';
    Object.entries(saved.values || {}).forEach(([id, value]) => {
      const radio = $$(`input[type="radio"][name="dyn_${id}"]`).find((x) => x.value === value);
      if (radio) radio.checked = true;
      const el = $(`#dyn_${id}`);
      if (el) el.value = value;
    });
    setChecked('lighting', saved.lighting || []);
    setChecked('accessories', saved.accessories || []);
  } catch {}
}

function setChecked(name, values) {
  $$(`input[name="${name}"]`).forEach((x) => x.checked = values.includes(x.value));
}

function resetOrder() {
  localStorage.removeItem(STORAGE_ORDER);
  fields.orderNo.value = '';
  fields.orderDate.value = todayISO();
  fields.notes.value = '';
  renderForm();
  updatePreview();
  toast('New request opened.');
}

function onAnyInput() {
  updateAutoUnits();
  saveOrderDraft();
  updatePreview();
}

function ascii(text) {
  return String(text ?? '')
    .replace(/ğ/g, 'g').replace(/Ğ/g, 'G')
    .replace(/ü/g, 'u').replace(/Ü/g, 'U')
    .replace(/ş/g, 's').replace(/Ş/g, 'S')
    .replace(/ı/g, 'i').replace(/İ/g, 'I')
    .replace(/ö/g, 'o').replace(/Ö/g, 'O')
    .replace(/ç/g, 'c').replace(/Ç/g, 'C')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\x20-\x7E]/g, '?');
}

function pdfEscape(text) {
  return ascii(text).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

function wrapText(text, maxChars) {
  const words = ascii(text || '-').split(/\s+/);
  const lines = [];
  let current = '';
  words.forEach((word) => {
    if ((current + ' ' + word).trim().length > maxChars) {
      if (current) lines.push(current);
      current = word;
    } else {
      current = `${current} ${word}`.trim();
    }
  });
  if (current) lines.push(current);
  return lines.length ? lines : ['-'];
}


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function dataUrlToImage(dataUrl, width, height) {
  if (!dataUrl || !dataUrl.startsWith('data:image/jpeg;base64,')) return null;
  const base64 = dataUrl.split(',')[1];
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return { bytes, width: Math.max(1, Math.round(width || 1)), height: Math.max(1, Math.round(height || 1)) };
}

async function capture3DPreviewForPdf() {
  if (!isGalaxy()) return null;
  if (window.refreshGalaxy3DPreview) {
    window.refreshGalaxy3DPreview();
    await sleep(900);
  }
  const frame = $('#galaxy3dFrame');
  for (let attempt = 0; attempt < 8; attempt += 1) {
    try {
      const capture = frame?.contentWindow?.captureGalaxy3D?.();
      if (capture?.dataUrl) return dataUrlToImage(capture.dataUrl, capture.width, capture.height);
    } catch {}
    await sleep(250);
  }
  return null;
}

function buildOrderPdf(data, previewImage = null) {
  const W = 595.28;
  const H = 841.89;
  const margin = 36;
  let y = 36;
  const commands = [];

  const cmd = (s) => commands.push(s);
  const topY = (v) => H - v;
  const text = (x, yTop, value, size = 9, bold = false) => {
    cmd(`BT /${bold ? 'F2' : 'F1'} ${size} Tf ${x.toFixed(2)} ${topY(yTop).toFixed(2)} Td (${pdfEscape(value)}) Tj ET`);
  };
  const rect = (x, yTop, w, h) => {
    cmd(`${x.toFixed(2)} ${topY(yTop + h).toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re S`);
  };
  const fillRect = (x, yTop, w, h, gray = 0.94) => {
    cmd(`${gray} g ${x.toFixed(2)} ${topY(yTop + h).toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re f 0 g`);
  };
  const line = (x1, y1, x2, y2) => {
    cmd(`${x1.toFixed(2)} ${topY(y1).toFixed(2)} m ${x2.toFixed(2)} ${topY(y2).toFixed(2)} l S`);
  };
  const drawImage = (x, yTop, w, h) => {
    if (!previewImage) return;
    cmd(`q ${w.toFixed(2)} 0 0 ${h.toFixed(2)} ${x.toFixed(2)} ${topY(yTop + h).toFixed(2)} cm /Im1 Do Q`);
  };

  const section = (title) => {
    y += 7;
    fillRect(margin, y, W - margin * 2, 17, 0.92);
    rect(margin, y, W - margin * 2, 17);
    text(margin + 7, y + 11.5, title.toUpperCase(), 8.5, true);
    y += 21;
  };

  const rowHeight = 13;
  const tableRows = (rows, x, startY, width) => {
    let yy = startY;
    rows.forEach(([a, b]) => {
      fillRect(x, yy, 170, rowHeight, 0.97);
      rect(x, yy, 170, rowHeight);
      rect(x + 170, yy, width - 170, rowHeight);
      text(x + 6, yy + 9, a, 7.3, true);
      const valLines = wrapText(b || '-', 58).slice(0, 1);
      valLines.forEach((ln, idx) => text(x + 178, yy + 9 + idx * 7, ln, 7.3));
      yy += rowHeight;
    });
    return yy;
  };

  cmd('0.1 w');
  rect(margin, y, 70, 46);
  text(margin + 18, y + 28, 'LOGO', 13, true);
  text(margin + 84, y + 16, 'PRODUCT REQUEST FORM', 18, true);
  text(margin + 84, y + 31, 'Clean A4 order request summary', 8.5);
  text(405, y + 16, `Date: ${data.orderDate || '-'}`, 8.5, true);
  text(405, y + 31, `Order: ${data.orderNo || '-'}`, 8.5, true);
  line(margin, y + 55, W - margin, y + 55);
  y += 65;

  section('Company / Product');
  const productRows = [
    ['Company', data.profile.companyName || '-'],
    ['Contact', data.profile.contactPerson || '-'],
    ['Phone', data.profile.phone || '-'],
    ['E-mail', data.profile.email || '-'],
    ['Address', data.profile.address || '-'],
    ['Group', data.productGroup || '-'],
    ['Product', data.productName || '-']
  ];
  const companyStartY = y;
  const tableWidth = previewImage ? 322 : W - margin * 2;
  const tableEndY = tableRows(productRows, margin, y, tableWidth);
  let imageEndY = tableEndY;
  if (previewImage) {
    const boxX = margin + tableWidth + 12;
    const boxY = companyStartY;
    const boxW = W - margin - boxX;
    const titleH = 16;
    const imageBoxH = 94;
    rect(boxX, boxY, boxW, titleH + imageBoxH + 8);
    fillRect(boxX, boxY, boxW, titleH, 0.97);
    text(boxX + 6, boxY + 10.5, '3D PREVIEW', 7.3, true);
    const innerX = boxX + 7;
    const innerY = boxY + titleH + 6;
    const innerW = boxW - 14;
    const innerH = imageBoxH - 4;
    const ratio = previewImage.width / previewImage.height;
    let drawW = innerW;
    let drawH = drawW / ratio;
    if (drawH > innerH) {
      drawH = innerH;
      drawW = drawH * ratio;
    }
    const drawX = innerX + (innerW - drawW) / 2;
    const drawY = innerY + (innerH - drawH) / 2;
    drawImage(drawX, drawY, drawW, drawH);
    imageEndY = boxY + titleH + imageBoxH + 8;
  }
  y = Math.max(tableEndY, imageEndY) + 2;

  data.sections.forEach((sectionData) => {
    section(sectionData.title);
    y = tableRows(sectionData.rows, margin, y, W - margin * 2) + 2;
  });

  section('Notes');
  const noteLines = wrapText(data.notes || '-', 82).slice(0, 5);
  rect(margin, y, W - margin * 2, 58);
  noteLines.forEach((ln, idx) => text(margin + 8, y + 14 + idx * 10, ln, 8.5));

  return createPdf(commands.join('\n'), W, H, previewImage);
}

function createPdf(content, width, height, previewImage = null) {
  const encoder = new TextEncoder();
  const encode = (value) => encoder.encode(value);
  const contentBytes = encode(content);
  const hasImage = Boolean(previewImage?.bytes?.length);
  const pageResources = hasImage
    ? `<< /Font << /F1 4 0 R /F2 5 0 R >> /XObject << /Im1 7 0 R >> >>`
    : `<< /Font << /F1 4 0 R /F2 5 0 R >> >>`;

  const objects = [
    [encode('<< /Type /Catalog /Pages 2 0 R >>')],
    [encode('<< /Type /Pages /Kids [3 0 R] /Count 1 >>')],
    [encode(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${width} ${height}] /Resources ${pageResources} /Contents 6 0 R >>`)],
    [encode('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>')],
    [encode('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>')],
    [encode(`<< /Length ${contentBytes.length} >>\nstream\n`), contentBytes, encode('\nendstream')]
  ];

  if (hasImage) {
    objects.push([
      encode(`<< /Type /XObject /Subtype /Image /Width ${previewImage.width} /Height ${previewImage.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${previewImage.bytes.length} >>\nstream\n`),
      previewImage.bytes,
      encode('\nendstream')
    ]);
  }

  const chunks = [];
  const offsets = [0];
  let length = 0;
  const push = (chunk) => {
    chunks.push(chunk);
    length += chunk.length;
  };
  const pushText = (value) => push(encode(value));

  pushText('%PDF-1.4\n');
  objects.forEach((objChunks, index) => {
    offsets.push(length);
    pushText(`${index + 1} 0 obj\n`);
    objChunks.forEach(push);
    pushText('\nendobj\n');
  });

  const xrefOffset = length;
  pushText(`xref\n0 ${objects.length + 1}\n`);
  pushText('0000000000 65535 f \n');
  for (let i = 1; i <= objects.length; i += 1) {
    pushText(`${String(offsets[i]).padStart(10, '0')} 00000 n \n`);
  }
  pushText(`trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`);

  return new Blob(chunks, { type: 'application/pdf' });
}

function filenameFromData(data) {
  const product = ascii(data.productName).replace(/[^A-Za-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const order = ascii(data.orderNo || 'request').replace(/[^A-Za-z0-9-]+/g, '-');
  return `${order}-${product}.pdf`;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function downloadPdf() {
  const data = getOrderData();
  const previewImage = await capture3DPreviewForPdf();
  const blob = buildOrderPdf(data, previewImage);
  downloadBlob(blob, filenameFromData(data));
  toast(previewImage ? 'PDF created with 3D preview.' : 'PDF created. 3D preview could not be captured.');
}

async function sharePdf() {
  const data = getOrderData();
  const previewImage = await capture3DPreviewForPdf();
  const blob = buildOrderPdf(data, previewImage);
  const filename = filenameFromData(data);
  const file = new File([blob], filename, { type: 'application/pdf' });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    await navigator.share({
      title: 'Product Request Form',
      text: `${data.productName} - ${data.orderNo}`,
      files: [file]
    });
    toast('Share sheet opened.');
  } else {
    downloadBlob(blob, filename);
    toast('This browser does not support file sharing. PDF downloaded.');
  }
}

function registerEvents() {
  Object.values(fields).forEach((el) => el.addEventListener('input', onAnyInput));
  $('#productSelect').addEventListener('change', onProductChange);
  $('#saveProfileBtn').addEventListener('click', () => { saveProfile(); onAnyInput(); });
  $('#clearProfileBtn').addEventListener('click', clearProfile);
  $('#downloadPdfBtn').addEventListener('click', downloadPdf);
  $('#sharePdfBtn').addEventListener('click', () => sharePdf().catch(() => toast('Share cancelled or unsupported.')));
  $('#resetOrderTopBtn').addEventListener('click', resetOrder);
}

let deferredInstallPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  $('#installBtn').classList.remove('hidden');
});

$('#installBtn').addEventListener('click', async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  $('#installBtn').classList.add('hidden');
});

async function initPwa() {
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    try { await navigator.serviceWorker.register('sw.js'); } catch {}
  }
}

function init() {
  fields.orderDate.value = todayISO();
  fields.orderNo.value = '';
  loadProfile();
  renderProducts();
  renderForm();
  loadOrderDraft();
  registerEvents();
  updatePreview();
  initPwa();
}

init();
