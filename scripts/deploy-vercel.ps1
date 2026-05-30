# Deploy JC LED to Vercel (production)
Set-Location $PSScriptRoot\..

Write-Host "=== JC LED — Deploy to Vercel ===" -ForegroundColor Cyan
Write-Host "Tip: Add RESEND_API_KEY and NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in Vercel Dashboard -> Settings -> Environment Variables" -ForegroundColor DarkGray
Write-Host ""

npx vercel@latest deploy --prod

Write-Host ""
Write-Host "Done. Add domain jcled.co.th in Vercel -> Settings -> Domains" -ForegroundColor Green
Write-Host "Search Console: see DEPLOY-GSC.md" -ForegroundColor Green
