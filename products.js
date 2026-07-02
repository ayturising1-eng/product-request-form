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
    motor: ['Included'],
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
      { id: 'zip_screen_awning_curtain', label: 'Zip Screen - Awning - Curtain' },
      { id: 'glass_systems', label: 'Glass Systems' }
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
        { id: 'moonlight_classic_awning', label: 'Moonlight Classic Awning' },
        { id: 'sunshine_classic_awning', label: 'Sunshine Classic Awning' },
        { id: 'twins_classic_awning', label: 'Twins Classic Awning' }
      ],
      glass_systems: [
        { id: 'glass_folding', label: 'Folding' },
        { id: 'glass_sliding', label: 'Sliding' },
        { id: 'glass_guillotine', label: 'Guillotine' },
        { id: 'glass_fixed_ceiling', label: 'Fixed Ceiling Glass', productId: 'glass_fixed_ceiling' }
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
      ],
      moonlight_classic_awning: [
        { id: 'motorlu', label: 'Motorlu', productId: 'moonlight_classic_awning_motorlu' },
        { id: 'sanzimanli', label: 'Şanzımanlı', productId: 'moonlight_classic_awning_sanzimanli' }
      ],
      sunshine_classic_awning: [
        { id: 'motorlu', label: 'Motorlu', productId: 'sunshine_classic_awning_motorlu' },
        { id: 'sanzimanli', label: 'Şanzımanlı', productId: 'sunshine_classic_awning_sanzimanli' }
      ],
      twins_classic_awning: [
        { id: 'motorlu', label: 'Motorlu', productId: 'twins_classic_awning_motorlu' },
        { id: 'sanzimanli', label: 'Şanzımanlı', productId: 'twins_classic_awning_sanzimanli' }
      ],
      glass_folding: [
        { id: 'a_series_premium', label: 'A Series – Premium', productId: 'glass_folding_a_series_premium' },
        { id: 'k_series_smart', label: 'K Series – Smart', productId: 'glass_folding_k_series_smart' }
      ],
      glass_sliding: [
        { id: 'a_series_premium', label: 'A Series – Premium', productId: 'glass_sliding_a_series_premium' },
        { id: 'k_series_smart', label: 'K Series – Smart', productId: 'glass_sliding_k_series_smart' }
      ],
      glass_guillotine: [
        { id: 'a_series_premium', label: 'A Series – Premium', productId: 'glass_guillotine_a_series_premium' },
        { id: 'k_series_smart', label: 'K Series – Smart', productId: 'glass_guillotine_k_series_smart' }
      ]
    }
  },
  groups: {
    pergola: {
      label: 'Pergola / Fabric System',
      colorFields: ['Structure', 'Pergola Fabric', 'Screen Fabric'],
      lighting: ['Daylight', 'White', 'Rgb+White', 'Spot', 'Linear', 'Other'],
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
    lightingDimmersTitle: 'Lighting & Dimmer',
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
      { id: 'motor', label: 'Motor', type: 'select', options: ['Somfy RTS', 'Somfy IO'] },
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
      { id: 'lightingType', label: 'Lighting', type: 'choice', options: ['No', 'Daylight', 'White', 'RGB', 'Rgb+White', 'Other'] },
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
      { id: 'motor', label: 'Motor', type: 'select', options: ['Somfy RTS', 'Somfy IO'] },
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
      { id: 'motor', label: 'Motor', type: 'select', options: ['T-Motion 350 (Somfy Rts) (120°)', 'T-Motion 300 (Somfy Rts) (90°)'] },
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
      { id: 'motor', label: 'Motor', type: 'select', options: ['T-Motion 350 (Somfy Rts) (120°)', 'T-Motion 300 (Somfy Rts) (90°)'] },
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
        { id: 'motor', label: 'Motor', type: 'select', options: ['Somfy RTS', 'Somfy IO', 'Rising Motor'] },
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
    { id: 'zip_screen_sun_store', name: 'ZIP SCREEN SUN STORE', family: 'zip_screen_awning_curtain', productGroup: 'zip_screen', subGroup: 'sun_store', group: 'zipAwning', formTemplate: 'janelaForm' },
    { id: 'zip_screen_manuel_store', name: 'ZIP SCREEN MANUEL STORE', family: 'zip_screen_awning_curtain', productGroup: 'zip_screen', subGroup: 'manuel_store', group: 'zipAwning', formTemplate: 'janelaForm' },
    { id: 'zip_screen_sky_screen', name: 'ZIP SCREEN SKY SCREEN', family: 'zip_screen_awning_curtain', productGroup: 'zip_screen', subGroup: 'sky_screen', group: 'zipAwning', formTemplate: 'janelaForm' },
    { id: 'janela_cassette_awning', name: 'JANELA CASSETTE AWNING', family: 'zip_screen_awning_curtain', productGroup: 'janela_cassette_awning', subGroup: '' },
    { id: 'pars_cassette_awning', name: 'PARS CASSETTE AWNING', family: 'zip_screen_awning_curtain', productGroup: 'pars_cassette_awning', subGroup: '' },
    { id: 'pars_plus_cassette_awning', name: 'PARS PLUS CASSETTE AWNING', family: 'zip_screen_awning_curtain', productGroup: 'pars_plus_cassette_awning', subGroup: '' },
    { id: 'pars_plus_luxe_cassette_awning', name: 'PARS PLUS LUXE CASSETTE AWNING', family: 'zip_screen_awning_curtain', productGroup: 'pars_plus_luxe_cassette_awning', subGroup: '' },
    { id: 'moonlight_classic_awning', name: 'MOONLIGHT CLASSIC AWNING', family: 'zip_screen_awning_curtain', productGroup: 'moonlight_classic_awning', subGroup: '' },
    { id: 'moonlight_classic_awning_motorlu', name: 'MOONLIGHT CLASSIC AWNING MOTORLU', family: 'zip_screen_awning_curtain', productGroup: 'moonlight_classic_awning', subGroup: 'motorlu', group: 'zipAwning', formTemplate: 'janelaForm' },
    { id: 'moonlight_classic_awning_sanzimanli', name: 'MOONLIGHT CLASSIC AWNING ŞANZIMANLI', family: 'zip_screen_awning_curtain', productGroup: 'moonlight_classic_awning', subGroup: 'sanzimanli', group: 'zipAwning', formTemplate: 'janelaForm' },
    { id: 'sunshine_classic_awning', name: 'SUNSHINE CLASSIC AWNING', family: 'zip_screen_awning_curtain', productGroup: 'sunshine_classic_awning', subGroup: '' },
    { id: 'sunshine_classic_awning_motorlu', name: 'SUNSHINE CLASSIC AWNING MOTORLU', family: 'zip_screen_awning_curtain', productGroup: 'sunshine_classic_awning', subGroup: 'motorlu', group: 'zipAwning', formTemplate: 'janelaForm' },
    { id: 'sunshine_classic_awning_sanzimanli', name: 'SUNSHINE CLASSIC AWNING ŞANZIMANLI', family: 'zip_screen_awning_curtain', productGroup: 'sunshine_classic_awning', subGroup: 'sanzimanli', group: 'zipAwning', formTemplate: 'janelaForm' },
    { id: 'twins_classic_awning', name: 'TWINS CLASSIC AWNING', family: 'zip_screen_awning_curtain', productGroup: 'twins_classic_awning', subGroup: '' },
    { id: 'twins_classic_awning_motorlu', name: 'TWINS CLASSIC AWNING MOTORLU', family: 'zip_screen_awning_curtain', productGroup: 'twins_classic_awning', subGroup: 'motorlu', group: 'zipAwning', formTemplate: 'janelaForm' },
    { id: 'twins_classic_awning_sanzimanli', name: 'TWINS CLASSIC AWNING ŞANZIMANLI', family: 'zip_screen_awning_curtain', productGroup: 'twins_classic_awning', subGroup: 'sanzimanli', group: 'zipAwning', formTemplate: 'janelaForm' },
    { id: 'glass_folding_a_series_premium', name: 'GLASS SYSTEMS FOLDING A SERIES – PREMIUM', family: 'glass_systems', productGroup: 'glass_folding', subGroup: 'a_series_premium' },
    { id: 'glass_folding_k_series_smart', name: 'GLASS SYSTEMS FOLDING K SERIES – SMART', family: 'glass_systems', productGroup: 'glass_folding', subGroup: 'k_series_smart' },
    { id: 'glass_sliding_a_series_premium', name: 'GLASS SYSTEMS SLIDING A SERIES – PREMIUM', family: 'glass_systems', productGroup: 'glass_sliding', subGroup: 'a_series_premium' },
    { id: 'glass_sliding_k_series_smart', name: 'GLASS SYSTEMS SLIDING K SERIES – SMART', family: 'glass_systems', productGroup: 'glass_sliding', subGroup: 'k_series_smart' },
    { id: 'glass_guillotine_a_series_premium', name: 'GLASS SYSTEMS GUILLOTINE A SERIES – PREMIUM', family: 'glass_systems', productGroup: 'glass_guillotine', subGroup: 'a_series_premium' },
    { id: 'glass_guillotine_k_series_smart', name: 'GLASS SYSTEMS GUILLOTINE K SERIES – SMART', family: 'glass_systems', productGroup: 'glass_guillotine', subGroup: 'k_series_smart' },
    { id: 'glass_fixed_ceiling', name: 'GLASS SYSTEMS FIXED CEILING GLASS', family: 'glass_systems', productGroup: 'glass_fixed_ceiling', subGroup: '', group: 'pergola', formTemplate: 'pergolaForm' }
  ]
};


// C46 exact product overrides.
window.PRODUCT_DATA.productFormOverrides.galaxy = {
  ...(window.PRODUCT_DATA.productFormOverrides.galaxy || {}),
  operation: [
    { id: 'motor', label: 'Motor', type: 'select', options: ['T-Motion 350 (Somfy Rts) (120°)', 'T-Motion 300 (Somfy Rts) (90°)'] },
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
    { id: 'motor', label: 'Motor', type: 'select', options: ['T-Motion 350 (Somfy Rts) (120°)', 'T-Motion 300 (Somfy Rts) (90°)'] },
    {
      id: 'remoteControlSomfyRts',
      label: 'Remote Control',
      type: 'choice',
      options: ['1 Channel', '2 Channels', '4 Channels', '16 Channels'],
      showWhen: { field: 'motor', values: ['T-Motion 350 (Somfy Rts) (120°)', 'T-Motion 300 (Somfy Rts) (90°)'] }
    }
  ]
};
window.PRODUCT_DATA.productFormOverrides.bio_rise = {
  ...(window.PRODUCT_DATA.productFormOverrides.bio_rise || {}),
  operation: [
    { id: 'motor', label: 'Motor & Reducer', type: 'select', options: ['Motorlu', 'Manuel'] },
    {
      id: 'remoteControl',
      label: 'Remote Control',
      type: 'choice',
      options: ['1 Channel', '2 Channels', '4 Channels', '16 Channels'],
      showWhen: { field: 'motor', values: ['Motorlu'] }
    }
  ]
};
window.PRODUCT_DATA.galaxyForm.lighting = ['Linear LED', 'Linear RGB', 'Linear Rgb+White', 'Spot LED', 'Other'];
window.PRODUCT_DATA.galaxyForm.lightingDimmersTitle = 'Lighting & Dimmer';
window.PRODUCT_DATA.pergolaForm.lighting = [
  { id: 'lightingType', label: 'Lighting', type: 'choice', options: ['No', 'Daylight', 'White', 'RGB', 'Rgb+White', 'Other'] },
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
    { id: 'systemQuantity', label: 'System Quantity', type: 'number', min: '1', step: '1' },
    { id: 'width', label: 'Width', type: 'number', unit: 'mm', max: '4000', hint: 'Max. 4000 mm' },
    { id: 'projection', label: 'Projection (mm)', type: 'select', options: ['500', '750', '1000', '1250', '1500', '1750', '2000'], hint: '500-2000 mm / 200 mm' }
  ],
  colorDetails: [
    { id: 'systemColor', label: 'System Color', type: 'text', palette: true },
    { id: 'systemColorFinish', label: 'Finish', type: 'choice', options: window.PRODUCT_FINISH_OPTIONS },
    { id: 'armPlasticColor', label: 'Arm Plastic Color', type: 'choice', options: ['White', 'Black', 'Brown'] },
    { id: 'fabric', label: 'Fabric Color', type: 'text', picker: 'fabric', fullWidth: true }
  ],
  operation: [
    { id: 'controlType', label: 'Control Type', type: 'choice', options: ['Button Control', 'Remote Control'] },
    { id: 'motor', label: 'Motor', type: 'select', options: ['Somfy RTS', 'Somfy IO'] },
    { id: 'motorDirection', label: 'Motor Direction', type: 'choice', options: ['Left', 'Right'] },
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
        { id: 'valanceType', label: 'Valance Type', type: 'select', options: ['Yok', 'Straight', 'Wavy'] },
        { id: 'valanceHeight', label: 'Valance Height', type: 'number', unit: 'mm', showWhen: { field: 'valanceType', values: ['Straight', 'Wavy'] } },
        { id: 'valanceFabric', label: 'Valance Fabric', type: 'text', picker: 'fabric', fullWidth: true, showWhen: { field: 'valanceType', values: ['Straight', 'Wavy'] } },
        { id: 'printPlacement', label: 'Print Placement', type: 'choice', options: ['Valance', 'Body', 'Valance and Body'], showWhen: { field: 'valanceType', values: ['Straight', 'Wavy'] } },
        { id: 'printColor', label: 'Print Color', type: 'text', picker: 'textColor', fullWidth: true, showWhen: { field: 'valanceType', values: ['Straight', 'Wavy'] } }
      ]
    },
    {
      title: 'One Sided Roof',
      fields: [
        { id: 'oneSidedRoof', label: 'One Sided Roof', type: 'choice', options: ['Yok', 'Var'] },
        { id: 'roofColor', label: 'Roof Color', type: 'text', palette: true, showWhen: { field: 'oneSidedRoof', values: ['Var'] } },
        { id: 'roofFinish', label: 'Roof Finish', type: 'choice', options: window.PRODUCT_FINISH_OPTIONS, showWhen: { field: 'oneSidedRoof', values: ['Var'] } }
      ]
    },
    {
      title: 'Packing',
      fields: [
        { id: 'packagingType', label: 'Packaging Type', type: 'choice', options: ['Kraft', 'Air Bubble Wrap'] }
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

window.PRODUCT_DATA.productFormOverrides.pars_cassette_awning = {
  ...(window.PRODUCT_DATA.productFormOverrides.pars_cassette_awning || {}),
  projectDetails: [
    { id: 'systemQuantity', label: 'System Quantity', type: 'number', min: '1', step: '1' },
    { id: 'width', label: 'Width', type: 'number', unit: 'mm', max: '5000', hint: 'Max. 5000 mm | Açılım < Genişlik' },
    { id: 'projection', label: 'Projection (mm)', type: 'select', options: ['1500', '2000', '2500', '3000'], hint: '1500-3000 mm / 500 mm' }
  ]
};

window.PRODUCT_DATA.productFormOverrides.pars_plus_cassette_awning = {
  ...(window.PRODUCT_DATA.productFormOverrides.pars_plus_cassette_awning || {}),
  projectDetails: [
    { id: 'systemQuantity', label: 'System Quantity', type: 'number', min: '1', step: '1' },
    { id: 'width', label: 'Width', type: 'number', unit: 'mm', max: '7000', hint: 'Max. 7000 mm | Açılım < Genişlik' },
    { id: 'projection', label: 'Projection (mm)', type: 'select', options: ['1500', '2000', '2500', '3000', '3500'], hint: '1500-3500 mm / 500 mm' }
  ]
};

window.PRODUCT_DATA.productFormOverrides.pars_plus_luxe_cassette_awning = {
  ...(window.PRODUCT_DATA.productFormOverrides.pars_plus_luxe_cassette_awning || {}),
  projectDetails: [
    { id: 'systemQuantity', label: 'System Quantity', type: 'number', min: '1', step: '1' },
    { id: 'width', label: 'Width', type: 'number', unit: 'mm', max: '7000', hint: 'Max. 7000 mm | Açılım < Genişlik' },
    { id: 'projection', label: 'Projection (mm)', type: 'select', options: ['1500', '2000', '2500', '3000'], hint: '1500-3000 mm / 500 mm' }
  ]
};

{
  ['janela_cassette_awning', 'pars_cassette_awning', 'pars_plus_cassette_awning', 'pars_plus_luxe_cassette_awning'].forEach((id) => {
    const product = window.PRODUCT_DATA.products.find((item) => item.id === id);
    if (product) Object.assign(product, { group: 'zipAwning', formTemplate: 'janelaForm' });
  });
}


// C73: Pars Plus Luxe and Moonlight awning operation variants.
const PRF_C73_CRANK_LENGTH_OPTIONS = ['Yok', '1200 mm', '1500 mm', '1800 mm', '2000 mm', '2500 mm'];
const PRF_C73_PARS_PLUS_LUXE_PROJECT_DETAILS = [
  { id: 'systemQuantity', label: 'System Quantity', type: 'number', min: '1', step: '1' },
  { id: 'width', label: 'Width', type: 'number', unit: 'mm', max: '7000', hint: 'Max. 7000 mm | Açılım < Genişlik' },
  { id: 'projection', label: 'Projection (mm)', type: 'select', options: ['1500', '2000', '2500', '3000'], hint: '1500-3000 mm / 500 mm' }
];
const PRF_C76_SUNSHINE_PROJECT_DETAILS = [
  { id: 'systemQuantity', label: 'System Quantity', type: 'number', min: '1', step: '1' },
  { id: 'width', label: 'Width', type: 'number', unit: 'mm', max: '7000', hint: 'Max. 7000 mm | Açılım < Genişlik' },
  { id: 'projection', label: 'Projection (mm)', type: 'select', options: ['1500', '2000', '2500', '3000', '3500', '4000'], hint: '1500-4000 mm / 500 mm' }
];
const PRF_C73_PARS_PLUS_LUXE_OPERATION = [
  { id: 'controlType', label: 'Control Type', type: 'choice', options: ['Button Control', 'Remote Control'] },
  { id: 'motor', label: 'Motor', type: 'select', options: ['Somfy RTS', 'Somfy IO'] },
  { id: 'motorDirection', label: 'Motor Direction', type: 'choice', options: ['Left', 'Right'] },
  { id: 'dimmerForLight', label: 'Dimmer For Light', type: 'choice', options: ['Yes', 'No'] },
  { id: 'remoteControlSomfyRts', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '16 Channels'], showWhen: { field: 'motor', values: ['Somfy RTS'] } },
  { id: 'remoteControlSomfyIo', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '40 Channels'], showWhen: { field: 'motor', values: ['Somfy IO'] } }
];
window.PRODUCT_DATA.productFormOverrides.pars_plus_luxe_cassette_awning = {
  ...(window.PRODUCT_DATA.productFormOverrides.pars_plus_luxe_cassette_awning || {}),
  projectDetails: PRF_C73_PARS_PLUS_LUXE_PROJECT_DETAILS,
  operation: PRF_C73_PARS_PLUS_LUXE_OPERATION
};
window.PRODUCT_DATA.productFormOverrides.moonlight_classic_awning_motorlu = {
  ...(window.PRODUCT_DATA.productFormOverrides.moonlight_classic_awning_motorlu || {}),
  projectDetails: PRF_C73_PARS_PLUS_LUXE_PROJECT_DETAILS,
  operation: [
    ...PRF_C73_PARS_PLUS_LUXE_OPERATION,
    { id: 'crankHandleLength', label: 'Crank Handle Length', type: 'select', options: PRF_C73_CRANK_LENGTH_OPTIONS }
  ]
};
window.PRODUCT_DATA.productFormOverrides.moonlight_classic_awning_sanzimanli = {
  ...(window.PRODUCT_DATA.productFormOverrides.moonlight_classic_awning_sanzimanli || {}),
  operationTitle: 'Compatible Sensor & Remote Control',
  projectDetails: PRF_C73_PARS_PLUS_LUXE_PROJECT_DETAILS,
  operation: [
    { id: 'gearboxDirection', label: 'Gearbox Direction', type: 'choice', options: ['Left', 'Right'] },
    { id: 'crankHandleLength', label: 'Crank Handle Length', type: 'select', options: PRF_C73_CRANK_LENGTH_OPTIONS },
    { id: 'motor', label: 'Compatible Sensor', type: 'select', options: ['Somfy RTS', 'Somfy IO'] },
    { id: 'remoteControlSomfyRts', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '16 Channels'], showWhen: { field: 'motor', values: ['Somfy RTS'] } },
    { id: 'remoteControlSomfyIo', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '40 Channels'], showWhen: { field: 'motor', values: ['Somfy IO'] } },
    { id: 'dimmerForLight', label: 'Dimmer For Light', type: 'choice', options: ['Yes', 'No'] }
  ]
};
const PRF_C75_PARS_PLUS_LUXE_OPERATION_NO_DIMMER = PRF_C73_PARS_PLUS_LUXE_OPERATION.filter((item) => item.id !== 'dimmerForLight');
window.PRODUCT_DATA.productFormOverrides.sunshine_classic_awning_motorlu = {
  ...(window.PRODUCT_DATA.productFormOverrides.sunshine_classic_awning_motorlu || {}),
  projectDetails: PRF_C76_SUNSHINE_PROJECT_DETAILS,
  operation: [
    ...PRF_C75_PARS_PLUS_LUXE_OPERATION_NO_DIMMER,
    { id: 'crankHandleLength', label: 'Crank Handle Length', type: 'select', options: PRF_C73_CRANK_LENGTH_OPTIONS }
  ]
};
window.PRODUCT_DATA.productFormOverrides.sunshine_classic_awning_sanzimanli = {
  ...(window.PRODUCT_DATA.productFormOverrides.sunshine_classic_awning_sanzimanli || {}),
  operationTitle: 'Compatible Sensor & Remote Control',
  projectDetails: PRF_C76_SUNSHINE_PROJECT_DETAILS,
  operation: [
    { id: 'gearboxDirection', label: 'Gearbox Direction', type: 'choice', options: ['Left', 'Right'] },
    { id: 'crankHandleLength', label: 'Crank Handle Length', type: 'select', options: PRF_C73_CRANK_LENGTH_OPTIONS },
    { id: 'motor', label: 'Compatible Sensor', type: 'select', options: ['Somfy RTS', 'Somfy IO'] },
    { id: 'remoteControlSomfyRts', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '16 Channels'], showWhen: { field: 'motor', values: ['Somfy RTS'] } },
    { id: 'remoteControlSomfyIo', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '40 Channels'], showWhen: { field: 'motor', values: ['Somfy IO'] } }
  ]
};

const PRF_C77_TWINS_PROJECT_DETAILS = [
  { id: 'systemQuantity', label: 'System Quantity', type: 'number', min: '1', step: '1' },
  { id: 'width', label: 'Width', type: 'number', unit: 'mm', max: '7000', hint: 'Max. 7000 mm | Açılım 1 ve Açılım 2 genişlikten küçük olmalı' },
  { id: 'projection1', label: 'Projection 1 (mm)', type: 'select', options: ['1500', '2000', '2500', '3000', '3500', '4000'], hint: 'Açılım 1 | 1500-4000 mm / 500 mm' },
  { id: 'projection2', label: 'Projection 2 (mm)', type: 'select', options: ['1500', '2000', '2500', '3000', '3500', '4000'], hint: 'Açılım 2 | 1500-4000 mm / 500 mm' }
];
const PRF_C77_TWINS_MOTORLU_OPERATION = [
  { id: 'controlType', label: 'Control Type', type: 'choice', options: ['Button Control', 'Remote Control'] },
  { id: 'motor', label: 'Motor', type: 'select', options: ['Somfy RTS', 'Somfy IO'] },
  { id: 'motorDirection1', label: 'Motor Direction 1', type: 'choice', options: ['Left', 'Right'] },
  { id: 'motorDirection2', label: 'Motor Direction 2', type: 'choice', options: ['Same side as Direction 1', 'Opposite side of Direction 1'] },
  { id: 'remoteControlSomfyRts', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '16 Channels'], showWhen: { field: 'motor', values: ['Somfy RTS'] } },
  { id: 'remoteControlSomfyIo', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '40 Channels'], showWhen: { field: 'motor', values: ['Somfy IO'] } },
  { id: 'crankHandleLength', label: 'Crank Handle Length', type: 'select', options: PRF_C73_CRANK_LENGTH_OPTIONS }
];
const PRF_C77_TWINS_SANZIMANLI_OPERATION = [
  { id: 'gearboxDirection1', label: 'Gearbox Direction 1', type: 'choice', options: ['Left', 'Right'] },
  { id: 'gearboxDirection2', label: 'Gearbox Direction 2', type: 'choice', options: ['Same side as Direction 1', 'Opposite side of Direction 1'] },
  { id: 'crankHandleLength', label: 'Crank Handle Length', type: 'select', options: PRF_C73_CRANK_LENGTH_OPTIONS },
  { id: 'motor', label: 'Compatible Sensor', type: 'select', options: ['Somfy RTS', 'Somfy IO'] },
  { id: 'remoteControlSomfyRts', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '16 Channels'], showWhen: { field: 'motor', values: ['Somfy RTS'] } },
  { id: 'remoteControlSomfyIo', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '40 Channels'], showWhen: { field: 'motor', values: ['Somfy IO'] } }
];
window.PRODUCT_DATA.productFormOverrides.twins_classic_awning_motorlu = {
  ...(window.PRODUCT_DATA.productFormOverrides.twins_classic_awning_motorlu || {}),
  projectDetails: PRF_C77_TWINS_PROJECT_DETAILS,
  operation: PRF_C77_TWINS_MOTORLU_OPERATION
};
window.PRODUCT_DATA.productFormOverrides.twins_classic_awning_sanzimanli = {
  ...(window.PRODUCT_DATA.productFormOverrides.twins_classic_awning_sanzimanli || {}),
  operationTitle: 'Compatible Sensor & Remote Control',
  projectDetails: PRF_C77_TWINS_PROJECT_DETAILS,
  operation: PRF_C77_TWINS_SANZIMANLI_OPERATION
};
{
  ['moonlight_classic_awning_motorlu', 'moonlight_classic_awning_sanzimanli', 'sunshine_classic_awning_motorlu', 'sunshine_classic_awning_sanzimanli', 'twins_classic_awning_motorlu', 'twins_classic_awning_sanzimanli'].forEach((id) => {
    const product = window.PRODUCT_DATA.products.find((item) => item.id === id);
    if (product) Object.assign(product, { group: 'zipAwning', formTemplate: 'janelaForm' });
  });
}



// C78: Twins Classic Awning does not use One Sided Roof.
const PRF_C78_TWINS_SECTIONS_AFTER_DIMMERS = (window.PRODUCT_DATA.janelaForm.sectionsAfterDimmers || [])
  .filter((section) => section?.title !== 'One Sided Roof');
['twins_classic_awning_motorlu', 'twins_classic_awning_sanzimanli'].forEach((id) => {
  window.PRODUCT_DATA.productFormOverrides[id] = {
    ...(window.PRODUCT_DATA.productFormOverrides[id] || {}),
    sectionsAfterDimmers: PRF_C78_TWINS_SECTIONS_AFTER_DIMMERS
  };
});

// C74: Remove Arm Plastic Color from Pars / Moonlight awning variants only.
(function removeArmPlasticForParsMoonlight() {
  const ids = [
    'pars_cassette_awning',
    'pars_plus_cassette_awning',
    'pars_plus_luxe_cassette_awning',
    'moonlight_classic_awning_motorlu',
    'moonlight_classic_awning_sanzimanli',
    'sunshine_classic_awning_motorlu',
    'sunshine_classic_awning_sanzimanli',
    'twins_classic_awning_motorlu',
    'twins_classic_awning_sanzimanli'
  ];
  ids.forEach((id) => {
    const current = window.PRODUCT_DATA.productFormOverrides[id] || {};
    const hiddenItems = { ...(current.hiddenItems || {}) };
    hiddenItems.colorDetails = Array.from(new Set([...(hiddenItems.colorDetails || []), 'armPlasticColor']));
    window.PRODUCT_DATA.productFormOverrides[id] = { ...current, hiddenItems };
  });
})();


// C87: ZIP Screen Sun Store / Sky Screen / Manuel Store use Serge Ferrari catalog.
const PRF_C87_SUN_SKY_PROJECT_DETAILS = [
  { id: 'systemQuantity', label: 'System Quantity', type: 'number', min: '1', step: '1' },
  { id: 'width', label: 'Width', type: 'number', unit: 'mm', max: '7000', hint: 'Max. 7000 mm' },
  { id: 'projection', label: 'Projection (mm)', type: 'number', unit: 'mm', max: '6000', hint: 'Açılım maks. 6000 mm' }
];
const PRF_C87_MANUEL_STORE_PROJECT_DETAILS = [
  { id: 'systemQuantity', label: 'System Quantity', type: 'number', min: '1', step: '1' },
  { id: 'width', label: 'Width', type: 'number', unit: 'mm', max: '4000', hint: 'Max. 4000 mm' },
  { id: 'projection', label: 'Projection (mm)', type: 'number', unit: 'mm', max: '3000', hint: 'Açılım maks. 3000 mm' }
];
const PRF_C87_ZIP_SCREEN_COLOR_DETAILS = [
  { id: 'systemColor', label: 'System Color', type: 'text', palette: true },
  { id: 'systemColorFinish', label: 'Finish', type: 'choice', options: window.PRODUCT_FINISH_OPTIONS },
  { id: 'fabric', label: 'Fabric Color', type: 'text', picker: 'fabric', fullWidth: true }
];
const PRF_C87_ZIP_SCREEN_OPERATION = [
  { id: 'controlType', label: 'Control Type', type: 'choice', options: ['Button Control', 'Remote Control'] },
  { id: 'motor', label: 'Motor', type: 'select', options: ['Somfy RTS', 'Somfy IO', 'Rising'] },
  { id: 'motorDirection', label: 'Motor Direction', type: 'choice', options: ['Left', 'Right'] },
  { id: 'cableOutlet', label: 'Cable Outlet', type: 'choice', options: ['Top', 'Rear', 'Side'] },
  { id: 'remoteControlSomfyRts', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '16 Channels'], showWhen: { field: 'motor', values: ['Somfy RTS'] } },
  { id: 'remoteControlSomfyIo', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '40 Channels'], showWhen: { field: 'motor', values: ['Somfy IO'] } },
  { id: 'remoteControlRising', label: 'Remote Control', type: 'choice', options: ['1 Channel', '6 Channels'], showWhen: { field: 'motor', values: ['Rising'] } }
];
const PRF_C87_ZIP_SCREEN_SECTIONS_AFTER_DIMMERS = (window.PRODUCT_DATA.janelaForm.sectionsAfterDimmers || [])
  .filter((section) => !['Valance & Printing', 'One Sided Roof', 'Packing'].includes(section?.title));
function PRF_C87_applyZipScreenOverride(id, projectDetails, { operation = PRF_C87_ZIP_SCREEN_OPERATION, sectionsAfterDimmers = PRF_C87_ZIP_SCREEN_SECTIONS_AFTER_DIMMERS, sensors } = {}) {
  const current = window.PRODUCT_DATA.productFormOverrides[id] || {};
  window.PRODUCT_DATA.productFormOverrides[id] = {
    ...current,
    projectDetails,
    colorDetails: PRF_C87_ZIP_SCREEN_COLOR_DETAILS,
    operation,
    sectionsAfterDimmers,
    ...(Array.isArray(sensors) ? { sensors } : {}),
    hiddenItems: {
      ...(current.hiddenItems || {}),
      colorDetails: Array.from(new Set([...(current.hiddenItems?.colorDetails || []), 'armPlasticColor']))
    }
  };
}
PRF_C87_applyZipScreenOverride('zip_screen_sun_store', PRF_C87_SUN_SKY_PROJECT_DETAILS);
PRF_C87_applyZipScreenOverride('zip_screen_sky_screen', PRF_C87_SUN_SKY_PROJECT_DETAILS);
PRF_C87_applyZipScreenOverride('zip_screen_manuel_store', PRF_C87_MANUEL_STORE_PROJECT_DETAILS, {
  operation: [],
  sectionsAfterDimmers: [],
  sensors: []
});


// C89: Glass Systems / Folding / A Series Premium custom form.
const PRF_C89_FOLDING_A_PROJECT_DETAILS = [
  { id: 'foldingType', label: 'Type', type: 'choice', options: ['Standard', 'Top-Hung'] },
  { id: 'glassThickness', label: 'Glass Thickness', type: 'choice', options: ['8 mm', '10 mm', '12 mm', 'Insulated Glass'] },
  { id: 'width', label: 'Width', type: 'number', unit: 'mm', max: '6400', hint: 'Max. 8 Panel | Max. Panel Genişlik 800 mm' },
  { id: 'height', label: 'Height', type: 'number', unit: 'mm', hint: 'Cam kalınlığına göre Max. değer' },
  { id: 'panelCount', label: 'Panel Count', type: 'number', min: '1', max: '8', step: '1' },
  { id: 'systemQuantity', label: 'Quantity', type: 'number', min: '1', step: '1' },
  { id: 'stackingDirectionInsideView', label: 'Leaf Stacking Direction (Inside View)', type: 'choice', options: ['Right', 'Left'] }
];
const PRF_C89_FOLDING_A_COLOR_DETAILS = [
  { id: 'systemColor', label: 'System Color', type: 'text', palette: true },
  { id: 'systemColorFinish', label: 'Finish', type: 'choice', options: window.PRODUCT_FINISH_OPTIONS }
];
{
  const product = window.PRODUCT_DATA.products.find((item) => item.id === 'glass_folding_a_series_premium');
  if (product) Object.assign(product, { group: 'zipAwning', formTemplate: 'janelaForm' });
  window.PRODUCT_DATA.productFormOverrides.glass_folding_a_series_premium = {
    ...(window.PRODUCT_DATA.productFormOverrides.glass_folding_a_series_premium || {}),
    projectDetails: PRF_C89_FOLDING_A_PROJECT_DETAILS,
    colorDetails: PRF_C89_FOLDING_A_COLOR_DETAILS,
    operation: [],
    panelOptions: [],
    lighting: [],
    dimmers: [],
    sectionsAfterDimmers: [],
    sensors: [],
    heaterPackaging: []
  };
}


// C93: Glass Systems / Folding / K Series Smart uses A Series form with limited options.
const PRF_C93_FOLDING_K_PROJECT_DETAILS = PRF_C89_FOLDING_A_PROJECT_DETAILS.map((field) => {
  if (field.id === 'foldingType') return { ...field, options: ['Standard'] };
  if (field.id === 'glassThickness') return { ...field, options: ['Insulated Glass'] };
  return { ...field };
});
{
  const product = window.PRODUCT_DATA.products.find((item) => item.id === 'glass_folding_k_series_smart');
  if (product) Object.assign(product, { group: 'zipAwning', formTemplate: 'janelaForm' });
  window.PRODUCT_DATA.productFormOverrides.glass_folding_k_series_smart = {
    ...(window.PRODUCT_DATA.productFormOverrides.glass_folding_k_series_smart || {}),
    projectDetails: PRF_C93_FOLDING_K_PROJECT_DETAILS,
    colorDetails: PRF_C89_FOLDING_A_COLOR_DETAILS,
    operation: [],
    panelOptions: [],
    lighting: [],
    dimmers: [],
    sectionsAfterDimmers: [],
    sensors: [],
    heaterPackaging: []
  };
}

// C94: Glass Systems / Sliding / A & K Series custom forms.
const PRF_C94_SLIDING_A_PROJECT_DETAILS = [
  { id: 'slidingType', label: 'Type', type: 'choice', options: ['With Threshold', 'Without Threshold'] },
  { id: 'openingType', label: 'Opening Type', type: 'choice', options: ['Side Opening', 'Center Opening'] },
  { id: 'glassThickness', label: 'Glass Thickness', type: 'choice', options: ['8 mm', '10 mm', 'Insulated Glass'] },
  { id: 'width', label: 'Width', type: 'number', unit: 'mm' },
  { id: 'height', label: 'Height', type: 'number', unit: 'mm' },
  { id: 'panelCount', label: 'Panel Count', type: 'number', min: '1', step: '1' },
  { id: 'systemQuantity', label: 'Quantity', type: 'number', min: '1', step: '1' }
];
const PRF_C94_SLIDING_K_PROJECT_DETAILS = PRF_C94_SLIDING_A_PROJECT_DETAILS.map((field) => {
  if (field.id === 'glassThickness') return { ...field, options: ['8 mm', 'Insulated Glass'] };
  return { ...field };
});
function PRF_C94_applyGlassSlidingOverride(productId, projectDetails) {
  const product = window.PRODUCT_DATA.products.find((item) => item.id === productId);
  if (product) Object.assign(product, { group: 'zipAwning', formTemplate: 'janelaForm' });
  window.PRODUCT_DATA.productFormOverrides[productId] = {
    ...(window.PRODUCT_DATA.productFormOverrides[productId] || {}),
    projectDetails,
    colorDetails: PRF_C89_FOLDING_A_COLOR_DETAILS,
    operation: [],
    panelOptions: [],
    lighting: [],
    dimmers: [],
    sectionsAfterDimmers: [],
    sensors: [],
    heaterPackaging: []
  };
}
PRF_C94_applyGlassSlidingOverride('glass_sliding_a_series_premium', PRF_C94_SLIDING_A_PROJECT_DETAILS);
PRF_C94_applyGlassSlidingOverride('glass_sliding_k_series_smart', PRF_C94_SLIDING_K_PROJECT_DETAILS);

// C95: Glass Systems / Guillotine / A & K Series custom forms.
const PRF_C95_GUILLOTINE_A_PROJECT_DETAILS = [
  { id: 'glassThickness', label: 'Glass Thickness', type: 'choice', options: ['8 mm', 'Insulated Glass'] },
  { id: 'guillotineType', label: 'Type', type: 'choice', options: ['Standard', 'Cleanable', 'Upward Collecting'] },
  { id: 'mechanism', label: 'Mechanism', type: 'choice', options: ['Chain', 'Belt'] },
  { id: 'width', label: 'Width', type: 'number', unit: 'mm', hint: 'Max. value depends on selection' },
  { id: 'height', label: 'Height', type: 'number', unit: 'mm', hint: 'Max. value depends on selection' },
  { id: 'panelLayout', label: 'Panel Count', type: 'choice', options: ['1+1', '1+2'] },
  { id: 'systemQuantity', label: 'Quantity', type: 'number', min: '1', step: '1' },
  { id: 'motorDirectionInsideView', label: 'Motor Direction (Inside View)', type: 'choice', options: ['Right', 'Left'] }
];
const PRF_C98_GUILLOTINE_OPERATION = [
  { id: 'motor', label: 'Motor Type', type: 'select', options: ['Somfy RTS', 'Somfy IO', 'Rising'] },
  { id: 'remoteControlSomfyRts', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '16 Channels'], showWhen: { field: 'motor', values: ['Somfy RTS'] } },
  { id: 'remoteControlSomfyIo', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '40 Channels'], showWhen: { field: 'motor', values: ['Somfy IO'] } },
  { id: 'remoteControlRising', label: 'Remote Control', type: 'choice', options: ['1 Channel', '6 Channels'], showWhen: { field: 'motor', values: ['Rising'] } }
];
const PRF_C95_GUILLOTINE_K_PROJECT_DETAILS = PRF_C95_GUILLOTINE_A_PROJECT_DETAILS.map((field) => {
  if (field.id === 'glassThickness') return { ...field, options: ['Insulated Glass'] };
  if (field.id === 'guillotineType') return { ...field, options: ['Standard', 'Cleanable'] };
  if (field.id === 'mechanism') return { ...field, options: ['Belt'] };
  return { ...field };
});
function PRF_C95_applyGlassGuillotineOverride(productId, projectDetails) {
  const product = window.PRODUCT_DATA.products.find((item) => item.id === productId);
  if (product) Object.assign(product, { group: 'zipAwning', formTemplate: 'janelaForm' });
  window.PRODUCT_DATA.productFormOverrides[productId] = {
    ...(window.PRODUCT_DATA.productFormOverrides[productId] || {}),
    projectDetails,
    colorDetails: PRF_C89_FOLDING_A_COLOR_DETAILS,
    operationTitle: 'Motor & Remote Control',
    operation: PRF_C98_GUILLOTINE_OPERATION,
    panelOptions: [],
    lighting: [],
    dimmers: [],
    sectionsAfterDimmers: [],
    sensors: [],
    heaterPackaging: []
  };
}
PRF_C95_applyGlassGuillotineOverride('glass_guillotine_a_series_premium', PRF_C95_GUILLOTINE_A_PROJECT_DETAILS);
PRF_C95_applyGlassGuillotineOverride('glass_guillotine_k_series_smart', PRF_C95_GUILLOTINE_K_PROJECT_DETAILS);



// C100: Fixed Ceiling Glass uses Pergo Rise base without fabric/motor, with B-Cube Galaxy lighting/remote and heater/sound/packing/loading without Heavy-Duty Nylon.
const PRF_C100_FIXED_CEILING_HEATER_PACKING = window.PRODUCT_DATA.galaxyForm.heaterPackaging.map((field) => {
  if (field.id === 'packagingType') {
    return { ...field, options: (field.options || []).filter((option) => option !== 'Heavy-Duty Nylon') };
  }
  return { ...field };
});
window.PRODUCT_DATA.productFormOverrides.glass_fixed_ceiling = {
  ...(window.PRODUCT_DATA.productFormOverrides.glass_fixed_ceiling || {}),
  colorDetails: [
    { id: 'structure', label: 'Structure', type: 'text', palette: true },
    { id: 'structureFinish', label: 'Finish', type: 'choice', options: window.PRODUCT_FINISH_OPTIONS }
  ],
  operation: [],
  lightingDimmersTitle: 'Lighting & Dimmer & Remote',
  lighting: window.PRODUCT_DATA.galaxyForm.lighting,
  dimmers: window.PRODUCT_DATA.galaxyForm.dimmers,
  lightingRemote: [
    { id: 'remoteControl', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '16 Channels'] }
  ],
  heaterPackaging: PRF_C100_FIXED_CEILING_HEATER_PACKING
};


// C108: remove all built-in default selections/values, remove "No/Yok" from motor fields, and clean Bio-Rise special options.
(function PRF_C108_cleanupForms() {
  const noLikeMotorOptions = new Set(['', 'No', 'Yok', 'None', 'Not Included']);
  const isObject = (value) => value && typeof value === 'object';
  const isMotorField = (field) => {
    if (!isObject(field)) return false;
    const id = String(field.id || '').toLowerCase();
    const label = String(field.label || '').toLowerCase();
    return id === 'motor' || id.includes('motor') || label.includes('motor') || label.includes('reducer') || label.includes('redüktör');
  };
  const walk = (value) => {
    if (Array.isArray(value)) {
      value.forEach(walk);
      return;
    }
    if (!isObject(value)) return;
    if (Object.prototype.hasOwnProperty.call(value, 'defaultValue')) delete value.defaultValue;
    if (isMotorField(value) && Array.isArray(value.options)) {
      value.options = value.options.filter((option) => !noLikeMotorOptions.has(String(option).trim()));
    }
    Object.values(value).forEach(walk);
  };
  walk(window.PRODUCT_DATA);

  const bioRise = window.PRODUCT_DATA.productFormOverrides.bio_rise || {};
  const hidden = bioRise.hiddenItems || {};
  window.PRODUCT_DATA.productFormOverrides.bio_rise = {
    ...bioRise,
    hiddenItems: {
      ...hidden,
      lighting: Array.from(new Set([...(hidden.lighting || []), 'Spot LED'])),
      dimmers: Array.from(new Set([...(hidden.dimmers || []), 'lightDimmerSpot'])),
      panelOptions: Array.from(new Set([...(hidden.panelOptions || []), 'panelIsolation']))
    }
  };
})();


// C109: B-Cube / Pergola rule updates, remove Galaxy Manuel, folding hint cleanup.
(function PRF_C109_rulesAndTreeCleanup() {
  const data = window.PRODUCT_DATA;
  const rangeOptions = (start, end, step, includeEnd = true) => {
    const out = [];
    for (let v = start; v <= end; v += step) out.push(String(v));
    if (includeEnd && out[out.length - 1] !== String(end)) out.push(String(end));
    return out;
  };
  const clone = (value) => JSON.parse(JSON.stringify(value));
  const makeBcubeProjectDetails = ({ widthMax, widthHint, projectionStart, projectionEnd, projectionStep, projectionHint }) => [
    { id: 'width', label: 'Width', type: 'number', unit: 'mm', max: String(widthMax), hint: widthHint },
    { id: 'projection', label: 'Projection', type: 'number', unit: 'mm', min: String(projectionStart), max: String(projectionEnd), step: String(projectionStep), options: rangeOptions(projectionStart, projectionEnd, projectionStep), hint: projectionHint },
    { id: 'heightTopOfGutter', label: 'Height (Top of The Gutter)', type: 'number', unit: 'mm' },
    { id: 'systemQuantity', label: 'System Quantity', type: 'number' }
  ];
  const setOverride = (id, patch) => {
    data.productFormOverrides[id] = { ...(data.productFormOverrides[id] || {}), ...patch };
  };

  if (Array.isArray(data.productTree?.subGroups?.bcube)) {
    data.productTree.subGroups.bcube = data.productTree.subGroups.bcube.filter((item) => item.id !== 'galaxy_manual' && item.productId !== 'galaxy_manual');
  }
  if (Array.isArray(data.products)) {
    data.products = data.products.filter((item) => item.id !== 'galaxy_manual');
  }
  if (data.productFormOverrides) delete data.productFormOverrides.galaxy_manual;

  const bcubeRules = {
    galaxy: { widthMax: 4500, widthHint: 'Max. 4500 mm | 1 Sistem', projectionStart: 2010, projectionEnd: 9010, projectionStep: 200, projectionHint: '2010 mm - 9010 mm | 200 mm | 1 Sistem' },
    space: { widthMax: 4500, widthHint: 'Max. 4500 mm | 1 Sistem', projectionStart: 2010, projectionEnd: 9010, projectionStep: 200, projectionHint: '2010 mm - 9010 mm | 200 mm | 1 Sistem' },
    freedom: { widthMax: 4050, widthHint: 'Max. 4050 mm | 1 Sistem', projectionStart: 2038, projectionEnd: 7060, projectionStep: 216, projectionHint: '2038 mm - 7060 mm | 216 mm | 1 Sistem' },
    classic: { widthMax: 4050, widthHint: 'Max. 4050 mm | 1 Sistem', projectionStart: 2038, projectionEnd: 7060, projectionStep: 216, projectionHint: '2038 mm - 7060 mm | 216 mm | 1 Sistem' },
    infinity: { widthMax: 4050, widthHint: 'Max. 4050 mm | 1 Sistem', projectionStart: 2108, projectionEnd: 6860, projectionStep: 216, projectionHint: '2108 mm - 6860 mm | 216 mm | 1 Sistem' },
    urban: { widthMax: 4050, widthHint: 'Max. 4050 mm | 1 Sistem', projectionStart: 2012, projectionEnd: 5036, projectionStep: 216, projectionHint: '2012 mm - 5036 mm | 216 mm | 1 Sistem' },
    freedom_plus: { widthMax: 4050, widthHint: 'Max. 4050 mm | 1 Sistem', projectionStart: 2288, projectionEnd: 5960, projectionStep: 216, projectionHint: '2288 mm - 5960 mm | 216 mm | 1 Sistem' },
    classic_plus: { widthMax: 4050, widthHint: 'Max. 4050 mm | 1 Sistem', projectionStart: 2288, projectionEnd: 5960, projectionStep: 216, projectionHint: '2288 mm - 5960 mm | 216 mm | 1 Sistem' }
  };
  Object.entries(bcubeRules).forEach(([id, rule]) => {
    setOverride(id, { projectDetails: makeBcubeProjectDetails(rule) });
  });
  ['freedom_plus', 'classic_plus'].forEach((id) => {
    setOverride(id, {
      operation: [
        { id: 'motor', label: 'Motor', type: 'select', options: ['Somfy RTS'] },
        { id: 'remoteControlSomfyRts', label: 'Remote Control', type: 'choice', options: ['6 Channels'], showWhen: { field: 'motor', values: ['Somfy RTS'] } }
      ]
    });
  });

  const pergolaBase = clone(data.pergolaForm.projectDetails || []);
  const pergolaProjectDetails = (widthMax, widthHint, projectionMax, projectionHint) => pergolaBase.map((field) => {
    if (field.id === 'width') return { ...field, max: String(widthMax), hint: widthHint };
    if (field.id === 'projection') return { ...field, max: String(projectionMax), hint: projectionHint };
    return field;
  });
  (data.products || []).forEach((product) => {
    if (product.family !== 'pergola') return;
    if (product.id === 'pergo_rise') {
      setOverride(product.id, {
        projectDetails: pergolaProjectDetails(8000, 'Max. 8000 mm | 1 Sistem (3 Rafters)', 7000, 'Max. 7000 mm | 1 Sistem')
      });
      return;
    }
    if (product.formTemplate === 'pergolaForm') {
      const isTectona = product.subGroup === 'tectona';
      setOverride(product.id, {
        projectDetails: pergolaProjectDetails(
          13500,
          'Max. 13500 mm | 1 Sistem (4 Rafters)',
          isTectona ? 10000 : 7000,
          isTectona ? 'Max. 10000 mm | 1 Sistem' : 'Max. 7000 mm | 1 Sistem'
        )
      });
    }
  });

  ['glass_folding_a_series_premium', 'glass_folding_k_series_smart'].forEach((id) => {
    const current = data.productFormOverrides[id] || {};
    if (!Array.isArray(current.projectDetails)) return;
    setOverride(id, {
      projectDetails: current.projectDetails.map((field) => field.id === 'width' ? { ...field, hint: 'Max. 8 Panel | Max. Panel Genişlik 800 mm' } : field)
    });
  });
})();


// C111: Pergola forms get Sensors section after Heater/Sound/Packing/Loading.
(() => {
  const data = window.PRODUCT_DATA;
  if (!data?.products || !data?.productFormOverrides) return;
  const pergolaSensors = [
    { id: 'rainSensor', label: 'Rain Sensor', type: 'choice', options: ['Yes', 'No'] },
    { id: 'vibrationSensor', label: 'Vibration Sensor', type: 'choice', options: ['Yes', 'No'] },
    { id: 'windSensor', label: 'Wind Sensor', type: 'choice', options: ['Yes', 'No'] },
    { id: 'windSunSensor', label: 'Wind & Sun Sensor', type: 'choice', options: ['Yes', 'No'] }
  ];
  data.products.forEach((product) => {
    if (product.family !== 'pergola' || product.formTemplate !== 'pergolaForm') return;
    data.productFormOverrides[product.id] = {
      ...(data.productFormOverrides[product.id] || {}),
      sensors: pergolaSensors
    };
  });
})();

// C115: Glass color/type additions, radio-style motor/water choices, and always visible remote controls for Zip/Awning/Curtain.
(function PRF_C115_glassAndChoiceUpdates() {
  const data = window.PRODUCT_DATA;
  if (!data) return;
  const clone = (value) => JSON.parse(JSON.stringify(value));
  const GLASS_COLOR_FIELDS = [
    { id: 'glassColor', label: 'Glass Color', type: 'choice', options: ['Transparent', 'Grey', 'Low-e Glass', 'Other'] },
    { id: 'glassColorOther', label: 'Other Value', type: 'text', showWhen: { field: 'glassColor', values: ['Other'] } }
  ];
  const insertAfter = (items, afterId, newFields) => {
    const list = Array.isArray(items) ? items.map((x) => ({ ...x })) : [];
    if (list.some((item) => item.id === newFields[0]?.id)) return list;
    const idx = list.findIndex((item) => item.id === afterId);
    if (idx < 0) return [...list, ...clone(newFields)];
    return [...list.slice(0, idx + 1), ...clone(newFields), ...list.slice(idx + 1)];
  };
  const setOverride = (id, patch) => {
    data.productFormOverrides[id] = { ...(data.productFormOverrides[id] || {}), ...patch };
  };

  ['glass_folding_a_series_premium', 'glass_folding_k_series_smart', 'glass_sliding_a_series_premium', 'glass_sliding_k_series_smart', 'glass_guillotine_a_series_premium', 'glass_guillotine_k_series_smart'].forEach((id) => {
    const current = data.productFormOverrides[id] || {};
    setOverride(id, { projectDetails: insertAfter(current.projectDetails || [], 'glassThickness', GLASS_COLOR_FIELDS) });
  });

  const currentFixed = data.productFormOverrides.glass_fixed_ceiling || {};
  const baseFixedProject = currentFixed.projectDetails || data.pergolaForm?.projectDetails || [];
  const fixedGlassFields = [
    { id: 'glassType1', label: 'Glass Type 1', type: 'choice', options: ['Single Glass', 'Insulated Glass', 'Polycarbonate', 'Sandwich Panel'] },
    { id: 'glassType2Glass', label: 'Glass Type 2', type: 'choice', options: ['Transparent', 'Grey', 'Low-e Glass', 'Other'], showWhen: { field: 'glassType1', values: ['Single Glass', 'Insulated Glass'] } },
    { id: 'glassType2GlassOther', label: 'Other Value', type: 'text', showWhen: { field: 'glassType2Glass', values: ['Other'] } },
    { id: 'glassType2Panel', label: 'Glass Type 2', type: 'choice', options: ['Standard', 'Other (Thickness)'], showWhen: { field: 'glassType1', values: ['Polycarbonate', 'Sandwich Panel'] } },
    { id: 'glassType2PanelOther', label: 'Other Value', type: 'text', showWhen: { field: 'glassType2Panel', values: ['Other (Thickness)'] } }
  ];
  setOverride('glass_fixed_ceiling', {
    projectDetails: [ ...clone(fixedGlassFields), ...baseFixedProject.filter((field) => !fixedGlassFields.some((glassField) => glassField.id === field.id)) ]
  });

  const convertSpecialFields = (value) => {
    if (Array.isArray(value)) {
      value.forEach(convertSpecialFields);
      return;
    }
    if (!value || typeof value !== 'object') return;
    if (value.id === 'motor' && value.type === 'select') value.type = 'choice';
    if (['waterOutletDetail', 'waterOutletDirection', 'pipeLengthType'].includes(value.id) && value.type === 'select') value.type = 'choice';
    Object.values(value).forEach(convertSpecialFields);
  };
  convertSpecialFields(data);

  const REMOTE_OPTIONS_ALWAYS = ['1 Channel', '2 Channels', '4 Channels', '6 Channels', '16 Channels', '40 Channels'];
  const normalizeZipOperation = (operation) => {
    const source = Array.isArray(operation) ? operation : [];
    const out = [];
    let remoteInserted = false;
    source.forEach((field) => {
      if (!field || typeof field !== 'object') return;
      if (String(field.id || '').startsWith('remoteControl')) {
        if (!remoteInserted) {
          out.push({ id: 'remoteControl', label: 'Remote Control', type: 'choice', options: REMOTE_OPTIONS_ALWAYS });
          remoteInserted = true;
        }
        return;
      }
      const copy = { ...field };
      if (copy.id === 'motor') copy.type = 'choice';
      out.push(copy);
    });
    if (!remoteInserted && source.length) out.push({ id: 'remoteControl', label: 'Remote Control', type: 'choice', options: REMOTE_OPTIONS_ALWAYS });
    return out;
  };
  (data.products || []).forEach((product) => {
    if (product.family !== 'zip_screen_awning_curtain') return;
    const current = data.productFormOverrides[product.id] || {};
    const baseOperation = current.operation || (product.formTemplate === 'janelaForm' ? data.janelaForm?.operation : []);
    if (!Array.isArray(baseOperation) || !baseOperation.length) return;
    setOverride(product.id, { operation: normalizeZipOperation(baseOperation) });
  });
  if (data.janelaForm?.operation) data.janelaForm.operation = normalizeZipOperation(data.janelaForm.operation);
})();


// C118: section order/default support updates requested after C117.
(function PRF_C118_packingGuillotineAndHeaterOrder() {
  const data = window.PRODUCT_DATA;
  if (!data) return;
  const clone = (value) => JSON.parse(JSON.stringify(value));
  const heaterOrder = ['packagingType', 'loadingType', 'heater2000Quantity', 'heater3000Quantity', 'soundSystemQuantity', 'dimmerHeater'];
  const reorderHeaterFields = (fields) => {
    if (!Array.isArray(fields)) return fields;
    const used = new Set();
    const next = [];
    heaterOrder.forEach((id) => {
      const found = fields.find((field) => field?.id === id);
      if (found) {
        next.push({ ...found });
        used.add(found);
      }
    });
    fields.forEach((field) => {
      if (!used.has(field)) next.push({ ...field });
    });
    return next;
  };
  const walkAndReorderHeaterPackaging = (value) => {
    if (!value || typeof value !== 'object') return;
    if (Array.isArray(value)) {
      value.forEach(walkAndReorderHeaterPackaging);
      return;
    }
    if (Array.isArray(value.heaterPackaging)) {
      value.heaterPackaging = reorderHeaterFields(value.heaterPackaging);
    }
    Object.values(value).forEach(walkAndReorderHeaterPackaging);
  };
  walkAndReorderHeaterPackaging(data);

  const dynamicRemote = [
    { id: 'motor', label: 'Motor Type', type: 'choice', options: ['Somfy RTS', 'Somfy IO', 'Rising'] },
    { id: 'remoteControl', label: 'Remote Control', type: 'choice', options: ['1 Channel', '2 Channels', '4 Channels', '6 Channels', '16 Channels', '40 Channels'] }
  ];
  ['glass_guillotine_a_series_premium', 'glass_guillotine_k_series_smart'].forEach((id) => {
    data.productFormOverrides[id] = {
      ...(data.productFormOverrides[id] || {}),
      operationTitle: 'Motor & Remote Control',
      operation: clone(dynamicRemote)
    };
  });
})();


// C119: Bio Rise width/projection rules.
(function PRF_C119_bioRiseRules() {
  const data = window.PRODUCT_DATA;
  if (!data?.productFormOverrides) return;
  const rangeOptions = (start, end, step) => {
    const out = [];
    for (let value = start; value <= end; value += step) out.push(String(value));
    return out;
  };
  const current = data.productFormOverrides.bio_rise || {};
  const baseProject = Array.isArray(current.projectDetails)
    ? current.projectDetails
    : (Array.isArray(data.galaxyForm?.projectDetails) ? data.galaxyForm.projectDetails : []);
  const updatedProject = baseProject.map((field) => {
    if (field?.id === 'width') {
      return { ...field, type: 'number', unit: field.unit || 'mm', max: '4000', hint: 'Max. 4000 mm | 1 Sistem' };
    }
    if (field?.id === 'projection') {
      return {
        ...field,
        type: 'number',
        unit: field.unit || 'mm',
        min: '2070',
        max: '6070',
        step: '200',
        options: rangeOptions(2070, 6070, 200),
        hint: '2070 mm - 6070 mm | 200 mm | 1 Sistem'
      };
    }
    return { ...field };
  });
  data.productFormOverrides.bio_rise = {
    ...current,
    projectDetails: updatedProject
  };
})();


// C121: remove Connection from Unifoliate forms and unify Fixed Ceiling Glass Type 2.
(function PRF_C121_unifoliateAndFixedGlassType2() {
  const data = window.PRODUCT_DATA;
  if (!data?.productFormOverrides) return;
  const clone = (value) => JSON.parse(JSON.stringify(value));
  const setOverride = (id, patch) => {
    data.productFormOverrides[id] = { ...(data.productFormOverrides[id] || {}), ...patch };
  };
  const removeFieldId = (list, ids) => (Array.isArray(list) ? list.filter((field) => !ids.includes(field?.id)) : list);

  ['unifoliate_minima', 'unifoliate_tectona'].forEach((id) => {
    const current = data.productFormOverrides[id] || {};
    const base = Array.isArray(current.projectDetails) ? current.projectDetails : (data.pergolaForm?.projectDetails || []);
    setOverride(id, {
      projectDetails: removeFieldId(clone(base), ['connection']),
      hiddenItems: {
        ...(current.hiddenItems || {}),
        projectDetails: Array.from(new Set([...(current.hiddenItems?.projectDetails || []), 'connection']))
      }
    });
  });

  const currentFixed = data.productFormOverrides.glass_fixed_ceiling || {};
  const baseFixedProject = Array.isArray(currentFixed.projectDetails) ? currentFixed.projectDetails : (data.pergolaForm?.projectDetails || []);
  const oldGlassIds = ['glassType1', 'glassType2Glass', 'glassType2GlassOther', 'glassType2Panel', 'glassType2PanelOther', 'glassType2', 'glassType2Other'];
  const fixedGlassFields = [
    { id: 'glassType1', label: 'Glass Type 1', type: 'choice', options: ['Single Glass', 'Insulated Glass', 'Polycarbonate', 'Sandwich Panel'] },
    { id: 'glassType2', label: 'Glass Type 2', type: 'choice', options: ['Transparent', 'Grey', 'Low-e Glass', 'Standard', 'Other', 'Other (Thickness)'] },
    { id: 'glassType2GlassOther', label: 'Other Value', type: 'text' }
  ];
  setOverride('glass_fixed_ceiling', {
    projectDetails: [
      ...clone(fixedGlassFields),
      ...clone(baseFixedProject).filter((field) => !oldGlassIds.includes(field?.id))
    ]
  });
})();
