import nextMDX from '@next/mdx';

const withMDX = nextMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  output: 'export',
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
  // TODO: remove this once https://github.com/hashicorp/next-mdx-remote/issues/381 is fixed
  transpilePackages: ['next-mdx-remote'],
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    mdxRs: true,
    turbo: {
      rules: {
        '*.mdx': {
          loaders: ['@mdx-js/loader'],
          as: '*.js'
        }
      }
    }
  }
};

export default withMDX(nextConfig);
