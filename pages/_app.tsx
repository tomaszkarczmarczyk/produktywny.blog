import Layout from '@/layouts/Default'
import type { AppPropsWithLayout } from '@/pages/_app.types'
import '@/styles/globals.css'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
