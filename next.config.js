/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  exportPathMap: async function () {
    return {
      '/': { page: '/' }
    };
  }
};
