window.APP_VERSION = 'C90-FOLDING-A-HEIGHT-RULES';
const DATA = window.PRODUCT_DATA;
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const state = {
  selectedFamilyId: 'bioclimatic',
  selectedGroupId: 'bcube',
  selectedSubGroupId: 'galaxy',
  selectedProductId: 'galaxy',
  language: 'en',
  projectPositionCounts: {}
};

const STORAGE_PROFILE = 'prf_profile_v2';
const STORAGE_ORDER = 'prf_order_c90_folding_a_height_rules';
const STORAGE_LANGUAGE = 'prf_language_v1';

const COLOR_FIELD_LABELS = new Set([
  'structure',
  'fabric profile',
  'louver blade',
  'panel'
]);
const FABRIC_FIELD_LABELS = new Set([
  'fabric',
  'pergola fabric',
  'screen fabric'
]);
const FINISH_OPTIONS = window.PRODUCT_FINISH_OPTIONS || ['Glossy', 'Matt', 'Texture'];
const COLOR_OPTIONS = [
  { value: 'RAL 1013', code: 'RAL 1013', image: 'assets/color-options/ral-1013-oyster.jpg' },
  { value: 'RAL 1035', code: 'RAL 1035', image: 'assets/color-options/ral-1035-pearl-beige.jpg' },
  { value: 'RAL 1313', code: 'RAL 1313', image: 'assets/color-options/ral-1313-oyster-sand-paper.jpg' },
  { value: 'RAL 7016', code: 'RAL 7016', image: 'assets/color-options/ral-7016-anthracite-grey.jpg' },
  { value: 'RAL 7016', code: 'RAL 7016', image: 'assets/color-options/ral-7016-anthracite-sand-paper.jpg' },
  { value: 'RAL 7039', code: 'RAL 7039', image: 'assets/color-options/ral-7039-quarzgrau.jpg' },
  { value: 'RAL 7106', code: 'RAL 7106', image: 'assets/color-options/ral-7106-sepia-brown-sand-paper.jpg' },
  { value: 'RAL 7421', code: 'RAL 7421', image: 'assets/color-options/ral-7421-grey-camouflage-sand-paper.jpg' },
  { value: 'RAL 9003', code: 'RAL 9003', image: 'assets/color-options/ral-9003-traffic-white-sand-paper.jpg' },
  { value: 'RAL 9005', code: 'RAL 9005', image: 'assets/color-options/ral-9005-jet-black.jpg' },
  { value: 'RAL 9005', code: 'RAL 9005', image: 'assets/color-options/ral-9005-jet-black-sand-paper.jpg' },
  { value: 'RAL 9006', code: 'RAL 9006', image: 'assets/color-options/ral-9006-weissaluminium.jpg' },
  { value: 'RAL 9007', code: 'RAL 9007', image: 'assets/color-options/ral-9007-graualuminium.jpg' },
  { value: 'RAL 9016', code: 'RAL 9016', image: 'assets/color-options/ral-9016-traffic-white.jpg' },
  { value: 'Cappuccino', code: 'Cappuccino', name: 'Cappuccino', detail: 'Matt Finish', image: 'assets/color-options/cappuccino.jpg' },
  { value: 'A-4252-V1-118', code: 'A-4252-V1-118', name: 'Wood Transfer', image: 'assets/color-options/a-4252-v1-118.jpg' },
  { value: 'A-4395-V1-118', code: 'A-4395-V1-118', name: 'Wood Transfer', image: 'assets/color-options/a-4395-v1-118.jpg' },
  { value: 'A-4513-V1-119', code: 'A-4513-V1-119', name: 'Wood Transfer', image: 'assets/color-options/a-4513-v1-119.jpg' }
];
const FABRIC_OPTIONS = [
  { value: '8116 / 9002 | White Texture', code: '8116 / 9002', name: 'White Texture', image: 'assets/fabric-options/b-8116-9002.jpg' },
  { value: '8116 / 1622 | Cream Texture', code: '8116 / 1622', name: 'Cream Texture', image: 'assets/fabric-options/b-8116-1622.jpg' },
  { value: '8290 / 9002 | White Glossy', code: '8290 / 9002', name: 'White Glossy', image: 'assets/fabric-options/8290-9002.jpg' },
  { value: '8290 / 1622 | Cream Matt', code: '8290 / 1622', name: 'Cream Matt', image: 'assets/fabric-options/8290-1622.jpg' },
  { value: '8290 / 7024 | Dark Grey Matt', code: '8290 / 7024', name: 'Dark Grey Matt', image: 'assets/fabric-options/8290-7024.jpg' },
  { value: '8118 / 9002 | White 3D Texture', code: '8118 / 9002', name: 'White 3D Texture', image: 'assets/fabric-options/8118-9002.jpg' },
  { value: '8118 / 1622 | Cream 3D Texture', code: '8118 / 1622', name: 'Cream 3D Texture', image: 'assets/fabric-options/8118-1622.jpg' },
  { value: '8118 / 7500 | Silver 3D Texture', code: '8118 / 7500', name: 'Silver 3D Texture', image: 'assets/fabric-options/8118-7500.jpg' },
  { value: '8118 / 7024 | Dark Grey 3D Texture', code: '8118 / 7024', name: 'Dark Grey 3D Texture', image: 'assets/fabric-options/8118-7024.jpg' },
  { value: '8118 / 7340 | Anthracite 3D Texture', code: '8118 / 7340', name: 'Anthracite 3D Texture', image: 'assets/fabric-options/8118-7340.jpg' },
  { value: '8118 / 7999 | Black 3D Texture', code: '8118 / 7999', name: 'Black 3D Texture', image: 'assets/fabric-options/8118-7999.jpg' },
  { value: '8118 / 5003 | Blue 3D Texture', code: '8118 / 5003', name: 'Blue 3D Texture', image: 'assets/fabric-options/8118-5003.jpg' },
  { value: '666 1X1 | White Thermofoam', code: '666 1X1', name: 'White Thermofoam', image: 'assets/fabric-options/666-1x1.jpg' },
  { value: '666 8X2 | Grey Thermofoam', code: '666 8X2', name: 'Grey Thermofoam', image: 'assets/fabric-options/666-8x2.jpg' }
];

const LANGUAGE_META = {
  tr: { label: 'Türkçe', htmlLang: 'tr', dir: 'ltr' },
  en: { label: 'English', htmlLang: 'en', dir: 'ltr' },
  de: { label: 'Deutsch', htmlLang: 'de', dir: 'ltr' },
  fr: { label: 'Français', htmlLang: 'fr', dir: 'ltr' },
  he: { label: 'עברית', htmlLang: 'he', dir: 'rtl' }
};

const I18N = {
  en: {
    appTitle: 'Product Request Form',
    mobileSubtitle: 'Mobile PDF request app',
    newRequest: 'New Request',
    install: 'Add to Home Screen',
    navCompany: 'Company',
    navProduct: 'Product',
    navOrder: 'Order',
    navPdf: 'PDF',
    companyDetails: 'Company Details',
    companyHelp: 'Fill once. Saved on this device.',
    companyName: 'Company Name',
    companyNamePlaceholder: 'Company name',
    contactPerson: 'Contact Person',
    contactPersonPlaceholder: 'Contact person',
    phone: 'Phone',
    phonePlaceholder: 'Phone',
    email: 'E-mail',
    emailPlaceholder: 'E-mail',
    saveCompany: 'Save Company Details',
    clear: 'Clear',
    selectProduct: 'Select Product',
    selectProductHelp: 'Fields change automatically by product.',
    selectProductMeasurements: 'Select Product & Measurements & Options',
    orderHelp: 'Set order name and date before selecting the product.',
    productFamily: 'Product Family',
    productGroup: 'Product Group',
    productSubGroup: 'Product Sub Group',
    measurementsOptions: 'Measurements & Options',
    measurementsHelp: 'Related fields are grouped under the same heading.',
    orderDetails: 'Order Details',
    orderNoLabel: 'Order Name / No',
    orderNoPlaceholder: 'Auto / manual',
    orderDate: 'Order Date',
    notes: 'Notes',
    notesPlaceholder: 'Optional notes',
    pdfPreview: 'PDF Preview',
    pdfPreviewHelp: 'Create a clean A4 PDF and download or share it.',
    downloadPdf: 'Create / Download PDF',
    sharePdf: 'Share PDF',
    pdfTitle: 'PRODUCT REQUEST FORM',
    pdfDate: 'Date:',
    pdfOrder: 'Order:',
    company: 'Company',
    product: 'Product',
    pdfCompany: 'Company:',
    pdfContact: 'Contact:',
    pdfPhone: 'Phone:',
    pdfEmail: 'E-mail:',
    pdfFamily: 'Family:',
    pdfGroup: 'Group:',
    pdfSubGroup: 'Sub Group:',
    pdfProduct: 'Product:',
    select: 'Select',
    none: 'None',
    selectFamilyHint: 'Select a product family.',
    formWillBeAdded: 'form details will be added in the next step.',
    baseGalaxyFormActive: 'Galaxy base form active',
    productForm: 'Product Form',
    companySaved: 'Company details saved.',
    companyCleared: 'Company details cleared.',
    newRequestOpened: 'New request opened.',
    pdfCreated: 'PDF created.',
    shareOpened: 'Share sheet opened.',
    shareUnsupported: 'This browser does not support file sharing. PDF downloaded.',
    shareCancelled: 'Share cancelled or unsupported.'
  },
  tr: {
    appTitle: 'Ürün Talep Formu',
    mobileSubtitle: 'Mobil PDF talep uygulaması',
    newRequest: 'Yeni Talep',
    install: 'Ana Ekrana Ekle',
    navCompany: 'Firma',
    navProduct: 'Ürün',
    navOrder: 'Sipariş',
    navPdf: 'PDF',
    companyDetails: 'Firma Bilgileri',
    companyHelp: 'Bir kez doldurun. Bu cihazda saklanır.',
    companyName: 'Firma Adı',
    companyNamePlaceholder: 'Firma adı',
    contactPerson: 'İlgili Kişi',
    contactPersonPlaceholder: 'İlgili kişi',
    phone: 'Telefon',
    phonePlaceholder: 'Telefon',
    email: 'E-posta',
    emailPlaceholder: 'E-posta',
    saveCompany: 'Firma Bilgilerini Kaydet',
    clear: 'Temizle',
    selectProduct: 'Ürün Seçimi',
    selectProductHelp: 'Alanlar ürüne göre otomatik değişir.',
    selectProductMeasurements: 'Ürün Seçimi, Ölçüler ve Seçenekler',
    orderHelp: 'Ürün seçmeden önce sipariş adı ve tarihini belirleyin.',
    productFamily: 'Ürün Ailesi',
    productGroup: 'Ürün Grubu',
    productSubGroup: 'Ürün Alt Grubu',
    measurementsOptions: 'Ölçüler ve Seçenekler',
    measurementsHelp: 'İlgili alanlar aynı başlık altında gruplanır.',
    orderDetails: 'Sipariş Bilgileri',
    orderNoLabel: 'Sipariş Adı / No',
    orderNoPlaceholder: 'Otomatik / manuel',
    orderDate: 'Sipariş Tarihi',
    notes: 'Notlar',
    notesPlaceholder: 'Opsiyonel notlar',
    pdfPreview: 'PDF Ön İzleme',
    pdfPreviewHelp: 'Temiz bir A4 PDF oluşturun, indirin veya paylaşın.',
    downloadPdf: 'PDF Oluştur / İndir',
    sharePdf: 'PDF Paylaş',
    pdfTitle: 'ÜRÜN TALEP FORMU',
    pdfDate: 'Tarih:',
    pdfOrder: 'Sipariş:',
    company: 'Firma',
    product: 'Ürün',
    pdfCompany: 'Firma:',
    pdfContact: 'İlgili:',
    pdfPhone: 'Telefon:',
    pdfEmail: 'E-posta:',
    pdfFamily: 'Aile:',
    pdfGroup: 'Grup:',
    pdfSubGroup: 'Alt Grup:',
    pdfProduct: 'Ürün:',
    select: 'Seçiniz',
    none: 'Yok',
    selectFamilyHint: 'Ürün ailesi seçiniz.',
    formWillBeAdded: 'için ürün formu sonraki aşamada eklenecek.',
    baseGalaxyFormActive: 'Galaxy taban formu aktif',
    productForm: 'Ürün Formu',
    companySaved: 'Firma bilgileri kaydedildi.',
    companyCleared: 'Firma bilgileri temizlendi.',
    newRequestOpened: 'Yeni talep açıldı.',
    pdfCreated: 'PDF oluşturuldu.',
    shareOpened: 'Paylaşım ekranı açıldı.',
    shareUnsupported: 'Bu tarayıcı dosya paylaşımını desteklemiyor. PDF indirildi.',
    shareCancelled: 'Paylaşım iptal edildi veya desteklenmiyor.'
  },
  de: {
    appTitle: 'Produktanfrageformular',
    mobileSubtitle: 'Mobile PDF-Anfrage-App',
    newRequest: 'Neue Anfrage',
    install: 'Zum Startbildschirm',
    navCompany: 'Firma',
    navProduct: 'Produkt',
    navOrder: 'Auftrag',
    navPdf: 'PDF',
    companyDetails: 'Firmendaten',
    companyHelp: 'Einmal ausfüllen. Auf diesem Gerät gespeichert.',
    companyName: 'Firmenname',
    companyNamePlaceholder: 'Firmenname',
    contactPerson: 'Kontaktperson',
    contactPersonPlaceholder: 'Kontaktperson',
    phone: 'Telefon',
    phonePlaceholder: 'Telefon',
    email: 'E-Mail',
    emailPlaceholder: 'E-Mail',
    saveCompany: 'Firmendaten speichern',
    clear: 'Löschen',
    selectProduct: 'Produkt auswählen',
    selectProductHelp: 'Felder ändern sich automatisch je nach Produkt.',
    selectProductMeasurements: 'Produkt, Maße und Optionen auswählen',
    orderHelp: 'Auftragsname und Datum vor der Produktauswahl festlegen.',
    productFamily: 'Produktfamilie',
    productGroup: 'Produktgruppe',
    productSubGroup: 'Produktuntergruppe',
    measurementsOptions: 'Maße und Optionen',
    measurementsHelp: 'Zugehörige Felder sind unter derselben Überschrift gruppiert.',
    orderDetails: 'Auftragsdaten',
    orderNoLabel: 'Auftragsname / Nr.',
    orderNoPlaceholder: 'Automatisch / manuell',
    orderDate: 'Auftragsdatum',
    notes: 'Notizen',
    notesPlaceholder: 'Optionale Notizen',
    pdfPreview: 'PDF-Vorschau',
    pdfPreviewHelp: 'Sauberes A4-PDF erstellen, herunterladen oder teilen.',
    downloadPdf: 'PDF erstellen / herunterladen',
    sharePdf: 'PDF teilen',
    pdfTitle: 'PRODUKTANFRAGEFORMULAR',
    pdfDate: 'Datum:',
    pdfOrder: 'Auftrag:',
    company: 'Firma',
    product: 'Produkt',
    pdfCompany: 'Firma:',
    pdfContact: 'Kontakt:',
    pdfPhone: 'Telefon:',
    pdfEmail: 'E-Mail:',
    pdfFamily: 'Familie:',
    pdfGroup: 'Gruppe:',
    pdfSubGroup: 'Untergruppe:',
    pdfProduct: 'Produkt:',
    select: 'Auswählen',
    none: 'Keine',
    selectFamilyHint: 'Produktfamilie auswählen.',
    formWillBeAdded: 'Formulardetails werden im nächsten Schritt hinzugefügt.',
    baseGalaxyFormActive: 'Galaxy-Basisformular aktiv',
    productForm: 'Produktformular',
    companySaved: 'Firmendaten gespeichert.',
    companyCleared: 'Firmendaten gelöscht.',
    newRequestOpened: 'Neue Anfrage geöffnet.',
    pdfCreated: 'PDF erstellt.',
    shareOpened: 'Teilen-Fenster geöffnet.',
    shareUnsupported: 'Dieser Browser unterstützt keine Dateifreigabe. PDF wurde heruntergeladen.',
    shareCancelled: 'Teilen abgebrochen oder nicht unterstützt.'
  },
  fr: {
    appTitle: 'Formulaire de demande produit',
    mobileSubtitle: 'Application mobile de demande PDF',
    newRequest: 'Nouvelle demande',
    install: "Ajouter à l'écran d'accueil",
    navCompany: 'Société',
    navProduct: 'Produit',
    navOrder: 'Commande',
    navPdf: 'PDF',
    companyDetails: 'Informations société',
    companyHelp: 'À remplir une fois. Enregistré sur cet appareil.',
    companyName: 'Nom de la société',
    companyNamePlaceholder: 'Nom de la société',
    contactPerson: 'Contact',
    contactPersonPlaceholder: 'Contact',
    phone: 'Téléphone',
    phonePlaceholder: 'Téléphone',
    email: 'E-mail',
    emailPlaceholder: 'E-mail',
    saveCompany: 'Enregistrer la société',
    clear: 'Effacer',
    selectProduct: 'Sélection du produit',
    selectProductHelp: 'Les champs changent automatiquement selon le produit.',
    selectProductMeasurements: 'Sélection produit, dimensions et options',
    orderHelp: 'Définissez le nom de commande et la date avant le produit.',
    productFamily: 'Famille de produit',
    productGroup: 'Groupe de produit',
    productSubGroup: 'Sous-groupe de produit',
    measurementsOptions: 'Dimensions et options',
    measurementsHelp: 'Les champs associés sont regroupés sous le même titre.',
    orderDetails: 'Détails de commande',
    orderNoLabel: 'Nom / N° commande',
    orderNoPlaceholder: 'Automatique / manuel',
    orderDate: 'Date de commande',
    notes: 'Notes',
    notesPlaceholder: 'Notes optionnelles',
    pdfPreview: 'Aperçu PDF',
    pdfPreviewHelp: 'Créer, télécharger ou partager un PDF A4 propre.',
    downloadPdf: 'Créer / Télécharger PDF',
    sharePdf: 'Partager PDF',
    pdfTitle: 'FORMULAIRE DE DEMANDE PRODUIT',
    pdfDate: 'Date :',
    pdfOrder: 'Commande :',
    company: 'Société',
    product: 'Produit',
    pdfCompany: 'Société :',
    pdfContact: 'Contact :',
    pdfPhone: 'Téléphone :',
    pdfEmail: 'E-mail :',
    pdfFamily: 'Famille :',
    pdfGroup: 'Groupe :',
    pdfSubGroup: 'Sous-groupe :',
    pdfProduct: 'Produit :',
    select: 'Sélectionner',
    none: 'Aucun',
    selectFamilyHint: 'Sélectionnez une famille de produit.',
    formWillBeAdded: 'les détails du formulaire seront ajoutés à l’étape suivante.',
    baseGalaxyFormActive: 'Formulaire de base Galaxy actif',
    productForm: 'Formulaire produit',
    companySaved: 'Informations société enregistrées.',
    companyCleared: 'Informations société effacées.',
    newRequestOpened: 'Nouvelle demande ouverte.',
    pdfCreated: 'PDF créé.',
    shareOpened: 'Fenêtre de partage ouverte.',
    shareUnsupported: 'Ce navigateur ne prend pas en charge le partage de fichiers. PDF téléchargé.',
    shareCancelled: 'Partage annulé ou non pris en charge.'
  },
  he: {
    appTitle: 'טופס בקשת מוצר',
    mobileSubtitle: 'אפליקציית PDF לנייד',
    newRequest: 'בקשה חדשה',
    install: 'הוסף למסך הבית',
    navCompany: 'חברה',
    navProduct: 'מוצר',
    navOrder: 'הזמנה',
    navPdf: 'PDF',
    companyDetails: 'פרטי חברה',
    companyHelp: 'מלאו פעם אחת. נשמר במכשיר זה.',
    companyName: 'שם החברה',
    companyNamePlaceholder: 'שם החברה',
    contactPerson: 'איש קשר',
    contactPersonPlaceholder: 'איש קשר',
    phone: 'טלפון',
    phonePlaceholder: 'טלפון',
    email: 'דוא"ל',
    emailPlaceholder: 'דוא"ל',
    saveCompany: 'שמור פרטי חברה',
    clear: 'נקה',
    selectProduct: 'בחירת מוצר',
    selectProductHelp: 'השדות משתנים אוטומטית לפי המוצר.',
    selectProductMeasurements: 'בחירת מוצר, מידות ואפשרויות',
    orderHelp: 'הגדר שם הזמנה ותאריך לפני בחירת המוצר.',
    productFamily: 'משפחת מוצר',
    productGroup: 'קבוצת מוצר',
    productSubGroup: 'תת-קבוצת מוצר',
    measurementsOptions: 'מידות ואפשרויות',
    measurementsHelp: 'שדות קשורים מקובצים תחת אותה כותרת.',
    orderDetails: 'פרטי הזמנה',
    orderNoLabel: 'שם / מספר הזמנה',
    orderNoPlaceholder: 'אוטומטי / ידני',
    orderDate: 'תאריך הזמנה',
    notes: 'הערות',
    notesPlaceholder: 'הערות אופציונליות',
    pdfPreview: 'תצוגה מקדימה PDF',
    pdfPreviewHelp: 'צור, הורד או שתף PDF נקי בגודל A4.',
    downloadPdf: 'צור / הורד PDF',
    sharePdf: 'שתף PDF',
    pdfTitle: 'טופס בקשת מוצר',
    pdfDate: 'תאריך:',
    pdfOrder: 'הזמנה:',
    company: 'חברה',
    product: 'מוצר',
    pdfCompany: 'חברה:',
    pdfContact: 'איש קשר:',
    pdfPhone: 'טלפון:',
    pdfEmail: 'דוא"ל:',
    pdfFamily: 'משפחה:',
    pdfGroup: 'קבוצה:',
    pdfSubGroup: 'תת-קבוצה:',
    pdfProduct: 'מוצר:',
    select: 'בחר',
    none: 'אין',
    selectFamilyHint: 'בחר משפחת מוצר.',
    formWillBeAdded: 'פרטי הטופס יתווספו בשלב הבא.',
    baseGalaxyFormActive: 'טופס בסיס Galaxy פעיל',
    productForm: 'טופס מוצר',
    companySaved: 'פרטי החברה נשמרו.',
    companyCleared: 'פרטי החברה נמחקו.',
    newRequestOpened: 'בקשה חדשה נפתחה.',
    pdfCreated: 'PDF נוצר.',
    shareOpened: 'חלון השיתוף נפתח.',
    shareUnsupported: 'דפדפן זה אינו תומך בשיתוף קבצים. ה-PDF הורד.',
    shareCancelled: 'השיתוף בוטל או אינו נתמך.'
  }
};

Object.assign(I18N.en, {
  'Motorlu': 'Motorized',
  'Manuel': 'Manual'
});

Object.assign(I18N.tr, {
  'Motorlu': 'Motorlu',
  'Manuel': 'Manuel',
  'Project Details': 'Proje Bilgileri',
  'Color Details': 'Renk Bilgileri',
  'Motor & Remote Control': 'Motor ve Kumanda',
  'Panel Options': 'Panel Seçenekleri',
  'Lighting': 'Aydınlatma',
  'Light Dimmers': 'Işık Dimmerleri',
  'Lighting & Dimmers': 'Aydınlatma & Dimmerler',
  'Lighting & Dimmer': 'Aydınlatma & Dimmer',
  'Sensors': 'Sensörler',
  'Heater & Packaging': 'Isıtıcı ve Ambalaj',
  'Colours / System': 'Renkler / Sistem',
  'Technical Selections': 'Teknik Seçimler',
  'Additional Accessories': 'Ek Aksesuarlar',
  'Selected': 'Seçilen',
  'Width': 'Genişlik',
  'Projection (mm)': 'Açılım',
  'Projection': 'Projeksiyon',
  'Height (Top of The Gutter)': 'Yükseklik (Oluk Üstü)',
  'System Quantity': 'Sistem Adedi',
  'System Color': 'Sistem Rengi',
  'Panel Color': 'Panel Rengi',
  'Motor': 'Motor',
  'Remote Control': 'Kumanda',
  'Panel Isolation': 'Panel İzolasyonu',
  'Light Dimmer (For Linear LED)': 'Işık Dimmeri (Linear LED için)',
  'Light Dimmer (For Spot LED)': 'Işık Dimmeri (Spot LED için)',
  'Rain Sensor': 'Yağmur Sensörü',
  'Vibration Sensor': 'Titreşim Sensörü',
  'Wind Sensor': 'Rüzgar Sensörü',
  'Wind & Sun Sensor': 'Rüzgar ve Güneş Sensörü',
  'Heater 2000W 220V Quantity': 'Isıtıcı 2000W 220V Adedi',
  'Heater 3000W 220V Quantity': 'Isıtıcı 3000W 220V Adedi',
  'Packaging Type': 'Ambalaj Tipi',
  'Quantity': 'Adet',
  'Front H': 'Ön H',
  'Back H': 'Arka H',
  'Back Beam': 'Arka Kiriş',
  'Side Beam': 'Yan Kiriş',
  'Beam For': 'Kiriş İçin',
  'Structure': 'Konstrüksiyon',
  'Pergola Fabric': 'Pergola Kumaşı',
  'Screen Fabric': 'Screen Kumaşı',
  'Louver Blade': 'Panel Kanadı',
  'Panel': 'Panel',
  'Installation Type': 'Montaj Tipi',
  'Glass Type': 'Cam Tipi',
  'Electric Power': 'Elektrik Gücü',
  'Manual Crank Operation': 'Manuel Kol Operasyonu',
  'Wall': 'Duvar',
  'Ceiling': 'Tavan',
  'Freestanding': 'Serbest Durum',
  'None': 'Yok',
  'Tempered Laminated': 'Temperli Lamine',
  'Clear Tempered': 'Şeffaf Temperli',
  'Clear Tempered + Air Space': 'Şeffaf Temperli + Hava Boşluğu',
  'Included': 'Dahil',
  'Not Included': 'Dahil Değil',
  'Manual': 'Manuel',
  'No': 'Hayır',
  'Yes': 'Evet',
  '1 Channel': '1 Kanal',
  '2 Channel': '2 Kanal',
  '4 Channel': '4 Kanal',
  '16 Channel': '16 Kanal',
  'Wooden Box': 'Ahşap Kasa',
  'Heavy-Duty Nylon': 'Havalı Kalın Naylon',
  'Search code or name': 'Kod veya ad ara',
  'No results found': 'Sonuç bulunamadı',
  'Daylight': 'Gün Işığı',
  'White': 'Beyaz',
  'Spot': 'Spot',
  'Linear': 'Lineer',
  'RGB': 'RGB',
  'Light on the Gutter (Linear LED)': 'Oluk Üzeri Aydınlatma (Linear LED)',
  'Light on the Gutter (Linear RGB)': 'Oluk Üzeri Aydınlatma (Linear RGB)',
  'Light on the Panel (Spot LED)': 'Panel Üzeri Aydınlatma (Spot LED)',
  'Sound System': 'Ses Sistemi',
  'Dimmer Light': 'Dimmerli Işık',
  '2000W Heater': '2000W Isıtıcı',
  '3000W Heater': '3000W Isıtıcı',
  'Dimmer Heater': 'Dimmerli Isıtıcı',
  'Louver Insulation': 'Panel İzolasyonu',
  'Vibration Sensor': 'Titreşim Sensörü',
  'Perde': 'Perde'
});

Object.assign(I18N.de, {
  'Motorlu': 'Motorisiert',
  'Manuel': 'Manuell',
  'Project Details': 'Projektdaten',
  'Color Details': 'Farbdaten',
  'Motor & Remote Control': 'Motor und Fernbedienung',
  'Panel Options': 'Panel-Optionen',
  'Lighting': 'Beleuchtung',
  'Light Dimmers': 'Lichtdimmer',
  'Lighting & Dimmers': 'Beleuchtung & Dimmer',
  'Lighting & Dimmer': 'Beleuchtung & Dimmer',
  'Sensors': 'Sensoren',
  'Heater & Packaging': 'Heizung und Verpackung',
  'Colours / System': 'Farben / System',
  'Technical Selections': 'Technische Auswahl',
  'Additional Accessories': 'Zusätzliches Zubehör',
  'Selected': 'Ausgewählt',
  'Search code or name': 'Code oder Namen suchen',
  'No results found': 'Keine Ergebnisse gefunden',
  'Heavy-Duty Nylon': 'Luftpolster-Starknylon',
  'Width': 'Breite',
  'Projection': 'Ausladung',
  'Height (Top of The Gutter)': 'Höhe (Oberkante Rinne)',
  'System Quantity': 'Systemanzahl',
  'System Color': 'Systemfarbe',
  'Panel Color': 'Panelfarbe',
  'Motor': 'Motor',
  'Remote Control': 'Fernbedienung',
  'Panel Isolation': 'Panelisolierung',
  'Quantity': 'Menge',
  'Structure': 'Struktur',
  'Panel': 'Panel',
  'Installation Type': 'Montageart',
  'Glass Type': 'Glasart',
  'Electric Power': 'Stromversorgung',
  'Manual Crank Operation': 'Manuelle Kurbelbedienung',
  'Wall': 'Wand',
  'Ceiling': 'Decke',
  'Freestanding': 'Freistehend',
  'None': 'Keine',
  'Included': 'Enthalten',
  'Not Included': 'Nicht enthalten',
  'Manual': 'Manuell',
  'No': 'Nein',
  'Yes': 'Ja',
  'Wooden Box': 'Holzkiste',
  'Heavy-Duty Nylon': 'Hochbelastbares Nylon',
  'Daylight': 'Tageslicht',
  'White': 'Weiß',
  'Sound System': 'Soundsystem',
  'Dimmer Light': 'Dimmerlicht',
  'Wind Sensor': 'Windsensor',
  'Vibration Sensor': 'Vibrationssensor',
  'Perde': 'Vorhang'
});

Object.assign(I18N.fr, {
  'Motorlu': 'Motorisé',
  'Manuel': 'Manuel',
  'Project Details': 'Détails du projet',
  'Color Details': 'Détails des couleurs',
  'Motor & Remote Control': 'Moteur et télécommande',
  'Panel Options': 'Options de panneau',
  'Lighting': 'Éclairage',
  'Light Dimmers': 'Variateurs de lumière',
  'Lighting & Dimmers': 'Éclairage & variateurs',
  'Lighting & Dimmer': 'Éclairage & variateur',
  'Sensors': 'Capteurs',
  'Heater & Packaging': 'Chauffage et emballage',
  'Colours / System': 'Couleurs / Système',
  'Technical Selections': 'Sélections techniques',
  'Additional Accessories': 'Accessoires supplémentaires',
  'Selected': 'Sélectionné',
  'Search code or name': 'Rechercher code ou nom',
  'No results found': 'Aucun résultat trouvé',
  'Heavy-Duty Nylon': 'Nylon épais à bulles',
  'Width': 'Largeur',
  'Projection': 'Projection',
  'Height (Top of The Gutter)': 'Hauteur (haut de gouttière)',
  'System Quantity': 'Quantité système',
  'System Color': 'Couleur système',
  'Panel Color': 'Couleur panneau',
  'Motor': 'Moteur',
  'Remote Control': 'Télécommande',
  'Panel Isolation': 'Isolation panneau',
  'Quantity': 'Quantité',
  'Structure': 'Structure',
  'Panel': 'Panneau',
  'Installation Type': 'Type d’installation',
  'Glass Type': 'Type de verre',
  'Electric Power': 'Alimentation électrique',
  'Manual Crank Operation': 'Manivelle manuelle',
  'Wall': 'Mur',
  'Ceiling': 'Plafond',
  'Freestanding': 'Autoportant',
  'None': 'Aucun',
  'Included': 'Inclus',
  'Not Included': 'Non inclus',
  'Manual': 'Manuel',
  'No': 'Non',
  'Yes': 'Oui',
  'Wooden Box': 'Caisse en bois',
  'Heavy-Duty Nylon': 'Nylon renforcé',
  'Daylight': 'Lumière du jour',
  'White': 'Blanc',
  'Sound System': 'Système audio',
  'Dimmer Light': 'Lumière avec variateur',
  'Wind Sensor': 'Capteur de vent',
  'Vibration Sensor': 'Capteur de vibration',
  'Perde': 'Rideau'
});

Object.assign(I18N.he, {
  'Motorlu': 'ממונע',
  'Manuel': 'ידני',
  'Project Details': 'פרטי פרויקט',
  'Color Details': 'פרטי צבע',
  'Motor & Remote Control': 'מנוע ושלט',
  'Panel Options': 'אפשרויות פנל',
  'Lighting': 'תאורה',
  'Light Dimmers': 'עמעמי תאורה',
  'Lighting & Dimmers': 'תאורה ועמעמים',
  'Lighting & Dimmer': 'תאורה ועמעם',
  'Sensors': 'חיישנים',
  'Heater & Packaging': 'חימום ואריזה',
  'Colours / System': 'צבעים / מערכת',
  'Technical Selections': 'בחירות טכניות',
  'Additional Accessories': 'אביזרים נוספים',
  'Selected': 'נבחר',
  'Search code or name': 'חפש קוד או שם',
  'No results found': 'לא נמצאו תוצאות',
  'Heavy-Duty Nylon': 'ניילון עבה בועתי',
  'Width': 'רוחב',
  'Projection': 'עומק',
  'Height (Top of The Gutter)': 'גובה (ראש המרזב)',
  'System Quantity': 'כמות מערכות',
  'System Color': 'צבע מערכת',
  'Panel Color': 'צבע פנל',
  'Motor': 'מנוע',
  'Remote Control': 'שלט',
  'Panel Isolation': 'בידוד פנל',
  'Quantity': 'כמות',
  'Structure': 'מבנה',
  'Panel': 'פנל',
  'Installation Type': 'סוג התקנה',
  'Glass Type': 'סוג זכוכית',
  'Electric Power': 'מתח חשמלי',
  'Manual Crank Operation': 'הפעלה ידנית',
  'Wall': 'קיר',
  'Ceiling': 'תקרה',
  'Freestanding': 'עצמאי',
  'None': 'אין',
  'Included': 'כלול',
  'Not Included': 'לא כלול',
  'Manual': 'ידני',
  'No': 'לא',
  'Yes': 'כן',
  'Wooden Box': 'ארגז עץ',
  'Heavy-Duty Nylon': 'ניילון מחוזק',
  'Daylight': 'אור יום',
  'White': 'לבן',
  'Sound System': 'מערכת שמע',
  'Dimmer Light': 'תאורה עם דימר',
  'Wind Sensor': 'חיישן רוח',
  'Vibration Sensor': 'חיישן רטט',
  'Perde': 'וילון'
});

Object.assign(I18N.en, {
  'Heater & Sound & Packing': 'Heater & Sound & Packing',
  'Sound System Quantity': 'Sound System Quantity',
  'Dimmer Heater Quantity': 'Dimmer Heater Quantity'
});

Object.assign(I18N.tr, {
  'Heater & Sound & Packing': 'Is\u0131t\u0131c\u0131, Ses ve Ambalaj',
  'Sound System Quantity': 'Ses Sistemi Adedi',
  'Dimmer Heater Quantity': 'Dimmerli Is\u0131t\u0131c\u0131 Adedi'
});

Object.assign(I18N.de, {
  'Heater & Sound & Packing': 'Heizung, Soundsystem und Verpackung',
  'Sound System Quantity': 'Soundsystem-Anzahl',
  'Dimmer Heater': 'Heizungsdimmer',
  'Dimmer Heater Quantity': 'Heizungsdimmer-Anzahl'
});

Object.assign(I18N.fr, {
  'Heater & Sound & Packing': 'Chauffage, son et emballage',
  'Sound System Quantity': 'Quantit\u00e9 du syst\u00e8me audio',
  'Dimmer Heater': 'Variateur de chauffage',
  'Dimmer Heater Quantity': 'Quantit\u00e9 de variateurs de chauffage'
});

Object.assign(I18N.he, {
  'Heater & Sound & Packing': '\u05d7\u05d9\u05de\u05d5\u05dd, \u05e9\u05de\u05e2 \u05d5\u05d0\u05e8\u05d9\u05d6\u05d4',
  'Sound System Quantity': '\u05db\u05de\u05d5\u05ea \u05de\u05e2\u05e8\u05db\u05d5\u05ea \u05e9\u05de\u05e2',
  'Dimmer Heater': '\u05d3\u05d9\u05de\u05e8 \u05dc\u05d7\u05d9\u05de\u05d5\u05dd',
  'Dimmer Heater Quantity': '\u05db\u05de\u05d5\u05ea \u05d3\u05d9\u05de\u05e8\u05d9\u05dd \u05dc\u05d7\u05d9\u05de\u05d5\u05dd'
});

Object.assign(I18N.tr, {
  '1 Channel': '1 Kanal',
  '2 Channels': '2 Kanal',
  '4 Channels': '4 Kanal',
  '6 Channels': '6 Kanal',
  '16 Channels': '16 Kanal'
});

Object.assign(I18N.de, {
  '1 Channel': '1 Kanal',
  '2 Channels': '2 Kan\u00e4le',
  '4 Channels': '4 Kan\u00e4le',
  '6 Channels': '6 Kan\u00e4le',
  '16 Channels': '16 Kan\u00e4le'
});

Object.assign(I18N.fr, {
  '1 Channel': '1 canal',
  '2 Channels': '2 canaux',
  '4 Channels': '4 canaux',
  '6 Channels': '6 canaux',
  '16 Channels': '16 canaux'
});

Object.assign(I18N.he, {
  '1 Channel': '1 \u05e2\u05e8\u05d5\u05e5',
  '2 Channels': '2 \u05e2\u05e8\u05d5\u05e6\u05d9\u05dd',
  '4 Channels': '4 \u05e2\u05e8\u05d5\u05e6\u05d9\u05dd',
  '6 Channels': '6 \u05e2\u05e8\u05d5\u05e6\u05d9\u05dd',
  '16 Channels': '16 \u05e2\u05e8\u05d5\u05e6\u05d9\u05dd'
});

Object.assign(I18N.en, {
  formActive: 'Form active',
  'Colours': 'Colours',
  'Finish': 'Finish',
  'Glossy': 'Glossy',
  'Matt': 'Matt',
  'Texture': 'Texture',
  'Product Quantity': 'Product Quantity',
  'Motor Direction': 'Motor Direction',
  'Parapet H': 'Parapet H',
  'Side Beam': 'Side Beam',
  'Connection': 'Connection',
  'Left': 'Left',
  'Right': 'Right',
  'Both': 'Both',
  'Fabric': 'Fabric',
  'Fabric Profile': 'Fabric Profile',
  'Other': 'Other',
  'Other Lighting': 'Other Lighting',
  'Dimmer': 'Dimmer'
});

Object.assign(I18N.tr, {
  formActive: 'Form aktif',
  'Colours': 'Renkler',
  'Finish': 'Y\u00fczey',
  'Glossy': 'Parlak',
  'Matt': 'Mat',
  'Texture': 'Texture',
  'Product Quantity': '\u00dcr\u00fcn Adedi',
  'Motor Direction': 'Motor Y\u00f6n\u00fc',
  'Parapet H': 'Parapet Y\u00fcksekli\u011fi',
  'Side Beam': 'Yan Kiri\u015f',
  'Connection': 'Ba\u011flant\u0131',
  'Left': 'Sol',
  'Right': 'Sa\u011f',
  'Both': 'Her \u0130kisi',
  'Fabric': 'Kuma\u015f',
  'Fabric Profile': 'Kuma\u015f Profili',
  'Other': 'Di\u011fer',
  'Other Lighting': 'Di\u011fer Ayd\u0131nlatma',
  'Dimmer': 'Dimmer',
  'Front H': '\u00d6n H',
  'Back H': 'Arka H'
});

Object.assign(I18N.de, {
  formActive: 'Formular aktiv',
  'Colours': 'Farben',
  'Finish': 'Oberfl\u00e4che',
  'Glossy': 'Gl\u00e4nzend',
  'Matt': 'Matt',
  'Texture': 'Textur',
  'Product Quantity': 'Produktmenge',
  'Motor Direction': 'Motorseite',
  'Parapet H': 'Br\u00fcstungsh\u00f6he',
  'Side Beam': 'Seitentr\u00e4ger',
  'Connection': 'Anschluss',
  'Left': 'Links',
  'Right': 'Rechts',
  'Both': 'Beide',
  'Fabric': 'Stoff',
  'Fabric Profile': 'Stoffprofil',
  'Other': 'Andere',
  'Other Lighting': 'Andere Beleuchtung',
  'Dimmer': 'Dimmer',
  'Front H': 'H\u00f6he vorne',
  'Back H': 'H\u00f6he hinten'
});

Object.assign(I18N.fr, {
  formActive: 'Formulaire actif',
  'Colours': 'Couleurs',
  'Finish': 'Finition',
  'Glossy': 'Brillant',
  'Matt': 'Mat',
  'Texture': 'Texture',
  'Product Quantity': 'Quantit\u00e9 de produits',
  'Motor Direction': 'C\u00f4t\u00e9 du moteur',
  'Parapet H': 'Hauteur d\u2019all\u00e8ge',
  'Side Beam': 'Poutre lat\u00e9rale',
  'Connection': 'Raccordement',
  'Left': 'Gauche',
  'Right': 'Droite',
  'Both': 'Les deux',
  'Fabric': 'Toile',
  'Fabric Profile': 'Profil de toile',
  'Other': 'Autre',
  'Other Lighting': 'Autre \u00e9clairage',
  'Dimmer': 'Variateur',
  'Front H': 'Hauteur avant',
  'Back H': 'Hauteur arri\u00e8re'
});

Object.assign(I18N.he, {
  formActive: '\u05d8\u05d5\u05e4\u05e1 \u05e4\u05e2\u05d9\u05dc',
  'Colours': '\u05e6\u05d1\u05e2\u05d9\u05dd',
  'Finish': '\u05d2\u05d9\u05de\u05d5\u05e8',
  'Glossy': '\u05de\u05d1\u05e8\u05d9\u05e7',
  'Matt': '\u05de\u05d8',
  'Texture': '\u05d8\u05e7\u05e1\u05d8\u05d5\u05e8\u05d4',
  'Product Quantity': '\u05db\u05de\u05d5\u05ea \u05de\u05d5\u05e6\u05e8\u05d9\u05dd',
  'Motor Direction': '\u05e6\u05d3 \u05d4\u05de\u05e0\u05d5\u05e2',
  'Parapet H': '\u05d2\u05d5\u05d1\u05d4 \u05de\u05e2\u05e7\u05d4',
  'Side Beam': '\u05e7\u05d5\u05e8\u05ea \u05e6\u05d3',
  'Connection': '\u05d7\u05d9\u05d1\u05d5\u05e8',
  'Left': '\u05e9\u05de\u05d0\u05dc',
  'Right': '\u05d9\u05de\u05d9\u05df',
  'Both': '\u05e9\u05e0\u05d9\u05d4\u05dd',
  'Fabric': '\u05d1\u05d3',
  'Fabric Profile': '\u05e4\u05e8\u05d5\u05e4\u05d9\u05dc \u05d1\u05d3',
  'Other': '\u05d0\u05d7\u05e8',
  'Other Lighting': '\u05ea\u05d0\u05d5\u05e8\u05d4 \u05d0\u05d7\u05e8\u05ea',
  'Dimmer': '\u05d3\u05d9\u05de\u05e8',
  'Front H': '\u05d2\u05d5\u05d1\u05d4 \u05e7\u05d3\u05de\u05d9',
  'Back H': '\u05d2\u05d5\u05d1\u05d4 \u05d0\u05d7\u05d5\u05e8\u05d9'
});

Object.assign(I18N.en, {
  'Add New Position': 'Add New Position',
  'Remove Last Position': 'Remove Last Position',
  'Delete': 'Delete',
  'Position': 'Position'
});

Object.assign(I18N.tr, {
  'Add New Position': 'Yeni Poz Ekle',
  'Remove Last Position': 'Son Pozu Sil',
  'Delete': 'Sil',
  'Position': 'Poz'
});

Object.assign(I18N.de, {
  'Add New Position': 'Neue Position hinzuf\u00fcgen',
  'Position': 'Position'
});

Object.assign(I18N.fr, {
  'Add New Position': 'Ajouter une position',
  'Remove Last Position': 'Supprimer la dernière position',
  'Delete': 'Supprimer',
  'Position': 'Position'
});

Object.assign(I18N.he, {
  'Add New Position': '\u05d4\u05d5\u05e1\u05e3 \u05de\u05d9\u05e7\u05d5\u05dd',
  'Position': '\u05de\u05d9\u05e7\u05d5\u05dd'
});

Object.assign(I18N.en, {
  'Select Code': 'Select Code',
  'Select Color': 'Select Color',
  'Select Fabric': 'Select Fabric',
  'Rising Standart': 'Rising Standart',
  'All Rall Code': 'All Rall Code',
  'Same as System Color': 'Same as System Color',
  'Enter System Color First': 'Enter System Color First',
  'Color Chart': 'Color Chart',
  'Fabric Selection': 'Fabric Selection',
  'Color Chart Help': 'Select a color from the list. If it is not listed, close this panel and write the color code manually.',
  'Fabric Selection Help': 'Select a fabric from the list. If it is not listed, close this panel and write the fabric code manually.',
  'Close': 'Close'
});

Object.assign(I18N.tr, {
  'Select Code': 'Kod Se\u00e7',
  'Select Color': 'Renk Se\u00e7',
  'Select Fabric': 'Kuma\u015f Se\u00e7',
  'Rising Standart': 'Rising Standart',
  'All Rall Code': 'All Rall Code',
  'Same as System Color': 'System rengiyle ayn\u0131',
  'Enter System Color First': '\u00d6nce sistem rengini yaz\u0131n',
  'Color Chart': 'Renk Kartelas\u0131',
  'Fabric Selection': 'Kuma\u015f Se\u00e7imi',
  'Color Chart Help': 'Listeden bir renk se\u00e7in. Renk yoksa bu paneli kapat\u0131p renk kodunu manuel yaz\u0131n.',
  'Fabric Selection Help': 'Listeden bir kuma\u015f se\u00e7in. Kuma\u015f yoksa bu paneli kapat\u0131p kuma\u015f kodunu manuel yaz\u0131n.',
  'Close': 'Kapat'
});

Object.assign(I18N.de, {
  'Select Code': 'Code waehlen',
  'Select Color': 'Farbe waehlen',
  'Select Fabric': 'Stoff waehlen',
  'Rising Standart': 'Rising Standart',
  'All Rall Code': 'All Rall Code',
  'Same as System Color': 'Wie Systemfarbe',
  'Enter System Color First': 'Zuerst Systemfarbe eingeben',
  'Color Chart': 'Farbkarte',
  'Fabric Selection': 'Stoffauswahl',
  'Color Chart Help': 'Waehlen Sie eine Farbe aus der Liste. Wenn sie nicht vorhanden ist, schliessen Sie dieses Fenster und schreiben Sie den Farbcode manuell.',
  'Fabric Selection Help': 'Waehlen Sie einen Stoff aus der Liste. Wenn er nicht vorhanden ist, schliessen Sie dieses Fenster und schreiben Sie den Stoffcode manuell.',
  'Close': 'Schliessen'
});

Object.assign(I18N.fr, {
  'Select Code': 'Choisir code',
  'Select Color': 'Choisir couleur',
  'Select Fabric': 'Choisir toile',
  'Rising Standart': 'Rising Standart',
  'All Rall Code': 'All Rall Code',
  'Same as System Color': 'Comme couleur systeme',
  'Enter System Color First': 'Saisir d abord la couleur systeme',
  'Color Chart': 'Nuancier',
  'Fabric Selection': 'Selection de toile',
  'Color Chart Help': 'Choisissez une couleur dans la liste. Si elle manque, fermez cette fenetre et saisissez le code couleur manuellement.',
  'Fabric Selection Help': 'Choisissez une toile dans la liste. Si elle manque, fermez cette fenetre et saisissez le code toile manuellement.',
  'Close': 'Fermer'
});

Object.assign(I18N.he, {
  'Select Code': '\u05d1\u05d7\u05e8 \u05e7\u05d5\u05d3',
  'Select Color': '\u05d1\u05d7\u05e8 \u05e6\u05d1\u05e2',
  'Select Fabric': '\u05d1\u05d7\u05e8 \u05d1\u05d3',
  'Rising Standart': 'Rising Standart',
  'All Rall Code': 'All Rall Code',
  'Same as System Color': '\u05d6\u05d4\u05d4 \u05dc\u05e6\u05d1\u05e2 \u05d4\u05de\u05e2\u05e8\u05db\u05ea',
  'Enter System Color First': '\u05d4\u05d6\u05df \u05ea\u05d7\u05d9\u05dc\u05d4 \u05e6\u05d1\u05e2 \u05de\u05e2\u05e8\u05db\u05ea',
  'Color Chart': '\u05de\u05e0\u05d9\u05e4\u05ea \u05e6\u05d1\u05e2\u05d9\u05dd',
  'Fabric Selection': '\u05d1\u05d7\u05d9\u05e8\u05ea \u05d1\u05d3',
  'Color Chart Help': '\u05d1\u05d7\u05e8 \u05e6\u05d1\u05e2 \u05de\u05d4\u05e8\u05e9\u05d9\u05de\u05d4. \u05d0\u05dd \u05d4\u05e6\u05d1\u05e2 \u05dc\u05d0 \u05de\u05d5\u05e4\u05d9\u05e2, \u05e1\u05d2\u05d5\u05e8 \u05d0\u05ea \u05d4\u05d7\u05dc\u05d5\u05df \u05d5\u05d4\u05d6\u05df \u05e7\u05d5\u05d3 \u05e6\u05d1\u05e2 \u05d9\u05d3\u05e0\u05d9\u05ea.',
  'Fabric Selection Help': '\u05d1\u05d7\u05e8 \u05d1\u05d3 \u05de\u05d4\u05e8\u05e9\u05d9\u05de\u05d4. \u05d0\u05dd \u05d4\u05d1\u05d3 \u05dc\u05d0 \u05de\u05d5\u05e4\u05d9\u05e2, \u05e1\u05d2\u05d5\u05e8 \u05d0\u05ea \u05d4\u05d7\u05dc\u05d5\u05df \u05d5\u05d4\u05d6\u05df \u05e7\u05d5\u05d3 \u05d1\u05d3 \u05d9\u05d3\u05e0\u05d9\u05ea.',
  'Close': '\u05e1\u05d2\u05d5\u05e8'
});


Object.assign(I18N.en, {
  '40 Channels': '40 Channels',
  'Heater & Sound & Packing': 'Heater, Sound, Packing & Loading',
  'Loading': 'Loading',
  'Truck': 'Truck',
  'Container': 'Container',
  'Water Outlet Detail': 'Water Outlet Detail',
  'Water Outlet Direction': 'Water Outlet Direction',
  'Pipe Length': 'Pipe Length',
  'Pipe Length Other': 'Pipe Length Other',
  'From Post': 'From Post',
  'From Gutter': 'From Gutter',
  'Front': 'Front',
  'Side': 'Side',
  'Standard': 'Standard',
  'Rising Standart': 'Rising Standard',
  'All Rall Code': 'All RAL Codes',
  'White Texture': 'White Texture',
  'Cream Texture': 'Cream Texture',
  'White Glossy': 'White Glossy',
  'Cream Matt': 'Cream Matt',
  'Dark Grey Matt': 'Dark Grey Matt',
  'White 3D Texture': 'White 3D Texture',
  'Cream 3D Texture': 'Cream 3D Texture',
  'Silver 3D Texture': 'Silver 3D Texture',
  'Dark Grey 3D Texture': 'Dark Grey 3D Texture',
  'Anthracite 3D Texture': 'Anthracite 3D Texture',
  'Black 3D Texture': 'Black 3D Texture',
  'Blue 3D Texture': 'Blue 3D Texture',
  'White Thermofoam': 'White Thermofoam',
  'Grey Thermofoam': 'Grey Thermofoam',
  'Matt Finish': 'Matt Finish',
  'Wood Transfer': 'Wood Transfer'
});

Object.assign(I18N.tr, {
  '40 Channels': '40 Kanal',
  'Heater & Sound & Packing': 'Isıtıcı, Ses, Ambalaj ve Yükleme',
  'Loading': 'Yükleme',
  'Truck': 'Tır',
  'Container': 'Konteyner',
  'Water Outlet Detail': 'Su Çıkış Detayı',
  'Water Outlet Direction': 'Su Çıkış Yönü',
  'Pipe Length': 'Boru Uzunluğu',
  'Pipe Length Other': 'Diğer Boru Uzunluğu',
  'From Post': 'Dikmeden',
  'From Gutter': 'Oluktan',
  'Front': 'Önden',
  'Side': 'Yandan',
  'Standard': 'Standart',
  'Rising Standart': 'Rising Standart',
  'All Rall Code': 'Tüm RAL Kodları',
  'White Texture': 'Beyaz Texture',
  'Cream Texture': 'Krem Texture',
  'White Glossy': 'Beyaz Parlak',
  'Cream Matt': 'Krem Mat',
  'Dark Grey Matt': 'Koyu Gri Mat',
  'White 3D Texture': 'Beyaz 3D Texture',
  'Cream 3D Texture': 'Krem 3D Texture',
  'Silver 3D Texture': 'Gümüş 3D Texture',
  'Dark Grey 3D Texture': 'Koyu Gri 3D Texture',
  'Anthracite 3D Texture': 'Antrasit 3D Texture',
  'Black 3D Texture': 'Siyah 3D Texture',
  'Blue 3D Texture': 'Mavi 3D Texture',
  'White Thermofoam': 'Beyaz Thermofoam',
  'Grey Thermofoam': 'Gri Thermofoam',
  'Matt Finish': 'Mat Yüzey',
  'Wood Transfer': 'Ahşap Transfer'
});

Object.assign(I18N.de, {
  '40 Channels': '40 Kanäle',
  'Heater & Sound & Packing': 'Heizung, Sound, Verpackung und Verladung',
  'Loading': 'Verladung',
  'Truck': 'Lkw',
  'Container': 'Container',
  'Water Outlet Detail': 'Wasserablaufdetail',
  'Water Outlet Direction': 'Wasserablaufrichtung',
  'Pipe Length': 'Rohrlänge',
  'Pipe Length Other': 'Andere Rohrlänge',
  'From Post': 'Durch Pfosten',
  'From Gutter': 'Durch Rinne',
  'Front': 'Vorne',
  'Side': 'Seitlich',
  'Standard': 'Standard',
  'Rising Standart': 'Rising Standard',
  'All Rall Code': 'Alle RAL-Codes',
  'White Texture': 'Weiße Textur',
  'Cream Texture': 'Creme Textur',
  'White Glossy': 'Weiß glänzend',
  'Cream Matt': 'Creme matt',
  'Dark Grey Matt': 'Dunkelgrau matt',
  'White 3D Texture': 'Weiße 3D-Textur',
  'Cream 3D Texture': 'Creme 3D-Textur',
  'Silver 3D Texture': 'Silberne 3D-Textur',
  'Dark Grey 3D Texture': 'Dunkelgraue 3D-Textur',
  'Anthracite 3D Texture': 'Anthrazit 3D-Textur',
  'Black 3D Texture': 'Schwarze 3D-Textur',
  'Blue 3D Texture': 'Blaue 3D-Textur',
  'White Thermofoam': 'Weißer Thermofoam',
  'Grey Thermofoam': 'Grauer Thermofoam',
  'Matt Finish': 'Matte Oberfläche',
  'Wood Transfer': 'Holztransfer'
});

Object.assign(I18N.fr, {
  '40 Channels': '40 canaux',
  'Heater & Sound & Packing': 'Chauffage, son, emballage et chargement',
  'Loading': 'Chargement',
  'Truck': 'Camion',
  'Container': 'Conteneur',
  'Water Outlet Detail': 'Détail de sortie d’eau',
  'Water Outlet Direction': 'Direction de sortie d’eau',
  'Pipe Length': 'Longueur de tuyau',
  'Pipe Length Other': 'Autre longueur de tuyau',
  'From Post': 'Par poteau',
  'From Gutter': 'Par gouttière',
  'Front': 'Avant',
  'Side': 'Côté',
  'Standard': 'Standard',
  'Rising Standart': 'Standard Rising',
  'All Rall Code': 'Tous les codes RAL',
  'White Texture': 'Texture blanche',
  'Cream Texture': 'Texture crème',
  'White Glossy': 'Blanc brillant',
  'Cream Matt': 'Crème mat',
  'Dark Grey Matt': 'Gris foncé mat',
  'White 3D Texture': 'Texture 3D blanche',
  'Cream 3D Texture': 'Texture 3D crème',
  'Silver 3D Texture': 'Texture 3D argent',
  'Dark Grey 3D Texture': 'Texture 3D gris foncé',
  'Anthracite 3D Texture': 'Texture 3D anthracite',
  'Black 3D Texture': 'Texture 3D noire',
  'Blue 3D Texture': 'Texture 3D bleue',
  'White Thermofoam': 'Thermofoam blanc',
  'Grey Thermofoam': 'Thermofoam gris',
  'Matt Finish': 'Finition mate',
  'Wood Transfer': 'Transfert bois'
});

Object.assign(I18N.he, {
  '40 Channels': '40 ערוצים',
  'Heater & Sound & Packing': 'חימום, שמע, אריזה וטעינה',
  'Loading': 'טעינה',
  'Truck': 'משאית',
  'Container': 'מכולה',
  'Water Outlet Detail': 'פרטי יציאת מים',
  'Water Outlet Direction': 'כיוון יציאת מים',
  'Pipe Length': 'אורך צינור',
  'Pipe Length Other': 'אורך צינור אחר',
  'From Post': 'דרך עמוד',
  'From Gutter': 'דרך מרזב',
  'Front': 'חזית',
  'Side': 'צד',
  'Standard': 'סטנדרטי',
  'Rising Standart': 'Rising Standard',
  'All Rall Code': 'כל קודי RAL',
  'White Texture': 'טקסטורה לבנה',
  'Cream Texture': 'טקסטורה קרם',
  'White Glossy': 'לבן מבריק',
  'Cream Matt': 'קרם מט',
  'Dark Grey Matt': 'אפור כהה מט',
  'White 3D Texture': 'טקסטורת 3D לבנה',
  'Cream 3D Texture': 'טקסטורת 3D קרם',
  'Silver 3D Texture': 'טקסטורת 3D כסופה',
  'Dark Grey 3D Texture': 'טקסטורת 3D אפור כהה',
  'Anthracite 3D Texture': 'טקסטורת 3D אנתרציט',
  'Black 3D Texture': 'טקסטורת 3D שחורה',
  'Blue 3D Texture': 'טקסטורת 3D כחולה',
  'White Thermofoam': 'תרמופום לבן',
  'Grey Thermofoam': 'תרמופום אפור',
  'Matt Finish': 'גימור מט',
  'Wood Transfer': 'העברת עץ'
});

// C43 language cleanup: placeholders, common options and product form terms.
Object.assign(I18N.en, {
  'Enter value': 'Enter value',
  '2 Channels': '2 Channels',
  '4 Channels': '4 Channels',
  '6 Channels': '6 Channels',
  '16 Channels': '16 Channels',
  '40 Channels': '40 Channels',
  'Back Beam': 'Back Beam',
  'Beam For': 'Beam For',
  'Pergola Fabric': 'Pergola Fabric',
  'Screen Fabric': 'Screen Fabric',
  'Louver Blade': 'Louver Blade',
  'Dimmer Heater': 'Dimmer Heater',
  'Light on the Gutter (Linear LED)': 'Light on the Gutter (Linear LED)',
  'Light on the Gutter (Linear RGB)': 'Light on the Gutter (Linear RGB)',
  'Light on the Panel (Spot LED)': 'Light on the Panel (Spot LED)',
  'Panel Isolation': 'Panel Isolation',
  'Wind & Sun Sensor': 'Wind & Sun Sensor',
  'Rising Standart': 'Rising Standard',
  'All Rall Code': 'All RAL Codes'
});

Object.assign(I18N.tr, {
  'Enter value': 'Değer girin',
  '2 Channels': '2 Kanal',
  '4 Channels': '4 Kanal',
  '6 Channels': '6 Kanal',
  '16 Channels': '16 Kanal',
  '40 Channels': '40 Kanal',
  'Back Beam': 'Arka Kiriş',
  'Beam For': 'Kiriş İçin',
  'Pergola Fabric': 'Pergola Kumaşı',
  'Screen Fabric': 'Screen Kumaşı',
  'Louver Blade': 'Panel Kanadı',
  'Dimmer Heater': 'Dimmerli Isıtıcı',
  'Light on the Gutter (Linear LED)': 'Oluk Üzeri Aydınlatma (Linear LED)',
  'Light on the Gutter (Linear RGB)': 'Oluk Üzeri Aydınlatma (Linear RGB)',
  'Light on the Panel (Spot LED)': 'Panel Üzeri Aydınlatma (Spot LED)',
  'Panel Isolation': 'Panel İzolasyonu',
  'Wind & Sun Sensor': 'Rüzgar ve Güneş Sensörü',
  'Rising Standart': 'Rising Standart',
  'All Rall Code': 'Tüm RAL Kodları',
  'T-Motion 350 (Somfy Rts) (120°)': 'T-Motion 350 (Somfy Rts) (120°)',
  'T-Motion 300 (Somfy Rts) (90°)': 'T-Motion 300 (Somfy Rts) (90°)'
});

Object.assign(I18N.de, {
  'Enter value': 'Wert eingeben',
  '2 Channels': '2 Kanäle',
  '4 Channels': '4 Kanäle',
  '6 Channels': '6 Kanäle',
  '16 Channels': '16 Kanäle',
  '40 Channels': '40 Kanäle',
  'Back Beam': 'Hinterer Träger',
  'Beam For': 'Träger für',
  'Pergola Fabric': 'Pergolastoff',
  'Screen Fabric': 'Screen-Stoff',
  'Louver Blade': 'Lamelle',
  'Dimmer Heater': 'Heizungsdimmer',
  'Light on the Gutter (Linear LED)': 'Licht an der Rinne (Linear LED)',
  'Light on the Gutter (Linear RGB)': 'Licht an der Rinne (Linear RGB)',
  'Light on the Panel (Spot LED)': 'Licht am Panel (Spot LED)',
  'Panel Isolation': 'Panelisolierung',
  'Wind & Sun Sensor': 'Wind- und Sonnensensor',
  'Remove Last Position': 'Letzte Position löschen',
  'Delete': 'Löschen',
  'Rising Standart': 'Rising Standard',
  'All Rall Code': 'Alle RAL-Codes'
});

Object.assign(I18N.fr, {
  'Enter value': 'Saisir une valeur',
  '2 Channels': '2 canaux',
  '4 Channels': '4 canaux',
  '6 Channels': '6 canaux',
  '16 Channels': '16 canaux',
  '40 Channels': '40 canaux',
  'Back Beam': 'Poutre arrière',
  'Beam For': 'Poutre pour',
  'Pergola Fabric': 'Toile de pergola',
  'Screen Fabric': 'Toile screen',
  'Louver Blade': 'Lame orientable',
  'Dimmer Heater': 'Variateur chauffage',
  'Light on the Gutter (Linear LED)': 'Éclairage sur gouttière (LED linéaire)',
  'Light on the Gutter (Linear RGB)': 'Éclairage sur gouttière (RGB linéaire)',
  'Light on the Panel (Spot LED)': 'Éclairage sur panneau (spot LED)',
  'Panel Isolation': 'Isolation panneau',
  'Wind & Sun Sensor': 'Capteur vent et soleil',
  'Rising Standart': 'Standard Rising',
  'All Rall Code': 'Tous les codes RAL'
});

Object.assign(I18N.he, {
  'Enter value': 'הזן ערך',
  '2 Channels': '2 ערוצים',
  '4 Channels': '4 ערוצים',
  '6 Channels': '6 ערוצים',
  '16 Channels': '16 ערוצים',
  '40 Channels': '40 ערוצים',
  'Back Beam': 'קורה אחורית',
  'Beam For': 'קורה עבור',
  'Pergola Fabric': 'בד פרגולה',
  'Screen Fabric': 'בד מסך',
  'Louver Blade': 'להב רפפה',
  'Dimmer Heater': 'דימר לחימום',
  'Light on the Gutter (Linear LED)': 'תאורה על המרזב (LED ליניארי)',
  'Light on the Gutter (Linear RGB)': 'תאורה על המרזב (RGB ליניארי)',
  'Light on the Panel (Spot LED)': 'תאורה על הפנל (Spot LED)',
  'Panel Isolation': 'בידוד פנל',
  'Wind & Sun Sensor': 'חיישן רוח ושמש',
  'Remove Last Position': 'מחק מיקום אחרון',
  'Delete': 'מחק',
  'Rising Standart': 'Rising Standard',
  'All Rall Code': 'כל קודי RAL'
});



// C47 final language and lighting cleanup.
Object.assign(I18N.en, {
  enterValue: 'Enter value',
  'Linear LED': 'Linear LED',
  'Linear RGB': 'Linear RGB',
  'Spot LED': 'Spot LED',
  'Linear Rgb+White': 'Linear Rgb+White',
  'Other': 'Other',
  'Other Lighting': 'Other Lighting'
});
Object.assign(I18N.tr, {
  enterValue: 'Değer girin',
  'Linear LED': 'Linear LED',
  'Linear RGB': 'Linear RGB',
  'Spot LED': 'Spot LED',
  'Linear Rgb+White': 'Linear Rgb+White',
  'Other': 'Diğer',
  'Other Lighting': 'Diğer Aydınlatma'
});
Object.assign(I18N.de, {
  enterValue: 'Wert eingeben',
  'Linear LED': 'Linear LED',
  'Linear RGB': 'Linear RGB',
  'Spot LED': 'Spot LED',
  'Linear Rgb+White': 'Linear Rgb+White',
  'Other': 'Andere',
  'Other Lighting': 'Andere Beleuchtung'
});
Object.assign(I18N.fr, {
  enterValue: 'Saisir une valeur',
  'Linear LED': 'LED linéaire',
  'Linear RGB': 'RGB linéaire',
  'Spot LED': 'Spot LED',
  'Linear Rgb+White': 'Linear Rgb+White',
  'Other': 'Autre',
  'Other Lighting': 'Autre éclairage'
});
Object.assign(I18N.he, {
  enterValue: 'הזן ערך',
  'Linear LED': 'LED ליניארי',
  'Linear RGB': 'RGB ליניארי',
  'Spot LED': 'Spot LED',
  'Linear Rgb+White': 'Linear Rgb+White',
  'Other': 'אחר',
  'Other Lighting': 'תאורה אחרת'
});


// C47 final override: make generated placeholders and simplified lighting labels language-safe.
Object.assign(I18N.en, {
  enterValue: 'Enter value',
  'Enter value': 'Enter value',
  'Select Code': 'Select Code',
  'Select Fabric': 'Select Fabric',
  'Linear LED': 'Linear LED',
  'Linear RGB': 'Linear RGB',
  'Linear Rgb+White': 'Linear Rgb+White',
  'Spot LED': 'Spot LED',
  'Other': 'Other',
  'Other Lighting': 'Other Lighting'
});
Object.assign(I18N.tr, {
  enterValue: 'Değer girin',
  'Enter value': 'Değer girin',
  'Select Code': 'Kod Seç',
  'Select Fabric': 'Kumaş Seç',
  'Linear LED': 'Linear LED',
  'Linear RGB': 'Linear RGB',
  'Linear Rgb+White': 'Linear Rgb+White',
  'Spot LED': 'Spot LED',
  'Other': 'Diğer',
  'Other Lighting': 'Diğer Aydınlatma'
});
Object.assign(I18N.de, {
  enterValue: 'Wert eingeben',
  'Enter value': 'Wert eingeben',
  'Select Code': 'Code auswählen',
  'Select Fabric': 'Stoff auswählen',
  'Linear LED': 'Linear LED',
  'Linear RGB': 'Linear RGB',
  'Linear Rgb+White': 'Linear Rgb+White',
  'Spot LED': 'Spot LED',
  'Other': 'Andere',
  'Other Lighting': 'Andere Beleuchtung'
});
Object.assign(I18N.fr, {
  enterValue: 'Saisir une valeur',
  'Enter value': 'Saisir une valeur',
  'Select Code': 'Sélectionner le code',
  'Select Fabric': 'Sélectionner le tissu',
  'Linear LED': 'LED linéaire',
  'Linear RGB': 'RGB linéaire',
  'Linear Rgb+White': 'Linear Rgb+White',
  'Spot LED': 'Spot LED',
  'Other': 'Autre',
  'Other Lighting': 'Autre éclairage'
});
Object.assign(I18N.he, {
  enterValue: 'הזן ערך',
  'Enter value': 'הזן ערך',
  'Select Code': 'בחר קוד',
  'Select Fabric': 'בחר בד',
  'Linear LED': 'LED ליניארי',
  'Linear RGB': 'RGB ליניארי',
  'Linear Rgb+White': 'Linear Rgb+White',
  'Spot LED': 'Spot LED',
  'Other': 'אחר',
  'Other Lighting': 'תאורה אחרת'
});

const fields = {
  companyName: $('#companyName'),
  contactPerson: $('#contactPerson'),
  phone: $('#phone'),
  email: $('#email'),
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

let autoAdvanceTimer = null;

function mobileAutoAdvanceEnabled() {
  return window.matchMedia('(max-width: 860px)').matches;
}

function elementIsVisible(el) {
  if (!el || el.hidden || el.disabled) return false;
  if (el.closest('[hidden]')) return false;
  const style = window.getComputedStyle(el);
  return style.display !== 'none' && style.visibility !== 'hidden' && el.getClientRects().length > 0;
}

function autoAdvanceContainerFor(el) {
  if (!el) return null;
  return el.closest('.choice-field, .checkbox-grid, .product-select-grid > label, #companySection .grid > label, #orderSection .grid > label, #formArea .grid > label, .notes-input, label');
}

function autoAdvanceContainers() {
  const selectors = [
    '#companySection .grid > label',
    '#orderSection .grid > label',
    '#productSection .product-select-grid > label',
    '#formArea .grid > label',
    '#formArea .choice-field',
    '#formArea .checkbox-grid',
    '.notes-input'
  ].join(', ');
  return $$(selectors).filter(elementIsVisible);
}

function scheduleAutoAdvance(source) {
  if (!mobileAutoAdvanceEnabled()) return;
  if (document.body.classList.contains('modal-open')) return;
  const current = autoAdvanceContainerFor(source);
  if (!current) return;
  clearTimeout(autoAdvanceTimer);
  autoAdvanceTimer = setTimeout(() => {
    const items = autoAdvanceContainers();
    const index = items.indexOf(current);
    const target = index >= 0 ? items[index + 1] : null;
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 180);
}

function shouldAutoAdvanceForControl(control) {
  if (!control) return false;
  const tag = String(control.tagName || '').toLowerCase();
  const type = String(control.type || '').toLowerCase();
  if (tag === 'textarea') return true;
  if (tag === 'select') return true;
  if (type === 'radio') return !control.closest('.checkbox-grid');
  if (type === 'checkbox') return !control.closest('.checkbox-grid');
  if (['text', 'number', 'date', 'email', 'tel', 'search'].includes(type)) return true;
  return false;
}

function autoAdvanceOnChange(event) {
  const control = event.currentTarget || event.target;
  if (!shouldAutoAdvanceForControl(control)) return;
  scheduleAutoAdvance(control.customSelectButton || control);
}

function autoAdvanceOnEnter(event) {
  const control = event.currentTarget || event.target;
  if (event.key !== 'Enter') return;
  if (String(control.tagName || '').toLowerCase() === 'textarea') return;
  if (!shouldAutoAdvanceForControl(control)) return;
  event.preventDefault();
  control.blur();
  scheduleAutoAdvance(control.customSelectButton || control);
}

function safeId(text) {
  return String(text).toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
}

function t(key, lang = state.language) {
  return I18N[lang]?.[key] ?? I18N.en[key] ?? key;
}

function translatedText(text, lang = state.language) {
  return I18N[lang]?.[text] ?? I18N.en[text] ?? text;
}

function translatedOption(option, lang = state.language) {
  return option === '' ? t('select', lang) : translatedText(option, lang);
}

function translatedList(values, lang = state.language) {
  return values.length ? values.map((value) => translatedText(value, lang)).join(', ') : '-';
}

function translatedCompositeText(value, lang = state.language) {
  const clean = String(value ?? '').trim();
  if (!clean.includes('|')) return translatedText(clean, lang);
  const parts = clean.split('|');
  const code = parts.shift().trim();
  const description = parts.join('|').trim();
  return `${code} | ${translatedText(description, lang)}`;
}


// C52 Janela Cassette Awning translations and picker labels.
Object.assign(I18N.en, {
  'Awning Details': 'Awning Details',
  'Arm Plastic Color': 'Arm Plastic Color',
  'Fabric Color': 'Fabric Color',
  'Control Type': 'Control Type',
  'Button Control': 'Button Control',
  'Remote Control': 'Remote Control',
  'Valance & Printing': 'Valance & Printing',
  'Valance Type': 'Valance Type',
  'Straight': 'Straight',
  'Wavy': 'Wavy',
  'Valance Height': 'Valance Height',
  'Valance Fabric': 'Valance Fabric',
  'Print Placement': 'Print Placement',
  'Valance': 'Valance',
  'Body': 'Body',
  'Valance and Body': 'Valance and Body',
  'Print Color': 'Print Color',
  'Print Color Selection': 'Print Color Selection',
  'Print Color Selection Help': 'Select a print color from the list or type a custom color manually.',
  'One Sided Roof': 'One Sided Roof',
  'Roof Color': 'Roof Color',
  'Roof Finish': 'Roof Finish',
  'Additional Options': 'Additional Options',
  'Motor & Reducer': 'Motor & Reducer',
  'Dimmer For Light': 'Dimmer For Light',
  'Crank Handle Length': 'Crank Handle Length',
  'Gearbox Direction': 'Gearbox Direction',
  'Compatible Sensor': 'Compatible Sensor',
  'Compatible Sensor & Remote Control': 'Compatible Sensor & Remote Control',
  'Projection 1 (mm)': 'Projection 1',
  'Projection 2 (mm)': 'Projection 2',
  'Motor Direction 1': 'Motor Direction 1',
  'Motor Direction 2': 'Motor Direction 2',
  'Gearbox Direction 1': 'Gearbox Direction 1',
  'Gearbox Direction 2': 'Gearbox Direction 2',
  'Same side as Direction 1': 'Same side as Direction 1',
  'Opposite side of Direction 1': 'Opposite side of Direction 1',
  'Şanzımanlı': 'Gearbox',
  'Packing': 'Packing',
  'Kraft': 'Kraft',
  'Air Bubble Wrap': 'Air Bubble Wrap',
  'Yok': 'No',
  'Var': 'Yes',
  'Black': 'Black',
  'Brown': 'Brown',
  '0001 White': '0001 White',
  '0020 Black': '0020 Black',
  '1987 Cream': '1987 Cream',
  '2040 Turquoise': '2040 Turquoise',
  '056 Pistachio Green': '056 Pistachio Green',
  '1003 Red': '1003 Red',
  'Gold Gilding': 'Gold Gilding',
  'Silver Gilding': 'Silver Gilding'
});
Object.assign(I18N.tr, {
  'Awning Details': 'Tente Bilgileri',
  'Arm Plastic Color': 'Kollardaki Plastik Rengi',
  'Fabric Color': 'Kumaş Rengi',
  'Control Type': 'Kontrol Şekli',
  'Button Control': 'Düğmeli',
  'Remote Control': 'Kumandalı',
  'Valance & Printing': 'Saçak ve Yazı',
  'Valance Type': 'Saçak Çeşidi',
  'Straight': 'Düz',
  'Wavy': 'Dalgalı',
  'Valance Height': 'Saçak Yüksekliği',
  'Valance Fabric': 'Saçak Kumaş Rengi',
  'Print Placement': 'Yazı Çeşidi',
  'Valance': 'Saçak',
  'Body': 'Gövde',
  'Valance and Body': 'Saçak ve Gövde',
  'Print Color': 'Yazı Rengi',
  'Print Color Selection': 'Yazı Rengi Seçimi',
  'Print Color Selection Help': 'Listeden yazı rengini seçin veya listede yoksa manuel yazın.',
  'One Sided Roof': 'Tek Taraflı Çatı',
  'Roof Color': 'Çatı Rengi',
  'Roof Finish': 'Çatı Yüzeyi',
  'Additional Options': 'Ek Seçenekler',
  'Motor & Reducer': 'Motor & Redüktör',
  'Dimmer For Light': 'Dimmer For Light',
  'Crank Handle Length': 'Çevirme Kolu Uzunluğu',
  'Gearbox Direction': 'Şanzıman Yönü',
  'Compatible Sensor': 'Uyumlu Algılayıcı',
  'Compatible Sensor & Remote Control': 'Uyumlu Algılayıcı & Kumanda',
  'Projection 1 (mm)': 'Açılım 1',
  'Projection 2 (mm)': 'Açılım 2',
  'Motor Direction 1': 'Motor Yönü 1',
  'Motor Direction 2': 'Motor Yönü 2',
  'Gearbox Direction 1': 'Şanzıman Yönü 1',
  'Gearbox Direction 2': 'Şanzıman Yönü 2',
  'Same side as Direction 1': '1. yön ile aynı tarafta',
  'Opposite side of Direction 1': '1. yön ile ters tarafta',
  'Şanzımanlı': 'Şanzımanlı',
  'Packing': 'Paketleme',
  'Kraft': 'Kraft',
  'Air Bubble Wrap': 'Havalı Naylon',
  'Yok': 'Yok',
  'Var': 'Var',
  'Black': 'Siyah',
  'Brown': 'Kahve',
  '0001 White': '0001 Beyaz',
  '0020 Black': '0020 Siyah',
  '1987 Cream': '1987 Krem',
  '2040 Turquoise': '2040 Turkuaz',
  '056 Pistachio Green': '056 Fıstık Yeşili',
  '1003 Red': '1003 Kırmızı',
  'Gold Gilding': 'Sarı Yaldız',
  'Silver Gilding': 'Gümüş Yaldız'
});

let activePickerInput = null;
let activePickerKind = 'color';
let activeColorCatalogId = 'rising-standart';
let activeFabricCatalogId = 'sauleda';
let activePickerSearch = '';

const JANELA_AWNING_PRODUCT_IDS = new Set([
  'janela_cassette_awning',
  'pars_cassette_awning',
  'pars_plus_cassette_awning',
  'pars_plus_luxe_cassette_awning',
  'moonlight_classic_awning_motorlu',
  'moonlight_classic_awning_sanzimanli',
  'sunshine_classic_awning_motorlu',
  'sunshine_classic_awning_sanzimanli',
  'twins_classic_awning_motorlu',
  'twins_classic_awning_sanzimanli',
  'zip_screen_sun_store',
  'zip_screen_sky_screen',
  'zip_screen_manuel_store'
]);

const ZIP_SCREEN_FABRIC_PRODUCT_IDS = new Set([
  'zip_screen_sun_store',
  'zip_screen_manuel_store',
  'zip_screen_sky_screen'
]);

const GLASS_FOLDING_A_SERIES_PRODUCT_IDS = new Set([
  'glass_folding_a_series_premium'
]);

const JANELA_AWNING_LIMITS = {
  janela_cassette_awning: { maxWidth: 4000, projectionLtWidth: false },
  pars_cassette_awning: { maxWidth: 5000, projectionLtWidth: true },
  pars_plus_cassette_awning: { maxWidth: 7000, projectionLtWidth: true },
  pars_plus_luxe_cassette_awning: { maxWidth: 7000, projectionLtWidth: true },
  moonlight_classic_awning_motorlu: { maxWidth: 7000, projectionLtWidth: true },
  moonlight_classic_awning_sanzimanli: { maxWidth: 7000, projectionLtWidth: true },
  sunshine_classic_awning_motorlu: { maxWidth: 7000, projectionLtWidth: true },
  sunshine_classic_awning_sanzimanli: { maxWidth: 7000, projectionLtWidth: true },
  twins_classic_awning_motorlu: { maxWidth: 7000, projectionLtWidth: true, projectionFields: ['projection1', 'projection2'] },
  twins_classic_awning_sanzimanli: { maxWidth: 7000, projectionLtWidth: true, projectionFields: ['projection1', 'projection2'] },
  zip_screen_sun_store: { maxWidth: 7000, projectionLtWidth: false },
  zip_screen_sky_screen: { maxWidth: 7000, projectionLtWidth: false },
  zip_screen_manuel_store: { maxWidth: 4000, projectionLtWidth: false }
};

function isJanelaAwningProduct(product = getProduct()) {
  return JANELA_AWNING_PRODUCT_IDS.has(product?.id);
}

function isSunStoreAwningProduct(product = getProduct()) {
  return ZIP_SCREEN_FABRIC_PRODUCT_IDS.has(product?.id);
}

function isGlassFoldingASeriesProduct(product = getProduct()) {
  return GLASS_FOLDING_A_SERIES_PRODUCT_IDS.has(product?.id);
}

function colorCatalogs() {
  return Array.isArray(window.PRODUCT_COLOR_CATALOGS) && window.PRODUCT_COLOR_CATALOGS.length
    ? window.PRODUCT_COLOR_CATALOGS
    : [{ id: 'rising-standart', label: 'Rising Standart', options: COLOR_OPTIONS }];
}

function activeColorCatalog() {
  const catalogs = colorCatalogs();
  return catalogs.find((catalog) => catalog.id === activeColorCatalogId) || catalogs[0];
}

function pickerKindForField(field, control) {
  if (field.palette === false) return '';
  const label = String(field.label || '').trim().toLowerCase();
  if (!control || control.tagName !== 'INPUT' || control.type !== 'text') return '';
  if (field.picker) return field.picker;
  if (field.palette === 'fabric' || FABRIC_FIELD_LABELS.has(label)) return 'fabric';
  if (field.palette === true || label.includes('color') || label.includes('colour') || COLOR_FIELD_LABELS.has(label)) return 'color';
  return '';
}

function pickerButtonLabel(kind) {
  return translatedText(kind === 'fabric' ? 'Select Fabric' : 'Select Code');
}

function setInputValueAndNotify(input, value) {
  if (!input) return;
  input.value = value;
  input.dispatchEvent(new Event('input', { bubbles: true }));
  input.dispatchEvent(new Event('change', { bubbles: true }));
}

function setRadioValueAndNotify(fieldId, value) {
  const radio = $$(`input[type="radio"][name="dyn_${fieldId}"]`).find((item) => item.value === value);
  if (!radio) return;
  radio.checked = true;
  radio.dispatchEvent(new Event('change', { bubbles: true }));
}

function currentFabricOptions() {
  const pergoRiseOptions = window.PERGO_RISE_FABRIC_OPTIONS || [];
  if (state.selectedProductId === 'pergo_rise' && pergoRiseOptions.length) {
    return pergoRiseOptions;
  }
  return FABRIC_OPTIONS;
}

function pickerOptions(kind) {
  if (kind === 'fabric') return currentFabricOptions();
  if (kind === 'textColor') return window.JANELA_PRINT_COLOR_OPTIONS || [];
  return activeColorCatalog()?.options || [];
}

const SAULEDA_PAGE_ASSET = (name) => `assets/fabric-pages/sauleda/${name}`;
const SAULEDA_SECTIONS = [
  {
    key: 'plains',
    title: 'Plains',
    layout: 'grid',
    panels: [
      { image: SAULEDA_PAGE_ASSET('plains1_left.jpg'), rows: 4, items: [ ['Plains','Blanco','2042'],['Plains','Natural','2926'],['Plains','Vainilla','2687'],['Plains','Seda','2596'],['Plains','Avena','2296'],['Plains','Siroco','2226'],['Plains','Integral','2838'],['Plains','Coco','3601'] ] },
      { image: SAULEDA_PAGE_ASSET('plains1_right.jpg'), rows: 4, items: [ ['Plains','Marfil','2143'],['Plains','Marmol','1070'],['Plains','Albastro','8157'],['Plains','Beige','2038'],['Plains','Ocre','2180'],['Plains','Teja','2065'],['Plains','Marron','2146'],['Plains','Cafe','2316'] ] },
      { image: SAULEDA_PAGE_ASSET('plains2_left.jpg'), rows: 4, items: [ ['Plains','Amarillo','2013'],['Plains','Naranja','2050'],['Plains','Rioja','2210'],['Plains','Granate','2101'],['Plains','Turkis','2129'],['Plains','Celeste','2066'],['Plains','Marino','2145'],['Plains','Admiral','2051'] ] },
      { image: SAULEDA_PAGE_ASSET('plains2_right.jpg'), rows: 4, items: [ ['Plains','Rojo','2211'],['Plains','Logo Red','1066'],['Plains','Pink','2835'],['Plains','Malva','2119'],['Plains','Indigo','2828'],['Plains','Azul Real','2235'],['Plains','Verde Claro','2246'],['Plains','Eucaliptus','3000'] ] },
      { image: SAULEDA_PAGE_ASSET('plains3_left.jpg'), rows: 3, items: [ ['Plains','Verde','2242'],['Plains','Musgo','2247'],['Plains','Silver','2821'],['Plains','Perla','2979'],['Plains','Mineral','2831'],['Plains','Antracita','8488'] ] },
      { image: SAULEDA_PAGE_ASSET('plains3_right.jpg'), rows: 3, items: [ ['Plains','Tirol','2928'],['Plains','Botella','2245'],['Plains','Piedra','3605'],['Plains','Gris','2102'],['Plains','Grafito','3602'],['Plains','Negro','2170'] ] }
    ]
  },
  {
    key: 'classics',
    title: 'The Classics',
    layout: 'rows',
    panels: [
      { image: SAULEDA_PAGE_ASSET('classics1.jpg'), rows: 5, items: [ ['The Classics','Amarillo N','2015'], ['The Classics','Naranja N','2052'], ['The Classics','Rojo N','2212'], ['The Classics','Azul Real N','2359'], ['The Classics','Botella N','2680'] ] },
      { image: SAULEDA_PAGE_ASSET('classics2.jpg'), rows: 5, items: [ ['The Classics','Ocre X','2641'], ['The Classics','Integral X','2681'], ['The Classics','Piedra X','2682'], ['The Classics','Gris N','2103'], ['The Classics','Negro N','2171'] ] }
    ]
  },
  {
    key: 'fantasy',
    title: 'Fantasy',
    layout: 'rows',
    panels: [
      { image: SAULEDA_PAGE_ASSET('fantasy1.jpg'), rows: 4, items: [ ['Fantasy','Vesubio','2636'], ['Fantasy','Anapurna','2640'], ['Fantasy','St. Andrews','2924'], ['Fantasy','Manchester','2823'] ] },
      { image: SAULEDA_PAGE_ASSET('fantasy2.jpg'), rows: 4, items: [ ['Fantasy','Pirineos','2790'], ['Fantasy','Oslo','2818'], ['Fantasy','Marte','2121'], ['Fantasy','Jamaica','2701'] ] },
      { image: SAULEDA_PAGE_ASSET('fantasy3.jpg'), rows: 4, items: [ ['Fantasy','Balmoral','2921'], ['Fantasy','Miami','2702'], ['Fantasy','Estocolmo','2816'], ['Fantasy','Pluton','2179'] ] },
      { image: SAULEDA_PAGE_ASSET('fantasy4.jpg'), rows: 4, items: [ ['Fantasy','Windsor','2929'], ['Fantasy','Aries','2576'], ['Fantasy','Jalisco','1484'], ['Fantasy','Urban','3608'] ] }
    ]
  },
  {
    key: 'marine',
    title: 'Marine Plus',
    layout: 'grid',
    panels: [
      { image: SAULEDA_PAGE_ASSET('marine1_left.jpg'), rows: 4, items: [ ['Marine Plus','Blanco','2405'], ['Marine Plus','Marfil','2411'], ['Marine Plus','Avena','2451'], ['Marine Plus','Toast','1495'], ['Marine Plus','Vison','2452'], ['Marine Plus','Amarillo','8634'], ['Marine Plus','Indigo','2746'], ['Marine Plus','Arctic','20507'] ] },
      { image: SAULEDA_PAGE_ASSET('marine1_right.jpg'), rows: 4, items: [ ['Marine Plus','Sand','20501'], ['Marine Plus','Integral','2443'], ['Marine Plus','Pergamino','2049B'], ['Marine Plus','Beige','2403'], ['Marine Plus','Rioja','2729'], ['Marine Plus','Granate','2407'], ['Marine Plus','Electric Blue','20664'], ['Marine Plus','Azul Real','2423'] ] },
      { image: SAULEDA_PAGE_ASSET('marine2_left.jpg'), rows: 4, items: [ ['Marine Plus','Azul','2401'], ['Marine Plus','Marino','2413'], ['Marine Plus','Quartz','1613'], ['Marine Plus','Silver','2409'], ['Marine Plus','Piedra','3599'], ['Marine Plus','Gris','2421'], ['Marine Plus','Grafito','2466'], ['Marine Plus','Antracita','2461'] ] },
      { image: SAULEDA_PAGE_ASSET('marine2_right.jpg'), rows: 4, items: [ ['Marine Plus','Armada','2448'], ['Marine Plus','Botella','2488'], ['Marine Plus','Steel','20492'], ['Marine Plus','Perla','2417'], ['Marine Plus','Mineral','2750'], ['Marine Plus','Basalto','20108'], ['Marine Plus','Coal','8660'], ['Marine Plus','Negro','2881'] ] }
    ]
  }
];

function isSauledaFabricMode(kind = activePickerKind) {
  return kind === 'fabric' && isJanelaAwningProduct();
}

function isSunStoreFabricMode(kind = activePickerKind) {
  return kind === 'fabric' && isSunStoreAwningProduct();
}

function isJanelaFabricMode(kind = activePickerKind) {
  return kind === 'fabric' && isJanelaAwningProduct() && !isSunStoreAwningProduct();
}

function isSattlerFabricMode(kind = activePickerKind) {
  return isJanelaFabricMode(kind) && activeFabricCatalogId === 'sattler';
}

function isAcrillaFabricMode(kind = activePickerKind) {
  return isJanelaFabricMode(kind) && activeFabricCatalogId === 'acrilla';
}

function isSauledaCatalogActive(kind = activePickerKind) {
  return isJanelaFabricMode(kind) && activeFabricCatalogId === 'sauleda';
}

function sauledaValue(parts) {
  return parts.filter(Boolean).join(' - ');
}

function hotspotLabelParts(value) {
  const parts = String(value || '').split(' - ').map((part) => part.trim()).filter(Boolean);
  if (parts.length >= 3) {
    return { name: parts[parts.length - 2], code: parts[parts.length - 1] };
  }
  if (parts.length === 2) {
    return { name: parts[0], code: parts[1] };
  }
  return { name: '', code: String(value || '') };
}

function createSauledaHotspot(value, left, top, width, height) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'sauleda-hotspot fabric-page-hotspot';
  btn.style.left = left;
  btn.style.top = top;
  btn.style.width = width;
  btn.style.height = height;
  btn.setAttribute('aria-label', value);
  btn.title = value;
  btn.dataset.value = value;

  // Invisible responsive hotspot: percentages follow the catalog image size.
  if ((activePickerInput?.value || '').trim() === value) btn.classList.add('selected-hotspot');
  btn.addEventListener('click', () => selectPickerOption(value));
  return btn;
}


const SUN_STORE_PAGE_SECTIONS = [
  {
    title: 'Serge Ferrari',
    pages: [
      {
        image: 'assets/fabric-pages/sun-store/sun-store-page-1.jpg',
        items: [
          { value: '7635-52101', left: '52.0362%', top: '2.2805%', width: '39.7059%', height: '14.1961%' },
          { value: '7635-52102', left: '8.2579%', top: '16.5336%', width: '39.5928%', height: '13.9681%' },
          { value: '7635-52103', left: '52.4887%', top: '16.5336%', width: '39.5928%', height: '14.1391%' },
          { value: '7635-52105', left: '8.2579%', top: '30.7868%', width: '39.5928%', height: '14.1961%' },
          { value: '7635-52106', left: '52.2624%', top: '30.7868%', width: '39.5928%', height: '14.1961%' },
          { value: '7635-52107', left: '8.1448%', top: '45.2680%', width: '39.5928%', height: '14.1391%' },
          { value: '7635-52173', left: '52.0362%', top: '45.2109%', width: '39.5928%', height: '14.0251%' },
          { value: '7635-52174', left: '8.3710%', top: '60.0342%', width: '39.5928%', height: '14.0251%' },
          { value: '7635-52176', left: '51.6968%', top: '60.0342%', width: '39.7059%', height: '14.0251%' },
          { value: '7635-52142', left: '8.3710%', top: '76.6819%', width: '38.6878%', height: '14.8233%' },
          { value: '7635-52144', left: '51.6968%', top: '76.6819%', width: '39.5928%', height: '14.1391%' }
        ]
      },
      {
        image: 'assets/fabric-pages/sun-store/sun-store-page-2.jpg',
        items: [
          { value: '92-2044', left: '53.6830%', top: '0.7412%', width: '39.2857%', height: '12.5428%' },
          { value: '92-2135', left: '7.2545%', top: '13.0559%', width: '39.0625%', height: '12.8848%' },
          { value: '92-2171', left: '53.7946%', top: '13.0559%', width: '39.0625%', height: '12.8278%' },
          { value: '92-2043', left: '7.0312%', top: '25.7127%', width: '38.9509%', height: '12.8848%' },
          { value: '92-2047', left: '53.3482%', top: '25.6556%', width: '38.9509%', height: '12.8848%' },
          { value: '86-2044', left: '53.5714%', top: '38.3694%', width: '39.0625%', height: '12.9418%' },
          { value: '86-2135', left: '7.1429%', top: '51.0832%', width: '39.0625%', height: '12.8278%' },
          { value: '86-2171', left: '53.5714%', top: '51.0262%', width: '38.9509%', height: '12.8848%' },
          { value: '86-2043', left: '7.1429%', top: '64.2531%', width: '39.0625%', height: '12.8848%' },
          { value: '86-2047', left: '53.3482%', top: '64.2531%', width: '39.0625%', height: '12.8848%' },
          { value: 'W88-8102', left: '7.1429%', top: '78.1072%', width: '39.0625%', height: '16.1345%' },
          { value: 'W88-2047', left: '53.3482%', top: '78.1072%', width: '39.0625%', height: '16.2486%' }
        ]
      }
    ]
  }
];

function buildSunStorePicker() {
  const list = $('#colorOptionList');
  if (!list) return;
  list.classList.add('sauleda-picker-mode');
  list.innerHTML = '';
  SUN_STORE_PAGE_SECTIONS.forEach((section) => {
    const sectionEl = document.createElement('section');
    sectionEl.className = 'sauleda-section';
    const body = document.createElement('div');
    body.className = 'sattler-page-stack';
    section.pages.forEach((page) => {
      const card = document.createElement('div');
      card.className = 'sattler-page-card';
      const overlay = document.createElement('div');
      overlay.className = 'sauleda-page-overlay';
      const img = document.createElement('img');
      img.src = page.image;
      img.alt = `${section.title} fabric page`;
      img.loading = 'lazy';
      overlay.appendChild(img);
      page.items.forEach((item) => {
        overlay.appendChild(createSauledaHotspot(item.value, item.left, item.top, item.width, item.height));
      });
      card.appendChild(overlay);
      body.appendChild(card);
    });
    sectionEl.appendChild(body);
    list.appendChild(sectionEl);
  });
}

const SATTLER_PAGES = [
  {
    "image": "assets/fabric-pages/sattler-layout/sattler-page-01.jpg",
    "items": [
      {
        "value": "Sattler - China Red - 314 001",
        "left": "3.0909%",
        "top": "1.9619%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Orange - 314 002",
        "left": "51.7273%",
        "top": "1.9619%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Dandelion - 314 003",
        "left": "3.0909%",
        "top": "15.8684%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Jungle - 314 004",
        "left": "51.7273%",
        "top": "15.8684%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Classic Royal Blue - 314 006",
        "left": "3.0909%",
        "top": "29.7750%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Lily - 314 007",
        "left": "51.7273%",
        "top": "29.7750%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Cloud - 314 010",
        "left": "3.0909%",
        "top": "43.6815%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Nautical - 314 011",
        "left": "51.7273%",
        "top": "43.6815%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Mahogany - 314 016",
        "left": "3.0909%",
        "top": "57.5880%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Shell - 314 020",
        "left": "51.7273%",
        "top": "57.5880%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Copper - 314 022",
        "left": "3.0909%",
        "top": "71.4945%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Graphite - 314 028",
        "left": "51.7273%",
        "top": "71.4945%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Fog - 314 030",
        "left": "3.0909%",
        "top": "85.4010%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Camel - 314 040",
        "left": "51.7273%",
        "top": "85.4010%",
        "width": "45.1818%",
        "height": "12.6370%"
      }
    ]
  },
  {
    "image": "assets/fabric-pages/sattler-layout/sattler-page-02.jpg",
    "items": [
      {
        "value": "Sattler - Pigeon - 314 082",
        "left": "3.0909%",
        "top": "1.9619%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Plum - 314 143",
        "left": "51.7273%",
        "top": "1.9619%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Sky - 314 153",
        "left": "3.0909%",
        "top": "15.8684%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Black - 314 154",
        "left": "51.7273%",
        "top": "15.8684%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Forest Green - 314 362",
        "left": "3.0909%",
        "top": "29.7750%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Leaf - 314 396",
        "left": "51.7273%",
        "top": "29.7750%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Magenta - 314 397",
        "left": "3.0909%",
        "top": "43.6815%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Storm Grey - 314 398",
        "left": "51.7273%",
        "top": "43.6815%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Marine - 314 414",
        "left": "3.0909%",
        "top": "57.5880%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Saffron - 314 610",
        "left": "51.7273%",
        "top": "57.5880%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Seagrass - 314 621",
        "left": "3.0909%",
        "top": "71.4945%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Ecru - 314 718",
        "left": "51.7273%",
        "top": "71.4945%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Linen - 314 721",
        "left": "3.0909%",
        "top": "85.4010%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Nutmeg - 314 729",
        "left": "51.7273%",
        "top": "85.4010%",
        "width": "45.1818%",
        "height": "12.6370%"
      }
    ]
  },
  {
    "image": "assets/fabric-pages/sattler-layout/sattler-page-03.jpg",
    "items": [
      {
        "value": "Sattler - Burgundy - 314 763",
        "left": "13.4000%",
        "top": "1.1943%",
        "width": "27.2000%",
        "height": "10.9076%"
      },
      {
        "value": "Sattler - Cave - 314 819",
        "left": "59.3000%",
        "top": "1.1943%",
        "width": "27.3000%",
        "height": "10.9076%"
      },
      {
        "value": "Sattler - Asphalt - 314 840",
        "left": "13.5000%",
        "top": "14.3312%",
        "width": "27.0000%",
        "height": "10.9076%"
      },
      {
        "value": "Sattler - Milky - 314 851",
        "left": "59.4000%",
        "top": "14.3312%",
        "width": "27.2000%",
        "height": "10.9076%"
      },
      {
        "value": "Sattler - Earth - 314 917",
        "left": "13.4000%",
        "top": "27.4682%",
        "width": "27.2000%",
        "height": "10.9873%"
      },
      {
        "value": "Sattler - Scree - 314 941",
        "left": "59.4000%",
        "top": "27.4682%",
        "width": "27.2000%",
        "height": "10.9873%"
      },
      {
        "value": "Sattler - Ivory - 314 E67",
        "left": "14.1000%",
        "top": "40.6847%",
        "width": "26.4000%",
        "height": "10.9076%"
      },
      {
        "value": "Sattler - Sunny - 315 052",
        "left": "13.4000%",
        "top": "57.7229%",
        "width": "27.2000%",
        "height": "10.9076%"
      },
      {
        "value": "Sattler - Checker Board - 315 105",
        "left": "58.7000%",
        "top": "57.7229%",
        "width": "32.0000%",
        "height": "10.9076%"
      },
      {
        "value": "Sattler - Dahlia - 315 167",
        "left": "12.6000%",
        "top": "70.8599%",
        "width": "32.1000%",
        "height": "10.9076%"
      },
      {
        "value": "Sattler - Downtown Grey - 315 352",
        "left": "59.6000%",
        "top": "70.8599%",
        "width": "26.9000%",
        "height": "10.9076%"
      }
    ]
  },
  {
    "image": "assets/fabric-pages/sattler-layout/sattler-page-04.jpg",
    "items": [
      {
        "value": "Sattler - Forever Green - 315 420",
        "left": "3.0909%",
        "top": "2.2107%",
        "width": "45.1818%",
        "height": "14.2393%"
      },
      {
        "value": "Sattler - Boathouse - 315 422",
        "left": "51.7273%",
        "top": "2.2107%",
        "width": "45.1818%",
        "height": "14.2393%"
      },
      {
        "value": "Sattler - Rosewood - 315 550",
        "left": "3.0909%",
        "top": "17.8804%",
        "width": "45.1818%",
        "height": "14.2393%"
      },
      {
        "value": "Sattler - Grove - 320 054",
        "left": "3.0909%",
        "top": "36.5410%",
        "width": "45.1818%",
        "height": "14.2393%"
      },
      {
        "value": "Sattler - Magnolia - 320 099",
        "left": "51.7273%",
        "top": "36.5410%",
        "width": "45.1818%",
        "height": "14.2393%"
      },
      {
        "value": "Sattler - Conch - 320 128",
        "left": "3.0909%",
        "top": "52.2107%",
        "width": "45.1818%",
        "height": "14.2393%"
      },
      {
        "value": "Sattler - Saltwater - 320 234",
        "left": "51.7273%",
        "top": "52.2107%",
        "width": "45.1818%",
        "height": "14.2393%"
      },
      {
        "value": "Sattler - Wooden - 320 253",
        "left": "3.0909%",
        "top": "67.8804%",
        "width": "45.1818%",
        "height": "14.2393%"
      },
      {
        "value": "Sattler - Athena - 320 254",
        "left": "51.7273%",
        "top": "67.8804%",
        "width": "45.1818%",
        "height": "14.2393%"
      },
      {
        "value": "Sattler - Municipal - 320 408",
        "left": "3.0909%",
        "top": "83.5501%",
        "width": "45.1818%",
        "height": "14.2393%"
      },
      {
        "value": "Sattler - Walk - 320 441",
        "left": "51.7273%",
        "top": "83.5501%",
        "width": "45.1818%",
        "height": "14.2393%"
      }
    ]
  },
  {
    "image": "assets/fabric-pages/sattler-layout/sattler-page-05.jpg",
    "items": [
      {
        "value": "Sattler - Sequence - 320 493",
        "left": "3.0909%",
        "top": "1.9619%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Gravity - 320 530",
        "left": "51.7273%",
        "top": "1.9619%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Cruise - 320 555",
        "left": "3.0909%",
        "top": "15.8684%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Echo - 320 614",
        "left": "51.7273%",
        "top": "15.8684%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Ramble - 320 715",
        "left": "3.0909%",
        "top": "29.7750%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Civic - 320 716",
        "left": "51.7273%",
        "top": "29.7750%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Roof Tile - 320 758",
        "left": "3.0909%",
        "top": "43.6815%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Drift - 320 819",
        "left": "51.7273%",
        "top": "43.6815%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Continuum - 320 826",
        "left": "3.0909%",
        "top": "57.5880%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Edge - 320 886",
        "left": "51.7273%",
        "top": "57.5880%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Compass - 320 892",
        "left": "3.0909%",
        "top": "71.4945%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Steel - 320 923",
        "left": "51.7273%",
        "top": "71.4945%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Alloy - 320 954",
        "left": "3.0909%",
        "top": "85.4010%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Zephyr - 320 975",
        "left": "51.7273%",
        "top": "85.4010%",
        "width": "45.1818%",
        "height": "12.6370%"
      }
    ]
  },
  {
    "image": "assets/fabric-pages/sattler-layout/sattler-page-06.jpg",
    "items": [
      {
        "value": "Sattler - Hideaway - 320 976",
        "left": "3.0909%",
        "top": "2.4478%",
        "width": "45.1818%",
        "height": "15.7667%"
      },
      {
        "value": "Sattler - Clarion - 320 990",
        "left": "51.7273%",
        "top": "2.4478%",
        "width": "45.1818%",
        "height": "15.7667%"
      },
      {
        "value": "Sattler - Timber - 320 992",
        "left": "3.0909%",
        "top": "19.7984%",
        "width": "45.1818%",
        "height": "15.7667%"
      },
      {
        "value": "Sattler - Hayfield - 364 203",
        "left": "3.0909%",
        "top": "40.4608%",
        "width": "45.1818%",
        "height": "15.7667%"
      },
      {
        "value": "Sattler - Landskip - 364 598",
        "left": "51.7273%",
        "top": "40.4608%",
        "width": "45.1818%",
        "height": "15.7667%"
      },
      {
        "value": "Sattler - Bliss - 30A 774",
        "left": "3.0909%",
        "top": "61.1231%",
        "width": "45.1818%",
        "height": "15.7667%"
      },
      {
        "value": "Sattler - Blaze - 30A 778",
        "left": "51.7273%",
        "top": "61.1231%",
        "width": "45.1818%",
        "height": "15.7667%"
      },
      {
        "value": "Sattler - Sand - 338 620",
        "left": "3.0909%",
        "top": "81.7855%",
        "width": "45.1818%",
        "height": "15.7667%"
      },
      {
        "value": "Sattler - Gravel - 338 621",
        "left": "51.7273%",
        "top": "81.7855%",
        "width": "45.1818%",
        "height": "15.7667%"
      }
    ]
  },
  {
    "image": "assets/fabric-pages/sattler-layout/sattler-page-07.jpg",
    "items": [
      {
        "value": "Sattler - Sahara - 338 639",
        "left": "3.0909%",
        "top": "1.9619%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Arctic - 338 641",
        "left": "51.7273%",
        "top": "1.9619%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Fjord - 338 644",
        "left": "3.0909%",
        "top": "15.8684%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Ladakh - 338 655",
        "left": "51.7273%",
        "top": "15.8684%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Gobi - 338 658",
        "left": "3.0909%",
        "top": "29.7750%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Pacific - 338 659",
        "left": "51.7273%",
        "top": "29.7750%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Taiga - 338 660",
        "left": "3.0909%",
        "top": "43.6815%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Beach - 338 662",
        "left": "51.7273%",
        "top": "43.6815%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Vulcano - 338 665",
        "left": "3.0909%",
        "top": "57.5880%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Golden Crops - 338 667",
        "left": "51.7273%",
        "top": "57.5880%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Willow - 338 770",
        "left": "3.0909%",
        "top": "71.4945%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Juniper - 338 772",
        "left": "51.7273%",
        "top": "71.4945%",
        "width": "45.1818%",
        "height": "12.6370%"
      },
      {
        "value": "Sattler - Poplar - 338 773",
        "left": "3.0909%",
        "top": "85.4010%",
        "width": "45.1818%",
        "height": "12.6370%"
      }
    ]
  }
];

const ACRILLA_PAGES = [
  {
    "image": "assets/fabric-pages/acrilla/acrilla-page-01.jpg",
    "items": [
      {
        "value": "Acrilla - 100",
        "left": "3.0909%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 149",
        "left": "51.3636%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 113",
        "left": "3.0909%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 147",
        "left": "51.3636%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 143",
        "left": "3.0909%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 117",
        "left": "51.3636%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      }
    ]
  },
  {
    "image": "assets/fabric-pages/acrilla/acrilla-page-02.jpg",
    "items": [
      {
        "value": "Acrilla - 101",
        "left": "3.0909%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 107",
        "left": "51.3636%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 102",
        "left": "3.0909%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 128",
        "left": "51.3636%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 136",
        "left": "3.0909%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 111",
        "left": "51.3636%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      }
    ]
  },
  {
    "image": "assets/fabric-pages/acrilla/acrilla-page-03.jpg",
    "items": [
      {
        "value": "Acrilla - 1203",
        "left": "3.0909%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 142",
        "left": "51.3636%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 103",
        "left": "3.0909%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 308",
        "left": "51.3636%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 144",
        "left": "3.0909%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 112",
        "left": "51.3636%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      }
    ]
  },
  {
    "image": "assets/fabric-pages/acrilla/acrilla-page-04.jpg",
    "items": [
      {
        "value": "Acrilla - 001",
        "left": "3.0909%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 002",
        "left": "51.3636%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 110",
        "left": "3.0909%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 012",
        "left": "51.3636%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 004",
        "left": "3.0909%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 011",
        "left": "51.3636%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      }
    ]
  },
  {
    "image": "assets/fabric-pages/acrilla/acrilla-page-05.jpg",
    "items": [
      {
        "value": "Acrilla - 296",
        "left": "3.0909%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 557",
        "left": "51.3636%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 562",
        "left": "3.0909%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 205",
        "left": "51.3636%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 214",
        "left": "3.0909%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 897",
        "left": "51.3636%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      }
    ]
  },
  {
    "image": "assets/fabric-pages/acrilla/acrilla-page-06.jpg",
    "items": [
      {
        "value": "Acrilla - 563",
        "left": "3.0909%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 380",
        "left": "51.3636%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 207",
        "left": "3.0909%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 532",
        "left": "51.3636%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 843",
        "left": "3.0909%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 367",
        "left": "51.3636%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      }
    ]
  },
  {
    "image": "assets/fabric-pages/acrilla/acrilla-page-07.jpg",
    "items": [
      {
        "value": "Acrilla - 208",
        "left": "3.0909%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 332",
        "left": "51.3636%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 898",
        "left": "3.0909%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 973",
        "left": "51.3636%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 971",
        "left": "3.0909%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 264",
        "left": "51.3636%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      }
    ]
  },
  {
    "image": "assets/fabric-pages/acrilla/acrilla-page-08.jpg",
    "items": [
      {
        "value": "Acrilla - 121",
        "left": "3.0909%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 135",
        "left": "51.3636%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 134",
        "left": "3.0909%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 116",
        "left": "51.3636%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 118",
        "left": "3.0909%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 146",
        "left": "51.3636%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      }
    ]
  },
  {
    "image": "assets/fabric-pages/acrilla/acrilla-page-09.jpg",
    "items": [
      {
        "value": "Acrilla - 1053",
        "left": "3.0909%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 1083",
        "left": "51.3636%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 119",
        "left": "3.0909%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 122",
        "left": "51.3636%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 148",
        "left": "3.0909%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 115",
        "left": "51.3636%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      }
    ]
  },
  {
    "image": "assets/fabric-pages/acrilla/acrilla-page-10.jpg",
    "items": [
      {
        "value": "Acrilla - 109",
        "left": "3.0909%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 438",
        "left": "51.3636%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 145",
        "left": "3.0909%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 114",
        "left": "51.3636%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 104",
        "left": "3.0909%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 1063",
        "left": "51.3636%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      }
    ]
  },
  {
    "image": "assets/fabric-pages/acrilla/acrilla-page-11.jpg",
    "items": [
      {
        "value": "Acrilla - 005",
        "left": "3.0909%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 010",
        "left": "51.3636%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 221",
        "left": "3.0909%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 211",
        "left": "51.3636%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 206",
        "left": "3.0909%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 213",
        "left": "51.3636%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      }
    ]
  },
  {
    "image": "assets/fabric-pages/acrilla/acrilla-page-12.jpg",
    "items": [
      {
        "value": "Acrilla - 224",
        "left": "3.0909%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 746",
        "left": "51.3636%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 375",
        "left": "3.0909%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 225",
        "left": "51.3636%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 531",
        "left": "3.0909%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 212",
        "left": "51.3636%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      }
    ]
  },
  {
    "image": "assets/fabric-pages/acrilla/acrilla-page-13.jpg",
    "items": [
      {
        "value": "Acrilla - 566",
        "left": "3.0909%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 560",
        "left": "51.3636%",
        "top": "3.6403%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 210",
        "left": "3.0909%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 209",
        "left": "51.3636%",
        "top": "35.5460%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 379",
        "left": "3.0909%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      },
      {
        "value": "Acrilla - 561",
        "left": "51.3636%",
        "top": "67.4518%",
        "width": "45.5455%",
        "height": "28.9079%"
      }
    ]
  }
];

function buildSattlerPicker() {
  const list = $('#colorOptionList');
  if (!list) return;
  list.classList.add('sattler-picker-mode');
  list.innerHTML = '';
  const sectionEl = document.createElement('section');
  sectionEl.className = 'sattler-section';
  const head = document.createElement('div');
  head.className = 'sauleda-section-head';
  head.textContent = 'Sattler';
  sectionEl.appendChild(head);

  const body = document.createElement('div');
  body.className = 'sattler-page-stack';
  SATTLER_PAGES.forEach((page) => {
    const card = document.createElement('div');
    card.className = 'sattler-page-card';
    const overlay = document.createElement('div');
    overlay.className = 'sauleda-page-overlay';
    const img = document.createElement('img');
    img.src = page.image;
    img.alt = 'Sattler fabric page';
    img.loading = 'lazy';
    overlay.appendChild(img);
    page.items.forEach((item) => {
      overlay.appendChild(createSauledaHotspot(item.value, item.left, item.top, item.width, item.height));
    });
    card.appendChild(overlay);
    body.appendChild(card);
  });

  sectionEl.appendChild(body);
  list.appendChild(sectionEl);
}


function buildAcrillaPicker() {
  const list = $('#colorOptionList');
  if (!list) return;
  list.classList.add('sattler-picker-mode');
  list.innerHTML = '';
  const sectionEl = document.createElement('section');
  sectionEl.className = 'sattler-section';
  const head = document.createElement('div');
  head.className = 'sauleda-section-head';
  head.textContent = 'Acrilla';
  sectionEl.appendChild(head);

  const body = document.createElement('div');
  body.className = 'sattler-page-stack';
  ACRILLA_PAGES.forEach((page) => {
    const card = document.createElement('div');
    card.className = 'sattler-page-card';
    const overlay = document.createElement('div');
    overlay.className = 'sauleda-page-overlay';
    const img = document.createElement('img');
    img.src = page.image;
    img.alt = 'Acrilla fabric page';
    img.loading = 'lazy';
    overlay.appendChild(img);
    page.items.forEach((item) => {
      overlay.appendChild(createSauledaHotspot(item.value, item.left, item.top, item.width, item.height));
    });
    card.appendChild(overlay);
    body.appendChild(card);
  });

  sectionEl.appendChild(body);
  list.appendChild(sectionEl);
}

const SAULEDA_PAGE_SECTIONS = [
  {
    "title": "Plains",
    "pages": [
      {
        "image": "assets/fabric-pages/sauleda/plains1_left.jpg",
        "items": [
          {
            "value": "Plains - Blanco - 2042",
            "left": "0.0000%",
            "top": "0.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Natural - 2926",
            "left": "50.0000%",
            "top": "0.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Vainilla - 2687",
            "left": "0.0000%",
            "top": "25.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Seda - 2596",
            "left": "50.0000%",
            "top": "25.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Avena - 2296",
            "left": "0.0000%",
            "top": "50.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Siroco - 2226",
            "left": "50.0000%",
            "top": "50.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Integral - 2838",
            "left": "0.0000%",
            "top": "75.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Coco - 3601",
            "left": "50.0000%",
            "top": "75.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          }
        ]
      },
      {
        "image": "assets/fabric-pages/sauleda/plains1_right.jpg",
        "items": [
          {
            "value": "Plains - Marfil - 2143",
            "left": "0.0000%",
            "top": "0.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Marmol - 1070",
            "left": "50.0000%",
            "top": "0.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Albastro - 8157",
            "left": "0.0000%",
            "top": "25.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Beige - 2038",
            "left": "50.0000%",
            "top": "25.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Ocre - 2180",
            "left": "0.0000%",
            "top": "50.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Teja - 2065",
            "left": "50.0000%",
            "top": "50.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Marron - 2146",
            "left": "0.0000%",
            "top": "75.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Cafe - 2316",
            "left": "50.0000%",
            "top": "75.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          }
        ]
      },
      {
        "image": "assets/fabric-pages/sauleda/plains2_left.jpg",
        "items": [
          {
            "value": "Plains - Amarillo - 2013",
            "left": "0.0000%",
            "top": "0.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Naranja - 2050",
            "left": "50.0000%",
            "top": "0.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Rioja - 2210",
            "left": "0.0000%",
            "top": "25.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Granate - 2101",
            "left": "50.0000%",
            "top": "25.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Turkis - 2129",
            "left": "0.0000%",
            "top": "50.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Celeste - 2066",
            "left": "50.0000%",
            "top": "50.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Marino - 2145",
            "left": "0.0000%",
            "top": "75.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Admiral - 2051",
            "left": "50.0000%",
            "top": "75.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          }
        ]
      },
      {
        "image": "assets/fabric-pages/sauleda/plains2_right.jpg",
        "items": [
          {
            "value": "Plains - Rojo - 2211",
            "left": "0.0000%",
            "top": "0.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Logo Red - 1066",
            "left": "50.0000%",
            "top": "0.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Pink - 2835",
            "left": "0.0000%",
            "top": "25.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Malva - 2119",
            "left": "50.0000%",
            "top": "25.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Indigo - 2828",
            "left": "0.0000%",
            "top": "50.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Azul Real - 2235",
            "left": "50.0000%",
            "top": "50.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Verde Claro - 2246",
            "left": "0.0000%",
            "top": "75.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Plains - Eucaliptus - 3000",
            "left": "50.0000%",
            "top": "75.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          }
        ]
      },
      {
        "image": "assets/fabric-pages/sauleda/plains3_left.jpg",
        "items": [
          {
            "value": "Plains - Verde - 2242",
            "left": "0.0000%",
            "top": "0.0000%",
            "width": "50.0000%",
            "height": "33.3333%"
          },
          {
            "value": "Plains - Musgo - 2247",
            "left": "50.0000%",
            "top": "0.0000%",
            "width": "50.0000%",
            "height": "33.3333%"
          },
          {
            "value": "Plains - Silver - 2821",
            "left": "0.0000%",
            "top": "33.3333%",
            "width": "50.0000%",
            "height": "33.3333%"
          },
          {
            "value": "Plains - Perla - 2979",
            "left": "50.0000%",
            "top": "33.3333%",
            "width": "50.0000%",
            "height": "33.3333%"
          },
          {
            "value": "Plains - Mineral - 2831",
            "left": "0.0000%",
            "top": "66.6667%",
            "width": "50.0000%",
            "height": "33.3333%"
          },
          {
            "value": "Plains - Antracita - 8488",
            "left": "50.0000%",
            "top": "66.6667%",
            "width": "50.0000%",
            "height": "33.3333%"
          }
        ]
      },
      {
        "image": "assets/fabric-pages/sauleda/plains3_right.jpg",
        "items": [
          {
            "value": "Plains - Tirol - 2928",
            "left": "0.0000%",
            "top": "0.0000%",
            "width": "50.0000%",
            "height": "33.3333%"
          },
          {
            "value": "Plains - Botella - 2245",
            "left": "50.0000%",
            "top": "0.0000%",
            "width": "50.0000%",
            "height": "33.3333%"
          },
          {
            "value": "Plains - Piedra - 3605",
            "left": "0.0000%",
            "top": "33.3333%",
            "width": "50.0000%",
            "height": "33.3333%"
          },
          {
            "value": "Plains - Gris - 2102",
            "left": "50.0000%",
            "top": "33.3333%",
            "width": "50.0000%",
            "height": "33.3333%"
          },
          {
            "value": "Plains - Grafito - 3602",
            "left": "0.0000%",
            "top": "66.6667%",
            "width": "50.0000%",
            "height": "33.3333%"
          },
          {
            "value": "Plains - Negro - 2170",
            "left": "50.0000%",
            "top": "66.6667%",
            "width": "50.0000%",
            "height": "33.3333%"
          }
        ]
      }
    ]
  },
  {
    "title": "The Classics",
    "pages": [
      {
        "image": "assets/fabric-pages/sauleda/classics1.jpg",
        "items": [
          {
            "value": "The Classics - Amarillo N - 2015",
            "left": "0.0000%",
            "top": "0.0000%",
            "width": "100.0000%",
            "height": "20.0000%"
          },
          {
            "value": "The Classics - Naranja N - 2052",
            "left": "0.0000%",
            "top": "20.0000%",
            "width": "100.0000%",
            "height": "20.0000%"
          },
          {
            "value": "The Classics - Rojo N - 2212",
            "left": "0.0000%",
            "top": "40.0000%",
            "width": "100.0000%",
            "height": "20.0000%"
          },
          {
            "value": "The Classics - Azul Real N - 2359",
            "left": "0.0000%",
            "top": "60.0000%",
            "width": "100.0000%",
            "height": "20.0000%"
          },
          {
            "value": "The Classics - Botella N - 2680",
            "left": "0.0000%",
            "top": "80.0000%",
            "width": "100.0000%",
            "height": "20.0000%"
          }
        ]
      },
      {
        "image": "assets/fabric-pages/sauleda/classics2.jpg",
        "items": [
          {
            "value": "The Classics - Ocre X - 2641",
            "left": "0.0000%",
            "top": "0.0000%",
            "width": "100.0000%",
            "height": "20.0000%"
          },
          {
            "value": "The Classics - Integral X - 2681",
            "left": "0.0000%",
            "top": "20.0000%",
            "width": "100.0000%",
            "height": "20.0000%"
          },
          {
            "value": "The Classics - Piedra X - 2682",
            "left": "0.0000%",
            "top": "40.0000%",
            "width": "100.0000%",
            "height": "20.0000%"
          },
          {
            "value": "The Classics - Gris N - 2103",
            "left": "0.0000%",
            "top": "60.0000%",
            "width": "100.0000%",
            "height": "20.0000%"
          },
          {
            "value": "The Classics - Negro N - 2171",
            "left": "0.0000%",
            "top": "80.0000%",
            "width": "100.0000%",
            "height": "20.0000%"
          }
        ]
      }
    ]
  },
  {
    "title": "Fantasy",
    "pages": [
      {
        "image": "assets/fabric-pages/sauleda/fantasy1.jpg",
        "items": [
          {
            "value": "Fantasy - Vesubio - 2636",
            "left": "0.0000%",
            "top": "0.0000%",
            "width": "100.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Fantasy - Anapurna - 2640",
            "left": "0.0000%",
            "top": "25.0000%",
            "width": "100.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Fantasy - St. Andrews - 2924",
            "left": "0.0000%",
            "top": "50.0000%",
            "width": "100.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Fantasy - Manchester - 2823",
            "left": "0.0000%",
            "top": "75.0000%",
            "width": "100.0000%",
            "height": "25.0000%"
          }
        ]
      },
      {
        "image": "assets/fabric-pages/sauleda/fantasy2.jpg",
        "items": [
          {
            "value": "Fantasy - Pirineos - 2790",
            "left": "0.0000%",
            "top": "0.0000%",
            "width": "100.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Fantasy - Oslo - 2818",
            "left": "0.0000%",
            "top": "25.0000%",
            "width": "100.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Fantasy - Marte - 2121",
            "left": "0.0000%",
            "top": "50.0000%",
            "width": "100.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Fantasy - Jamaica - 2701",
            "left": "0.0000%",
            "top": "75.0000%",
            "width": "100.0000%",
            "height": "25.0000%"
          }
        ]
      },
      {
        "image": "assets/fabric-pages/sauleda/fantasy3.jpg",
        "items": [
          {
            "value": "Fantasy - Balmoral - 2921",
            "left": "0.0000%",
            "top": "0.0000%",
            "width": "100.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Fantasy - Miami - 2702",
            "left": "0.0000%",
            "top": "25.0000%",
            "width": "100.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Fantasy - Estocolmo - 2816",
            "left": "0.0000%",
            "top": "50.0000%",
            "width": "100.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Fantasy - Pluton - 2179",
            "left": "0.0000%",
            "top": "75.0000%",
            "width": "100.0000%",
            "height": "25.0000%"
          }
        ]
      },
      {
        "image": "assets/fabric-pages/sauleda/fantasy4.jpg",
        "items": [
          {
            "value": "Fantasy - Windsor - 2929",
            "left": "0.0000%",
            "top": "0.0000%",
            "width": "100.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Fantasy - Aries - 2576",
            "left": "0.0000%",
            "top": "25.0000%",
            "width": "100.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Fantasy - Jalisco - 1484",
            "left": "0.0000%",
            "top": "50.0000%",
            "width": "100.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Fantasy - Urban - 3608",
            "left": "0.0000%",
            "top": "75.0000%",
            "width": "100.0000%",
            "height": "25.0000%"
          }
        ]
      }
    ]
  },
  {
    "title": "Marine Plus",
    "pages": [
      {
        "image": "assets/fabric-pages/sauleda/marine1_left.jpg",
        "items": [
          {
            "value": "Marine Plus - Blanco - 2405",
            "left": "0.0000%",
            "top": "0.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Marfil - 2411",
            "left": "50.0000%",
            "top": "0.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Avena - 2451",
            "left": "0.0000%",
            "top": "25.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Toast - 1495",
            "left": "50.0000%",
            "top": "25.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Vison - 2452",
            "left": "0.0000%",
            "top": "50.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Amarillo - 8634",
            "left": "50.0000%",
            "top": "50.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Indigo - 2746",
            "left": "0.0000%",
            "top": "75.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Arctic - 20507",
            "left": "50.0000%",
            "top": "75.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          }
        ]
      },
      {
        "image": "assets/fabric-pages/sauleda/marine1_right.jpg",
        "items": [
          {
            "value": "Marine Plus - Sand - 20501",
            "left": "0.0000%",
            "top": "0.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Integral - 2443",
            "left": "50.0000%",
            "top": "0.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Pergamino - 2049B",
            "left": "0.0000%",
            "top": "25.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Beige - 2403",
            "left": "50.0000%",
            "top": "25.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Rioja - 2729",
            "left": "0.0000%",
            "top": "50.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Granate - 2407",
            "left": "50.0000%",
            "top": "50.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Electric Blue - 20664",
            "left": "0.0000%",
            "top": "75.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Azul Real - 2423",
            "left": "50.0000%",
            "top": "75.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          }
        ]
      },
      {
        "image": "assets/fabric-pages/sauleda/marine2_left.jpg",
        "items": [
          {
            "value": "Marine Plus - Azul - 2401",
            "left": "0.0000%",
            "top": "0.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Marino - 2413",
            "left": "50.0000%",
            "top": "0.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Quartz - 1613",
            "left": "0.0000%",
            "top": "25.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Silver - 2409",
            "left": "50.0000%",
            "top": "25.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Piedra - 3599",
            "left": "0.0000%",
            "top": "50.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Gris - 2421",
            "left": "50.0000%",
            "top": "50.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Grafito - 2466",
            "left": "0.0000%",
            "top": "75.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Antracita - 2461",
            "left": "50.0000%",
            "top": "75.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          }
        ]
      },
      {
        "image": "assets/fabric-pages/sauleda/marine2_right.jpg",
        "items": [
          {
            "value": "Marine Plus - Armada - 2448",
            "left": "0.0000%",
            "top": "0.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Botella - 2488",
            "left": "50.0000%",
            "top": "0.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Steel - 20492",
            "left": "0.0000%",
            "top": "25.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Perla - 2417",
            "left": "50.0000%",
            "top": "25.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Mineral - 2750",
            "left": "0.0000%",
            "top": "50.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Basalto - 20108",
            "left": "50.0000%",
            "top": "50.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Coal - 8660",
            "left": "0.0000%",
            "top": "75.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          },
          {
            "value": "Marine Plus - Negro - 2881",
            "left": "50.0000%",
            "top": "75.0000%",
            "width": "50.0000%",
            "height": "25.0000%"
          }
        ]
      }
    ]
  }
];

function buildSauledaPicker() {
  const list = $('#colorOptionList');
  if (!list) return;
  list.classList.add('sauleda-picker-mode');
  list.innerHTML = '';
  SAULEDA_PAGE_SECTIONS.forEach((section) => {
    const sectionEl = document.createElement('section');
    sectionEl.className = 'sauleda-section';
    const head = document.createElement('div');
    head.className = 'sauleda-section-head';
    head.textContent = section.title;
    sectionEl.appendChild(head);
    const body = document.createElement('div');
    body.className = 'sattler-page-stack';
    section.pages.forEach((page) => {
      const card = document.createElement('div');
      card.className = 'sattler-page-card';
      const overlay = document.createElement('div');
      overlay.className = 'sauleda-page-overlay';
      const img = document.createElement('img');
      img.src = page.image;
      img.alt = `${section.title} fabric page`;
      img.loading = 'lazy';
      overlay.appendChild(img);
      page.items.forEach((item) => {
        overlay.appendChild(createSauledaHotspot(item.value, item.left, item.top, item.width, item.height));
      });
      card.appendChild(overlay);
      body.appendChild(card);
    });
    sectionEl.appendChild(body);
    list.appendChild(sectionEl);
  });
}

function renderColorCatalogTabs(kind) {
  const tabs = $('#colorCatalogTabs');
  if (!tabs) return;
  tabs.innerHTML = '';
  if (kind === 'color') {
    tabs.hidden = false;
    colorCatalogs().forEach((catalog) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'color-catalog-tab';
      button.textContent = translatedText(catalog.label);
      button.setAttribute('aria-pressed', String(catalog.id === activeColorCatalogId));
      button.addEventListener('click', () => {
        activeColorCatalogId = catalog.id;
        renderColorCatalogTabs('color');
        buildPickerList('color');
      });
      tabs.appendChild(button);
    });
    return;
  }
  if (isSunStoreFabricMode(kind)) {
    tabs.hidden = true;
    return;
  }
  if (isJanelaFabricMode(kind)) {
    tabs.hidden = false;
    [
      { id: 'sauleda', label: 'Sauleda' },
      { id: 'sattler', label: 'Sattler' },
      { id: 'acrilla', label: 'Acrilla' },
    ].forEach((catalog) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'color-catalog-tab';
      button.textContent = catalog.label;
      button.setAttribute('aria-pressed', String(catalog.id === activeFabricCatalogId));
      button.addEventListener('click', () => {
        activeFabricCatalogId = catalog.id;
        const searchWrap = document.querySelector('.catalog-search-wrap');
        if (searchWrap) searchWrap.hidden = true;
        renderColorCatalogTabs('fabric');
        buildPickerList('fabric');
      });
      tabs.appendChild(button);
    });
    return;
  }
  tabs.hidden = true;
}

function optionSearchText(option) {
  return [option.value, option.code, option.name, option.detail]
    .filter(Boolean)
    .map((part) => String(translatedText(part)).toLowerCase())
    .join(' ');
}

function buildPickerList(kind) {
  const list = $('#colorOptionList');
  if (!list) return;
  list.classList.remove('sauleda-picker-mode', 'sattler-picker-mode', 'acrilla-picker-mode');
  list.innerHTML = '';
  if (isSunStoreFabricMode(kind)) {
    buildSunStorePicker();
    return;
  }
  if (isSauledaCatalogActive(kind)) {
    buildSauledaPicker();
    return;
  }
  if (isSattlerFabricMode(kind)) {
    buildSattlerPicker();
    return;
  }
  if (isAcrillaFabricMode(kind)) {
    buildAcrillaPicker();
    return;
  }
  const query = String(activePickerSearch || '').trim().toLowerCase();
  const options = pickerOptions(kind).filter((option) => {
    if (!query) return true;
    return optionSearchText(option).includes(query);
  });

  if (!options.length) {
    const empty = document.createElement('div');
    empty.className = 'catalog-empty-state';
    empty.textContent = translatedText('No results found');
    list.appendChild(empty);
    return;
  }

  options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'color-option-card';
    button.setAttribute('aria-label', option.value);

    const swatch = document.createElement('span');
    swatch.className = `color-option-swatch ${kind === 'fabric' ? 'fabric-swatch' : ''}`;
    if (option.image) {
      const img = document.createElement('img');
      img.src = window.PRODUCT_IMAGE_ASSETS?.[option.image] || option.image;
      img.alt = option.value;
      img.loading = 'lazy';
      swatch.appendChild(img);
    } else {
      swatch.style.background = option.swatch;
    }

    const textWrap = document.createElement('span');
    textWrap.className = 'color-option-text';

    const code = document.createElement('strong');
    code.textContent = option.code;

    textWrap.appendChild(code);
    if (option.name) {
      const name = document.createElement('span');
      name.textContent = translatedText(option.name);
      textWrap.appendChild(name);
    }
    if (option.detail) {
      const detail = document.createElement('small');
      detail.textContent = translatedText(option.detail);
      textWrap.appendChild(detail);
    }
    button.appendChild(swatch);
    button.appendChild(textWrap);
    button.addEventListener('click', () => selectPickerOption(option.value));
    list.appendChild(button);
  });
}

function openPicker(input, kind = 'color') {
  const modal = $('#colorChartModal');
  if (!modal) return;
  const panel = modal.querySelector('.color-chart-panel');
  activePickerInput = input;
  activePickerKind = kind;
  if (kind === 'color') {
    activeColorCatalogId = colorCatalogs()[0]?.id || 'rising-standart';
  }
  if (panel) panel.classList.toggle('janela-fabric-picker', isJanelaFabricMode(kind));
  const titleKey = kind === 'fabric' ? 'Fabric Selection' : (kind === 'textColor' ? 'Print Color Selection' : 'Color Chart');
  const helpKey = kind === 'fabric' ? 'Fabric Selection Help' : (kind === 'textColor' ? 'Print Color Selection Help' : 'Color Chart Help');
  $('#colorChartTitle').textContent = translatedText(titleKey);
  $('#colorChartHelp').textContent = translatedText(helpKey);
  const searchInput = $('#catalogSearchInput');
  const searchWrap = document.querySelector('.catalog-search-wrap');
  activePickerSearch = '';
  if (searchInput) {
    searchInput.value = '';
    searchInput.placeholder = translatedText('Search code or name');
  }
  if (searchWrap) searchWrap.hidden = (isJanelaFabricMode(kind) || isSunStoreFabricMode(kind));
  renderColorCatalogTabs(kind);
  buildPickerList(kind);
  modal.hidden = false;
  document.body.classList.add('modal-open');
  $('#colorChartClose')?.focus();
}

function closeColorChart() {
  const modal = $('#colorChartModal');
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove('modal-open');
  modal.querySelector('.color-chart-panel')?.classList.remove('janela-fabric-picker');
  const searchWrap = document.querySelector('.catalog-search-wrap');
  if (searchWrap) searchWrap.hidden = false;
  activePickerInput = null;
  activePickerKind = 'color';
  activePickerSearch = '';
}

function markJanelaLinkedManualOverride(control) {
  const fieldId = control?.dataset?.fieldId || '';
  if (['valanceFabric', 'roofColor'].includes(fieldId)) {
    control.dataset.userOverridden = '1';
  }
}

function selectPickerOption(value) {
  const targetInput = activePickerInput;
  markJanelaLinkedManualOverride(targetInput);
  setInputValueAndNotify(targetInput, value);
  toast(`${translatedText('Selected')}: ${value}`);
  closeColorChart();
  scheduleAutoAdvance(targetInput);
}

function copySystemColorToPanel(panelInput) {
  const systemColor = $('#dyn_systemColor')?.value?.trim() || '';
  if (!systemColor) {
    toast(translatedText('Enter System Color First'));
    return;
  }
  setInputValueAndNotify(panelInput, systemColor);
  const systemFinish = getFieldValue({ id: 'systemColorFinish' });
  if (systemFinish) setRadioValueAndNotify('panelColorFinish', systemFinish);
  toast(`${translatedText('Panel Color')}: ${systemColor}`);
  scheduleAutoAdvance(panelInput);
}

function initColorChartModal() {
  const modal = $('#colorChartModal');
  if (!modal) return;
  $$('[data-color-chart-close]').forEach((button) => {
    button.addEventListener('click', closeColorChart);
  });
  $('#catalogSearchInput')?.addEventListener('input', (event) => {
    activePickerSearch = event.target.value || '';
    buildPickerList(activePickerKind);
  });
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeColorChart();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) closeColorChart();
  });
}

function loadLanguage() {
  const saved = localStorage.getItem(STORAGE_LANGUAGE);
  if (LANGUAGE_META[saved]) state.language = saved;
}

function refreshDynamicLanguage() {
  $$('[data-placeholder-i18n]').forEach((el) => {
    el.placeholder = t(el.dataset.placeholderI18n);
  });
  $$('[data-placeholder-key]').forEach((el) => {
    el.placeholder = translatedText(el.dataset.placeholderKey);
  });
  $$('#formArea input, #formArea textarea').forEach((el) => {
    if (el.dataset.placeholderKey === 'Enter value' || el.dataset.placeholderI18n === 'enterValue' || el.placeholder === 'Enter value') {
      el.placeholder = t('enterValue');
      el.dataset.placeholderI18n = 'enterValue';
      delete el.dataset.placeholderKey;
    }
  });
  $$('[data-dynamic-label-key]').forEach((el) => {
    const value = translatedText(el.dataset.dynamicLabelKey);
    if (el.classList.contains('field-label-text') || !el.querySelector('.input-unit-wrap')) {
      el.textContent = value;
      return;
    }
    const textNode = Array.from(el.childNodes).find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    if (textNode) {
      textNode.textContent = value;
    } else {
      el.insertBefore(document.createTextNode(value), el.firstChild);
    }
  });
  $$('.color-picker-btn').forEach((button) => {
    if (button.dataset.pickerKind) {
      const label = pickerButtonLabel(button.dataset.pickerKind);
      button.textContent = label;
      button.setAttribute('aria-label', label);
    }
  });
  $$('.same-as-system-btn').forEach((button) => {
    button.textContent = translatedText('Same as System Color');
    button.setAttribute('aria-label', translatedText('Same as System Color'));
  });
  const searchInput = $('#catalogSearchInput');
  if (searchInput) searchInput.placeholder = translatedText('Search code or name');
  refreshCustomSelects();
}

function applyLanguage() {
  const meta = LANGUAGE_META[state.language] || LANGUAGE_META.en;
  document.documentElement.lang = meta.htmlLang;
  document.documentElement.dir = meta.dir;
  document.title = t('appTitle');
  $$('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  $$('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  $$('.language-tabs button').forEach((button) => {
    const isActive = button.dataset.lang === state.language;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  $('#customSelectClose') && ($('#customSelectClose').textContent = translatedText('Close'));
  refreshDynamicLanguage();
}

function projectPositionKey(product = getProduct()) {
  return product?.id || 'default';
}

function getProjectPositionCount(product = getProduct()) {
  const count = Number(state.projectPositionCounts[projectPositionKey(product)] || 1);
  return Number.isFinite(count) ? Math.max(1, Math.floor(count)) : 1;
}

function setProjectPositionCount(count, product = getProduct()) {
  state.projectPositionCounts[projectPositionKey(product)] = Math.max(1, Math.floor(Number(count) || 1));
}

function positionFieldId(fieldId, positionIndex) {
  return positionIndex === 1 ? fieldId : `${fieldId}__pos${positionIndex}`;
}

function positionedFields(fieldList, positionIndex) {
  return fieldList.map((field) => {
    const positioned = { ...field, id: positionFieldId(field.id, positionIndex) };
    if (field.showWhen) {
      positioned.showWhen = {
        ...field.showWhen,
        field: positionFieldId(field.showWhen.field, positionIndex)
      };
    }
    return positioned;
  });
}

function snapshotDynamicState() {
  return {
    values: getDynamicValues(),
    lighting: getChecked('lighting'),
    accessories: getChecked('accessories')
  };
}

function restoreDynamicState(snapshot) {
  Object.entries(snapshot?.values || {}).forEach(([id, value]) => {
    const radio = $$(`input[type="radio"][name="dyn_${id}"]`).find((x) => x.value === value);
    if (radio) radio.checked = true;
    $$(`input[type="checkbox"][name="dyn_${id}"]`).forEach((x) => { x.checked = x.value === value; });
    const el = $(`#dyn_${id}`);
    if (el) el.value = value;
  });
  setChecked('lighting', snapshot?.lighting || []);
  setChecked('accessories', snapshot?.accessories || []);
  updateAutoUnits();
  updateConditionalFields();
  updateLightingOtherVisibility();
}

function setLanguage(lang) {
  if (!LANGUAGE_META[lang]) return;
  const snapshot = snapshotDynamicState();
  const sameLanguage = lang === state.language;
  state.language = lang;
  localStorage.setItem(STORAGE_LANGUAGE, lang);
  applyLanguage();
  renderProducts();
  renderForm();
  restoreDynamicState(snapshot);
  updatePreview();
}

function getProduct() {
  return DATA.products.find((p) => p.id === state.selectedProductId) || null;
}

function getGroup(product = getProduct()) {
  return product ? DATA.groups[product.group] : null;
}

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

function mergeProductForm(baseForm, override = {}) {
  const merged = cloneData(baseForm);
  Object.entries(override).forEach(([key, value]) => {
    if (key === 'hiddenItems' || key === 'projectDetailsAppend') return;
    merged[key] = cloneData(value);
  });
  if (Array.isArray(merged.projectDetails) && Array.isArray(override.projectDetailsAppend)) {
    merged.projectDetails.push(...cloneData(override.projectDetailsAppend));
  }
  Object.entries(override.hiddenItems || {}).forEach(([key, hiddenIds]) => {
    if (!Array.isArray(merged[key])) return;
    merged[key] = merged[key].filter((item) => {
      const id = typeof item === 'string' ? item : item.id;
      return !hiddenIds.includes(id);
    });
  });
  return merged;
}

function getProductForm(product = getProduct()) {
  if (!product?.formTemplate) return null;
  const baseForm = DATA[product.formTemplate];
  if (!baseForm) return null;
  const variantOverride = DATA.productFormOverrides?.[product.formVariant] || {};
  const productOverride = DATA.productFormOverrides?.[product.id] || {};
  return mergeProductForm(mergeProductForm(baseForm, variantOverride), productOverride);
}

function hasProductForm(product = getProduct()) {
  return Boolean(getProductForm(product));
}

function usesPergolaForm(product = getProduct()) {
  return product?.formTemplate === 'pergolaForm';
}

function optionMarkup(items, selectedId) {
  if (!items.length) return `<option value="" selected>${t('none')}</option>`;
  return [
    `<option value="">${t('select')}</option>`,
    ...items.map((item) => `<option value="${item.id}"${item.id === selectedId ? ' selected' : ''}>${translatedText(item.label)}</option>`)
  ].join('');
}

function treeGroups(familyId = state.selectedFamilyId) {
  return DATA.productTree.groups[familyId] || [];
}

function treeSubGroups(groupId = state.selectedGroupId) {
  return DATA.productTree.subGroups[groupId] || [];
}

function treeLabel(collection, id, lang = state.language) {
  const label = (collection || []).find((item) => item.id === id)?.label || '';
  return translatedText(label, lang);
}

function syncSelectionFromProduct(product = getProduct()) {
  if (!product) return;
  state.selectedFamilyId = product.family || '';
  state.selectedGroupId = product.productGroup || '';
  state.selectedSubGroupId = product.subGroup || '';
}

function updateSelectedProductFromTree() {
  const groups = treeGroups();
  const group = groups.find((item) => item.id === state.selectedGroupId);
  const subGroups = treeSubGroups();
  const subGroup = subGroups.find((item) => item.id === state.selectedSubGroupId);
  const directProductId = subGroup?.productId || (!subGroups.length ? group?.productId : '');
  const product = DATA.products.find((item) => item.id === directProductId)
    || DATA.products.find((item) => (
      item.family === state.selectedFamilyId &&
      item.productGroup === state.selectedGroupId &&
      item.subGroup === state.selectedSubGroupId
    ));
  state.selectedProductId = product?.id || '';
}

function firstId(items) {
  return items[0]?.id || '';
}

function selectFirstAvailableForFamily() {
  const groups = treeGroups();
  state.selectedGroupId = firstId(groups);
  state.selectedSubGroupId = firstId(treeSubGroups(state.selectedGroupId));
  updateSelectedProductFromTree();
}

function selectFirstAvailableForGroup() {
  state.selectedSubGroupId = firstId(treeSubGroups());
  updateSelectedProductFromTree();
}

function normalizeTreeSelection() {
  if (!DATA.productTree.families.some((item) => item.id === state.selectedFamilyId)) {
    state.selectedFamilyId = firstId(DATA.productTree.families);
  }
  const groups = treeGroups();
  if (!groups.length) {
    state.selectedGroupId = '';
    state.selectedSubGroupId = '';
    updateSelectedProductFromTree();
    return;
  }
  if (!groups.some((item) => item.id === state.selectedGroupId)) {
    state.selectedGroupId = firstId(groups);
  }
  const subGroups = treeSubGroups();
  if (!subGroups.length) {
    state.selectedSubGroupId = '';
  } else if (!subGroups.some((item) => item.id === state.selectedSubGroupId)) {
    state.selectedSubGroupId = firstId(subGroups);
  }
  updateSelectedProductFromTree();
}

function currentProductSelectionLabels(lang = state.language) {
  const groups = treeGroups();
  const subGroups = treeSubGroups();
  const family = treeLabel(DATA.productTree.families, state.selectedFamilyId, lang);
  const group = groups.length ? treeLabel(groups, state.selectedGroupId, lang) : t('none', lang);
  const subGroup = subGroups.length ? treeLabel(subGroups, state.selectedSubGroupId, lang) : t('none', lang);
  return { family, group, subGroup };
}

function renderProducts() {
  syncSelectionFromProduct();
  normalizeTreeSelection();

  const familySelect = $('#productFamilySelect');
  const groupSelect = $('#productGroupSelect');
  const subGroupSelect = $('#productSubGroupSelect');
  const groups = treeGroups();
  const subGroups = treeSubGroups();

  familySelect.innerHTML = optionMarkup(DATA.productTree.families, state.selectedFamilyId);
  familySelect.value = state.selectedFamilyId;

  groupSelect.innerHTML = optionMarkup(groups, state.selectedGroupId);
  groupSelect.value = state.selectedGroupId;
  groupSelect.disabled = groups.length === 0;

  subGroupSelect.innerHTML = optionMarkup(subGroups, state.selectedSubGroupId);
  subGroupSelect.value = state.selectedSubGroupId;
  subGroupSelect.disabled = subGroups.length === 0;

  updateProductHint();
  refreshCustomSelects();
}

function updateProductHint() {
  const product = getProduct();
  const selection = currentProductSelectionLabels();
  if (!state.selectedFamilyId) {
    $('#productGroupHint').textContent = t('selectFamilyHint');
    return;
  }
  if (!product) {
    const path = [selection.family, selection.group, selection.subGroup].filter(Boolean).join(' / ');
    $('#productGroupHint').textContent = `${path || t('selectFamilyHint')} ${t('formWillBeAdded')}`;
    return;
  }
  const formNote = hasProductForm(product)
    ? ` | ${usesPergolaForm(product) ? t('formActive') : t('baseGalaxyFormActive')}`
    : '';
  $('#productGroupHint').textContent = `${selection.family} / ${selection.group} / ${selection.subGroup}${formNote}`;
}

function applyProductSelection() {
  renderForm();
  saveOrderDraft();
  updatePreview();
}

function onProductFamilyChange() {
  const source = $('#productFamilySelect');
  state.selectedFamilyId = source.value;
  selectFirstAvailableForFamily();
  renderProducts();
  applyProductSelection();
  scheduleAutoAdvance(source.customSelectButton || source);
}

function onProductGroupChange() {
  const source = $('#productGroupSelect');
  state.selectedGroupId = source.value;
  selectFirstAvailableForGroup();
  renderProducts();
  applyProductSelection();
  scheduleAutoAdvance(source.customSelectButton || source);
}

function onProductSubGroupChange() {
  const source = $('#productSubGroupSelect');
  state.selectedSubGroupId = source.value;
  updateSelectedProductFromTree();
  renderProducts();
  applyProductSelection();
  scheduleAutoAdvance(source.customSelectButton || source);
}


let activeCustomSelect = null;

function customSelectLabel(select) {
  const selected = select.options[select.selectedIndex];
  return selected?.textContent?.trim() || t('select');
}

function customSelectTitle(select) {
  const dynamicLabel = select.dataset.fieldLabel;
  if (dynamicLabel) return translatedText(dynamicLabel);
  const label = select.closest('label');
  const span = label?.querySelector('span');
  return span?.textContent?.trim() || t('select');
}

function ensureCustomSelectModal() {
  let modal = $('#customSelectModal');
  if (modal) return modal;
  modal = document.createElement('div');
  modal.id = 'customSelectModal';
  modal.className = 'custom-select-modal no-print';
  modal.hidden = true;
  modal.innerHTML = `
    <div class="custom-select-panel" role="dialog" aria-modal="true">
      <div class="custom-select-head">
        <h2 id="customSelectTitle"></h2>
        <button type="button" id="customSelectClose" class="ghost custom-select-close">${translatedText('Close')}</button>
      </div>
      <div id="customSelectOptions" class="custom-select-options"></div>
    </div>
  `;
  document.body.appendChild(modal);
  $('#customSelectClose')?.addEventListener('click', closeCustomSelect);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeCustomSelect();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) closeCustomSelect();
  });
  return modal;
}

function updateCustomSelectButton(select) {
  if (!select?.customSelectButton) return;
  select.customSelectButton.textContent = customSelectLabel(select);
  select.customSelectButton.disabled = select.disabled;
  select.customSelectButton.classList.toggle('is-empty', !select.value);
}

function openCustomSelect(select) {
  if (!select || select.disabled) return;
  const modal = ensureCustomSelectModal();
  activeCustomSelect = select;
  $('#customSelectTitle').textContent = customSelectTitle(select);
  $('#customSelectClose').textContent = translatedText('Close');
  const list = $('#customSelectOptions');
  list.innerHTML = '';
  Array.from(select.options).forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'custom-select-option';
    button.textContent = option.textContent || t('select');
    button.dataset.value = option.value;
    button.setAttribute('aria-selected', String(option.value === select.value));
    button.addEventListener('click', () => {
      select.value = option.value;
      updateCustomSelectButton(select);
      select.dispatchEvent(new Event('input', { bubbles: true }));
      select.dispatchEvent(new Event('change', { bubbles: true }));
      const trigger = select.customSelectButton || select;
      closeCustomSelect();
      scheduleAutoAdvance(trigger);
    });
    list.appendChild(button);
  });
  modal.hidden = false;
  document.body.classList.add('modal-open');
}

function closeCustomSelect() {
  const modal = $('#customSelectModal');
  if (!modal) return;
  modal.hidden = true;
  activeCustomSelect = null;
  document.body.classList.remove('modal-open');
}

function enhanceCustomSelect(select) {
  if (!select || select.dataset.customSelectReady === '1') {
    updateCustomSelectButton(select);
    return;
  }
  select.dataset.customSelectReady = '1';
  select.classList.add('native-select-hidden');
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'custom-select-btn';
  button.addEventListener('click', () => openCustomSelect(select));
  select.insertAdjacentElement('afterend', button);
  select.customSelectButton = button;
  select.addEventListener('change', () => updateCustomSelectButton(select));
  select.addEventListener('keydown', autoAdvanceOnEnter);
  updateCustomSelectButton(select);
}

function refreshCustomSelects() {
  $$('select').forEach(enhanceCustomSelect);
}

function applyFieldCondition(element, field) {
  if (!field.showWhen) return element;
  element.dataset.showWhenField = field.showWhen.field;
  element.dataset.showWhenValues = (field.showWhen.values || []).join('|');
  return element;
}

function createInputField(field) {
  if (field.type === 'choice') return createChoiceField(field);
  if (field.type === 'singlecheck') return createSingleCheckField(field);

  const label = document.createElement('label');
  label.className = field.unit || field.unitAuto ? 'unit-label' : '';
  if (field.fullWidth) label.classList.add('grid-span-full');

  const labelText = document.createElement('span');
  labelText.className = 'field-label-text';
  labelText.dataset.dynamicLabelKey = field.label;
  labelText.textContent = translatedText(field.label);
  label.appendChild(labelText);

  const wrap = document.createElement('div');
  wrap.className = 'input-unit-wrap';

  let control;
  if (field.type === 'select') {
    control = document.createElement('select');
    const selectOptions = Array.isArray(field.options) ? [...field.options] : [];
    if (!selectOptions.includes('')) selectOptions.unshift('');
    control.innerHTML = selectOptions.map((option) => {
      const text = translatedOption(option);
      return `<option value="${option}">${text}</option>`;
    }).join('');
    if (field.defaultValue !== undefined) control.value = field.defaultValue;
  } else {
    control = document.createElement('input');
    control.type = field.type === 'number' ? 'number' : 'text';
    if (field.type === 'number') control.inputMode = 'decimal';
    control.dataset.placeholderI18n = 'enterValue';
    control.placeholder = t('enterValue');
    if (field.defaultValue !== undefined) control.value = field.defaultValue;
  }
  control.id = `dyn_${field.id}`;
  control.dataset.fieldId = field.id;
  control.dataset.fieldLabel = field.label;
  control.dataset.unit = field.unit || '';
  control.dataset.unitAuto = field.unitAuto || '';
  if (field.min !== undefined) control.min = field.min;
  if (field.max !== undefined) control.max = field.max;
  if (field.step !== undefined) control.step = field.step;
  if (/^panelCount(__pos\d+)?$/.test(field.id)) {
    control.addEventListener('input', (event) => { if (event.isTrusted) control.dataset.userOverridden = '1'; });
    control.addEventListener('change', (event) => { if (event.isTrusted) control.dataset.userOverridden = '1'; });
  }
  control.addEventListener('input', onAnyInput);
  control.addEventListener('change', onAnyInput);
  control.addEventListener('change', autoAdvanceOnChange);
  control.addEventListener('keydown', autoAdvanceOnEnter);
  if (['valanceFabric', 'roofColor'].includes(field.id)) {
    control.addEventListener('input', (event) => { if (event.isTrusted) markJanelaLinkedManualOverride(control); });
    control.addEventListener('change', (event) => { if (event.isTrusted) markJanelaLinkedManualOverride(control); });
  }

  wrap.appendChild(control);
  if (field.type === 'select') enhanceCustomSelect(control);
  const pickerKind = pickerKindForField(field, control);
  if (pickerKind) {
    wrap.classList.add('color-picker-wrap');
    control.dataset.placeholderKey = pickerKind === 'fabric' ? 'Select Fabric' : 'Select Code';
    control.placeholder = pickerButtonLabel(pickerKind);
    const pickerButton = document.createElement('button');
    pickerButton.type = 'button';
    pickerButton.className = 'color-picker-btn';
    pickerButton.dataset.pickerKind = pickerKind;
    pickerButton.textContent = pickerButtonLabel(pickerKind);
    pickerButton.setAttribute('aria-label', pickerButtonLabel(pickerKind));
    pickerButton.addEventListener('click', () => openPicker(control, pickerKind));
    wrap.appendChild(pickerButton);
  }
  if (field.id === 'panelColor') {
    wrap.classList.add('color-picker-wrap');
    const sameButton = document.createElement('button');
    sameButton.type = 'button';
    sameButton.className = 'same-as-system-btn';
    sameButton.textContent = translatedText('Same as System Color');
    sameButton.setAttribute('aria-label', translatedText('Same as System Color'));
    sameButton.addEventListener('click', () => copySystemColorToPanel(control));
    wrap.appendChild(sameButton);
  }
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
  if (field.hint) {
    const hint = document.createElement('small');
    hint.className = 'field-hint';
    hint.textContent = translatedText(field.hint);
    label.appendChild(hint);
  }
  return applyFieldCondition(label, field);
}

function createChoiceField(field) {
  const wrapper = document.createElement('div');
  wrapper.className = 'choice-field';
  if (field.fullWidth) wrapper.classList.add('grid-span-full');

  const heading = document.createElement('div');
  heading.className = 'field-heading';
  heading.textContent = translatedText(field.label);

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
    input.addEventListener('change', (event) => {
      onAnyInput();
      scheduleAutoAdvance(event.currentTarget);
    });
    span.textContent = translatedText(option);
    label.appendChild(input);
    label.appendChild(span);
    row.appendChild(label);
  });

  wrapper.appendChild(heading);
  wrapper.appendChild(row);
  return applyFieldCondition(wrapper, field);
}


function createSingleCheckField(field) {
  const wrapper = document.createElement('div');
  wrapper.className = 'choice-field singlecheck-field';
  if (field.fullWidth) wrapper.classList.add('grid-span-full');

  const heading = document.createElement('div');
  heading.className = 'field-heading';
  heading.textContent = translatedText(field.label);

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
    input.addEventListener('change', (event) => {
      onAnyInput();
      scheduleAutoAdvance(event.currentTarget);
    });
    span.textContent = translatedText(option);
    label.appendChild(input);
    label.appendChild(span);
    row.appendChild(label);
  });

  wrapper.appendChild(heading);
  wrapper.appendChild(row);
  return applyFieldCondition(wrapper, field);
}

function updateConditionalFields() {
  $$('[data-show-when-field]').forEach((element) => {
    const sourceValue = getFieldValue({ id: element.dataset.showWhenField });
    const expectedValues = (element.dataset.showWhenValues || '').split('|');
    element.hidden = !expectedValues.includes(sourceValue);
  });
}

function createFormSection(title, items, className = 'grid two') {
  const section = document.createElement('div');
  section.className = 'dynamic-section';
  section.id = `section_${safeId(title)}`;
  const h3 = document.createElement('h3');
  h3.textContent = translatedText(title);
  const grid = document.createElement('div');
  grid.className = className;
  items.forEach((item) => grid.appendChild(createInputField(item)));
  section.appendChild(h3);
  section.appendChild(grid);
  return section;
}

function addProjectPosition() {
  const snapshot = snapshotDynamicState();
  setProjectPositionCount(getProjectPositionCount() + 1);
  renderForm();
  restoreDynamicState(snapshot);
  saveOrderDraft();
  updatePreview();
}


function renumberSnapshotAfterRemovingPosition(snapshot, removeIndex, currentCount) {
  const nextSnapshot = {};
  Object.entries(snapshot).forEach(([key, value]) => {
    const match = key.match(/^(.*)__pos(\d+)$/);
    if (!match) {
      if (removeIndex !== 1) nextSnapshot[key] = value;
      return;
    }
    const base = match[1];
    const pos = Number(match[2]);
    if (pos === removeIndex) return;
    if (pos < removeIndex) {
      nextSnapshot[key] = value;
      return;
    }
    const newPos = pos - 1;
    const newKey = newPos === 1 ? base : `${base}__pos${newPos}`;
    nextSnapshot[newKey] = value;
  });

  if (removeIndex === 1 && currentCount > 1) {
    Object.entries(snapshot).forEach(([key, value]) => {
      const match = key.match(/^(.*)__pos2$/);
      if (match) nextSnapshot[match[1]] = value;
    });
  }

  return nextSnapshot;
}

function removeProjectPosition(positionIndex) {
  const current = getProjectPositionCount();
  if (current <= 1) return;
  const removeIndex = Math.min(current, Math.max(1, Number(positionIndex) || current));
  const snapshot = snapshotDynamicState();
  const nextSnapshot = renumberSnapshotAfterRemovingPosition(snapshot, removeIndex, current);
  setProjectPositionCount(current - 1);
  renderForm();
  restoreDynamicState(nextSnapshot);
  saveOrderDraft();
  updatePreview();
}

function createProjectDetailsSection(items) {
  const section = document.createElement('div');
  section.className = 'dynamic-section project-details-section';
  section.id = 'section_project_details';

  const h3 = document.createElement('h3');
  h3.textContent = translatedText('Project Details');
  section.appendChild(h3);

  const positionCount = getProjectPositionCount();
  for (let positionIndex = 1; positionIndex <= positionCount; positionIndex += 1) {
    const block = document.createElement('div');
    block.className = 'project-position';
    block.dataset.position = String(positionIndex);

    if (positionCount > 1) {
      const divider = document.createElement('div');
      divider.className = 'project-position-divider';
      divider.setAttribute('role', 'separator');
      const label = document.createElement('span');
      label.textContent = `${translatedText('Position')} ${positionIndex}`;
      divider.appendChild(label);
      const removeButton = document.createElement('button');
      removeButton.type = 'button';
      removeButton.className = 'ghost remove-position-btn inline-remove-position-btn';
      removeButton.textContent = translatedText('Delete');
      removeButton.addEventListener('click', () => removeProjectPosition(positionIndex));
      divider.appendChild(removeButton);
      block.appendChild(divider);
    }

    const grid = document.createElement('div');
    grid.className = 'grid two';
    positionedFields(items, positionIndex).forEach((item) => grid.appendChild(createInputField(item)));
    block.appendChild(grid);
    section.appendChild(block);
  }

  const actions = document.createElement('div');
  actions.className = 'position-actions';

  const addButton = document.createElement('button');
  addButton.id = 'addProjectPositionBtn';
  addButton.type = 'button';
  addButton.className = 'secondary add-position-btn';
  addButton.textContent = `+ ${translatedText('Add New Position')}`;
  addButton.addEventListener('click', addProjectPosition);
  actions.appendChild(addButton);

  section.appendChild(actions);

  return section;
}

function createCheckboxSection(title, fieldName, items) {
  const section = document.createElement('div');
  section.className = 'dynamic-section';
  section.id = `section_${safeId(title)}`;
  const h3 = document.createElement('h3');
  h3.textContent = translatedText(title);
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
    span.textContent = translatedText(option);
    label.appendChild(input);
    label.appendChild(span);
    grid.appendChild(label);
  });
  section.appendChild(h3);
  section.appendChild(grid);

  if (fieldName === 'lighting' && items.includes('Other')) {
    const otherLabel = document.createElement('label');
    otherLabel.id = 'lightingOtherWrap';
    otherLabel.className = 'unit-label lighting-other-input';
    otherLabel.hidden = true;
    otherLabel.textContent = translatedText('Other Lighting');
    otherLabel.dataset.dynamicLabelKey = 'Other Lighting';

    const wrap = document.createElement('div');
    wrap.className = 'input-unit-wrap';
    const input = document.createElement('input');
    input.id = 'dyn_lightingOther';
    input.type = 'text';
    input.dataset.fieldId = 'lightingOther';
    input.dataset.fieldLabel = 'Other Lighting';
    input.dataset.placeholderKey = 'Enter value';
    input.placeholder = translatedText('Enter value');
    input.addEventListener('input', onAnyInput);
    input.addEventListener('change', onAnyInput);
    input.addEventListener('change', autoAdvanceOnChange);
    input.addEventListener('keydown', autoAdvanceOnEnter);
    wrap.appendChild(input);
    otherLabel.appendChild(wrap);
    section.appendChild(otherLabel);
  }

  return section;
}


function createLightingDimmersSection(form) {
  const section = document.createElement('div');
  section.className = 'dynamic-section lighting-dimmers-section';
  section.id = 'section_lighting_dimmers';

  const h3 = document.createElement('h3');
  const sectionTitle = form.lightingDimmersTitle || 'Lighting & Dimmers';
  h3.textContent = translatedText(sectionTitle);
  section.appendChild(h3);

  if (form.lighting?.length) {
    if (typeof form.lighting[0] === 'string') {
      const grid = document.createElement('div');
      grid.className = 'checkbox-grid';
      form.lighting.forEach((option) => {
        const id = `lighting_${safeId(option)}`;
        const label = document.createElement('label');
        const input = document.createElement('input');
        const span = document.createElement('span');
        input.id = id;
        input.type = 'checkbox';
        input.name = 'lighting';
        input.value = option;
        input.addEventListener('change', onAnyInput);
        span.textContent = translatedText(option);
        label.appendChild(input);
        label.appendChild(span);
        grid.appendChild(label);
      });
      section.appendChild(grid);

      if (form.lighting.includes('Other')) {
        const otherLabel = document.createElement('label');
        otherLabel.id = 'lightingOtherWrap';
        otherLabel.className = 'unit-label lighting-other-input';
        otherLabel.hidden = true;
        otherLabel.textContent = translatedText('Other Lighting');
        otherLabel.dataset.dynamicLabelKey = 'Other Lighting';

        const wrap = document.createElement('div');
        wrap.className = 'input-unit-wrap';
        const input = document.createElement('input');
        input.id = 'dyn_lightingOther';
        input.type = 'text';
        input.dataset.fieldId = 'lightingOther';
        input.dataset.fieldLabel = 'Other Lighting';
        input.dataset.placeholderKey = 'Enter value';
        input.placeholder = translatedText('Enter value');
        input.addEventListener('input', onAnyInput);
        input.addEventListener('change', onAnyInput);
        input.addEventListener('change', autoAdvanceOnChange);
        input.addEventListener('keydown', autoAdvanceOnEnter);
        wrap.appendChild(input);
        otherLabel.appendChild(wrap);
        section.appendChild(otherLabel);
      }
    } else {
      const lightingGrid = document.createElement('div');
      lightingGrid.className = 'grid two';
      form.lighting.forEach((item) => lightingGrid.appendChild(createInputField(item)));
      section.appendChild(lightingGrid);
    }
  }

  const dimmerItems = form.dimmers?.length ? form.dimmers : (form.dimmer?.length ? form.dimmer : []);
  if (dimmerItems.length) {
    const dimmerGrid = document.createElement('div');
    dimmerGrid.className = 'grid two';
    dimmerItems.forEach((item) => dimmerGrid.appendChild(createInputField(item)));
    section.appendChild(dimmerGrid);
  }

  return section;
}


function isJanelaCassetteAwning(product = getProduct()) {
  return isJanelaAwningProduct(product);
}

function janelaAdditionalSections(form) {
  const titledSections = (form.sectionsAfterDimmers || []).filter((section) => ['One Sided Roof', 'Packing'].includes(section?.title));
  const fields = titledSections.flatMap((section) => Array.isArray(section.fields) ? section.fields : []);
  if (Array.isArray(form.sensors)) fields.push(...form.sensors);
  return fields;
}

function renderJanelaAdditionalSection(form, wrap) {
  const additionalFields = janelaAdditionalSections(form);
  if (additionalFields.length) {
    wrap.appendChild(createFormSection('Additional Options', additionalFields, 'grid two'));
  }
}

function appendJanelaPreviewSections(form, sections, lang = state.language) {
  (form.sectionsAfterDimmers || []).forEach((section) => {
    if (section.title === 'Valance & Printing' && section.fields?.length) {
      sections.push({ title: translatedText(section.title, lang), rows: fieldRows(section.fields, lang) });
    }
  });
  const additionalFields = janelaAdditionalSections(form);
  if (additionalFields.length) {
    sections.push({ title: translatedText('Additional Options', lang), rows: fieldRows(additionalFields, lang) });
  }
}

function renderGalaxyForm() {
  const wrap = $('#formArea');
  const form = getProductForm();
  if (!form) {
    renderGenericForm();
    return;
  }
  const isJanela = isJanelaCassetteAwning();
  wrap.innerHTML = '';
  if (form.projectDetails?.length) wrap.appendChild(createProjectDetailsSection(form.projectDetails));
  if (form.colorDetails?.length) wrap.appendChild(createFormSection('Color Details', form.colorDetails, 'grid two'));
  if (form.operation?.length) {
    wrap.appendChild(createFormSection(form.operationTitle || 'Motor & Remote Control', form.operation, 'grid two'));
  }
  if (form.panelOptions?.length) wrap.appendChild(createFormSection('Panel Options', form.panelOptions, 'grid two'));
  if (form.lighting?.length || form.dimmers?.length) {
    wrap.appendChild(createLightingDimmersSection(form));
  }
  if (isJanela) {
    (form.sectionsAfterDimmers || []).forEach((section) => {
      if (section.title === 'Valance & Printing' && section.fields?.length) {
        wrap.appendChild(createFormSection(section.title, section.fields, 'grid two'));
      }
    });
    renderJanelaAdditionalSection(form, wrap);
  } else {
    (form.sectionsAfterDimmers || []).forEach((section) => {
      if (section.fields?.length) {
        wrap.appendChild(createFormSection(section.title, section.fields, 'grid two'));
      }
    });
    if (form.sensors?.length) {
      wrap.appendChild(createFormSection('Sensors', form.sensors, 'grid two'));
    }
  }
  if (form.heaterPackaging?.length) wrap.appendChild(createFormSection('Heater & Sound & Packing', form.heaterPackaging, 'grid two'));
  updateAutoUnits();
  updateConditionalFields();
  syncJanelaLinkedFields();
  syncGlassFoldingPanelCount();
  refreshDynamicLanguage();
  validateJanelaAwningRules();
  validateGlassFoldingRules();
}

function renderPergolaForm() {
  const wrap = $('#formArea');
  const form = getProductForm();
  if (!form) {
    renderGenericForm();
    return;
  }
  wrap.innerHTML = '';
  wrap.appendChild(createProjectDetailsSection(form.projectDetails));
  wrap.appendChild(createFormSection('Colours', form.colorDetails, 'grid two'));
  wrap.appendChild(createFormSection('Motor & Remote Control', form.operation, 'grid two'));
  wrap.appendChild(createLightingDimmersSection(form));
  wrap.appendChild(createFormSection('Heater & Sound & Packing', form.heaterPackaging, 'grid two'));
  updateAutoUnits();
  updateConditionalFields();
  refreshDynamicLanguage();
}

function renderGenericForm() {
  const product = getProduct();
  const group = getGroup(product);
  const wrap = $('#formArea');
  wrap.innerHTML = '';

  if (!product || !group) {
    const selection = currentProductSelectionLabels();
    const path = [selection.family, selection.group, selection.subGroup].filter(Boolean).join(' / ');
    wrap.innerHTML = `
      <div class="dynamic-section empty-product-state">
        <h3>${t('productForm')}</h3>
        <p>${path || t('selectProduct')} ${t('formWillBeAdded')}</p>
      </div>
    `;
    return;
  }

  const projectItems = [
    { id: 'quantity', label: 'Quantity', type: 'number' },
    ...DATA.common.dimensionFields.map((f) => ({ id: f.id, label: f.label, type: 'number', unit: f.unit }))
  ];
  const colorItems = group.colorFields.flatMap((label) => {
    const id = safeId(label);
    const isFabric = FABRIC_FIELD_LABELS.has(String(label).trim().toLowerCase());
    const field = {
      id,
      label,
      type: 'text',
      picker: isFabric ? 'fabric' : 'color',
      fullWidth: isFabric
    };
    if (isFabric) return [field];
    return [
      field,
      { id: `${id}Finish`, label: 'Finish', type: 'choice', options: FINISH_OPTIONS }
    ];
  });
  let installItems = [
    { id: 'installationType', label: 'Installation Type', type: 'select', options: DATA.common.installationTypes },
    { id: 'glassType', label: 'Glass Type', type: 'select', options: DATA.common.glassTypes },
    { id: 'electricPower', label: 'Electric Power', type: 'select', options: DATA.common.electricPower },
    { id: 'motor', label: 'Motor', type: 'select', options: DATA.common.motor },
    { id: 'remoteControl', label: 'Remote Control', type: 'select', options: DATA.common.remoteControl },
    { id: 'manualCrank', label: 'Manual Crank Operation', type: 'select', options: DATA.common.manualCrank }
  ];
  if (product.hideOperation) {
    installItems = installItems.filter((item) => !['motor', 'remoteControl', 'manualCrank'].includes(item.id));
  }
  const lighting = product.id === 'galaxy'
    ? [...group.lighting, 'Louver LED']
    : group.lighting;

  wrap.appendChild(createProjectDetailsSection(projectItems));
  wrap.appendChild(createFormSection('Colours / System', colorItems, 'grid two'));
  if (installItems.length) {
    wrap.appendChild(createFormSection('Technical Selections', installItems, 'grid two'));
  }
  wrap.appendChild(createCheckboxSection('Lighting', 'lighting', lighting));
  wrap.appendChild(createCheckboxSection('Additional Accessories', 'accessories', group.accessories));
  refreshDynamicLanguage();
}

function renderForm() {
  if (usesPergolaForm()) renderPergolaForm();
  else if (hasProductForm()) renderGalaxyForm();
  else renderGenericForm();
}

function getDynamicValues() {
  return $$('[data-field-id]').reduce((acc, el) => {
    const id = el.dataset.fieldId;
    if (el.type === 'radio' || el.type === 'checkbox') {
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

function updateLightingOtherVisibility() {
  const wrap = $('#lightingOtherWrap');
  if (!wrap) return;
  wrap.hidden = !getChecked('lighting').includes('Other');
}

function lightingDisplayValue(lang = state.language) {
  const selected = getChecked('lighting');
  const parts = selected
    .filter((value) => value !== 'Other')
    .map((value) => translatedText(value, lang));
  if (selected.includes('Other')) {
    const otherValue = String($('#dyn_lightingOther')?.value || '').trim();
    parts.push(`${translatedText('Other', lang)}${otherValue ? `: ${otherValue}` : ''}`);
  }
  return parts.length ? parts.join(', ') : '-';
}

function formatValue(value, unit, unitAuto, lang = state.language) {
  const clean = String(value ?? '').trim();
  if (!clean) return '-';
  if (unit) return `${clean} ${unit}`;
  if (unitAuto === 'pcpcs') {
    const n = Number(clean.replace(',', '.'));
    const suffix = n === 1 ? 'pc' : 'pcs';
    return `${clean} ${suffix}`;
  }
  return translatedCompositeText(clean, lang);
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
  const checks = $$(`input[type="checkbox"][name="dyn_${field.id}"]`);
  if (checks.length) {
    return checks.find((check) => check.checked)?.value || '';
  }
  const el = $(`#dyn_${field.id}`);
  return el?.value || '';
}

function fieldIsActive(field) {
  if (!field.showWhen) return true;
  return (field.showWhen.values || []).includes(getFieldValue({ id: field.showWhen.field }));
}

function fieldRows(fieldList, lang = state.language) {
  return fieldList.filter(fieldIsActive).map((field) => {
    return [
      translatedText(field.label, lang),
      formatValue(getFieldValue(field), field.unit || '', field.unitAuto || '', lang)
    ];
  });
}

function projectDetailSections(fieldList, lang = state.language) {
  const positionCount = getProjectPositionCount();
  const projectTitle = translatedText('Project Details', lang);
  const positionLabel = translatedText('Position', lang);
  return Array.from({ length: positionCount }, (_, index) => {
    const positionIndex = index + 1;
    return {
      kind: 'projectDetails',
      baseTitle: projectTitle,
      title: positionCount > 1 ? `${positionLabel} ${positionIndex}` : projectTitle,
      rows: fieldRows(positionedFields(fieldList, positionIndex), lang)
    };
  });
}

function genericRows(lang = state.language) {
  const product = getProduct();
  const group = getGroup(product);
  if (!product || !group) return { systemQuantity: '-', sections: [] };
  const projectFields = [
    { id: 'quantity', label: 'Quantity' },
    ...DATA.common.dimensionFields.map((f) => ({ id: f.id, label: f.label, unit: f.unit }))
  ];
  const colorFields = group.colorFields.flatMap((label) => {
    const id = safeId(label);
    const isFabric = FABRIC_FIELD_LABELS.has(String(label).trim().toLowerCase());
    const field = { id, label };
    if (isFabric) return [field];
    return [
      field,
      { id: `${id}Finish`, label: 'Finish' }
    ];
  });
  let techIds = ['installationType', 'glassType', 'electricPower', 'motor', 'remoteControl', 'manualCrank'];
  if (product.hideOperation) {
    techIds = techIds.filter((id) => !['motor', 'remoteControl', 'manualCrank'].includes(id));
  }
  const techFields = techIds.map((id) => {
    const el = $(`#dyn_${id}`);
    return [translatedText(el?.dataset.fieldLabel || id, lang), formatValue(el?.value || '', '', '', lang)];
  });
  const sections = [
    ...projectDetailSections(projectFields, lang),
    { title: translatedText('Colours / System', lang), rows: fieldRows(colorFields, lang) }
  ];
  if (techFields.length) {
    sections.push({ title: translatedText('Technical Selections', lang), rows: techFields });
  }
  sections.push(
    { title: translatedText('Lighting', lang), rows: [[translatedText('Selected', lang), lightingDisplayValue(lang)]] },
    { title: translatedText('Additional Accessories', lang), rows: [[translatedText('Selected', lang), translatedList(getChecked('accessories'), lang)]] }
  );
  return {
    systemQuantity: formatValue($('#dyn_quantity')?.value || '', '', '', lang),
    sections
  };
}

function galaxyRows(lang = state.language) {
  const form = getProductForm();
  if (!form) return { systemQuantity: '-', sections: [] };
  const sections = [];
  const isJanela = isJanelaCassetteAwning();
  if (form.projectDetails?.length) sections.push(...projectDetailSections(form.projectDetails, lang));
  if (form.colorDetails?.length) sections.push({ title: translatedText('Color Details', lang), rows: fieldRows(form.colorDetails, lang) });
  if (form.operation?.length) {
    sections.push({ title: translatedText(form.operationTitle || 'Motor & Remote Control', lang), rows: fieldRows(form.operation, lang) });
  }
  if (form.panelOptions?.length) sections.push({ title: translatedText('Panel Options', lang), rows: fieldRows(form.panelOptions, lang) });
  if (form.lighting?.length || form.dimmers?.length) {
    const lightingDimmerRows = [];
    const lightingDimmerTitle = form.lightingDimmersTitle || 'Lighting & Dimmers';
    if (form.lighting?.length) lightingDimmerRows.push([translatedText('Lighting', lang), lightingDisplayValue(lang)]);
    if (form.dimmers?.length) lightingDimmerRows.push(...fieldRows(form.dimmers, lang));
    sections.push({ title: translatedText(lightingDimmerTitle, lang), rows: lightingDimmerRows });
  }
  if (isJanela) {
    appendJanelaPreviewSections(form, sections, lang);
  } else {
    (form.sectionsAfterDimmers || []).forEach((section) => {
      if (section.fields?.length) {
        sections.push({ title: translatedText(section.title, lang), rows: fieldRows(section.fields, lang) });
      }
    });
    if (form.sensors?.length) {
      sections.push({ title: translatedText('Sensors', lang), rows: fieldRows(form.sensors, lang) });
    }
  }
  if (form.heaterPackaging?.length) sections.push({ title: translatedText('Heater & Sound & Packing', lang), rows: fieldRows(form.heaterPackaging, lang) });
  return {
    systemQuantity: formatValue($('#dyn_systemQuantity')?.value || '', '', '', lang),
    sections
  };
}

function pergolaRows(lang = state.language) {
  const form = getProductForm();
  if (!form) return { systemQuantity: '-', sections: [] };
  return {
    systemQuantity: '-',
    sections: [
      ...projectDetailSections(form.projectDetails, lang),
      { title: translatedText('Colours', lang), rows: fieldRows(form.colorDetails, lang) },
      { title: translatedText('Motor & Remote Control', lang), rows: fieldRows(form.operation, lang) },
      { title: translatedText(form.lightingDimmersTitle || 'Lighting & Dimmers', lang), rows: [...fieldRows(form.lighting, lang), ...fieldRows(form.dimmer, lang)] },
      { title: translatedText('Heater & Sound & Packing', lang), rows: fieldRows(form.heaterPackaging, lang) }
    ]
  };
}

function getOrderData(lang = state.language) {
  const product = getProduct();
  const group = getGroup(product);
  const dynamic = usesPergolaForm(product)
    ? pergolaRows(lang)
    : (hasProductForm(product) ? galaxyRows(lang) : genericRows(lang));
  const selection = currentProductSelectionLabels(lang);
  const profile = {
    companyName: fields.companyName.value.trim(),
    contactPerson: fields.contactPerson.value.trim(),
    phone: fields.phone.value.trim(),
    email: fields.email.value.trim()
  };
  const values = getDynamicValues();
  const manualOrderNo = fields.orderNo.value.trim();

  return {
    profile,
    orderNo: manualOrderNo || generatedOrderNo(profile, product?.name || selection.subGroup || selection.group, values),
    manualOrderNo,
    orderDate: fields.orderDate.value,
    productName: product?.name || '-',
    productFamily: selection.family || '-',
    productGroup: selection.group || translatedText(group?.label || '', lang) || '-',
    productSubGroup: selection.subGroup || '-',
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

function normalizeSectionBaseTitle(title) {
  const raw = String(title || '').trim();
  if (/^(Position|Poz|Position|מיקום)\s+\d+$/i.test(raw)) return translatedText('Project Details');
  return raw.replace(/\s*-\s*(Position|Poz|מיקום)\s+\d+$/i, '').trim();
}

function sectionGroupKey(section) {
  if (section?.kind === 'projectDetails') return 'projectDetails';
  return `title:${normalizeSectionBaseTitle(section?.title)}`;
}

function sectionBaseTitle(section) {
  if (section?.kind === 'projectDetails') return section.baseTitle || translatedText('Project Details');
  return normalizeSectionBaseTitle(section?.title);
}

function buildSectionMap(rows) {
  const map = new Map();
  (rows || []).forEach(([label, value]) => map.set(label, value || '-'));
  return map;
}

function isProjectDetailsGroup(group) {
  return group.some((section) => section?.kind === 'projectDetails');
}

function renderPositionMatrixSection(baseTitle, sections) {
  const titles = sections.map((section) => section.title);
  const rowLabels = sections[0]?.rows.map(([label]) => label) || [];
  const maps = sections.map((section) => buildSectionMap(section.rows));
  return `
    <div class="pdf-section">
      <h3>${baseTitle}</h3>
      <table class="position-matrix-table"><thead><tr><th></th>${titles.map((title) => `<th>${title}</th>`).join('')}</tr></thead><tbody>
      ${rowLabels.map((label) => `<tr><td>${label}</td>${maps.map((m) => `<td>${m.get(label) || '-'}</td>`).join('')}</tr>`).join('')}
      </tbody></table>
    </div>
  `;
}

function renderPreviewSections(sections) {
  const html = [];
  for (let i = 0; i < sections.length; i += 1) {
    const current = sections[i];
    const key = sectionGroupKey(current);
    const baseTitle = sectionBaseTitle(current);
    const group = [current];
    let j = i + 1;
    while (j < sections.length && sectionGroupKey(sections[j]) === key) {
      group.push(sections[j]);
      j += 1;
    }
    if (group.length > 1 && isProjectDetailsGroup(group)) {
      html.push(renderPositionMatrixSection(baseTitle, group));
      i = j - 1;
      continue;
    }
    html.push(`
      <div class="pdf-section">
        <h3>${current.title}</h3>
        <table><tbody>
          ${current.rows.map(([label, value]) => `<tr><td>${label}</td><td>${value || '-'}</td></tr>`).join('')}
        </tbody></table>
      </div>
    `);
  }
  $('#previewSections').innerHTML = html.join('');
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
  const data = getOrderData(state.language);
  setText('companyName', data.profile.companyName);
  setText('contactPerson', data.profile.contactPerson);
  setText('phone', data.profile.phone);
  setText('email', data.profile.email);
  setText('orderDate', data.orderDate);
  setText('orderNo', data.orderNo);
  setText('productName', data.productName);
  setText('productFamily', data.productFamily);
  setText('productGroup', data.productGroup);
  setText('productSubGroup', data.productSubGroup);
  setText('notes', data.notes || '-');
  renderPreviewSections(data.sections);
}

function saveProfile() {
  const profile = {
    companyName: fields.companyName.value.trim(),
    contactPerson: fields.contactPerson.value.trim(),
    phone: fields.phone.value.trim(),
    email: fields.email.value.trim()
  };
  localStorage.setItem(STORAGE_PROFILE, JSON.stringify(profile));
  toast(t('companySaved'));
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
  ['companyName', 'contactPerson', 'phone', 'email'].forEach((key) => fields[key].value = '');
  onAnyInput();
  toast(t('companyCleared'));
}

function saveOrderDraft() {
  const data = getOrderData();
  localStorage.setItem(STORAGE_ORDER, JSON.stringify({
    selectedFamilyId: state.selectedFamilyId,
    selectedGroupId: state.selectedGroupId,
    selectedSubGroupId: state.selectedSubGroupId,
    selectedProductId: state.selectedProductId,
    projectPositionCounts: state.projectPositionCounts,
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
    state.projectPositionCounts = saved.projectPositionCounts && typeof saved.projectPositionCounts === 'object'
      ? saved.projectPositionCounts
      : {};
    if (saved.selectedProductId && DATA.products.some((p) => p.id === saved.selectedProductId)) {
      state.selectedProductId = saved.selectedProductId;
      syncSelectionFromProduct();
    } else {
      state.selectedFamilyId = saved.selectedFamilyId || state.selectedFamilyId;
      state.selectedGroupId = saved.selectedGroupId || state.selectedGroupId;
      state.selectedSubGroupId = saved.selectedSubGroupId || state.selectedSubGroupId;
      updateSelectedProductFromTree();
    }
    renderProducts();
    renderForm();
    fields.orderNo.value = saved.orderNo || '';
    fields.orderDate.value = saved.orderDate || todayISO();
    fields.notes.value = saved.notes || '';
    Object.entries(saved.values || {}).forEach(([id, value]) => {
      const radio = $$(`input[type="radio"][name="dyn_${id}"]`).find((x) => x.value === value);
      if (radio) radio.checked = true;
      $$(`input[type="checkbox"][name="dyn_${id}"]`).forEach((x) => { x.checked = x.value === value; });
      const el = $(`#dyn_${id}`);
      if (el) el.value = value;
    });
    setChecked('lighting', saved.lighting || []);
    setChecked('accessories', saved.accessories || []);
    updateConditionalFields();
    updateLightingOtherVisibility();
  } catch {}
}

function setChecked(name, values) {
  $$(`input[name="${name}"]`).forEach((x) => x.checked = values.includes(x.value));
}

function resetOrder() {
  localStorage.removeItem(STORAGE_ORDER);
  state.projectPositionCounts = {};
  fields.orderNo.value = '';
  fields.orderDate.value = todayISO();
  fields.notes.value = '';
  renderForm();
  updatePreview();
  toast(t('newRequestOpened'));
}


function janelaRuleMessage(type, value) {
  const tr = state.language === 'tr';
  if (type === 'maxWidth') return tr ? `Cephe max. ${value} mm olmalı.` : `Width max. ${value} mm.`;
  if (type === 'projectionLtWidth') return tr ? 'Açılım cepheden küçük olmalı.' : 'Projection must be smaller than width.';
  return '';
}

function setFieldValidity(input, messages) {
  if (!input) return;
  const message = messages.filter(Boolean).join(' ');
  input.setCustomValidity(message);
  input.title = message;
  input.classList.toggle('field-invalid', Boolean(message));
  const customButton = input.customSelectButton;
  if (customButton) {
    customButton.classList.toggle('field-invalid', Boolean(message));
    customButton.title = message;
  }
}

function validateJanelaAwningRules({ showToast = false } = {}) {
  if (!isJanelaAwningProduct()) return true;
  const productId = state.selectedProductId;
  const limits = JANELA_AWNING_LIMITS[productId] || {};
  const widthInput = $('#dyn_width');
  const projectionFieldIds = Array.isArray(limits.projectionFields) && limits.projectionFields.length ? limits.projectionFields : ['projection'];
  const projectionInputs = projectionFieldIds.map((fieldId) => $(`#dyn_${fieldId}`)).filter(Boolean);
  const width = Number(String(widthInput?.value || '').replace(',', '.'));
  const widthMessages = [];
  const projectionMessages = [];
  let firstInvalidProjectionInput = null;

  if (limits.maxWidth && Number.isFinite(width) && width > limits.maxWidth) {
    widthMessages.push(janelaRuleMessage('maxWidth', limits.maxWidth));
  }
  projectionInputs.forEach((projectionInput) => {
    const projection = Number(String(projectionInput?.value || '').replace(',', '.'));
    const messages = [];
    if (limits.projectionLtWidth && Number.isFinite(width) && width > 0 && Number.isFinite(projection) && projection > 0 && projection >= width) {
      messages.push(janelaRuleMessage('projectionLtWidth'));
      if (!firstInvalidProjectionInput) firstInvalidProjectionInput = projectionInput;
    }
    setFieldValidity(projectionInput, messages);
    projectionMessages.push(...messages);
  });

  setFieldValidity(widthInput, widthMessages);
  const messages = [...widthMessages, ...Array.from(new Set(projectionMessages))];
  if (messages.length && showToast) {
    toast(messages.join(' '));
    const targetInput = widthMessages.length ? widthInput : firstInvalidProjectionInput;
    const target = targetInput?.customSelectButton || targetInput;
    target?.focus?.();
  }
  return messages.length === 0;
}


function glassFoldingHeightLimit(glassThickness) {
  if (glassThickness === '8 mm') return 2400;
  if (glassThickness === '10 mm' || glassThickness === '12 mm') return 2600;
  return 2800;
}

function glassRuleMessage(type, value) {
  const tr = state.language === 'tr';
  if (type === 'maxWidth') return tr ? `Genişlik max. ${value} mm olmalı.` : `Width max. ${value} mm.`;
  if (type === 'maxHeight') return tr ? `Yükseklik max. ${value} mm olmalı.` : `Height max. ${value} mm.`;
  if (type === 'maxPanels') return tr ? 'Panel sayısı en fazla 8 olabilir.' : 'Panel count can be max. 8.';
  if (type === 'panelWidth') return tr ? 'Tek panel maksimum 800 mm olmalı.' : 'Each panel must be max. 800 mm.';
  return '';
}

function glassPositionSuffixFromWidthField(fieldId) {
  return String(fieldId || '').replace(/^width/, '');
}

function glassFieldInput(baseId, suffix = '') {
  return document.querySelector(`[data-field-id="${baseId}${suffix}"]`);
}

function syncGlassFoldingPanelCount() {
  if (!isGlassFoldingASeriesProduct()) return;
  $$('[data-field-id]').filter((el) => /^width(__pos\d+)?$/.test(el.dataset.fieldId || '')).forEach((widthInput) => {
    const suffix = glassPositionSuffixFromWidthField(widthInput.dataset.fieldId);
    const panelInput = glassFieldInput('panelCount', suffix);
    if (!panelInput || panelInput.dataset.userOverridden === '1') return;
    const width = Number(String(widthInput.value || '').replace(',', '.'));
    if (Number.isFinite(width) && width > 0) {
      panelInput.value = String(Math.min(8, Math.max(1, Math.ceil(width / 800))));
    } else {
      panelInput.value = '';
    }
  });
}

function validateGlassFoldingRules({ showToast = false } = {}) {
  if (!isGlassFoldingASeriesProduct()) return true;
  const messages = [];
  let focusTarget = null;

  $$('[data-field-id]').filter((el) => /^width(__pos\d+)?$/.test(el.dataset.fieldId || '')).forEach((widthInput) => {
    const suffix = glassPositionSuffixFromWidthField(widthInput.dataset.fieldId);
    const heightInput = glassFieldInput('height', suffix);
    const panelInput = glassFieldInput('panelCount', suffix);
    const width = Number(String(widthInput.value || '').replace(',', '.'));
    const height = Number(String(heightInput?.value || '').replace(',', '.'));
    const panelCount = Number(String(panelInput?.value || '').replace(',', '.'));
    const glassThickness = getFieldValue({ id: `glassThickness${suffix}` });
    const heightLimit = glassFoldingHeightLimit(glassThickness);

    const widthMessages = [];
    const heightMessages = [];
    const panelMessages = [];

    if (Number.isFinite(width) && width > 6400) widthMessages.push(glassRuleMessage('maxWidth', 6400));
    if (Number.isFinite(height) && height > heightLimit) heightMessages.push(glassRuleMessage('maxHeight', heightLimit));
    if (Number.isFinite(panelCount) && panelCount > 8) panelMessages.push(glassRuleMessage('maxPanels'));
    if (Number.isFinite(width) && width > 0 && Number.isFinite(panelCount) && panelCount > 0 && width / panelCount > 800) {
      panelMessages.push(glassRuleMessage('panelWidth'));
    }

    setFieldValidity(widthInput, widthMessages);
    setFieldValidity(heightInput, heightMessages);
    setFieldValidity(panelInput, panelMessages);
    [...widthMessages, ...heightMessages, ...panelMessages].forEach((message) => {
      if (!messages.includes(message)) messages.push(message);
    });
    if (!focusTarget) {
      if (widthMessages.length) focusTarget = widthInput;
      else if (heightMessages.length) focusTarget = heightInput;
      else if (panelMessages.length) focusTarget = panelInput;
    }
  });

  if (messages.length && showToast) {
    toast(messages.join(' '));
    focusTarget?.focus?.();
  }
  return messages.length === 0;
}

function syncJanelaLinkedFields() {
  if (!isJanelaAwningProduct()) return;
  const fabric = $('#dyn_fabric');
  const valanceFabric = $('#dyn_valanceFabric');
  if (fabric && valanceFabric && valanceFabric.dataset.userOverridden !== '1') {
    valanceFabric.value = fabric.value || '';
  }
  const roofEnabled = getFieldValue({ id: 'oneSidedRoof' }) === 'Var';
  const systemColor = $('#dyn_systemColor');
  const roofColor = $('#dyn_roofColor');
  if (roofEnabled && systemColor && roofColor && roofColor.dataset.userOverridden !== '1') {
    roofColor.value = systemColor.value || '';
  }
}

function onAnyInput() {
  syncJanelaLinkedFields();
  syncGlassFoldingPanelCount();
  updateConditionalFields();
  updateLightingOtherVisibility();
  updateAutoUnits();
  validateJanelaAwningRules();
  validateGlassFoldingRules();
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


function buildOrderPdf(data) {
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

  const tableMatrix = (sections) => {
    const titles = sections.map((s) => s.title);
    const rowLabels = sections[0]?.rows.map(([label]) => label) || [];
    const maps = sections.map((s) => buildSectionMap(s.rows));
    const tableWidth = W - margin * 2;
    const labelWidth = 145;
    const colWidth = (tableWidth - labelWidth) / Math.max(1, titles.length);
    let yy = y;

    fillRect(margin, yy, labelWidth, rowHeight, 0.93);
    rect(margin, yy, labelWidth, rowHeight);
    for (let i = 0; i < titles.length; i += 1) {
      const x = margin + labelWidth + i * colWidth;
      fillRect(x, yy, colWidth, rowHeight, 0.93);
      rect(x, yy, colWidth, rowHeight);
      text(x + 4, yy + 9, titles[i], 6.7, true);
    }
    yy += rowHeight;

    rowLabels.forEach((label) => {
      fillRect(margin, yy, labelWidth, rowHeight, 0.97);
      rect(margin, yy, labelWidth, rowHeight);
      text(margin + 6, yy + 9, label, 7.1, true);
      maps.forEach((m, idx) => {
        const x = margin + labelWidth + idx * colWidth;
        rect(x, yy, colWidth, rowHeight);
        const val = String(m.get(label) || '-');
        text(x + 4, yy + 9, wrapText(val, Math.max(8, Math.floor(colWidth / 4.8)))[0], 6.7);
      });
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
    ['Family', data.productFamily || '-'],
    ['Group', data.productGroup || '-'],
    ['Sub Group', data.productSubGroup || '-'],
    ['Product', data.productName || '-']
  ];
  y = tableRows(productRows, margin, y, W - margin * 2) + 2;

  for (let i = 0; i < data.sections.length; i += 1) {
    const current = data.sections[i];
    const key = sectionGroupKey(current);
    const baseTitle = sectionBaseTitle(current);
    const group = [current];
    let j = i + 1;
    while (j < data.sections.length && sectionGroupKey(data.sections[j]) === key) {
      group.push(data.sections[j]);
      j += 1;
    }
    section(baseTitle);
    if (group.length > 1 && isProjectDetailsGroup(group)) {
      y = tableMatrix(group) + 2;
      i = j - 1;
      continue;
    }
    y = tableRows(current.rows, margin, y, W - margin * 2) + 2;
  }

  section('Notes');
  const noteLines = wrapText(data.notes || '-', 82).slice(0, 5);
  rect(margin, y, W - margin * 2, 58);
  noteLines.forEach((ln, idx) => text(margin + 8, y + 14 + idx * 10, ln, 8.5));

  return createPdf(commands.join('\n'), W, H);
}

function createPdf(content, width, height) {
  const encoder = new TextEncoder();
  const encode = (value) => encoder.encode(value);
  const contentBytes = encode(content);
  const pageResources = `<< /Font << /F1 4 0 R /F2 5 0 R >> >>`;

  const objects = [
    [encode('<< /Type /Catalog /Pages 2 0 R >>')],
    [encode('<< /Type /Pages /Kids [3 0 R] /Count 1 >>')],
    [encode(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${width} ${height}] /Resources ${pageResources} /Contents 6 0 R >>`)],
    [encode('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>')],
    [encode('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>')],
    [encode(`<< /Length ${contentBytes.length} >>\nstream\n`), contentBytes, encode('\nendstream')]
  ];

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
  if (!validateJanelaAwningRules({ showToast: true }) || !validateGlassFoldingRules({ showToast: true })) return;
  const data = getOrderData('en');
  const blob = buildOrderPdf(data);
  downloadBlob(blob, filenameFromData(data));
  toast(t('pdfCreated'));
}

async function sharePdf() {
  if (!validateJanelaAwningRules({ showToast: true }) || !validateGlassFoldingRules({ showToast: true })) return;
  const data = getOrderData('en');
  const blob = buildOrderPdf(data);
  const filename = filenameFromData(data);
  const file = new File([blob], filename, { type: 'application/pdf' });

  if (navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
    try {
      await navigator.share({
        title: 'Product Request Form',
        text: `${data.productName} - ${data.orderNo}`,
        files: [file]
      });
      toast(t('shareOpened'));
      return;
    } catch (error) {
      const errorName = String(error?.name || '').toLowerCase();
      const errorMessage = String(error?.message || '').toLowerCase();
      const cancelled = errorName.includes('abort')
        || errorName.includes('cancel')
        || errorMessage.includes('abort')
        || errorMessage.includes('cancel');
      if (cancelled) {
        toast(t('shareCancelled'));
        return;
      }
      // Real share failure: fall through to download fallback.
    }
  }

  downloadBlob(blob, filename);
  toast(t('shareUnsupported'));
}

function registerEvents() {
  Object.values(fields).forEach((el) => {
    el.addEventListener('input', onAnyInput);
    el.addEventListener('change', autoAdvanceOnChange);
    el.addEventListener('keydown', autoAdvanceOnEnter);
  });
  $('#productFamilySelect').addEventListener('change', onProductFamilyChange);
  $('#productGroupSelect').addEventListener('change', onProductGroupChange);
  $('#productSubGroupSelect').addEventListener('change', onProductSubGroupChange);
  $('#saveProfileBtn').addEventListener('click', () => { saveProfile(); onAnyInput(); });
  $('#clearProfileBtn').addEventListener('click', clearProfile);
  $('#downloadPdfBtn').addEventListener('click', downloadPdf);
  $('#sharePdfBtn').addEventListener('click', () => sharePdf().catch(() => toast(t('shareUnsupported'))));
  refreshCustomSelects();
  $('#resetOrderTopBtn').addEventListener('click', resetOrder);
  $$('.language-tabs button').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });
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
    try { await navigator.serviceWorker.register('sw.js?v=c90-folding-a-height-rules'); } catch {}
  }
}


Object.assign(I18N.en, {
  'Type': 'Type',
  'Standard': 'Standard',
  'Top-Hung': 'Top-Hung',
  'Glass Thickness': 'Glass Thickness',
  'Insulated Glass': 'Insulated Glass',
  'Height': 'Height',
  'Panel Count': 'Panel Count',
  'Leaf Stacking Direction (Inside View)': 'Leaf Stacking Direction (Inside View)'
});
Object.assign(I18N.tr, {
  'Type': 'Tür',
  'Standard': 'Standart',
  'Top-Hung': 'Üstten Taşımalı',
  'Glass Thickness': 'Cam Kalınlığı',
  'Insulated Glass': 'Isıcam',
  'Height': 'Yükseklik',
  'Panel Count': 'Panel Sayısı',
  'Leaf Stacking Direction (Inside View)': 'Kanat Toplanma Yönü (İç Bakış)'
});
Object.assign(I18N.de, {
  'Type': 'Typ',
  'Standard': 'Standard',
  'Top-Hung': 'Oben getragen',
  'Glass Thickness': 'Glasdicke',
  'Insulated Glass': 'Isolierglas',
  'Height': 'Höhe',
  'Panel Count': 'Paneelanzahl',
  'Leaf Stacking Direction (Inside View)': 'Flügel-Parkrichtung (Innenansicht)'
});
Object.assign(I18N.fr, {
  'Type': 'Type',
  'Standard': 'Standard',
  'Top-Hung': 'Suspendu en partie haute',
  'Glass Thickness': 'Épaisseur du verre',
  'Insulated Glass': 'Double vitrage',
  'Height': 'Hauteur',
  'Panel Count': 'Nombre de panneaux',
  'Leaf Stacking Direction (Inside View)': 'Sens de refoulement des vantaux (vue intérieure)'
});
Object.assign(I18N.he, {
  'Type': 'Type',
  'Standard': 'Standard',
  'Top-Hung': 'Top-Hung',
  'Glass Thickness': 'Glass Thickness',
  'Insulated Glass': 'Insulated Glass',
  'Height': 'Height',
  'Panel Count': 'Panel Count',
  'Leaf Stacking Direction (Inside View)': 'Leaf Stacking Direction (Inside View)'
});

function init() {
  loadLanguage();
  applyLanguage();
  fields.orderDate.value = todayISO();
  fields.orderNo.value = '';
  loadProfile();
  renderProducts();
  renderForm();
  loadOrderDraft();
  registerEvents();
  initColorChartModal();
  updatePreview();
  initPwa();
}

init();


Object.assign(I18N.en, {
  'Cable Outlet': 'Cable Outlet',
  'Top': 'Top',
  'Rear': 'Rear',
  'Rising': 'Rising'
});
Object.assign(I18N.tr, {
  'Cable Outlet': 'Kablo Çıkışı',
  'Top': 'Üstten',
  'Rear': 'Arkadan',
  'Rising': 'Rising'
});
Object.assign(I18N.de, {
  'Cable Outlet': 'Kabelausgang',
  'Top': 'Oben',
  'Rear': 'Hinten',
  'Rising': 'Rising'
});
Object.assign(I18N.fr, {
  'Cable Outlet': 'Sortie de câble',
  'Top': 'Haut',
  'Rear': 'Arrière',
  'Rising': 'Rising'
});
Object.assign(I18N.he, {
  'Cable Outlet': 'Cable Outlet',
  'Top': 'Top',
  'Rear': 'Rear',
  'Rising': 'Rising'
});




