@echo off
chcp 65001 > nul
title Subir Proyecto a GitHub - ISTCO
color 0B
echo =========================================================================
echo    INSTITUTO SUPERIOR TECNOLÓGICO CORDILLERA - PROGRAMACIÓN WEB 1
echo       SUBIR PROYECTO A GITHUB: AD01 - Mantenimiento Automotriz
echo =========================================================================
echo.
echo Formato obligatorio del repositorio:
echo WEB-3AM-B1-AD01-FundamentosDesarrolloWeb-MontufarMatias
echo.
echo NOTA: Asegúrate de haber creado primero el repositorio VACÍO en GitHub.
echo (https://github.com/new) con ese nombre exacto.
echo.
set /p GH_USER="Ingresa tu nombre de usuario de GitHub (ej. matiasmontufar): "

if "%GH_USER%"=="" (
    echo [ERROR] Debes ingresar tu usuario de GitHub.
    pause
    exit /b
)

set REPO_URL=https://github.com/%GH_USER%/WEB-3AM-B1-AD01-FundamentosDesarrolloWeb-MontufarMatias.git

echo.
echo -------------------------------------------------------------------------
echo Subiendo código a: %REPO_URL%
echo -------------------------------------------------------------------------
echo.

git add .
git commit -m "feat: entrega completa AD01 fundamentos de desarrollo web - Mantenimiento Automotriz"
git branch -M main

:: Verificar si el remote ya existe
git remote remove origin > nul 2>&1
git remote add origin %REPO_URL%

echo Subiendo ramas y commits...
git push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo =========================================================================
    echo [ÉXITO] ¡Tu proyecto se ha subido correctamente a GitHub!
    echo Enlace de tu entrega: %REPO_URL%
    echo =========================================================================
) else (
    echo.
    echo =========================================================================
    echo [AVISO] Si te solicitó iniciar sesión, completa la autenticación en tu
    echo navegador o mediante Personal Access Token (PAT).
    echo =========================================================================
)

echo.
pause
