import React from 'react'
import { Inter } from 'next/font/google'
import { FbIcon, HomeIcon, IgIcon, MailIcon, PhoneIcon, PinIcon, TwIcon } from '@redrich/shared'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

type Props = {}

export const Locations = (props: Props) => {

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
        <div className='grid items-center pt-24 bg-white py-8 gap-8'>
            {/* <Slider images={images} /> */}
            <div className='text-red-700 ring-0 shadow-lg ring-red-700 bg-red-50 rounded-xl p-4 mt-8 max-w-2xl w-full mx-auto'>
                <h2 className='text-center font-semibold text-xl'>GET IN TOUCH</h2>

                <div className='grid items-center gap-2 text-sm font-medium p-4'>

                    <p className='flex items-center gap-2'>
                        <HomeIcon style='h-4 w-4' />
                        <span>
                            House#12, Road#19, Sector#07, Uttara, Dhaka-1230.
                        </span>
                    </p>

                    <p className='flex items-center gap-2'>
                        <PinIcon style='h-4 w-4' />
                        <span>
                            Shop #GB-001, Jamuna Future Park, Dhaka - 1229.
                        </span>
                    </p>

                    <p className='flex items-center gap-2'>
                        <PhoneIcon style='h-4 w-4' />
                        <span>
                            <Link className='underline hover:text-red-50' href='tel:+8801234567890'>
                                +8801234567890
                            </Link>
                        </span>
                    </p>
                    <p className='flex items-center gap-2'>
                        <MailIcon style='h-4 w-4' />
                        <span>
                            <Link className='underline hover:text-red-50' href='mailto:askredrich@redrich.com'>
                                ask.redrich@redrich.com
                            </Link>
                        </span>
                    </p>
                </div>

                <div className='grid items-center justify-center'>
                    {/* <h2 className='font-semibold text-center text-lg py-2'>Follow RedRich</h2> */}

                    <div className='flex items-center gap-4 py-2'>
                        <Link className='rounded-full bg-[red]' href='https://www.facebook.com/royalredrich'>
                            <FbIcon style='h-8 w-8 p-2 text-white' />
                        </Link>
                        <Link className='rounded-full bg-[red]' href='#'>
                            <IgIcon style='h-8 w-8 p-2 text-white' />
                        </Link>
                        <Link className='rounded-full bg-[red]' href='#'>
                            <TwIcon style='h-8 w-8 p-2 text-white' />
                        </Link>
                    </div>
                </div>
            </div>


            <div className='mx-auto max-w-6xl w-full rounded-lg p-4 bg-[#B6D9C2]'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8660014717!2d90.25446582657518!3d23.780863189968727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1688236259489!5m2!1sen!2sbd" className='h-[60vh] w-full border-0' />
            </div>

        </div>
    )
}