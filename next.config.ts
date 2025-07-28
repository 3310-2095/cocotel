/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'img.cocotel.com',
      'www.cocotel.com',
      'via.placeholder.com',
      'hel1.your-objectstorage.com', // Added the missing domain
    ],
  },
};

export default nextConfig;