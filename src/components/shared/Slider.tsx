import Image from 'next/image'
import React, { useEffect, useState } from 'react'
var Carousel = require('react-responsive-carousel').Carousel;

type Props = {
    images: any[]
}

export const Slider = (props: Props) => {

    let image = props.images

    return (
        <div className="relative w-full h-ful bg-black bg-opacity-40">
            {/* <div className='absolute mx-auto w-full items-center grid justify-left h-full'>
                <h1 className='text-6xl p-5 opacity-50 uppercase ring-2 ring-white font-semibold'>Welcome To Redrich Resort</h1>
            </div> */}
            <Carousel
                autoPlay
                infiniteLoop
                animationHandler="fade"
                stopOnHover={false}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={2500}
                transitionTime={500}
                swipeable={false}
                emulateTouch
                showArrows={false}
            // onChange={onChange}
            // onClickItem={onClickItem}
            // onClickThumb={onClickThumb}
            >
                {image?.map((img, index) => (
                    <div key={index} className='w-full min-h-screen'>
                        <Image
                            fill
                            className='object-fill h-full w-full select-none cursor-pointer'
                            src={img} alt='image'
                        />
                    </div>
                ))}
            </Carousel>

        </div>
    )
}