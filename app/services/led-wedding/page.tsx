import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "เช่าจอ LED งานแต่งงาน กรุงเทพ | ติดตั้งฟรี มีช่างคุม",
  description:
    "บริการเช่าจอ LED งานแต่งงานกรุงเทพ จอ P2.5 ความละเอียดสูง ภาพสวยคมชัด ติดตั้งฟรี มีช่างดูแลตลอดงาน พร้อมจอสำรอง โทร 083-942-5594",
  keywords: [
    "เช่าจอ LED งานแต่งงาน",
    "จอ LED งานแต่ง กรุงเทพ",
    "เช่าจอ LED งานแต่ง ราคา",
    "จอ LED P2.5 งานแต่ง",
    "จอ LED โรงแรม กรุงเทพ",
  ],
  alternates: { canonical: "https://www.jcled.co.th/services/led-wedding" },
  openGraph: {
    title: "เช่าจอ LED งานแต่งงาน กรุงเทพ | JC VIDEO & LED",
    description: "จอ P2.5 ความละเอียดสูง ติดตั้งฟรี มีช่างคุมตลอดงาน",
    url: "https://www.jcled.co.th/services/led-wedding",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "เช่าจอ LED งานแต่งงาน",
  description:
    "บริการเช่าจอ LED สำหรับงานแต่งงานในกรุงเทพฯ จอ P2.5 ความละเอียดสูง ติดตั้งฟรี มีช่างดูแลตลอดงาน",
  provider: {
    "@type": "LocalBusiness",
    name: "JC VIDEO & LED",
    telephone: "+66839425594",
  },
  areaServed: { "@type": "City", name: "กรุงเทพมหานคร" },
  serviceType: "LED Screen Rental",
};

const features = [
  { icon: "💎", title: "จอ P2.5 ความละเอียดสูง", desc: "ภาพคมชัดระดับ Full HD เหมาะกับการดูใกล้ชิดในโรงแรมและห้องจัดเลี้ยง" },
  { icon: "🔧", title: "ติดตั้งและรื้อถอนฟรี", desc: "ทีมช่างมืออาชีพดูแลตั้งแต่เซ็ตอัพจนถึงเก็บอุปกรณ์ ไม่มีค่าใช้จ่ายเพิ่ม" },
  { icon: "👨‍🔧", title: "ช่างประจำตลอดงาน", desc: "มีช่างเทคนิคอยู่หน้างานตลอด พร้อมแก้ไขปัญหาเฉพาะหน้าทันที" },
  { icon: "🔄", title: "มีจอสำรองพร้อม", desc: "เตรียมจอสำรองทุกงาน ไม่ต้องกังวลหากเกิดปัญหากระทันหัน" },
  { icon: "📐", title: "ปรับขนาดได้ตามสถานที่", desc: "ออกแบบขนาดจอให้เหมาะกับพื้นที่จัดงานและ Layout ของโรงแรม" },
  { icon: "🎨", title: "รองรับ Content ทุกรูปแบบ", desc: "เชื่อมต่อได้กับ Laptop, Photo Slideshow, Live Camera และระบบ AV อื่นๆ" },
];

const useCases = [
  { title: "Backdrop หลังเวที", desc: "จอขนาดใหญ่หลังเวทีพิธี แสดงภาพ Pre-wedding สไลด์โชว์หรือ Logo" },
  { title: "จอแสดงผลข้างเวที", desc: "จอเสริมด้านข้างให้แขกทุกมุมห้องมองเห็น ขยายภาพ Live จากกล้อง" },
  { title: "จอต้อนรับหน้างาน", desc: "จอขนาดเล็กบริเวณทางเข้า แสดงชื่อบ่าวสาวและโปรแกรมงาน" },
  { title: "จอห้อง Reception", desc: "จอประดับห้องรับรองแขก แสดง Mood Video หรือภาพถ่าย Pre-wedding" },
];

const faq = [
  { q: "เช่าจอ LED งานแต่งงานราคาเท่าไหร่?", a: "ราคาขึ้นอยู่กับขนาดจอและระยะเวลาเช่า กรุณาโทรหรือ LINE เพื่อรับใบเสนอราคาที่แม่นยำตามสถานที่จัดงานจริง" },
  { q: "ต้องจองล่วงหน้ากี่วัน?", a: "แนะนำจองล่วงหน้าอย่างน้อย 14-30 วัน สำหรับงานแต่งงานช่วง High Season (ต.ค.–ก.พ.) ควรจองล่วงหน้า 1–2 เดือน" },
  { q: "ขนาดจอที่เหมาะกับงานแต่งงานคือขนาดไหน?", a: "ขึ้นอยู่กับขนาดห้อง โดยทั่วไปจอ 4×2.5 เมตร ถึง 6×3 เมตร เหมาะสำหรับห้องจัดเลี้ยง 200–500 คน ทีมงานจะวัดพื้นที่และแนะนำขนาดที่เหมาะสมให้" },
  { q: "ถ้าสถานที่ติดตั้งยาก มีปัญหาไหม?", a: "ไม่มีปัญหาครับ ทีมช่างมีประสบการณ์กว่า 20 ปี รองรับสถานที่หลากหลาย ทั้งโรงแรม ห้องแอร์ สนามหญ้า และพื้นที่พิเศษ" },
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

export default function LedWeddingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>

        {/* HERO */}
        <header className="py-16 px-4 text-center" style={{ background: "#111" }}>
          <div className="container-main" style={{ maxWidth: "720px" }}>
            <span className="section-label" style={{ color: "#E8001D" }}>บริการ</span>
            <h1 className="text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.5px" }}>
              เช่าจอ LED <span style={{ color: "#E8001D" }}>งานแต่งงาน</span>
              <br />กรุงเทพฯ
            </h1>
            <p className="text-sm leading-8 mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
              จอ P2.5 ความละเอียดสูง ภาพคมชัดทุกมุมห้อง<br />
              ติดตั้งฟรี มีช่างคุมตลอดงาน พร้อมจอสำรอง
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:+66839425594" className="btn-primary">📞 โทรขอใบเสนอราคา</a>
              <a href="https://line.me/R/ti/p/@jcled" target="_blank" rel="noopener noreferrer" className="btn-line">LINE สอบถาม</a>
            </div>
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
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <span itemProp="name" style={{ color: "#111", fontWeight: 500 }}>เช่าจอ LED งานแต่งงาน</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        {/* FEATURES */}
        <section className="section-pad px-4" aria-labelledby="features-heading">
          <div className="container-main">
            <span className="section-label">จุดเด่น</span>
            <h2 id="features-heading" className="text-3xl font-bold mb-8">ทำไมต้องเลือก JC LED สำหรับงานแต่งงาน?</h2>
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

        {/* USE CASES */}
        <section className="section-pad px-4" style={{ background: "#F7F7F7" }} aria-labelledby="usecase-heading">
          <div className="container-main">
            <span className="section-label">การใช้งาน</span>
            <h2 id="usecase-heading" className="text-3xl font-bold mb-8">ตำแหน่งติดตั้งจอ LED ในงานแต่งงาน</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {useCases.map((u, i) => (
                <div key={u.title} className="bg-white border rounded-lg p-5 flex gap-4" style={{ borderColor: "#E5E5E5" }}>
                  <span className="text-2xl font-black flex-shrink-0" style={{ color: "#E8001D" }}>0{i + 1}</span>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{u.title}</h3>
                    <p className="text-xs leading-6" style={{ color: "#666" }}>{u.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPEC HIGHLIGHT */}
        <section className="section-pad px-4" aria-labelledby="spec-heading">
          <div className="container-main" style={{ maxWidth: "600px" }}>
            <span className="section-label">สเปกจอที่แนะนำ</span>
            <h2 id="spec-heading" className="text-3xl font-bold mb-6">จอ P2.5 — Indoor Premium</h2>
            <div className="card p-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  ["Pixel Pitch", "2.5 mm"],
                  ["ความสว่าง", "800–1,000 nits"],
                  ["Refresh Rate", "≥ 3,840 Hz"],
                  ["สี", "16.7 ล้านสี"],
                  ["การเชื่อมต่อ", "HDMI / DVI / SDI"],
                  ["เหมาะกับ", "ดูในระยะ 2–20 เมตร"],
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

        {/* FAQ */}
        <section className="section-pad px-4" style={{ background: "#F7F7F7" }} aria-labelledby="faq-heading">
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

        {/* CTA */}
        <section className="py-16 px-4 text-center text-white" style={{ background: "#111" }}>
          <h2 className="text-3xl font-black mb-3">รับใบเสนอราคาฟรี<br /><span style={{ color: "#E8001D" }}>ภายใน 30 นาที</span></h2>
          <p className="text-sm mb-8" style={{ opacity: 0.6 }}>บอกวันงาน สถานที่ และขนาดห้อง — เราคำนวณขนาดจอให้ฟรี</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+66839425594" className="btn-primary">📞 083-942-5594</a>
            <a href="https://line.me/R/ti/p/@jcled" target="_blank" rel="noopener noreferrer" className="btn-line">LINE: @jcled</a>
            <Link href="/contact" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.3)" }}>กรอกฟอร์ม</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
