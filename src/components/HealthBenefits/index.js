"use client"

import { HealthBenefitsData } from "@/constants"
import Image from "next/image"

const HealthBenefits = () => {
    return (
        <div className="bg-[--icon-bg] my-20 py-28">
            <div className="mainContainer space-y-5">
                <h1 className="title-family font-semibold text-2xl  md:text-3xl lg:text-5xl text-center text-[--blue-text]">Health Benefits of <span className="text-[--green-text]">KD Farms</span> Dairy Products</h1>
                <div className="!mt-20 xl:!mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {HealthBenefitsData.map((val, index) => {
                        return (
                            <div key={index} className="bg-[--white] rounded-[25px] p-10 space-y-6">
                                <div className="w-[70px] h-[70px]">
                                    <Image src={val.image} alt="benefits-1" width={1000} height={1000} className="object-contain w-full h-full" />
                                </div>
                                <h1 className="text-xl font-semibold w-[70%]">{val.title}</h1>
                                <p className="text-sm font-medium text-[--gray] ">{val.details}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HealthBenefits