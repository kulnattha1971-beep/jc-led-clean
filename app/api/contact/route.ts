import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "kulnattha1971@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, service, date, venue, message } = await req.json();

    if (!name || !phone) {
      return NextResponse.json({ error: "กรุณากรอกชื่อและเบอร์โทร" }, { status: 400 });
    }

    // ส่ง Email ผ่าน Resend
    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: TO_EMAIL,
      subject: `🔔 ลูกค้าใหม่! ${name} — ${service || "ติดต่อสอบถาม"} [JC LED]`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          
          <!-- Header -->
          <div style="background: #E8001D; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">🔔 มีลูกค้าใหม่ส่งฟอร์มติดต่อ!</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 13px;">JC VIDEO &amp; LED — เว็บไซต์</p>
          </div>

          <!-- Body -->
          <div style="padding: 24px; background: #f9f9f9; border: 1px solid #eee; border-top: none;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-size: 13px; color: #666; width: 35%;">👤 ชื่อ-นามสกุล</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-size: 14px; font-weight: 600; color: #111;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-size: 13px; color: #666;">📞 เบอร์โทร</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-size: 14px; font-weight: 600; color: #E8001D;">
                  <a href="tel:${phone}" style="color: #E8001D; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-size: 13px; color: #666;">🎯 ประเภทงาน</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-size: 14px; color: #111;">${service || "ไม่ระบุ"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-size: 13px; color: #666;">📅 วันที่จัดงาน</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-size: 14px; color: #111;">${date || "ไม่ระบุ"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-size: 13px; color: #666;">📍 สถานที่</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-size: 14px; color: #111;">${venue || "ไม่ระบุ"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-size: 13px; color: #666; vertical-align: top;">💬 รายละเอียด</td>
                <td style="padding: 10px; font-size: 14px; color: #111;">${message || "-"}</td>
              </tr>
            </table>
          </div>

          <!-- CTA -->
          <div style="padding: 20px 24px; background: #111; border-radius: 0 0 8px 8px; text-align: center;">
            <p style="color: rgba(255,255,255,0.7); font-size: 13px; margin: 0 0 12px;">ตอบกลับลูกค้าด่วนภายใน 30 นาที</p>
            <a href="tel:${phone}" 
               style="background: #E8001D; color: white; padding: 10px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">
              📞 โทรกลับ ${phone}
            </a>
          </div>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "ส่ง Email ไม่สำเร็จ" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "เกิดข้อผิดพลาด" }, { status: 500 });
  }
}
