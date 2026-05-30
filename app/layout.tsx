import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({ subsets: ["thai", "latin"], weight: ["300","400","500","600","700","900"], variable: "--font-prompt", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jcled.co.th"),
  title: { default: "เช่าจอ LED กรุงเทพ | JC VIDEO & LED ประสบการณ์กว่า 20 ปี", template: "%s | JC VIDEO & LED เช่าจอ LED กรุงเทพ" },
  description: "บริการเช่าจอ LED กรุงเทพฯ ครบวงจร ติดตั้งฟรี มีช่างคุมงานตลอด พร้อมจอสำรอง จอ P2.5 / P3.9 / P3.9 45° รับงานแต่งงาน ประชุม สัมมนา ออกบูธ โทร 083-942-5594",
  keywords: ["เช่าจอ LED","เช่าจอ LED กรุงเทพ","เช่าจอ LED ราคา","เช่าจอ LED งานแต่ง","เช่าจอ LED ประชุม","เช่าจอ LED สัมมนา","จอ LED ออกบูธ","เช่าจอ LED สุขุมวิท","เช่าจอ LED ลาดพร้าว","เช่าจอ LED อิมแพค","จอ LED P2.5","จอ LED P3.9","บริษัทเช่าจอ LED"],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", locale: "th_TH", url: "https://www.jcled.co.th", siteName: "JC VIDEO & LED", title: "เช่าจอ LED กรุงเทพ | JC VIDEO & LED", description: "ติดตั้งฟรี มีช่างคุมงาน พร้อมจอสำรอง ประสบการณ์ 20+ ปี", images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "JC VIDEO & LED เช่าจอ LED กรุงเทพ" }] },
  twitter: { card: "summary_large_image", title: "เช่าจอ LED กรุงเทพ | JC VIDEO & LED", description: "ติดตั้งฟรี มีช่างคุมงาน พร้อมจอสำรอง โทร 083-942-5594", images: ["/og-image.jpg"] },
  alternates: { canonical: "https://www.jcled.co.th" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "LocalBusiness", "@id": "https://www.jcled.co.th/#localbusiness", name: "JC VIDEO & LED", alternateName: "บริษัท เจซี วีดีโอ-โปรเจคเตอร์ จำกัด", description: "บริการเช่าจอ LED กรุงเทพฯ ครบวงจร ประสบการณ์กว่า 20 ปี", url: "https://www.jcled.co.th", telephone: "+66839425594", priceRange: "฿฿", address: { "@type": "PostalAddress", addressLocality: "กรุงเทพมหานคร", addressRegion: "Bangkok", addressCountry: "TH" }, areaServed: [{ "@type": "City", name: "กรุงเทพมหานคร" }, { "@type": "City", name: "นนทบุรี" }, { "@type": "City", name: "ปทุมธานี" }, { "@type": "City", name: "สมุทรปราการ" }], openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }, contactPoint: [{ "@type": "ContactPoint", telephone: "+66839425594", contactType: "customer service", availableLanguage: "Thai" }], foundingDate: "2004" },
    { "@type": "WebSite", "@id": "https://www.jcled.co.th/#website", url: "https://www.jcled.co.th", name: "JC VIDEO & LED", inLanguage: "th" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={prompt.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-prompt antialiased">{children}</body>
    </html>
  );
}
