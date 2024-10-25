"use client"

import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    message: Yup.string().required("Message is required"),
});

const ContactUs = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: ""
        },
        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            resetForm();
        },
        validationSchema: validationSchema,
        validateOnChange: true,
    })

    return (
        <div className="mainContainer pt-14 lg:pt-20 pb-28 overflow-x-hidden">
            <div className="bg-[--icon-bg] flex flex-col lg:flex-row items-start justify-between w-full h-full" >
                <div className="w-full lg:w-[50%] h-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.131624992297!2d72.85848267471545!3d21.067404486451235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be050d22a7762db%3A0x68504dbf2fe32558!2sKD%20Farms!5e0!3m2!1sen!2sin!4v1729793053099!5m2!1sen!2sin" className="w-full min-h-[450px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="w-full lg:w-[50%] px-4 py-8 lg:p-12 space-y-7 relative">
                    <h1 className="title-family font-semibold text-2xl sm:text-3xl lg:text-4xl">Write a Message</h1>
                    <form onSubmit={formik.handleSubmit} className="space-y-4">
                        <div className="flex flex-col md:flex-row items-start space-y-3 md:space-y-0 md:space-x-3">
                            <div className="w-[100%]">
                                <input type='text' name='name' placeholder='Name'
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    onBlur={formik.handleBlur}
                                    className={`bg-white p-3 w-[100%] rounded-[4px] focus:outline-none focus:border-2 focus:border-[--blue] `} />
                                {formik.errors.name && formik.touched.name ? (
                                    <p className="text-red-500 text-sm">*{formik.errors.name}</p>
                                ) : null}
                            </div>
                            <div className="w-[100%]">
                                <input type='email' name='email' placeholder='Email'
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    onBlur={formik.handleBlur}
                                    className={`bg-white p-3 w-[100%] rounded-[4px] focus:outline-none focus:border-2 focus:border-[--blue] `} />
                                {formik.errors.email && formik.touched.email ? (
                                    <p className="text-red-500 text-sm">*{formik.errors.email}</p>
                                ) : null}
                            </div>
                        </div>
                        <div className="w-[100%]">
                            <textarea type='text' name='message' placeholder='Message'
                                rows="4" cols="50"
                                onChange={formik.handleChange}
                                value={formik.values.message}
                                onBlur={formik.handleBlur}
                                className={`bg-white p-3 w-[100%] rounded-[4px] focus:outline-none focus:border-2 focus:border-[--blue] `}>
                            </textarea>
                            {formik.errors.message && formik.touched.message ? (
                                <p className="text-red-500 text-sm">*{formik.errors.message}</p>
                            ) : null}
                        </div>
                        <button className="text-black font-medium text-lg bg-[--yellow] rounded-full px-6 py-1 z-10 cursor-pointer"> Submit</button>
                    </form>
                    {/* <div className="absolute bottom-0 right-0 w-[550px] mx-auto xl:w-full ">
                        <Image src="/images/subscription-bg-banner.png" alt="subscription-bg-banner" width={1000} height={1000} className="w-full h-full object-contain mix-blend-multiply -z-30" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ContactUs