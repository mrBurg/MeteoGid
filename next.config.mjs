/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  webpack(baseConfig) {
    const { module = {} } = baseConfig;
    const config = {
      ...baseConfig,
      module: {
        ...module,
        rules: [
          ...(module.rules || []),
          {
            test: /\.svg$/,
            use: ['@svgr/webpack' /* , 'url-loader' */],
          },
          {
            test: /\.po$/,
            use: ['json-loader', 'po-gettext-loader'],
          },
        ],
      },
    };

    return config;
  },
};

export default nextConfig;
