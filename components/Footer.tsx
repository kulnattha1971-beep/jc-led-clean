import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer role="contentinfo" className="bg-brand-black text-white">
      <div style={{ background: "#E8001D" }} className="py-4 px-4">
        <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-semibold text-sm">📞 พร้อมให้คำปรึกษาฟรี ตลอด 24 ชั่วโมง</p>
          <div className="flex gap-2">
            <a href="tel:+66839425594" className="bg-white px-4 py-2 rounded text-xs font-semibold" style={{ color: "#E8001D" }}>โทร 083-942-5594</a>
            <a href="https://line.me/R/ti/p/@jcled" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded text-xs font-semibold border border-white text-white">LINE: @jcled</a>
          </div>
        </div>
      </div>
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded flex items-center justify-center text-white font-black text-sm" style={{ background: "#E8001D" }}>JC</div>
              <div><div className="font-bold text-sm">JC VIDEO &amp; LED</div><div className="text-xs opacity-50">เช่าจอ LED มืออาชีพ</div></div>
            </div>
            <p className="text-xs leading-7 opacity-50 mb-4">บริษัท เจซี วีดีโอ-โปรเจคเตอร์ จำกัด<br />บริการเช่าจอ LED กรุงเทพฯ ครบวงจร<br />ประสบการณ์กว่า 20 ปี</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-4">บริการ</h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {[{ href: "/services/led-wedding", label: "เช่าจอ LED งานแต่งงาน" }, { href: "/services/led-meeting", label: "เช่าจอ LED ประชุม" }, { href: "/services/led-seminar", label: "เช่าจอ LED สัมมนา" }, { href: "/services/led-booth", label: "จอ LED ออกบูธ" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-xs text-white opacity-60 hover:opacity-100 no-underline">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-4">ข้อมูล</h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {[{ href: "/portfolio", label: "ผลงาน" }, { href: "/blog", label: "บทความ" }, { href: "/contact", label: "ติดต่อ" }].map((l) => (
                <li key={l.href}><Link href={l.href} className="text-xs text-white opacity-60 hover:opacity-100 no-underline">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-4">พื้นที่บริการ</h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {["กรุงเทพฯ ทุกเขต", "สุขุมวิท · สีลม", "ลาดพร้าว · รัชดา", "อิมแพค เมืองทองธานี", "นนทบุรี · ปทุมธานี", "สมุทรปราการ"].map((a) => (
                <li key={a} className="text-xs opacity-60">{a}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p className="text-xs opacity-40">© {year} บริษัท เจซี วีดีโอ-โปรเจคเตอร์ จำกัด · กรุงเทพมหานคร</p>
          <div className="text-xs px-3 py-1.5 rounded" style={{ background: "rgba(232,0,29,0.15)", border: "1px solid rgba(232,0,29,0.3)", color: "#E8001D" }}>
            ✓ LocalBusiness Schema · ✓ Open Graph · ✓ Sitemap.xml
          </div>
        </div>
      </div>
    </footer>
  );
}
