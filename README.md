---
title: Pakistani Voyages
emoji: 🏔️
colorFrom: green
colorTo: blue
sdk: docker
pinned: false
---

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Pakistani Voyages - Full-Stack Travel Application

Discover the breath-taking beauty, alpine weather, and heritage routes of Pakistan. Powered by React, Python FastAPI, OpenMeteo Weather API, and Google Maps.

## Features

- **Alpine & Regional Destinations**: Explore Naran Valley, Badshahi Mosque, Hunza Valley, Skardu & Deosai, Fairy Meadows, and Mohenjo-daro.
- **Live Weather Integration**: 14-day live weather forecasts proxied via FastAPI from the free OpenMeteo API.
- **Google Maps Navigation**: Real-time directions and route waypoints from major Pakistani hubs (Islamabad, Lahore, Peshawar).
- **1-Click Execution System**: Double-click `start_app.bat` to automatically build the frontend, initialize Python `venv`, and start the FastAPI server on port 8000.
- **Dockerized Deployment**: Multi-stage `Dockerfile` ready for Hugging Face Spaces and cloud container hosting.

## Run Locally

1. Double-click `start_app.bat` (Windows) or run:
   ```bash
   npm install
   npm run build
   python -m venv venv
   .\venv\Scripts\pip install -r backend/requirements.txt
   python -m uvicorn backend.main:app --host 0.0.0.0 --port 8000
   ```
2. Open `http://localhost:8000` in your web browser.
