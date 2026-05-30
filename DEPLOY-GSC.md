# Deploy + Google Search Console — JC LED

## 1) Deploy บน Vercel

### ล็อกอิน (ครั้งแรก)
```powershell
cd jc-led-clean
npx vercel@latest login
```

### Deploy production
```powershell
npm run deploy
# หรือ
.\scripts\deploy-vercel.ps1
```

### ตั้งโดเมน `www.jcled.co.th`
1. เปิด [Vercel Dashboard](https://vercel.com/dashboard) → โปรเจกต์ JC LED
2. **Settings** → **Domains** → Add:
   - `jcled.co.th`
   - `www.jcled.co.th`
3. ที่ผู้ให้โดเมน (เช่น Namecheap, GoDaddy, Cloudflare) ตั้ง DNS ตามที่ Vercel แสดง:
   - **A** `@` → `76.76.21.21`
   - **CNAME** `www` → `cname.vercel-dns.com`
4. รอ SSL เป็น Ready (ประมาณ 5–30 นาที)

### Environment variables บน Vercel
ใน **Settings → Environment Variables** (Production):

| ชื่อ | ค่า |
|------|-----|
| `RESEND_API_KEY` | จาก Resend |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | รหัสจาก Search Console (ขั้นตอน 2) |

---

## 2) Google Search Console

1. เปิด https://search.google.com/search-console
2. **เพิ่มทรัพยสินท์** → **โดเมน** หรือ **URL prefix**  
   แนะนำ URL prefix: `https://www.jcled.co.th`
3. เลือกวิธี **แท็ก HTML** — คัดลอกเฉพาะค่าใน `content="..."`  
   ตัวอย่าง: `<meta name="google-site-verification" content="abc123XYZ" />` → ใส่ `abc123XYZ`
4. ใส่ใน Vercel env: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=abc123XYZ`
5. **Redeploy** โปรเจกต์ (Deployments → … → Redeploy)
6. กลับ Search Console → **ยืนยัน**
7. **Sitemaps** → ส่ง URL: `https://www.jcled.co.th/sitemap.xml`

### ทางเลือก: ไฟล์ HTML
ถ้าเลือกวิธีไฟล์ — วางไฟล์ที่ Google ให้ (เช่น `google123.html`) ในโฟลเดอร์ `public/` แล้ว deploy ใหม่

---

## 3) หลัง deploy ควรเช็ก
- https://www.jcled.co.th/robots.txt
- https://www.jcled.co.th/sitemap.xml
- ฟอร์มติดต่อส่งอีเมลได้
- [Rich Results Test](https://search.google.com/test/rich-results)
