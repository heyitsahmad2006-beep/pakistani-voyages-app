export type Category = 'All' | 'Historical' | 'Northern Areas' | 'Urban' | 'Lakes' | 'Coastal' | 'Valleys';

export type TabType = 'explore' | 'saved' | 'trips';

export interface WeatherDay {
  day: string; // e.g. "Mon"
  fullDate: string; // e.g. "Sep 1"
  icon: string; // Material Symbol icon name e.g. 'sunny', 'partly_cloudy_day', 'cloudy', 'rainy', 'thunderstorm'
  tempMax: number; // e.g. 22
  tempMin: number; // e.g. 11
  condition: string; // e.g. "Sunny & Clear"
  rainChance: number; // e.g. 10%
  windSpeedKm: number; // e.g. 14 km/h
  humidity: number; // e.g. 45%
}

export interface RouteWaypoint {
  name: string;
  distanceFromStart: string;
  timeFromStart: string;
  elevationMeters?: number;
  highlightNote: string;
  fuelStation: boolean;
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  category: Category;
  categoryLabel: string;
  categoryIcon: string;
  province: string;
  rating: number;
  reviewsCount: number;
  featured: boolean;
  gridSpan: 'large' | 'medium' | 'full';
  
  heroImage: string;
  thumbnailImage: string;
  mapImage: string;
  
  about: string;
  altitude: string;
  bestSeason: string;
  latitude: number;
  longitude: number;
  
  routeInfo: {
    fromCity: string;
    travelDuration: string;
    travelDistance: string;
    roadCondition: 'Paved Highway' | 'Scenic Mountain Pass' | 'Expressway & Serpentine' | 'Off-road 4x4 Required';
    recommendedVehicle: 'Sedan / SUV' | '4x4 Jeep' | 'Coaster / High-Roof' | 'Flight or SUV';
    routeSummary: string;
    waypoints: RouteWaypoint[];
  };
  
  weatherForecast: WeatherDay[];
  highlights: string[];
  localCuisine: string[];
  travelTips: string[];
}

export interface SavedTrip {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  destinationIds: string[];
  totalDays: number;
  notes: string;
  budgetPkr: number;
}
