window.PRODUCT_DATA = {
  common: {
    installationTypes: ['', 'Wall', 'Ceiling', 'Freestanding'],
    glassTypes: ['None', 'Tempered Laminated', 'Clear Tempered', 'Clear Tempered + Air Space'],
    electricPower: ['', '220 V', '110 V'],
    motor: ['', 'Included', 'Not Included'],
    remoteControl: ['', '1 Channel', '4 Channel', '16 Channel'],
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
      { id: 'perde', label: 'Perde' }
    ],
    groups: {
      pergola: [
        { id: 'falcate', label: 'Falcate' },
        { id: 'subulate', label: 'Subulate' },
        { id: 'unifoliate', label: 'Unifoliate' }
      ],
      bioclimatic: [
        { id: 'bcube', label: 'B-Cube' },
        { id: 'rise', label: 'Rise' }
      ],
      perde: []
    },
    subGroups: {
      falcate: [
        { id: 'minima', label: 'Minima', productId: 'falcate_minima' },
        { id: 'tectona', label: 'Tectona', productId: 'falcate_tectona' },
        { id: 'pergo_rise', label: 'Pergo Rise', productId: 'falcate_pergo_rise' }
      ],
      subulate: [
        { id: 'minima', label: 'Minima', productId: 'subulate_minima' },
        { id: 'tectona', label: 'Tectona', productId: 'subulate_tectona' },
        { id: 'pergo_rise', label: 'Pergo Rise', productId: 'subulate_pergo_rise' }
      ],
      unifoliate: [
        { id: 'minima', label: 'Minima', productId: 'unifoliate_minima' },
        { id: 'tectona', label: 'Tectona', productId: 'unifoliate_tectona' },
        { id: 'pergo_rise', label: 'Pergo Rise', productId: 'unifoliate_pergo_rise' }
      ],
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
      rise: []
    }
  },
  groups: {
    pergola: {
      label: 'Pergola / Fabric System',
      colorFields: ['Structure', 'Pergola Fabric', 'Screen Fabric'],
      lighting: ['Daylight', 'White', 'Spot', 'Linear'],
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
      lighting: ['Daylight', 'RGB'],
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
    }
  },
  galaxyForm: {
    projectDetails: [
      { id: 'width', label: 'Width', type: 'number', unit: 'cm' },
      { id: 'projection', label: 'Projection', type: 'number', unit: 'cm' },
      { id: 'heightTopOfGutter', label: 'Height (Top of The Gutter)', type: 'number', unit: 'cm' },
      { id: 'systemQuantity', label: 'System Quantity', type: 'number' }
    ],
    colorDetails: [
      { id: 'systemColor', label: 'System Color', type: 'text' },
      { id: 'panelColor', label: 'Panel Color', type: 'text' }
    ],
    operation: [
      { id: 'motor', label: 'Motor', type: 'select', options: ['No', 'Somfy RTS', 'Somfy IO', 'Manual'], defaultValue: 'Somfy RTS' },
      { id: 'remoteControl', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channel', '4 Channel', '16 Channel'] }
    ],
    panelOptions: [
      { id: 'panelIsolation', label: 'Panel Isolation', type: 'choice', options: ['Yes', 'No'] }
    ],
    lighting: [
      'Light on the Gutter (Linear LED)',
      'Light on the Gutter (Linear RGB)',
      'Light on the Panel (Spot LED)'
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
    heaterPackaging: [
      { id: 'heater2000Quantity', label: 'Heater 2000W 220V Quantity', type: 'number', unitAuto: 'pcpcs' },
      { id: 'heater3000Quantity', label: 'Heater 3000W 220V Quantity', type: 'number', unitAuto: 'pcpcs' },
      { id: 'packagingType', label: 'Packaging Type', type: 'select', options: ['Wooden Box', 'Heavy-Duty Nylon'], defaultValue: 'Wooden Box' }
    ]
  },
  productFormOverrides: {
    galaxy: {},
    space: {},
    galaxy_manual: {},
    freedom: {},
    classic: {},
    infinity: {},
    urban: {},
    freedom_plus: {},
    classic_plus: {}
  },
  products: [
    { id: 'falcate_minima', name: 'FALCATE MINIMA', family: 'pergola', productGroup: 'falcate', subGroup: 'minima', group: 'pergola' },
    { id: 'falcate_tectona', name: 'FALCATE TECTONA', family: 'pergola', productGroup: 'falcate', subGroup: 'tectona', group: 'pergola' },
    { id: 'falcate_pergo_rise', name: 'FALCATE PERGO RISE', family: 'pergola', productGroup: 'falcate', subGroup: 'pergo_rise', group: 'pergola' },
    { id: 'subulate_minima', name: 'SUBULATE MINIMA', family: 'pergola', productGroup: 'subulate', subGroup: 'minima', group: 'pergola' },
    { id: 'subulate_tectona', name: 'SUBULATE TECTONA', family: 'pergola', productGroup: 'subulate', subGroup: 'tectona', group: 'pergola' },
    { id: 'subulate_pergo_rise', name: 'SUBULATE PERGO RISE', family: 'pergola', productGroup: 'subulate', subGroup: 'pergo_rise', group: 'pergola' },
    { id: 'unifoliate_minima', name: 'UNIFOLIATE MINIMA', family: 'pergola', productGroup: 'unifoliate', subGroup: 'minima', group: 'pergola' },
    { id: 'unifoliate_tectona', name: 'UNIFOLIATE TECTONA', family: 'pergola', productGroup: 'unifoliate', subGroup: 'tectona', group: 'pergola' },
    { id: 'unifoliate_pergo_rise', name: 'UNIFOLIATE PERGO RISE', family: 'pergola', productGroup: 'unifoliate', subGroup: 'pergo_rise', group: 'pergola' },
    { id: 'galaxy', name: 'B-Cube GALAXY', family: 'bioclimatic', productGroup: 'bcube', subGroup: 'galaxy', group: 'bcube', formTemplate: 'galaxyForm' },
    { id: 'space', name: 'B-Cube SPACE', family: 'bioclimatic', productGroup: 'bcube', subGroup: 'space', group: 'bcube', formTemplate: 'galaxyForm' },
    { id: 'galaxy_manual', name: 'B-Cube GALAXY MANUEL', family: 'bioclimatic', productGroup: 'bcube', subGroup: 'galaxy_manual', group: 'bcube', formTemplate: 'galaxyForm' },
    { id: 'freedom', name: 'B-Cube FREEDOM', family: 'bioclimatic', productGroup: 'bcube', subGroup: 'freedom', group: 'bcube', formTemplate: 'galaxyForm' },
    { id: 'classic', name: 'B-Cube CLASSIC', family: 'bioclimatic', productGroup: 'bcube', subGroup: 'classic', group: 'bcube', formTemplate: 'galaxyForm' },
    { id: 'infinity', name: 'B-Cube INFINITY', family: 'bioclimatic', productGroup: 'bcube', subGroup: 'infinity', group: 'bcube', formTemplate: 'galaxyForm' },
    { id: 'urban', name: 'B-Cube URBAN', family: 'bioclimatic', productGroup: 'bcube', subGroup: 'urban', group: 'bcube', formTemplate: 'galaxyForm' },
    { id: 'freedom_plus', name: 'B-Cube FREEDOM PLUS', family: 'bioclimatic', productGroup: 'bcube', subGroup: 'freedom_plus', group: 'bcube', formTemplate: 'galaxyForm' },
    { id: 'classic_plus', name: 'B-Cube CLASSIC PLUS', family: 'bioclimatic', productGroup: 'bcube', subGroup: 'classic_plus', group: 'bcube', formTemplate: 'galaxyForm' }
  ]
};
