import os
from datetime import datetime
from typing import Optional
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import requests

app = FastAPI(
    title="Pakistani Voyages API",
    description="Full-stack FastAPI backend serving Pakistani Voyages React application, live OpenMeteo weather data, and Google Maps routing logic.",
    version="1.0.0"
)

# Enable CORS for development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST_DIR = os.path.join(BASE_DIR, "dist")

def map_wmo_code(code: int):
    # WMO Weather interpretation codes
    if code == 0:
        return "Sunny & Clear", "sunny"
    elif code in [1, 2]:
        return "Partly Cloudy", "partly_cloudy_day"
    elif code == 3:
        return "Overcast Skies", "cloudy"
    elif code in [45, 48]:
        return "Foggy & Misty", "foggy"
    elif code in [51, 53, 55, 56, 57]:
        return "Light Drizzle", "rainy"
    elif code in [61, 63, 65, 66, 67]:
        return "Rain Showers", "rainy"
    elif code in [71, 73, 75, 77]:
        return "Alpine Snowfall", "ac_unit"
    elif code in [80, 81, 82]:
        return "Heavy Rain Showers", "rainy"
    elif code in [85, 86]:
        return "Snow Showers", "ac_unit"
    elif code in [95, 96, 99]:
        return "Thunderstorm", "thunderstorm"
    else:
        return "Clear Alpine Weather", "sunny"

@app.get("/api/health")
def health_check():
    return {"status": "ok", "app": "Pakistani Voyages", "timestamp": datetime.now().isoformat()}

@app.get("/api/weather")
def get_live_weather(
    lat: float = Query(..., description="Latitude of the destination"),
    lng: float = Query(..., description="Longitude of the destination"),
    days: int = Query(14, ge=1, le=14, description="Number of forecast days")
):
    """
    Fetch live 14-day weather forecast from free OpenMeteo API.
    Does NOT require an API key.
    """
    try:
        url = (
            f"https://api.open-meteo.com/v1/forecast?"
            f"latitude={lat}&longitude={lng}"
            f"&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max,windspeed_10m_max,relative_humidity_2m_max"
            f"&timezone=auto&forecast_days={days}"
        )
        resp = requests.get(url, timeout=10)
        if resp.status_code != 200:
            raise HTTPException(status_code=resp.status_code, detail="Failed to fetch data from OpenMeteo API")
        
        data = resp.json()
        daily = data.get("daily", {})
        
        times = daily.get("time", [])
        weathercodes = daily.get("weathercode", [])
        temp_maxs = daily.get("temperature_2m_max", [])
        temp_mins = daily.get("temperature_2m_min", [])
        rain_chances = daily.get("precipitation_probability_max", [])
        wind_speeds = daily.get("windspeed_10m_max", [])
        humidities = daily.get("relative_humidity_2m_max", [])
        
        formatted_forecast = []
        for i in range(len(times)):
            dt = datetime.strptime(times[i], "%Y-%m-%d")
            day_str = dt.strftime("%a")  # e.g., Mon
            full_date_str = dt.strftime("%b %d").replace(" 0", " ")  # e.g., Sep 1
            
            code = weathercodes[i] if i < len(weathercodes) and weathercodes[i] is not None else 0
            condition, icon = map_wmo_code(code)
            
            t_max = round(temp_maxs[i]) if i < len(temp_maxs) and temp_maxs[i] is not None else 20
            t_min = round(temp_mins[i]) if i < len(temp_mins) and temp_mins[i] is not None else 10
            rain = rain_chances[i] if i < len(rain_chances) and rain_chances[i] is not None else 0
            wind = round(wind_speeds[i]) if i < len(wind_speeds) and wind_speeds[i] is not None else 10
            hum = round(humidities[i]) if i < len(humidities) and humidities[i] is not None else 45
            
            formatted_forecast.append({
                "day": day_str,
                "fullDate": full_date_str,
                "icon": icon,
                "tempMax": t_max,
                "tempMin": t_min,
                "condition": condition,
                "rainChance": rain,
                "windSpeedKm": wind,
                "humidity": hum
            })
            
        return {
            "latitude": lat,
            "longitude": lng,
            "timezone": data.get("timezone", "UTC"),
            "forecast": formatted_forecast
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error retrieving weather forecast: {str(e)}")

@app.get("/api/route")
def get_route_info(
    destination_name: str = Query(..., description="Target destination name"),
    origin: str = Query("Islamabad", description="Departure city"),
    lat: Optional[float] = Query(None),
    lng: Optional[float] = Query(None)
):
    """
    Generate live Google Maps directions URLs and route calculation details.
    """
    encoded_origin = f"{origin}, Pakistan"
    encoded_dest = f"{destination_name}, Pakistan"
    
    maps_dir_url = f"https://www.google.com/maps/dir/?api=1&origin={requests.utils.quote(encoded_origin)}&destination={requests.utils.quote(encoded_dest)}&travelmode=driving"
    
    embed_url = ""
    if lat is not None and lng is not None:
        embed_url = f"https://maps.google.com/maps?q={lat},{lng}&z=12&output=embed"
    else:
        embed_url = f"https://maps.google.com/maps?q={requests.utils.quote(encoded_dest)}&z=10&output=embed"
        
    return {
        "destination": destination_name,
        "origin": origin,
        "googleMapsUrl": maps_dir_url,
        "embedMapUrl": embed_url,
        "coordinates": {"lat": lat, "lng": lng} if lat and lng else None
    }

# Serve React static assets if dist exists
if os.path.exists(DIST_DIR):
    app.mount("/assets", StaticFiles(directory=os.path.join(DIST_DIR, "assets")), name="assets")

    @app.get("/{full_path:path}")
    async def serve_spa(full_path: str):
        # Allow API requests to fall through
        if full_path.startswith("api/"):
            raise HTTPException(status_code=404, detail="API route not found")
        file_path = os.path.join(DIST_DIR, full_path)
        if os.path.exists(file_path) and os.path.isfile(file_path):
            return FileResponse(file_path)
        return FileResponse(os.path.join(DIST_DIR, "index.html"))
