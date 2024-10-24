"use client"

import Image from "next/image"
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Subscription = () => {

    var productsSliderSettings = {
        infinite: true,
        speed: 1000,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "10%",
                    slidesToScroll: 1
                }
            },
        ]
    };

    return (
        <div className="bg-[#E9F1EE] mt-10 relative ">
            <div className=" pt-28 pb-28 space-y-5">
                <h1 className="title-family font-semibold text-2xl  md:text-3xl lg:text-5xl text-center text-[--blue-text]">Subscription Model</h1>
                <div className="mainContainer hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 !mt-14">
                    <div className="rounded-[25px] px-3 pb-3 pt-5 bg-[--white] ">
                        <h1 className="text-center text-base lg:text-lg font-medium">Daily</h1>
                        <div className="w-full min-h-[230px] rounded-[25px] flex flex-col justify-center items-center space-y-1 p-4 !mt-4 bg-[--icon-bg]">
                            <h1>120 INR / 1 Ltr.</h1>
                        </div>
                    </div>
                    <div className="rounded-[25px] px-3 pb-3 pt-5 bg-[--white] ">
                        <h1 className="text-center text-base lg:text-lg font-medium">Monthly (Advance)</h1>
                        <div className="w-full min-h-[230px] rounded-[25px] flex flex-col justify-center items-center space-y-1 p-4 !mt-4 bg-[--icon-bg]">
                            <h1>110 INR / 1 Ltr.</h1>
                        </div>
                    </div>
                    <div className="rounded-[25px] px-3 pb-3 pt-5 bg-[--white] ">
                        <h1 className="text-center text-base lg:text-lg font-medium">3 Month (Advance)</h1>
                        <div className="w-full min-h-[230px] rounded-[25px] flex flex-col justify-center items-center space-y-1 p-4 !mt-4 bg-[--icon-bg]">
                            <h1>100 INR / 1 Ltr.</h1>
                            <p className="font-semibold">+</p>
                            <h1>4 Ltr. (4 Bottles Free)</h1>
                            <p className="font-semibold">+</p>
                            <h1>1 Surprise Gift</h1>
                            <p className="text-center text-[--green] font-semibold !mt-4">Total 90 Bottle in 3 Months</p>
                        </div>
                    </div>
                    <div className="rounded-[25px] px-3 pb-3 pt-5 bg-[--white]">
                        <h1 className="text-center text-base lg:text-lg font-medium">6 Month (Advance)</h1>
                        <div className="w-full min-h-[230px] rounded-[25px] flex flex-col justify-center items-center space-y-1 p-4 !mt-4 bg-[--icon-bg]">
                            <h1>100 INR / 1 Ltr.</h1>
                            <p className="font-semibold">+</p>
                            <h1>8 Ltr. (8 Bottles Free)</h1>
                            <p className="font-semibold">+</p>
                            <h1>2 Surprise Gift</h1>
                            <p className="text-center text-[--green] font-semibold !mt-4">Total 180 Bottle in 3 Months</p>
                        </div>
                    </div>
                </div>
                <div className="md:hidden w-full overflow-hidden !mt-14">
                    <Slider {...productsSliderSettings} >
                        <div className="px-2">
                            <div className="rounded-[25px] px-3 pb-3 pt-5 bg-[--white]">
                                <h1 className="text-center text-base lg:text-lg font-medium">Daily</h1>
                                <div className="w-full min-h-[230px] rounded-[25px] flex flex-col justify-center items-center space-y-1 p-4 !mt-4 bg-[--icon-bg]">
                                    <h1>120 INR / 1 Ltr.</h1>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="rounded-[25px] px-3 pb-3 pt-5 bg-[--white] ">
                                <h1 className="text-center text-base lg:text-lg font-medium">Monthly (Advance)</h1>
                                <div className="w-full min-h-[230px] rounded-[25px] flex flex-col justify-center items-center space-y-1 p-4 !mt-4 bg-[--icon-bg]">
                                    <h1>110 INR / 1 Ltr.</h1>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="rounded-[25px] px-3 pb-3 pt-5 bg-[--white] ">
                                <h1 className="text-center text-base lg:text-lg font-medium">3 Month (Advance)</h1>
                                <div className="w-full min-h-[230px] rounded-[25px] flex flex-col justify-center items-center space-y-1 p-4 !mt-4 bg-[--icon-bg]">
                                    <h1>100 INR / 1 Ltr.</h1>
                                    <p className="font-semibold">+</p>
                                    <h1>4 Ltr. (4 Bottles Free)</h1>
                                    <p className="font-semibold">+</p>
                                    <h1>1 Surprise Gift</h1>
                                    <p className="text-center text-[--green] font-semibold !mt-4">Total 90 Bottle in 3 Months</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="rounded-[25px] px-3 pb-3 pt-5 bg-[--white]">
                                <h1 className="text-center text-base lg:text-lg font-medium">6 Month (Advance)</h1>
                                <div className="w-full min-h-[230px] rounded-[25px] flex flex-col justify-center items-center space-y-1 p-4 !mt-4 bg-[--icon-bg]">
                                    <h1>100 INR / 1 Ltr.</h1>
                                    <p className="font-semibold">+</p>
                                    <h1>8 Ltr. (8 Bottles Free)</h1>
                                    <p className="font-semibold">+</p>
                                    <h1>2 Surprise Gift</h1>
                                    <p className="text-center text-[--green] font-semibold !mt-4">Total 180 Bottle in 3 Months</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 w-[550px] mx-auto xl:w-[45%]">
                <Image src="/images/subscription-bg-banner.png" alt="subscription-bg-banner" width={1000} height={1000} className="w-full h-full object-contain mix-blend-multiply z-20" />
            </div>
        </div>
    )
}

export default Subscription