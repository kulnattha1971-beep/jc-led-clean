import Link from "next/link";

const serviceLinks = [
  { href: "/services/led-wedding", label: "เช่าจอ LED งานแต่งงาน" },
  { href: "/services/led-meeting", label: "เช่าจอ LED ประชุม" },
  { href: "/services/led-seminar", label: "เช่าจอ LED สัมมนา" },
  { href: "/services/led-booth", label: "จอ LED ออกบูธ / นิทรรศการ" },
];

const infoLinks = [
  { href: "/portfolio", label: "ผลงานที่ผ่านมา" },
  { href: "/blog", label: "บทความ / คู่มือ" },
  { href: "/contact", label: "ติดต่อเรา" },
];

const serviceAreas = [
  "กรุงเทพฯ ทุกเขต",
  "สุขุมวิท · สีลม",
  "ลาดพร้าว · รัชดา",
  "อิมแพค เมืองทองธานี",
  "นนทบุรี · ปทุมธานี",
  "สมุทรปราการ",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-brand-black text-white"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      {/* CTA Strip */}
      <div style={{ background: "#E8001D" }} className="py-4 px-4">
        <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-semibold text-sm">
            📞 พร้อมให้คำปรึกษาฟรี ตลอด 24 ชั่วโมง
          </p>
          <div className="flex gap-2">
            <a
              href="tel:+66839425594"
              className="bg-white px-4 py-2 rounded text-xs font-semibold"
              style={{ color: "#E8001D" }}
              aria-label="โทร 083-942-5594"
            >
              โทร 083-942-5594
            </a>
            <a
              href="https://line.me/R/ti/p/@jcled"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded text-xs font-semibold border border-white text-white"
              aria-label="ติดต่อ LINE"
            >
              LINE: @jcled
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded flex items-center justify-center text-white font-black text-sm"
                style={{ background: "#E8001D" }}
              >
                JC
              </div>
              <div>
                <div
                  className="font-bold text-sm"
                  itemProp="name"
                >
                  JC VIDEO &amp; LED
                </div>
                <div className="text-xs opacity-50">เช่าจอ LED มืออาชีพ</div>
              </div>
            </div>
            <p
              className="text-xs leading-7 opacity-50 mb-4"
              itemProp="description"
            >
              บริษัท เจซี วีดีโอ-โปรเจคเตอร์ จำกัด<br />
              บริการเช่าจอ LED กรุงเทพฯ ครบวงจร<br />
              ประสบการณ์กว่า 20 ปี
            </p>
            {/* Schema hidden fields */}
            <span itemProp="telephone" className="sr-only">
              +66839425594
            </span>
            <span
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
              className="sr-only"
            >
              <span itemProp="addressLocality">กรุงเทพมหานคร</span>
              <span itemProp="addressCountry">TH</span>
            </span>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-4">
              บริการ
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-white opacity-60 hover:opacity-100 no-underline transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-4">
              ข้อมูล
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-white opacity-60 hover:opacity-100 no-underline transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas — SEO สำคัญมาก */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-4">
              พื้นที่ให้บริการ
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {serviceAreas.map((area) => (
                <li key={area} className="text-xs opacity-60">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="border-t mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p className="text-xs opacity-40">
            © {currentYear} บริษัท เจซี วีดีโอ-โปรเจคเตอร์ จำกัด · กรุงเทพมหานคร ·
            สงวนลิขสิทธิ์
          </p>
          <div
            className="flex items-center gap-2 text-xs px-3 py-1.5 rounded"
            style={{
              background: "rgba(232,0,29,0.15)",
              border: "1px solid rgba(232,0,29,0.3)",
              color: "#E8001D",
            }}
          >
            ✓ LocalBusiness Schema · ✓ Open Graph · ✓ Sitemap.xml
          </div>
        </div>
      </div>
    </footer>
  );
}
