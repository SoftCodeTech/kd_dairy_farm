"use client"

import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';

const Breadcrumb = ({ route, breadcrumb }) => {
    return (
        <Breadcrumbs aria-label="breadcrumb" className='text-[--white]'>
            <Link underline="hover" href="/" className='text-sm lg:text-base font-medium tracking-wider'>
                HOME
            </Link>
            <Link
                underline="hover"
                href={route}
                className='font-medium tracking-wider text-sm lg:text-base'
            >
                {breadcrumb?.toUpperCase()}
            </Link >
        </Breadcrumbs >
    )
}

export default Breadcrumb