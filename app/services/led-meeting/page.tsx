import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "เช่าจอ LED ประชุม สัมมนา กรุงเทพ | JC VIDEO & LED",
  description: "บริการเช่าจอ LED งานแต่งงานกรุงเทพ จอ P2.5 ความละเอียดสูง ภาพสวยคมชัด ติดตั้งฟรี มีช่างดูแลตลอดงาน พร้อมจอสำรอง โทร 083-942-5594",
  alternates: { canonical: "https://www.jcled.co.th/services/led-meeting" },
};

const features = [
  { icon: "💎", title: "จอ P2.5 ความละเอียดสูง", desc: "ภาพคมชัดระดับ Full HD เหมาะกับการดูใกล้ชิดในโรงแรมและห้องจัดเลี้ยง" },
  { icon: "🔧", title: "ติดตั้งและรื้อถอนฟรี", desc: "ทีมช่างมืออาชีพดูแลตั้งแต่เซ็ตอัพจนถึงเก็บอุปกรณ์ ไม่มีค่าใช้จ่ายเพิ่ม" },
  { icon: "👨‍🔧", title: "ช่างประจำตลอดงาน", desc: "มีช่างเทคนิคอยู่หน้างานตลอด พร้อมแก้ไขปัญหาเฉพาะหน้าทันที" },
  { icon: "🔄", title: "มีจอสำรองพร้อม", desc: "เตรียมจอสำรองทุกงาน ไม่ต้องกังวลหากเกิดปัญหากระทันหัน" },
  { icon: "📐", title: "ปรับขนาดได้ตามสถานที่", desc: "ออกแบบขนาดจอให้เหมาะกับพื้นที่จัดงานและ Layout ของโรงแรม" },
  { icon: "🎨", title: "รองรับ Content ทุกรูปแบบ", desc: "เชื่อมต่อได้กับ Laptop, Photo Slideshow, Live Camera และระบบ AV อื่นๆ" },
];

const faq = [
  { q: "เช่าจอ LED งานแต่งงานราคาเท่าไหร่?", a: "ราคาขึ้นอยู่กับขนาดจอและระยะเวลาเช่า กรุณาโทรหรือ LINE เพื่อรับใบเสนอราคาที่แม่นยำตามสถานที่จัดงานจริง" },
  { q: "ต้องจองล่วงหน้ากี่วัน?", a: "แนะนำจองล่วงหน้าอย่างน้อย 14-30 วัน สำหรับงานแต่งงานช่วง High Season ควรจองล่วงหน้า 1-2 เดือน" },
  { q: "ขนาดจอที่เหมาะกับงานแต่งงานคือขนาดไหน?", a: "โดยทั่วไปจอ 4×2.5m ถึง 6×3m เหมาะสำหรับห้องจัดเลี้ยง 200-500 คน ทีมงานจะแนะนำขนาดที่เหมาะสมให้ฟรี" },
  { q: "ถ้าสถานที่ติดตั้งยาก มีปัญหาไหม?", a: "ไม่มีปัญหาครับ ทีมช่างมีประสบการณ์กว่า 20 ปี รองรับสถานที่หลากหลาย ทั้งโรงแรม สนามหญ้า และพื้นที่พิเศษ" },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function LedWeddingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        <header className="py-16 px-4 text-center" style={{ background: "#111" }}>
          <div className="container-main" style={{ maxWidth: "720px" }}>
            <span className="section-label" style={{ color: "#E8001D" }}>บริการ</span>
            <h1 className="text-4xl font-black text-white mb-4">เช่าจอ LED <span style={{ color: "#E8001D" }}>ประชุม / สัมมนา</span><br />กรุงเทพฯ</h1>
            <p className="text-sm leading-8 mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>จอ P2.5 ความละเอียดสูง ภาพคมชัดทุกมุมห้อง<br />ติดตั้งฟรี มีช่างคุมตลอดงาน พร้อมจอสำรอง</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:+66839425594" className="btn-primary">📞 โทรขอใบเสนอราคา</a>
              <a href="https://line.me/R/ti/p/@jcled" target="_blank" rel="noopener noreferrer" className="btn-line">LINE สอบถาม</a>
            </div>
          </div>
        </header>
        <nav aria-label="Breadcrumb" className="px-4 py-3 border-b" style={{ borderColor: "#E5E5E5" }}>
          <div className="container-main"><ol className="flex gap-2 text-xs list-none p-0 m-0"><li><Link href="/" className="no-underline" style={{ color: "#666" }}>หน้าหลัก</Link></li><li style={{ color: "#999" }}>/</li><li style={{ color: "#111", fontWeight: 500 }}>เช่าจอ LED งานแต่งงาน</li></ol></div>
        </nav>
        <section className="section-pad px-4">
          <div className="container-main">
            <span className="section-label">จุดเด่น</span>
            <h2 className="text-3xl font-bold mb-8">ทำไมต้องเลือก JC LED สำหรับงานแต่งงาน?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {features.map((f) => (<div key={f.title} className="card p-5"><div className="text-2xl mb-3">{f.icon}</div><h3 className="font-semibold text-sm mb-2">{f.title}</h3><p className="text-xs leading-6" style={{ color: "#666" }}>{f.desc}</p></div>))}
            </div>
          </div>
        </section>
        <section className="section-pad px-4" style={{ background: "#F7F7F7" }}>
          <div className="container-main" style={{ maxWidth: "680px" }}>
            <span className="section-label">FAQ</span>
            <h2 className="text-3xl font-bold mb-8">คำถามที่พบบ่อย</h2>
            <div className="space-y-3">
              {faq.map((item) => (<details key={item.q} className="card p-5 cursor-pointer"><summary className="font-semibold text-sm list-none flex justify-between gap-3">{item.q}<span style={{ color: "#E8001D" }}>+</span></summary><p className="mt-3 text-sm leading-7" style={{ color: "#666" }}>{item.a}</p></details>))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4 text-center text-white" style={{ background: "#111" }}>
          <h2 className="text-3xl font-black mb-3">รับใบเสนอราคาฟรี<br /><span style={{ color: "#E8001D" }}>ภายใน 30 นาที</span></h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
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
