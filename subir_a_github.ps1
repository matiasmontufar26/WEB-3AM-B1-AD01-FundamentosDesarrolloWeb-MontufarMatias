# Script de subida automática a GitHub - ISTCO
Write-Host "=========================================================================" -ForegroundColor Cyan
Write-Host "   INSTITUTO SUPERIOR TECNOLÓGICO CORDILLERA - PROGRAMACIÓN WEB 1" -ForegroundColor Yellow
Write-Host "      SUBIR PROYECTO A GITHUB: AD01 - Mantenimiento Automotriz" -ForegroundColor Yellow
Write-Host "=========================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Nombre del repositorio obligatorio:" -ForegroundColor White
Write-Host "WEB-3AM-B1-AD01-FundamentosDesarrolloWeb-MontufarMatias" -ForegroundColor Green
Write-Host ""
Write-Host "NOTA: Asegúrate de haber creado el repositorio VACÍO en GitHub:" -ForegroundColor Gray
Write-Host "https://github.com/new (con el nombre exacto anterior)." -ForegroundColor Gray
Write-Host ""

$ghUser = Read-Host "Ingresa tu usuario de GitHub (ej. matiasmontufar)"
if ([string]::IsNullOrWhiteSpace($ghUser)) {
    Write-Host "[ERROR] Debes ingresar tu usuario de GitHub." -ForegroundColor Red
    pause
    exit
}

$repoUrl = "https://github.com/$ghUser/WEB-3AM-B1-AD01-FundamentosDesarrolloWeb-MontufarMatias.git"
Write-Host ""
Write-Host "Subiendo código a: $repoUrl" -ForegroundColor Cyan
Write-Host ""

git add .
git commit -m "feat: entrega completa AD01 fundamentos de desarrollo web - Mantenimiento Automotriz"
git branch -M main
git remote remove origin 2>$null
git remote add origin $repoUrl

Write-Host "Subiendo ramas y commits..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=========================================================================" -ForegroundColor Green
    Write-Host "[ÉXITO] ¡Proyecto subido correctamente a GitHub!" -ForegroundColor Green
    Write-Host "Enlace de tu entrega: $repoUrl" -ForegroundColor White
    Write-Host "=========================================================================" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "=========================================================================" -ForegroundColor Red
    Write-Host "[ERROR] No se pudo subir. Verifica que el repositorio exista en tu GitHub" -ForegroundColor Red
    Write-Host "y que hayas iniciado sesión con tus credenciales o token." -ForegroundColor Red
    Write-Host "=========================================================================" -ForegroundColor Red
}

Write-Host ""
pause
