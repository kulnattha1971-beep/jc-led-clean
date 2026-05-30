import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog-posts";

// ============================================================
// ARTICLE CONTENT — เพิ่มบทความใหม่ที่นี่
// ============================================================
const articleContent: Record<string, string> = {
  "led-rental-price-2025": `
## เช่าจอ LED ราคาเท่าไหร่? ปัจจัยที่กำหนดราคา

ราคาเช่าจอ LED ไม่ได้มีตัวเลขตายตัว เพราะขึ้นอยู่กับปัจจัยหลายอย่าง ถ้าเข้าใจตรงนี้ก่อน จะทำให้วางงบประมาณได้แม่นขึ้นมากครับ

## ปัจจัยที่ 1 — Pixel Pitch (ชนิดจอ)

Pixel Pitch คือระยะห่างระหว่างจุดแสงบนจอ ยิ่งตัวเลขน้อย ยิ่งคมชัด ยิ่งราคาสูง

- **P2.5** — ราคาสูงสุด เหมาะกับงานใกล้ชิด เช่น งานแต่งงาน ห้องประชุมเล็ก
- **P3.9** — ราคากลาง รองรับงานใหญ่ได้ดี สัมมนา บูธ ประชุมใหญ่
- **P3.9 45°** — ราคาพิเศษ สำหรับบูธมุมหรือดีไซน์โค้ง

## ปัจจัยที่ 2 — ขนาดจอ (ตารางเมตร)

ขนาดจอคือปัจจัยที่มีผลต่อราคามากที่สุด คำนวณจากพื้นที่ (กว้าง × สูง = ตร.ม.)

- จอ 4×2.25m = 9 ตร.ม.
- จอ 6×3.375m = 20.25 ตร.ม.
- จอ 8×4.5m = 36 ตร.ม.

## ปัจจัยที่ 3 — จำนวนวัน

ส่วนใหญ่คิดเป็นรายวัน ยิ่งเช่านานยิ่งได้ส่วนลด งาน 1 วันกับงาน 3 วันราคาต่างกันพอสมควร

## ปัจจัยที่ 4 — สถานที่และระยะทาง

พื้นที่กรุงเทพฯ และปริมณฑลราคาพื้นฐาน พื้นที่ไกลออกไปอาจมีค่าขนส่งเพิ่ม

## วิธีขอใบเสนอราคาที่ได้ราคาแม่นที่สุด

บอกข้อมูลเหล่านี้มาพร้อมกัน:
- ประเภทงาน (แต่งงาน / ประชุม / สัมมนา / บูธ)
- วันและเวลา (กี่วัน)
- สถานที่จริง
- ขนาดพื้นที่หรือขนาดจอที่ต้องการ (ถ้าทราบ)

แค่นี้ก็รับใบเสนอราคาได้ภายใน 30 นาทีครับ
  `,
  "p25-vs-p39-difference": `
## P2.5 vs P3.9 — ต่างกันอย่างไร?

Pixel Pitch คือระยะห่างระหว่าง LED สองจุด วัดเป็นมิลลิเมตร ยิ่งน้อยยิ่งดี แต่ราคายิ่งสูง

## P2.5 — Indoor Premium

เหมาะกับ: งานที่ผู้ชมอยู่ใกล้จอ ระยะ 2–10 เมตร

- งานแต่งงานในโรงแรม
- ห้องประชุมขนาดเล็ก-กลาง
- สถานที่ที่ต้องการความคมชัดสูง

## P3.9 — Standard Pro

เหมาะกับ: งานที่ผู้ชมอยู่ไกลจากจอ ระยะ 4–50 เมตร

- งานสัมมนาขนาดใหญ่
- บูธนิทรรศการ
- ประชุมองค์กร
- งาน Outdoor

## ตัดสินใจง่ายๆ ด้วยสูตรนี้

**ระยะดูใกล้สุด (เมตร) × 1.5 = Pixel Pitch ที่ควรใช้ (mm)**

ตัวอย่าง: ผู้ชมนั่งใกล้สุด 3 เมตร → 3 × 1.5 = 4.5mm → ใช้ P3.9 ก็เพียงพอแล้ว

## สรุป

ถ้าไม่แน่ใจ แนะนำโทรมาบอกขนาดห้องและจำนวนผู้เข้าร่วมงาน ทีมงานจะแนะนำจอที่เหมาะสมที่สุดให้ฟรีครับ
  `,
  "wedding-led-checklist": `
## Timeline จอ LED สำหรับงานแต่งงาน

การวางแผนจอ LED ให้ดีต้องเริ่มตั้งแต่เนิ่นๆ โดยเฉพาะช่วง High Season

## 3 เดือนก่อนงาน

- ✓ จองสถานที่และยืนยัน Layout ห้อง
- ✓ ติดต่อสอบถามผู้ให้บริการจอ LED เปรียบเทียบ 2–3 เจ้า
- ✓ แจ้งขนาดเวทีและพื้นที่ติดตั้งเบื้องต้น

## 1–2 เดือนก่อนงาน (แนะนำจองในช่วงนี้)

- ✓ ยืนยันขนาดจอและตำแหน่งติดตั้ง
- ✓ เซ็นสัญญาและวางมัดจำ
- ✓ ส่ง Content สำหรับทดสอบ (ถ้ามี)

## 2 สัปดาห์ก่อนงาน

- ✓ ยืนยันวันและเวลาติดตั้ง
- ✓ ส่งไฟล์ Content ที่ใช้จริง (Photo Slideshow, Intro VDO)
- ✓ ตรวจสอบ Spec ไฟล์: Full HD 1920×1080 หรือตามอัตราส่วนจอ

## วันซ้อมงาน (1 วันก่อน)

- ✓ ทีมช่างติดตั้งจอ
- ✓ Test สัญญาณจาก Laptop ของงานแต่ง
- ✓ ปรับความสว่างให้เหมาะกับแสงในห้อง
- ✓ ซ้อม Cue กับ MC และช่างแสง

## วันงานจริง

- ✓ ช่างเทคนิค JC LED อยู่ประจำตลอดงาน
- ✓ มีจอสำรองพร้อม
- ✓ รื้อถอนหลังงานเสร็จ ไม่กระทบการทำความสะอาดสถานที่

## Checklist ไฟล์ Content

- รูป Pre-wedding: JPG/PNG ความละเอียดไม่ต่ำกว่า 1920×1080px
- VDO Highlight: MP4, H.264, Bitrate ≥ 10Mbps
- ชื่อบ่าวสาว/โลโก้: PNG พื้นหลังใส (Transparent)
  `,
};

// ============================================================
// GENERATE STATIC PARAMS
// ============================================================
export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// ============================================================
// GENERATE METADATA
// ============================================================
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "ไม่พบบทความ" };

  return {
    title: `${post.title} | JC VIDEO & LED`,
    description: post.excerpt,
    keywords: [post.keywords, "เช่าจอ LED", "JC VIDEO & LED"],
    alternates: { canonical: `https://www.jcled.co.th/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.jcled.co.th/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

// ============================================================
// PAGE COMPONENT
// ============================================================
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const content = articleContent[params.slug] || "";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "JC VIDEO & LED",
      url: "https://www.jcled.co.th",
    },
    publisher: {
      "@type": "Organization",
      name: "JC VIDEO & LED",
      logo: { "@type": "ImageObject", url: "https://www.jcled.co.th/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.jcled.co.th/blog/${post.slug}` },
    keywords: post.keywords,
  };

  // แปลง Markdown-like content เป็น HTML อย่างง่าย
  const renderContent = (text: string) => {
    const lines = text.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let ulBuffer: string[] = [];

    const flushUl = (key: string) => {
      if (ulBuffer.length > 0) {
        elements.push(
          <ul key={key}>
            {ulBuffer.map((item, i) => <li key={i}>{item.replace(/^- ✓?\s*/, "")}</li>)}
          </ul>
        );
        ulBuffer = [];
      }
    };

    lines.forEach((line, i) => {
      if (line.startsWith("## ")) {
        flushUl(`ul-${i}`);
        elements.push(<h2 key={i}>{line.replace("## ", "")}</h2>);
      } else if (line.startsWith("- ")) {
        ulBuffer.push(line);
      } else if (line.startsWith("**") && line.endsWith("**")) {
        flushUl(`ul-${i}`);
        elements.push(<p key={i}><strong>{line.replace(/\*\*/g, "")}</strong></p>);
      } else if (line.trim()) {
        flushUl(`ul-${i}`);
        elements.push(<p key={i}>{line}</p>);
      }
    });
    flushUl("final");
    return elements;
  };

  const relatedPosts = blogPosts.filter((p) => p.slug !== params.slug).slice(0, 2);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Navbar />
      <main>

        {/* HERO */}
        <header className="py-12 px-4" style={{ background: post.bg }}>
          <div className="container-main" style={{ maxWidth: "720px" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: post.catColor }}>
              {post.cat}
            </p>
            <h1 className="text-3xl font-black mb-4" style={{ color: "#111", letterSpacing: "-0.5px", lineHeight: 1.2 }}>
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-xs" style={{ color: "#666" }}>
              <time dateTime={post.date}>{post.dateDisplay}</time>
              <span>·</span>
              <span>อ่าน {post.readTime} นาที</span>
              <span>·</span>
              <span>โดย JC VIDEO &amp; LED</span>
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
                <Link href="/blog" itemProp="item" className="no-underline" style={{ color: "#666" }}><span itemProp="name">บทความ</span></Link>
                <meta itemProp="position" content="2" />
              </li>
              <li style={{ color: "#999" }}>/</li>
              <li><span style={{ color: "#111", fontWeight: 500 }}>{post.title}</span></li>
            </ol>
          </div>
        </nav>

        {/* ARTICLE CONTENT */}
        <div className="section-pad px-4">
          <div className="container-main" style={{ maxWidth: "720px" }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* Main Content */}
              <article className="md:col-span-2 prose-thai" itemScope itemType="https://schema.org/BlogPosting">
                <p className="text-base leading-8 mb-6 font-medium" style={{ color: "#333" }}>
                  {post.excerpt}
                </p>
                <div itemProp="articleBody">
                  {renderContent(content)}
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-4">
                {/* CTA Box */}
                <div className="rounded-lg p-5 text-white" style={{ background: "#111" }}>
                  <p className="font-semibold text-sm mb-2">สนใจเช่าจอ LED?</p>
                  <p className="text-xs leading-6 mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
                    ปรึกษาฟรี รับใบเสนอราคาภายใน 30 นาที
                  </p>
                  <a href="tel:+66839425594" className="btn-primary w-full text-center text-xs block mb-2">
                    📞 083-942-5594
                  </a>
                  <a href="https://line.me/R/ti/p/@jcled" target="_blank" rel="noopener noreferrer" className="btn-line w-full text-center text-xs block">
                    LINE: @jcled
                  </a>
                </div>

                {/* Related Posts */}
                <div>
                  <h3 className="font-semibold text-sm mb-3" style={{ color: "#111" }}>บทความที่เกี่ยวข้อง</h3>
                  <div className="space-y-3">
                    {relatedPosts.map((p) => (
                      <Link key={p.slug} href={`/blog/${p.slug}`} className="card block p-3 no-underline">
                        <p className="text-xs font-semibold mb-1" style={{ color: "#E8001D" }}>{p.cat}</p>
                        <p className="text-xs leading-5" style={{ color: "#333" }}>{p.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
