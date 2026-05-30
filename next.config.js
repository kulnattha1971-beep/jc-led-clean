/** @type {import('next').NextConfig} */
const nextConfig = {
  // เปิด Thai URL support
  experimental: {
    typedRoutes: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Redirects สำหรับ SEO
  async redirects() {
    return [];
  },
  // Headers สำหรับ Security + Performance
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      // Cache รูปภาพ 1 ปี
      {
        source: "/:all*(jpg|jpeg|png|webp|avif|svg|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
