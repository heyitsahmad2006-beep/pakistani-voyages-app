@echo off
title Pakistani Voyages - Hugging Face Space Deployer
echo ============================================================
echo   PAKISTANI VOYAGES - AUTOMATED HUGGING FACE DEPLOYMENT
echo ============================================================
echo.

cd /d "%~dp0"

echo [1/3] Staging any uncommitted changes...
git add .
git commit -m "Deploy update to Hugging Face Space" 2>nul || echo No new local changes to commit.

echo.
echo [2/3] Configuring Hugging Face Space remote...
git remote remove hf-space 2>nul
git remote add hf-space https://huggingface.co/spaces/Ahmad804/pakistani-voyages-app

echo.
echo [3/3] Force-pushing main branch to Hugging Face Space...
echo Target Space: https://huggingface.co/spaces/Ahmad804/pakistani-voyages-app
echo.
git push hf-space main -f

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ============================================================
    echo  SUCCESS! Application deployed to Hugging Face Space:
    echo  https://huggingface.co/spaces/Ahmad804/pakistani-voyages-app
    echo ============================================================
) else (
    echo.
    echo [ERROR] Deployment failed. Please verify your Hugging Face access token or SSH key.
)

pause
