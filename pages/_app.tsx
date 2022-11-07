import GlobalContextProvider from '@/context/GlobalContext'
import Layout from '@/layouts/Default'
import type { AppPropsWithLayout } from '@/pages/_app.types'
import '@/styles/globals.css'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <GlobalContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContextProvider>
  )
}

export default App
