@echo off
title Pakistani Voyages - GitHub Push Automation
echo ============================================================
echo   PAKISTANI VOYAGES - ZERO-TOUCH GITHUB PUSH AUTOMATION
echo ============================================================
echo.

cd /d "%~dp0"

echo [1/5] Initializing Git repository...
if not exist ".git" (
    git init
) else (
    echo Git repository is already initialized.
)

echo.
echo [2/5] Staging files for commit...
git add .

echo.
echo [3/5] Creating commit...
git commit -m "Initial Full-Stack Commit" || echo Files already committed or no changes to commit.

echo.
echo ============================================================
echo  [4/5] GitHub Remote Setup
echo ============================================================
set /p REPO_URL="Enter your GitHub Repository URL (e.g. https://github.com/username/repository.git): "

if "%REPO_URL%"=="" (
    echo.
    echo [ERROR] Repository URL cannot be empty!
    pause
    exit /b 1
)

echo.
echo [5/5] Setting branch to main and pushing to GitHub...
git branch -M main
git remote remove origin 2>nul
git remote add origin %REPO_URL%

echo Pushing code to %REPO_URL%...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ============================================================
    echo  SUCCESS! Your code has been pushed to GitHub.
    echo ============================================================
) else (
    echo.
    echo [ERROR] Git push failed. Please verify your repository URL and authentication credentials.
)

pause
