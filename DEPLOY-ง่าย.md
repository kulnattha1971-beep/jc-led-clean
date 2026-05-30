# วิธีขึ้นเว็บ (ไม่ใช้ Vercel CLI / ไม่ต้องใส่โค้ดในเทอร์มินัล)

ปัญหา Vercel CLI ที่ให้โค้ดแบบ `SPMM-XXXX` แล้วใส่ไม่ได้ — **ข้ามวิธีนั้นได้เลย**  
ใช้สมัครเว็บ + อัปโหลดผ่าน GitHub แทน

---

## ส่วนที่ 1 — ใส่รหัส Google แล้ว (ในโค้ด)

รหัส Search Console อยู่ในเว็บแล้ว:
`HUIYBTtTBZWq45KjbwxrVeskjwqr90tCatYbVfojiR0`

**สำคัญ:** กด "ยืนยัน" ใน Search Console ได้ **หลังเว็บขึ้นออนไลน์เท่านั้น** (ไม่ใช่ localhost)

---

## ส่วนที่ 2 — ขึ้นเว็บด้วย Render (แนะนำ สมัครง่ายกว่า Vercel CLI)

### ขั้นที่ 1: สร้างไฟล์ zip
```powershell
cd "c:\Users\user\Downloads\jc-led-nextjs-v2_1\jc-led-clean"
powershell -ExecutionPolicy Bypass -File .\scripts\make-upload-zip.ps1
```
จะได้ไฟล์ `jc-led-clean-upload.zip` โฟลเดอร์ Downloads

### ขั้นที่ 2: อัปโหลด GitHub (ไม่ต้องติดตั้ง git)
1. เปิด https://github.com/signup → สมัคร (ใช้ Gmail ได้)
2. สร้าง repo ใหม่: https://github.com/new  
   - ชื่อเช่น `jc-led-website`  
   - เลือก **Private** หรือ Public ตามต้องการ  
   - กด **Create repository**
3. หน้า repo → **Add file** → **Upload files**  
4. ลากไฟล์จากโฟลเดอร์ `jc-led-clean` ทั้งหมด (หรือแตก zip แล้วลาก)  
   **อย่าอัปโหลด** โฟลเดอร์ `node_modules` และ `.next`  
5. กด **Commit changes**

### ขั้นที่ 3: Deploy บน Render
1. เปิด https://render.com → **Get Started** (สมัครด้วย GitHub)
2. **New +** → **Web Service**
3. **Connect** repo `jc-led-website`
4. ตั้งค่า:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Instance:** Free
5. **Environment** → Add:
   - `RESEND_API_KEY` = (ค่าใน .env.local ของคุณ)
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` = `HUIYBTtTBZWq45KjbwxrVeskjwqr90tCatYbVfojiR0`
6. กด **Create Web Service** — รอ 5–10 นาที
7. ได้ URL เช่น `https://jc-led-website.onrender.com`

### ขั้นที่ 4: ผูกโดเมน jcled.co.th (ถ้ามี)
ใน Render → Settings → Custom Domains → เพิ่ม `www.jcled.co.th`  
ตั้ง DNS ตามที่ Render แสดง

---

## ส่วนที่ 3 — ยืนยัน Google Search Console

1. ใน Search Console เลือกทรัพยสินท์ URL:  
   `https://www.jcled.co.th` **หรือ** URL ชั่วคราวจาก Render ก่อน (เช่น `https://xxx.onrender.com`)
2. วิธี **แท็ก HTML** — กดยืนยัน (แท็กอยู่ในเว็บแล้ว)
3. ถ้าไม่ผ่าน: รอ 5 นาทีหลัง deploy แล้วกดยืนยันอีกครั้ง
4. **Sitemaps** → ส่ง: `https://โดเมนของคุณ/sitemap.xml`

---

## ทางเลือก: Vercel ผ่านเว็บ (ไม่ใช้โค้ด CLI)

1. สมัครที่ https://vercel.com/signup (ปุ่ม **Continue with GitHub**)
2. หลังมี repo บน GitHub แล้ว → Vercel → **Add New Project**
3. เลือก repo → Deploy (ไม่ต้องรัน `vercel login` ในเทอร์มินัล)

---

## ถ้ายังสมัคร Vercel/Render ไม่ได้

- ลองเบราว์เซอร์อื่น (Chrome โหมดไม่ระบุตัวตน / Edge)
- ปิด VPN / Adblock ชั่วคราว
- ใช้อีเมล Gmail สมัคร GitHub ก่อน แล้วกด "Continue with GitHub" บน Render

---

## ติดต่อช่วยต่อ

ส่งลิงก์เว็บที่ deploy ได้ (เช่น `xxx.onrender.com`) มาในแชท จะช่วยเช็กแท็ก Google และ sitemap ให้
