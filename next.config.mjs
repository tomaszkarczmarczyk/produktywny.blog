/** @type {import('next').NextConfig} */

import withMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

const mdx = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
})

export default mdx({
  i18n: {
    locales: ['pl'],
    defaultLocale: 'pl',
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    deviceSizes: [640, 1280, 1920],
  },
  pageExtensions: ['tsx', 'mdx'],
})
