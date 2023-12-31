import Image from 'next/image'
import React from 'react'
import { Inter } from 'next/font/google'
import { Header, Slider } from '@redrich/shared'

const inter = Inter({ subsets: ['latin'] })

type Props = {}

export const Contact = (props: Props) => {

    const images = [
        "/banners/home/woman-travel.jpg",
        "/banners/home/banner-resort.jpg",
        "/banners/banner-woman11.jpg",
        "/banners/home/out-camp2.jpg",
        "/banners/home/out-camp3.jpg",
        "/banners/home/woman-travel3.jpg",
        "/banners/home/banner-sea2.jpg",
        "/banners/home/woman-travel2.jpg",
        "/banners/home/out-camp.jpg",
    ]

    return (
        <div>
            <main
                className={`flex flex-col gap-5 w-full items-center justify-center ${inter.className}`}
            >
                <Slider images={images} />
                {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-pink-200 after:via-red-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700/10 after:dark:from-pink-900 after:dark:via-[#ff0001]/40 before:lg:h-[360px]">
                    <Image
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ee6b6e]"
                        src="/logo/red-rich.svg"
                        alt="Next.js Logo"
                        width={580}
                        height={237}
                        priority
                    />
                </div> */}
            </main>
        </div>

    )
}