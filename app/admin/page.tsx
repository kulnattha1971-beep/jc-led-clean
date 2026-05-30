"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdminPage() {
  const [portfolios, setPortfolios] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const fetchPortfolios = async () => {
    try {
      const res = await fetch("/api/portfolio");
      const data = await res.json();
      if (Array.isArray(data)) {
        setPortfolios(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);

    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/portfolio", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        alert("อัปโหลดภาพผลงานสำเร็จ!");
        e.currentTarget.reset();
        fetchPortfolios(); // refresh list
      } else {
        alert("เกิดข้อผิดพลาดในการอัปโหลด");
      }
    } catch (error) {
      console.error(error);
      alert("ไม่สามารถติดต่อเซิร์ฟเวอร์ได้");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="container-main py-12 px-4 min-h-screen">
        <h1 className="text-3xl font-bold mb-8">จัดการผลงาน (Admin)</h1>

        <div className="bg-white p-6 rounded-lg shadow-sm border mb-12 max-w-2xl">
          <h2 className="text-xl font-semibold mb-4 text-brand-black">เพิ่มผลงานใหม่</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ภาพผลงาน (Image)</label>
              <input 
                type="file" 
                name="image" 
                accept="image/*" 
                required 
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ประเภทงาน (Type)</label>
                <input 
                  type="text" 
                  name="type" 
                  placeholder="เช่น งานแต่งงาน, สัมมนา" 
                  required 
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">สถานที่ (Location)</label>
                <input 
                  type="text" 
                  name="loc" 
                  placeholder="เช่น Centara Grand" 
                  required 
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">สเปกจอ (Spec)</label>
                <input 
                  type="text" 
                  name="spec" 
                  placeholder="เช่น จอ P2.5, P3.9" 
                  required 
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">สีพื้นหลัง (Bg Color)</label>
                <input 
                  type="color" 
                  name="bg" 
                  defaultValue="#111111" 
                  className="w-full h-10 border p-1 rounded cursor-pointer"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isUploading}
              className="mt-4 bg-red-600 text-white font-medium py-2 px-4 rounded hover:bg-red-700 transition disabled:opacity-50"
              style={{ background: "#E8001D" }}
            >
              {isUploading ? "กำลังอัปโหลด..." : "บันทึกข้อมูล"}
            </button>

          </form>
        </div>

        <h2 className="text-xl font-semibold mb-4">ผลงานทั้งหมดที่มีในระบบ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {portfolios.map((p) => (
            <div key={p.id} className="border rounded p-3 flex gap-4 bg-gray-50 items-center">
              <div 
                className="w-24 h-16 bg-gray-300 rounded overflow-hidden flex-shrink-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={p.image} 
                  alt={p.type} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <p className="text-sm font-bold">{p.type}</p>
                <p className="text-xs text-gray-600">{p.loc} • {p.spec}</p>
              </div>
            </div>
          ))}
          {portfolios.length === 0 && <p className="text-sm text-gray-500">ยังไม่มีข้อมูล</p>}
        </div>

      </main>
      <Footer />
    </>
  );
}
