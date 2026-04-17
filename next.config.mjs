/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.idenpet.io",
      },
      {
        protocol: "https",
        hostname: "idenpet.io",
      },
    ],
  },
};

export default nextConfig;
