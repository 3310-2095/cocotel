// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       'img.cocotel.com',
//       'www.cocotel.com',
//       'via.placeholder.com',
//       'hel1.your-objectstorage.com', // Added the missing domain
//     ],
//   },
// };

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// module.exports = withBundleAnalyzer({
//   reactStrictMode: true,
// });

// export default nextConfig;

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'img.cocotel.com',
      'www.cocotel.com',
      'via.placeholder.com',
      'hel1.your-objectstorage.com', // Added the missing domain
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
