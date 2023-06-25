import { Inter } from 'next/font/google'
import { Home } from '@redrich/home'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
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
