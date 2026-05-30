"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ============================================================
// PORTFOLIO DATA — แทนที่ imageSrc ด้วยรูปจริงใน /public/portfolio/
// ============================================================
const portfolioItems = [
  { id: 1, type: "wedding", typeLabel: "งานแต่งงาน", title: "งานแต่งงาน โรงแรมสุขุมวิท", desc: "จอ P2.5 ขนาด 6×3.375m ติดตั้ง Backdrop เวทีพิธี", spec: "P2.5 · 6×3.375m", location: "โรงแรม · สุขุมวิท", imageSrc: "/portfolio/wedding-01.jpg", imageAlt: "เช่าจอ LED งานแต่งงาน โรงแรมสุขุมวิท กรุงเทพ จอ P2.5", bg: "#1a1a2e" },
  { id: 2, type: "seminar", typeLabel: "สัมมนา", title: "งานสัมมนาองค์กร อิมแพค", desc: "จอ P3.9 ขนาด 8×4.5m พร้อม Side Screen สองข้าง", spec: "P3.9 · 8×4.5m", location: "อิมแพค เมืองทองธานี", imageSrc: "/portfolio/seminar-01.jpg", imageAlt: "เช่าจอ LED สัมมนา อิมแพค เมืองทองธานี จอ P3.9", bg: "#0f2040" },
  { id: 3, type: "booth", typeLabel: "ออกบูธ", title: "บูธ Expo ลาดพร้าว", desc: "จอ P3.9 45° มุมโค้งสำหรับบูธมุม ดึงดูดผู้เข้าชมจากทุกทิศ", spec: "P3.9 45° · Corner Booth", location: "Exhibition Hall · ลาดพร้าว", imageSrc: "/portfolio/booth-01.jpg", imageAlt: "จอ LED ออกบูธ P3.9 45 องศา นิทรรศการ ลาดพร้าว กรุงเทพ", bg: "#1a0a00" },
  { id: 4, type: "meeting", typeLabel: "ประชุม", title: "ห้องประชุมบริษัท CBD", desc: "จอ P3.9 ขนาด 4×2.25m ติดตั้งในห้องประชุมชั้น 20", spec: "P3.9 · 4×2.25m", location: "อาคารสำนักงาน · สีลม", imageSrc: "/portfolio/meeting-01.jpg", imageAlt: "เช่าจอ LED ประชุม สำนักงาน สีลม CBD กรุงเทพ จอ P3.9", bg: "#001a0a" },
  { id: 5, type: "wedding", typeLabel: "งานแต่งงาน", title: "งานแต่งงาน โรงแรมลาดพร้าว", desc: "จอ P2.5 ขนาด 5×2.8m พร้อมจอข้างเวทีอีก 2 จอ", spec: "P2.5 · 5×2.8m + Side", location: "โรงแรม · ลาดพร้าว", imageSrc: "/portfolio/wedding-02.jpg", imageAlt: "เช่าจอ LED งานแต่งงาน โรงแรมลาดพร้าว กรุงเทพ", bg: "#1a0a1a" },
  { id: 6, type: "booth", typeLabel: "ออกบูธ", title: "งาน Expo BITEC บางนา", desc: "จอ P3.9 ขนาด 6×3m Inline Booth แสดงสินค้า", spec: "P3.9 · 6×3m", location: "BITEC · บางนา", imageSrc: "/portfolio/booth-02.jpg", imageAlt: "จอ LED ออกบูธ BITEC บางนา กรุงเทพ นิทรรศการ P3.9", bg: "#0a1a1a" },
  { id: 7, type: "seminar", typeLabel: "สัมมนา", title: "งาน Conference Royal Paragon", desc: "จอ P3.9 ขนาด 10×5.625m งานสัมมนาใหญ่ 1,500 คน", spec: "P3.9 · 10×5.625m", location: "Royal Paragon Hall · Siam", imageSrc: "/portfolio/seminar-02.jpg", imageAlt: "เช่าจอ LED สัมมนาใหญ่ Royal Paragon Hall สยาม กรุงเทพ", bg: "#1a1a00" },
  { id: 8, type: "wedding", typeLabel: "งานแต่งงาน", title: "งานแต่งงาน Grand Ballroom", desc: "จอ P2.5 ขนาด 7×3.9m ห้อง Grand Ballroom จุ 800 คน", spec: "P2.5 · 7×3.9m", location: "Grand Ballroom · กรุงเทพ", imageSrc: "/portfolio/wedding-03.jpg", imageAlt: "เช่าจอ LED งานแต่งงาน Grand Ballroom กรุงเทพ P2.5 ขนาดใหญ่", bg: "#0a0a1a" },
  { id: 9, type: "meeting", typeLabel: "ประชุม", title: "Annual Meeting บริษัทมหาชน", desc: "จอ P3.9 ขนาด 6×3.375m งานประชุมผู้ถือหุ้น", spec: "P3.9 · 6×3.375m", location: "Convention Hall · กรุงเทพ", imageSrc: "/portfolio/meeting-02.jpg", imageAlt: "เช่าจอ LED ประชุมผู้ถือหุ้น Annual Meeting กรุงเทพ จอ P3.9", bg: "#001010" },
];

const filters = [
  { key: "all", label: "ทั้งหมด" },
  { key: "wedding", label: "งานแต่งงาน" },
  { key: "seminar", label: "สัมมนา" },
  { key: "booth", label: "ออกบูธ" },
  { key: "meeting", label: "ประชุม" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? portfolioItems : portfolioItems.filter((p) => p.type === active);

  return (
    <>
      <Navbar />
      <main>

        {/* HERO */}
        <header className="py-16 px-4 text-center" style={{ background: "#111" }}>
          <div className="container-main" style={{ maxWidth: "720px" }}>
            <span className="section-label" style={{ color: "#E8001D" }}>ผลงาน</span>
            <h1 className="text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.5px" }}>
              ผลงานที่ผ่านมา<br />
              <span style={{ color: "#E8001D" }}>500+ โปรเจกต์</span>
            </h1>
            <p className="text-sm leading-8" style={{ color: "rgba(255,255,255,0.6)" }}>
              รูปหน้างานจริง ไม่มี Stock Photo<br />
              ทุกงานมีช่างของเราดูแลตลอด
            </p>
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
              <li><span style={{ color: "#111", fontWeight: 500 }}>ผลงาน</span></li>
            </ol>
          </div>
        </nav>

        {/* FILTER + GRID */}
        <section className="section-pad px-4" aria-labelledby="portfolio-heading">
          <div className="container-main">

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="กรองตามประเภทงาน">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  className="pill cursor-pointer border-none transition-all"
                  style={
                    active === f.key
                      ? { background: "#E8001D", color: "white", borderColor: "#E8001D" }
                      : { background: "#F7F7F7", borderColor: "#E5E5E5", color: "#333" }
                  }
                  aria-pressed={active === f.key}
                >
                  {f.label}
                  {active === f.key && (
                    <span className="ml-1.5 text-xs opacity-75">({filtered.length})</span>
                  )}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filtered.map((item) => (
                <article
                  key={item.id}
                  className="card overflow-hidden group"
                  itemScope
                  itemType="https://schema.org/CreativeWork"
                >
                  {/* Portfolio Image */}
                  <div
                    className="relative overflow-hidden"
                    style={{ background: item.bg, aspectRatio: "4/3" }}
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
                    <span
                      className="absolute top-3 left-3 text-white text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: "#E8001D" }}
                    >
                      {item.typeLabel}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-4">
                    <h2
                      className="font-semibold text-sm mb-1"
                      itemProp="name"
                      style={{ color: "#111" }}
                    >
                      {item.title}
                    </h2>
                    <p className="text-xs mb-2" style={{ color: "#666" }} itemProp="description">
                      {item.desc}
                    </p>
                    <div className="flex items-center justify-between text-xs" style={{ color: "#999" }}>
                      <span
                        className="font-medium px-2 py-0.5 rounded"
                        style={{ background: "#FFF0F0", color: "#E8001D" }}
                      >
                        {item.spec}
                      </span>
                      <span>📍 {item.location}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p style={{ color: "#999" }}>ยังไม่มีผลงานในหมวดนี้</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 text-center text-white" style={{ background: "#111" }}>
          <h2 className="text-3xl font-black mb-3">
            งานของคุณ<br />
            <span style={{ color: "#E8001D" }}>จะเป็นผลงานต่อไปของเรา</span>
          </h2>
          <p className="text-sm mb-8" style={{ opacity: 0.6 }}>
            โทรปรึกษาฟรี บอกประเภทงานและสถานที่ รับใบเสนอราคาทันที
          </p>
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
