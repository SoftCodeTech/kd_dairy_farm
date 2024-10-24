"use client"

import Image from 'next/image';
import Breadcrumb from '../Breadcrumb';

const Banner = ({ route, name, breadcrumb, image }) => {
    return (
        <div className='relative w-full flex justify-center items-center'>
            <div className='w-full h-[60vh]'>
                <Image src={image} alt="product-banner" width={1000} height={1000} className='w-full h-full object-cover' />
            </div>
            <div className='absolute flex flex-col justify-center items-center mt-10 space-y-5'>
                <Breadcrumb route={route} breadcrumb={breadcrumb} />
                <h1 className=' title-family text-[--white] font-semibold text-3xl lg:text-5xl'>{name}</h1>
            </div>
        </div>
    )
}

export default Banner