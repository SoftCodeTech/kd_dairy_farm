"use client"

import { FrequentlyData } from '@/constants';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Collapse, List, ListItemButton } from "@mui/material";
import { useState } from 'react';

const Frequently = () => {
    const [tabOpenIndex, setTabOpenIndex] = useState(null);

    const handleTabClick = (index) => setTabOpenIndex((prevIndex) => (prevIndex === index ? null : index));

    return (
        <div className="mainContainer my-20 py-28 space-y-5">
            <h1 className="title-family font-semibold text-2xl md:text-3xl lg:text-5xl text-center text-[--blue-text]">Frequently Asked Questions</h1>
            <div className="!mt-14">
                {FrequentlyData?.map((val, index) => {
                    return (
                        <List className='w-full' key={index}>
                            <ListItemButton className="flex items-center justify-between w-full text-[--gray] py-3 px-5 rounded-xl tracking-wider bg-[#F8F8F8]" onClick={() => handleTabClick(index)}>
                                <li className='!text-[15px] capitalize !font-semibold'>{index + 1}. {val.title}</li>
                                <span>{tabOpenIndex === index ? <RemoveIcon /> : <AddIcon />}</span>
                            </ListItemButton>
                            <Collapse in={tabOpenIndex === index} timeout="auto" unmountOnExit>
                                <List component="div" className='p-3'>
                                    <p>{val.details}</p>
                                </List>
                            </Collapse>
                        </List>
                    )
                })}
            </div>
        </div >
    )
}

export default Frequently