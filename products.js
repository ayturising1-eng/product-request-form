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
  products: [
    { id: 'falcate_minima', name: 'FALCATE MINIMA', group: 'pergola' },
    { id: 'falcate_tectona', name: 'FALCATE TECTONA', group: 'pergola' },
    { id: 'subulate_minima', name: 'SUBULATE MINIMA', group: 'pergola' },
    { id: 'subulate_tectona', name: 'SUBULATE TECTONA', group: 'pergola' },
    { id: 'unifoliate_minima', name: 'UNIFOLIATE MINIMA', group: 'pergola' },
    { id: 'unifoliate_tectona', name: 'UNIFOLIATE TECTONA', group: 'pergola' },
    { id: 'freedom', name: 'B-Cube FREEDOM', group: 'bcube' },
    { id: 'freedom_plus', name: 'B-Cube FREEDOM PLUS', group: 'bcube' },
    { id: 'galaxy', name: 'B-Cube GALAXY', group: 'bcube', specialForm: 'galaxy' },
    { id: 'urban', name: 'B-Cube URBAN', group: 'bcube' }
  ]
};
