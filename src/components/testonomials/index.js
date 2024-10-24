'use client'
import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'next/image';
import { testonomials } from '@/constants'




const Testonomials = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        customPaging: (i) => (
            <div className={`dot-container ${i === currentSlide ? 'active' : ''}`} >
                <div className={`dot ${i === currentSlide ? 'active' : ''}`} />
            </div>

        ),

    };

    return (
        <div className="relative px-5 lg:px-0 bg-[#E9F1EE]  ">
            <div className="lg:w-[80%] mx-auto">
                <div className="py-10">
                    <p className="text-[32px] font-bold title-family text-[--header-text] text-center">What people say?</p>
                </div>
                <div className="slider-container pb-20 w-[90%] lg:w-2/3  mx-auto">
                    <Slider {...settings} afterChange={(index) => setCurrentSlide(index)}>
                        {testonomials?.map((person, index) => {
                            return (
                                <div className='' key={index}>
                                    <div className='relative bg-white rounded-3xl py-5 px-2 lg:p-10  text-center'>
                                        <img src="/svg/star.svg" alt='star' className='h-[16px] w-auto object-contain mx-auto' />
                                        <p className='mt-5 mb-10'>{person.description}</p>
                                        <div className='absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                                            <Image
                                                src={person.image}
                                                height={1500}
                                                width={1500}
                                                className="h-[80px] w-[80px] object-cover bg-center rounded-full bg-white p-2"
                                            />
                                        </div>
                                        {/* <div className='absolute top-[-50px] left-[50%] w-full translate-x-[-50%]'>
                                            <p className="text-center mx-auto h-[100px] w-[80%] bg-opacity-60 z-10 bg-red-500 p-2">
                                                
                                            </p>
                                        </div> */}
                                    </div>

                                    {/* Text Section */}
                                    <div className='text-center mt-16'>
                                        <p className='text-xl font-semibold'>{person.name}</p>
                                        <p className='text-[#49A760] my-1 mb-5'>{person.designation}</p>
                                    </div>
                                </div>)
                        })}
                    </Slider>
                </div>
            </div>

        </div>
    )
}

export default Testonomials
