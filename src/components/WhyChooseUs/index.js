"use client"

import { WhyChooseGreenData, WhyChooseRedData } from "@/constants"
import Image from "next/image"

const WhyChooseUs = () => {
    return (
        <div className="mainContainer py-32 space-y-5">
            <h1 className="title-family font-semibold text-2xl  md:text-3xl lg:text-5xl text-center text-[--blue-text]">Why Choose <span className="text-[--green-text]">KD Farms</span>?</h1>
            <h1 className="title-family font-semibold text-lg  md:text-xl lg:text-3xl text-center text-[--blue-text]"><span className="text-[--green-text]">KD Farms Milk</span> VS. Normal Pasteurized Milk</h1>
            <div className="!mt-20 xl:!mt-28 flex flex-col lg:flex-row items-center lg:space-x-4">
                <div className="w-full lg:w-[50%] ">
                    <div className="rounded-[25px] relative border-2 border-[--green] bg-[--green-background] px-5 pt-12 pb-10 lg:transform lg:-rotate-2 xl:-rotate-3 -z-30 lg:h-[500px]">
                        <Image
                            src={"/images/why-choose-true.png"}
                            alt="why-choose-true"
                            width={1000}
                            height={1000}
                            className="w-[60px] h-[60px] object-contain absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        />
                        <div className="w-[110px] mx-auto">
                            <Image src="/images/logo.png" alt="logo" width={1500} height={1500} className="w-[100%] h-[100%] object-contain flex justify-center" />
                        </div>
                        <div className="space-y-7 sm:px-4 !mt-7">
                            {WhyChooseGreenData.map((val, index) => {
                                return (
                                    <div key={index} className="flex items-center space-x-4 md:space-x-5">
                                        <div className="rounded-full w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] p-1 sm:p-4 bg-[--white] border-2 border-dashed border-[--green-text] flex justify-center items-center">
                                            <Image src={val.image} alt="why-choose-1" width={1000} height={1000} className="w-[80%] h-[80%] sm:w-full sm:h-full object-contain" />
                                        </div>
                                        <div>
                                            <h1 className="text-lg font-semibold">{val.title}</h1>
                                            <p className="text-sm sm:text-base font-medium">{val.details}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[50%] ">
                    <div className="rounded-[25px] lg:h-[500px] relative bg-[--red-background] px-5 pt-12 pb-10 lg:transform lg:rotate-3 xl:rotate-6 mt-20 lg:mt-24 xl:mt-28 -z-50">
                        <div className="w-[60px] h-[60px] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFDCE2] p-[9px] rounded-[25px]">
                            <Image
                                src={"/images/why-choose-wrong.png"}
                                alt="why-choose-true"
                                width={1000}
                                height={1000}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <h1 className="text-center font-medium text-2xl !my-5">Other</h1>
                        <div className="space-y-7 sm:px-4 !mt-5">
                            {WhyChooseRedData.map((val, index) => {
                                return (
                                    <li key={index} className="list-none text-base text-[--gray] font-medium">{index + 1}. {val.details}</li>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs