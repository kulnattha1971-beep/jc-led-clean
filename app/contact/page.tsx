"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceOptions = ["เช่าจอ LED งานแต่งงาน","เช่าจอ LED ประชุม / สัมมนา","จอ LED ออกบูธ / นิทรรศการ","อื่นๆ / ไม่แน่ใจ"];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", venue: "", message: "" });
  const [status, setStatus] = useState<"idle"|"sending"|"sent">("idle");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = async () => {
    if (!form.name || !form.phone) return;
    setStatus("sending");
    await new Promise(r => setTimeout(r, 1000));
    setStatus("sent");
  };

  return (
    <>
      <Navbar />
      <main>
        <header className="py-16 px-4 text-center" style={{ background: "#111" }}>
          <div className="container-main" style={{ maxWidth: "600px" }}>
            <span className="section-label" style={{ color: "#E8001D" }}>ติดต่อ</span>
            <h1 className="text-4xl font-black text-white mb-4">ขอใบเสนอราคา<br /><span style={{ color: "#E8001D" }}>ฟรี ไม่มีข้อผูกมัด</span></h1>
            <p className="text-sm leading-8" style={{ color: "rgba(255,255,255,0.6)" }}>บอกรายละเอียดงาน รับใบเสนอราคาภายใน 30 นาที</p>
          </div>
        </header>
        <section className="section-pad px-4">
          <div className="container-main">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                <h2 className="text-2xl font-bold mb-6">กรอกข้อมูลงาน</h2>
                {status === "sent" ? (
                  <div className="card p-8 text-center"><div className="text-5xl mb-4">✅</div><h3 className="text-xl font-bold mb-2">ได้รับข้อมูลแล้วครับ!</h3><p className="text-sm" style={{ color: "#666" }}>ทีมงานจะติดต่อกลับภายใน 30 นาที หรือโทร <a href="tel:+66839425594" style={{ color: "#E8001D", fontWeight: 600 }}>083-942-5594</a></p></div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div><label className="form-label">ชื่อ <span style={{ color: "#E8001D" }}>*</span></label><input name="name" type="text" className="form-input" placeholder="คุณ..." value={form.name} onChange={handleChange} /></div>
                      <div><label className="form-label">เบอร์โทร <span style={{ color: "#E8001D" }}>*</span></label><input name="phone" type="tel" className="form-input" placeholder="08x-xxx-xxxx" value={form.phone} onChange={handleChange} /></div>
                    </div>
                    <div><label className="form-label">ประเภทงาน</label><select name="service" className="form-input" value={form.service} onChange={handleChange}><option value="">-- เลือกประเภทงาน --</option>{serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}</select></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div><label className="form-label">วันที่จัดงาน</label><input name="date" type="date" className="form-input" value={form.date} onChange={handleChange} /></div>
                      <div><label className="form-label">สถานที่</label><input name="venue" type="text" className="form-input" placeholder="โรงแรม / Hall" value={form.venue} onChange={handleChange} /></div>
                    </div>
                    <div><label className="form-label">รายละเอียดเพิ่มเติม</label><textarea name="message" rows={4} className="form-input" style={{ resize: "vertical" }} placeholder="ขนาดห้อง จำนวนผู้เข้าร่วม..." value={form.message} onChange={handleChange} /></div>
                    <button onClick={handleSubmit} disabled={status === "sending" || !form.name || !form.phone} className="btn-primary w-full justify-center" style={{ opacity: (!form.name || !form.phone) ? 0.5 : 1 }}>
                      {status === "sending" ? "กำลังส่ง..." : "ส่งข้อมูลขอใบเสนอราคา →"}
                    </button>
                  </div>
                )}
              </div>
              <div className="md:col-span-2 space-y-4">
                <h2 className="text-2xl font-bold mb-6">ติดต่อตรงได้เลย</h2>
                {[{ icon: "📞", label: "โทรศัพท์", value: "083-942-5594", href: "tel:+66839425594", desc: "พร้อมรับสายตลอด 24 ชั่วโมง" },{ icon: "💬", label: "LINE OA", value: "@jcled", href: "https://line.me/R/ti/p/@jcled", desc: "ตอบเร็ว ส่งรูปงานได้สะดวก" },{ icon: "📍", label: "พื้นที่บริการ", value: "กรุงเทพฯ และปริมณฑล", href: null, desc: "สุขุมวิท · ลาดพร้าว · อิมแพค" }].map(c => (
                  <div key={c.label} className="card p-4 flex gap-4 items-start">
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <p className="text-xs font-medium mb-0.5" style={{ color: "#999" }}>{c.label}</p>
                      {c.href ? <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-semibold text-sm no-underline" style={{ color: "#E8001D" }}>{c.value}</a> : <p className="font-semibold text-sm">{c.value}</p>}
                      <p className="text-xs mt-0.5" style={{ color: "#666" }}>{c.desc}</p>
                    </div>
                  </div>
                ))}
                <div className="rounded-lg p-5" style={{ background: "#FFF0F0", border: "1px solid #FFCCCC" }}>
                  <p className="font-semibold text-sm mb-1" style={{ color: "#E8001D" }}>ต้องการด่วน?</p>
                  <p className="text-xs leading-6 mb-3" style={{ color: "#666" }}>โทรหาเราได้เลย พร้อมให้คำปรึกษาตลอด 24 ชม.</p>
                  <a href="tel:+66839425594" className="btn-primary text-xs w-full text-center block">📞 โทร 083-942-5594</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
