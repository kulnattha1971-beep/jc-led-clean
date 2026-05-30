"use client";
import { useState, useCallback } from "react";
import Link from "next/link";

const categories = [
  { value: "wedding", label: "งานแต่งงาน", emoji: "💍" },
  { value: "seminar", label: "สัมมนา", emoji: "🎤" },
  { value: "meeting", label: "ประชุม", emoji: "🤝" },
  { value: "booth", label: "ออกบูธ", emoji: "🏪" },
];

interface UploadedImage { url: string; filename: string; category: string; altText?: string; }

export default function AdminPage() {
  const [selectedCategory, setSelectedCategory] = useState("wedding");
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [analyzingIndex, setAnalyzingIndex] = useState<number | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [message, setMessage] = useState<{ type: "success"|"error"; text: string }|null>(null);

  const showMessage = (type: "success"|"error", text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 4000);
  };

  const handleFiles = useCallback((newFiles: FileList | null) => {
    if (!newFiles) return;
    const arr = Array.from(newFiles).filter(f => f.type.startsWith("image/"));
    setFiles(arr);
    setPreviews(arr.map(f => URL.createObjectURL(f)));
  }, []);

  const handleUpload = async () => {
    if (!files.length) return;
    setUploading(true);
    const results: UploadedImage[] = [];
    for (const file of files) {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("category", selectedCategory);
      try {
        const res = await fetch("/api/upload", { method: "POST", body: fd });
        const data = await res.json();
        if (data.success) results.push({ url: data.url, filename: data.filename, category: selectedCategory });
      } catch { showMessage("error", `อัพโหลด ${file.name} ไม่สำเร็จ`); }
    }
    setUploadedImages(prev => [...results, ...prev]);
    setFiles([]); setPreviews([]);
    setUploading(false);
    showMessage("success", `อัพโหลดสำเร็จ ${results.length} รูป`);
  };

  const analyzeSEO = async (img: UploadedImage, index: number) => {
    setAnalyzingIndex(index);
    try {
      const catLabel = categories.find(c => c.value === img.category)?.label || img.category;
      const imgRes = await fetch(img.url);
      const blob = await imgRes.blob();
      const base64 = await new Promise<string>(resolve => {
        const reader = new FileReader();
        reader.onload = e => resolve((e.target?.result as string).split(",")[1]);
        reader.readAsDataURL(blob);
      });
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514", max_tokens: 500,
          messages: [{ role: "user", content: [
            { type: "image", source: { type: "base64", media_type: blob.type, data: base64 } },
            { type: "text", text: `SEO Specialist เว็บเช่าจอ LED กรุงเทพ ประเภทงาน: "${catLabel}" ตอบเป็น JSON เท่านั้น: {"altText":"alt text ภาษาไทย มีคำ เช่าจอ LED และ ${catLabel}","seoFilename":"ชื่อไฟล์ lowercase-hyphen.jpg"}` }
          ]}]
        })
      });
      const data = await res.json();
      const result = JSON.parse(data.content[0].text.replace(/```json|```/g, "").trim());
      setUploadedImages(prev => prev.map((item, i) => i === index ? { ...item, altText: result.altText } : item));
    } catch { showMessage("error", "วิเคราะห์ SEO ไม่สำเร็จ"); }
    setAnalyzingIndex(null);
  };

  return (
    <div style={{ fontFamily: "Prompt, sans-serif", minHeight: "100vh", background: "#F7F7F7" }}>
      <div style={{ background: "#111", padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ background: "#E8001D", width: "32px", height: "32px", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 900, fontSize: "12px" }}>JC</div>
          <span style={{ color: "white", fontWeight: 600, fontSize: "14px" }}>Admin — จัดการรูปภาพ</span>
        </div>
        <Link href="/" style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", textDecoration: "none" }}>← กลับหน้าหลัก</Link>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
        {message && (
          <div style={{ padding: "12px 16px", borderRadius: "8px", marginBottom: "1rem", fontSize: "13px", fontWeight: 500, background: message.type === "success" ? "#F0FFF4" : "#FFF0F0", border: `1px solid ${message.type === "success" ? "#86EFAC" : "#FFCCCC"}`, color: message.type === "success" ? "#166534" : "#E8001D" }}>
            {message.type === "success" ? "✓ " : "✗ "}{message.text}
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "start" }}>
          {/* Upload Panel */}
          <div style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E5E5", padding: "1.5rem" }}>
            <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "1rem" }}>อัพโหลดรูปภาพ</h2>
            <p style={{ fontSize: "12px", color: "#666", marginBottom: "8px", fontWeight: 500 }}>ประเภทงาน</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginBottom: "1rem" }}>
              {categories.map(cat => (
                <button key={cat.value} onClick={() => setSelectedCategory(cat.value)} style={{ padding: "8px", borderRadius: "6px", border: "1px solid", borderColor: selectedCategory === cat.value ? "#E8001D" : "#E5E5E5", background: selectedCategory === cat.value ? "#FFF0F0" : "#F7F7F7", color: selectedCategory === cat.value ? "#E8001D" : "#333", cursor: "pointer", fontSize: "12px", fontFamily: "Prompt, sans-serif" }}>
                  {cat.emoji} {cat.label}
                </button>
              ))}
            </div>

            <div onClick={() => document.getElementById("fileInput")?.click()} onDragOver={e => { e.preventDefault(); setDragOver(true); }} onDragLeave={() => setDragOver(false)} onDrop={e => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
              style={{ border: `2px dashed ${dragOver ? "#E8001D" : "#E5E5E5"}`, borderRadius: "8px", padding: "1.5rem", textAlign: "center", cursor: "pointer", background: dragOver ? "#FFF0F0" : "#F7F7F7", marginBottom: "1rem" }}>
              <input id="fileInput" type="file" accept="image/*" multiple style={{ display: "none" }} onChange={e => handleFiles(e.target.files)} />
              <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>{previews.length > 0 ? `เลือก ${previews.length} รูปแล้ว` : "ลากรูปมาวาง หรือคลิก"}</p>
              <p style={{ fontSize: "11px", color: "#999", margin: "4px 0 0" }}>JPG, PNG, WEBP • อัพได้หลายรูปพร้อมกัน</p>
            </div>

            {previews.length > 0 && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "6px", marginBottom: "1rem" }}>
                {previews.map((p, i) => <img key={i} src={p} alt="" style={{ width: "100%", aspectRatio: "1", objectFit: "cover", borderRadius: "6px" }} />)}
              </div>
            )}

            <button onClick={handleUpload} disabled={!files.length || uploading} style={{ width: "100%", padding: "12px", background: files.length && !uploading ? "#E8001D" : "#ccc", color: "white", border: "none", borderRadius: "6px", fontFamily: "Prompt, sans-serif", fontSize: "14px", fontWeight: 600, cursor: files.length && !uploading ? "pointer" : "not-allowed" }}>
              {uploading ? "กำลังอัพโหลด..." : `อัพโหลด ${files.length ? files.length + " รูป" : ""}`}
            </button>
          </div>

          {/* Uploaded Images */}
          <div>
            <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "1rem" }}>รูปที่อัพโหลดแล้ว <span style={{ fontSize: "12px", fontWeight: 400, color: "#666" }}>({uploadedImages.length} รูป)</span></h2>
            {uploadedImages.length === 0 ? (
              <div style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E5E5", padding: "2rem", textAlign: "center" }}>
                <p style={{ color: "#999", fontSize: "13px" }}>ยังไม่มีรูปที่อัพโหลด</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {uploadedImages.map((img, i) => (
                  <div key={i} style={{ background: "white", borderRadius: "12px", border: "1px solid #E5E5E5", padding: "1rem" }}>
                    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <img src={img.url} alt={img.altText || img.filename} style={{ width: "80px", height: "60px", objectFit: "cover", borderRadius: "6px", flexShrink: 0 }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <span style={{ fontSize: "10px", padding: "2px 8px", borderRadius: "100px", background: "#FFF0F0", color: "#E8001D", border: "1px solid #FFCCCC" }}>
                          {categories.find(c => c.value === img.category)?.label}
                        </span>
                        <p style={{ fontSize: "11px", color: "#999", margin: "6px 0", wordBreak: "break-all" }}>{img.filename}</p>
                        {img.altText ? (
                          <div>
                            <p style={{ fontSize: "11px", color: "#22c55e", fontWeight: 500, margin: "0 0 2px" }}>✓ SEO Alt Text:</p>
                            <p style={{ fontSize: "11px", color: "#333", margin: 0, lineHeight: 1.5 }}>{img.altText}</p>
                          </div>
                        ) : (
                          <button onClick={() => analyzeSEO(img, i)} disabled={analyzingIndex === i} style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "4px", border: "1px solid #E5E5E5", background: "#F7F7F7", cursor: analyzingIndex === i ? "not-allowed" : "pointer", fontFamily: "Prompt, sans-serif", color: "#333" }}>
                            {analyzingIndex === i ? "กำลังวิเคราะห์..." : "✨ สร้าง SEO Alt Text"}
                          </button>
                        )}
                      </div>
                    </div>
                    {img.altText && (
                      <div style={{ marginTop: "8px", background: "#F7F7F7", borderRadius: "6px", padding: "8px", fontFamily: "monospace", fontSize: "10px", color: "#333", lineHeight: 1.6 }}>
                        {`<Image src="${img.url}" alt="${img.altText}" width={800} height={600} />`}
                        <button onClick={() => navigator.clipboard.writeText(`<Image src="${img.url}" alt="${img.altText}" width={800} height={600} />`)} style={{ marginLeft: "8px", fontSize: "10px", padding: "1px 6px", border: "1px solid #ccc", borderRadius: "3px", cursor: "pointer", background: "white" }}>copy</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
