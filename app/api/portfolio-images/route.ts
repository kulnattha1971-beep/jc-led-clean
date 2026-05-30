import { NextResponse } from "next/server";
import { readdirSync, existsSync } from "fs";
import path from "path";

export async function GET() {
  try {
    const dir = path.join(process.cwd(), "public", "portfolio");
    if (!existsSync(dir)) return NextResponse.json({ images: [] });
    const exts = [".jpg",".jpeg",".png",".webp"];
    const catMap: Record<string,string> = { wedding:"งานแต่งงาน", seminar:"สัมมนา", meeting:"ประชุม", booth:"ออกบูธ", general:"ทั่วไป" };
    const images = readdirSync(dir)
      .filter((f) => exts.includes(path.extname(f).toLowerCase()))
      .map((f) => { const cat = f.split("-")[0]; return { filename: f, url: `/portfolio/${f}`, category: cat, categoryLabel: catMap[cat] || "ทั่วไป" }; })
      .sort((a, b) => b.filename.localeCompare(a.filename));
    return NextResponse.json({ images, total: images.length });
  } catch { return NextResponse.json({ images: [] }); }
}
