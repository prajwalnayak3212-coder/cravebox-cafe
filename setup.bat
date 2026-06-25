@echo off
REM CraveBox Café - Automated Setup Script
REM Runs all initial setup steps for the project

echo.
echo =====================================
echo  CraveBox Café - Setup Assistant
echo =====================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed!
    echo Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

echo ✅ Node.js detected
node --version

echo.
echo Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo ❌ npm install failed!
    pause
    exit /b 1
)

echo.
echo ✅ Setup complete!
echo.
echo Next steps:
echo 1. Add your media files to public/videos, public/images, and public/gallery
echo 2. Run: npm run dev
echo 3. Website opens at http://localhost:3000
echo.
echo For help, see QUICK_START.md
echo.
pause
