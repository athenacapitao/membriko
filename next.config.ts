import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static export optimization
  output: 'standalone',

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
