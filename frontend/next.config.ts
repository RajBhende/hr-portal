/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',            // Optional, only needed if using custom ports
        pathname: '/**',     // Ensures all paths under the domain are allowed
        
      },
    ],
  },
};

module.exports = nextConfig;
