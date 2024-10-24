'use client'
import Image from 'next/image';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { dairy_products as dairyProductData } from '@/constants'


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

            <div className="container mx-auto py-10">
                <p className="text-[40px] font-bold text-[--blue-text] text-center my-4">
                    Our Services
                </p>


                {/* Breed Development Section */}
                <div className="flex flex-col lg:flex-row items-center mb-10">
                    <img src="/images/cattle-breed.webp" alt="Breed Development" className="w-[400px] max-h-[300px] lg:w-1/2 rounded-md shadow-lg" />
                    <div className="lg:ml-8 mt-4 lg:mt-0">
                        <h2 className="text-2xl font-bold text-[--blue]">Breed Development</h2>
                        <p className="text-lg mt-4 text-[--gray]">
                            KD Farms is at the forefront of breed development, specializing in both natural and artificial insemination techniques to improve the genetic quality of cattle. Our goal is to create cattle that produce more milk and are resilient to diseases.
                        </p>
                    </div>
                </div>

                {/* Farm Management Section */}
                <div className="flex flex-col lg:flex-row-reverse items-center mb-10">
                    <img src="/images/farm.avif" alt="Farm Management" className="w-[400px] max-h-[300px] lg:w-1/2 rounded-md shadow-lg" />
                    <div className="lg:mr-8 mt-4 lg:mt-0">
                        <h2 className="text-2xl font-bold text-[--blue]">Farm Management</h2>
                        <p className="text-lg mt-4 text-[--gray]">
                            Our farm management system includes automatic milking parlours, software that tracks health and production data, and more. This leads to happier animals and better milk production.
                        </p>
                    </div>
                </div>

                {/* Organic Fertilizer & Composting Section */}
                <div className="flex flex-col lg:flex-row items-center mb-10">
                    <img src="/images/compose.avif" alt="Breed Development" className="w-[400px] max-h-[300px] lg:w-1/2 rounded-md shadow-lg" />
                    <div className="lg:ml-8 mt-4 lg:mt-0">
                        <h2 className="text-2xl font-bold text-[--blue]">Breed Development</h2>
                        <p className="text-lg mt-4 text-[--gray]">
                            KD Farms is at the forefront of breed development, specializing in both natural and artificial insemination techniques to improve the genetic quality of cattle. Our goal is to create cattle that produce more milk and are resilient to diseases.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Page
