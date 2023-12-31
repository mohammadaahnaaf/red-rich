import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Inter } from 'next/font/google'
import { Header, Slider } from '@redrich/shared'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

type Props = {}

export const About = (props: Props) => {

    const [mute, setMute] = useState(true)

    return (
        <div className='bg-gray-100 pt-24'>

            <div className='max-w-6xl py-8 mx-auto text-black'>
                {/* <h2 className='text-gray-600 text-3xl text-center py-8 font-semibold'>ABOUT REDRICH</h2> */}

                {/* top about  */}
                <div className='grid grid-cols-3 items-start h-full p-4 gap-4 min-h-[70vh]'>
                    <div className='col-span-3 md:col-span-1 h-[70vh]'>
                        <div className="h-[70vh] w-full relative">
                            <Image
                                src={"/banners/banner-woman.jpg"}
                                alt="woman-image"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>
                    <div className='grid justify-center items-center col-span-3 md:col-span-2 h-full'>
                        <div className='grid gap-4 px-4 md:px-10'>
                            <h3 className='text-3xl md:text-4xl font-bold text-gray-600'>
                                It&rsquo;s Your World</h3>
                            <p className='text-lg font-semibold'>
                                Connect with people and interests across Meta technologies to help you make your world your own.
                            </p>
                            <button className='w-28 p-1 md:p-2 bg-red-600 text-sm rounded-full font-semibold text-white'>Learn More</button>
                        </div>
                    </div>
                </div>

                {/* logo and motto  */}
                <div className='grid items-center gap-4 w-full py-8 md:py-20 justify-center'>
                    <div className='w-full flex justify-center'>
                        <Image
                            width={200}
                            height={200}
                            src={"/logo/red-rich-red.svg"}
                            alt="logo-image"
                            // fill
                            className="object-cover p-2"
                        />
                    </div>
                    <h3 className='text-xl px-4 md:text-4xl text-gray-600 max-w-xl text-center font-semibold'>
                        RedRich builds technologies that help people invest, discover the world and grow businesses.
                    </h3>
                </div>

                {/* middle about */}
                <div className='p-4'>
                    <div className='min-h-[50vh] w-full rounded-3xl grid grid-cols-1 md:grid-cols-2 bg-gray-600'>
                        <div className='bg-[#510D10] order-last md:order-first grid items-center rounded-b-2xl md:rounded-r-none md:rounded-l-2xl'>
                            <div className='grid gap-4 py-8 text-center md:text-left md:py-0 px-4 md:px-10'>
                                <h3 className='text-lg md:text-2xl font-semibold text-gray-100'>
                                    Who Are We?</h3>
                                <p className='text-sm md:text-lg font-medium text-white'>
                                    RedRich is a sister group of <span className='border-b hover:border-[red] hover:text-[red]'>Royal Ahnafia Limited. </span>
                                    RedRich offers luxarious services like Resort, Resturent, Camping, Adventure, Sports and many more.
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

            {/* video player */}

            <div className='flex w-full bg-white shadow-md overflow-hidden mx-auto'>
                <div className="flex flex-col">
                    <div className="relative">
                        <video className="w-full" controls={true} autoPlay={true} loop={true} muted={mute}>
                            <source
                                // src='https://youtu.be/Y-uMPL5qcKE?t=32'
                                src="/videos/video1.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                        <button
                            type='button'
                            onClick={() => setMute(!mute)}
                            className='z-20 absolute w-full top-0 flex items-center h-full justify-center bg-white hover:bg-opacity-0 bg-opacity-5 text-transparent'>
                            Mute</button>
                    </div>
                </div>
            </div>

            {/* details  */}
            <div className='max-w-6xl mx-auto px-4 py-4 md:py-8 grid grid-cols-1 md:grid-cols-2 justify-between gap-4'>
                <div className='h-[18vh] w-full rounded-2xl grid grid-cols-3 md:grid-cols-4 shadow-lg bg-white'>
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

                <div className='h-[18vh] w-full rounded-2xl grid grid-cols-3 md:grid-cols-4 shadow-lg bg-white'>
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

            {/* motto 2 */}
            <div>
                <div className='grid items-center gap-4 w-full px-4 md:px-0 py-8 md:py-20 justify-center'>
                    <h3 className='text-2xl text-gray-600 max-w-lg text-center font-semibold'>
                        Keeping people safe and making a positive impact
                    </h3>
                    <button className='flex hover:text-red-600 duration-150 items-center justify-center gap-1 font-medium cursor-pointer text-gray-600' type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 p-0.5 text-gray-600 bg-red-200 rounded-full">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                        <span>
                            Learn More
                        </span>
                    </button>
                </div>
            </div>

            {/* newsletters  */}
            <div className='max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mx-auto w-full p-4'>
                <div className='grid col-span-1 hover:scale-105 duration-300 rounded-xl hover:bg-red-50 bg-white shadow-lg'>
                    <div className="h-[40vh] w-full relative">
                        <Image
                            src={"/banners/banner-pool3.jpg"}
                            alt="woman-image"
                            fill
                            className="rounded-t-2xl object-cover"
                        />
                    </div>
                    <div className='text-gray-600 p-4 bg-white text-center text-lg font-semibold rounded-b-2xl'>
                        <h2>Resort</h2>
                    </div>
                </div>
                <div className='grid col-span-1 hover:scale-105 duration-300 rounded-xl hover:bg-red-50 bg-white shadow-lg'>
                    <div className="h-[40vh] w-full relative">
                        <Image
                            src={"/banners/banner-restaurant.jpg"}
                            alt="woman-image"
                            fill
                            className="rounded-t-2xl object-cover"
                        />
                    </div>
                    <div className='text-gray-600 p-4 bg-white text-center text-lg font-semibold rounded-b-2xl'>
                        <h2>Restaurant</h2>
                    </div>
                </div>
                <div className='grid col-span-1 hover:scale-105 duration-300 rounded-xl hover:bg-red-50 bg-white shadow-lg'>
                    <div className="h-[40vh] w-full relative">
                        <Image
                            src={"/banners/banner-air.jpg"}
                            alt="woman-image"
                            fill
                            className="rounded-t-2xl object-cover"
                        />
                    </div>
                    <div className='text-gray-600 p-4 bg-white text-center text-lg font-semibold rounded-b-2xl'>
                        <h2>Tourism</h2>
                    </div>
                </div>
            </div>

            {/* sister companys  */}
            <div className='max-w-6xl py-8 w-full mx-auto'>
                <h2 className='text-center w-full text-2xl text-red-800 font-semibold py-4'>Our Sister Organizations</h2>
                <div className='flex gap-8 py-4 justify-center items-center'>
                    <div className='relative w-36 h-36 hover:scale-105 duration-300 rounded-xl hover:bg-red-50 bg-white shadow-lg'>
                        <Image src='/logo/red-rich-red.svg' fill className='w-full h-full p-4 rounded-xl' alt='' />
                        <Link className='text-transparent w-full h-full absolute' href='https://red-rich.vercel.app'></Link>
                    </div>
                    <div className='relative w-36  h-36 hover:scale-105 duration-300 rounded-xl hover:bg-red-50 bg-white shadow-lg'>
                        <Image src='/logo/greenlife.svg' fill className='w-full h-full p-4 rounded-xl' alt='' />
                        <Link className='text-transparent w-full h-full absolute' href='#'></Link>
                    </div>
                    <div className='relative w-36  h-36 hover:scale-105 duration-300 rounded-xl hover:bg-red-50 bg-white shadow-lg'>
                        <Image src='/logo/infopedia.svg' fill className='w-full h-full p-4 rounded-xl' alt='' />
                        <Link className='text-transparent w-full h-full absolute' href='#'></Link>
                    </div>
                    <div className='relative w-36  h-36 hover:scale-105 duration-300 rounded-xl hover:bg-red-50 bg-white shadow-lg'>
                        <Image src='/logo/vasilia.svg' fill className='w-full h-full p-4 rounded-xl' alt='' />
                        <Link className='text-transparent w-full h-full absolute' href='https://ahnafyaes.vercel.app'></Link>
                    </div>
                    <div className='relative w-36  h-36 hover:scale-105 duration-300 rounded-xl hover:bg-red-50 bg-white shadow-lg'>
                        <Image src='/logo/puzzellia.svg' fill className='w-full h-full rounded-xl p-4' alt='' />
                        <Link className='text-transparent w-full h-full absolute' href='https://puzzellia.vercel.app'></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}