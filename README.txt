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
- The 3D model reads and displays Width, Projection and Height values in mm.
- Use Generate / Update 3D Preview after changing dimensions.
- The 3D viewer needs internet access because it loads Three.js from a CDN.

Latest changes:
- Removed Print / Save PDF button from the PDF action area.
- Moved New Request button to the top header.
- Order Name / No starts blank; if empty, PDF uses CustomerCode-ProductCode-WidthxProjection.
- Added sticky horizontal quick navigation for main sections.

V3 changes:
- The PDF export captures an isometric 3D preview image and places it in the Company / Product area.
- Quick navigation is simplified to Company / Product / Order / Project / Measurement / 3D / PDF.


NO 3D VERSION
- 3D preview has been removed from the application and PDF export.

COLOR CHART UPDATE
- Color-related fields now include a Select Color button.
- Select Color uses optimized previews generated from the supplied RAL and wood-transfer files.
- RAL and matte colors are grouped by visual tone; A- wood-transfer colors stay at the end.
- Wood-transfer colors with A- codes are listed at the end of the color list.
- Pergola Fabric uses a Select Fabric button with a scrollable PVC fabric list.
- PVC fabric entries use optimized sphere previews generated from the supplied catalog images.
- Bioclimatic Panel Color can copy the System Color with one click.
- Customers can still type custom color or fabric codes manually.
- Selected values are saved in the form and included in the PDF data.
