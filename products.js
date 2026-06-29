const HEATER_SOUND_PACKING_FIELDS = [
  { id: 'heater2000Quantity', label: 'Heater 2000W 220V Quantity', type: 'number', unitAuto: 'pcpcs' },
  { id: 'heater3000Quantity', label: 'Heater 3000W 220V Quantity', type: 'number', unitAuto: 'pcpcs' },
  { id: 'soundSystemQuantity', label: 'Sound System Quantity', type: 'number', unitAuto: 'pcpcs' },
  { id: 'dimmerHeater', label: 'Dimmer Heater', type: 'choice', options: ['Yes', 'No'] },
  { id: 'packagingType', label: 'Packaging Type', type: 'singlecheck', options: ['Wooden Box', 'Heavy-Duty Nylon'] },
  { id: 'loadingType', label: 'Loading', type: 'singlecheck', options: ['Truck', 'Container'] }
];

window.PRODUCT_FINISH_OPTIONS = ['Glossy', 'Matt', 'Texture'];

window.PRODUCT_DATA = {
  common: {
    installationTypes: ['', 'Wall', 'Ceiling', 'Freestanding'],
    glassTypes: ['None', 'Tempered Laminated', 'Clear Tempered', 'Clear Tempered + Air Space'],
    electricPower: ['', '220 V', '110 V'],
    motor: ['', 'Included', 'Not Included'],
    remoteControl: ['', '1 Channel', '4 Channels', '16 Channels'],
    manualCrank: ['', 'No', 'Yes'],
    dimensionFields: [
      { id: 'frontH', label: 'Front H', unit: 'mm' },
      { id: 'backH', label: 'Back H', unit: 'mm' },
      { id: 'projection', label: 'Projection', unit: 'mm' },
      { id: 'backBeam', label: 'Back Beam', unit: 'mm' },
      { id: 'sideBeam', label: 'Side Beam', unit: 'mm' },
      { id: 'beamFor', label: 'Beam For', unit: 'mm' }
    ]
  },
  productTree: {
    families: [
      { id: 'pergola', label: 'Pergola' },
      { id: 'bioclimatic', label: 'Bioclimatic' },
      { id: 'zip_screen_awning_curtain', label: 'Zip Screen - Awning - Curtain' }
    ],
    groups: {
      pergola: [
        { id: 'falcate', label: 'Falcate' },
        { id: 'subulate', label: 'Subulate' },
        { id: 'unifoliate', label: 'Unifoliate' },
        { id: 'pergo_rise', label: 'Pergo Rise', productId: 'pergo_rise' }
      ],
      bioclimatic: [
        { id: 'bcube', label: 'B-Cube' },
        { id: 'bio_rise', label: 'Bio-Rise', productId: 'bio_rise' }
      ],
      zip_screen_awning_curtain: [
        { id: 'zip_screen', label: 'Zip Screen' },
        { id: 'janela_cassette_awning', label: 'Janela Cassette Awning', productId: 'janela_cassette_awning' },
        { id: 'pars_cassette_awning', label: 'Pars Cassette Awning', productId: 'pars_cassette_awning' },
        { id: 'pars_plus_cassette_awning', label: 'Pars Plus Cassette Awning', productId: 'pars_plus_cassette_awning' },
        { id: 'pars_plus_luxe_cassette_awning', label: 'Pars Plus Luxe Cassette Awning', productId: 'pars_plus_luxe_cassette_awning' },
        { id: 'moonlight_classic_awning', label: 'Moonlight Classic Awning', productId: 'moonlight_classic_awning' },
        { id: 'sunshine_classic_awning', label: 'Sunshine Classic Awning', productId: 'sunshine_classic_awning' },
        { id: 'twins_classic_awning', label: 'Twins Classic Awning', productId: 'twins_classic_awning' },
        { id: 'parasol_umbrella', label: 'Parasol Umbrella', productId: 'parasol_umbrella' },
        { id: 'parasol_luxe_umbrella', label: 'Parasol Luxe Umbrella', productId: 'parasol_luxe_umbrella' },
        { id: 's_series_umbrella', label: 'S Series Umbrella', productId: 's_series_umbrella' },
        { id: 'folded_ceiling_curtain', label: 'Folded Ceiling Curtain', productId: 'folded_ceiling_curtain' }
      ]
    },
    subGroups: {
      falcate: [
        { id: 'minima', label: 'Minima', productId: 'falcate_minima' },
        { id: 'tectona', label: 'Tectona', productId: 'falcate_tectona' }
      ],
      subulate: [
        { id: 'minima', label: 'Minima', productId: 'subulate_minima' },
        { id: 'tectona', label: 'Tectona', productId: 'subulate_tectona' }
      ],
      unifoliate: [
        { id: 'minima', label: 'Minima', productId: 'unifoliate_minima' },
        { id: 'tectona', label: 'Tectona', productId: 'unifoliate_tectona' }
      ],
      pergo_rise: [],
      bcube: [
        { id: 'galaxy', label: 'Galaxy', productId: 'galaxy' },
        { id: 'space', label: 'Space', productId: 'space' },
        { id: 'galaxy_manual', label: 'Galaxy Manuel', productId: 'galaxy_manual' },
        { id: 'freedom', label: 'Freedom', productId: 'freedom' },
        { id: 'classic', label: 'Classic', productId: 'classic' },
        { id: 'infinity', label: 'Infinity', productId: 'infinity' },
        { id: 'urban', label: 'Urban', productId: 'urban' },
        { id: 'freedom_plus', label: 'Freedom Plus', productId: 'freedom_plus' },
        { id: 'classic_plus', label: 'Classic Plus', productId: 'classic_plus' }
      ],
      bio_rise: [],
      zip_screen: [
        { id: 'sun_store', label: 'Sun Store', productId: 'zip_screen_sun_store' },
        { id: 'manuel_store', label: 'Manuel Store', productId: 'zip_screen_manuel_store' },
        { id: 'sky_screen', label: 'Sky Screen', productId: 'zip_screen_sky_screen' }
      ]
    }
  },
  groups: {
    pergola: {
      label: 'Pergola / Fabric System',
      colorFields: ['Structure', 'Pergola Fabric', 'Screen Fabric'],
      lighting: ['Daylight', 'White', 'Linear Rgb+White', 'Spot', 'Linear', 'Other'],
      accessories: [
        'Sound System',
        'Dimmer Light',
        '2000W Heater',
        '3000W Heater',
        'Dimmer Heater',
        'Wind Sensor',
        'Vibration Sensor'
      ]
    },
    bcube: {
      label: 'B-Cube / Louver System',
      colorFields: ['Structure', 'Louver Blade'],
      lighting: ['Daylight', 'RGB', 'Linear Rgb+White', 'Other'],
      accessories: [
        'Louver Insulation',
        'Sound System',
        'Dimmer Light',
        '2000W Heater',
        '3000W Heater',
        'Dimmer Heater',
        'Wind Sensor',
        'Vibration Sensor'
      ]
    },
    bioRise: {
      label: 'Bio-Rise',
      colorFields: ['Structure', 'Panel'],
      lighting: ['Daylight', 'RGB', 'Linear Rgb+White', 'Other'],
      accessories: [
        'Sound System',
        'Dimmer Light',
        '2000W Heater',
        '3000W Heater',
        'Dimmer Heater',
        'Wind Sensor',
        'Vibration Sensor'
      ]
    }
  },
  pergolaForm: {
    projectDetails: [
      { id: 'productQuantity', label: 'Product Quantity', type: 'number', unitAuto: 'pcpcs' },
      { id: 'width', label: 'Width', type: 'number', unit: 'mm' },
      { id: 'projection', label: 'Projection', type: 'number', unit: 'mm' },
      { id: 'backH', label: 'Back H', type: 'number', unit: 'mm' },
      { id: 'frontH', label: 'Front H', type: 'number', unit: 'mm' },
      { id: 'parapetH', label: 'Parapet H', type: 'number', unit: 'mm' },
      { id: 'sideBeam', label: 'Side Beam', type: 'choice', options: ['Left', 'Right', 'Both', 'No'] },
      { id: 'waterOutletDetail', label: 'Water Outlet Detail', type: 'select', options: ['From Post', 'From Gutter'] },
      { id: 'waterOutletDirection', label: 'Water Outlet Direction', type: 'select', options: ['Front', 'Side'] },
      { id: 'pipeLengthType', label: 'Pipe Length', type: 'select', options: ['Standard', 'Other'] },
      { id: 'pipeLengthOther', label: 'Pipe Length Other', type: 'number', unit: 'mm', showWhen: { field: 'pipeLengthType', values: ['Other'] } },
      { id: 'connection', label: 'Connection', type: 'choice', options: ['Wall', 'Ceiling', 'Freestanding'] }
    ],
    colorDetails: [
      { id: 'structure', label: 'Structure', type: 'text', palette: true },
      { id: 'structureFinish', label: 'Finish', type: 'choice', options: window.PRODUCT_FINISH_OPTIONS },
      { id: 'fabric', label: 'Fabric', type: 'text', picker: 'fabric', fullWidth: true },
      { id: 'fabricProfile', label: 'Fabric Profile', type: 'text', palette: true },
      { id: 'fabricProfileFinish', label: 'Finish', type: 'choice', options: window.PRODUCT_FINISH_OPTIONS }
    ],
    operation: [
      { id: 'motor', label: 'Motor', type: 'select', options: ['No', 'Somfy RTS', 'Somfy IO'] },
      {
        id: 'remoteControlSomfyRts',
        label: 'Remote Control',
        type: 'choice',
        options: ['1 Channel', '2 Channels', '4 Channels', '16 Channels'],
        showWhen: { field: 'motor', values: ['Somfy RTS'] }
      },
      {
        id: 'remoteControlSomfyIo',
        label: 'Remote Control',
        type: 'choice',
        options: ['1 Channel', '2 Channels', '4 Channels', '40 Channels'],
        showWhen: { field: 'motor', values: ['Somfy IO'] }
      }
    ],
    lighting: [
      { id: 'lightingType', label: 'Lighting', type: 'choice', options: ['No', 'Daylight', 'White', 'RGB', 'Linear Rgb+White', 'Other'] },
      { id: 'lightingOther', label: 'Other Lighting', type: 'text', showWhen: { field: 'lightingType', values: ['Other'] } }
    ],
    dimmer: [
      { id: 'dimmer', label: 'Dimmer', type: 'choice', options: ['Yes', 'No'] }
    ],
    heaterPackaging: HEATER_SOUND_PACKING_FIELDS
  },
  galaxyForm: {
    projectDetails: [
      { id: 'width', label: 'Width', type: 'number', unit: 'mm' },
      { id: 'projection', label: 'Projection', type: 'number', unit: 'mm' },
      { id: 'heightTopOfGutter', label: 'Height (Top of The Gutter)', type: 'number', unit: 'mm' },
      { id: 'systemQuantity', label: 'System Quantity', type: 'number' }
    ],
    colorDetails: [
      { id: 'systemColor', label: 'System Color', type: 'text', palette: true },
      { id: 'systemColorFinish', label: 'Finish', type: 'choice', options: window.PRODUCT_FINISH_OPTIONS },
      { id: 'panelColor', label: 'Panel Color', type: 'text', palette: true },
      { id: 'panelColorFinish', label: 'Finish', type: 'choice', options: window.PRODUCT_FINISH_OPTIONS }
    ],
    operation: [
      { id: 'motor', label: 'Motor', type: 'select', options: ['No', 'Somfy RTS', 'Somfy IO'] },
      { id: 'remoteControlSomfyRts', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '16 Channels'], showWhen: { field: 'motor', values: ['Somfy RTS'] } },
      { id: 'remoteControlSomfyIo', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '40 Channels'], showWhen: { field: 'motor', values: ['Somfy IO'] } }
    ],
    panelOptions: [
      { id: 'panelIsolation', label: 'Panel Isolation', type: 'choice', options: ['Yes', 'No'] }
    ],
    lighting: [
      'Linear LED',
      'Linear RGB',
      'Linear Rgb+White',
      'Spot LED',
      'Other'
    ],
    dimmers: [
      { id: 'lightDimmerLinear', label: 'Light Dimmer (For Linear LED)', type: 'choice', options: ['Yes', 'No'] },
      { id: 'lightDimmerSpot', label: 'Light Dimmer (For Spot LED)', type: 'choice', options: ['Yes', 'No'] }
    ],
    sensors: [
      { id: 'rainSensor', label: 'Rain Sensor', type: 'choice', options: ['Yes', 'No'] },
      { id: 'vibrationSensor', label: 'Vibration Sensor', type: 'choice', options: ['Yes', 'No'] },
      { id: 'windSensor', label: 'Wind Sensor', type: 'choice', options: ['Yes', 'No'] },
      { id: 'windSunSensor', label: 'Wind & Sun Sensor', type: 'choice', options: ['Yes', 'No'] }
    ],
    heaterPackaging: HEATER_SOUND_PACKING_FIELDS
  },
  productFormOverrides: {
    galaxy: {
      operation: [
      { id: 'motor', label: 'Motor', type: 'select', options: ['No', 'T-Motion 350 (Somfy Rts) (120°)', 'T-Motion 300 (Somfy Rts) (90°)'] },
      {
        id: 'remoteControlSomfyRts',
        label: 'Remote Control',
        type: 'choice',
        options: ['1 Channel', '2 Channels', '4 Channels', '16 Channels'],
        showWhen: { field: 'motor', values: ['T-Motion 350 (Somfy Rts) (120°)', 'T-Motion 300 (Somfy Rts) (90°)'] }
      }
    ]
    },
    space: {
      operation: [
      { id: 'motor', label: 'Motor', type: 'select', options: ['No', 'T-Motion 350 (Somfy Rts) (120°)', 'T-Motion 300 (Somfy Rts) (90°)'] },
      {
        id: 'remoteControlSomfyRts',
        label: 'Remote Control',
        type: 'choice',
        options: ['1 Channel', '2 Channels', '4 Channels', '16 Channels'],
        showWhen: { field: 'motor', values: ['T-Motion 350 (Somfy Rts) (120°)', 'T-Motion 300 (Somfy Rts) (90°)'] }
      }
    ]
    },
    galaxy_manual: {
      operation: [],
      sensors: [],
      sectionsAfterDimmers: [
        {
          title: 'Remote Control',
          fields: [
            { id: 'remoteControl', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '16 Channels'] }
          ]
        }
      ]
    },
    pergo_rise: {
      projectDetailsAppend: [
        { id: 'motorDirection', label: 'Motor Direction', type: 'choice', options: ['Left', 'Right'] }
      ],
      operation: [
        { id: 'motor', label: 'Motor', type: 'select', options: ['No', 'Somfy RTS', 'Somfy IO', 'Rising Motor'] },
        {
          id: 'remoteControlSomfyRts',
          label: 'Remote Control',
          type: 'choice',
          options: ['1 Channel', '2 Channels', '4 Channels', '16 Channels'],
          showWhen: { field: 'motor', values: ['Somfy RTS'] }
        },
        {
          id: 'remoteControlSomfyIo',
          label: 'Remote Control',
          type: 'choice',
          options: ['1 Channel', '2 Channels', '4 Channels', '40 Channels'],
          showWhen: { field: 'motor', values: ['Somfy IO'] }
        },
        {
          id: 'remoteControlRising',
          label: 'Remote Control',
          type: 'choice',
          options: ['1 Channel', '6 Channels'],
          showWhen: { field: 'motor', values: ['Rising Motor'] }
        }
      ]
    },
    freedom: {
      hiddenItems: {
        lighting: ['Spot LED'],
        dimmers: ['lightDimmerSpot']
      }
    },
    classic: {
      hiddenItems: {
        lighting: ['Spot LED'],
        dimmers: ['lightDimmerSpot']
      }
    },
    infinity: {
      hiddenItems: {
        lighting: ['Spot LED'],
        dimmers: ['lightDimmerSpot']
      }
    },
    urban: {
      hiddenItems: {
        lighting: ['Spot LED'],
        dimmers: ['lightDimmerSpot']
      }
    },
    freedom_plus: {
      hiddenItems: {
        lighting: ['Spot LED'],
        dimmers: ['lightDimmerSpot']
      }
    },
    classic_plus: {
      hiddenItems: {
        lighting: ['Spot LED'],
        dimmers: ['lightDimmerSpot']
      }
    }
  },
  products: [
    { id: 'falcate_minima', name: 'FALCATE MINIMA', family: 'pergola', productGroup: 'falcate', subGroup: 'minima', group: 'pergola', formTemplate: 'pergolaForm' },
    { id: 'falcate_tectona', name: 'FALCATE TECTONA', family: 'pergola', productGroup: 'falcate', subGroup: 'tectona', group: 'pergola', formTemplate: 'pergolaForm' },
    { id: 'subulate_minima', name: 'SUBULATE MINIMA', family: 'pergola', productGroup: 'subulate', subGroup: 'minima', group: 'pergola', formTemplate: 'pergolaForm' },
    { id: 'subulate_tectona', name: 'SUBULATE TECTONA', family: 'pergola', productGroup: 'subulate', subGroup: 'tectona', group: 'pergola', formTemplate: 'pergolaForm' },
    { id: 'unifoliate_minima', name: 'UNIFOLIATE MINIMA', family: 'pergola', productGroup: 'unifoliate', subGroup: 'minima', group: 'pergola', formTemplate: 'pergolaForm' },
    { id: 'unifoliate_tectona', name: 'UNIFOLIATE TECTONA', family: 'pergola', productGroup: 'unifoliate', subGroup: 'tectona', group: 'pergola', formTemplate: 'pergolaForm' },
    { id: 'pergo_rise', name: 'PERGO RISE', family: 'pergola', productGroup: 'pergo_rise', subGroup: '', group: 'pergola', formTemplate: 'pergolaForm' },
    { id: 'galaxy', name: 'B-Cube GALAXY', family: 'bioclimatic', productGroup: 'bcube', subGroup: 'galaxy', group: 'bcube', formTemplate: 'galaxyForm' },
    { id: 'space', name: 'B-Cube SPACE', family: 'bioclimatic', productGroup: 'bcube', subGroup: 'space', group: 'bcube', formTemplate: 'galaxyForm' },
    { id: 'galaxy_manual', name: 'B-Cube GALAXY MANUEL', family: 'bioclimatic', productGroup: 'bcube', subGroup: 'galaxy_manual', group: 'bcube', formTemplate: 'galaxyForm' },
    { id: 'freedom', name: 'B-Cube FREEDOM', family: 'bioclimatic', productGroup: 'bcube', subGroup: 'freedom', group: 'bcube', formTemplate: 'galaxyForm' },
    { id: 'classic', name: 'B-Cube CLASSIC', family: 'bioclimatic', productGroup: 'bcube', subGroup: 'classic', group: 'bcube', formTemplate: 'galaxyForm' },
    { id: 'infinity', name: 'B-Cube INFINITY', family: 'bioclimatic', productGroup: 'bcube', subGroup: 'infinity', group: 'bcube', formTemplate: 'galaxyForm' },
    { id: 'urban', name: 'B-Cube URBAN', family: 'bioclimatic', productGroup: 'bcube', subGroup: 'urban', group: 'bcube', formTemplate: 'galaxyForm' },
    { id: 'freedom_plus', name: 'B-Cube FREEDOM PLUS', family: 'bioclimatic', productGroup: 'bcube', subGroup: 'freedom_plus', group: 'bcube', formTemplate: 'galaxyForm' },
    { id: 'classic_plus', name: 'B-Cube CLASSIC PLUS', family: 'bioclimatic', productGroup: 'bcube', subGroup: 'classic_plus', group: 'bcube', formTemplate: 'galaxyForm' },
    { id: 'bio_rise', name: 'BIO-RISE', family: 'bioclimatic', productGroup: 'bio_rise', subGroup: '', group: 'bioRise', formTemplate: 'galaxyForm', formVariant: 'galaxy' },
    { id: 'zip_screen_sun_store', name: 'ZIP SCREEN SUN STORE', family: 'zip_screen_awning_curtain', productGroup: 'zip_screen', subGroup: 'sun_store' },
    { id: 'zip_screen_manuel_store', name: 'ZIP SCREEN MANUEL STORE', family: 'zip_screen_awning_curtain', productGroup: 'zip_screen', subGroup: 'manuel_store' },
    { id: 'zip_screen_sky_screen', name: 'ZIP SCREEN SKY SCREEN', family: 'zip_screen_awning_curtain', productGroup: 'zip_screen', subGroup: 'sky_screen' },
    { id: 'janela_cassette_awning', name: 'JANELA CASSETTE AWNING', family: 'zip_screen_awning_curtain', productGroup: 'janela_cassette_awning', subGroup: '' },
    { id: 'pars_cassette_awning', name: 'PARS CASSETTE AWNING', family: 'zip_screen_awning_curtain', productGroup: 'pars_cassette_awning', subGroup: '' },
    { id: 'pars_plus_cassette_awning', name: 'PARS PLUS CASSETTE AWNING', family: 'zip_screen_awning_curtain', productGroup: 'pars_plus_cassette_awning', subGroup: '' },
    { id: 'pars_plus_luxe_cassette_awning', name: 'PARS PLUS LUXE CASSETTE AWNING', family: 'zip_screen_awning_curtain', productGroup: 'pars_plus_luxe_cassette_awning', subGroup: '' },
    { id: 'moonlight_classic_awning', name: 'MOONLIGHT CLASSIC AWNING', family: 'zip_screen_awning_curtain', productGroup: 'moonlight_classic_awning', subGroup: '' },
    { id: 'sunshine_classic_awning', name: 'SUNSHINE CLASSIC AWNING', family: 'zip_screen_awning_curtain', productGroup: 'sunshine_classic_awning', subGroup: '' },
    { id: 'twins_classic_awning', name: 'TWINS CLASSIC AWNING', family: 'zip_screen_awning_curtain', productGroup: 'twins_classic_awning', subGroup: '' },
    { id: 'parasol_umbrella', name: 'PARASOL UMBRELLA', family: 'zip_screen_awning_curtain', productGroup: 'parasol_umbrella', subGroup: '' },
    { id: 'parasol_luxe_umbrella', name: 'PARASOL LUXE UMBRELLA', family: 'zip_screen_awning_curtain', productGroup: 'parasol_luxe_umbrella', subGroup: '' },
    { id: 's_series_umbrella', name: 'S SERIES UMBRELLA', family: 'zip_screen_awning_curtain', productGroup: 's_series_umbrella', subGroup: '' },
    { id: 'folded_ceiling_curtain', name: 'FOLDED CEILING CURTAIN', family: 'zip_screen_awning_curtain', productGroup: 'folded_ceiling_curtain', subGroup: '' }
  ]
};


// C46 exact product overrides.
window.PRODUCT_DATA.productFormOverrides.galaxy = {
  ...(window.PRODUCT_DATA.productFormOverrides.galaxy || {}),
  operation: [
    { id: 'motor', label: 'Motor', type: 'select', options: ['No', 'T-Motion 350 (Somfy Rts) (120°)', 'T-Motion 300 (Somfy Rts) (90°)'] },
    {
      id: 'remoteControlSomfyRts',
      label: 'Remote Control',
      type: 'choice',
      options: ['1 Channel', '2 Channels', '4 Channels', '16 Channels'],
      showWhen: { field: 'motor', values: ['T-Motion 350 (Somfy Rts) (120°)', 'T-Motion 300 (Somfy Rts) (90°)'] }
    }
  ]
};
window.PRODUCT_DATA.productFormOverrides.space = {
  ...(window.PRODUCT_DATA.productFormOverrides.space || {}),
  operation: [
    { id: 'motor', label: 'Motor', type: 'select', options: ['No', 'T-Motion 350 (Somfy Rts) (120°)', 'T-Motion 300 (Somfy Rts) (90°)'] },
    {
      id: 'remoteControlSomfyRts',
      label: 'Remote Control',
      type: 'choice',
      options: ['1 Channel', '2 Channels', '4 Channels', '16 Channels'],
      showWhen: { field: 'motor', values: ['T-Motion 350 (Somfy Rts) (120°)', 'T-Motion 300 (Somfy Rts) (90°)'] }
    }
  ]
};
window.PRODUCT_DATA.galaxyForm.lighting = ['Linear LED', 'Linear RGB', 'Linear Rgb+White', 'Spot LED', 'Other'];
window.PRODUCT_DATA.pergolaForm.lighting = [
  { id: 'lightingType', label: 'Lighting', type: 'choice', options: ['No', 'Daylight', 'White', 'RGB', 'Linear Rgb+White', 'Other'] },
  { id: 'lightingOther', label: 'Other Lighting', type: 'text', showWhen: { field: 'lightingType', values: ['Other'] } }
];


// C51: Remote Control stays visible, but channel options change by motor type.
const PRF_REMOTE_DEFAULT_OPTIONS_C51 = ['1 Channel', '2 Channels', '4 Channels', '16 Channels'];
const PRF_REMOTE_IO_OPTIONS_C51 = ['1 Channel', '2 Channels', '4 Channels', '40 Channels'];
const PRF_REMOTE_RISING_OPTIONS_C51 = ['1 Channel', '6 Channels'];
const PRF_MOTOR_SOMFY_IO_C51 = 'Somfy IO';
const PRF_MOTOR_RISING_C51 = 'Rising Motor';

function prfRemoteDynamicOperation(operation) {
  const motorField = Array.isArray(operation) ? operation.find((field) => field && field.id === 'motor') : null;
  const motorOptions = Array.isArray(motorField?.options) ? motorField.options : [];
  const defaultMotorValues = ['', ...motorOptions.filter((value) => value !== PRF_MOTOR_SOMFY_IO_C51 && value !== PRF_MOTOR_RISING_C51)];
  const fields = [];
  if (motorField) fields.push(motorField);
  fields.push({
    id: 'remoteControl',
    label: 'Remote Control',
    type: 'choice',
    options: PRF_REMOTE_DEFAULT_OPTIONS_C51,
    showWhen: { field: 'motor', values: defaultMotorValues }
  });
  if (motorOptions.includes(PRF_MOTOR_SOMFY_IO_C51)) {
    fields.push({
      id: 'remoteControlSomfyIo',
      label: 'Remote Control',
      type: 'choice',
      options: PRF_REMOTE_IO_OPTIONS_C51,
      showWhen: { field: 'motor', values: [PRF_MOTOR_SOMFY_IO_C51] }
    });
  }
  if (motorOptions.includes(PRF_MOTOR_RISING_C51)) {
    fields.push({
      id: 'remoteControlRising',
      label: 'Remote Control',
      type: 'choice',
      options: PRF_REMOTE_RISING_OPTIONS_C51,
      showWhen: { field: 'motor', values: [PRF_MOTOR_RISING_C51] }
    });
  }
  return fields;
}
if (window.PRODUCT_DATA?.pergolaForm) {
  window.PRODUCT_DATA.pergolaForm.operation = prfRemoteDynamicOperation(window.PRODUCT_DATA.pergolaForm.operation);
}
if (window.PRODUCT_DATA?.galaxyForm) {
  window.PRODUCT_DATA.galaxyForm.operation = prfRemoteDynamicOperation(window.PRODUCT_DATA.galaxyForm.operation);
}
['galaxy', 'space', 'pergo_rise'].forEach((key) => {
  if (window.PRODUCT_DATA?.productFormOverrides?.[key]?.operation) {
    window.PRODUCT_DATA.productFormOverrides[key].operation = prfRemoteDynamicOperation(window.PRODUCT_DATA.productFormOverrides[key].operation);
  }
});


// C52: Janela Cassette Awning detailed order form.
window.JANELA_PRINT_COLOR_OPTIONS = [
  { value: '0001 White', code: '0001', name: 'White', image: 'assets/color-options/all-rall-code/ral-9003.jpg' },
  { value: '0020 Black', code: '0020', name: 'Black', image: 'assets/color-options/all-rall-code/ral-9005.jpg' },
  { value: '1987 Cream', code: '1987', name: 'Cream', image: 'assets/color-options/all-rall-code/ral-1013.jpg' },
  { value: '2040 Turquoise', code: '2040', name: 'Turquoise', image: 'assets/color-options/all-rall-code/ral-5018.jpg' },
  { value: '056 Pistachio Green', code: '056', name: 'Pistachio Green', image: 'assets/color-options/all-rall-code/ral-6029.jpg' },
  { value: '1003 Red', code: '1003', name: 'Red', image: 'assets/color-options/all-rall-code/ral-3000.jpg' },
  { value: 'Gold Gilding', code: 'Gold', name: 'Gold Gilding', image: 'assets/color-options/all-rall-code/ral-1003.jpg' },
  { value: 'Silver Gilding', code: 'Silver', name: 'Silver Gilding', image: 'assets/color-options/all-rall-code/ral-9006.jpg' }
];

window.PRODUCT_DATA.groups.zipAwning = {
  label: 'Zip Screen - Awning - Curtain',
  colorFields: ['System Color', 'Fabric Color'],
  lighting: [],
  accessories: []
};

window.PRODUCT_DATA.janelaForm = {
  projectDetails: [
    { id: 'systemQuantity', label: 'System Quantity', type: 'number', defaultValue: '1' },
    { id: 'width', label: 'Width', type: 'number', unit: 'mm' },
    { id: 'projection', label: 'Projection (mm)', type: 'select', options: ['500', '750', '1000', '1250', '1500', '1750', '2000'], defaultValue: '500' }
  ],
  colorDetails: [
    { id: 'armPlasticColor', label: 'Arm Plastic Color', type: 'choice', options: ['White', 'Black', 'Brown'], defaultValue: 'White' },
    { id: 'systemColor', label: 'System Color', type: 'text', palette: true, defaultValue: 'RAL 9016' },
    { id: 'systemColorFinish', label: 'Finish', type: 'choice', options: window.PRODUCT_FINISH_OPTIONS, defaultValue: 'Glossy' },
    { id: 'fabric', label: 'Fabric Color', type: 'text', picker: 'fabric', fullWidth: true }
  ],
  operation: [
    { id: 'controlType', label: 'Control Type', type: 'choice', options: ['Button Control', 'Remote Control'], defaultValue: 'Remote Control' },
    { id: 'motor', label: 'Motor', type: 'select', options: ['Somfy RTS', 'Somfy IO'], defaultValue: 'Somfy RTS' },
    { id: 'remoteControlSomfyRts', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '16 Channels'], showWhen: { field: 'motor', values: ['Somfy RTS'] } },
    { id: 'remoteControlSomfyIo', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '40 Channels'], showWhen: { field: 'motor', values: ['Somfy IO'] } }
  ],
  panelOptions: [],
  lighting: [],
  dimmers: [],
  sectionsAfterDimmers: [
    {
      title: 'Valance & Printing',
      fields: [
        { id: 'valanceType', label: 'Valance Type', type: 'select', options: ['Yok', 'Straight', 'Wavy'], defaultValue: 'Yok' },
        { id: 'valanceHeight', label: 'Valance Height', type: 'number', unit: 'mm', defaultValue: '250', showWhen: { field: 'valanceType', values: ['Straight', 'Wavy'] } },
        { id: 'valanceFabric', label: 'Valance Fabric', type: 'text', picker: 'fabric', fullWidth: true, showWhen: { field: 'valanceType', values: ['Straight', 'Wavy'] } },
        { id: 'printPlacement', label: 'Print Placement', type: 'choice', options: ['Valance', 'Body', 'Valance and Body'], showWhen: { field: 'valanceType', values: ['Straight', 'Wavy'] } },
        { id: 'printColor', label: 'Print Color', type: 'text', picker: 'textColor', fullWidth: true, showWhen: { field: 'valanceType', values: ['Straight', 'Wavy'] } }
      ]
    },
    {
      title: 'One Sided Roof',
      fields: [
        { id: 'oneSidedRoof', label: 'One Sided Roof', type: 'choice', options: ['Yok', 'Var'], defaultValue: 'Yok' },
        { id: 'roofColor', label: 'Roof Color', type: 'text', palette: true, defaultValue: 'RAL 9016', showWhen: { field: 'oneSidedRoof', values: ['Var'] } },
        { id: 'roofFinish', label: 'Roof Finish', type: 'choice', options: window.PRODUCT_FINISH_OPTIONS, defaultValue: 'Glossy', showWhen: { field: 'oneSidedRoof', values: ['Var'] } }
      ]
    },
    {
      title: 'Packing',
      fields: [
        { id: 'packagingType', label: 'Packaging Type', type: 'choice', options: ['Kraft', 'Air Bubble Wrap'], defaultValue: 'Kraft' }
      ]
    }
  ],
  sensors: [
    { id: 'rainSensor', label: 'Rain Sensor', type: 'choice', options: ['Yes', 'No'] },
    { id: 'vibrationSensor', label: 'Vibration Sensor', type: 'choice', options: ['Yes', 'No'] },
    { id: 'windSensor', label: 'Wind Sensor', type: 'choice', options: ['Yes', 'No'] },
    { id: 'windSunSensor', label: 'Wind & Sun Sensor', type: 'choice', options: ['Yes', 'No'] }
  ],
  heaterPackaging: []
};

{
  const janela = window.PRODUCT_DATA.products.find((item) => item.id === 'janela_cassette_awning');
  if (janela) Object.assign(janela, { group: 'zipAwning', formTemplate: 'janelaForm' });
}
