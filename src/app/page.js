import ContactUs from "@/components/ContactUs";
import Follows from "@/components/follows";
import Products from "@/components/Products";
import { key_offering } from '@/constants';
import dynamic from 'next/dynamic';
import Image from "next/image";
import Link from "next/link";

const Testonomials = dynamic(() => import('@/components/testonomials'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      {/* banner section */}
      <div className="relative w-screen ">
        <Image src="/images/banner.png" alt="logo" width={1500} height={200} className="w-[100%] lg:h-auto h-[600px]  object-cover bg-center flex justify-center " />
        {/* Gradient overlay */}
        <div className="w-[80%] absolute top-16 md:top-28 left-1/2 transform -translate-x-1/2 flex justify-center items-center ">
          <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[--header-text] text-center  ">
            <p
              className="text-center title-family"
            >
              India’s One and Only Fully Integrated Dairy Farm:
            </p>
            <p className="title-family !mb-10">
              Fresh, Hygienic, and Nutritious Dairy Products Straight from Our Farms to Your Table
            </p>
            <Link href="/contact-us" className="xl:mt-10 mt-5 animated-button bg-[--yellow] rounded-full border-none text-[--black] font-semibold text-[18px] px-[27px] py-[14px] ">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* about section */}
      <div className=" mainContainer !my-28 flex lg:flex-row flex-col justify-center items-center ">
        <div className="flex-1 flex justify-center">
          <Image src="/images/about.png" height={1500} width={1500} className="w-[500px] h-auto object-contain" />
        </div>
        <div className="flex-1 mt-5 lg:mt-0 lg:ml-10 xl:ml-0">
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold title-family text-[--green-text] "><span className="text-[--header-text]">About</span> KD Farms</p>
          <p className="mt-3 mb-10 text-lg font-medium text-[--gray] lg:w-4/5 xl:w-2/3 ">Welcome to KD Farms, where the lush pastures of Gujarat meet the finest in dairy Produce. Every product we offer is a result of our dedication to delivering fresh, nutritious dairy from our farm to your table. With advanced technology and rigorous hygiene standards, we guarantee that each drop of milk, every block of paneer, and all our dairy products retain their natural goodness and flavor. Our commitment to quality ensures that you enjoy products that are produced and delivered within hours, preserving freshness at its peak.</p>
          <Link href="/about-us" className="animated-button bg-[--yellow] rounded-full border-none text-[--black] font-semibold text-[18px] px-[27px] py-[14px] ">
            Learn More
          </Link>
        </div>
      </div>

{/* products */}
      <Products />

      {/* key offering section */}
      <div className="relative  bg-[#F8F7F1] overflow-hidden ">
        <div className="mainContainer mx-auto">
          <div className="py-10">
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold title-family text-[--header-text] text-center">Key Offerings</p>
          </div>
          <div className="grid xl:grid-cols-4  sm:grid-cols-2 grid-cols-1   gap-4 ">
            {key_offering.map((offering, index) => (
              <div key={index} className="bg-white p-6 z-[5] rounded-[16px]">
                <Image src={offering.image} height={1500} width={1500} className="w-[200px] h-[150px] object-contain" />
                <p className="mt-6 mb-4 text-[#04000B] md:text-2xl text-xl font-semibold">{offering.title}</p>
                <p className="text-[--gray] font-medium">{offering.description}</p>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center py-10">

            <Link href={"/services"} className="animated-button bg-[--yellow] rounded-full border-none text-[--black] font-semibold text-[18px] px-[27px] py-[14px]">
              Explore Our Services
            </Link>
          </div>

          <Image src="/images/offering-bg.png" height={1500} width={1500} className="w-[300px] h-auto object-contain absolute top-0 right-0 hidden lg:block" />
        </div>
      </div>


      {/* Our process */}
      <div className="mainContainer !my-28 relative   overflow-hidden ">
        <div className="w-[80%] mx-auto">
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold title-family text-[--header-text] text-center">Our Process</p>
          {/* <Image src="/images/offering-bg.png" height={1500} width={1500} className="w-[300px] h-auto object-contain absolute top-0 right-0 hidden lg:block" /> */}
        </div>
      </div>

      <div className="">
        <Testonomials />
      </div>

      {/* follow on instargram */}
      <Follows />
      <ContactUs />
    </div>

  );
}
