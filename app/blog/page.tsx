import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "บทความเช่าจอ LED | คู่มือจากผู้เชี่ยวชาญ 20 ปี",
  description: "บทความและคู่มือเช่าจอ LED จาก JC VIDEO & LED ครอบคลุมราคา สเปก และเคล็ดลับการเลือกจอ",
  alternates: { canonical: "https://www.jcled.co.th/blog" },
};

export const blogPosts = [
  { slug: "led-rental-price-2025", cat: "ราคา & งบประมาณ", catColor: "#E8001D", title: "เช่าจอ LED ราคาเท่าไหร่? คำนวณงบแบบมือโปร [2025]", excerpt: "รวมปัจจัยที่กำหนดราคาเช่าจอ LED ทั้งหมด ตั้งแต่ Pixel Pitch, ขนาด, ระยะเวลา และค่าติดตั้ง", readTime: "5", date: "2025-01-15", dateDisplay: "15 ม.ค. 2025", bg: "#FFF0F0", emoji: "💰" },
  { slug: "p25-vs-p39-difference", cat: "เปรียบเทียบสเปก", catColor: "#2563EB", title: "P2.5 vs P3.9 ต่างกันอย่างไร? เลือกแบบไหนให้เหมาะงาน", excerpt: "อธิบายความแตกต่างของ Pixel Pitch แบบเข้าใจง่าย พร้อมคำแนะนำว่างานแบบไหนควรใช้จอรุ่นไหน", readTime: "7", date: "2025-01-08", dateDisplay: "8 ม.ค. 2025", bg: "#EFF6FF", emoji: "⚖️" },
  { slug: "wedding-led-checklist", cat: "งานแต่งงาน", catColor: "#7C3AED", title: "เช็กลิสต์งานแต่ง: จอ LED ต้องจองล่วงหน้ากี่วัน?", excerpt: "Timeline การเตรียมงานแต่งงานฝั่ง AV และจอ LED ตั้งแต่จองสถานที่จนถึงวันงาน", readTime: "4", date: "2024-12-20", dateDisplay: "20 ธ.ค. 2024", bg: "#F5F3FF", emoji: "💍" },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <header className="py-16 px-4 text-center" style={{ background: "#111" }}>
          <div className="container-main" style={{ maxWidth: "680px" }}>
            <span className="section-label" style={{ color: "#E8001D" }}>บทความ</span>
            <h1 className="text-4xl font-black text-white mb-4">คู่มือ<span style={{ color: "#E8001D" }}>เช่าจอ LED</span><br />จากผู้เชี่ยวชาญ</h1>
          </div>
        </header>
        <section className="section-pad px-4">
          <div className="container-main">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {blogPosts.map((post) => (
                <article key={post.slug} itemScope itemType="https://schema.org/BlogPosting">
                  <Link href={`/blog/${post.slug}`} className="card block no-underline overflow-hidden group">
                    <div className="relative flex items-center justify-center text-5xl" style={{ background: post.bg, height: "140px" }}>{post.emoji}</div>
                    <div className="p-4">
                      <p className="text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: post.catColor }}>{post.cat}</p>
                      <h2 className="font-semibold text-sm leading-6 mb-2" style={{ color: "#111" }} itemProp="headline">{post.title}</h2>
                      <p className="text-xs leading-6 mb-3" style={{ color: "#666" }} itemProp="description">{post.excerpt}</p>
                      <div className="flex justify-between text-xs" style={{ color: "#999" }}>
                        <time dateTime={post.date} itemProp="datePublished">{post.dateDisplay}</time>
                        <span>อ่าน {post.readTime} นาที</span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
