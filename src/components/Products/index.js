"use client"

import { ProductsData } from "@/constants";
import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductCard from "../ProductCard";

const Products = () => {
    const sliderRef = useRef(null);

    var productsSliderSettings = {
        infinite: true,
        speed: 1000,
        centerPadding: "15%",
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "15%",
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: "15%",
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="mt-28 pb-20 space-y-3 lg:space-y-5">
            <h1 className="title-family font-semibold text-2xl md:text-3xl lg:text-5xl text-center text-[--blue-text]">Our Dairy Products</h1>
            <p className="text-sm lg:text-base text-center w-[70%] mx-auto text-[--gray]">From fresh milk to delicious paneer, KD Farms brings you the freshest, tastiest dairy products, directly from our farm to your kitchen.
</p>
            <div className="w-full overflow-hidden !mt-20">
                <Slider {...productsSliderSettings} ref={sliderRef} >
                    {ProductsData?.map((val, index) => (
                        <div key={index} className="px-3 xl:px-6">
                            <ProductCard val={val} />
                        </div>
                    ))}
                </Slider>
                <div className="flex items-center justify-center mt-10 space-x-3">
                    <button className="bg-[--icon-bg]  rounded-full w-max p-3" onClick={() => sliderRef.current.slickPrev()}>
                        <KeyboardBackspaceIcon />
                    </button>
                    <button className="bg-[--icon-bg]  rounded-full w-max p-3" onClick={() => sliderRef.current.slickNext()} >
                        <EastIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Products