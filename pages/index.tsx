import Layout from '@/layouts/HeaderFooter'
import getSiteMeta from '@/lib/getSiteMeta'
import type { NextPageWithLayout } from '@/pages/_app.types'
import Head from 'next/head'

const Home: NextPageWithLayout = () => {
  const { title, delimiter } = getSiteMeta

  return (
    <>
      <Head>
        <title>{`Strona główna${delimiter}${title}`}</title>
        <meta name="description" content="Opis strony głównej" key="description" />
        <meta property="og:description" content="Opis strony głównej" key="ogDescription" />
      </Head>
      <main>HOME PAGE</main>
    </>
  )
}

Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home
