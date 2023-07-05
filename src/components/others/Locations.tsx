import React from 'react'
import { Inter } from 'next/font/google'
import { Slider } from '@redrich/shared'

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
        <div className='grid h-screen items-center bg-red-50'>
            {/* <Slider images={images} /> */}
            <div className='px-10'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8660014717!2d90.25446582657518!3d23.780863189968727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1688236259489!5m2!1sen!2sbd" className='h-[60vh] w-full border-0' />
            </div>

        </div>
    )
}