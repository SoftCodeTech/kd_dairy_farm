import Image from "next/image";

export default function Intoduction() {
    return (
        <div className="-mt-20 mb-20">

            {/* intro section */}
            <div className="relative w-[80%] grid grid-cols-2 overflow-hidden mx-auto bg-white rounded-tl-[80px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px] " style={{ boxShadow: "0px 15px 20px 0px rgba(0,0,0,0.1)" }}>
                <div className="p-[60px] ">
                    <p className="text-[20px] font-bold text-[--yellow]  italic" style={{
                        fontFamily: "Courgette,cursive"
                    }}>Farm perfect dairy </p>
                    <p className="text-[--blue-text] font-semibold text-[40px] my-3" style={{ lineHeight: "1.2em" }}>Welcome to our Dairy Paradise</p>
                    <p className="text-[--gray] " style={{
                        lineHeight: "1.6em", lineHeight: "1.6em",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }} >KD Farms was founded by Karna Desai, a passionate advocate for organic living, in the heart of Surat. With
                        a background in sustainable farming practices, Karna realized the growing need for pure, organic milk and
                        dairy products in the city. He sought to bridge the gap between demand and supply by crea􀆟ng a selfsustained
                        organic farm, where every step of the process—from growing fodder to breeding ca􀆩le—was
                        done with care and precision. His mission is simple: to bring organic, nutri􀆟ous milk and dairy products to
                        every household, while also contribu􀆟ng to be􀆩er breed development for the future.</p>
                    <button className="text-[--blue-btn] text-sm font-semibold mt-5 hover:-translate-y-2 transition ease-in-out delay-150 duration-300">Know Us More    &rarr;</button>
                </div>
                <div className="h-full w-full">
                    <Image src='/images/cows.jpg' alt='intro...' height={1000} width={1000} className="w-[100%] h-full object-cover bg-center" />
                </div>
            </div>
        </div>
    );
}
