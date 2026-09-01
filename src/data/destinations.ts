import { Destination } from '../types';

export const USER_AVATAR_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ8fg4pz7SGb9GjakpsMECWiiXZkagJE0ScKBLNBzf-k6cQ_FuIRQmnKEuCxGsEU2JIryl3qJl-gE8jicvvmR6vzJipbvVH21p4-ZvpVsYFagKsfW5YmY8M3fpUx27OOa2aX-RmMxP5WsjJjVzkZZIwrcUhRIkWIWK5BsOY-Td2N6xYsQAPOa1lFR_k2ldrS7-xs5DYE44P6i5AovylUu94M0pFkxKO2lpcvKLF8Q-cC3rBeQySfMUkw';
export const USER_AVATAR_LARGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEI5_zhO3MUhMgvEkvVUqyC1D0-sSN52DBUxuhNpfyV-nKjXjcUrh6TeGINW7ljGpnTCEJ0088XZvhJHJFfD2rdrQfEQK1UDwS608cJoOHModVirL7pdMWzRCK2W9YKyj1DThogLWJWurqraDtqeYC4I1AaqW1uFFcs51tIgbSb-41_wjd6ALnX2s3uhXf3llBWdnzU5B0yAW8LmEoJ7QtLO2DARvKeH7v2wc7jUkDbirFrLsF-X2j6g';

export const NARAN_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoFB9oCph8XnaXgURO4Lrudrw4AdwGc3cvRNpYwT4TkQ_guGl4OOrt4XHnuqRCmi0VlIsLjV1KdSQWB_ebH1a6Na5rDMoFtMC9f34UouDY7s43-_s-gr0proJP121y9Iq0nr9cyC-Jev6GKDScsHmIniytDkmedxv6BUmW1WOjAisN0442exjPhTFUtai9RV8ZO7yvlv5F0QOW_xHP--rgd_Th2lFPFMI5nbZUjHkMXNx4WmQa27A13Q';
export const NARAN_HERO = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCV6aNc6cTQyG8peSZIMCXqcMEhU30M8ILNR124T3soen_QIaCCh2xn0PQQoo9tTEY2pZ9_vQ5MzvvSGln4jld9zSJEbV4i4-9FD6IJTFNblNpf-DOYSfmEcRlJ5Mqu7D9FCufuJJqmXnqeCptu5FKXNah7n1OI2APjGBwxtUcv3e7gaEVQba427SFWXEeHwxSTgE_A6OsjpgdUzhkcSeoFol-g8nLHgmyh4G00N4StOiMZroBYwW2CLQ';
export const NARAN_MAP = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnH1BFfSvkWKs8Wpi-8eeLsqg8vX0J9DWwbQLtEUxuXH6YSWwvtVGCuYlNEpfgP21o1i8fJMC-nvPX_6176hAcELNIb-NQQ-JMxgNgStXIhFHScxbRFbnlk8rmKDdpEqzMYIWATb46LLWjfl9xI-IGDuJCq1Jb3RHoqUCcPV1DrpS3gO4kzIJkLwSmWtMInvBDIsja9XtYsU_WsSIAGHcoUi2nWCE72l8ZyO4ZfLyVUuDKF2IJwWzCxA';

export const BADSHAHI_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcivSeeXmt0elozFMiXJ7wHTyDq6xyBEnyCOlFaV0r-noYkVWA3pO2mdfzfQxkymLAO-qt-TsuF50IaKmAdq8bwjpTeSOnnE9NvJ5TYtFMDUHRANLYOjoVwXFvWAodl7BcDpEhOk-GvB39MOkD9vgLfdAawLxS15LDpKyevXCLf9KRTMJF3Nl0zufTNFcCG_Pu2Oz0pCnGEoYDmEZ6vzLnF-ymnokiIK04LiC9x3saw3GOYptQ3eYQVg';
export const HUNZA_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB2VOztFOGfj9b8-1iunmRazSN2UGXKb6nuI2w0dRL43WvTaDbcvh5HpOxmfaxljKK_XFKDBEcr8HdtPdGigZQVN-n0nS2Uwly79qPy1f7bd203tpI-l3soy41eE2beSNcxmOLpsobZjn3qV4rtseKN5NOPYBN_p0A30Z-FBaB69x0d5Wug4n2Z5ZF78KWwf5AXbz4Z9EpU2xftjTeJoln2ZKuYpcW4O-o_ug7YuSl4IC6tPdZxI0Inw';

export const DESTINATIONS: Destination[] = [
  {
    id: 'naran-valley',
    name: 'Naran Valley',
    tagline: 'Beauty of Kaghan & River Kunhar',
    category: 'Northern Areas',
    categoryLabel: 'Nature & Mountains',
    categoryIcon: 'landscape',
    province: 'KPK Province',
    rating: 4.9,
    reviewsCount: 3840,
    featured: true,
    gridSpan: 'large',
    heroImage: NARAN_HERO,
    thumbnailImage: NARAN_IMAGE,
    mapImage: NARAN_MAP,
    about: 'Naran is a medium-sized town in upper Kaghan Valley in Mansehra District of Khyber Pakhtunkhwa province of Pakistan. It is located 119 kilometers from Mansehra city at an altitude of 2,409 meters.',
    altitude: '2,409 m (7,904 ft)',
    bestSeason: 'May to October',
    latitude: 34.9089,
    longitude: 73.6521,
    routeInfo: {
      fromCity: 'Islamabad',
      travelDuration: '6h 30m',
      travelDistance: '280 km',
      roadCondition: 'Scenic Mountain Pass',
      recommendedVehicle: 'Sedan / SUV',
      routeSummary: 'Follow Hazara Motorway (M-15) past Abbottabad and Mansehra, then take N-15 Highway along the Kunhar River through Balakot and Kaghan directly to Naran.',
      waypoints: [
        { name: 'Islamabad Zero Point', distanceFromStart: '0 km', timeFromStart: '0h 00m', highlightNote: 'Depart via M-15 Hazara Motorway entry point', fuelStation: true },
        { name: 'Abbottabad Interchange', distanceFromStart: '120 km', timeFromStart: '1h 45m', elevationMeters: 1256, highlightNote: 'Lush pine hills, excellent breakfast stops', fuelStation: true },
        { name: 'Mansehra Bypass', distanceFromStart: '155 km', timeFromStart: '2h 30m', elevationMeters: 1088, highlightNote: 'Ashoka Rock Edicts nearby; switch to N-15 Highway', fuelStation: true },
        { name: 'Balakot Gateway', distanceFromStart: '190 km', timeFromStart: '3h 30m', elevationMeters: 980, highlightNote: 'Gateway to Kaghan Valley along Kunhar River', fuelStation: true },
        { name: 'Kaghan Village', distanceFromStart: '240 km', timeFromStart: '5h 15m', elevationMeters: 2050, highlightNote: 'Riverside tea stalls and trout breeding farms', fuelStation: false },
        { name: 'Naran Bazaar & Valley', distanceFromStart: '280 km', timeFromStart: '6h 30m', elevationMeters: 2409, highlightNote: 'Final destination: gateway to Saif-ul-Malook & Babusar', fuelStation: true }
      ]
    },
    weatherForecast: [
      { day: 'Mon', fullDate: 'Sep 1', icon: 'sunny', tempMax: 22, tempMin: 10, condition: 'Sunny & Clear', rainChance: 5, windSpeedKm: 12, humidity: 38 },
      { day: 'Tue', fullDate: 'Sep 2', icon: 'partly_cloudy_day', tempMax: 20, tempMin: 9, condition: 'Partly Cloudy', rainChance: 15, windSpeedKm: 14, humidity: 42 },
      { day: 'Wed', fullDate: 'Sep 3', icon: 'cloudy', tempMax: 18, tempMin: 8, condition: 'Overcast Skies', rainChance: 30, windSpeedKm: 18, humidity: 55 },
      { day: 'Thu', fullDate: 'Sep 4', icon: 'rainy', tempMax: 15, tempMin: 7, condition: 'Light Mountain Showers', rainChance: 70, windSpeedKm: 22, humidity: 75 },
      { day: 'Fri', fullDate: 'Sep 5', icon: 'sunny', tempMax: 23, tempMin: 11, condition: 'Clear Alpine Sunshine', rainChance: 0, windSpeedKm: 10, humidity: 35 },
      { day: 'Sat', fullDate: 'Sep 6', icon: 'sunny', tempMax: 25, tempMin: 12, condition: 'Bright & Warm', rainChance: 5, windSpeedKm: 9, humidity: 32 },
      { day: 'Sun', fullDate: 'Sep 7', icon: 'partly_cloudy_day', tempMax: 21, tempMin: 10, condition: 'Scattered Clouds', rainChance: 20, windSpeedKm: 15, humidity: 45 },
      { day: 'Mon', fullDate: 'Sep 8', icon: 'cloudy', tempMax: 19, tempMin: 9, condition: 'Cool Breeze', rainChance: 25, windSpeedKm: 16, humidity: 50 },
      { day: 'Tue', fullDate: 'Sep 9', icon: 'rainy', tempMax: 16, tempMin: 7, condition: 'Afternoon Rain', rainChance: 65, windSpeedKm: 20, humidity: 70 },
      { day: 'Wed', fullDate: 'Sep 10', icon: 'thunderstorm', tempMax: 14, tempMin: 6, condition: 'Mountain Storms', rainChance: 85, windSpeedKm: 28, humidity: 82 },
      { day: 'Thu', fullDate: 'Sep 11', icon: 'sunny', tempMax: 22, tempMin: 10, condition: 'Post-storm Crisp Skies', rainChance: 10, windSpeedKm: 11, humidity: 40 },
      { day: 'Fri', fullDate: 'Sep 12', icon: 'partly_cloudy_day', tempMax: 24, tempMin: 11, condition: 'Pleasant & Mild', rainChance: 10, windSpeedKm: 13, humidity: 38 },
      { day: 'Sat', fullDate: 'Sep 13', icon: 'cloudy', tempMax: 20, tempMin: 9, condition: 'Overcast', rainChance: 35, windSpeedKm: 17, humidity: 52 },
      { day: 'Sun', fullDate: 'Sep 14', icon: 'rainy', tempMax: 17, tempMin: 8, condition: 'Scattered Drizzle', rainChance: 55, windSpeedKm: 19, humidity: 68 }
    ],
    highlights: [
      'Lake Saif-ul-Malook (3,224 m) with fairy legend and Malika Parbat reflection',
      'Babusar Pass (4,173 m) connecting KPK with Gilgit-Baltistan',
      'Lulusar Lake - pristine turquoise glacial reservoir',
      'River Kunhar White Water Rafting and Riverside camping',
      'Ansoo Lake high-altitude trek shaped like a tear-drop'
    ],
    localCuisine: [
      'Fresh Kunhar River Fried Brown Trout',
      'Khyber Shinwari Lamb Karahi',
      'Kaghan Valley Walnuts & Pure Honey',
      'Traditional Chapli Kababs with hot Naan'
    ],
    travelTips: [
      'Pack warm layers even in mid-summer as night temperatures drop below 10°C.',
      'Hire a verified 4x4 Jeep with local drivers for the Saif-ul-Malook mountain track.',
      'Refuel completely at Balakot or Naran bazaar before heading to Babusar Top.',
      'Keep offline maps downloaded as mobile signals fluctuate past Kaghan.'
    ]
  },
  {
    id: 'badshahi-mosque',
    name: 'Badshahi Mosque',
    tagline: 'Mughal Architectural Masterpiece in Lahore',
    category: 'Historical Forts',
    categoryLabel: 'Heritage & Architecture',
    categoryIcon: 'temple_buddhist',
    province: 'Punjab',
    rating: 4.8,
    reviewsCount: 6210,
    featured: true,
    gridSpan: 'medium',
    heroImage: BADSHAHI_IMAGE,
    thumbnailImage: BADSHAHI_IMAGE,
    mapImage: NARAN_MAP,
    about: 'Commissioned by the sixth Mughal Emperor Aurangzeb in 1671 and completed in 1673, the Badshahi Mosque is an iconic emblem of Lahore and one of the largest mosques in the world, carved from red sandstone with marble inlay.',
    altitude: '217 m (712 ft)',
    bestSeason: 'October to March',
    latitude: 31.5881,
    longitude: 74.3096,
    routeInfo: {
      fromCity: 'Lahore Airport / Ring Road',
      travelDuration: '35m',
      travelDistance: '18 km',
      roadCondition: 'Paved Highway',
      recommendedVehicle: 'Sedan / SUV',
      routeSummary: 'Take Lahore Ring Road or Mall Road towards the Walled City, exiting near Fort Road Food Street adjacent to Iqbal Park.',
      waypoints: [
        { name: 'Allama Iqbal International Airport', distanceFromStart: '0 km', timeFromStart: '0h 00m', highlightNote: 'Depart via Ring Road North', fuelStation: true },
        { name: 'Mall Road / Anarkali Junction', distanceFromStart: '12 km', timeFromStart: '0h 20m', highlightNote: 'Historic colonial boulevard', fuelStation: true },
        { name: 'Roshnai Gate & Fort Road', distanceFromStart: '18 km', timeFromStart: '0h 35m', highlightNote: 'Arrive at Badshahi Mosque Grand Plaza', fuelStation: true }
      ]
    },
    weatherForecast: [
      { day: 'Mon', fullDate: 'Sep 1', icon: 'sunny', tempMax: 34, tempMin: 25, condition: 'Sunny & Warm', rainChance: 0, windSpeedKm: 8, humidity: 55 },
      { day: 'Tue', fullDate: 'Sep 2', icon: 'sunny', tempMax: 35, tempMin: 26, condition: 'Clear Sky', rainChance: 0, windSpeedKm: 7, humidity: 52 },
      { day: 'Wed', fullDate: 'Sep 3', icon: 'partly_cloudy_day', tempMax: 33, tempMin: 24, condition: 'Light Clouds', rainChance: 10, windSpeedKm: 10, humidity: 58 },
      { day: 'Thu', fullDate: 'Sep 4', icon: 'sunny', tempMax: 34, tempMin: 25, condition: 'Golden Sunset Hours', rainChance: 5, windSpeedKm: 9, humidity: 54 },
      { day: 'Fri', fullDate: 'Sep 5', icon: 'sunny', tempMax: 36, tempMin: 26, condition: 'Bright & Sunny', rainChance: 0, windSpeedKm: 8, humidity: 50 },
      { day: 'Sat', fullDate: 'Sep 6', icon: 'partly_cloudy_day', tempMax: 35, tempMin: 25, condition: 'Mild Evening Breeze', rainChance: 15, windSpeedKm: 12, humidity: 56 },
      { day: 'Sun', fullDate: 'Sep 7', icon: 'sunny', tempMax: 34, tempMin: 24, condition: 'Warm & Clear', rainChance: 5, windSpeedKm: 9, humidity: 52 },
      { day: 'Mon', fullDate: 'Sep 8', icon: 'partly_cloudy_day', tempMax: 33, tempMin: 23, condition: 'Comfortable Breezes', rainChance: 10, windSpeedKm: 11, humidity: 60 },
      { day: 'Tue', fullDate: 'Sep 9', icon: 'cloudy', tempMax: 31, tempMin: 22, condition: 'Overcast Afternoon', rainChance: 25, windSpeedKm: 14, humidity: 65 },
      { day: 'Wed', fullDate: 'Sep 10', icon: 'rainy', tempMax: 29, tempMin: 21, condition: 'Monsoon Refreshing Rain', rainChance: 70, windSpeedKm: 18, humidity: 78 },
      { day: 'Thu', fullDate: 'Sep 11', icon: 'sunny', tempMax: 32, tempMin: 23, condition: 'Post-rain Freshness', rainChance: 10, windSpeedKm: 10, humidity: 60 },
      { day: 'Fri', fullDate: 'Sep 12', icon: 'sunny', tempMax: 34, tempMin: 24, condition: 'Clear Sky', rainChance: 0, windSpeedKm: 8, humidity: 52 },
      { day: 'Sat', fullDate: 'Sep 13', icon: 'sunny', tempMax: 35, tempMin: 25, condition: 'Warm Weekend', rainChance: 5, windSpeedKm: 7, humidity: 48 },
      { day: 'Sun', fullDate: 'Sep 14', icon: 'partly_cloudy_day', tempMax: 33, tempMin: 24, condition: 'Pleasant Sunset', rainChance: 10, windSpeedKm: 9, humidity: 55 }
    ],
    highlights: [
      'Grand Courtyard accommodating over 100,000 worshippers',
      'Three carved white marble bulbous domes and 4 towering 176ft minarets',
      'Lahore Fort (Shahi Qila) and Sheesh Mahal right across the courtyard',
      'Fort Road Food Street overlooking illuminated domes at night',
      'Tomb of Allama Iqbal and Hazuri Bagh Pavilion'
    ],
    localCuisine: [
      'Lahori Chargha & Nihari at Food Street',
      'Gawalmandi Siri Paye & Kulcha',
      'Falooda and Kulfi at Anarkali',
      'Doodh Patti Chai at Haveli rooftop'
    ],
    travelTips: [
      'Visit right before Golden Hour for mesmerizing photos when red sandstone glows.',
      'Modest dress code required; shoe storage available at courtyard entrance.',
      'Book a rooftop dinner at Fort Road Food Street for nighttime panoramic vistas.'
    ]
  },
  {
    id: 'hunza-valley',
    name: 'Hunza Valley',
    tagline: 'Shangri-La of the Karakoram Mountain Range',
    category: 'Northern Areas',
    categoryLabel: 'Nature & Mountains',
    categoryIcon: 'landscape',
    province: 'Gilgit-Baltistan',
    rating: 5.0,
    reviewsCount: 5120,
    featured: true,
    gridSpan: 'full',
    heroImage: HUNZA_IMAGE,
    thumbnailImage: HUNZA_IMAGE,
    mapImage: NARAN_MAP,
    about: 'Hunza Valley is a mountainous valley in the Gilgit-Baltistan region of Pakistan, surrounded by iconic snow-capped peaks like Rakaposhi, Ultar Sar, and Ladyfinger Peak. Renowned for its centuries-old forts, friendly culture, and sapphire waters of Attabad Lake.',
    altitude: '2,438 m (7,999 ft)',
    bestSeason: 'April to October (Cherry Blossom & Autumn Foliage)',
    latitude: 36.3167,
    longitude: 74.6500,
    routeInfo: {
      fromCity: 'Islamabad (via KKH)',
      travelDuration: '14h or 45m flight to Gilgit',
      travelDistance: '600 km',
      roadCondition: 'Expressway & Serpentine',
      recommendedVehicle: 'Flight or SUV',
      routeSummary: 'Take the Karakoram Highway (N-35) north along the Indus and Hunza rivers, traversing through Chilas, Gilgit, and Karimabad with scenic vistas of Rakaposhi.',
      waypoints: [
        { name: 'Islamabad / Rawalpindi', distanceFromStart: '0 km', timeFromStart: '0h 00m', highlightNote: 'Start on Hazara Motorway N-35', fuelStation: true },
        { name: 'Besham / Dasu', distanceFromStart: '260 km', timeFromStart: '6h 00m', elevationMeters: 610, highlightNote: 'Indus river gorge transit stop', fuelStation: true },
        { name: 'Chilas / Junction Point', distanceFromStart: '390 km', timeFromStart: '9h 30m', elevationMeters: 1265, highlightNote: 'Where 3 greatest mountain ranges meet (Himalayas, Karakoram, Hindu Kush)', fuelStation: true },
        { name: 'Gilgit City', distanceFromStart: '510 km', timeFromStart: '12h 00m', elevationMeters: 1500, highlightNote: 'Capital of Gilgit-Baltistan; airport terminal', fuelStation: true },
        { name: 'Rakaposhi View Point', distanceFromStart: '560 km', timeFromStart: '13h 15m', elevationMeters: 1950, highlightNote: 'Direct base-to-peak view of 7,788m Rakaposhi', fuelStation: true },
        { name: 'Karimabad / Central Hunza', distanceFromStart: '600 km', timeFromStart: '14h 00m', elevationMeters: 2438, highlightNote: 'Arrival at historic Karimabad & Baltit Fort', fuelStation: true }
      ]
    },
    weatherForecast: [
      { day: 'Mon', fullDate: 'Sep 1', icon: 'sunny', tempMax: 21, tempMin: 9, condition: 'Pure Mountain Sun', rainChance: 0, windSpeedKm: 8, humidity: 25 },
      { day: 'Tue', fullDate: 'Sep 2', icon: 'sunny', tempMax: 22, tempMin: 10, condition: 'Clear Skies', rainChance: 0, windSpeedKm: 7, humidity: 22 },
      { day: 'Wed', fullDate: 'Sep 3', icon: 'partly_cloudy_day', tempMax: 19, tempMin: 8, condition: 'Fluffy High Clouds', rainChance: 5, windSpeedKm: 11, humidity: 30 },
      { day: 'Thu', fullDate: 'Sep 4', icon: 'sunny', tempMax: 20, tempMin: 8, condition: 'Golden Sunlight', rainChance: 0, windSpeedKm: 9, humidity: 28 },
      { day: 'Fri', fullDate: 'Sep 5', icon: 'sunny', tempMax: 23, tempMin: 10, condition: 'Warm Alpine Day', rainChance: 0, windSpeedKm: 6, humidity: 24 },
      { day: 'Sat', fullDate: 'Sep 6', icon: 'partly_cloudy_day', tempMax: 21, tempMin: 9, condition: 'Soft Afternoon Breeze', rainChance: 10, windSpeedKm: 12, humidity: 32 },
      { day: 'Sun', fullDate: 'Sep 7', icon: 'sunny', tempMax: 22, tempMin: 9, condition: 'Stargazing Clear Night', rainChance: 0, windSpeedKm: 7, humidity: 25 },
      { day: 'Mon', fullDate: 'Sep 8', icon: 'sunny', tempMax: 20, tempMin: 8, condition: 'Crystal Clear', rainChance: 0, windSpeedKm: 8, humidity: 26 },
      { day: 'Tue', fullDate: 'Sep 9', icon: 'cloudy', tempMax: 17, tempMin: 6, condition: 'Cool High Cloud Cover', rainChance: 20, windSpeedKm: 14, humidity: 40 },
      { day: 'Wed', fullDate: 'Sep 10', icon: 'rainy', tempMax: 15, tempMin: 5, condition: 'Light Alpine Rain', rainChance: 45, windSpeedKm: 16, humidity: 55 },
      { day: 'Thu', fullDate: 'Sep 11', icon: 'sunny', tempMax: 19, tempMin: 7, condition: 'Snow on High Peaks', rainChance: 5, windSpeedKm: 10, humidity: 30 },
      { day: 'Fri', fullDate: 'Sep 12', icon: 'sunny', tempMax: 21, tempMin: 8, condition: 'Sunny & Bright', rainChance: 0, windSpeedKm: 8, humidity: 27 },
      { day: 'Sat', fullDate: 'Sep 13', icon: 'sunny', tempMax: 22, tempMin: 9, condition: 'Delightful Weather', rainChance: 0, windSpeedKm: 7, humidity: 24 },
      { day: 'Sun', fullDate: 'Sep 14', icon: 'partly_cloudy_day', tempMax: 20, tempMin: 8, condition: 'Crisp Autumn Air', rainChance: 10, windSpeedKm: 10, humidity: 30 }
    ],
    highlights: [
      '700-year-old Baltit Fort and 900-year-old Altit Fort perched on cliffs',
      'Attabad Lake boating, jet-skiing, and famous turquoise waters',
      'Eagle’s Nest viewpoint with 360-degree Karakoram panoramic views',
      'Passu Cones (Cathedral Ridges) and Hussaini Suspension Bridge',
      'Khunjerab Pass (4,693 m) - highest paved international border'
    ],
    localCuisine: [
      'Chapshuro (Hunza meat pie with mountain herbs)',
      'Dowdo Noodle Soup with dry apricots',
      'Apricot Cake at Cafe de Hunza',
      'Gyaling / Quroot traditional wheat flatbread'
    ],
    travelTips: [
      'Fly Islamabad to Gilgit (45m) to save travel time if weather permits.',
      'Autumn (October/November) offers world-famous golden foliage across the valley.',
      'Try authentic organic apricot kernel oil and dried mountain apricots.'
    ]
  },
  {
    id: 'skardu-valley',
    name: 'Skardu & Deosai',
    tagline: 'Gateway to K2 & Land of Giants',
    category: 'Northern Areas',
    categoryLabel: 'Nature & Mountains',
    categoryIcon: 'landscape',
    province: 'Gilgit-Baltistan',
    rating: 4.9,
    reviewsCount: 3950,
    featured: false,
    gridSpan: 'medium',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoFB9oCph8XnaXgURO4Lrudrw4AdwGc3cvRNpYwT4TkQ_guGl4OOrt4XHnuqRCmi0VlIsLjV1KdSQWB_ebH1a6Na5rDMoFtMC9f34UouDY7s43-_s-gr0proJP121y9Iq0nr9cyC-Jev6GKDScsHmIniytDkmedxv6BUmW1WOjAisN0442exjPhTFUtai9RV8ZO7yvlv5F0QOW_xHP--rgd_Th2lFPFMI5nbZUjHkMXNx4WmQa27A13Q',
    thumbnailImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoFB9oCph8XnaXgURO4Lrudrw4AdwGc3cvRNpYwT4TkQ_guGl4OOrt4XHnuqRCmi0VlIsLjV1KdSQWB_ebH1a6Na5rDMoFtMC9f34UouDY7s43-_s-gr0proJP121y9Iq0nr9cyC-Jev6GKDScsHmIniytDkmedxv6BUmW1WOjAisN0442exjPhTFUtai9RV8ZO7yvlv5F0QOW_xHP--rgd_Th2lFPFMI5nbZUjHkMXNx4WmQa27A13Q',
    mapImage: NARAN_MAP,
    about: 'Skardu is the capital of Baltistan and the gateway to 4 of the world’s 14 eight-thousander peaks including K2 and Broad Peak. Famous for the Deosai National Park (second-highest plateau on Earth) and Katpana Cold Desert.',
    altitude: '2,228 m (7,310 ft)',
    bestSeason: 'May to September',
    latitude: 35.2971,
    longitude: 75.6333,
    routeInfo: {
      fromCity: 'Islamabad (Flight 1h or Jaglot-Skardu Road 16h)',
      travelDuration: '1h flight or 16h drive',
      travelDistance: '635 km',
      roadCondition: 'Scenic Mountain Pass',
      recommendedVehicle: 'Flight or SUV',
      routeSummary: 'Direct flights from Islamabad to Skardu International Airport, or take the newly paved Jaglot-Skardu expressway traversing the Indus River canyon.',
      waypoints: [
        { name: 'Islamabad Airport', distanceFromStart: '0 km', timeFromStart: '0h 00m', highlightNote: 'Scenic flight passing Nanga Parbat and K2', fuelStation: true },
        { name: 'Skardu Airport / Town', distanceFromStart: '635 km', timeFromStart: '1h 00m', elevationMeters: 2228, highlightNote: 'Landing surrounded by Karakoram giants', fuelStation: true }
      ]
    },
    weatherForecast: [
      { day: 'Mon', fullDate: 'Sep 1', icon: 'sunny', tempMax: 24, tempMin: 11, condition: 'Bright & Crisp', rainChance: 0, windSpeedKm: 9, humidity: 22 },
      { day: 'Tue', fullDate: 'Sep 2', icon: 'sunny', tempMax: 25, tempMin: 12, condition: 'Clear Sky', rainChance: 0, windSpeedKm: 8, humidity: 20 },
      { day: 'Wed', fullDate: 'Sep 3', icon: 'partly_cloudy_day', tempMax: 22, tempMin: 10, condition: 'Mild Clouds', rainChance: 10, windSpeedKm: 13, humidity: 28 },
      { day: 'Thu', fullDate: 'Sep 4', icon: 'sunny', tempMax: 23, tempMin: 10, condition: 'Sunny Desert Glow', rainChance: 0, windSpeedKm: 10, humidity: 25 }
    ],
    highlights: [
      'Shangrila Resort & Lower Kachura Lake with iconic pagodas',
      'Deosai National Park (4,114 m) - habitat of Himalayan Brown Bears',
      'Katpana Cold Desert - highest cold sand dunes with stargazing',
      'Basho Valley and Upper Kachura crystal blue lake',
      'Kharpocho Fort overlooking Indus River convergence'
    ],
    localCuisine: [
      'Balti Mamtu (Steamed meat dumplings with spiced yogurt)',
      'Prapoo (Handmade wheat noodles in walnut sauce)',
      'Balti Butter Tea & Khambir bread'
    ],
    travelTips: [
      'Book flights early as Skardu flights operate on visual flight rules (VFR).',
      'Deosai plateau requires warm thermal clothing even in peak July-August.'
    ]
  },
  {
    id: 'fairy-meadows',
    name: 'Fairy Meadows & Nanga Parbat',
    tagline: 'Grassland at the Base of the Killer Mountain',
    category: 'Northern Areas',
    categoryLabel: 'Nature & Mountains',
    categoryIcon: 'landscape',
    province: 'Gilgit-Baltistan',
    rating: 4.9,
    reviewsCount: 2840,
    featured: false,
    gridSpan: 'large',
    heroImage: HUNZA_IMAGE,
    thumbnailImage: HUNZA_IMAGE,
    mapImage: NARAN_MAP,
    about: 'Named "Märchenwiese" (Fairy Meadows) by German climbers, this lush alpine grassland sits directly under the sheer 8,126-meter Raikhot face of Nanga Parbat, offering one of the most sublime mountain amphitheaters on Earth.',
    altitude: '3,300 m (10,826 ft)',
    bestSeason: 'June to September',
    latitude: 35.3881,
    longitude: 74.5772,
    routeInfo: {
      fromCity: 'Islamabad / Chilas',
      travelDuration: '12h drive + 1.5h jeep + 3h trek',
      travelDistance: '460 km',
      roadCondition: 'Off-road 4x4 Required',
      recommendedVehicle: '4x4 Jeep',
      routeSummary: 'Drive KKH to Raikhot Bridge, hire a local 4x4 jeep up the legendary cliffside track to Tattu village, then hike 5 km to Fairy Meadows.',
      waypoints: [
        { name: 'Raikhot Bridge (KKH)', distanceFromStart: '0 km', timeFromStart: '0h 00m', highlightNote: 'Switch from highway to mountain 4x4 jeeps', fuelStation: false },
        { name: 'Tattu Village', distanceFromStart: '12 km', timeFromStart: '1h 30m', elevationMeters: 2600, highlightNote: 'Trek trailhead; hire porters/horses if needed', fuelStation: false },
        { name: 'Fairy Meadows Plateau', distanceFromStart: '17 km', timeFromStart: '4h 30m', elevationMeters: 3300, highlightNote: 'Wooden log cabins facing Nanga Parbat', fuelStation: false }
      ]
    },
    weatherForecast: [
      { day: 'Mon', fullDate: 'Sep 1', icon: 'sunny', tempMax: 16, tempMin: 4, condition: 'Alpine Sunshine', rainChance: 5, windSpeedKm: 14, humidity: 30 },
      { day: 'Tue', fullDate: 'Sep 2', icon: 'partly_cloudy_day', tempMax: 14, tempMin: 3, condition: 'Passing Clouds', rainChance: 15, windSpeedKm: 16, humidity: 35 },
      { day: 'Wed', fullDate: 'Sep 3', icon: 'sunny', tempMax: 17, tempMin: 5, condition: 'Clear Peaks', rainChance: 0, windSpeedKm: 10, humidity: 28 }
    ],
    highlights: [
      'Direct unobstructed view of Nanga Parbat (8,126 m)',
      'Trek to Beyal Camp and Nanga Parbat Base Camp (3,967 m)',
      'Bonfire nights under pristine Milky Way skies',
      'Reflection Lake mirroring the snowy summit'
    ],
    localCuisine: [
      'Campfire Dumba Karahi',
      'Hot Desi Chai with cardamom',
      'Freshly baked Tandoori Naan'
    ],
    travelTips: [
      'Wear sturdy trekking boots with good ankle support for the Tattu trail.',
      'Log cabins have wooden woodstoves (Bukhari) for cozy warmth at night.'
    ]
  },
  {
    id: 'mohenjo-daro',
    name: 'Mohenjo-daro',
    tagline: 'Mound of the Dead - 5,000 Year Old Ancient Metropolis',
    category: 'Historical Forts',
    categoryLabel: 'Archaeology & Heritage',
    categoryIcon: 'temple_buddhist',
    province: 'Sindh',
    rating: 4.7,
    reviewsCount: 1890,
    featured: false,
    gridSpan: 'medium',
    heroImage: BADSHAHI_IMAGE,
    thumbnailImage: BADSHAHI_IMAGE,
    mapImage: NARAN_MAP,
    about: 'Mohenjo-daro is an archaeological site built around 2500 BCE in Sindh. It was one of the largest settlements of the ancient Indus Valley Civilisation and one of the world\'s earliest major cities with advanced civil engineering and urban drainage.',
    altitude: '52 m (171 ft)',
    bestSeason: 'November to February',
    latitude: 27.3292,
    longitude: 68.1354,
    routeInfo: {
      fromCity: 'Sukkur / Karachi',
      travelDuration: '1h 30m from Sukkur or 5h from Karachi',
      travelDistance: '80 km from Sukkur',
      roadCondition: 'Paved Highway',
      recommendedVehicle: 'Sedan / SUV',
      routeSummary: 'Take Indus Highway (N-55) from Sukkur directly to Mohenjo-daro archaeological complex near Larkana.',
      waypoints: [
        { name: 'Sukkur City', distanceFromStart: '0 km', timeFromStart: '0h 00m', highlightNote: 'Famous Sukkur Barrage & Lloyd Barrage', fuelStation: true },
        { name: 'Mohenjo-daro Complex', distanceFromStart: '80 km', timeFromStart: '1h 30m', highlightNote: 'UNESCO World Heritage Great Bath & Stupa', fuelStation: true }
      ]
    },
    weatherForecast: [
      { day: 'Mon', fullDate: 'Sep 1', icon: 'sunny', tempMax: 36, tempMin: 27, condition: 'Sunny & Dry', rainChance: 0, windSpeedKm: 12, humidity: 45 },
      { day: 'Tue', fullDate: 'Sep 2', icon: 'sunny', tempMax: 37, tempMin: 28, condition: 'Clear Sky', rainChance: 0, windSpeedKm: 10, humidity: 40 }
    ],
    highlights: [
      'The Great Bath - earliest public water tank of the ancient world',
      'Buddhist Stupa crowning the citadel mound',
      'Ancient baked-brick drainage and covered sewer systems',
      'On-site archaeological museum showcasing Priest-King & Dancing Girl artifacts'
    ],
    localCuisine: [
      'Sindhi Biryani with dried plums and potatoes',
      'Larkana Guavas and fresh citrus juice',
      'Sindhi Curry & Rice'
    ],
    travelTips: [
      'Visit during winter months (Dec-Feb) to avoid peak Sindh summer heat.',
      'Hire a licensed archaeology guide on-site to understand the historical layout.'
    ]
  }
];

export const CATEGORIES = ['All', 'Historical Forts', 'Lakes & Dams', 'Hidden Waterfalls', 'Desi Food Trails', 'Cultural Walled Cities', 'Northern Areas'] as const;
