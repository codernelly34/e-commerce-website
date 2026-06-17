/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: JSON.parse(process.env.allowedDevOrigins),
};

export default nextConfig;
