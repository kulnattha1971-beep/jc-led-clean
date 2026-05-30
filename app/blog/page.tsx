import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "บทความเช่าจอ LED | คู่มือและเคล็ดลับจากผู้เชี่ยวชาญ 20 ปี",
  description:
    "บทความและคู่มือเช่าจอ LED จากทีมผู้เชี่ยวชาญ JC VIDEO & LED ประสบการณ์กว่า 20 ปี ครอบคลุมราคา สเปก และเคล็ดลับการเลือกจอ",
  alternates: { canonical: "https://www.jcled.co.th/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>

        <header className="py-16 px-4 text-center" style={{ background: "#111" }}>
          <div className="container-main" style={{ maxWidth: "680px" }}>
            <span className="section-label" style={{ color: "#E8001D" }}>บทความ</span>
            <h1 className="text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.5px" }}>
              คู่มือ<span style={{ color: "#E8001D" }}>เช่าจอ LED</span><br />จากผู้เชี่ยวชาญ
            </h1>
            <p className="text-sm leading-8" style={{ color: "rgba(255,255,255,0.6)" }}>
              ข้อมูลจากประสบการณ์กว่า 20 ปีในวงการ<br />
              ครอบคลุมราคา สเปก เคล็ดลับ และการวางแผนงาน
            </p>
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
              <li><span style={{ color: "#111", fontWeight: 500 }}>บทความ</span></li>
            </ol>
          </div>
        </nav>

        <section className="section-pad px-4">
          <div className="container-main">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <Link href={`/blog/${post.slug}`} className="card block no-underline overflow-hidden group">
                    <div
                      className="relative flex items-center justify-center text-5xl"
                      style={{ background: post.bg, height: "140px" }}
                      role="img"
                      aria-label={post.imageAlt}
                    >
                      {post.emoji}
                    </div>

                    <div className="p-4">
                      <p
                        className="text-xs font-semibold mb-2 uppercase tracking-wide"
                        style={{ color: post.catColor }}
                        itemProp="keywords"
                      >
                        {post.cat}
                      </p>
                      <h2
                        className="font-semibold text-sm leading-6 mb-2 group-hover:text-red-500 transition-colors"
                        style={{ color: "#111" }}
                        itemProp="headline"
                      >
                        {post.title}
                      </h2>
                      <p className="text-xs leading-6 mb-3" style={{ color: "#666" }} itemProp="description">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs" style={{ color: "#999" }}>
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
