import '@redrich-style/globals.css'
import '@redrich-style/carousel.min.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import type { AppProps } from 'next/app'
import { Layout } from '@redrich/layouts';


export default function App({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
