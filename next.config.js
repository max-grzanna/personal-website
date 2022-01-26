const withMDX = require('@next/mdx')({
  extensions: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
});

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com', // Cloudinary CMS
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
