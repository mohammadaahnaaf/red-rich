import Image from 'next/image'
import React from 'react'
import { Inter } from 'next/font/google'
import { Footer, Header, Slider } from '@redrich/shared'
import { Layout } from '@redrich/layouts'

const inter = Inter({ subsets: ['latin'] })

type Props = {}

export const Home = (props: Props) => {

    const images = [
        "/banners/banner1.jpg",
        // "/banners/banner2.jpg",
        "/banners/banner3.jpg",
        "/banners/banner4.jpg",
    ]

    return (
        <>
            {/* // <Layout> */}
            <Header />
            <div className='grid'>
                <Slider images={images} />
                <div className='bg-sky-500 w-full h-screen'></div>
            </div>
            <Footer />
            {/* //</Layout> */}
        </>

    )
}