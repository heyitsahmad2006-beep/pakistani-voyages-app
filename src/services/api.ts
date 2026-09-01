import { WeatherDay } from '../types';

export interface RouteResponse {
  destination: string;
  origin: string;
  googleMapsUrl: string;
  embedMapUrl: string;
  coordinates?: { lat: number; lng: number } | null;
}

/**
 * Fetch real-time weather forecast from the FastAPI backend (which proxies OpenMeteo API).
 */
export async function fetchLiveWeather(
  lat: number,
  lng: number,
  days: number = 14
): Promise<WeatherDay[] | null> {
  try {
    const response = await fetch(`/api/weather?lat=${lat}&lng=${lng}&days=${days}`);
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.forecast;
  } catch (error) {
    console.warn('Backend weather API unavailable, using bundled forecast:', error);
    return null;
  }
}

/**
 * Fetch Google Maps route details and embed links from the FastAPI backend.
 */
export async function fetchRouteInfo(
  destinationName: string,
  origin: string = 'Islamabad',
  lat?: number,
  lng?: number
): Promise<RouteResponse | null> {
  try {
    let url = `/api/route?destination_name=${encodeURIComponent(destinationName)}&origin=${encodeURIComponent(origin)}`;
    if (lat !== undefined && lng !== undefined) {
      url += `&lat=${lat}&lng=${lng}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Route API error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.warn('Backend route API unavailable:', error);
    return null;
  }
}
