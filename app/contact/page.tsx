"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceOptions = [
  "เช่าจอ LED งานแต่งงาน",
  "เช่าจอ LED ประชุม / สัมมนา",
  "จอ LED ออกบูธ / นิทรรศการ",
  "อื่นๆ / ไม่แน่ใจ",
];

const contactInfo = [
  { icon: "📞", label: "โทรศัพท์", value: "083-942-5594", href: "tel:+66839425594", desc: "พร้อมรับสายตลอด 24 ชั่วโมง" },
  { icon: "💬", label: "LINE OA", value: "@jcled", href: "https://line.me/R/ti/p/@jcled", desc: "ตอบเร็ว ส่งรูปงานได้สะดวก" },
  { icon: "📍", label: "พื้นที่บริการ", value: "กรุงเทพฯ และปริมณฑล", href: null, desc: "สุขุมวิท · ลาดพร้าว · อิมแพค และทั่วกรุงเทพ" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", venue: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.phone) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        alert("เกิดข้อผิดพลาด กรุณาโทรหาเราโดยตรงที่ 083-942-5594");
        setStatus("idle");
      }
    } catch {
      alert("ไม่สามารถส่งข้อมูลได้ กรุณาโทรหาเราที่ 083-942-5594");
      setStatus("idle");
    }
  };

  return (
    <>
      <Navbar />
      <main>

        {/* HERO */}
        <header className="py-16 px-4 text-center" style={{ background: "#111" }}>
          <div className="container-main" style={{ maxWidth: "600px" }}>
            <span className="section-label" style={{ color: "#E8001D" }}>ติดต่อ</span>
            <h1 className="text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.5px" }}>
              ขอใบเสนอราคา<br />
              <span style={{ color: "#E8001D" }}>ฟรี ไม่มีข้อผูกมัด</span>
            </h1>
            <p className="text-sm leading-8" style={{ color: "rgba(255,255,255,0.6)" }}>
              บอกรายละเอียดงาน รับใบเสนอราคาภายใน 30 นาที<br />
              ทีมงานพร้อมให้คำปรึกษาตลอด 24 ชั่วโมง
            </p>
          </div>
        </header>

        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="px-4 py-3 border-b" style={{ borderColor: "#E5E5E5" }}>
          <div className="container-main">
            <ol className="flex gap-2 text-xs list-none p-0 m-0" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <Link href="/" itemProp="item" className="no-underline" style={{ color: "#666" }}><span itemProp="name">หน้าหลัก</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li style={{ color: "#999" }}>/</li>
              <li><span style={{ color: "#111", fontWeight: 500 }}>ติดต่อ</span></li>
            </ol>
          </div>
        </nav>

        <section className="section-pad px-4">
          <div className="container-main">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

              {/* FORM — 3 cols */}
              <div className="md:col-span-3">
                <span className="section-label">แบบฟอร์ม</span>
                <h2 className="text-2xl font-bold mb-6">กรอกข้อมูลงาน</h2>

                {status === "sent" ? (
                  <div className="card p-8 text-center">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="text-xl font-bold mb-2">ได้รับข้อมูลแล้วครับ!</h3>
                    <p className="text-sm" style={{ color: "#666" }}>
                      ทีมงานจะติดต่อกลับภายใน 30 นาที<br />
                      หรือโทรหาเราได้เลยที่{" "}
                      <a href="tel:+66839425594" style={{ color: "#E8001D", fontWeight: 600 }}>083-942-5594</a>
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="form-label">
                          ชื่อ-นามสกุล <span style={{ color: "#E8001D" }}>*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="form-input"
                          placeholder="คุณ..."
                          value={form.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="form-label">
                          เบอร์โทรศัพท์ <span style={{ color: "#E8001D" }}>*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          className="form-input"
                          placeholder="08x-xxx-xxxx"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          autoComplete="tel"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="form-label">ประเภทงาน</label>
                      <select
                        id="service"
                        name="service"
                        className="form-input"
                        value={form.service}
                        onChange={handleChange}
                      >
                        <option value="">-- เลือกประเภทงาน --</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="date" className="form-label">วันที่จัดงาน</label>
                        <input
                          id="date"
                          name="date"
                          type="date"
                          className="form-input"
                          value={form.date}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="venue" className="form-label">สถานที่จัดงาน</label>
                        <input
                          id="venue"
                          name="venue"
                          type="text"
                          className="form-input"
                          placeholder="โรงแรม / Hall / สถานที่"
                          value={form.venue}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="form-label">รายละเอียดเพิ่มเติม</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="form-input"
                        style={{ resize: "vertical" }}
                        placeholder="ขนาดห้อง, จำนวนผู้เข้าร่วม, ความต้องการพิเศษ..."
                        value={form.message}
                        onChange={handleChange}
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={status === "sending" || !form.name || !form.phone}
                      className="btn-primary w-full justify-center"
                      style={{ opacity: (!form.name || !form.phone) ? 0.5 : 1 }}
                    >
                      {status === "sending" ? "กำลังส่ง..." : "ส่งข้อมูลขอใบเสนอราคา →"}
                    </button>

                    <p className="text-xs text-center" style={{ color: "#999" }}>
                      ข้อมูลของคุณปลอดภัย ไม่มีการส่งต่อบุคคลที่สาม
                    </p>
                  </div>
                )}
              </div>

              {/* CONTACT INFO — 2 cols */}
              <div className="md:col-span-2 space-y-4">
                <span className="section-label">ช่องทางติดต่อ</span>
                <h2 className="text-2xl font-bold mb-6">ติดต่อตรงได้เลย</h2>

                {contactInfo.map((c) => (
                  <div key={c.label} className="card p-4 flex gap-4 items-start">
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <p className="text-xs font-medium mb-0.5" style={{ color: "#999" }}>{c.label}</p>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-semibold text-sm no-underline"
                          style={{ color: "#E8001D" }}
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-sm">{c.value}</p>
                      )}
                      <p className="text-xs mt-0.5" style={{ color: "#666" }}>{c.desc}</p>
                    </div>
                  </div>
                ))}

                {/* Quick CTA */}
                <div className="rounded-lg p-5" style={{ background: "#FFF0F0", border: "1px solid #FFCCCC" }}>
                  <p className="font-semibold text-sm mb-1" style={{ color: "#E8001D" }}>
                    ต้องการด่วน?
                  </p>
                  <p className="text-xs leading-6 mb-3" style={{ color: "#666" }}>
                    โทรหาเราได้เลย พร้อมให้คำปรึกษาตลอด 24 ชม.
                  </p>
                  <a href="tel:+66839425594" className="btn-primary text-xs w-full text-center block">
                    📞 โทร 083-942-5594
                  </a>
                </div>

                {/* Business Hours Schema */}
                <div
                  className="rounded-lg p-4 text-xs"
                  style={{ background: "#F7F7F7" }}
                  itemScope
                  itemType="https://schema.org/LocalBusiness"
                >
                  <p className="font-semibold mb-2" style={{ color: "#111" }}>เวลาทำการ</p>
                  <p style={{ color: "#666" }}>
                    <span itemProp="openingHours" content="Mo-Su 00:00-23:59">
                      เปิดบริการทุกวัน ตลอด 24 ชั่วโมง
                    </span>
                  </p>
                  <span itemProp="telephone" className="sr-only">+66839425594</span>
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
