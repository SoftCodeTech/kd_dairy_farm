"use client"
import Link from 'next/link';

const SocialMediaButtons = ({ isFooter,isMobileView }) => {
    return (
        <div className='flex  items-center gap-[10px] '>
            <Link href="https://www.facebook.com/" className={` ${isFooter ? 'bg-[rgba(255,255,255,0.1)]' :isMobileView?'bg-[--white]': 'bg-[--icon-bg]'} transition-all ease-in-out duration-500 rounded-full text-[#002756]' target="_blank" rel="noopener noreferrer1`}>
            <p className='h-10 w-10 flex justify-center items-center'>
                <img src={`${isFooter?'/svg/facebook.svg':'/svg/facebook-1.svg'}`} className='h-[14px] w-[14px] object-contain' />
            </p>
            </Link>
            <Link href="https://www.facebook.com/" className={` ${isFooter ? 'bg-[rgba(255,255,255,0.1)]' :isMobileView?'bg-[--white]': 'bg-[--icon-bg]'} transition-all ease-in-out duration-500 rounded-full ' target="_blank" rel="noopener noreferrer1`}>
            <p className='h-10 w-10 flex justify-center items-center'>
                <img src={`${isFooter?'/svg/pintrest.svg':'/svg/pintrest-1.svg'}`} className='h-[14px] w-[14px] object-contain' />
            </p>

            </Link> <Link href="https://www.facebook.com/" className={` ${isFooter ? 'bg-[rgba(255,255,255,0.1)]' : isMobileView?'bg-[--white]':'bg-[--icon-bg]'} transition-all ease-in-out duration-500 rounded-full ' target="_blank" rel="noopener noreferrer1`}>
            <p className='h-10 w-10 flex justify-center items-center'>
                <img src={`${isFooter?'/svg/instagram.svg':'/svg/instagram-1.svg'}`}className='h-[14px] w-[14px] object-contain' />
            </p>
                
            </Link> <Link href="https://www.facebook.com/" className={` ${isFooter ? 'bg-[rgba(255,255,255,0.1)]' : isMobileView?'bg-[--white]':'bg-[--icon-bg]'} transition-all ease-in-out duration-500 rounded-full ' target="_blank" rel="noopener noreferrer1`}>
            <p className='h-10 w-10 flex justify-center items-center'>
                <img src={`${isFooter?'/svg/twitter.svg':'/svg/twitter-1.svg'}`} className='h-[14px] w-[14px] object-contain' />
            </p>
            </Link>
        </div>
    )
}

export default SocialMediaButtons