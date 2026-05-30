import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "../page";

const articleContent: Record<string, string> = {
  "led-rental-price-2025": `## ปัจจัยที่กำหนดราคาเช่าจอ LED\n\nราคาเช่าจอ LED ไม่ได้มีตัวเลขตายตัว เพราะขึ้นอยู่กับปัจจัยหลายอย่าง\n\n## ปัจจัยที่ 1 — Pixel Pitch\n\n- P2.5 — ราคาสูงสุด เหมาะงานใกล้ชิด งานแต่งงาน ห้องประชุมเล็ก\n- P3.9 — ราคากลาง รองรับงานใหญ่ สัมมนา บูธ ประชุมใหญ่\n- P3.9 45° — ราคาพิเศษ สำหรับบูธมุมหรือดีไซน์โค้ง\n\n## ปัจจัยที่ 2 — ขนาดจอ\n\nคำนวณจากพื้นที่ กว้าง × สูง = ตร.ม. ยิ่งใหญ่ยิ่งราคาสูง\n\n## ปัจจัยที่ 3 — จำนวนวัน\n\nส่วนใหญ่คิดเป็นรายวัน ยิ่งเช่านานยิ่งได้ส่วนลด\n\n## วิธีขอใบเสนอราคาที่แม่นยำที่สุด\n\nบอกข้อมูลเหล่านี้มาพร้อมกัน\n- ประเภทงาน วันและเวลา สถานที่จริง ขนาดพื้นที่`,
  "p25-vs-p39-difference": `## P2.5 vs P3.9 ต่างกันอย่างไร?\n\nPixel Pitch คือระยะห่างระหว่าง LED สองจุด วัดเป็นมิลลิเมตร ยิ่งน้อยยิ่งดี\n\n## P2.5 — Indoor Premium\n\nเหมาะกับงานที่ผู้ชมอยู่ใกล้จอ ระยะ 2–10 เมตร\n- งานแต่งงานในโรงแรม\n- ห้องประชุมขนาดเล็ก-กลาง\n\n## P3.9 — Standard Pro\n\nเหมาะกับงานที่ผู้ชมอยู่ไกลจากจอ ระยะ 4–50 เมตร\n- งานสัมมนาขนาดใหญ่\n- บูธนิทรรศการ\n- งาน Outdoor\n\n## สูตรตัดสินใจง่ายๆ\n\nระยะดูใกล้สุด (เมตร) × 1.5 = Pixel Pitch ที่ควรใช้ (mm)`,
  "wedding-led-checklist": `## Timeline จอ LED สำหรับงานแต่งงาน\n\n## 3 เดือนก่อนงาน\n\n- จองสถานที่และยืนยัน Layout ห้อง\n- ติดต่อสอบถามผู้ให้บริการจอ LED\n\n## 1–2 เดือนก่อนงาน\n\n- ยืนยันขนาดจอและตำแหน่งติดตั้ง\n- เซ็นสัญญาและวางมัดจำ\n\n## 2 สัปดาห์ก่อนงาน\n\n- ยืนยันวันและเวลาติดตั้ง\n- ส่งไฟล์ Content ที่ใช้จริง\n\n## วันงานจริง\n\n- ช่างเทคนิค JC LED อยู่ประจำตลอดงาน\n- มีจอสำรองพร้อม\n- รื้อถอนหลังงานเสร็จ`,
};

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "ไม่พบบทความ" };
  return { title: `${post.title} | JC VIDEO & LED`, description: post.excerpt, alternates: { canonical: `https://www.jcled.co.th/blog/${post.slug}` }, openGraph: { title: post.title, description: post.excerpt, type: "article", publishedTime: post.date } };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  const content = articleContent[params.slug] || "";

  const renderContent = (text: string) => {
    const lines = text.trim().split("\n");
    const els: React.ReactNode[] = [];
    let ulBuf: string[] = [];
    const flushUl = (k: string) => { if (ulBuf.length) { els.push(<ul key={k}>{ulBuf.map((item, i) => <li key={i}>{item.replace(/^- /, "")}</li>)}</ul>); ulBuf = []; } };
    lines.forEach((line, i) => {
      if (line.startsWith("## ")) { flushUl(`u${i}`); els.push(<h2 key={i}>{line.slice(3)}</h2>); }
      else if (line.startsWith("- ")) { ulBuf.push(line); }
      else if (line.trim()) { flushUl(`u${i}`); els.push(<p key={i}>{line}</p>); }
    });
    flushUl("final");
    return els;
  };

  const related = blogPosts.filter((p) => p.slug !== params.slug).slice(0, 2);

  return (
    <>
      <Navbar />
      <main>
        <header className="py-12 px-4" style={{ background: post.bg }}>
          <div className="container-main" style={{ maxWidth: "720px" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: post.catColor }}>{post.cat}</p>
            <h1 className="text-3xl font-black mb-4" style={{ color: "#111" }}>{post.title}</h1>
            <div className="flex items-center gap-3 text-xs" style={{ color: "#666" }}>
              <time dateTime={post.date}>{post.dateDisplay}</time><span>·</span><span>อ่าน {post.readTime} นาที</span><span>·</span><span>โดย JC VIDEO &amp; LED</span>
            </div>
          </div>
        </header>
        <nav aria-label="Breadcrumb" className="px-4 py-3 border-b" style={{ borderColor: "#E5E5E5" }}>
          <div className="container-main"><ol className="flex gap-2 text-xs list-none p-0 m-0"><li><Link href="/" className="no-underline" style={{ color: "#666" }}>หน้าหลัก</Link></li><li style={{ color: "#999" }}>/</li><li><Link href="/blog" className="no-underline" style={{ color: "#666" }}>บทความ</Link></li><li style={{ color: "#999" }}>/</li><li style={{ color: "#111", fontWeight: 500 }}>{post.title}</li></ol></div>
        </nav>
        <div className="section-pad px-4">
          <div className="container-main" style={{ maxWidth: "720px" }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="md:col-span-2 prose-thai">
                <p className="text-base leading-8 mb-6 font-medium" style={{ color: "#333" }}>{post.excerpt}</p>
                {renderContent(content)}
              </article>
              <aside className="space-y-4">
                <div className="rounded-lg p-5 text-white" style={{ background: "#111" }}>
                  <p className="font-semibold text-sm mb-2">สนใจเช่าจอ LED?</p>
                  <p className="text-xs leading-6 mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>ปรึกษาฟรี รับใบเสนอราคาภายใน 30 นาที</p>
                  <a href="tel:+66839425594" className="btn-primary w-full text-center text-xs block mb-2">📞 083-942-5594</a>
                  <a href="https://line.me/R/ti/p/@jcled" target="_blank" rel="noopener noreferrer" className="btn-line w-full text-center text-xs block">LINE: @jcled</a>
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-3">บทความที่เกี่ยวข้อง</h3>
                  {related.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="card block p-3 no-underline mb-3">
                      <p className="text-xs font-semibold mb-1" style={{ color: "#E8001D" }}>{p.cat}</p>
                      <p className="text-xs leading-5" style={{ color: "#333" }}>{p.title}</p>
                    </Link>
                  ))}
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
