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
      { id: 'bioclimatic', label: 'Bioclimatic' }
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
      bio_rise: []
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
    { id: 'bio_rise', name: 'BIO-RISE', family: 'bioclimatic', productGroup: 'bio_rise', subGroup: '', group: 'bioRise', formTemplate: 'galaxyForm', formVariant: 'galaxy' }
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
