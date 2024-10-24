'use client'
import Image from 'next/image';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { dairy_products as dairyProductData } from '@/constants'
      import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Page = () => {

    console.log('dairyProductData', dairyProductData)
    return (
        <>
            <div className="relative w-screen h-[500px] gradient-overlay mb-10">
                <Image src="/images/contactus.jpg" alt="logo" width={1500} height={200} className="w-[100%] h-[100%] object-cover flex justify-center mainImage" />
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{
                    backgroundColor: "transparent",
                    backgroundImage: "linear-gradient(90deg, #273a97 0%, #2A2B3F00 75%)"
                }}></div>
                <div className="absolute bottom-0" >
                    <Image src="/images/about-us-overlay.png" alt="logo" width={1500} height={200} className="w-[100%] h-[100%] object-cover flex justify-center mainImage" />
                </div>
                <div className="absolute w-[24%] h-full top-0 left-20 flex justify-center items-center">
                    <div>
                        <p className="text-[20px] font-bold text-[--yellow] mx-auto italic" style={{
                            fontFamily: "Courgette,cursive"
                        }}>All Products</p>
                        <p className="text-[40px] font-bold text-[--white]">
                            Dairy Product
                        </p>
                        <p className=' text-[--white] text-xl font-medium'>Support local farmers and choose FreshMoo for your dairy needs.</p>
                    </div>
                </div>
            </div>

            <div className='my-20 mx-auto '>
                <p className="text-[20px] font-bold text-[--yellow] mx-auto italic text-center" style={{
                    fontFamily: "Courgette,cursive"
                }}>Our Shop</p>
                <p className="text-[40px] font-bold text-[--blue-text] text-center">
                    Meet Our Dairy Products
                </p>
                <p className='text-[--gray] w-1/2 mx-auto text-center'>We offer a variety of organic dairy products, all sourced from our grass-fed animals. Our cows are fed a diet
                    free from hormones, anƟbioƟcs, and chemical addiƟves, ensuring that their milk is as pure as possible.</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 my-10'>
                    {dairyProductData?.map((prod, ele) => {
                        return (
                            <div className='shadow-2xl rounded-[20px] bg-white p-7 w-full'>
                                <Image src={prod.image} alt={prod.name} width={1500} height={200} className="w-[100%] h-auto object-cover bg-center" />
                                <div className='flex items-center gap-3'>

                                    <Image src="/images/stars.png" alt="stars" width={1500} height={200} className="w-auto max-h-[12px] object-cover bg-center" />
                                    <span className='text-[--yellow] font-semibold mt-1 text-sm'>{prod.star}</span>
                                </div>
                                <p className="text-[22px] font-semibold text-[--blue-text]">
                                    {prod.name}
                                </p>
                                <p className="text-[15px]  text-[--gray] mt-[10px] mb-[5px]" style={{
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis"
                                }}>
                                    {prod.description}
                                </p>
                                <div className='flex justify-between items-center mt-4'>

                                    <p className="text-[18px] font-bold text-[--blue-text]">
                                        ${prod.price}
                                    </p>
                                    <div className='flex  items-center gap-4'>

                                        <div className='bg-[#ededf0] rounded-[10px] p-2 flex justify-center items-center'>
                                            <FavoriteIcon className='text-[--blue-text]' />
                                        </div>
                                        <div className='bg-[#ededf0] rounded-[10px] p-2 flex justify-center items-center'>
                                            <ShoppingCartIcon className='text-[--blue-text]' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })}
                </div>



            </div>   {/* why choose us */}


            <div className="container mx-auto py-10">
                <p className="text-[40px] font-bold text-[--blue-text] text-center">
                    Animal Feed (Nutrifeed)
                </p>
          

<Skeleton width={200} height={10}/> 


                {/* Animal Feed Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {/* Silage */}
                    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                        <Image src='' alt='' width={1500} height={200} className="w-[100%] h-auto object-cover bg-center" />
                        <div className='flex items-center gap-3'></div>
                        <p className="text-[22px] font-semibold text-[--blue-text]">
                            Silage
                        </p>
                        <p className="text-[15px]  text-[--gray] mt-[10px] mb-[5px]" style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }}>
                            Available in corn, hipro, and sugarcane varieƟes, our silage improves digesƟon and boosts
                            milk producƟon.
                        </p>  </div>

                    {/* Calf Grower Feed */}
                    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                        <img src="/images/calf-grower.jpg" alt="Calf Grower Feed" className="w-full h-40 object-cover rounded-md mb-4" />
                        <h2 className="text-2xl font-bold">Calf Grower Feed</h2>
                        <p className="mt-2">Ensures healthy development in young calves, leading to higher milk yields as they mature.</p>
                    </div>

                    {/* Pre-Calving Feed */}
                    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                        <img src="/images/pre-calving-feed.jpg" alt="Pre-Calving Feed" className="w-full h-40 object-cover rounded-md mb-4" />
                        <h2 className="text-2xl font-bold">Pre-Calving Feed</h2>
                        <p className="mt-2">Improves the health of pregnant cattle, ensuring a healthy calf and high milk production post-calving.</p>
                    </div>
                </div>

                {/* Packaging & Testing Section */}
                <p className="text-[40px] font-bold text-[--blue-text] text-center">
                    Packaging & Testing
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Packaging */}
                    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                        <img src="/images/packaging.jpg" alt="Packaging" className="w-full h-40 object-cover rounded-md mb-4" />
                        <h2 className="text-2xl font-bold">Packaging</h2>
                        <p className="mt-2">Our milk is packaged in food-grade PET bottles, sterilized with UV light to ensure freshness and quality.</p>
                    </div>

                    {/* Testing */}
                    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
                        <img src="/images/testing.jpg" alt="Testing" className="w-full h-40 object-cover rounded-md mb-4" />
                        <h2 className="text-2xl font-bold">Testing</h2>
                        <p className="mt-2">Regular testing ensures our milk meets the highest standards of purity and quality.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Page
