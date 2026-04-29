/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Scroll landing page
      { source: "/scroll", destination: "/scroll/index.html" },
      // Scroll demo
      { source: "/scroll/demo", destination: "/scroll/demo/index.html" },
    ];
  },
};

export default nextConfig;
