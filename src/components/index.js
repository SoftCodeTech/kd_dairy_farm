"use client"
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Collapse, Drawer, List, ListItemButton } from '@mui/material';
import { Routes } from '@src/constant';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const MobileDrawer = ({ toggle, setToggle }) => {
    const [tabOpenIndex, setTabOpenIndex] = useState(null);
    const [childTabOpenIndex, setChildTabOpenIndex] = useState(null);
    const router = useRouter();

    const handleTabClick = (index) => setTabOpenIndex((prevIndex) => (prevIndex === index ? null : index));

    const handleChildTabClick = (index) => setChildTabOpenIndex((prevIndex) => (prevIndex === index ? null : index));

    const sideNavCloseHandler = () => setToggle(false)

    return (
        <Drawer open={toggle} onClose={sideNavCloseHandler}>
            <Box sx={{ width: 320 }} role="presentation" className="pt-4 pb-6">
                <div className="flex justify-between items-start px-3">
                    <Link href={"/"} className="w-[65px] h-[65px] md:w-[78px] md:h-[78px]">
                        <Image src="/images/logo.png" alt="logo" width={100} height={100} className="object-contain w-full h-full" />
                    </Link>
                    <CloseIcon fontSize="medium" className="" onClick={sideNavCloseHandler} />
                </div>
                <List component="nav" className='space-y-1'>
                    {Routes.map((val, index) => (
                        <div key={index} className='w-full'>
                            <ListItemButton >
                                <div className={`flex items-center justify-between space-x-3 w-full border-b-2 border-[#CCD3D1] hover:text-[--primary-theme-color] pb-1 hover:border-[--primary-theme-color] transition-all ease-in-out duration-500 tracking-wider `} onClick={(e) => {
                                    if (val?.child?.length > 0) {
                                        handleTabClick(index)
                                    } else {
                                        router.push(val.path)
                                        sideNavCloseHandler()
                                    }
                                }} >
                                    <li className='!text-md capitalize !font-bold whitespace-nowrap truncate max-w-xs'>{val.label}</li>
                                    {val?.child?.length > 0 && <span>{tabOpenIndex === index ? <ExpandLess /> : <ExpandMore />}</span>}
                                </div>
                            </ListItemButton>
                            {val?.child &&
                                <Collapse in={tabOpenIndex === index} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {val?.child?.map((subCat, idx) => {
                                            return (
                                                <div key={idx}>
                                                    <ListItemButton>
                                                        <div className={`flex items-center justify-between w-full border-b-2 hover:text-[--primary-theme-color] pb-[2px] space-x-3 hover:border-[--primary-theme-color] transition-all ease-in-out duration-500 tracking-wider ml-2`} onClick={(e) => {
                                                            handleChildTabClick(idx)
                                                            if (subCat?.child?.length) {
                                                            } else {
                                                                router.push("/")
                                                                sideNavCloseHandler()
                                                            }
                                                        }} >
                                                            <li className='!text-[14px] capitalize !font-semibold whitespace-nowrap truncate max-w-xs'>{subCat.label}</li>
                                                            {subCat?.child?.length > 0 && <span>{childTabOpenIndex === idx ? <RemoveIcon /> : <AddIcon />}</span>}
                                                        </div>
                                                    </ListItemButton>
                                                </div>
                                            )
                                        })}
                                    </List>
                                </Collapse>
                            }
                        </div>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}

export default MobileDrawer