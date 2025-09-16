/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "connexionresearch.com"],
  },
  experimental: {
    esmExternals: 'loose',
  },
};

export default nextConfig;
