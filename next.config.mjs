/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/lang/ar",
        permanent: false, // Set to true for a permanent redirect (HTTP 301)
      },
    ];
  },
};

export default nextConfig;
