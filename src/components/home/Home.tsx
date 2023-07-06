import Image from 'next/image'
import React, { useState } from 'react'
import { Inter } from 'next/font/google'
import { Footer, Header, Slider } from '@redrich/shared'

const inter = Inter({ subsets: ['latin'] })

type Props = {}

export const Home = (props: Props) => {

    const [mute, setMute] = useState(true)

    const images = [
        // "/banners/banner-woman13.jpg",
        // "/banners/banner-pool3.jpg",
        // "/banners/banner-woman.jpg",
        // "/banners/banner-pool.jpg",
        // "/banners/banner-air.jpg",

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
        <div className='grid'>
            <Slider images={images} />

            <div className='overscroll-y-auto py-8 bg-white w-full'>

                <div className='mx-auto grid items-center gap-2 max-w-xl py-8 md:py-16'>
                    <h2 className='text-center text-3xl text-[red] font-semibold'>Our Services</h2>
                    <p className='text-center text-lg text-gray-500 font-semibold'>
                        Find your best detination for hangout, picnic and holidays. We provide world class resort, hotel, restaurants, tourist spots.
                    </p>
                </div>

                <div className='max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mx-auto w-full p-4'>
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

                {/* motto 2 */}
                <div>
                    <div className='grid items-center gap-4 w-full px-4 md:px-0 py-8 md:py-20 justify-center'>
                        <h3 className='text-2xl text-gray-600 max-w-lg text-center font-semibold'>
                            Keeping people safe and making a positive impact
                        </h3>
                        <button className='flex items-center justify-center gap-1 font-medium cursor-pointer text-gray-600 hover:text-gray-500' type='button'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 p-0.5 ring-1 ring-gray-400 rounded-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                            <span>
                                Learn More
                            </span>
                        </button>
                    </div>
                </div>

                {/* details  */}
                <div className='max-w-6xl mx-auto px-4 py-4 md:py-8 grid grid-cols-1 md:grid-cols-2 justify-between gap-4'>
                    <div className='h-[18vh] w-full rounded-2xl grid grid-cols-3 md:grid-cols-4 bg-white'>
                        <div className='rounded-l-2xl col-span-1'>
                            <div className="h-[18vh] w-full relative">
                                <Image
                                    src={"/banners/banner-woman0.jpg"}
                                    alt="woman-image"
                                    fill
                                    className="rounded-l-2xl object-cover"
                                />
                            </div>
                        </div>
                        <div className='bg-[#510D10] bg-opacity-20 grid items-center col-span-2 md:col-span-3 rounded-r-2xl'>
                            <div className='grid gap-4 px-10'>
                                <h3 className='text-lg font-semibold text-[#510D10]'>
                                    What Is RedRich?
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='h-[18vh] w-full rounded-2xl grid grid-cols-3 md:grid-cols-4 bg-white'>
                        <div className='rounded-l-2xl col-span-1'>
                            <div className="h-[18vh] w-full relative">
                                <Image
                                    src={"/banners/banner-woman09.jpg"}
                                    alt="woman-image"
                                    fill
                                    className="rounded-l-2xl object-cover"
                                />
                            </div>
                        </div>

                        <div className='bg-[#510D10] bg-opacity-20 grid items-center col-span-2 md:col-span-3 rounded-r-2xl'>
                            <div className='grid gap-4 px-10'>
                                <h3 className='text-lg font-semibold text-[#510D10]'>
                                    What RedRich Does?
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* video player */}

            <div className='flex w-full bg-white shadow-md overflow-hidden mx-auto'>
                <div className="flex flex-col">
                    <div className="relative">
                        <video className="w-full z-0" controls={true} autoPlay={true} loop={true} muted={mute}>
                            <source
                                // src='https://youtu.be/Y-uMPL5qcKE?t=32'
                                src="/videos/video2.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                        <button
                            type='button'
                            onClick={() => setMute(!mute)}
                            className='z-10 absolute w-full top-0 flex items-center h-full justify-center bg-white hover:bg-opacity-0 bg-opacity-5 text-transparent'>Mute</button>
                    </div>
                </div>
            </div>

            {/* bottom about */}
            <div className='py-16 bg-white'>
                <div className='min-h-[50vh] w-full  max-w-6xl mx-auto rounded-2xl grid grid-cols-1 md:grid-cols-2 bg-gray-600'>
                    <div className='bg-[#510D10] order-last md:order-first grid items-center rounded-b-2xl md:rounded-r-none md:rounded-l-2xl'>
                        <div className='grid gap-4 py-8 text-center md:text-left md:py-0 px-4 md:px-10'>
                            <h3 className='text-lg md:text-2xl font-semibold text-gray-100'>
                                Who Are We?</h3>
                            <p className='text-sm md:text-lg font-semibold text-white'>
                                RedRich is a sister group of <span className='border-b hover:border-[red] hover:text-[red]'>Royal Ahnafia Limited.</span> RedRich offers luxarious services like Resort, Resturent, Camping, Adventure, Sports and many more.
                            </p>
                            <button className='w-28 mx-auto md:mx-0 p-1 md:p-2 text-[#510D10] rounded-full font-semibold text-sm md:te bg-white'>Learn More</button>
                        </div>
                    </div>

                    <div className='rounded-r-2xl'>
                        <div className="h-[50vh] w-full relative">
                            <Image
                                src={"/banners/banner-woman.jpg"}
                                alt="woman-image"
                                fill
                                className="rounded-t-2xl md:rounded-l-none md:rounded-r-2xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}