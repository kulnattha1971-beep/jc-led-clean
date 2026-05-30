import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog-posts";
import fs from "fs/promises";
import path from "path";

// ============================================================
// PAGE-LEVEL METADATA — Override จาก layout.tsx
// ============================================================
export const metadata: Metadata = {
  title: "เช่าจอ LED ราคาถูก กรุงเทพ | จอ LED งานแต่งงาน งานอีเวนต์ | JC VIDEO & LED",
  description:
    "บริการเช่าจอ LED ราคาถูก กรุงเทพฯ คุณภาพสูง ติดตั้งฟรี มีช่างคุมงานตลอด 24 ชม. รับจัดจอ LED งานแต่งงาน งานอีเวนต์ ประชุม สัมมนา พร้อมจอสำรอง ประสบการณ์ 20+ ปี โทร 083-942-5594",
  alternates: {
    canonical: "https://www.jcled.co.th",
  },
  openGraph: {
    title: "เช่าจอ LED ราคาถูก กรุงเทพ | จอ LED งานแต่งงาน งานอีเวนต์",
    description: "บริการเช่าจอ LED ราคาถูก กรุงเทพฯ ติดตั้งฟรี มีช่างคุมงาน 24 ชม. รับจัดจอ LED งานแต่งงาน",
    url: "https://www.jcled.co.th",
  },
};

// ============================================================
// DATA
// ============================================================
const trustStats = [
  { num: "20+", label: "ปีประสบการณ์\nในวงการ AV" },
  { num: "500+", label: "โปรเจกต์\nที่ผ่านมา" },
  { num: "24", label: "ชั่วโมง\nช่างพร้อมบริการ" },
  { num: "3", label: "รุ่นจอ LED\nให้เลือก" },
];

const services = [
  {
    icon: "💍",
    name: "เช่าจอ LED งานแต่งงาน",
    desc: "สร้างบรรยากาศโรแมนติกด้วยจอ P2.5 ความละเอียดสูง ทีมช่างดูแลตลอดงาน ติดตั้งและรื้อถอนฟรี",
    href: "/services/led-wedding",
    featured: true,
    tag: "ยอดนิยม",
    keyword: "เช่าจอ LED งานแต่งงาน กรุงเทพ",
  },
  {
    icon: "🎤",
    name: "เช่าจอ LED ประชุม",
    desc: "จอ P3.9 Full HD เหมาะสำหรับการนำเสนอในห้องประชุมองค์กรทุกขนาด",
    href: "/services/led-meeting",
    featured: false,
    keyword: "เช่าจอ LED ประชุม กรุงเทพ",
  },
  {
    icon: "📊",
    name: "เช่าจอ LED สัมมนา",
    desc: "รองรับงานสัมมนาและอีเวนต์ขนาดกลาง-ใหญ่ ทีมช่างพร้อมซัพพอร์ตตลอดงาน",
    href: "/services/led-seminar",
    featured: false,
    keyword: "เช่าจอ LED สัมมนา กรุงเทพ",
  },
  {
    icon: "🏪",
    name: "จอ LED ออกบูธ / นิทรรศการ",
    desc: "จอโค้ง P3.9 45° สะดุดตา ดึงดูดผู้เข้าชมบูธ เหมาะสำหรับ Event และ Expo ทุกขนาด",
    href: "/services/led-booth",
    featured: false,
    keyword: "จอ LED ออกบูธ นิทรรศการ กรุงเทพ",
  },
];

const specs = [
  {
    model: "P2.5",
    name: "Indoor Premium",
    pitch: "2.5mm",
    use: "งานแต่งงาน · ห้องประชุม",
    type: "Indoor",
    desc: "ความละเอียดสูงสุด เหมาะกับพื้นที่ดูใกล้ชิด ภาพคมชัดระดับ Full HD",
  },
  {
    model: "P3.9",
    name: "Standard Pro",
    pitch: "3.9mm",
    use: "สัมมนา · บูธ · Outdoor",
    type: "Indoor / Outdoor",
    desc: "ยืดหยุ่นสูง ใช้ได้ทั้งในและนอกอาคาร ประกอบง่าย รองรับหลายขนาด",
  },
  {
    model: "P3.9\n45°",
    name: "Corner Curved",
    pitch: "3.9mm / 45°",
    use: "บูธมุม · ดีไซน์พิเศษ",
    type: "Specialty",
    desc: "จอโค้งมุม 45 องศา เพิ่มมิติให้งานออกบูธ ดึงดูดสายตาจากทุกทิศทาง",
  },
];
// portfolioPreviews is now loaded dynamically from data/portfolio.json

const faqItems = [
  {
    q: "เช่าจอ LED ราคาเริ่มต้นเท่าไหร่?",
    a: "ราคาขึ้นอยู่กับขนาดจอ จำนวนวัน และสถานที่ติดตั้ง กรุณาโทรหรือ LINE เพื่อรับใบเสนอราคาที่ถูกต้อง บริการขอใบเสนอราคาฟรี ไม่มีค่าใช้จ่าย",
  },
  {
    q: "บริการครอบคลุมพื้นที่ไหนบ้าง?",
    a: "ให้บริการทั่วกรุงเทพมหานครและปริมณฑล ได้แก่ นนทบุรี ปทุมธานี สมุทรปราการ รวมถึงพื้นที่อิมแพค เมืองทองธานี สุขุมวิท ลาดพร้าว และพื้นที่อื่นๆ",
  },
  {
    q: "ต้องจองล่วงหน้ากี่วัน?",
    a: "แนะนำจองล่วงหน้าอย่างน้อย 7-14 วัน สำหรับงานใหญ่หรืองานที่ต้องการจอหลายจอ ควรจองล่วงหน้า 1 เดือน สามารถโทรเช็กความพร้อมได้ตลอดเวลา",
  },
  {
    q: "มีช่างดูแลหน้างานหรือเปล่า?",
    a: "มีช่างเทคนิคประจำทุกงาน ตั้งแต่ติดตั้งจนถึงรื้อถอน และพร้อมแก้ไขปัญหาเฉพาะหน้าตลอด 24 ชั่วโมง",
  },
];

// ============================================================
// FAQ SCHEMA
// ============================================================
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

type PortfolioPreview = {
  id: string;
  type: string;
  loc: string;
  spec: string;
  bg: string;
  image: string;
  imageAlt?: string;
};

// ============================================================
// PAGE COMPONENT
// ============================================================
export default async function HomePage() {
  let portfolioPreviews: PortfolioPreview[] = [];
  try {
    const dataFilePath = path.join(process.cwd(), 'data', 'portfolio.json');
    const fileContents = await fs.readFile(dataFilePath, 'utf8');
    portfolioPreviews = (JSON.parse(fileContents) as PortfolioPreview[]).slice(0, 4);
  } catch (error) {
    console.error("Failed to load portfolios:", error);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main id="main-content">

        {/* ── HERO ─────────────────────────────────── */}
        <header
          className="relative text-center py-24 px-4 flex flex-col justify-center items-center overflow-hidden"
          style={{ minHeight: "80vh" }}
          role="banner"
        >
          {/* Background Image */}
          <Image
            src="/uploads/1778880979210_2.jpg.jpg"
            alt="ผลงานติดตั้งจอ LED เป็นแบนเนอร์"
            fill
            className="object-cover"
            priority
            style={{ zIndex: -2 }}
          />

          {/* Dark Overlay for Readability */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
              zIndex: -1,
            }}
          ></div>

          <div className="relative z-10 w-full" style={{ maxWidth: "900px", margin: "0 auto" }}>
            {/* Availability Badge */}
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs border"
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.3)",
                color: "#FFF",
                backdropFilter: "blur(4px)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#4ade80", boxShadow: "0 0 8px #4ade80" }}
              ></span>
              พร้อมให้บริการทั่วกรุงเทพฯ และปริมณฑล
            </div>

            {/* H1 — Primary Keyword (มีเพียง 1 แท็กในหน้านี้ตามหลัก SEO) */}
            <h1
              className="text-5xl md:text-6xl font-black mb-4 text-white drop-shadow-md"
              style={{ letterSpacing: "-1px", lineHeight: 1.2 }}
            >
              บริการ
              <span style={{ color: "#FF3344" }}>เช่าจอ LED ราคาถูก</span>
              <br />
              จอ LED งานแต่งงาน กรุงเทพฯ
            </h1>

            <p
              className="text-lg md:text-xl leading-8 mb-8 mx-auto text-gray-200 drop-shadow"
              style={{ maxWidth: "600px", fontWeight: 300 }}
            >
              บริการเช่าจอ LED ครบวงจร — งานแต่งงาน ประชุม สัมมนา ออกบูธ ทั่วกรุงเทพและปริมณฑล
              <br />
              ติดตั้งฟรี มีช่างคุมงานตลอดงาน พร้อมจอสำรอง | ประสบการณ์ 20+ ปี | จอ P2.5 / P3.9 / P3.9 45°
            </p>

            {/* Keyword Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
                { label: "✓ ติดตั้งฟรี", highlight: true },
                { label: "✓ มีช่างคุมงาน", highlight: true },
                { label: "✓ จอสำรองพร้อม", highlight: true },
                { label: "งานแต่งงาน", highlight: false },
                { label: "งานประชุม", highlight: false },
                { label: "ออกบูธ", highlight: false },
                { label: "สัมมนา", highlight: false },
              ].map((p) => (
                <span
                  key={p.label}
                  className="pill"
                  style={
                    p.highlight
                      ? { background: "rgba(232, 0, 29, 0.8)", borderColor: "#E8001D", color: "#FFF" }
                      : { background: "rgba(255, 255, 255, 0.15)", borderColor: "rgba(255, 255, 255, 0.3)", color: "#FFF" }
                  }
                >
                  {p.label}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-primary shadow-lg hover:scale-105 transition-transform">
                ขอใบเสนอราคา ฟรี
              </Link>
              <Link href="/portfolio" className="btn-secondary shadow-lg hover:scale-105 transition-transform" style={{ background: "rgba(255,255,255,0.1)", color: "white", borderColor: "rgba(255,255,255,0.5)" }}>
                ดูผลงานที่ผ่านมา
              </Link>
            </div>
          </div>
        </header>

        {/* ── TRUST BAR ───────────────────────────── */}
        <div
          style={{ background: "#111111" }}
          role="complementary"
          aria-label="ตัวเลขความน่าเชื่อถือ"
        >
          <div
            className="container-main py-6 flex flex-wrap justify-center gap-8 sm:gap-12"
          >
            {trustStats.map((s) => (
              <div key={s.num} className="flex items-center gap-3 text-white">
                <span
                  className="text-2xl font-black"
                  style={{ color: "#E8001D" }}
                >
                  {s.num}
                </span>
                <span
                  className="text-xs leading-5"
                  style={{ opacity: 0.65, whiteSpace: "pre-line" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── SERVICES ────────────────────────────── */}
        <section
          className="section-pad px-4"
          aria-labelledby="services-heading"
        >
          <div className="container-main">
            <span className="section-label">บริการของเรา</span>
            <h2 id="services-heading" className="text-3xl font-bold mb-2">
              เช่าจอ LED ครบทุกประเภทงาน
            </h2>
            <p className="text-sm mb-8" style={{ color: "#666" }}>
              ครอบคลุมทุก Event ทั้งในและนอกสถานที่ กรุงเทพฯ และปริมณฑล
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`card p-6 no-underline block relative ${
                    s.featured ? "md:col-span-2 flex items-center justify-between" : ""
                  }`}
                  style={
                    s.featured
                      ? { background: "#111", borderColor: "transparent", color: "white" }
                      : { color: "#111" }
                  }
                  aria-label={s.keyword}
                >
                  {s.tag && (
                    <span
                      className="absolute top-4 right-4 text-white text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: "#E8001D" }}
                    >
                      {s.tag}
                    </span>
                  )}
                  <div>
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-4"
                      style={{
                        background: s.featured ? "rgba(255,255,255,0.1)" : "#F7F7F7",
                      }}
                    >
                      {s.icon}
                    </div>
                    <h3
                      className={`font-semibold mb-2 ${s.featured ? "text-xl" : "text-base"}`}
                    >
                      {s.name}
                    </h3>
                    <p
                      className="text-sm leading-6"
                      style={{ color: s.featured ? "rgba(255,255,255,0.6)" : "#666" }}
                    >
                      {s.desc}
                    </p>
                  </div>
                  {s.featured && (
                    <span className="text-2xl" style={{ color: "#E8001D" }}>
                      →
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPECS ───────────────────────────────── */}
        <section
          className="section-pad px-4"
          style={{ background: "#F7F7F7" }}
          aria-labelledby="specs-heading"
        >
          <div className="container-main">
            <span className="section-label">ข้อมูลจอ LED</span>
            <h2 id="specs-heading" className="text-3xl font-bold mb-2">
              สเปกจอ LED ที่มีให้เช่า
            </h2>
            <p className="text-sm mb-8" style={{ color: "#666" }}>
              เลือกจอให้เหมาะกับงานและงบประมาณ
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {specs.map((spec) => (
                <article
                  key={spec.model}
                  className="bg-white border rounded-lg p-5 text-center"
                  style={{ borderColor: "#E5E5E5" }}
                  itemScope
                  itemType="https://schema.org/Product"
                >
                  <div
                    className="text-3xl font-black mb-1 whitespace-pre-line"
                    style={{ color: "#E8001D" }}
                    itemProp="name"
                  >
                    {spec.model}
                  </div>
                  <div
                    className="text-xs font-medium mb-3"
                    style={{ color: "#666" }}
                  >
                    {spec.name}
                  </div>
                  <p
                    className="text-xs leading-7 mb-3"
                    style={{ color: "#666" }}
                    itemProp="description"
                  >
                    Pixel Pitch: {spec.pitch}
                    <br />
                    เหมาะสำหรับ: {spec.use}
                    <br />
                    {spec.desc}
                  </p>
                  <span
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{
                      background: "#FFF0F0",
                      border: "1px solid #FFCCCC",
                      color: "#E8001D",
                    }}
                  >
                    {spec.type}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO PREVIEW ────────────────────── */}
        <section
          className="section-pad px-4"
          aria-labelledby="portfolio-heading"
        >
          <div className="container-main">
            <div className="flex items-end justify-between mb-2">
              <div>
                <span className="section-label">ผลงาน</span>
                <h2 id="portfolio-heading" className="text-3xl font-bold">
                  ผลงานที่ผ่านมา 500+ โปรเจกต์
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="text-sm no-underline font-medium"
                style={{ color: "#E8001D" }}
              >
                ดูทั้งหมด →
              </Link>
            </div>
            <p className="text-sm mb-8" style={{ color: "#666" }}>
              รูปหน้างานจริง ทุกงานมีช่างของเราดูแลตลอด
            </p>

            {/* Portfolio Grid — ใส่รูปจริงใน /public/portfolio/ */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {portfolioPreviews.map((p, i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden relative flex flex-col justify-end p-4"
                  style={{
                    background: p.bg,
                    aspectRatio: "16/9",
                  }}
                >
                  {/* Background Image */}
                  <Image
                    src={p.image}
                    alt={`เช่าจอ LED ${p.type} ${p.loc} ${p.spec}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                      zIndex: 1,
                    }}
                  ></div>

                  <div className="relative" style={{ zIndex: 2 }}>
                    <span
                      className="inline-block text-white text-xs px-2 py-0.5 rounded-full font-medium mb-1"
                      style={{ background: "#E8001D" }}
                    >
                      {p.type}
                    </span>
                    <p className="text-white text-xs font-medium">
                      {p.spec} · {p.loc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOG PREVIEW ─────────────────────────── */}
        <section
          className="section-pad px-4"
          style={{ background: "#F7F7F7" }}
          aria-labelledby="blog-heading"
        >
          <div className="container-main">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="section-label">บทความ</span>
                <h2 id="blog-heading" className="text-3xl font-bold">
                  คู่มือเช่าจอ LED
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-sm no-underline font-medium"
                style={{ color: "#E8001D" }}
              >
                ดูทั้งหมด →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {blogPosts.map((post) => (
                <article key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="card block no-underline overflow-hidden"
                  >
                    {/* Thumbnail — แทนที่ด้วยรูปจริงใน /public/blog/ */}
                    <div
                      className="h-28 flex items-center justify-center text-4xl"
                      style={{ background: post.bg }}
                      role="img"
                      aria-label={post.title}
                    >
                      {post.emoji}
                    </div>
                    <div className="p-4">
                      <p
                        className="text-xs font-semibold mb-1 uppercase tracking-wide"
                        style={{ color: "#E8001D" }}
                      >
                        {post.cat}
                      </p>
                      <h3 className="text-sm font-semibold leading-6 mb-2" style={{ color: "#111" }}>
                        {post.title}
                      </h3>
                      <p className="text-xs" style={{ color: "#999" }}>
                        อ่าน {post.readTime} นาที · {post.dateDisplay}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────── */}
        <section
          className="section-pad px-4"
          aria-labelledby="faq-heading"
        >
          <div className="container-main" style={{ maxWidth: "680px" }}>
            <span className="section-label">FAQ</span>
            <h2 id="faq-heading" className="text-3xl font-bold mb-8">
              คำถามที่พบบ่อย
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <details
                  key={i}
                  className="card p-5 cursor-pointer"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <summary
                    className="font-semibold text-sm list-none flex items-center justify-between gap-3"
                    itemProp="name"
                  >
                    {item.q}
                    <span
                      className="text-base flex-shrink-0"
                      style={{ color: "#E8001D" }}
                    >
                      +
                    </span>
                  </summary>
                  <div
                    className="mt-3 text-sm leading-7"
                    style={{ color: "#666" }}
                    itemScope
                    itemType="https://schema.org/Answer"
                    itemProp="acceptedAnswer"
                  >
                    <span itemProp="text">{item.a}</span>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────── */}
        <section
          className="py-16 px-4 text-center text-white"
          style={{ background: "#111111" }}
          aria-labelledby="cta-heading"
        >
          <h2
            id="cta-heading"
            className="text-3xl font-black mb-3"
            style={{ letterSpacing: "-0.5px" }}
          >
            พร้อมให้คำปรึกษาฟรี
            <br />
            <span style={{ color: "#E8001D" }}>ตลอด 24 ชั่วโมง</span>
          </h2>
          <p className="text-sm mb-8" style={{ opacity: 0.6 }}>
            บอกรายละเอียดงาน รับใบเสนอราคาภายใน 30 นาที
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+66839425594"
              className="btn-primary"
              aria-label="โทรหาเรา 083-942-5594"
            >
              📞 โทร 083-942-5594
            </a>
            <a
              href="https://line.me/R/ti/p/@jcled"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-line"
              aria-label="ติดต่อ LINE"
            >
              LINE: @jcled
            </a>
            <Link href="/contact" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.3)" }}>
              กรอกฟอร์มรับใบเสนอราคา
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
