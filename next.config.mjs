import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['tienda.planetadelibros.com.ar', 'www.tematika.com', 'www.lapatilla.com'],
  },
  webpack: (config) => {
    config.resolve.alias['@Public'] = path.resolve(process.cwd(), 'public');
    config.resolve.alias['@Utils'] = path.resolve(process.cwd(), 'utils');

    return config;
  },
};

export default nextConfig;
