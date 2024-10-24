import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <>


            <div className="relative w-screen h-[500px] gradient-overlay mb-10">
                <Image src="/images/about-us.jpg" alt="logo" width={1500} height={200} className="w-[100%] h-[100%] object-cover flex justify-center mainImage" />
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
                        }}>History of our farm </p>
                        <p className="text-[40px] font-bold text-[--white]">
                            About Us
                        </p>
                        <p className=' text-[--white] text-xl font-medium'>Support local farmers and choose KD Farms for your dairy needs.</p>
                    </div>
                </div>
            </div>

            {/* about us */}
            <div className='my-20 flex gap-10 justify-between px-10'>
                <div className='relative shrink-0'>
                    <Image src="/images/cows-about-us.jpg" alt="logo" width={1500} height={200} className="w-[100%] h-[430px] object-cover flex justify-center rounded-tl-[80px] rounded-br-[80px]" />
                    <div className='absolute  bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[80%] p-7 text-[30px] font-bold bg-[--blue-text] text-white rounded-bl-[50px] rounded-tr-[50px]'>
                        <p>We Are Trusted</p>
                        <p>Happy <span className='text-[--yellow]'>400+</span> Clients</p>
                    </div>
                </div>

                <div className='px-10'>
                    <p className="text-[20px] font-bold text-[--yellow]  italic" style={{
                        fontFamily: "Courgette,cursive"
                    }}>About Us </p>
                    <p className="text-[--blue-text] font-semibold text-[40px] my-3" style={{ lineHeight: "1.2em" }}>Tracing the Journey of Milk from Our Contented Cows</p>
                    <p className="text-[--gray] text-justify" >KD Farms was founded by Karna Desai, a passionate advocate for organic living, in the heart of Surat. With
                        a background in sustainable farming prac􀆟ces, Karna realized the growing need for pure, organic milk and
                        dairy products in the city. He sought to bridge the gap between demand and supply by crea􀆟ng a selfsustained
                        organic farm, where every step of the process—from growing fodder to breeding ca􀆩le—was
                        done with care and precision. His mission is simple: to bring organic, nutri􀆟ous milk and dairy products to
                        every household, while also contribu􀆟ng to be􀆩er breed development for the future.</p>
                </div>
            </div>

            {/* why choose us */}
            <div className='my-10 mt-28 w-[80%] mx-auto grid grid-cols-2 gap-6 relative '>
                <div className='border border-t-[--blue] border-t-4 p-4 flex flex-col items-center text-center rounded-xl'>
                    <Image src="/svg/mission.svg" alt="logo" width={1500} height={200} className="w-[100px] h-[100px] object-cover  " />
                    <p className='mt-2 text-[--blue-text] text-xl font-semibold tracking-wide'>Mission</p>
                    <p className='mt-3 text-[--gray] font-medium'>To improve the geneƟc makeup and milk-producing capabiliƟes of indigenous Indian
                        breeds, making them compeƟƟve on an internaƟonal scale. We aim to develop processes that
                        increase milk yield while maintaining the health and wellbeing of all animals on the farm.</p>
                </div>
                <div className='border border-t-[--blue] border-t-4 p-4 flex flex-col  items-center text-center rounded-xl'>
                    <Image src="/svg/vision.svg" alt="logo" width={1500} height={200} className="w-[100px] h-[100px] object-cover  " />
                    <p className='mt-2 text-[--blue-text] text-xl font-semibold tracking-wide'>Vision</p>
                    <p className='mt-3 text-[--gray] font-medium'>To lead the world in breed development of all animals, parƟcularly caƩle, and to surpass
                    global standards in milk producƟon over the next decade.</p>
                </div>
            </div>
            <div className='my-20 flex gap-10 justify-end px-10 relative'>

                <div className='relative w-1/2'>
                    <Image src="/images/cows.jpg" alt="logo" width={1500} height={200} className="w-[100%] h-[550px] object-cover flex justify-center " />
                    <div className='absolute left-0  flex items-center  z-10   top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <div className='p-10 rounded-tl-[80px] rounded-br-[80px] bg-[#f0fcff] w-2/3 h-[400px] '>
                            <p className="text-[20px] font-bold text-[--blue-text]  italic" style={{
                                fontFamily: "Courgette,cursive"
                            }}>Why KD Farms?</p>
                            <p className="text-[--gray] text-justify mt-4" >At KD Farms, we believe that high-quality milk starts with healthy, happy animals. That’s why our cows are
                                fed organically grown fodder, housed in natural environments, and never subjected to hormones or
                                anƟbioƟcs. We use the latest technology, including automated milking parlours and advanced farm
                                management soŌware, to ensure that the milk we produce is of the highest quality. Our products are
                                always fresh, pure, and packed with nutrients, ready to be delivered straight to your doorstep.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
