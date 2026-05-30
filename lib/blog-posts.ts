export type BlogPost = {
  slug: string;
  cat: string;
  catColor: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  dateDisplay: string;
  keywords: string;
  bg: string;
  emoji: string;
  imageAlt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "led-rental-price-2025",
    cat: "ราคา & งบประมาณ",
    catColor: "#E8001D",
    title: "เช่าจอ LED ราคาเท่าไหร่? คำนวณงบแบบมือโปร [2025]",
    excerpt:
      "รวมปัจจัยที่กำหนดราคาเช่าจอ LED ทั้งหมด ตั้งแต่ Pixel Pitch, ขนาด, ระยะเวลา และค่าติดตั้ง พร้อมตัวอย่างการคำนวณงบประมาณจริง",
    readTime: "5",
    date: "2025-01-15",
    dateDisplay: "15 ม.ค. 2025",
    keywords: "เช่าจอ LED ราคา",
    bg: "#FFF0F0",
    emoji: "💰",
    imageAlt: "เช่าจอ LED ราคา 2025 คู่มือคำนวณงบประมาณ",
  },
  {
    slug: "p25-vs-p39-difference",
    cat: "เปรียบเทียบสเปก",
    catColor: "#2563EB",
    title: "P2.5 vs P3.9 ต่างกันอย่างไร? เลือกแบบไหนให้เหมาะงาน",
    excerpt:
      "อธิบายความแตกต่างของ Pixel Pitch แบบเข้าใจง่าย พร้อมคำแนะนำว่างานแบบไหนควรใช้จอรุ่นไหน ไม่ต้องมีพื้นฐานด้านเทคนิค",
    readTime: "7",
    date: "2025-01-08",
    dateDisplay: "8 ม.ค. 2025",
    keywords: "P2.5 vs P3.9 จอ LED",
    bg: "#EFF6FF",
    emoji: "⚖️",
    imageAlt: "เปรียบเทียบจอ LED P2.5 กับ P3.9 ต่างกันอย่างไร",
  },
  {
    slug: "wedding-led-checklist",
    cat: "งานแต่งงาน",
    catColor: "#7C3AED",
    title: "เช็กลิสต์งานแต่ง: จอ LED ต้องจองล่วงหน้ากี่วัน?",
    excerpt:
      "Timeline การเตรียมงานแต่งงานฝั่ง AV และจอ LED ตั้งแต่จองสถานที่จนถึงวันงาน พร้อม Checklist พิมพ์ใช้ได้เลย",
    readTime: "4",
    date: "2024-12-20",
    dateDisplay: "20 ธ.ค. 2024",
    keywords: "เช่าจอ LED งานแต่ง จองล่วงหน้า",
    bg: "#F5F3FF",
    emoji: "💍",
    imageAlt: "เช็กลิสต์จอ LED งานแต่งงาน จองล่วงหน้ากี่วัน",
  },
];

/** 301 จาก slug เก่า (ภาษาไทย) ที่เคยใช้ใน sitemap / หน้าแรก */
export const legacyBlogSlugRedirects: Record<string, string> = {
  "เช่าจอ-led-ราคา-2025": "led-rental-price-2025",
  "p25-vs-p39-ต่างกันอย่างไร": "p25-vs-p39-difference",
  "เช็กลิสต์งานแต่ง-จอ-led": "wedding-led-checklist",
};
