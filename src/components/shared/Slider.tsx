import Image from 'next/image'
import React, { useEffect, useState } from 'react'
var Carousel = require('react-responsive-carousel').Carousel;

type Props = {
    images: any[]
}

export const Slider = (props: Props) => {

    let image = props.images

    return (
        <div className="w-full h-full bg-black bg-opacity-20">

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
                    <div key={index} className='w-full h-[90vh]'>
                        <Image
                            fill
                            className='object-cover h-[90vh] w-full select-none cursor-pointer'
                            src={img} alt='image'
                        />
                    </div>
                ))}
            </Carousel>

        </div>
    )
}