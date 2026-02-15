@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo.
echo === Wedding-Projekt – Lokaler Server ===
echo Ordner: %CD%
echo.

where py >nul 2>&1 && set PYCMD=py
if not defined PYCMD where python >nul 2>&1 && set PYCMD=python
if not defined PYCMD where python3 >nul 2>&1 && set PYCMD=python3

if not defined PYCMD (
    echo Python wurde nicht gefunden.
    echo Bitte installieren: https://www.python.org/downloads/
    echo Beim Installieren "Add Python to PATH" ankreuzen.
    pause
    exit /b 1
)

echo Starte Server mit: %PYCMD% -m http.server 8000
echo Offne im Browser: http://localhost:8000
echo Zum Beenden dieses Fenster schließen oder Strg+C drücken.
echo.
start "" http://localhost:8000
%PYCMD% -m http.server 8000
pause
