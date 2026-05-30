/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [
      { source: "/(.*)", headers: [{ key: "X-Frame-Options", value: "DENY" }, { key: "X-Content-Type-Options", value: "nosniff" }] },
      { source: "/:all*(jpg|jpeg|png|webp|avif|svg|ico)", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
    ];
  },
};
module.exports = nextConfig;
