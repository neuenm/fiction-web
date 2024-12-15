/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@Public'] = path.resolve(__dirname, 'public');
    return config;
  },
};

export default nextConfig;
