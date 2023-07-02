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

            <div className='max-w-6xl mx-auto text-black'>
                <h2 className='text-black text-3xl text-center py-4 font-semibold'>About RedRich</h2>

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
            </div>

            {/* video player */}
            <div>
                <div className='min-h-screen'>

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
                                    className='z-20 absolute w-full top-0 flex items-center h-full justify-center bg-black hover:bg-opacity-0 bg-opacity-5 text-transparent '>Mute</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}