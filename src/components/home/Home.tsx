import Image from 'next/image'
import React from 'react'
import { Inter } from 'next/font/google'
import { Footer, Header, Slider } from '@redrich/shared'
import { Layout } from '@redrich/layouts'

const inter = Inter({ subsets: ['latin'] })

type Props = {}

export const Home = (props: Props) => {

    const images = [
        "/banners/banner-woman13.jpg",
        "/banners/banner-pool3.jpg",
        "/banners/banner-woman.jpg",
        "/banners/banner-pool.jpg",
        "/banners/banner-air.jpg",
        "/banners/banner-woman11.jpg",
    ]

    return (
        <div className='grid'>
            <Slider images={images} />

            <div className='overscroll-y-auto py-8 bg-white w-full h-screen'>
                <div className='max-w-6xl grid grid-cols-3 gap-4 md:gap-8 mx-auto w-full p-4'>
                    <div className='grid col-span-1'>
                        <div className="h-[40vh] w-full relative">
                            <Image
                                src={"/banners/banner-pool3.jpg"}
                                alt="woman-image"
                                fill
                                className="rounded-t-2xl object-cover"
                            />
                        </div>
                        <div className='text-gray-100 text-center font-semibold text-lg p-4 bg-[#0A70A9] rounded-b-2xl'>
                            <h2>Resort</h2>
                        </div>
                    </div>
                    <div className='grid col-span-1'>
                        <div className="h-[40vh] w-full relative">
                            <Image
                                src={"/banners/banner-restaurant.jpg"}
                                alt="woman-image"
                                fill
                                className="rounded-t-2xl object-cover"
                            />
                        </div>
                        <div className='text-gray-100 text-center font-semibold text-lg p-4 bg-[#AF1E1F] rounded-b-2xl'>
                            <h2>Restaurant</h2>
                        </div>
                    </div>
                    <div className='grid col-span-1'>
                        <div className="h-[40vh] w-full relative">
                            <Image
                                src={"/banners/banner-air.jpg"}
                                alt="woman-image"
                                fill
                                className="rounded-t-2xl object-cover"
                            />
                        </div>
                        <div className='text-gray-100 text-center font-semibold text-lg p-4 bg-[#924A21] rounded-b-2xl'>
                            <h2>Tourism</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}