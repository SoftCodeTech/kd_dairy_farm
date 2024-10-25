"use client"

import Image from "next/image";
import SocialMediaButtons from "../SocialMediaButtons";
// import { Fade } from "react-awesome-reveal";

const Footer = () => {
    return (
        <div className="py-4 relative bg-[--header-text] " >
            <div className="lg:flex lg:flex-row lg:justify-between flex flex-col   text-[--white] lg:px-24 px-5 mx-auto py-6  gap-10">
                <div className="flex-1">
                    <div className="w-[110px] flex justify-center items-center">
                        <Image src="/images/logo.png" alt="logo" width={1500} height={1500} className="w-[100%] h-[100%] object-contain flex justify-center" />
                    </div>
                    <p className="mt-4 mb-4 lg:text-normal text-[15px]">There are many variations of passages
                        of lorem ipsum available, but the
                        majority suffered.</p>
                    <div className="">

                        <SocialMediaButtons isFooter="true" />
                    </div>
                </div>

                <div className="flex-1">
                    <p className=" text-[20px] font-bold">Explore</p>
                    <p className="flex items-center space-x-2 mt-2 mb-5"><span className="h-1 w-12 rounded-sm bg-[--green]"></span><span className="h-1 w-1 rounded-full bg-[--green]"></span></p>
                    <div className="flex lg:flex-col flex-row lg:gap-0  gap-10  ">
                        <div className="">
                            <p className="mt-2 text-[15px] flex items-center gap-2 cursor-pointer"><img src="/svg/leave.svg" alt="" />About Us</p>
                            <p className="mt-2 text-[15px] flex items-center gap-2 cursor-pointer"><img src="/svg/leave.svg" alt="" />Services</p>
                        </div>
                        <div>


                            <p className="mt-2 text-[15px] flex items-center gap-2 cursor-pointer"><img src="/svg/leave.svg" alt="" />Products</p>
                            <p className="mt-2 text-[15px] flex items-center gap-2 cursor-pointer"><img src="/svg/leave.svg" alt="" />Contact Us</p>
                        </div>
                    </div>

                </div>
                <div className="flex-1">
                    <p className=" text-[20px] font-bold">Services</p>
                    <p className="flex items-center space-x-2 mt-2 mb-5"><span className="h-1 w-12 rounded-sm bg-[--green]"></span><span className="h-1 w-1 rounded-full bg-[--green]"></span></p>
                    <div>
                        <p className="mt-2 text-[15px] flex items-center gap-2 cursor-pointer"><img src="/svg/leave.svg" alt="" />Breed Development</p>
                        <p className="mt-2 text-[15px] flex items-center gap-2 cursor-pointer"><img src="/svg/leave.svg" alt="" />Farm Management</p>
                        <p className="mt-2 text-[15px] flex items-center gap-2 cursor-pointer"><img src="/svg/leave.svg" alt="" />Organic Fertilizer & Composting</p>
                    </div>
                </div>
                <div className="flex-1">
                    <p className=" text-[20px] font-bold">Contact</p>
                    <p className="flex items-center space-x-2 mt-2 mb-5"><span className="h-1 w-12 rounded-sm bg-[--green]"></span><span className="h-1 w-1 rounded-full bg-[--green]"></span></p>
                    <div className="mb-5">
                        <p className="mt-2 text-[15px] flex gap-2"><img src="/svg/phone.svg" alt="" />+ 91 90999 74229</p>
                        <p className="mt-2 text-[15px] flex gap-2 items-start"><img src="/svg/address.svg" alt="" />KD Farms, near Pali Gram Panchayat Office
                            Sachin,Surat, Gujarat, India - 394230</p>
                        <p className="mt-2 text-[15px] flex gap-2"><img src="/svg/email.svg" alt="" />kdfarmsmedia@gmail.com</p>
                    </div>
                </div>
            </div>
            {/* <Fade cascade direction="up"> */}
            <div className="py-7 w-[100%] border-t border-t-[rgba(255,255,255,0.3)] font-semibold text-[#A5A49A] flex lg:flex-row flex-col space-y-[10px] lg:space-y-0 justify-between items-center lg:px-24 mx-auto">
                <p className="  text-center text-sm ">© All Copyright 2024 by Kd FARMS </p>
                <p className="flex items-center ">
                    <span className="px-2">Terms of Use</span>
                    <span className="border-l border-[#A5A49A] px-2">Privacy Policy</span>
                </p>
            </div>
            {/* </Fade> */}
        </div>
    )
}

export default Footer