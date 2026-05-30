import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "เช่าจอ LED สัมมนา กรุงเทพ | จอ LED งาน Conference ทุกขนาด | JC VIDEO & LED",
  description:
    "บริการเช่าจอ LED สัมมนากรุงเทพ จอ P3.9 ความคมชัดสูง รองรับงาน 100–5,000 คน ติดตั้งฟรี ช่างดูแลตลอดงาน รองรับ Zoom, Teams, Google Meet โทร 083-942-5594",
  keywords: [
    "เช่าจอ LED สัมมนา",
    "จอ LED งาน Conference",
    "เช่าจอ LED สัมมนากรุงเทพ",
    "จอ LED P3.9 สัมมนา",
    "เช่าจอ LED งาน Seminar",
    "บริการจอ LED สัมมนา",
  ],
  alternates: { canonical: "https://www.jcled.co.th/services/led-seminar" },
  openGraph: {
    title: "เช่าจอ LED สัมมนา กรุงเทพ | JC VIDEO & LED",
    description: "จอ P3.9 คมชัด รองรับงาน 100–5,000 คน ติดตั้งฟรี ช่างดูแลตลอดงาน",
    url: "https://www.jcled.co.th/services/led-seminar",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "เช่าจอ LED สัมมนา JC VIDEO & LED" }],
  },
};

// ── Schema ──────────────────────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "เช่าจอ LED สัมมนา Conference",
  description:
    "บริการเช่าจอ LED สำหรับงานสัมมนาและ Conference ในกรุงเทพฯ จอ P3.9 ติดตั้งฟรี มีช่างดูแลตลอดงาน",
  provider: {
    "@type": "LocalBusiness",
    name: "JC VIDEO & LED",
    telephone: "+66839425594",
  },
  areaServed: { "@type": "City", name: "กรุงเทพมหานคร" },
  serviceType: "LED Screen Rental",
};

const faq = [
  {
    q: "เช่าจอ LED สัมมนาราคาเท่าไหร่?",
    a: "ราคาขึ้นอยู่กับขนาดจอ จำนวนวัน และสถานที่ติดตั้ง โทรหรือ LINE เพื่อรับใบเสนอราคาฟรีภายใน 30 นาที",
  },
  {
    q: "รองรับงานสัมมนาใหญ่กี่คน?",
    a: "รองรับตั้งแต่งาน 100 คน ไปจนถึงงานสัมมนาใหญ่ 5,000+ คน ออกแบบและจัดวางระบบจอหลายจอพร้อมกันได้",
  },
  {
    q: "รองรับ Video Conference อย่าง Zoom หรือ Teams ได้ไหม?",
    a: "รองรับได้ครับ ทั้ง Zoom, Microsoft Teams, Google Meet และแพลตฟอร์ม Video Conference ทุกรูปแบบ ทีมช่างดูแลการเชื่อมต่อสัญญาณให้ตลอดงาน",
  },
  {
    q: "ต้องจองล่วงหน้ากี่วัน?",
    a: "แนะนำจองล่วงหน้าอย่างน้อย 7–14 วัน สำหรับงานใหญ่ที่ต้องการจอหลายจอหรือ Setup พิเศษควรจองล่วงหน้า 1 เดือน",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ── Data ─────────────────────────────────────────────────────────
const features = [
  {
    icon: "🖥️",
    title: "จอ P3.9 ความคมชัดสูง",
    desc: "Pixel Pitch 3.9mm ภาพคมชัดทุกมุมห้อง เหมาะกับสัมมนาและ Conference ทุกขนาด",
  },
  {
    icon: "🌐",
    title: "รองรับ Video Conference",
    desc: "เชื่อมต่อ Zoom, Teams, Google Meet ได้ทันที ช่างดูแลสัญญาณ Live ตลอดงาน",
  },
  {
    icon: "⚡",
    title: "Setup รวดเร็ว ไม่สะดุด",
    desc: "ทีมช่างติดตั้งรวดเร็ว พร้อมก่อนเวลาเริ่มงานเสมอ ไม่กระทบตารางงานสัมมนา",
  },
  {
    icon: "👨‍🔧",
    title: "ช่างเทคนิคประจำงาน",
    desc: "ดูแลระบบ AV ตลอดงาน ทั้ง Slideshow, Video Presentation, และ Live Streaming",
  },
  {
    icon: "📐",
    title: "ปรับขนาดได้ทุก Venue",
    desc: "ตั้งแต่ห้องประชุม 100 คน ไปจนถึง Convention Hall 5,000+ คน ออกแบบขนาดจอให้พอดีพื้นที่",
  },
  {
    icon: "🔄",
    title: "จอสำรองทุกงาน",
    desc: "เตรียม Backup Module และอุปกรณ์สำรองไว้ตลอด งานไม่สะดุดแม้เกิดปัญหากระทันหัน",
  },
];

const useCases = [
  {
    title: "จอ Presentation หน้าเวทีหลัก",
    desc: "จอขนาดใหญ่หน้าเวที ขยาย Slide, VDO และ Speaker ให้ทุกที่นั่งมองเห็นชัดเจน",
  },
  {
    title: "จอ Side Screen คู่",
    desc: "จอเสริมด้านซ้าย-ขวาสำหรับ Hall ขนาดใหญ่ แขกทุกมุมมองเห็นเนื้อหาพร้อมกัน",
  },
  {
    title: "จอ Lobby & Registration",
    desc: "จอบริเวณทางเข้าและจุดลงทะเบียน แสดง Agenda, Sponsor Logo, และข้อมูลงาน",
  },
  {
    title: "จอ Breakout Room",
    desc: "จอสำหรับห้องกลุ่มย่อย Workshop และ Panel Discussion รองรับ Multi-room Setup พร้อมกัน",
  },
];

const venues = [
  "อิมแพค เมืองทองธานี",
  "BITEC บางนา",
  "Royal Paragon Hall สยามพารากอน",
  "Centara Grand",
  "InterContinental Bangkok",
  "Pullman Bangkok",
  "CentralWorld",
  "True Digital Park",
];

// ── Page ─────────────────────────────────────────────────────────
export default function LedSeminarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <header className="py-16 px-4 text-center" style={{ background: "#111" }}>
          <div className="container-main" style={{ maxWidth: "720px" }}>
            <span className="section-label" style={{ color: "#E8001D" }}>บริการ</span>
            <h1 className="text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.5px" }}>
              เช่าจอ LED <span style={{ color: "#E8001D" }}>สัมมนา / Conference</span>
              <br />กรุงเทพฯ
            </h1>
            <p className="text-sm leading-8 mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
              จอ P3.9 คมชัด รองรับงาน 100–5,000+ คน<br />
              ติดตั้งฟรี รองรับ Zoom / Teams / Google Meet บริการ 24 ชั่วโมง
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:+66839425594" className="btn-primary">📞 โทรขอใบเสนอราคา</a>
              <a href="https://line.me/R/ti/p/@jcled" target="_blank" rel="noopener noreferrer" className="btn-line">
                LINE สอบถาม
              </a>
            </div>
          </div>
        </header>

        {/* ── BREADCRUMB ── */}
        <nav aria-label="Breadcrumb" className="px-4 py-3 border-b" style={{ borderColor: "#E5E5E5" }}>
          <div className="container-main">
            <ol
              className="flex gap-2 text-xs list-none p-0 m-0"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <Link href="/" itemProp="item" className="no-underline" style={{ color: "#666" }}>
                  <span itemProp="name">หน้าหลัก</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li style={{ color: "#999" }}>/</li>
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <span itemProp="name" style={{ color: "#111", fontWeight: 500 }}>
                  เช่าจอ LED สัมมนา Conference
                </span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* ── FEATURES ── */}
        <section className="section-pad px-4" aria-labelledby="features-heading">
          <div className="container-main">
            <span className="section-label">จุดเด่น</span>
            <h2 id="features-heading" className="text-3xl font-bold mb-8">
              ครบทุกความต้องการสำหรับงานสัมมนา
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {features.map((f) => (
                <div key={f.title} className="card p-5">
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <h3 className="font-semibold text-sm mb-2">{f.title}</h3>
                  <p className="text-xs leading-6" style={{ color: "#666" }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section className="section-pad px-4" style={{ background: "#F7F7F7" }} aria-labelledby="usecase-heading">
          <div className="container-main">
            <span className="section-label">การใช้งาน</span>
            <h2 id="usecase-heading" className="text-3xl font-bold mb-8">
              ตำแหน่งติดตั้งจอ LED ในงานสัมมนา
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((u, i) => (
                <div
                  key={u.title}
                  className="bg-white border rounded-lg p-5 flex gap-4"
                  style={{ borderColor: "#E5E5E5" }}
                >
                  <span className="text-2xl font-black flex-shrink-0" style={{ color: "#E8001D" }}>
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{u.title}</h3>
                    <p className="text-xs leading-6" style={{ color: "#666" }}>{u.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPEC ── */}
        <section className="section-pad px-4" aria-labelledby="spec-heading">
          <div className="container-main" style={{ maxWidth: "600px" }}>
            <span className="section-label">สเปกจอที่แนะนำ</span>
            <h2 id="spec-heading" className="text-3xl font-bold mb-6">จอ P3.9 — Standard Pro</h2>
            <div className="card p-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  ["Pixel Pitch", "3.9 mm"],
                  ["ความสว่าง", "1,000–1,200 nits"],
                  ["Refresh Rate", "≥ 3,840 Hz"],
                  ["สี", "16.7 ล้านสี"],
                  ["การเชื่อมต่อ", "HDMI / DVI / SDI"],
                  ["เหมาะกับ", "ดูในระยะ 4–50 เมตร"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p className="text-xs mb-0.5" style={{ color: "#999" }}>{k}</p>
                    <p className="font-semibold">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── VENUE LIST (Local SEO) ── */}
        <section className="section-pad px-4" style={{ background: "#F7F7F7" }} aria-labelledby="venue-heading">
          <div className="container-main">
            <span className="section-label">สถานที่ที่ให้บริการ</span>
            <h2 id="venue-heading" className="text-3xl font-bold mb-3">
              Venue สัมมนาที่เราให้บริการ
            </h2>
            <p className="text-sm mb-8" style={{ color: "#666" }}>
              มีประสบการณ์ติดตั้งใน Venue ชั้นนำทั่วกรุงเทพฯ กว่า 500+ โปรเจกต์
            </p>
            <div className="flex flex-wrap gap-3">
              {venues.map((v) => (
                <span
                  key={v}
                  className="px-4 py-2 rounded-full text-sm font-medium border"
                  style={{ borderColor: "#E5E5E5", background: "#fff", color: "#333" }}
                >
                  📍 {v}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section-pad px-4" aria-labelledby="faq-heading">
          <div className="container-main" style={{ maxWidth: "680px" }}>
            <span className="section-label">FAQ</span>
            <h2 id="faq-heading" className="text-3xl font-bold mb-8">คำถามที่พบบ่อย</h2>
            <div className="space-y-3">
              {faq.map((item) => (
                <details key={item.q} className="card p-5 cursor-pointer">
                  <summary className="font-semibold text-sm list-none flex justify-between gap-3">
                    {item.q}
                    <span style={{ color: "#E8001D" }}>+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-7" style={{ color: "#666" }}>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 px-4 text-center text-white" style={{ background: "#111" }}>
          <h2 className="text-3xl font-black mb-3">
            รับใบเสนอราคาฟรี<br />
            <span style={{ color: "#E8001D" }}>ภายใน 30 นาที</span>
          </h2>
          <p className="text-sm mb-8" style={{ opacity: 0.6 }}>
            บอก Venue, จำนวนผู้เข้าร่วม และวันงาน — เราออกแบบระบบจอให้เหมาะสมทันที
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+66839425594" className="btn-primary">📞 083-942-5594</a>
            <a href="https://line.me/R/ti/p/@jcled" target="_blank" rel="noopener noreferrer" className="btn-line">
              LINE: @jcled
            </a>
            <Link href="/contact" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.3)" }}>
              กรอกฟอร์ม
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
