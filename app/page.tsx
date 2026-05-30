import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "เช่าจอ LED กรุงเทพ | JC VIDEO & LED ติดตั้งฟรี มีช่างคุม 24 ชม.",
  description: "บริการเช่าจอ LED กรุงเทพฯ ราคาดี ติดตั้งฟรี มีช่างคุมงานตลอด พร้อมจอสำรอง ประสบการณ์ 20+ ปี จอ P2.5 / P3.9 / P3.9 45°",
  alternates: { canonical: "https://www.jcled.co.th" },
};

const faqItems = [
  { q: "เช่าจอ LED ราคาเท่าไหร่?", a: "ราคาขึ้นอยู่กับขนาดจอ จำนวนวัน และสถานที่ กรุณาโทรหรือ LINE เพื่อรับใบเสนอราคาฟรี" },
  { q: "บริการครอบคลุมพื้นที่ไหน?", a: "ให้บริการทั่วกรุงเทพมหานครและปริมณฑล ได้แก่ นนทบุรี ปทุมธานี สมุทรปราการ และพื้นที่อิมแพค เมืองทองธานี" },
  { q: "ต้องจองล่วงหน้ากี่วัน?", a: "แนะนำจองล่วงหน้าอย่างน้อย 7-14 วัน สำหรับงานใหญ่ควรจองล่วงหน้า 1 เดือน" },
  { q: "มีช่างดูแลหน้างานไหม?", a: "มีช่างเทคนิคประจำทุกงาน ตั้งแต่ติดตั้งจนถึงรื้อถอน พร้อมแก้ไขปัญหาเฉพาะหน้าตลอด 24 ชั่วโมง" },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqItems.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        {/* HERO */}
        <header className="text-center py-20 px-4" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs border" style={{ background: "#F7F7F7", borderColor: "#E5E5E5", color: "#666" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#22c55e" }}></span>
            พร้อมให้บริการทั่วกรุงเทพฯ และปริมณฑล
          </div>
          <h1 className="text-5xl font-black mb-4" style={{ letterSpacing: "-1px", lineHeight: 1.1 }}>
            บริการ<span style={{ color: "#E8001D" }}>เช่าจอ LED</span><br />มืออาชีพ กรุงเทพฯ
          </h1>
          <h2 className="sr-only">เช่าจอ LED ราคาดี ติดตั้งฟรี รับงานแต่งงาน ประชุม สัมมนา ออกบูธ ทั่วกรุงเทพ</h2>
          <p className="text-base leading-8 mb-8 mx-auto" style={{ color: "#666", maxWidth: "540px", fontWeight: 300 }}>
            ติดตั้งฟรี มีช่างคุมงานตลอดงาน พร้อมจอสำรอง<br />ประสบการณ์กว่า 20 ปี | จอ P2.5 / P3.9 / P3.9 45° | บริการ 24 ชม.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[{ l: "✓ ติดตั้งฟรี", r: true }, { l: "✓ มีช่างคุมงาน", r: true }, { l: "✓ จอสำรองพร้อม", r: true }, { l: "งานแต่งงาน", r: false }, { l: "งานประชุม", r: false }, { l: "ออกบูธ", r: false }, { l: "สัมมนา", r: false }].map((p) => (
              <span key={p.l} className="pill" style={p.r ? { background: "#FFF0F0", borderColor: "#FFCCCC", color: "#E8001D" } : {}}>{p.l}</span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">ขอใบเสนอราคา ฟรี</Link>
            <Link href="/portfolio" className="btn-secondary">ดูผลงานที่ผ่านมา</Link>
          </div>
        </header>

        {/* TRUST BAR */}
        <div style={{ background: "#111" }} className="py-6 px-4">
          <div className="container-main flex flex-wrap justify-center gap-8 sm:gap-12">
            {[{ n: "20+", l: "ปีประสบการณ์\nในวงการ AV" }, { n: "500+", l: "โปรเจกต์\nที่ผ่านมา" }, { n: "24", l: "ชั่วโมง\nช่างพร้อมบริการ" }, { n: "3", l: "รุ่นจอ LED\nให้เลือก" }].map((s) => (
              <div key={s.n} className="flex items-center gap-3 text-white">
                <span className="text-2xl font-black" style={{ color: "#E8001D" }}>{s.n}</span>
                <span className="text-xs leading-5 whitespace-pre-line" style={{ opacity: 0.65 }}>{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <section className="section-pad px-4">
          <div className="container-main">
            <span className="section-label">บริการของเรา</span>
            <h2 className="text-3xl font-bold mb-2">เช่าจอ LED ครบทุกประเภทงาน</h2>
            <p className="text-sm mb-8" style={{ color: "#666" }}>ครอบคลุมทุก Event ทั้งในและนอกสถานที่ กรุงเทพฯ และปริมณฑล</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/services/led-wedding" className="card p-6 no-underline block relative md:col-span-2 flex items-center justify-between" style={{ background: "#111", borderColor: "transparent", color: "white" }}>
                <div>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-4" style={{ background: "rgba(255,255,255,0.1)" }}>💍</div>
                  <h3 className="font-semibold text-xl mb-2">เช่าจอ LED งานแต่งงาน</h3>
                  <p className="text-sm leading-6" style={{ color: "rgba(255,255,255,0.6)" }}>สร้างบรรยากาศโรแมนติกด้วยจอ P2.5 ความละเอียดสูง ทีมช่างดูแลตลอดงาน ติดตั้งและรื้อถอนฟรี</p>
                </div>
                <span className="text-2xl" style={{ color: "#E8001D" }}>→</span>
                <span className="absolute top-4 right-12 text-white text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "#E8001D" }}>ยอดนิยม</span>
              </Link>
              {[{ icon: "🎤", name: "เช่าจอ LED ประชุม / สัมมนา", desc: "จอ P3.9 Full HD เหมาะสำหรับการนำเสนอในห้องประชุมและสัมมนาทุกขนาด", href: "/services/led-meeting" }, { icon: "🏪", name: "จอ LED ออกบูธ / นิทรรศการ", desc: "จอโค้ง P3.9 45° สะดุดตา ดึงดูดผู้เข้าชมบูธ เหมาะสำหรับ Event และ Expo ทุกขนาด", href: "/services/led-booth" }].map((s) => (
                <Link key={s.href} href={s.href} className="card p-6 no-underline block" style={{ color: "#111" }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-4" style={{ background: "#F7F7F7" }}>{s.icon}</div>
                  <h3 className="font-semibold text-base mb-2">{s.name}</h3>
                  <p className="text-sm leading-6" style={{ color: "#666" }}>{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SPECS */}
        <section className="section-pad px-4" style={{ background: "#F7F7F7" }}>
          <div className="container-main">
            <span className="section-label">ข้อมูลจอ LED</span>
            <h2 className="text-3xl font-bold mb-8">สเปกจอ LED ที่มีให้เช่า</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[{ m: "P2.5", n: "Indoor Premium", t: "Indoor", d: "Pixel Pitch 2.5mm · ความละเอียดสูงสุด · เหมาะงานใกล้ชิด · งานแต่งงาน / ประชุม" }, { m: "P3.9", n: "Standard Pro", t: "Indoor / Outdoor", d: "Pixel Pitch 3.9mm · Indoor / Semi-outdoor · ขนาดยืดหยุ่น · สัมมนา / บูธ" }, { m: "P3.9 45°", n: "Corner Curved", t: "Specialty", d: "Pixel Pitch 3.9mm · โค้งมุม 45° · สำหรับบูธมุม · ดีไซน์พิเศษ" }].map((s) => (
                <div key={s.m} className="bg-white border rounded-lg p-5 text-center" style={{ borderColor: "#E5E5E5" }}>
                  <div className="text-3xl font-black mb-1" style={{ color: "#E8001D" }}>{s.m}</div>
                  <div className="text-xs font-medium mb-3" style={{ color: "#666" }}>{s.n}</div>
                  <p className="text-xs leading-7 mb-3" style={{ color: "#666" }}>{s.d}</p>
                  <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "#FFF0F0", border: "1px solid #FFCCCC", color: "#E8001D" }}>{s.t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG PREVIEW */}
        <section className="section-pad px-4" style={{ background: "#F7F7F7" }}>
          <div className="container-main">
            <div className="flex items-end justify-between mb-8">
              <div><span className="section-label">บทความ</span><h2 className="text-3xl font-bold">คู่มือเช่าจอ LED</h2></div>
              <Link href="/blog" className="text-sm no-underline font-medium" style={{ color: "#E8001D" }}>ดูทั้งหมด →</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[{ slug: "led-rental-price-2025", cat: "ราคา & งบประมาณ", title: "เช่าจอ LED ราคาเท่าไหร่? คำนวณงบแบบมือโปร [2025]", bg: "#FFF0F0", e: "💰" }, { slug: "p25-vs-p39-difference", cat: "เปรียบเทียบสเปก", title: "P2.5 vs P3.9 ต่างกันอย่างไร? เลือกแบบไหนให้เหมาะงาน", bg: "#EFF6FF", e: "⚖️" }, { slug: "wedding-led-checklist", cat: "งานแต่งงาน", title: "เช็กลิสต์งานแต่ง: จอ LED ต้องจองล่วงหน้ากี่วัน?", bg: "#F5F3FF", e: "💍" }].map((p) => (
                <article key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="card block no-underline overflow-hidden">
                    <div className="h-28 flex items-center justify-center text-4xl" style={{ background: p.bg }}>{p.e}</div>
                    <div className="p-4">
                      <p className="text-xs font-semibold mb-1 uppercase tracking-wide" style={{ color: "#E8001D" }}>{p.cat}</p>
                      <h3 className="text-sm font-semibold leading-6" style={{ color: "#111" }}>{p.title}</h3>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-pad px-4">
          <div className="container-main" style={{ maxWidth: "680px" }}>
            <span className="section-label">FAQ</span>
            <h2 className="text-3xl font-bold mb-8">คำถามที่พบบ่อย</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details key={item.q} className="card p-5 cursor-pointer">
                  <summary className="font-semibold text-sm list-none flex items-center justify-between gap-3">{item.q}<span style={{ color: "#E8001D" }}>+</span></summary>
                  <p className="mt-3 text-sm leading-7" style={{ color: "#666" }}>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 text-center text-white" style={{ background: "#111111" }}>
          <h2 className="text-3xl font-black mb-3">พร้อมให้คำปรึกษาฟรี<br /><span style={{ color: "#E8001D" }}>ตลอด 24 ชั่วโมง</span></h2>
          <p className="text-sm mb-8" style={{ opacity: 0.6 }}>บอกรายละเอียดงาน รับใบเสนอราคาภายใน 30 นาที</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+66839425594" className="btn-primary">📞 โทร 083-942-5594</a>
            <a href="https://line.me/R/ti/p/@jcled" target="_blank" rel="noopener noreferrer" className="btn-line">LINE: @jcled</a>
            <Link href="/contact" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.3)" }}>กรอกฟอร์มรับใบเสนอราคา</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
