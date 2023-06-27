import Image from 'next/image'
import React, { useEffect, useState } from 'react'
var Carousel = require('react-responsive-carousel').Carousel;

type Props = {}

export const Slider = (props: Props) => {
    const [image, setImage] = useState([
        "/banners/banner1.jpg",
        "/banners/banner2.jpg",
        "/banners/banner3.jpg",
        "/banners/banner4.jpg",
    ])

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
                    <div key={index}>
                        <img
                            // fill
                            className='object-cover h-[90vh] w-full select-none cursor-pointer'
                            src={img} alt='image'
                        />
                    </div>
                ))}
            </Carousel>

        </div>
    )
}