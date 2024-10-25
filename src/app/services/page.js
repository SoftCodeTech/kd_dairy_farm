'use client'
import Image from 'next/image';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { dairy_products as dairyProductData } from '@/constants'
import Banner from '@/components/Banner';

const Page = () => {

    console.log('dairyProductData', dairyProductData)
    return (
        <div className=''>
            <Banner route="/services" name="Services" breadcrumb="Services" image="/images/service-banner.png" />
            <div className="md:py-28 py-20 relative  overflow-hidden ">
                <div className="mainContainer lg:w-[80%] mx-auto">
                    {/* Breed Development Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3  lg:gap-14 md:gap-6">
                        <div className='col-span-1'>
                            <div className=''>
                                <Image src="/images/service-1.png" alt="Breed Development" height={500} width={500} className="w-full h-full object-cover " />
                            </div>
                        </div>
                        <div className="col-span-2 ">
                            <div className='md:mt-0 mt-5'>
                                <p className='text-white flex justify-center items-center bg-[--green-text]  rounded-full title-family lg:text-xl font-semibold lg:w-[50px] lg:h-[50px]  w-[40px] h-[40px] mb-3'>01</p>
                            </div>
                            <h2 className="lg:text-[32px] md:text-[28px] text-2xl font-bold  title-family text-[--header-text] text-left">Breed Development</h2>
                            <p className="font-medium mt-4 text-[--gray] md:text-normal text-sm">
                                KD Farms is at the forefront of breed development, specializing in both natural and arƟficial inseminaƟon techniques to improve the geneƟc quality of caƩle. Our goal is to create caƩle that not only produce more milk but are also more resilient to diseases. We also provide consultancy services to other farm owners, helping them implement best pracƟces for improving milk yield and animal health. Whether it’s cows, buffaloes, or goats, our experƟse spans a variety of species, and we are equipped to offer arƟficial inseminaƟon doses and natural breeding processes.
                            </p>
                        </div>
                    </div>

                    {/* Farm Management Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3  lg:gap-14 md:gap-6 py-16">
                        <div className='col-span-1 md:order-2'>
                            <div className=''>
                                <Image src="/images/service-2.png" alt="Breed Development" height={500} width={500} className="w-full h-full " />
                            </div>
                        </div>
                        <div className="col-span-2 md:order-1">
                            <div className='md:mt-0 mt-5'>
                                <p className='text-white flex justify-center items-center bg-[--green-text]  rounded-full title-family lg:text-xl font-semibold lg:w-[50px] lg:h-[50px]  w-[40px] h-[40px] mb-3'>02</p>
                            </div>
                            <h2 className="lg:text-[32px] md:text-[28px] text-2xl font-bold  title-family text-[--header-text] text-left">Farm Management</h2>
                            <p className="font-medium mt-4 text-[--gray] md:text-normal text-sm">
                                We believe that the well-being of our animals is paramount. Our farm management system includes everything from the automaƟc milking parlours to soŌware that tracks the health and producƟon data of each animal. This system ensures Ɵmely vaccinaƟons, feeding schedules, and health monitoring, leading to happier animals and beƩer milk producƟon. We even use our own customized animal profiling soŌware to track each animal’s medical and feeding history, enabling us to adjust care as needed.
                            </p>
                        </div>
                    </div>

                    {/* Organic Fertilizer & Composting Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3  lg:gap-14 md:gap-6">
                        <div className='col-span-1'>

                            <div className=''>
                                <Image src="/images/service-3.png" alt="Breed Development" height={500} width={500} className="w-full h-full " />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className='md:mt-0 mt-5'>
                                <p className='text-white flex justify-center items-center bg-[--green-text]  rounded-full title-family lg:text-xl font-semibold lg:w-[50px] lg:h-[50px]  w-[40px] h-[40px] mb-3'>03</p>
                            </div>
                            <h2 className="lg:text-[32px] md:text-[28px] text-2xl font-bold  title-family text-[--header-text] text-left">Organic Fertilizer &
                                Composting</h2>
                            <p className="font-medium mt-4 text-[--gray] md:text-normal text-sm">
                                At KD Farms, sustainability is a way of life. We produce organic ferƟlizer and compost using vermiculture techniques, ensuring that our animals receive the best possible nutriƟon from the fodder we grow. Our compost is also available for sale to other farms, helping them achieve higher crop yields without the use of harmful chemicals. The result is a closed-loop system where nothing goes to waste, and every part of the farm contributes to the health of the ecosystem.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
