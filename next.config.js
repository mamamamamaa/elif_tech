/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    SERVER: process.env.SERVER,
  },
};

module.exports = nextConfig;
