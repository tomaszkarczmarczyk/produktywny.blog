export type GetSiteMeta = {
  hostname: 'https://produktywny.blog' | 'http://localhost:3000'
  title: string
  delimiter: string
  paths: {
    articles: string[]
  }
  navigation: {
    main: { path: string; name: string }[]
  }
}
