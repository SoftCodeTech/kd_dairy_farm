"use client"

import Image from "next/image"

const ProductCard = ({ val }) => {
    return (
        <div className="w-full h-full">
            <div className="bg-[--icon-bg] rounded-[30px] px-7 py-12 space-y-5">
                <div className="mx-auto w-[60%] h-[150px]  ">
                    <Image src={val.image} alt="product-img" width={1000} height={1000} className="w-full h-full object-contain" />
                </div>
                <h1 className="text-center font-bold text-[--blue-text] text-lg my-5">{val?.name.toUpperCase()}</h1>
                <p className="text-center truncate-two-lines   mx-auto text-[--gray] text-base">{val.details}</p>
                <div className="flex justify-center">
                    <button className="text-[--yellow] border-[3px] rounded-full border-[--yellow] px-6 py-1 shadow-[0px_2px_18px_rgba(252,185,0,0.6)]">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard