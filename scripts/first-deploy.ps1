# รันหลังสมัคร Vercel แล้ว (ใช้ Google/GitHub สมัครได้ฟรี)
Set-Location $PSScriptRoot\..

Write-Host @"

========================================
  JC LED — Deploy ครั้งแรก
========================================
1) สมัคร Vercel ที่ https://vercel.com/signup (ถ้ายังไม่มี)
2) ล็อกอิน CLI ด้านล่าง (เบราว์เซอร์จะเปิดให้กด Authorize)
3) Deploy ขึ้น production อัตโนมัติ

"@ -ForegroundColor Cyan

npx vercel@latest login
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "`nDeploying to production..." -ForegroundColor Yellow
npx vercel@latest deploy --prod

Write-Host @"

========================================
  ขั้นตอนถัดไป (ใน Vercel Dashboard)
========================================
• Settings -> Environment Variables:
    RESEND_API_KEY = (จาก .env.local ของคุณ)
• Settings -> Domains -> เพิ่ม jcled.co.th และ www.jcled.co.th
• ตั้ง DNS ตามที่ Vercel บอก (A + CNAME)

เมื่อโดเมนขึ้นแล้ว ค่อยทำ Search Console ตาม DEPLOY-GSC.md

"@ -ForegroundColor Green
