/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    loaderFile: 'cloudinary-loader.ts',
  },
};

export default nextConfig;
