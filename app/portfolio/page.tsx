"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Img { filename: string; url: string; category: string; categoryLabel: string; }
const filters = [{ key: "all", label: "ทั้งหมด" },{ key: "wedding", label: "งานแต่งงาน" },{ key: "seminar", label: "สัมมนา" },{ key: "booth", label: "ออกบูธ" },{ key: "meeting", label: "ประชุม" }];

export default function PortfolioPage() {
  const [active, setActive] = useState("all");
  const [images, setImages] = useState<Img[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/portfolio-images").then(r => r.json()).then(d => { setImages(d.images || []); setLoading(false); }).catch(() => setLoading(false));
  }, []);

  const filtered = active === "all" ? images : images.filter(i => i.category === active);

  return (
    <>
      <Navbar />
      <main>
        <header className="py-16 px-4 text-center" style={{ background: "#111" }}>
          <div className="container-main" style={{ maxWidth: "720px" }}>
            <span className="section-label" style={{ color: "#E8001D" }}>ผลงาน</span>
            <h1 className="text-4xl font-black text-white mb-4">ผลงานที่ผ่านมา<br /><span style={{ color: "#E8001D" }}>500+ โปรเจกต์</span></h1>
            <p className="text-sm leading-8" style={{ color: "rgba(255,255,255,0.6)" }}>รูปหน้างานจริง ทุกงานมีช่างของเราดูแลตลอด</p>
          </div>
        </header>
        <section className="section-pad px-4">
          <div className="container-main">
            <div className="flex flex-wrap gap-2 mb-8">
              {filters.map(f => (
                <button key={f.key} onClick={() => setActive(f.key)} className="pill cursor-pointer border-none transition-all"
                  style={active === f.key ? { background: "#E8001D", color: "white", borderColor: "#E8001D" } : { background: "#F7F7F7", borderColor: "#E5E5E5", color: "#333" }}>
                  {f.label}
                </button>
              ))}
              <Link href="/admin" className="pill no-underline ml-auto" style={{ background: "#111", color: "white", borderColor: "#111" }}>+ เพิ่มรูป</Link>
            </div>
            {loading && <div className="text-center py-16"><div className="inline-block w-8 h-8 rounded-full border-2 animate-spin" style={{ borderColor: "#E5E5E5", borderTopColor: "#E8001D" }}></div></div>}
            {!loading && images.length === 0 && (
              <div className="text-center py-16 border-2 border-dashed rounded-xl" style={{ borderColor: "#E5E5E5" }}>
                <p className="text-2xl mb-3">📷</p>
                <p className="font-semibold text-sm mb-2">ยังไม่มีรูปภาพ</p>
                <p className="text-xs mb-4" style={{ color: "#999" }}>อัพโหลดรูปหน้างานจริงผ่านหน้า Admin</p>
                <Link href="/admin" className="btn-primary text-xs">ไปหน้า Admin อัพโหลดรูป →</Link>
              </div>
            )}
            {!loading && filtered.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filtered.map(img => (
                  <article key={img.filename} className="card overflow-hidden group">
                    <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                      <Image src={img.url} alt={`เช่าจอ LED ${img.categoryLabel} กรุงเทพ — JC VIDEO & LED`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(0,0,0,0.4) 0%,transparent 60%)" }} />
                      <span className="absolute top-3 left-3 text-white text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: "#E8001D" }}>{img.categoryLabel}</span>
                    </div>
                    <div className="p-3"><p className="text-xs" style={{ color: "#666" }}>เช่าจอ LED {img.categoryLabel} · JC VIDEO &amp; LED กรุงเทพ</p></div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
        <section className="py-16 px-4 text-center text-white" style={{ background: "#111" }}>
          <h2 className="text-3xl font-black mb-3">งานของคุณ<br /><span style={{ color: "#E8001D" }}>จะเป็นผลงานต่อไปของเรา</span></h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a href="tel:+66839425594" className="btn-primary">📞 083-942-5594</a>
            <a href="https://line.me/R/ti/p/@jcled" target="_blank" rel="noopener noreferrer" className="btn-line">LINE: @jcled</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
