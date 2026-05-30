import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "เช่าจอ LED ประชุม สัมมนา กรุงเทพ | JC VIDEO & LED",
  description:
    "บริการเช่าจอ LED ประชุมและสัมมนากรุงเทพ จอ P3.9 ความคมชัดสูง รองรับทุกขนาดงาน ติดตั้งฟรี ช่างดูแลตลอด โทร 083-942-5594",
  keywords: ["เช่าจอ LED ประชุม", "จอ LED สัมมนา", "เช่าจอ LED ประชุมกรุงเทพ", "จอ LED P3.9 ประชุม"],
  alternates: { canonical: "https://www.jcled.co.th/services/led-meeting" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "เช่าจอ LED ประชุม สัมมนา",
  description: "บริการเช่าจอ LED สำหรับงานประชุมและสัมมนาในกรุงเทพฯ จอ P3.9 ติดตั้งฟรี มีช่างดูแลตลอด",
  provider: { "@type": "LocalBusiness", name: "JC VIDEO & LED", telephone: "+66839425594" },
  areaServed: { "@type": "City", name: "กรุงเทพมหานคร" },
};

const features = [
  { icon: "🖥️", title: "จอ P3.9 ความคมชัดสูง", desc: "Pixel Pitch 3.9mm เหมาะกับห้องประชุมและสัมมนา ภาพชัดทุกมุมห้อง" },
  { icon: "🔌", title: "รองรับการเชื่อมต่อทุกรูปแบบ", desc: "HDMI, DisplayPort, SDI เชื่อมต่อกับ Laptop, สวิตเชอร์, และระบบ AV ได้ทันที" },
  { icon: "🔧", title: "Setup และ Teardown รวดเร็ว", desc: "ทีมช่างติดตั้งเร็ว ไม่กระทบตารางงานประชุม พร้อมก่อนเวลาเริ่มงานเสมอ" },
  { icon: "👨‍🔧", title: "ช่างเทคนิคประจำงาน", desc: "ดูแลระบบ AV ตลอดงาน ทั้ง Slideshow, Video, และสัญญาณ Live" },
  { icon: "📏", title: "รองรับงานทุกขนาด", desc: "ตั้งแต่ประชุม 50 คน ไปจนถึงสัมมนา 2,000+ คน ออกแบบขนาดจอให้พอดี" },
  { icon: "🔄", title: "มีจอสำรองทุกงาน", desc: "เตรียม Backup Module ไว้เสมอ งานไม่สะดุดแม้เกิดปัญหากระทันหัน" },
];

const useCases = [
  { title: "จอ Presentation หลัก", desc: "จอขนาดใหญ่หน้าเวที ขยายสไลด์และ VDO ให้ทุกที่นั่งมองเห็นชัด" },
  { title: "จอ Side Screen", desc: "จอเสริมด้านข้างสำหรับห้องกว้าง แขกทุกมุมมองเห็นเนื้อหาพร้อมกัน" },
  { title: "จอ Speaker Support", desc: "จอสำหรับแสดง Prompt หรือ Note ให้วิทยากร มองจากเวทีได้สะดวก" },
  { title: "จอ Lobby / Registration", desc: "จอบริเวณทางเข้าแสดงกำหนดการ Agenda และข้อมูลงาน" },
];

const faq = [
  { q: "เช่าจอ LED ประชุมกึ่งวันถึงทั้งวัน คิดราคาอย่างไร?", a: "คิดตามจำนวนวันและขนาดจอ กรุณาแจ้งวันและเวลาเพื่อรับใบเสนอราคาที่ถูกต้อง" },
  { q: "ขนาดจอที่เหมาะกับห้องประชุม 100–300 คน?", a: "โดยทั่วไปแนะนำจอขนาด 4×2.25 เมตร ถึง 6×3.375 เมตร (อัตราส่วน 16:9) ทีมงานจะประเมินพื้นที่จริงให้" },
  { q: "รองรับการใช้งานร่วมกับ Zoom หรือ Teams ได้ไหม?", a: "ได้ครับ รองรับการแสดงผลจาก Video Conference ทุกแพลตฟอร์ม ทั้ง Zoom, Teams, Google Meet" },
  { q: "ถ้าต้องการจอหลายจอพร้อมกัน ทำได้ไหม?", a: "ทำได้ครับ รองรับการติดตั้งหลายจอพร้อมกัน พร้อมระบบ Signal Distribution สำหรับงานขนาดใหญ่" },
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

export default function LedMeetingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>

        <header className="py-16 px-4 text-center" style={{ background: "#111" }}>
          <div className="container-main" style={{ maxWidth: "720px" }}>
            <span className="section-label" style={{ color: "#E8001D" }}>บริการ</span>
            <h1 className="text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.5px" }}>
              เช่าจอ LED <span style={{ color: "#E8001D" }}>ประชุม / สัมมนา</span>
              <br />กรุงเทพฯ
            </h1>
            <p className="text-sm leading-8 mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
              จอ P3.9 คมชัด รองรับงาน 50–2,000+ คน<br />
              Setup เร็ว ช่างดูแลตลอดงาน บริการ 24 ชั่วโมง
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:+66839425594" className="btn-primary">📞 โทรขอใบเสนอราคา</a>
              <a href="https://line.me/R/ti/p/@jcled" target="_blank" rel="noopener noreferrer" className="btn-line">LINE สอบถาม</a>
            </div>
          </div>
        </header>

        <nav aria-label="Breadcrumb" className="px-4 py-3 border-b" style={{ borderColor: "#E5E5E5" }}>
          <div className="container-main">
            <ol className="flex gap-2 text-xs list-none p-0 m-0" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <Link href="/" itemProp="item" className="no-underline" style={{ color: "#666" }}><span itemProp="name">หน้าหลัก</span></Link>
                <meta itemProp="position" content="1" />
              </li>
              <li style={{ color: "#999" }}>/</li>
              <li itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                <span itemProp="name" style={{ color: "#111", fontWeight: 500 }}>เช่าจอ LED ประชุม สัมมนา</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>

        <section className="section-pad px-4">
          <div className="container-main">
            <span className="section-label">จุดเด่น</span>
            <h2 className="text-3xl font-bold mb-8">ครบทุกความต้องการสำหรับงานประชุม</h2>
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

        <section className="section-pad px-4" style={{ background: "#F7F7F7" }}>
          <div className="container-main">
            <span className="section-label">การใช้งาน</span>
            <h2 className="text-3xl font-bold mb-8">ตำแหน่งติดตั้งจอ LED ในงานประชุม</h2>
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

        <section className="section-pad px-4">
          <div className="container-main" style={{ maxWidth: "600px" }}>
            <span className="section-label">สเปกจอที่แนะนำ</span>
            <h2 className="text-3xl font-bold mb-6">จอ P3.9 — Standard Pro</h2>
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

        <section className="section-pad px-4" style={{ background: "#F7F7F7" }}>
          <div className="container-main" style={{ maxWidth: "680px" }}>
            <span className="section-label">FAQ</span>
            <h2 className="text-3xl font-bold mb-8">คำถามที่พบบ่อย</h2>
            <div className="space-y-3">
              {faq.map((item) => (
                <details key={item.q} className="card p-5 cursor-pointer">
                  <summary className="font-semibold text-sm list-none flex justify-between gap-3">
                    {item.q}<span style={{ color: "#E8001D" }}>+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-7" style={{ color: "#666" }}>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 text-center text-white" style={{ background: "#111" }}>
          <h2 className="text-3xl font-black mb-3">ปรึกษาฟรี ไม่มีข้อผูกมัด<br /><span style={{ color: "#E8001D" }}>โทรได้เลย 24 ชม.</span></h2>
          <p className="text-sm mb-8" style={{ opacity: 0.6 }}>บอกขนาดห้องและจำนวนผู้เข้าร่วม รับใบเสนอราคาได้ทันที</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+66839425594" className="btn-primary">📞 083-942-5594</a>
            <a href="https://line.me/R/ti/p/@jcled" target="_blank" rel="noopener noreferrer" className="btn-line">LINE: @jcled</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
