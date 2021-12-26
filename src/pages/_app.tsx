import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portifolio | Jonathan Silva</title>
        <link rel="shortcut-icon" href="#"></link>
        <link rel="shortcut-icon" href="/public/favicon.png" />
        <link rel="apple-touch-icon" href="#"></link>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="description" content="Blog - Jonathan Silva" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
