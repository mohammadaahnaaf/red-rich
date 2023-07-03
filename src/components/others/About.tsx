import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Inter } from 'next/font/google'
import { Header, Slider } from '@redrich/shared'

const inter = Inter({ subsets: ['latin'] })

type Props = {}

export const About = (props: Props) => {

    const [mute, setMute] = useState(true)

    return (
        <div className='bg-gray-100'>

            <div className='max-w-6xl py-8 mx-auto text-black'>
                <h2 className='text-gray-600 text-3xl text-center py-8 font-semibold'>ABOUT REDRICH</h2>

                {/* top about  */}
                <div className='grid grid-cols-3 items-start h-full p-4 gap-4 min-h-[70vh]'>
                    <div className='col-span-1 h-[70vh]'>
                        <div className="h-[70vh] w-full relative">
                            <Image
                                src={"/banners/banner-woman.jpg"}
                                alt="woman-image"
                                fill
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>
                    <div className='grid justify-center items-center col-span-2 h-full'>
                        <div className='grid gap-4 px-10'>
                            <h3 className='text-4xl font-bold text-gray-600'>
                                It&rsquo;s Your World</h3>
                            <p className='text-lg font-semibold'>
                                Connect with people and interests across Meta technologies to help you make your world your own.
                            </p>
                            <button className='w-28 p-2 bg-red-600 rounded-full font-semibold text-white'>Learn More</button>
                        </div>
                    </div>
                </div>

                {/* logo and motto  */}
                <div className='grid items-center gap-4 w-full py-20 justify-center'>
                    <div className='w-full flex justify-center'>
                        <Image
                            width={150}
                            height={150}
                            src={"/logo/red-rich.svg"}
                            alt="logo-image"
                            // fill
                            className="object-cover p-2"
                        />
                    </div>
                    <h3 className='text-4xl text-gray-600 max-w-xl text-center font-semibold'>
                        RedRich builds technologies that help people invest, discover the world and grow businesses.
                    </h3>
                </div>

                {/* middle about */}
                <div className='p-4'>
                    <div className='h-[50vh] w-full rounded-2xl grid grid-cols-2 bg-gray-600'>
                        <div className='bg-[#510D10] grid items-center rounded-l-2xl'>
                            <div className='grid gap-4 px-10'>
                                <h3 className='text-2xl font-semibold text-gray-100'>
                                    Who Are We?</h3>
                                <p className='text-lg font-semibold text-white'>
                                    RedRich is a sister group of <span className='border-b hover:border-[red] hover:text-[red]'>Royal Ahnafia Limited.</span> RedRich offers luxarious services like Resort, Resturent, Camping, Adventure, Sports and many more.
                                </p>
                                <button className='w-28 p-2 text-[#510D10] rounded-full font-semibold bg-white'>Learn More</button>
                            </div>
                        </div>

                        <div className='rounded-r-2xl'>
                            <div className="h-[50vh] w-full relative">
                                <Image
                                    src={"/banners/banner-woman.jpg"}
                                    alt="woman-image"
                                    fill
                                    className="rounded-r-2xl object-cover"
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
                            <source src="/videos/video1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button
                            type='button'
                            onClick={() => setMute(!mute)}
                            className='z-20 absolute w-full top-0 flex items-center h-full justify-center bg-white hover:bg-opacity-0 bg-opacity-5 text-transparent'>Mute</button>
                    </div>
                </div>
            </div>

        </div>
    )
}