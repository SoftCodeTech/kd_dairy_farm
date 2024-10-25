'use client'
import Banner from '@/components/Banner';
import ContactUs from '@/components/ContactUs';
import CallIcon from '@mui/icons-material/Call';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Link from 'next/link';

const Page = () => {
    return (
        <div>
            <Banner route="/contact-us" name="Contact Us" breadcrumb="Contact Us" image="/images/contact-us-banner.png" />
            <div className='mainContainer pt-16 lg:pt-24 pb-24 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10 xl:space-x-16'>
                <div className='w-full lg:w-[50%]'>
                    <div className='bg-[--icon-bg] p-10 space-y-5'>
                        <h1 className='title-family font-semibold text-2xl sm:text-3xl lg:text-4xl text-[--green-text]'>Contact us</h1>
                        <div className='flex items-center space-x-5'>
                            <div className='w-[50px] h-[50px] flex justify-center items-center p-2 rounded-full bg-[--white]'>
                                <CallIcon className='text-[--yellow]' />
                            </div>
                            <Link href={"tel:+919099974229"} target="_blank" className='text-lg font-semibold hover:underline'>+ 91 90999 74229</Link>
                        </div>
                        <div className='flex items-center space-x-5'>
                            <div className='w-[50px] h-[50px] flex justify-center items-center p-2 rounded-full bg-[--white]'>
                                <EmailOutlinedIcon className='text-[--yellow]' />
                            </div>
                            <Link href="mailto:kdfarmsmedia@gmail.com" target="_blank" className='text-lg font-semibold hover:underline'>info@kdfarms.com</Link>
                        </div>
                        <div className='flex items-center space-x-5'>
                            <div className='w-[50px] h-[50px] flex justify-center items-center p-2 rounded-full bg-[--white]'>
                                <LocationOnOutlinedIcon className='text-[--yellow]' />
                            </div>
                            <Link href={"https://maps.app.goo.gl/vYMPsiCpanjY3TBY6"} target='_blank' className='text-lg font-semibold hover:underline'>KD Farms, Surat, Gujarat, India</Link>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-[50%] space-y-8'>
                    <div className='space-y-4'>
                        <h1 className='title-family font-semibold text-2xl sm:text-3xl lg:text-4xl text-[--blue-text]'>Get in Touch</h1>
                        <p className='text-[--gray] text-lg font-medium'>We’re here to answer all your quesƟons! Whether you’re looking for more informaƟon about our products, want to book a consultaƟon, or just want to learn more about our farm, don’t hesitate to reach out.</p>
                    </div>
                    <div className='space-y-4'>
                        <h1 className='title-family font-semibold text-2xl sm:text-3xl lg:text-4xl text-[--blue-text]'>Farm Visits</h1>
                        <p className='text-[--gray] text-lg font-medium'>Want to see KD Farms in acƟon? Book a farm visit today! We offer guided tours where you can see our animals, learn about our organic farming methods, and even try some of our fresh products.</p>
                    </div>
                </div>
            </div>
            <ContactUs />
        </div>
    )
}

export default Page
