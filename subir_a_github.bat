@echo off
cls
echo =========================================================================
echo    INSTITUTO SUPERIOR TECNOLOGICO CORDILLERA - PROGRAMACION WEB 1
echo       SUBIR PROYECTO A GITHUB: AD01 - Mantenimiento Automotriz
echo =========================================================================
echo.
echo Formato obligatorio del repositorio:
echo WEB-3AM-B1-AD01-FundamentosDesarrolloWeb-MontufarMatias
echo.
echo NOTA: Asegurate de haber creado el repositorio VACIO en GitHub:
echo https://github.com/new con el nombre exacto anterior.
echo.
set /p GH_USER=Ingresa tu usuario de GitHub: 

if "%GH_USER%"=="" (
    echo [ERROR] Debes ingresar tu usuario de GitHub.
    pause
    exit /b
)

set REPO_URL=https://github.com/%GH_USER%/WEB-3AM-B1-AD01-FundamentosDesarrolloWeb-MontufarMatias.git

echo.
echo -------------------------------------------------------------------------
echo Subiendo codigo a: %REPO_URL%
echo -------------------------------------------------------------------------
echo.

git add .
git commit -m "feat: entrega completa AD01 fundamentos de desarrollo web - Mantenimiento Automotriz"
git branch -M main
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%

echo Subiendo ramas y commits...
git push -u origin main

if errorlevel 1 (
    echo.
    echo =========================================================================
    echo [ERROR] No se pudo subir. Verifica:
    echo 1. Que creaste el repositorio en GitHub con el nombre exacto.
    echo 2. Que iniciaste sesion o ingresaste tus credenciales de GitHub.
    echo =========================================================================
) else (
    echo.
    echo =========================================================================
    echo [EXITO] Proyecto subido correctamente a GitHub:
    echo %REPO_URL%
    echo =========================================================================
)

echo.
pause
