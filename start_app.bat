@echo off
title Pakistani Voyages - Full-Stack Launcher
echo ============================================================
echo   PAKISTANI VOYAGES - AUTOMATED 1-CLICK FULL-STACK LAUNCHER
echo ============================================================
echo.

cd /d "%~dp0"

echo [1/5] Installing Node.js dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] npm install failed!
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [2/5] Building React frontend application...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Frontend build failed!
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [3/5] Setting up Python virtual environment...
if not exist "venv" (
    echo Creating virtual environment in .\venv...
    python -m venv venv
    if %ERRORLEVEL% NEQ 0 (
        echo [ERROR] Python venv creation failed! Please ensure Python is installed and added to PATH.
        pause
        exit /b %ERRORLEVEL%
    )
)

echo Installing Python backend dependencies...
call venv\Scripts\activate.bat
pip install -r backend\requirements.txt
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Installing backend requirements failed!
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo [4/5] Opening browser at http://localhost:8000...
start http://localhost:8000

echo.
echo [5/5] Starting FastAPI server on port 8000...
echo ============================================================
echo  Pakistani Voyages is live at http://localhost:8000
echo  Press Ctrl+C in this window to stop the server.
echo ============================================================
python -m uvicorn backend.main:app --host 0.0.0.0 --port 8000

pause
