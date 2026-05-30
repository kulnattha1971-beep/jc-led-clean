# สร้างไฟล์ zip สำหรับอัปโหลด GitHub (ไม่รวม node_modules)
$root = Split-Path $PSScriptRoot -Parent
$zipPath = Join-Path (Split-Path $root -Parent) "jc-led-clean-upload.zip"

if (Test-Path $zipPath) { Remove-Item $zipPath -Force }

$temp = Join-Path $env:TEMP "jc-led-upload"
if (Test-Path $temp) { Remove-Item $temp -Recurse -Force }
New-Item -ItemType Directory -Path $temp | Out-Null

robocopy $root $temp /E /XD node_modules .next .vercel /XF *.zip | Out-Null
Compress-Archive -Path "$temp\*" -DestinationPath $zipPath -Force
Remove-Item $temp -Recurse -Force

Write-Host "Created: $zipPath" -ForegroundColor Green
Write-Host "Upload this zip to GitHub -> New repo -> upload files" -ForegroundColor Cyan
