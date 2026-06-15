PRODUCT REQUEST FORM - MOBILE PWA DEMO

How to test:
1. Extract the ZIP.
2. Open index.html with Chrome or Edge.
3. For the best mobile experience, upload these files to a free static host such as Cloudflare Pages or GitHub Pages and open the link on the phone.
4. On Android Chrome: tap the three dots > Add to Home screen.
5. On iPhone Safari: tap Share > Add to Home Screen.

What changed in this mobile version:
- Default product is B-Cube GALAXY.
- Layout is optimized for phone screens.
- Form sections are single-column on mobile.
- PDF create/share buttons stay fixed at the bottom on mobile.
- The A4 preview is scaled for phone reading.
- PDF output is still clean A4.

No server, no login, no database. User data is saved locally on the device.


3D PREVIEW UPDATE
- B-Cube GALAXY now includes an integrated 3D preview section under the form.
- The 3D model reads Width, Projection and Height values in cm, then displays the model in mm.
- Use Generate / Update 3D Preview after changing dimensions.
- The 3D viewer needs internet access because it loads Three.js from a CDN.

Latest changes:
- Removed Print / Save PDF button from the PDF action area.
- Moved New Request button to the top header.
- Order Name / No starts blank; if empty, PDF uses CustomerCode-ProductCode-WidthxProjection.
- Added sticky horizontal quick navigation for main sections.
