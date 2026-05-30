"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/services/led-meeting", label: "บริการ", dropdown: true },
  { href: "/portfolio", label: "ผลงาน" },
  { href: "/blog", label: "บทความ" },
  { href: "/contact", label: "ติดต่อ" },
];

const serviceLinks = [
  { href: "/services/led-wedding", label: "เช่าจอ LED งานแต่งงาน" },
  { href: "/services/led-meeting", label: "เช่าจอ LED ประชุม" },
  { href: "/services/led-seminar", label: "เช่าจอ LED สัมมนา" },
  { href: "/services/led-booth", label: "จอ LED ออกบูธ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="เมนูหลัก"
      className={`sticky top-0 z-50 bg-white border-b border-brand-gray-mid transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 no-underline"
            aria-label="JC VIDEO & LED หน้าหลัก"
          >
            <div
              className="w-9 h-9 rounded flex items-center justify-center text-white font-black text-sm"
              style={{ background: "#E8001D" }}
            >
              JC
            </div>
            <div className="leading-tight">
              <div className="font-bold text-sm text-brand-black">
                JC VIDEO &amp; LED
              </div>
              <div className="text-xs font-light" style={{ color: "#E8001D" }}>
                เช่าจอ LED มืออาชีพ
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
            {/* บริการ Dropdown */}
            <li className="relative">
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="flex items-center gap-1 text-sm font-normal text-brand-black opacity-75 hover:opacity-100 hover:text-red cursor-pointer bg-transparent border-none"
                aria-expanded={serviceOpen}
                aria-haspopup="true"
              >
                บริการ
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                  className={`transition-transform ${serviceOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 8L2 4h8L6 8z" />
                </svg>
              </button>
              {serviceOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-brand-gray-mid rounded-lg shadow-md w-52 py-1 z-50">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-brand-black hover:text-red hover:bg-red-light no-underline"
                      onClick={() => setServiceOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li>
              <Link
                href="/portfolio"
                className={`text-sm no-underline transition-colors ${
                  pathname === "/portfolio"
                    ? "text-red font-medium"
                    : "text-brand-black opacity-75 hover:opacity-100 hover:text-red"
                }`}
              >
                ผลงาน
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`text-sm no-underline transition-colors ${
                  pathname?.startsWith("/blog")
                    ? "text-red font-medium"
                    : "text-brand-black opacity-75 hover:opacity-100 hover:text-red"
                }`}
              >
                บทความ
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`text-sm no-underline transition-colors ${
                  pathname === "/contact"
                    ? "text-red font-medium"
                    : "text-brand-black opacity-75 hover:opacity-100 hover:text-red"
                }`}
              >
                ติดต่อ
              </Link>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://line.me/R/ti/p/@jcled"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-line text-xs px-3 py-2"
              aria-label="ติดต่อผ่าน LINE"
            >
              LINE สอบถาม
            </a>
            <a
              href="tel:+66839425594"
              className="btn-primary text-xs px-3 py-2"
              aria-label="โทรหาเรา 083-942-5594"
            >
              📞 083-942-5594
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "ปิดเมนู" : "เปิดเมนู"}
            aria-expanded={mobileOpen}
          >
            <div className="w-5 h-0.5 bg-brand-black mb-1"></div>
            <div className="w-5 h-0.5 bg-brand-black mb-1"></div>
            <div className="w-5 h-0.5 bg-brand-black"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-brand-gray-mid bg-white">
          <div className="container-main py-4 flex flex-col gap-3">
            {serviceLinks.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-sm text-brand-black no-underline py-1"
                onClick={() => setMobileOpen(false)}
              >
                {s.label}
              </Link>
            ))}
            <Link
              href="/portfolio"
              className="text-sm text-brand-black no-underline py-1"
              onClick={() => setMobileOpen(false)}
            >
              ผลงาน
            </Link>
            <Link
              href="/blog"
              className="text-sm text-brand-black no-underline py-1"
              onClick={() => setMobileOpen(false)}
            >
              บทความ
            </Link>
            <Link
              href="/contact"
              className="text-sm text-brand-black no-underline py-1"
              onClick={() => setMobileOpen(false)}
            >
              ติดต่อ
            </Link>
            <div className="flex gap-2 pt-2 border-t border-brand-gray-mid">
              <a
                href="https://line.me/R/ti/p/@jcled"
                className="btn-line flex-1 text-center text-xs"
              >
                LINE สอบถาม
              </a>
              <a
                href="tel:+66839425594"
                className="btn-primary flex-1 text-center text-xs"
              >
                โทรเลย
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
