import type { NextConfig } from 'next';

export default {
  images: {
    unoptimized: true
  },
  output: 'export',
  typescript: {
    ignoreBuildErrors: true
  }
} satisfies NextConfig;
