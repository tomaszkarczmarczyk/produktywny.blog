import GlobalContextProvider from '@/context/GlobalContext'
import Layout from '@/layouts/Default'
import type { AppPropsWithLayout } from '@/pages/_app.types'
import '@/styles/globals.css'
import NextNProgress from 'nextjs-progressbar'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <GlobalContextProvider>
      <Layout>
        <NextNProgress color="#fb7185" startPosition={0} height={4} options={{ showSpinner: false }} />
        <Component {...pageProps} />
      </Layout>
    </GlobalContextProvider>
  )
}

export default App
