import Banner from "@/components/Banner";
import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <div>
            <Banner route="/about-us" name="About Us" breadcrumb="About Us" image="/images/aboutUsBanner.png" />

            <div className="mainContainer pt-20 lg:pt-28 pb-20">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[--blue-text] text-center">Our Story</h1>
                <div className="!mt-28 space-y-3 md:space-y-6 lg:space-y-12">
                    <div className="flex flex-col lg:flex-row items-start justify-center gap-10">
                        <div className="w-full lg:w-[40%] border-2 p-7 rounded-[25px] bg-[#F8F8F8] space-y-2 order-2 lg:order-1">
                            <h1 className="font-semibold text-lg lg:text-xl">2021 - 2022</h1>
                            <p className="text-[--gray] text-sm lg:text-base font-medium"> To improve the geneƟc makeup and milk-producing
                                capabiliƟes of indigenous Indian breeds, making them
                                compeƟƟve on an internaƟonal scale. We aim to
                                develop processes that increase milk yield while
                                maintaining the health and wellbeing of all animals
                                on the farm.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center order-1 lg:order-2 mx-auto">
                            <div className="w-max h-max p-4 flex justify-center items-center rounded-full bg-[#F8F7F0]">
                                <Image
                                    src="/svg/group.svg"
                                    alt="logo"
                                    width={1000}
                                    height={1000}
                                    className="object-cover h-full w-full"
                                />
                            </div>
                            <button className="text-[--yellow] border-[3px] rounded-full border-[--yellow] px-6 py-1 shadow-[0px_2px_14px_rgba(252,185,0,0.6)] text-xl font-semibold">
                                2021
                            </button>
                            <div className="w-full h-full justify-center items-center mt-7 hidden lg:flex">
                                <Image
                                    src="/svg/arrow.svg"
                                    alt="logo"
                                    width={20}
                                    height={5}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="min-w-[40%] hidden lg:block lg:order-3"></div>
                    </div>
                    <div className="w-full h-full flex lg:hidden justify-center items-center mt-1">
                        <Image
                            src="/svg/arrow.svg"
                            alt="logo"
                            width={20}
                            height={5}
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row items-start justify-center gap-10">
                        <div className="min-w-[40%] hidden lg:block"></div>
                        <div className="flex flex-col items-center justify-center mx-auto">
                            <div className="w-max h-max p-4 flex justify-center items-center rounded-full bg-[#F8F7F0]">
                                <Image
                                    src="/svg/group.svg"
                                    alt="logo"
                                    width={1000}
                                    height={1000}
                                    className="object-cover h-full w-full"
                                />
                            </div>
                            <button className="text-[--yellow] border-[3px] rounded-full border-[--yellow] px-6 py-1 shadow-[0px_2px_14px_rgba(252,185,0,0.6)] text-xl font-semibold">
                                2022
                            </button>
                            <div className="w-full h-full hidden lg:flex justify-center items-center mt-7">
                                <Image
                                    src="/svg/arrow.svg"
                                    alt="logo"
                                    width={20}
                                    height={5}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-[40%] border-2 p-7 rounded-[25px] bg-[#F8F8F8] space-y-2 order-2 lg:order-1">
                            <h1 className="font-semibold text-lg lg:text-xl">2022 - 2023</h1>
                            <p className="text-[--gray] text-sm lg:text-base font-medium"> To improve the geneƟc makeup and milk-producing
                                capabiliƟes of indigenous Indian breeds, making them
                                compeƟƟve on an internaƟonal scale. We aim to develop
                                processes that increase milk yield while maintaining the
                                health and wellbeing of all animals on the farm.</p>
                        </div>
                    </div>
                    <div className="w-full h-full flex lg:hidden justify-center items-center mt-1">
                        <Image
                            src="/svg/arrow.svg"
                            alt="logo"
                            width={20}
                            height={5}
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row items-start justify-center gap-10">
                        <div className="w-full lg:w-[40%] border-2 p-7 rounded-[25px] bg-[#F8F8F8] space-y-2 order-2 lg:order-1">
                            <h1 className="font-semibold text-lg lg:text-xl">2023 - 2024</h1>
                            <p className="text-[--gray] text-sm lg:text-base font-medium"> To improve the geneƟc makeup and milk-producing
                                capabiliƟes of indigenous Indian breeds, making them
                                compeƟƟve on an internaƟonal scale. We aim to
                                develop processes that increase milk yield while
                                maintaining the health and wellbeing of all animals
                                on the farm.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center mx-auto lg:order-2">
                            <div className="w-max h-max p-4 flex justify-center items-center rounded-full bg-[#F8F7F0]">
                                <Image
                                    src="/svg/group.svg"
                                    alt="logo"
                                    width={1000}
                                    height={1000}
                                    className="object-cover h-full w-full"
                                />
                            </div>
                            <button className="text-[--yellow] border-[3px] rounded-full border-[--yellow] px-6 py-1 shadow-[0px_2px_14px_rgba(252,185,0,0.6)] text-xl font-semibold">
                                2023
                            </button>
                            <div className="w-full h-full hidden lg:flex justify-center items-center mt-7">
                                <Image
                                    src="/svg/arrow.svg"
                                    alt="logo"
                                    width={20}
                                    height={5}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="min-w-[40%] hidden lg:block lg:order-3"></div>
                    </div>
                    <div className="w-full h-full flex lg:hidden justify-center items-center mt-1">
                        <Image
                            src="/svg/arrow.svg"
                            alt="logo"
                            width={20}
                            height={5}
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row items-start justify-center gap-10">
                        <div className="min-w-[40%] hidden lg:block"></div>
                        <div className="flex flex-col items-center justify-center mx-auto">
                            <div className="w-max h-max p-4 flex justify-center items-center rounded-full bg-[#F8F7F0]">
                                <Image
                                    src="/svg/group.svg"
                                    alt="logo"
                                    width={1000}
                                    height={1000}
                                    className="object-cover h-full w-full"
                                />
                            </div>
                            <button className="text-[--yellow] border-[3px] rounded-full border-[--yellow] px-6 py-1 shadow-[0px_2px_14px_rgba(252,185,0,0.6)] text-xl font-semibold">
                                2024
                            </button>
                        </div>
                        <div className="w-full lg:w-[40%] border-2 p-7 rounded-[25px] bg-[#F8F8F8] space-y-2 order-2 lg:order-1">
                            <h1 className="font-semibold text-lg lg:text-xl">2024</h1>
                            <p className="text-[--gray] text-sm lg:text-base font-medium"> To improve the geneƟc makeup and milk-producing
                                capabiliƟes of indigenous Indian breeds, making them
                                compeƟƟve on an internaƟonal scale. We aim to
                                develop processes that increase milk yield while
                                maintaining the health and wellbeing of all animals
                                on the farm.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F8F7F0] relative">
                <div className="mainContainer pt-20 lg:pt-28 pb-20">
                    <h1 className="title-family font-semibold text-3xl lg:text-5xl text-center text-[--blue-text]">Vision & Mission</h1>
                    <div className="!my-10 lg:!my-20 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-24">
                        <div className="w-full lg:w-[50%] space-y-10">
                            <div className="space-y-4">
                                <h1 className="text-2xl lg:text-3xl font-bold text-[--green-text] text-center lg:text-left">Vision</h1>
                                <p className="text-base font-medium text-[--gray] text-center lg:text-left">To revolutionize dairy farming in India by providing high-quality, fresh dairy products that are organically produced and sustainably delivered, ensuring nutrition and health for all.</p>
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-2xl lg:text-3xl font-bold text-[--green-text] text-center lg:text-left">Mission</h1>
                                <p className="text-base font-medium text-[--gray] text-center lg:text-left">Our mission is to bridge the gap between farm and consumer by offering fresh, chemical-free, and wholesome dairy products. We focus on creating a fully integrated, self-sustaining farm that nurtures healthy cattle, adopts advanced technology, and practices environmentally conscious farming methods.</p>
                            </div>
                            <div className="space-y-4">
                                <h1 className="text-2xl lg:text-3xl font-bold text-[--green-text] text-center lg:text-left">Core Values</h1>
                                <div className="space-y-4 lg:space-y-3">
                                    <li className="flex flex-col items-start space-y-1 ">
                                        <h1 className="text-[--black] font-semibold whitespace-nowrap">Freshness:</h1>
                                        <p className="text-[14px] font-medium text-[--gray]">Delivering dairy products that are collected, pasteurized, and delivered fresh to your doorstep within hours.</p>
                                    </li>
                                    <li className="flex flex-col items-start space-y-1 ">
                                        <h1 className="text-[--black] font-semibold whitespace-nowrap">Transparency:</h1>
                                        <p className="text-[14px] font-medium text-[--gray]">Ensuring full traceability from farm to table, so you know exactly where your milk comes from</p>
                                    </li>
                                    <li className="flex flex-col items-start space-y-1 ">
                                        <h1 className="text-[--black] font-semibold whitespace-nowrap">Innovation:</h1>
                                        <p className="text-[14px] font-medium text-[--gray]">Utilizing cutting-edge technology to optimize farm management, animal care, and product quality</p>
                                    </li>
                                    <li className="flex flex-col items-start space-y-1 ">
                                        <h1 className="text-[--black] font-semibold whitespace-nowrap">Animal Welfare:</h1>
                                        <p className="text-[14px] font-medium text-[--gray]">Happy and healthy cattle are at the core of our farming practices.
                                        </p>
                                    </li>
                                    <li className="flex flex-col items-start space-y-1 ">
                                        <h1 className="text-[--black] font-semibold whitespace-nowrap">Purity:</h1>
                                        <p className="text-[14px] font-medium text-[--gray]">No hormones, no antibiotics, no preservatives — just pure, fresh dairy.
                                        </p>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-[50%]">
                            <Image
                                src="/images/mission.png"
                                alt="logo"
                                width={400}
                                height={300}
                                className="sm:w-[80%] md:w-[60%] mx-auto lg:w-full h-full -z-30"
                            />
                        </div>
                    </div>
                </div>
                <Image
                    src="/images/vision.png"
                    alt="logo"
                    width={1000}
                    height={1000}
                    className="absolute bottom-0 w-full"
                />
            </div>

            <div className="mainContainer pt-20 lg:pt-28 pb-20 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-24">
                <div className="w-full lg:w-[50%]">
                    <Image
                        src="/images/middle.png"
                        alt="logo"
                        width={1000}
                        height={1000}
                        className="sm:w-[80%] md:w-[60%] mx-auto lg:w-full h-full "
                    />
                </div>
                <div className="w-full lg:w-[50%] space-y-6">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[--blue-text]">Mr. Karna Desai</h1>
                    <p className="text-lg md:text-xl font-semibold text-[--gray]">CEO & CO Founder </p>
                    <p className="text-base font-medium text-[--gray]">
                        Founded by Mr. Karna Desai, KD Farms is the result of a lifelong passion for clean, organic nutrition. Growing up in Surat City, Mr. Desai was always enthusiastic about leading a chemical-free, organic lifestyle. Recognizing the challenges of accessing fresh, organic food in today’s urban environments, he realized that the same struggle applied to dairy products, an essential part of the Indian diet. This inspired the creation of KD Farms, a fully integrated dairy farm designed to bring the highest quality milk and dairy products directly to people’s homes. From cultivating organic feed to producing fresh, nutritious dairy, KD Farms fills the gap between the increasing demand for pure products and the limited supply available in cities.
                    </p>
                </div>
            </div>

            <div className="mainContainer pt-20 lg:pt-28 pb-20 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-24">
                <div className="w-full lg:w-[50%] space-y-6">
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[--blue-text]"> Why <span className="text-[#96B501]">KD Farms?</span></h1>
                    <p className="text-lg font-semibold text-[--gray]">At KD Farms, we believe in doing things differently. Here&apos;s what sets us apart:</p>
                    <div className="space-y-4 !mb-10">
                        <ul className="space-y-3 md:list-disc" >
                            <li className=" space-y-2">
                                <h1 className="text-[--black] font-semibold whitespace-nowrap">Automated Milking:</h1>
                                <p className="text-[14px] font-medium text-[--gray]">Delivering dairy products that are collected, pasteurized, and delivered fresh to your doorstep within hours.</p>
                            </li>
                            <li className=" space-y-2">
                                <h1 className="text-[--black] font-semibold whitespace-nowrap">Healthy Cattle, Happy Cattle:</h1>
                                <p className="text-[14px] font-medium text-[--gray]">Our cows are fed organic, pesticide-free feed, and treated with the utmost care to ensure they are hormone-free and antibiotic-free. Healthy cows produce better milk, and at KD Farms, their well-being is our priority.</p>
                            </li>
                            <li className=" space-y-2">
                                <h1 className="text-[--black] font-semibold whitespace-nowrap">No Preservatives:</h1>
                                <p className="text-[14px] font-medium text-[--gray]"> We pride ourselves on delivering dairy products that are 100% natural, with no preservatives or additives</p>
                            </li>
                            <li className=" space-y-2">
                                <h1 className="text-[--black] font-semibold whitespace-nowrap">Hormone-Free:</h1>
                                <p className="text-[14px] font-medium text-[--gray]">Unlike many dairy producers, we do not use growth hormones or antibiotics on our cattle. Our milk is pure, fresh, and natural.
                                </p>
                            </li>
                            <li className=" space-y-2">
                                <h1 className="text-[--black] font-semibold whitespace-nowrap">Cutting-Edge Technology:</h1>
                                <p className="text-[14px] font-medium text-[--gray]">From milking to packaging, our processes are automated and designed to preserve the natural freshness and nutrients of our products.
                                </p>
                            </li>
                            <li className=" space-y-2">
                                <h1 className="text-[--black] font-semibold whitespace-nowrap">Hygienic:</h1>
                                <p className="text-[14px] font-medium text-[--gray]"> Every step of production is carried out under strict hygiene protocols, ensuring the highest standards of cleanliness and product safety.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <Link href={"/contact-us"} className="!mt-24 animated-button bg-[--yellow] rounded-full border-none text-[--black] font-semibold text-[18px] px-[27px] py-[14px] ">
                        Contact Us
                    </Link>
                </div>
                <div className="w-full lg:w-[50%]">
                    <Image
                        src="/images/farm.png"
                        alt="logo"
                        width={400}
                        height={250}
                        className="sm:w-[80%] md:w-[60%] mx-auto lg:w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default page;
