"use client";
import Image from 'next/image';
import Link from 'next/link';

const WhatsAooLinkButton = () => {
    const phoneNumber = "+919099974229";
    return (
        <Link href={`https://wa.me/${phoneNumber}`} target='_blank'>
            <Image src="/images/whatsapp-icon.png" alt='whatsapp' width={1000} height={1000} className={`w-[60px] h-[60px] z-20 fixed right-3 bottom-20 cursor-pointer transition-all duration-500 flex items-center justify-center `} />
        </Link>
    )
}

export default WhatsAooLinkButton