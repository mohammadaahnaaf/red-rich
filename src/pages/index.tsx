import { Home } from '@redrich/home'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function MainPage() {
  return (
    <>
      <Head>
        <title>RedRich | Home</title>
      </Head>
      <div>
        <Home />
      </div>
    </>
  )
}
