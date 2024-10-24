'use client'
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'next/image';
import { follows } from '@/constants'




const Follows = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        centerMode:true,
        responsive: [
            {
                breakpoint: 1024, // Medium screens
                settings: {
                    slidesToShow: 3, // Show 3 slides
                    slidesToScroll: 1,
                    centerPadding:"10%"
                }
            },
            {
                breakpoint: 768, // Medium screens
                settings: {
                    slidesToShow: 2, // Show 3 slides
                    slidesToScroll: 1,
                    centerPadding:"10%"
                }
            },
            {
                breakpoint: 648, // Large screens
                settings: {
                    slidesToShow: 1, // Show 4 slides
                    slidesToScroll: 1,
                    centerPadding:"10%"
                }
            }
        ]

    };

    return (
        <>
            <div className="my-28 relative  overflow-hidden ">
                <div className=" mx-auto">
                    <p className="text-[32px] font-bold title-family text-[--header-text] text-center">Follow on Instargram</p>
                    <div className="py-10 hidden lg:flex justify-evenly items-center overflow-x-auto">
                        {follows?.map((person, index) => {
                            return (
                                <div className='' key={index}>
                                    <div className="h-[400px] w-[250px]">
                                        <Image src={person.image} alt="logo" width={360} height={490} className="h-full w-full object-cover rounded-xl" />
                                    </div>

                                </div>)
                        })}
                    </div>
                </div>
            </div>
            <div className="lg:hidden block slider-container pb-20 w-[90%] lg:w-2/3  mx-auto">
                <Slider {...settings} afterChange={(index) => setCurrentSlide(index)}>
                    {follows?.map((person, index) => {
                        return (
                            <div className='' key={index}>
                                <div className="h-[400px] w-[250px] mx-auto">
                                    <Image src={person.image} alt="logo" width={360} height={490} className="h-full w-full object-cover rounded-xl" />
                                </div>
                            </div>)
                    })}
                </Slider>
            </div>
        </>
    )
}

export default Follows
