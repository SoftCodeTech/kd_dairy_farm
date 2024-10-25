"use client"

import Image from "next/image";
import SocialMediaButtons from "../SocialMediaButtons";
import Link from "next/link";
import { FooterRoutes } from "@/constants";
// import { Fade } from "react-awesome-reveal";

const Footer = () => {
    return (
        <div className="py-4 relative bg-[--header-text] " >
            <div className="lg:flex lg:flex-row lg:justify-between flex flex-col   text-[--white] lg:px-24 px-5 mx-auto py-6  gap-10">
                <div className="flex-1">
                    <Link href={"/"} className="w-[110px] flex justify-center items-center">
                        <Image src="/images/logo.png" alt="logo" width={1500} height={1500} className="w-[100%] h-[100%] object-contain flex justify-center" />
                    </Link>
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
                    <div className="grid grid-cols-2 lg:grid-cols-1 sm:w-[50%] lg:w-full">
                        {FooterRoutes.ExploreData.map((val, index) => {
                            return (
                                <Link href={val.route} key={index} className="mt-2 text-[15px] flex items-center gap-2 cursor-pointer hover:tracking-wider transition-all duration-500 ease-in-out hover:text-[--green] w-max "><img src="/svg/leave.svg" alt="" />{val.name}</Link>
                            )
                        })}
                    </div>
                </div>
                <div className="flex-1">
                    <p className=" text-[20px] font-bold">Services</p>
                    <p className="flex items-center space-x-2 mt-2 mb-5"><span className="h-1 w-12 rounded-sm bg-[--green]"></span><span className="h-1 w-1 rounded-full bg-[--green]"></span></p>
                    <div className="grid grid-cols-1">
                        {FooterRoutes.ServicesData.map((val, index) => {
                            return (
                                <Link href={val.route} key={index} className="mt-2 text-[15px] flex items-center gap-2 cursor-pointer hover:tracking-wider transition-all duration-500 ease-in-out hover:text-[--green] w-max"><img src="/svg/leave.svg" alt="" />{val.name}</Link>
                            )
                        })}
                    </div>
                </div>
                <div className="flex-1">
                    <p className=" text-[20px] font-bold">Contact</p>
                    <p className="flex items-center space-x-2 mt-2 mb-5"><span className="h-1 w-12 rounded-sm bg-[--green]"></span><span className="h-1 w-1 rounded-full bg-[--green]"></span></p>
                    <div className="mb-5">
                        <Link href={"tel:+919099974229"} target="_blank" className="mt-2 text-[15px] flex gap-2 hover:underline"><img src="/svg/phone.svg" alt="" />+ 91 90999 74229</Link>
                        <Link href={"https://maps.app.goo.gl/nH4pntTrE1DZpWiP6"} target="_blank" className="mt-2 text-[15px] flex gap-2 items-start hover:underline"><img src="/svg/address.svg" alt="" />KD Farms, near Pali Gram Panchayat Office
                            Sachin,Surat, Gujarat, India - 394230</Link>
                        <Link href="mailto:kdfarmsmedia@gmail.com" target="_blank" className="mt-2 text-[15px] flex gap-2 hover:underline"><img src="/svg/email.svg" alt="" />kdfarmsmedia@gmail.com</Link>
                    </div>
                </div>
            </div>
            {/* <Fade cascade direction="up"> */}
            <div className="py-7 w-[100%] border-t border-t-[rgba(255,255,255,0.3)] font-semibold text-[#A5A49A] flex lg:flex-row flex-col space-y-[10px] lg:space-y-0 justify-between items-center px-24 mx-auto">
                <p className="  text-center text-sm ">© All Copyright {new Date().getFullYear()} by Kd FARMS </p>
                <p className="flex items-center ">
                    <Link href={"/"} className="px-2 hover:underline">Terms of Use</Link>
                    <Link href={"/"} className="border-l border-[#A5A49A] px-2 hover:underline">Privacy Policy</Link>
                </p>
            </div>
            {/* </Fade> */}
        </div>
    )
}

export default Footer