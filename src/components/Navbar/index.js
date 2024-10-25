"use client"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Routes } from "@/routes";
import Image from "next/image";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import SocialMediaButtons from '../SocialMediaButtons';
import { Popover } from '@mui/material';

const Navbar = () => {
    const pathname = usePathname()
    const router = useRouter()
    const [sideNavToggle, setSideNavToggle] = useState(false)
    const [drawerToggle, setDrawerToggle] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(null)
    const [isNavbarBg, setIsNavbarBg] = useState(false)
    const [toggle, setToggle] = useState(false);
    const [anchorElModal, setAnchorElModal] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState([])

    const handlePopoverClose = () => setAnchorElModal(null);
    const handlePopoverOpen = (event, category) => {
        setAnchorElModal(event.currentTarget)
        setSelectedCategory(category)
    };

    useEffect(() => {
        if (toggle) {
            document.body.style.overflow = "hidden"; // Disable scrolling
        } else {
            document.body.style.overflow = "auto"; // Re-enable scrolling
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [toggle]);


    return (
        <div className='fixed top-0 left-0 z-10 w-full'>
            <div className={`bg-[--white] w-[100%] `}>
                <div className="py-3 flex lg:justify-between justify-center items-center xl:px-20 lg:px-10 ">
                    <Link href={"/"}>
                        <div className="w-[110px] flex justify-center items-center">
                            <Image src="/images/logo.png" alt="logo" width={1500} height={1500} className="w-[100%] h-[100%] object-contain flex justify-center" />
                        </div>
                    </Link>
                    <div className="lg:hidden absolute top-[26px] left-[20px] bg-[--icon-bg] transition-all ease-in-out duration-500 rounded-full text-[#002756] h-[42px] w-[42px] flex justify-center items-center">
                        <img src={toggle ? '/svg/close.svg' : '/svg/menu.svg'} className='h-[14px] w-[14px] object-contain transition-all ease-in-out duration-500' onClick={() => setToggle(prev => !prev)} />
                    </div>
                    <div className='hidden lg:flex items-center xl:space-x-12 lg:space-x-6'>
                        <div className='flex justify-center items-center'>
                            <SocialMediaButtons />
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-3 p-2 xl:px-4 lg:px-1'>
                                <img src="/images/phone.png" alt="phone" className='h-[24px] w-[24px] xl:h-[30px] xl:w-[30px]' />
                                <div>
                                    <p className='text-[--header-subtext] text-xs font-medium'>Call anytime</p>
                                    <Link href={"tel:+919099974229"} target="_blank" className='text-[--header-text] text-sm font-semibold hover:underline'>+ 91 90999 74229</Link>
                                </div>
                            </div>
                            <div className='flex items-center space-x-3 border-l border-[#E4E2D7] p-2 xl:px-4 lg:px-1'>
                                <img src="/images/email.png" alt="phone" className='h-[24px] w-[24px] xl:h-[30px] xl:w-[30px]' />
                                <div>
                                    <p className='text-[--header-subtext] text-xs font-medium'>Send email</p>
                                    <Link href="mailto:kdfarmsmedia@gmail.com" target="_blank" className='text-[--header-text] text-sm font-semibold hover:underline'>kdfarmsmedia@gmail.com</Link>
                                </div>
                            </div>
                            <div className='flex items-center space-x-3  border-l border-[#E4E2D7] p-2 xl:px-4 lg:px-1'>
                                <img src="/images/location.png" alt="phone" className='h-[28px] w-[24px] xl:h-[35px] xl:w-[30px]' />
                                <Link href={"https://maps.app.goo.gl/nH4pntTrE1DZpWiP6"} target="_blank" className='hover:underline'>
                                    <p className='text-[--header-subtext] text-xs font-medium'>Pali Gam, Sachin</p>
                                    <p className='text-[--header-text] text-sm font-semibold'>Surat, Gujarat 394230</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Web Navbar */}
            <div className=' hidden lg:block w-full h-auto bg-transparent' style={{ backgroundImage: "url(/images/header-bg.png)", backgroundPosition: "center" }}>
                <div className="flex items-center justify-center space-x-10">
                    {Routes?.map((val, index) => (
                        <div>
                            <li key={index} className={`relative cursor-pointer py-4 flex items-center list-none transition-all ease-in-out duration-500  font-semibold text-[--header-subtext] ${pathname === val.path && "text-[--header-text]"}`}
                                onClick={(e) => {
                                    if (val?.child) {
                                        handlePopoverOpen(e, val.child)
                                    } else {
                                        router.push(val.path)
                                    }
                                }}><span>{val.name}</span>
                                {val?.child && <KeyboardArrowDownOutlinedIcon fontSize="small" className='lg:block hidden' />}
                            </li>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Navbar */}
            <div
                className={`${toggle && "bg-[#F6F6F1] lg:hidden fixed w-[100%] !h-[87.5%]"} z-10 fixed top-[12.5%] left-0 transition-all ease-in-out duration-500 px-5  ${toggle ? "translate-x-0" : "translate-x-[-100%]"
                    }`}
            >
                <div className="flex lg:flex-row flex-col items-center justify-center lg:space-x-10 space-y-[30px] lg:space-y-0 lg:mt-0 mt-10">
                    {Routes?.map((val, index) => (
                        <Link href={val.path} key={index} className="" onClick={() => setToggle(false)} >
                            <li className={`flex list-none transition-all ease-in-out duration-500 text-[20px] font-medium  text-[--header-subtext] ${pathname === val.path && "text-[--header-text] font-extrabold"}`}><span>{val.name}</span> 
                            {/* {val?.child && <KeyboardArrowDownOutlinedIcon fontSize="small" />} */}
                            </li>
                            {val?.child && (
                                <div className={`navSubItems space-y-4`}>
                                    {val?.child?.map((child, idx) => (
                                        // <Link href={child.path} key={idx}>
                                        <li key={idx} className="list-none text-[--blue-text] text-sm font-semibold hover:text-[--blue] transition-all ease-in-out duration-500" onClick={() => {
                                            console.log('path', child.path)
                                            router.push(child.path)
                                        }}>
                                            {child.name} 
                                        </li>
                                        // </Link>
                                    ))}
                                </div>
                            )}
                        </Link>
                    ))}
                </div>

                <div className='bg-[#878680] h-[1px] w-full my-10'></div>

                <div className='flex justify-center items-center'>
                    <div className=' '>
                        <div className='flex items-center space-x-3  px-4'>
                            <img src="/images/phone.png" alt="phone" className='h-[30px] w-[30px]' />
                            <div>
                                <p className='text-[--header-subtext] text-xs font-medium'>Call anytime</p>
                                <Link href={"tel:+919099974229"} target="_blank" className='text-[--header-text] text-sm font-semibold hover:undeline'>+ 91 90999 74229</Link>
                            </div>
                        </div>
                        <div className='flex items-center space-x-3  p-6 px-4'>
                            <img src="/images/email.png" alt="phone" className='h-[30px] w-[30px]' />
                            <div>
                                <p className='text-[--header-subtext] text-xs font-medium'>Send email</p>
                                <Link href="mailto:kdfarmsmedia@gmail.com" target="_blank" className='text-[--header-text] text-sm font-semibold'>kdfarmsmedia@gmail.com</Link>
                            </div>
                        </div>
                        <div className='flex items-center space-x-3     px-4'>
                            <img src="/images/location.png" alt="phone" className='h-[35px] w-[24px]' />
                            <Link href={"https://maps.app.goo.gl/nH4pntTrE1DZpWiP6"} target="_blank">
                                <p className='text-[--header-subtext] text-xs font-medium'>Pali Gam, Sachin</p>
                                <p className='text-[--header-text] text-sm font-semibold'>Surat, Gujarat 394230</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='bg-[#878680] h-[1px] w-full my-10'></div>
                <div className='flex justify-center items-center'>
                    <SocialMediaButtons isMobileView="true" />
                </div>
                <Popover
                    id="mouse-over-popover"
                    className='lg:mt-[4px] xl:mt-[7px]'
                    sx={{ bgcolor: "rgba(0, 0, 0, 0.1)" }}
                    open={Boolean(anchorElModal)}
                    anchorEl={anchorElModal}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                >
                    <div className={`px-4 pt-3 w-[200px] border-t-4 border-[--yellow] rounded-md`}>
                        {selectedCategory?.map((subCategory, idx) => (
                            <div key={idx}>
                                <Link key={idx} href={subCategory.path}>
                                    <li className='list-none text-md font-semibold !mb-3 whitespace-nowrap truncate max-w-xs tracking-wide hover:tracking-wider hover:font-bold cursor-pointer transition-all ease-in-out duration-500 hover:text-[--primary-theme-color] w-max' onClick={() => handlePopoverClose()}>{subCategory.name}</li>
                                </Link>
                            </div>
                        ))}
                    </div>
                </Popover>

            </div>
        </div >
    )
}

export default Navbar