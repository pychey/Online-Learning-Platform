/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "connexionresearch.com"],
  },
  transpilePackages: ['@react-pdf/renderer'],
};

export default nextConfig;
