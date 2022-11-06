import type { DefaultLayoutProps } from '@/layouts/Default'
import getSiteMeta from '@/lib/getSiteMeta'
import Head from 'next/head'
import { useRouter } from 'next/router'

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { hostname, title, delimiter } = getSiteMeta
  const router = useRouter()
  const { locale, pathname } = router

  return (
    <>
      <Head>
        <title>{`Under construction...${delimiter}${title}`}</title>

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="httpEquiv" />

        <link rel="canonical" href={`${hostname}${pathname}`} key="canonical" />
        <link rel="author" href="/humans.txt" key="author" />
        <link rel="icon" href="/favicon.svg" key="icon" />

        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <meta name="description" content="" key="description" />

        <meta property="og:site_name" content={title} key="ogSiteName" />
        <meta property="og:title" content={`Under construction...`} key="ogTitle" />
        <meta property="og:url" content={`${hostname}${pathname}`} key="ogUrl" />
        <meta property="og:description" content="" key="ogDescription" />
        <meta property="og:type" content="website" key="ogType" />
        <meta property="og:locale" content={locale} key="ogLocale" />
        <meta property="og:image" content="" key="ogImage" />
        <meta property="og:image:width" content="1200" key="ogImageWidth" />
        <meta property="og:image:height" content="630" key="ogImageHeight" />
        <meta property="og:image:alt" content="" key="ogImageAlt" />
        <meta property="og:image:type" content="image/png" key="ogImageType" />
      </Head>
      {children}
    </>
  )
}

export default DefaultLayout
