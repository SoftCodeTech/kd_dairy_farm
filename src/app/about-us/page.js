import Image from "next/image";
import React from "react";

const page = () => {
    return (
        <div className="px-0">
            <div className="relative w-screen mb-10">
                <Image
                    src="/images/aboutUsBanner.png"
                    alt="logo"
                    width={1500}
                    height={200}
                    className="w-[100%] h-[60vh] object-cover flex justify-center mainImage"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="text-center">
                        <p className="text-[14px] font-semibold text-white mx-auto">
                            HOME / ABOUT
                        </p>
                        <p className="text-[40px] font-bold text-[--white] font-a">
                            About Us
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-3 mt-20">
                <div className="lg:text-[52px] text-[36px] font-bold text-center">
                    Our Story
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
                    <div className="border w-full md:max-w-[555px] px-6 py-3 rounded-[25px] hidden md:block bg-[#F8F8F8]">
                        <div className="font-semibold lg:text[20px] text-[16px] mt-1">
                            2021 - 2022
                        </div>
                        <div className="text-[#666666] lg:text-[16px] text-[14px] font-medium mt-2 mb-2">
                            To improve the geneƟc makeup and milk-producing
                            capabiliƟes of indigenous Indian breeds, making them
                            compeƟƟve on an internaƟonal scale. We aim to
                            develop processes that increase milk yield while
                            maintaining the health and wellbeing of all animals
                            on the farm.
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center mt-4">
                            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-[#F8F7F0]">
                                <Image
                                    src="/svg/group.svg"
                                    alt="logo"
                                    width={45}
                                    height={45}
                                    className="object-cover flex justify-center "
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="text-center mx-auto lg:text-[24px] text-[16px] font-semibold text-[#FCB900] border-2 border-[#FCB900] py-1 px-5 rounded-full inline-block">
                                2021
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:max-w-[555px]"></div>
                </div>
                <div className="border w-full md:max-w-[555px] px-6 py-3 rounded-[25px] md:hidden bg-[#F8F8F8]">
                    <div className="font-semibold lg:text[20px] text-[16px] mt-1">
                        2021 - 2022
                    </div>
                    <div className="text-[#666666] lg:text-[16px] text-[14px] font-medium mt-2 mb-2">
                        To improve the geneƟc makeup and milk-producing
                        capabiliƟes of indigenous Indian breeds, making them
                        compeƟƟve on an internaƟonal scale. We aim to develop
                        processes that increase milk yield while maintaining the
                        health and wellbeing of all animals on the farm.
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image
                        src="/svg/arrow.svg"
                        alt="logo"
                        width={20}
                        height={5}
                        className="object-cover flex justify-center "
                    />
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <div className="w-full md:max-w-[555px]"></div>
                    <div>
                        <div className="flex justify-center mt-4">
                            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-[#F8F7F0]">
                                <Image
                                    src="/svg/group.svg"
                                    alt="logo"
                                    width={45}
                                    height={45}
                                    className="object-cover flex justify-center "
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="text-center mx-auto lg:text-[24px] text-[16px] font-semibold text-[#FCB900] border-2 border-[#FCB900] py-1 px-5 rounded-full inline-block">
                                2022
                            </div>
                        </div>
                    </div>
                    <div className="border w-full md:max-w-[555px] px-6 py-3 rounded-[25px] bg-[#F8F8F8]">
                        <div className="font-semibold lg:text[20px] text-[16px] mt-1">
                            2022 - 2023
                        </div>
                        <div className="text-[#666666] lg:text-[16px] text-[14px] font-medium mt-2 mb-2">
                            To improve the geneƟc makeup and milk-producing
                            capabiliƟes of indigenous Indian breeds, making them
                            compeƟƟve on an internaƟonal scale. We aim to
                            develop processes that increase milk yield while
                            maintaining the health and wellbeing of all animals
                            on the farm.
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image
                        src="/svg/arrow.svg"
                        alt="logo"
                        width={20}
                        height={5}
                        className="object-cover flex justify-center "
                    />
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <div className="border w-full md:max-w-[555px] px-6 py-3 rounded-[25px] hidden md:block bg-[#F8F8F8]">
                        <div className="font-semibold lg:text[20px] text-[16px] mt-1">
                            2023 - 2024
                        </div>
                        <div className="text-[#666666] lg:text-[16px] text-[14px] font-medium mt-2 mb-2">
                            To improve the geneƟc makeup and milk-producing
                            capabiliƟes of indigenous Indian breeds, making them
                            compeƟƟve on an internaƟonal scale. We aim to
                            develop processes that increase milk yield while
                            maintaining the health and wellbeing of all animals
                            on the farm.
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center mt-4">
                            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-[#F8F7F0]">
                                <Image
                                    src="/svg/group.svg"
                                    alt="logo"
                                    width={45}
                                    height={45}
                                    className="object-cover flex justify-center "
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="text-center mx-auto lg:text-[24px] text-[16px] font-semibold text-[#FCB900] border-2 border-[#FCB900] py-1 px-5 rounded-full inline-block">
                                2023
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:max-w-[555px]"></div>
                </div>
                <div className="border w-full md:max-w-[555px] px-6 py-3 rounded-[25px] md:hidden bg-[#F8F8F8]">
                    <div className="font-semibold lg:text[20px] text-[16px] mt-1">
                        2023 - 2024
                    </div>
                    <div className="text-[#666666] lg:text-[16px] text-[14px] font-medium mt-2 mb-2">
                        To improve the geneƟc makeup and milk-producing
                        capabiliƟes of indigenous Indian breeds, making them
                        compeƟƟve on an internaƟonal scale. We aim to develop
                        processes that increase milk yield while maintaining the
                        health and wellbeing of all animals on the farm.
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image
                        src="/svg/arrow.svg"
                        alt="logo"
                        width={20}
                        height={5}
                        className="object-cover flex justify-center "
                    />
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <div className="w-full md:max-w-[555px]"></div>
                    <div>
                        <div className="flex justify-center mt-4">
                            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-[#F8F7F0]">
                                <Image
                                    src="/svg/group.svg"
                                    alt="logo"
                                    width={45}
                                    height={45}
                                    className="object-cover flex justify-center "
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="text-center mx-auto lg:text-[24px] text-[16px] font-semibold text-[#FCB900] border-2 border-[#FCB900] py-1 px-5 rounded-full inline-block">
                                2024
                            </div>
                        </div>
                    </div>
                    <div className="border w-full md:max-w-[555px] px-6 py-3 rounded-[25px] bg-[#F8F8F8]">
                        <div className="font-semibold lg:text[20px] text-[16px] mt-1">
                            2024
                        </div>
                        <div className="text-[#666666] lg:text-[16px] text-[14px] font-medium mt-2 mb-2">
                            To improve the geneƟc makeup and milk-producing
                            capabiliƟes of indigenous Indian breeds, making them
                            compeƟƟve on an internaƟonal scale. We aim to
                            develop processes that increase milk yield while
                            maintaining the health and wellbeing of all animals
                            on the farm.
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-screen mt-28">
                <div>
                    <div className="bg-[#F8F7F0] h-[500px] md:h-[300px]"></div>
                    <Image
                        src="/images/vision.png"
                        alt="logo"
                        width={1500}
                        height={200}
                        className="w-[100%] h-[60vh] object-cover"
                    />
                </div>
                <div className="absolute inset-0 flex flex-col">
                    <div className="text-center">
                        <p className="lg:text-[52px] text-[22px] md:text-[36px] font-bold text-[#002756] mx-auto mt-10">
                            Vision & Mission
                        </p>
                    </div>
                    <div className="mt-12 flex flex-col md:flex-row md:gap-10 justify-around lg:mx-32 mx-5">
                        <div>
                            <div className="text-[24px] font-bold text-[#96B501]">
                                Vision
                            </div>
                            <div className="text-[16px] font-medium text-[#666666] mt-2 md:max-w-[600px]">
                                To lead the world in breed development of all
                                animals, parƟcularly caƩle, and to surpass
                                global standards in milk producƟon over the next
                                decade.
                            </div>

                            <div className="text-[24px] font-bold text-[#96B501] mt-5">
                                Mission
                            </div>
                            <div className="text-[16px] font-medium text-[#666666] mt-2 w-full md:max-w-[600px]">
                                To improve the geneƟc makeup and milk-producing
                                capabiliƟes of indigenous Indian breeds, making
                                them compeƟƟve on an internaƟonal scale. We aim
                                to develop processes that increase milk yield
                                while maintaining the health and wellbeing of
                                all animals on the farm.
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-10 lg:mt-0">
                            <Image
                                src="/images/mission.png"
                                alt="logo"
                                width={400}
                                height={300}
                                className="w-80 h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden md:block px-3 mt-28">
                <div className="flex justify-center items-center gap-10 my-8">
                    <div>
                        <Image
                            src="/images/middle.png"
                            alt="logo"
                            width={400}
                            height={250}
                            className="object-cover"
                        />
                    </div>
                    <div className="w-[500px]">
                        <div className="text-[52px] font-bold text-[#002756]">
                            Bhargav Shah
                        </div>
                        <div className="text-[24px] font-semibold text-[#666666] mt-2">
                            CEO & CO Founder
                        </div>
                        <div className="text-[16px] font-medium text-[#666666] mt-5">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row  justify-center items-center gap-10 mt-28 mb-10 px-3">
                <div className="w-full md:max-w-[500px]">
                    <div className="lg:text-[52px] text-[22px] md:text-[36px] font-bold text-[#002756]">
                        Why <span className="text-[#96B501]">KD Farms?</span>
                    </div>

                    <div className="md:text-[16px] text-[14px] font-medium text-[#666666] mt-5">
                        At KD Farms, we believe that high-quality milk starts
                        with healthy, happy animals. That’s why our cows are fed
                        organically grown fodder, housed in natural
                        environments, and never subjected to hormones or
                        anƟbioƟcs. We use the latest technology, including
                        automated milking parlours and advanced farm management
                        soŌware, to ensure that the milk we produce is of the
                        highest quality. Our products are always fresh, pure,
                        and packed with nutrients, ready to be delivered
                        straight to your doorstep.
                    </div>
                    <div className="bg-[#FCB900] text-[18px] font-bold w-[135px] text-center rounded-full py-2 mt-7 cursor-pointer">
                        Contact Us
                    </div>
                </div>
                <div>
                    <Image
                        src="/images/farm.png"
                        alt="logo"
                        width={400}
                        height={250}
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default page;
