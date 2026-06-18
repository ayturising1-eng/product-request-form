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
  systemTypes: {
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
    },
    bioclimatic: {
      label: 'Bioclimatic System',
      colorFields: ['Structure', 'Blade'],
      lighting: ['Daylight', 'RGB', 'Linear', 'Spot'],
      accessories: [
        'Sound System',
        'Dimmer Light',
        '2000W Heater',
        '3000W Heater',
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
  products: [
    { id: 'falcate_minima', name: 'FALCATE MINIMA', family: 'Pergola', productGroup: 'Falcate', subGroup: 'Minima', systemType: 'pergola' },
    { id: 'falcate_tectona', name: 'FALCATE TECTONA', family: 'Pergola', productGroup: 'Falcate', subGroup: 'Tectona', systemType: 'pergola' },
    { id: 'subulate_minima', name: 'SUBULATE MINIMA', family: 'Pergola', productGroup: 'Subulate', subGroup: 'Minima', systemType: 'pergola' },
    { id: 'subulate_tectona', name: 'SUBULATE TECTONA', family: 'Pergola', productGroup: 'Subulate', subGroup: 'Tectona', systemType: 'pergola' },
    { id: 'unifoliate_minima', name: 'UNIFOLIATE MINIMA', family: 'Pergola', productGroup: 'Unifoliate', subGroup: 'Minima', systemType: 'pergola' },
    { id: 'unifoliate_tectona', name: 'UNIFOLIATE TECTONA', family: 'Pergola', productGroup: 'Unifoliate', subGroup: 'Tectona', systemType: 'pergola' },
    { id: 'pergo_rise', name: 'PERGO RISE', family: 'Pergola', productGroup: 'Pergo Rise', subGroup: '', systemType: 'pergola' },

    { id: 'bio_rise', name: 'BIO-RISE', family: 'Bioclimatic', productGroup: 'Bio-Rise', subGroup: '', systemType: 'bioclimatic' },

    { id: 'bcube_galaxy', name: 'B-Cube GALAXY', family: 'B-Cube', productGroup: 'B-Cube', subGroup: 'Galaxy', systemType: 'bcube', specialForm: 'galaxy' },
    { id: 'bcube_space', name: 'B-Cube SPACE', family: 'B-Cube', productGroup: 'B-Cube', subGroup: 'Space', systemType: 'bcube', specialForm: 'galaxy' },
    { id: 'bcube_galaxy_manuel', name: 'B-Cube GALAXY MANUEL', family: 'B-Cube', productGroup: 'B-Cube', subGroup: 'Galaxy Manuel', systemType: 'bcube', specialForm: 'galaxy' },
    { id: 'bcube_freedom', name: 'B-Cube FREEDOM', family: 'B-Cube', productGroup: 'B-Cube', subGroup: 'Freedom', systemType: 'bcube', specialForm: 'galaxy' },
    { id: 'bcube_classic', name: 'B-Cube CLASSIC', family: 'B-Cube', productGroup: 'B-Cube', subGroup: 'Classic', systemType: 'bcube', specialForm: 'galaxy' },
    { id: 'bcube_infinity', name: 'B-Cube INFINITY', family: 'B-Cube', productGroup: 'B-Cube', subGroup: 'Infinity', systemType: 'bcube', specialForm: 'galaxy' },
    { id: 'bcube_urban', name: 'B-Cube URBAN', family: 'B-Cube', productGroup: 'B-Cube', subGroup: 'Urban', systemType: 'bcube', specialForm: 'galaxy' },
    { id: 'bcube_freedom_plus', name: 'B-Cube FREEDOM PLUS', family: 'B-Cube', productGroup: 'B-Cube', subGroup: 'Freedom Plus', systemType: 'bcube', specialForm: 'galaxy' }
  ]
};
window.PRODUCT_DATA.groups = window.PRODUCT_DATA.systemTypes;
