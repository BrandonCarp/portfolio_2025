import { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config: import('webpack').Configuration, { isServer }: { isServer: boolean }) {
    // Add support for MP3 files by telling Webpack to treat them as static assets
    config.module?.rules?.push({
      test: /\.mp3$/,
      type: 'asset/resource', // Webpack 5's way to handle static assets
    });

    return config;
  },
};

export default nextConfig;
