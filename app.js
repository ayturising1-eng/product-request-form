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
const STORAGE_ORDER = 'prf_order_v5';
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
  { value: '8118 / 9002 | White 3D Texture', code: '8118 / 9002', name: 'White 3D Texture', image: 'assets/fabric-options/8118-9002.jpg' },
  { value: '8290 / 9002 | White Glossy', code: '8290 / 9002', name: 'White Glossy', image: 'assets/fabric-options/8290-9002.jpg' },
  { value: '8116 / 1622 | Cream Texture', code: '8116 / 1622', name: 'Cream Texture', image: 'assets/fabric-options/b-8116-1622.jpg' },
  { value: '8118 / 1622 | Cream 3D Texture', code: '8118 / 1622', name: 'Cream 3D Texture', image: 'assets/fabric-options/8118-1622.jpg' },
  { value: '8290 / 1622 | Cream Matt', code: '8290 / 1622', name: 'Cream Matt', image: 'assets/fabric-options/8290-1622.jpg' },
  { value: '666 1X1 | White Thermofoam', code: '666 1X1', name: 'White Thermofoam', image: 'assets/fabric-options/666-1x1.jpg' },
  { value: '666 8X2 | Grey Thermofoam', code: '666 8X2', name: 'Grey Thermofoam', image: 'assets/fabric-options/666-8x2.jpg' },
  { value: '8118 / 7500 | Silver 3D Texture', code: '8118 / 7500', name: 'Silver 3D Texture', image: 'assets/fabric-options/8118-7500.jpg' },
  { value: '8118 / 7024 | Dark Grey 3D Texture', code: '8118 / 7024', name: 'Dark Grey 3D Texture', image: 'assets/fabric-options/8118-7024.jpg' },
  { value: '8290 / 7024 | Dark Grey Matt', code: '8290 / 7024', name: 'Dark Grey Matt', image: 'assets/fabric-options/8290-7024.jpg' },
  { value: '8118 / 7340 | Anthracite 3D Texture', code: '8118 / 7340', name: 'Anthracite 3D Texture', image: 'assets/fabric-options/8118-7340.jpg' },
  { value: '8118 / 7999 | Black 3D Texture', code: '8118 / 7999', name: 'Black 3D Texture', image: 'assets/fabric-options/8118-7999.jpg' },
  { value: '8118 / 5003 | Blue 3D Texture', code: '8118 / 5003', name: 'Blue 3D Texture', image: 'assets/fabric-options/8118-5003.jpg' }
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
  'Sensors': 'Sensörler',
  'Heater & Packaging': 'Isıtıcı ve Ambalaj',
  'Colours / System': 'Renkler / Sistem',
  'Technical Selections': 'Teknik Seçimler',
  'Additional Accessories': 'Ek Aksesuarlar',
  'Selected': 'Seçilen',
  'Width': 'Genişlik',
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
  'Heavy-Duty Nylon': 'Ağır Hizmet Naylon',
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
  'Sensors': 'Sensoren',
  'Heater & Packaging': 'Heizung und Verpackung',
  'Colours / System': 'Farben / System',
  'Technical Selections': 'Technische Auswahl',
  'Additional Accessories': 'Zusätzliches Zubehör',
  'Selected': 'Ausgewählt',
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
  'Sensors': 'Capteurs',
  'Heater & Packaging': 'Chauffage et emballage',
  'Colours / System': 'Couleurs / Système',
  'Technical Selections': 'Sélections techniques',
  'Additional Accessories': 'Accessoires supplémentaires',
  'Selected': 'Sélectionné',
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
  'Sensors': 'חיישנים',
  'Heater & Packaging': 'חימום ואריזה',
  'Colours / System': 'צבעים / מערכת',
  'Technical Selections': 'בחירות טכניות',
  'Additional Accessories': 'אביזרים נוספים',
  'Selected': 'נבחר',
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
  'Position': 'Position'
});

Object.assign(I18N.tr, {
  'Add New Position': 'Yeni Poz Ekle',
  'Position': 'Poz'
});

Object.assign(I18N.de, {
  'Add New Position': 'Neue Position hinzuf\u00fcgen',
  'Position': 'Position'
});

Object.assign(I18N.fr, {
  'Add New Position': 'Ajouter une position',
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

let activePickerInput = null;
let activePickerKind = 'color';
let activeColorCatalogId = 'rising-standart';

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

function pickerOptions(kind) {
  return kind === 'fabric' ? FABRIC_OPTIONS : (activeColorCatalog()?.options || []);
}

function renderColorCatalogTabs(kind) {
  const tabs = $('#colorCatalogTabs');
  if (!tabs) return;
  tabs.hidden = kind !== 'color';
  tabs.innerHTML = '';
  if (kind !== 'color') return;
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
}

function buildPickerList(kind) {
  const list = $('#colorOptionList');
  if (!list) return;
  list.innerHTML = '';
  pickerOptions(kind).forEach((option) => {
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
      name.textContent = option.name;
      textWrap.appendChild(name);
    }
    if (option.detail) {
      const detail = document.createElement('small');
      detail.textContent = option.detail;
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
  activePickerInput = input;
  activePickerKind = kind;
  if (kind === 'color') {
    activeColorCatalogId = colorCatalogs()[0]?.id || 'rising-standart';
  }
  $('#colorChartTitle').textContent = translatedText(kind === 'fabric' ? 'Fabric Selection' : 'Color Chart');
  $('#colorChartHelp').textContent = translatedText(kind === 'fabric' ? 'Fabric Selection Help' : 'Color Chart Help');
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
  activePickerInput = null;
  activePickerKind = 'color';
}

function selectPickerOption(value) {
  setInputValueAndNotify(activePickerInput, value);
  toast(`${translatedText('Selected')}: ${value}`);
  closeColorChart();
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
}

function initColorChartModal() {
  const modal = $('#colorChartModal');
  if (!modal) return;
  $$('[data-color-chart-close]').forEach((button) => {
    button.addEventListener('click', closeColorChart);
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
    const el = $(`#dyn_${id}`);
    if (el) el.value = value;
  });
  setChecked('lighting', snapshot?.lighting || []);
  setChecked('accessories', snapshot?.accessories || []);
  updateAutoUnits();
  updateConditionalFields();
}

function setLanguage(lang) {
  if (!LANGUAGE_META[lang] || lang === state.language) return;
  const snapshot = snapshotDynamicState();
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
  state.selectedFamilyId = $('#productFamilySelect').value;
  selectFirstAvailableForFamily();
  renderProducts();
  applyProductSelection();
}

function onProductGroupChange() {
  state.selectedGroupId = $('#productGroupSelect').value;
  selectFirstAvailableForGroup();
  renderProducts();
  applyProductSelection();
}

function onProductSubGroupChange() {
  state.selectedSubGroupId = $('#productSubGroupSelect').value;
  updateSelectedProductFromTree();
  renderProducts();
  applyProductSelection();
}

function applyFieldCondition(element, field) {
  if (!field.showWhen) return element;
  element.dataset.showWhenField = field.showWhen.field;
  element.dataset.showWhenValues = (field.showWhen.values || []).join('|');
  return element;
}

function createInputField(field) {
  if (field.type === 'choice') return createChoiceField(field);

  const label = document.createElement('label');
  label.textContent = translatedText(field.label);
  label.className = field.unit || field.unitAuto ? 'unit-label' : '';
  if (field.fullWidth) label.classList.add('grid-span-full');

  const wrap = document.createElement('div');
  wrap.className = 'input-unit-wrap';

  let control;
  if (field.type === 'select') {
    control = document.createElement('select');
    control.innerHTML = field.options.map((option) => {
      const text = translatedOption(option);
      return `<option value="${option}">${text}</option>`;
    }).join('');
    if (field.defaultValue !== undefined) control.value = field.defaultValue;
  } else {
    control = document.createElement('input');
    control.type = field.type === 'number' ? 'number' : 'text';
    if (field.type === 'number') control.inputMode = 'decimal';
    control.placeholder = field.unit || field.unitAuto ? translatedText('Enter value') : '';
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
  const pickerKind = pickerKindForField(field, control);
  if (pickerKind) {
    wrap.classList.add('color-picker-wrap');
    control.placeholder = control.placeholder || pickerButtonLabel(pickerKind);
    const pickerButton = document.createElement('button');
    pickerButton.type = 'button';
    pickerButton.className = 'color-picker-btn';
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
    input.addEventListener('change', onAnyInput);
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
    const expectedValues = (element.dataset.showWhenValues || '').split('|').filter(Boolean);
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
      block.appendChild(divider);
    }

    const grid = document.createElement('div');
    grid.className = 'grid two';
    positionedFields(items, positionIndex).forEach((item) => grid.appendChild(createInputField(item)));
    block.appendChild(grid);
    section.appendChild(block);
  }

  const addButton = document.createElement('button');
  addButton.id = 'addProjectPositionBtn';
  addButton.type = 'button';
  addButton.className = 'secondary add-position-btn';
  addButton.textContent = `+ ${translatedText('Add New Position')}`;
  addButton.addEventListener('click', addProjectPosition);
  section.appendChild(addButton);

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
  return section;
}

function renderGalaxyForm() {
  const wrap = $('#formArea');
  const form = getProductForm();
  if (!form) {
    renderGenericForm();
    return;
  }
  wrap.innerHTML = '';
  wrap.appendChild(createProjectDetailsSection(form.projectDetails));
  wrap.appendChild(createFormSection('Color Details', form.colorDetails, 'grid two'));
  if (form.operation?.length) {
    wrap.appendChild(createFormSection('Motor & Remote Control', form.operation, 'grid two'));
  }
  wrap.appendChild(createFormSection('Panel Options', form.panelOptions, 'grid two'));
  wrap.appendChild(createCheckboxSection('Lighting', 'lighting', form.lighting));
  if (form.dimmers?.length) {
    wrap.appendChild(createFormSection('Light Dimmers', form.dimmers, 'grid two'));
  }
  (form.sectionsAfterDimmers || []).forEach((section) => {
    if (section.fields?.length) {
      wrap.appendChild(createFormSection(section.title, section.fields, 'grid two'));
    }
  });
  if (form.sensors?.length) {
    wrap.appendChild(createFormSection('Sensors', form.sensors, 'grid two'));
  }
  wrap.appendChild(createFormSection('Heater & Sound & Packing', form.heaterPackaging, 'grid two'));
  updateAutoUnits();
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
  wrap.appendChild(createFormSection('Lighting', form.lighting, 'grid two'));
  wrap.appendChild(createFormSection('Dimmer', form.dimmer, 'grid two'));
  wrap.appendChild(createFormSection('Heater & Sound & Packing', form.heaterPackaging, 'grid two'));
  updateAutoUnits();
  updateConditionalFields();
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
      { id: `${id}Finish`, label: 'Finish', type: 'choice', options: FINISH_OPTIONS, defaultValue: 'Matt' }
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
}

function renderForm() {
  if (usesPergolaForm()) renderPergolaForm();
  else if (hasProductForm()) renderGalaxyForm();
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

function formatValue(value, unit, unitAuto, lang = state.language) {
  const clean = String(value ?? '').trim();
  if (!clean) return '-';
  if (unit) return `${clean} ${unit}`;
  if (unitAuto === 'pcpcs') {
    const n = Number(clean.replace(',', '.'));
    const suffix = n === 1 ? 'pc' : 'pcs';
    return `${clean} ${suffix}`;
  }
  return translatedText(clean, lang);
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
      title: positionCount > 1 ? `${projectTitle} - ${positionLabel} ${positionIndex}` : projectTitle,
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
    { title: translatedText('Lighting', lang), rows: [[translatedText('Selected', lang), translatedList(getChecked('lighting'), lang)]] },
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
  const sections = [
    ...projectDetailSections(form.projectDetails, lang),
    { title: translatedText('Color Details', lang), rows: fieldRows(form.colorDetails, lang) }
  ];
  if (form.operation?.length) {
    sections.push({ title: translatedText('Motor & Remote Control', lang), rows: fieldRows(form.operation, lang) });
  }
  sections.push(
    { title: translatedText('Panel Options', lang), rows: fieldRows(form.panelOptions, lang) },
    { title: translatedText('Lighting', lang), rows: [[translatedText('Selected', lang), translatedList(getChecked('lighting'), lang)]] }
  );
  if (form.dimmers?.length) {
    sections.push({ title: translatedText('Light Dimmers', lang), rows: fieldRows(form.dimmers, lang) });
  }
  (form.sectionsAfterDimmers || []).forEach((section) => {
    if (section.fields?.length) {
      sections.push({ title: translatedText(section.title, lang), rows: fieldRows(section.fields, lang) });
    }
  });
  if (form.sensors?.length) {
    sections.push({ title: translatedText('Sensors', lang), rows: fieldRows(form.sensors, lang) });
  }
  sections.push({ title: translatedText('Heater & Sound & Packing', lang), rows: fieldRows(form.heaterPackaging, lang) });
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
      { title: translatedText('Lighting', lang), rows: fieldRows(form.lighting, lang) },
      { title: translatedText('Dimmer', lang), rows: fieldRows(form.dimmer, lang) },
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
      const el = $(`#dyn_${id}`);
      if (el) el.value = value;
    });
    setChecked('lighting', saved.lighting || []);
    setChecked('accessories', saved.accessories || []);
    updateConditionalFields();
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

function onAnyInput() {
  updateConditionalFields();
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
    ['Family', data.productFamily || '-'],
    ['Group', data.productGroup || '-'],
    ['Sub Group', data.productSubGroup || '-'],
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
  const data = getOrderData('en');
  const blob = buildOrderPdf(data);
  downloadBlob(blob, filenameFromData(data));
  toast(t('pdfCreated'));
}

async function sharePdf() {
  const data = getOrderData('en');
  const blob = buildOrderPdf(data);
  const filename = filenameFromData(data);
  const file = new File([blob], filename, { type: 'application/pdf' });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    await navigator.share({
      title: 'Product Request Form',
      text: `${data.productName} - ${data.orderNo}`,
      files: [file]
    });
    toast(t('shareOpened'));
  } else {
    downloadBlob(blob, filename);
    toast(t('shareUnsupported'));
  }
}

function registerEvents() {
  Object.values(fields).forEach((el) => el.addEventListener('input', onAnyInput));
  $('#productFamilySelect').addEventListener('change', onProductFamilyChange);
  $('#productGroupSelect').addEventListener('change', onProductGroupChange);
  $('#productSubGroupSelect').addEventListener('change', onProductSubGroupChange);
  $('#saveProfileBtn').addEventListener('click', () => { saveProfile(); onAnyInput(); });
  $('#clearProfileBtn').addEventListener('click', clearProfile);
  $('#downloadPdfBtn').addEventListener('click', downloadPdf);
  $('#sharePdfBtn').addEventListener('click', () => sharePdf().catch(() => toast(t('shareCancelled'))));
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
    try { await navigator.serviceWorker.register('sw.js'); } catch {}
  }
}

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
