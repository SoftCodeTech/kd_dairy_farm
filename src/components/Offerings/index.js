import Image from "next/image";

export default function Offerings() {
    return (
        <div className="my-10">
            {/* intro section */}
            <div className="relative w-screen grid grid-cols-4 gap-2 overflow-hidden mx-auto  p-10">
                <div className=" ">
                    <p className="text-[20px] font-bold text-[--yellow]  italic" style={{
                        fontFamily: "Courgette,cursive"
                    }}>Our Program</p>
                    <p className="text-[--blue-text] font-semibold text-[40px] my-3" style={{ lineHeight: "1.2em" }}>Our Farm Programs</p>
                    <p className="text-[--gray] "  >KD Farms was founded by Karna Desai, a passionate advocate for organic living, in the heart of Surat. With
                    </p>
                    <button className="text-[--white] bg-[--blue] rounded-bl-[20px] rounded-tr-[20px] px-6 py-3 text-sm font-semibold mt-5 hover:-translate-y-2 transition ease-in-out delay-150 duration-300">Read More  &rarr;</button>
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-5">
                   
                        <div className="bg-white p-7 rounded-3xl text-center " style={{ boxShadow: "0px 15px 20px 0px rgba(0,0,0,0.1)" }}>
                            <p className="text-[--blue-text] font-medium text-[30px] my-3" style={{ lineHeight: "1.2em" }}>Breed Development</p>
                            <p className="text-[--gray] ">We specialize in improving cattle breeds for higher milk production and
                            disease resistance.
                            </p>
                        </div>
                        <div className="bg-white p-7 rounded-3xl text-center  space-y-5 " style={{ boxShadow: "0px 15px 20px 0px rgba(0,0,0,0.1)"}}>
                            <p className="text-[--blue-text] font-medium text-[30px] my-3" style={{ lineHeight: "1.2em" }}>Organic Dairy Products</p>
                            <p className="text-[--gray] ">Our milk and milk products are 100% organic, produced without the use of
                            hormones or antibiotics.
                            </p>
                        </div>
                        <div className="bg-white p-7 rounded-3xl text-center " style={{ boxShadow: "0px 15px 20px 0px rgba(0,0,0,0.1)" }}>
                            <p className="text-[--blue-text] font-medium text-[30px] my-3" style={{ lineHeight: "1.2em" }}>Consultancy Services</p>
                            <p className="text-[--gray] ">KD Farms provides expert consultancy in breed development, artificial
                            insemination, and organic farming techniques.
                            </p>
                        </div>
                    
                </div>
            </div>
        </div>
    );
}
