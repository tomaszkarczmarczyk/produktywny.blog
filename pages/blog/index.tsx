import ArticleCard from '@/components/ArticleCard'
import Breadcrumb from '@/components/Breadcrumb'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import PageHeader from '@/components/PageHeader'
import Wrapper from '@/components/Wrapper'
import getFrontmatter from '@/lib/getFrontmatter'
import getSiteMeta from '@/lib/getSiteMeta'
import type { ArchivePageProps } from '@/pages/blog/index.types'
import type { NextPageWithLayout } from '@/pages/_app.types'
import { readdirSync } from 'fs'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { join } from 'path'

const {
  title,
  delimiter,
  paths: { articles: articlesPath },
} = getSiteMeta

export const getStaticProps: GetStaticProps = async () => {
  const files = readdirSync(join(process.cwd(), ...articlesPath)).filter((file) => file.endsWith('.mdx'))
  const frontmatters = files.map((file) => getFrontmatter(articlesPath, file))
  const articles = frontmatters.filter(({ isPublished }) => isPublished)

  articles.sort((a, b) => (a.date.updatedAt < b.date.updatedAt ? 1 : -1))

  return {
    props: { articles },
  }
}

const BlogPage: NextPageWithLayout<ArchivePageProps> = ({ articles }) => {
  const pageTitle = 'Blog'
  const pageDescription =
    'Aliqua commodo cillum sit dolor pariatur esse laborum. Commodo dolore sit nulla quis eu ipsum fugiat laborum qui commodo aliquip.'
  const seoDescription = pageDescription

  return (
    <>
      <Head>
        <title>{`${pageTitle}${delimiter}${title}`}</title>

        <meta name="description" content={seoDescription} key="description" />

        <meta property="og:title" content={pageTitle} key="ogTitle" />
        <meta property="og:description" content={seoDescription} key="ogDescription" />
        <meta property="og:image" content="" key="ogImage" />
        <meta property="og:image:width" content="1200" key="ogImageWidth" />
        <meta property="og:image:height" content="630" key="ogImageHeight" />
        <meta property="og:image:alt" content="" key="ogImageAlt" />
      </Head>
      <Wrapper>
        <Header />
        <div>
          <PageHeader title={pageTitle} description={pageDescription} />
          <Breadcrumb items={[{ path: '', name: 'Blog' }]} />

          <main className="grid grid-cols-[1fr_640px_1fr] content-start gap-10 divide-y divide-slate-200 py-10 [&>*+*]:pt-[39px] [&>*+*_a]:before:top-[39px]">
            {articles.map((article) => (
              <ArticleCard {...article} key={article.pathname} />
            ))}
          </main>
        </div>
        <Footer />
      </Wrapper>
    </>
  )
}

export default BlogPage
