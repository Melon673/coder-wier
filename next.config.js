/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  compress: true, // gzip/brotli responses

  // Tree-shake large libs (works great with @mui/*)
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material', 'date-fns'],
  },

  // Keep only if you really use these packages and want per-function imports
  modularizeImports: {
    '@mui/icons-material': { transform: '@mui/icons-material/{{member}}' },
    'date-fns': { transform: 'date-fns/{{member}}' },
    // Remove lodash mapping unless you actually add lodash to deps.
    // lodash: { transform: 'lodash/{{member}}' },
  },

  compiler: {
    // Strip console.* in prod except error/warn
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error', 'warn'] }
      : false,
  },

  images: {
    // ✅ Use Next/Image optimization (you had this disabled)
    // If you deploy on Vercel, this gives you AVIF/WebP + on-demand sizing.
    // If you MUST keep a custom CDN that already transforms images,
    // you can revert to unoptimized: true — but page weight will increase.
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'devtechub.com', pathname: '**' },
      { protocol: 'https', hostname: 'www.devtechub.com', pathname: '**' },
      { protocol: 'https', hostname: 'firebasestorage.googleapis.com', pathname: '**' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com', pathname: '**' },
      { protocol: 'https', hostname: 'storage.googleapis.com', pathname: '**' },
    ],
    deviceSizes: [360, 640, 828, 1080, 1280, 1536, 1920],
    imageSizes: [96, 160, 240, 320, 480, 640],
  },

  // Optional: source maps off in prod to trim artifact size
  productionBrowserSourceMaps: false,
});
