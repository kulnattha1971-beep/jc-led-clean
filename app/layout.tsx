import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-prompt",
  display: "swap",
});

// ============================================================
// GLOBAL SEO METADATA
// ทุก page สามารถ override ส่วนนี้ได้ผ่าน generateMetadata()
// ============================================================
export const metadata: Metadata = {
  metadataBase: new URL("https://www.jcled.co.th"),
  title: {
    default: "เช่าจอ LED กรุงเทพ | JC VIDEO & LED ประสบการณ์กว่า 20 ปี",
    template: "%s | JC VIDEO & LED เช่าจอ LED กรุงเทพ",
  },
  description:
    "บริการเช่าจอ LED กรุงเทพฯ ครบวงจร ติดตั้งฟรี มีช่างคุมงานตลอด พร้อมจอสำรอง จอ P2.5 / P3.9 / P3.9 45° รับงานแต่งงาน ประชุม สัมมนา ออกบูธ โทร 083-942-5594",
  keywords: [
    "เช่าจอ LED",
    "เช่าจอ LED กรุงเทพ",
    "เช่าจอ LED ราคา",
    "เช่าจอ LED งานแต่ง",
    "เช่าจอ LED ประชุม",
    "เช่าจอ LED สัมมนา",
    "จอ LED ออกบูธ",
    "เช่าจอ LED สุขุมวิท",
    "เช่าจอ LED ลาดพร้าว",
    "เช่าจอ LED อิมแพค",
    "จอ LED P2.5",
    "จอ LED P3.9",
    "บริษัทเช่าจอ LED",
  ],
  authors: [{ name: "JC VIDEO & LED", url: "https://www.jcled.co.th" }],
  creator: "JC VIDEO & LED",
  publisher: "บริษัท เจซี วีดีโอ-โปรเจคเตอร์ จำกัด",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Open Graph — ใช้สำหรับ Share บน Facebook / LINE
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://www.jcled.co.th",
    siteName: "JC VIDEO & LED — เช่าจอ LED กรุงเทพ",
    title: "เช่าจอ LED กรุงเทพ | JC VIDEO & LED ประสบการณ์กว่า 20 ปี",
    description:
      "บริการเช่าจอ LED กรุงเทพฯ ครบวงจร ติดตั้งฟรี มีช่างคุมงานตลอด พร้อมจอสำรอง จอ P2.5 / P3.9 / P3.9 45°",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JC VIDEO & LED — บริการเช่าจอ LED กรุงเทพ ประสบการณ์กว่า 20 ปี",
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "เช่าจอ LED กรุงเทพ | JC VIDEO & LED",
    description: "ติดตั้งฟรี มีช่างคุมงาน พร้อมจอสำรอง โทร 083-942-5594",
    images: ["/og-image.jpg"],
  },
  // Canonical URL
  alternates: {
    canonical: "https://www.jcled.co.th",
  },
  verification: {
    google: "HUIYBTtTBZWq45KjbwxrVeskjwqr90tCatYbVfojiR0",
  },
};

// ============================================================
// SCHEMA JSON-LD — LocalBusiness + Organization
// Google ใช้ข้อมูลนี้แสดงใน Knowledge Panel และ Rich Results
// ============================================================
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.jcled.co.th/#localbusiness",
      name: "JC VIDEO & LED",
      alternateName: "บริษัท เจซี วีดีโอ-โปรเจคเตอร์ จำกัด",
      description:
        "บริการเช่าจอ LED กรุงเทพฯ ครบวงจร ประสบการณ์กว่า 20 ปี ติดตั้งฟรี มีช่างคุมงานตลอด พร้อมจอสำรอง",
      url: "https://www.jcled.co.th",
      telephone: "+66839425594",
      priceRange: "฿฿",
      image: "https://www.jcled.co.th/og-image.jpg",
      logo: "https://www.jcled.co.th/logo.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "กรุงเทพมหานคร",
        addressRegion: "Bangkok",
        addressCountry: "TH",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 13.756331,
        longitude: 100.501762,
      },
      areaServed: [
        { "@type": "City", name: "กรุงเทพมหานคร" },
        { "@type": "City", name: "นนทบุรี" },
        { "@type": "City", name: "ปทุมธานี" },
        { "@type": "City", name: "สมุทรปราการ" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday", "Sunday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+66839425594",
          contactType: "customer service",
          availableLanguage: ["Thai", "en"],
          areaServed: "TH",
        },
      ],
      sameAs: [
        "https://www.facebook.com/jcvideoled",
        "https://line.me/R/ti/p/@jcled",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "บริการเช่าจอ LED",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "เช่าจอ LED งานแต่งงาน",
              url: "https://www.jcled.co.th/services/led-wedding",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "เช่าจอ LED ประชุม",
              url: "https://www.jcled.co.th/services/led-meeting",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "เช่าจอ LED สัมมนา",
              url: "https://www.jcled.co.th/services/led-seminar",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "จอ LED ออกบูธ นิทรรศการ",
              url: "https://www.jcled.co.th/services/led-booth",
            },
          },
        ],
      },
      foundingDate: "2004",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: 10,
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.jcled.co.th/#website",
      url: "https://www.jcled.co.th",
      name: "JC VIDEO & LED",
      publisher: { "@id": "https://www.jcled.co.th/#localbusiness" },
      inLanguage: "th-TH",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={prompt.variable}>
      <head>
        {/* Schema JSON-LD — ยิ่งครบ ยิ่ง Rich Results เยอะ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Preconnect สำหรับ Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Favicon */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="font-prompt antialiased">{children}</body>
    </html>
  );
}
