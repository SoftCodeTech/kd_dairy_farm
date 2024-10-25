'use client'
import { follows } from '@/constants';
import Image from 'next/image';
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Follows = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Default for mobile
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        centerPadding: "10%",
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024, // Screens up to 1024px
                settings: {
                    slidesToShow: 2, // Show 2 slides
                    slidesToScroll: 1,
                    centerPadding: "10%",
                    centerMode: true,
                }
            },
            {
                breakpoint: 768, // Screens up to 768px
                settings: {
                    slidesToShow: 2, // Show 2 slides
                    slidesToScroll: 1,
                    centerPadding: "5%",
                    centerMode: true,
                }
            },
            {
                breakpoint: 648, // Screens up to 648px (smaller mobile)
                settings: {
                    slidesToShow: 1, // Show 1 slide
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "10%",

                }
            }
        ]
    };


    return (
        <>
            <div className="my-28 relative  overflow-hidden ">
                <div className=" mx-auto">
                    <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold title-family text-[--header-text] text-center">Follow on Instargram</p>
                    <div className="py-10 hidden lg:flex justify-evenly items-center overflow-x-auto">
                        {follows?.map((person, index) => {
                            return (
                                <div className='' key={index}>
                                    <div className="h-[300px] xl:h-[400px] w-[200px] xl:w-[250px]">
                                        <Image src={person.image} alt="logo" width={360} height={490} className="h-full w-full object-cover rounded-xl" />
                                    </div>

                                </div>)
                        })}
                    </div>
                </div>
            </div>
            <div className="lg:hidden block slider-container pb-20  mx-auto">
                <Slider {...settings} afterChange={(index) => setCurrentSlide(index)}>
                    {follows?.map((person, index) => {
                        return (
                            <div className='px-[3px]' key={index}>
                                <div className="w-full h-[400px] md:w-[300px] lg:w-[250px] mx-auto">
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
