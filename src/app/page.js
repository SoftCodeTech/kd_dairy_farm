import Intoduction from "@/components/Introduction";
import Offerings from "@/components/Offerings";
import Image from "next/image";
import { key_offering } from '@/constants'
import dynamic from 'next/dynamic';
import Follows from "@/components/follows";


const Testonomials = dynamic(() => import('@/components/testonomials'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="overflow-x-hidden ">
      {/* banner section */}
      <div className="relative w-screen ">
        <Image src="/images/banner.png" alt="logo" width={1500} height={200} className="w-[100%] lg:h-auto h-[700px]  object-cover bg-center flex justify-center " />
        {/* Gradient overlay */}
        <div className="w-full absolute top-28 left-1/2 transform -translate-x-1/2 flex justify-center items-center ">
          <div className="text-[32px] font-bold text-[--header-text] text-center  ">
            <p
              className="text-center title-family"
            >
              Welcome to KD Farms:
            </p>
            <p className="title-family">
              Where Tradition Meets Innovation in Organic Farming
            </p>
            <button className="mt-10 animated-button bg-[--yellow] rounded-full border-none text-[--black] font-semibold text-[18px] px-[27px] py-[14px] ">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* about section */}
      <div className="my-28 flex lg:flex-row flex-col justify-center items-center px-5 lg:px-0">
        <div className="flex-1 flex justify-center">
          <Image src="/images/about.png" height={1500} width={1500} className="w-[500px] h-auto object-contain" />
        </div>
        <div className="flex-1 mt-5 lg:mt-0 lg:ml-10 xl:ml-0">
          <p className="text-[32px] font-bold title-family text-[--header-text1] "><span className="text-[--header-text]">About</span> KD Farms</p>
          <p className="mt-3 mb-10 text-lg font-medium text-[--gray] lg:w-4/5 xl:w-2/3 ">At KD Farms, we are passionate about transforming the future of dairy farming and breed development. Our vision is to lead India in producing high-quality, organically sourced milk while seƫng new benchmarks in caƩle breeding and animal care. With a commitment to sustainable pracƟces and cuƫng-edge technology, we are building a farm that prioriƟzes both the health of our animals and the nutriƟonal quality of our products.</p>
          <button className="animated-button bg-[--yellow] rounded-full border-none text-[--black] font-semibold text-[18px] px-[27px] py-[14px] ">
            Learn More
          </button>
        </div>
      </div>

      {/* key offering section */}
      <div className="relative px-5 lg:px-0 bg-[#F8F7F1] overflow-hidden ">
        <div className="lg:w-[80%] mx-auto">
          <div className="py-10">
            <p className="text-[32px] font-bold title-family text-[--header-text] text-center">Key Offerings</p>
          </div>
          <div className="grid md:grid-cols-3 grid-col-1   gap-4 ">
            {key_offering.map((offering, index) => (
              <div key={index} className="bg-white p-6 z-[5] rounded-[16px]">
                <Image src={offering.image} height={1500} width={1500} className="w-[200px] h-[150px] object-contain" />
                <p className="mt-6 mb-4 text-[#04000B] text-2xl font-semibold">{offering.title}</p>
                <p className="text-[--gray] font-medium">{offering.description}</p>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center py-10">

            <button className="animated-button bg-[--yellow] rounded-full border-none text-[--black] font-semibold text-[18px] px-[27px] py-[14px]">
              Explore Our Services
            </button>
          </div>

          <Image src="/images/offering-bg.png" height={1500} width={1500} className="w-[300px] h-auto object-contain absolute top-0 right-0 hidden lg:block" />
        </div>
      </div>


      {/* Our process */}
      <div className="my-28 relative px-5 lg:px-0  overflow-hidden ">
        <div className="w-[80%] mx-auto">
          <p className="text-[32px] font-bold title-family text-[--header-text] text-center">Our Process</p>
          {/* <Image src="/images/offering-bg.png" height={1500} width={1500} className="w-[300px] h-auto object-contain absolute top-0 right-0 hidden lg:block" /> */}
        </div>
      </div>


      <div className="">
        <Testonomials />
      </div>

      {/* follow on instargram */}
      <Follows/>
    </div>

  );
}
