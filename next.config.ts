import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'inzamamv3.vercel.app',
          },
        ],
        destination: 'https://inzamam.cloud/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;