'use client'
import Image from 'next/image'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ContactForm from '@/components/ContactForm';
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    contactNumber: Yup.string().matches(/^[0-9]\d{9}$/, "Contact Number must be 10 digits").required("Contact Number is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
});

const Page = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            contactNumber: "",
            subject: "",
            message: ""
        },
        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            resetForm();  // Optionally reset form after submission
        },
        validationSchema: validationSchema,
        validateOnChange: true,
    })

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
                        }}>Get In Touch</p>
                        <p className="text-[40px] font-bold text-[--white]">
                            Contact Us
                        </p>
                        <p className=' text-[--white] text-xl font-medium'>Start the conversation to established good relationship and business.</p>
                    </div>
                </div>
            </div>

            {/* about us */}
            <div className='my-20 grid grid-cols-2 px-10'>

                <div className='relative shrink-0'>
                    <p className="text-[20px] font-bold text-[--yellow]  italic" style={{
                        fontFamily: "Courgette,cursive"
                    }}>GET IN TOUCH </p>
                    <p className="text-[--blue-text] font-semibold text-[40px] my-3" style={{ lineHeight: "1.2em" }}>Seamless Communication, Global Impact.</p>
                    <div className='mt-6'>
                        <div className='flex gap-5 mb-2'>
                            <div className='bg-[--blue] rounded-full h-[50px] w-[50px] flex justify-center items-center text-white transition-all ease-in-out duration-500' >
                                <LocationOnIcon />
                            </div>
                            <div className=''>
                                <p className='text-[--blue-text] font-semibold text-xl '>Head Office</p>
                                <p className='text-[--gray]  font-medium my-1'>KD Farms, Surat, Gujarat, India</p>
                            </div>
                        </div>
                        <div className='flex gap-5 mb-2'>
                            <div className='bg-[--blue] rounded-full h-[50px] w-[50px] flex justify-center items-center text-white transition-all ease-in-out duration-500' >
                                <EmailIcon />
                            </div>
                            <div className=''>
                                <p className='text-[--blue-text] font-semibold text-xl '>Email Us</p>
                                <p className='text-[--gray]  font-medium my-1'>info@kdfarms.com</p>
                            </div>
                        </div>
                        <div className='flex gap-5 mb-2'>
                            <div className='bg-[--blue] rounded-full h-[50px] w-[50px] flex justify-center items-center text-white transition-all ease-in-out duration-500' >
                                <LocalPhoneIcon />
                            </div>
                            <div className=''>
                                <p className='text-[--blue-text] font-semibold text-xl '>Let's Talk</p>
                                <p className='text-[--gray]  font-medium my-1'>+91-1234567890</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='px-10 shrink-0 bg-[#273a97] p-12 rounded-2xl'>
                    <ContactForm formik={formik} />
                </div>

            </div>
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9580486412206!2d72.86103147503749!3d21.233512080467573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f2652963ac9%3A0x7d9787a5b5c4275d!2sSilver%20Business%20Point!5e0!3m2!1sen!2sin!4v1717756413429!5m2!1sen!2sin" className="w-[100%] h-[70vh] my-10" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            {/* why choose us */}
        </>
    )
}

export default Page
