import Image from 'next/image'
import React from 'react'
import { Inter } from 'next/font/google'
import { Footer, Header, Slider } from '@redrich/shared'
import { Layout } from '@redrich/layouts'

const inter = Inter({ subsets: ['latin'] })

type Props = {}

export const Home = (props: Props) => {

    const images = [
        "/banners/banner-woman12.jpg",
        "/banners/banner-pool3.jpg",
        "/banners/banner-woman.jpg",
        "/banners/banner-pool.jpg",
        "/banners/banner-air.jpg",
        "/banners/banner-woman11.jpg",
    ]

    return (
        <div className='grid'>
            <Slider images={images} />
            {/* <div className='bg-sky-500 w-full h-screen'></div> */}
        </div>
    )
}