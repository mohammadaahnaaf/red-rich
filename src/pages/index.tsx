import { Home } from '@redrich/home'
import Head from 'next/head'

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
