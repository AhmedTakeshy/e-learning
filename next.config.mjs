/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wordwallscreens.azureedge.net",
      },
    ],
  },
};

export default nextConfig;
