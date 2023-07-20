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
            <div className='w-full h-screen bg-white'
                style={{
                    // position: 'fixed', 
                    zIndex: -99, width: '100%', height: '100%'
                }}
                id='video'>
                <iframe
                    className='w-screen h-screen'
                    // frameBorder="0"
                    height="100%"
                    width="100%"
                    src="https://www.youtube.com/embed/QnscCpLfvHo?autoplay=1&autohide=1&controls=0&share=0&showinfo=0&rel=0&&loop=1"
                    // src="https://www.youtube.com/embed/QnscCpLfvHo"
                    title="YouTube video player"
                    // allow="autoplay; gyroscope; picture-in-picture;"
                    allowFullScreen
                >

                </iframe>
            </div >
        </>
    )
}
