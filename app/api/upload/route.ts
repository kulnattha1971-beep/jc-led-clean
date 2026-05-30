import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const category = (formData.get("category") as string) || "general";
    if (!file) return NextResponse.json({ error: "ไม่พบไฟล์" }, { status: 400 });
    const allowedTypes = ["image/jpeg","image/jpg","image/png","image/webp"];
    if (!allowedTypes.includes(file.type)) return NextResponse.json({ error: "รองรับเฉพาะ JPG, PNG, WEBP" }, { status: 400 });
    if (file.size > 10 * 1024 * 1024) return NextResponse.json({ error: "ไฟล์ใหญ่เกิน 10MB" }, { status: 400 });
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uploadDir = path.join(process.cwd(), "public", "portfolio");
    if (!existsSync(uploadDir)) await mkdir(uploadDir, { recursive: true });
    const timestamp = Date.now();
    const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const safeName = `${category}-${timestamp}.${ext}`;
    await writeFile(path.join(uploadDir, safeName), buffer);
    return NextResponse.json({ success: true, url: `/portfolio/${safeName}`, filename: safeName, size: file.size, category });
  } catch (error) {
    return NextResponse.json({ error: "อัพโหลดไม่สำเร็จ" }, { status: 500 });
  }
}
