(function () {
  const frame = document.getElementById('galaxy3dFrame');
  const section = document.getElementById('galaxy3dSection');
  const button = document.getElementById('generate3dBtn');
  const note = document.getElementById('galaxy3dNote');
  const productSelect = document.getElementById('productSelect');

  if (!frame || !section || !button || !productSelect) return;

  function isGalaxy() {
    return productSelect.value === 'galaxy';
  }

  function parseCm(fieldId, fallback) {
    const el = document.getElementById(`dyn_${fieldId}`);
    const raw = String(el?.value || '').replace(',', '.');
    const n = Number(raw);
    return Number.isFinite(n) && n > 0 ? n : fallback;
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function readDimensions() {
    const widthCm = parseCm('width', 400);
    const projectionCm = parseCm('projection', 350);
    const heightCm = parseCm('heightTopOfGutter', 260);

    return {
      W: clamp(Math.round(widthCm * 10), 1200, 12000),
      D: clamp(Math.round(projectionCm * 10), 1200, 10000),
      H: clamp(Math.round(heightCm * 10), 1800, 5000)
    };
  }

  function updateVisibility() {
    section.style.display = isGalaxy() ? '' : 'none';
  }

  let timer;
  function scheduleRefresh() {
    clearTimeout(timer);
    timer = setTimeout(refreshGalaxy3DPreview, 450);
  }

  function refreshGalaxy3DPreview() {
    updateVisibility();
    if (!isGalaxy()) return;

    const dims = readDimensions();
    frame.srcdoc = buildViewerHtml(dims);
    if (note) {
      note.textContent = `Model: ${dims.W} mm × ${dims.D} mm × ${dims.H} mm`;
    }
  }

  function buildViewerHtml({ W, D, H }) {
    const lamellaCount = Math.max(3, Math.min(40, Math.floor((D - 420) / 216)));
    return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>B-Cube GALAXY 3D Preview</title>
<style>
  html, body { margin:0; height:100%; overflow:hidden; background:radial-gradient(circle at top,#334155,#0f172a 62%); font-family:Inter,Segoe UI,Arial,sans-serif; color:#e5e7eb; }
  #ui { position:absolute; top:12px; left:12px; right:12px; max-width:370px; padding:12px; z-index:10; border-radius:16px; background:rgba(15,23,42,.78); border:1px solid rgba(255,255,255,.16); box-shadow:0 18px 40px rgba(0,0,0,.35); backdrop-filter:blur(12px); }
  h1 { margin:0 0 8px; font-size:16px; color:#7dd3fc; }
  .stat { display:flex; justify-content:space-between; gap:12px; margin:4px 0; font-size:12px; }
  .stat span:last-child { font-weight:800; color:#fff; }
  .actions { display:grid; grid-template-columns:1fr 1fr; gap:7px; margin-top:10px; }
  button { padding:8px 9px; border-radius:10px; border:1px solid #2563eb; background:#3b82f6; color:#fff; font-weight:800; cursor:pointer; }
  button.alt { background:rgba(255,255,255,.08); border-color:rgba(255,255,255,.25); }
  #status { margin-top:8px; color:#fbbf24; font-size:11px; line-height:1.35; }
  .legend { margin-top:8px; font-size:11px; line-height:1.5; color:#cbd5e1; }
  .dot { display:inline-block; width:9px; height:9px; border-radius:50%; margin-right:6px; vertical-align:middle; }
  #fallback { display:none; position:absolute; inset:0; place-items:center; padding:22px; text-align:center; line-height:1.5; background:#0f172a; color:#e5e7eb; }
  @media(max-width:560px){ #ui{max-width:none; padding:10px;} h1{font-size:14px;} .legend{display:none;} .actions{grid-template-columns:1fr;} }
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></scr` + `ipt>
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></scr` + `ipt>
</head>
<body>
<div id="ui">
  <h1>B-Cube GALAXY 3D Preview</h1>
  <div class="stat"><span>Width</span><span>${W} mm</span></div>
  <div class="stat"><span>Projection</span><span>${D} mm</span></div>
  <div class="stat"><span>Height</span><span>${H} mm</span></div>
  <div class="stat"><span>Lamella count</span><span>${lamellaCount}</span></div>
  <div class="actions">
    <button id="replayBtn" type="button">Replay assembly</button>
    <button id="openBtn" class="alt" type="button">Open / close panels</button>
  </div>
  <div id="status">Drag to rotate. Use mouse wheel or pinch to zoom.</div>
  <div class="legend">
    <span class="dot" style="background:#ff00ff"></span>Posts &nbsp;
    <span class="dot" style="background:#2563eb"></span>Beams &nbsp;
    <span class="dot" style="background:#ff8c00"></span>Gutter &nbsp;
    <span class="dot" style="background:#7cfc00"></span>Panels
  </div>
</div>
<div id="fallback">3D viewer could not load. Please check internet connection because Three.js is loaded from CDN.</div>
<script>
(function(){
  if (!window.THREE || !THREE.OrbitControls) {
    document.getElementById('fallback').style.display = 'grid';
    return;
  }

  const W=${W}, D=${D}, H=${H}, LAMELLA_COUNT=${lamellaCount};
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 30000);
  camera.position.set(W * 0.88, H * 0.72, D * 1.08);

  const renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.setSize(innerWidth, innerHeight);
  renderer.shadowMap.enabled = true;
  document.body.appendChild(renderer.domElement);

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.target.set(0, H * 0.35, 0);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;

  scene.add(new THREE.AmbientLight(0xffffff, 0.72));
  const key = new THREE.DirectionalLight(0xffffff, 0.86);
  key.position.set(W * 0.35, H * 1.25, D * 0.45);
  key.castShadow = true;
  scene.add(key);
  const fill = new THREE.DirectionalLight(0x88aaff, 0.34);
  fill.position.set(-W * 0.5, H * 0.7, -D * 0.55);
  scene.add(fill);

  const model = new THREE.Group();
  scene.add(model);
  const parts = [];
  const panels = [];

  const floorSize = Math.max(W, D) * 1.65;
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(floorSize, floorSize),
    new THREE.ShadowMaterial({ opacity: 0.28 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -2;
  floor.receiveShadow = true;
  scene.add(floor);

  const grid = new THREE.GridHelper(floorSize, 24, 0x94a3b8, 0x475569);
  grid.position.y = 0;
  scene.add(grid);

  const outline = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(W, H, D)),
    new THREE.LineBasicMaterial({ color:0x7dd3fc, transparent:true, opacity:0.19 })
  );
  outline.position.y = H / 2;
  scene.add(outline);

  function addBox(name, sx, sy, sz, px, py, pz, color, panel) {
    const geo = new THREE.BoxGeometry(sx, sy, sz);
    const mat = new THREE.MeshStandardMaterial({ color, roughness:0.56, metalness:0.16 });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(px, py, pz);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.name = name;
    mesh.add(new THREE.LineSegments(
      new THREE.EdgesGeometry(geo),
      new THREE.LineBasicMaterial({ color:0x111111, transparent:true, opacity:0.24 })
    ));
    mesh.visible = false;
    model.add(mesh);
    parts.push(mesh);
    if (panel) panels.push(mesh);
    return mesh;
  }

  const magenta = 0xff00ff;
  const blue = 0x2563eb;
  const orange = 0xff8c00;
  const amber = 0xffb347;
  const green = 0x7cfc00;

  const postX = 100, postZ = 220;
  addBox('Front Left Post', postX, H, postZ, -W/2 + postX/2, H/2, -D/2 + postZ/2, magenta);
  addBox('Front Right Post', postX, H, postZ, W/2 - postX/2, H/2, -D/2 + postZ/2, magenta);
  addBox('Back Left Post', postX, H, postZ, -W/2 + postX/2, H/2, D/2 - postZ/2, magenta);
  addBox('Back Right Post', postX, H, postZ, W/2 - postX/2, H/2, D/2 - postZ/2, magenta);

  const beamY = H - 110;
  addBox('Front Beam', W - 200, 220, 100, 0, beamY, -D/2 + 50, blue);
  addBox('Back Beam', W - 200, 220, 100, 0, beamY, D/2 - 50, blue);
  addBox('Left Beam', 100, 220, D - 220, -W/2 + 50, beamY, 0, blue);
  addBox('Right Beam', 100, 220, D - 220, W/2 - 50, beamY, 0, blue);

  const gutterY = H - 245;
  addBox('Front Gutter', W - 300, 105, 130, 0, gutterY, -D/2 + 165, orange);
  addBox('Back Gutter', W - 300, 105, 130, 0, gutterY, D/2 - 165, orange);
  addBox('Left Gutter', 130, 105, D - 300, -W/2 + 165, gutterY, 0, orange);
  addBox('Right Gutter', 130, 105, D - 300, W/2 - 165, gutterY, 0, orange);

  const railY = H - 320;
  addBox('Inner Front Rail', W - 420, 95, 70, 0, railY, -D/2 + 325, amber);
  addBox('Inner Back Rail', W - 420, 95, 70, 0, railY, D/2 - 325, amber);
  addBox('Inner Left Rail', 70, 95, D - 620, -W/2 + 315, railY, 0, amber);
  addBox('Inner Right Rail', 70, 95, D - 620, W/2 - 315, railY, 0, amber);

  const panelLength = Math.max(650, W - 520);
  const panelStart = -D/2 + 430;
  const panelEnd = D/2 - 430;
  const spacing = LAMELLA_COUNT > 1 ? (panelEnd - panelStart) / (LAMELLA_COUNT - 1) : 216;
  for (let i = 0; i < LAMELLA_COUNT; i++) {
    const z = panelStart + i * spacing;
    addBox('Galaxy Panel ' + (i + 1), panelLength, 42, 58, 0, H - 395, z, green, true);
  }

  let open = false;
  function setPanelsOpen(value) {
    open = value;
    panels.forEach((panel, index) => {
      panel.rotation.x = open ? THREE.MathUtils.degToRad(-62) : 0;
      panel.position.y = H - 395 + (open ? index * 2 : 0);
    });
    document.getElementById('status').textContent = open
      ? 'Panels are shown open. This is a visual preview for B-Cube GALAXY.'
      : 'Panels are shown closed. This is a visual preview for B-Cube GALAXY.';
  }

  let replayTimer = null;
  function replayAssembly() {
    parts.forEach((part) => part.visible = false);
    let step = 0;
    clearInterval(replayTimer);
    document.getElementById('status').textContent = 'Assembly animation is playing...';
    replayTimer = setInterval(() => {
      if (step < parts.length) {
        parts[step].visible = true;
        step += 1;
      } else {
        clearInterval(replayTimer);
        document.getElementById('status').textContent = 'Assembly completed. Drag to rotate, zoom, or open/close panels.';
      }
    }, 95);
  }

  document.getElementById('replayBtn').addEventListener('click', replayAssembly);
  document.getElementById('openBtn').addEventListener('click', () => setPanelsOpen(!open));

  addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  replayAssembly();
  animate();
})();
</scr` + `ipt>
</body>
</html>`;
  }

  button.addEventListener('click', refreshGalaxy3DPreview);
  productSelect.addEventListener('change', () => setTimeout(refreshGalaxy3DPreview, 250));
  document.addEventListener('input', (event) => {
    if (event.target && ['dyn_width', 'dyn_projection', 'dyn_heightTopOfGutter'].includes(event.target.id)) {
      scheduleRefresh();
    }
  });
  document.addEventListener('change', (event) => {
    if (event.target && ['dyn_width', 'dyn_projection', 'dyn_heightTopOfGutter'].includes(event.target.id)) {
      scheduleRefresh();
    }
  });

  window.refreshGalaxy3DPreview = refreshGalaxy3DPreview;
  setTimeout(refreshGalaxy3DPreview, 700);
})();
