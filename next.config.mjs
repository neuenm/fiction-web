/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
  images: {
    domains: ['tienda.planetadelibros.com.ar', 'www.tematika.com', 'www.lapatilla.com'],
  },
  webpack: (config) => {
    config.resolve.alias['@Public'] = path.resolve(__dirname, 'public');
    config.resolve.alias['@Utils'] = path.resolve(__dirname, 'utils');

    return config;
  },
};

export default nextConfig;
