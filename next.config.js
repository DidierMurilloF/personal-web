/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/technology", destination: "/about", permanent: true },
      { source: "/articles", destination: "/blog", permanent: true },
    ];
  },
};

module.exports = nextConfig;
