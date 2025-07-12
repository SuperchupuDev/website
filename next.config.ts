import type { NextConfig } from 'next';

export default {
  images: {
    unoptimized: true
  },
  output: 'export',
  serverExternalPackages: ['@shikijs/twoslash'],
  typescript: {
    ignoreBuildErrors: true
  }
} satisfies NextConfig;
