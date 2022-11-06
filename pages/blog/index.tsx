import ArticleCard from '@/components/ArticleCard'
import Layout from '@/layouts/HeaderFooter'
import getFrontmatter from '@/lib/getFrontmatter'
import getSiteMeta from '@/lib/getSiteMeta'
import type { ArchivePageProps } from '@/pages/blog/index.types'
import type { NextPageWithLayout } from '@/pages/_app.types'
import { readdirSync } from 'fs'
import type { GetStaticProps } from 'next'
import { join } from 'path'

export const getStaticProps: GetStaticProps = async () => {
  const {
    paths: { articles: articlesPath },
  } = getSiteMeta
  const files = readdirSync(join(process.cwd(), ...articlesPath)).filter((file) => file.endsWith('.mdx'))
  const frontmatters = files.map((file) => getFrontmatter(articlesPath, file))
  const articles = frontmatters.filter(({ isPublished }) => isPublished)

  articles.sort((a, b) => (a.date.updatedAt < b.date.updatedAt ? 1 : -1))

  return {
    props: { articles },
  }
}

const ArchivePage: NextPageWithLayout<ArchivePageProps> = ({ articles }) => {
  return (
    <main>
      {articles.map((article) => (
        <ArticleCard {...article} key={article.pathname} />
      ))}
    </main>
  )
}

ArchivePage.getLayout = (page) => <Layout>{page}</Layout>

export default ArchivePage
