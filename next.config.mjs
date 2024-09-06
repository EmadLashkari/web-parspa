/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.parspa-ai.ir",
        port: "",
        pathname: "/upload/pic/*",
      },
    ],
  },
};

export default nextConfig;
