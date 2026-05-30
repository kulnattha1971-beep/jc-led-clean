import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "จอ LED ออกบูธ นิทรรศการ กรุงเทพ | P3.9 45° | JC VIDEO & LED",
  description:
    "บริการเช่าจอ LED ออกบูธ นิทรรศการ กรุงเทพ จอ P3.9 และ P3.9 45° โค้งมุม ดึงดูดสายตา ติดตั้งฟรี ช่างดูแลตลอด โทร 083-942-5594",
  keywords: ["จอ LED ออกบูธ", "เช่าจอ LED บูธ", "จอ LED นิทรรศการ", "จอ LED P3.9 45 องศา", "จอ LED ออกบูธ กรุงเทพ"],
  alternates: { canonical: "https://www.jcled.co.th/services/led-booth" },
};

const features = [
  { icon: "🔷", title: "จอโค้ง P3.9 45° — เฉพาะเรา", desc: "จอมุมโค้ง 45 องศา สร้างมิติให้บูธ ดึงดูดสายตาจากทุกทิศทาง หาจากเจ้าอื่นได้ยาก" },
  { icon: "⚡", title: "ติดตั้งรวดเร็ว", desc: "ระบบ Cabinet Quick-lock ประกอบได้ภายใน 2–3 ชั่วโมง พร้อมรับแขกตรงเวลา" },
  { icon: "🎨", title: "รองรับ Content ทุกรูปแบบ", desc: "VDO Loop, Animation, Real-time Data Feed, Interactive Content ครบ" },
  { icon: "💡", title: "สว่างแม้แสงจ้า", desc: "ความสว่าง 1,200 nits รองรับสถานที่กลางแจ้งและฮอลล์ที่มีแสงสปอตไลต์จัด" },
  { icon: "📐", title: "ดีไซน์ขนาดได้อิสระ", desc: "ออกแบบขนาดและ Layout จอให้เข้ากับ Booth Design ทุกรูปทรง" },
  { icon: "🔄", title: "ย้ายสถานที่ได้ระหว่างงาน", desc: "โครงสร้าง Modular รื้อและประกอบใหม่ได้ เหมาะกับงานที่มีหลายสถานที่" },
];

const boothTypes = [
  { title: "บูธมุม / Corner Booth", spec: "จอ P3.9 45°", desc: "จอโค้งมุมสำหรับบูธมุม สร้าง Wow Effect ที่เห็นได้จากทั้งสองทิศทาง" },
  { title: "บูธตรง / Inline Booth", spec: "จอ P3.9", desc: "จอตรงขนาดใหญ่ Backdrop เต็มความสูง ดึงดูดสายตาจากระยะไกล" },
  { title: "บูธ Island / ทุกด้าน", spec: "จอ P3.9 + P3.9 45°", desc: "ผสมผสานจอตรงและจอโค้ง ครอบคลุมการมองเห็นจาก 360 องศา" },
  { title: "Pop-up / งานเร่ง", spec: "จอ P3.9", desc: "ติดตั้งเร็ว รื้อเร็ว เหมาะกับงานนิทรรศการที่เปิดแค่ 1–2 วัน" },
];

const venues = ["อิมแพค เมืองทองธานี", "BITEC บางนา", "Royal Paragon Hall", "CentralWorld", "Siam Paragon", "True Digital Park"];

const faq = [
  { q: "จอ P3.9 45° ต่างจากจอปกติอย่างไร?", a: "จอ P3.9 45° คือ Cabinet พิเศษที่ออกแบบให้ต่อกันเป็นมุม 45 องศาได้ เหมาะสำหรับบูธมุมหรือดีไซน์โค้ง สร้างมิติที่จอปกติทำไม่ได้" },
  { q: "งาน Expo 3 วัน คิดราคาอย่างไร?", a: "คิดตามจำนวนวัน ขนาดจอ และระยะทาง กรุณาโทรหรือ LINE แจ้งรายละเอียดเพื่อรับราคาที่แม่นยำ" },
  { q: "ติดตั้งที่ BITEC หรืออิมแพคได้เลยไหม?", a: "ได้เลยครับ เรามีประสบการณ์ทำงานที่ BITEC, IMPACT, และ Exhibition Hall ใหญ่ๆ ทั่วกรุงเทพมานานกว่า 20 ปี" },
  { q: "ถ้าต้องการ Content เพื่อเล่นบนจอ ช่วยได้ไหม?", a: "ให้คำปรึกษาด้านสเปก Content ได้ครับ (ขนาดไฟล์, Format, Framerate) ส่วนการผลิต Content แนะนำให้ใช้ทีม Creative ของพี่เอง" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function LedBoothPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>

        <header className="py-16 px-4 text-center" style={{ background: "#111" }}>
          <div className="container-main" style={{ maxWidth: "720px" }}>
            <span className="section-label" style={{ color: "#E8001D" }}>บริการ</span>
            <h1 className="text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.5px" }}>
              จอ LED <span style={{ color: "#E8001D" }}>ออกบูธ</span> / นิทรรศการ
              <br />กรุงเทพฯ
            </h1>
            <p className="text-sm leading-8 mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
              จอ P3.9 และ P3.9 45° โค้งมุม — ดึงดูดทุกสายตา<br />ติดตั้งเร็ว พร้อมก่อนงานเปิด ช่างดูแลตลอด
            </p>
            {/* Unique Selling Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-xs font-semibold" style={{ background: "rgba(232,0,29,0.2)", border: "1px solid rgba(232,0,29,0.4)", color: "#E8001D" }}>
              ⭐ จอโค้ง P3.9 45° — หายากจากเจ้าอื่น
            </div>
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
              <li><span style={{ color: "#111", fontWeight: 500 }}>จอ LED ออกบูธ นิทรรศการ</span></li>
            </ol>
          </div>
        </nav>

        <section className="section-pad px-4">
          <div className="container-main">
            <span className="section-label">จุดเด่น</span>
            <h2 className="text-3xl font-bold mb-8">ทำให้บูธของคุณโดดเด่นที่สุดในงาน</h2>
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
            <span className="section-label">รูปแบบบูธ</span>
            <h2 className="text-3xl font-bold mb-8">เหมาะกับทุก Booth Layout</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {boothTypes.map((b, i) => (
                <div key={b.title} className="bg-white border rounded-lg p-5 flex gap-4" style={{ borderColor: "#E5E5E5" }}>
                  <span className="text-2xl font-black flex-shrink-0" style={{ color: "#E8001D" }}>0{i + 1}</span>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{b.title}</h3>
                    <p className="text-xs font-medium mb-1" style={{ color: "#E8001D" }}>{b.spec}</p>
                    <p className="text-xs leading-6" style={{ color: "#666" }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Venue Experience — Local SEO */}
        <section className="section-pad px-4">
          <div className="container-main">
            <span className="section-label">สถานที่ที่เคยทำงาน</span>
            <h2 className="text-3xl font-bold mb-8">ประสบการณ์ทุก Venue ในกรุงเทพฯ</h2>
            <div className="flex flex-wrap gap-3">
              {venues.map((v) => (
                <span key={v} className="pill" style={{ fontSize: "13px", padding: "8px 16px" }}>{v}</span>
              ))}
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
          <h2 className="text-3xl font-black mb-3">ให้บูธของคุณเป็นที่สุดของงาน<br /><span style={{ color: "#E8001D" }}>ปรึกษาฟรีตลอด 24 ชม.</span></h2>
          <p className="text-sm mb-8" style={{ opacity: 0.6 }}>บอก Floor Plan บูธและชื่อ Venue — เราออกแบบจอให้ฟรี</p>
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
