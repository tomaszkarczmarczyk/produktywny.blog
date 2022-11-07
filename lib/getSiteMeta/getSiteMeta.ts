import type { GetSiteMeta } from '@/lib/getSiteMeta'

const getSiteMeta: GetSiteMeta = {
  hostname: process.env.NODE_ENV === 'production' ? 'https://produktywny.blog' : 'http://localhost:3000',
  title: 'Produktywny Blog',
  delimiter: ' | ',
  paths: {
    articles: ['pages', 'blog'],
  },
  navigation: {
    main: [
      { path: '/blog', name: 'Blog' },
      { path: '/newsletter', name: 'Newsletter' },
      { path: '/o-mnie', name: 'O mnie' },
    ],
  },
}

export default getSiteMeta
