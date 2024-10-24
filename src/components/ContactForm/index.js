"use client"

// import { Fade } from "react-awesome-reveal"

const ContactForm = ({ formik }) => {
    return (
        <form className='space-y-4' onSubmit={formik.handleSubmit}>
            {/* <Fade cascade triggerOnce delay={100}> */}
                <div className="w-[100%]">
                    <input type='text' name='name' placeholder='Your Name'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                        className={`border-2 border-slate-300 bg-white p-3 w-[100%] rounded-[4px] focus:outline-none focus:border-2 focus:border-[--blue] `} />
                    {formik.errors.name && formik.touched.name ? (
                        <p className="text-red-500 text-sm">*{formik.errors.name}</p>
                    ) : null}
                </div>
            {/* </Fade>
            <Fade cascade triggerOnce delay={200}> */}
                <div className="w-[100%]">
                    <input type='email' name='email' placeholder='Your Email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        className={`border-2 border-slate-300 bg-white p-3 w-[100%] rounded-[4px] focus:outline-none focus:border-2 focus:border-[--blue] `} />
                    {formik.errors.email && formik.touched.email ? (
                        <p className="text-red-500 text-sm">*{formik.errors.email}</p>
                    ) : null}
                </div>
            {/* </Fade>
            <Fade cascade triggerOnce delay={300}> */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    <div className="w-[100%]">
                        <input type='phone' name='contactNumber' placeholder='Your Phone Number'
                            onChange={formik.handleChange}
                            value={formik.values.contactNumber}
                            onBlur={formik.handleBlur}
                            className={`border-2 border-slate-300 bg-white p-3 w-[100%] rounded-[4px] focus:outline-none focus:border-2 focus:border-[--blue] `} />
                        {formik.errors.contactNumber && formik.touched.contactNumber ? (
                            <p className="text-red-500 text-sm">*{formik.errors.contactNumber}</p>
                        ) : null}
                    </div>
                    <div className="w-[100%]">
                        <input type='text' name='subject' placeholder='Your Subject'
                            onChange={formik.handleChange}
                            value={formik.values.subject}
                            onBlur={formik.handleBlur}
                            className={`border-2 border-slate-300 bg-white p-3 w-[100%] rounded-[4px] focus:outline-none focus:border-2 focus:border-[--blue] `} />
                        {formik.errors.subject && formik.touched.subject ? (
                            <p className="text-red-500 text-sm">*{formik.errors.subject}</p>
                        ) : null}
                    </div>
                </div>
            {/* </Fade>
            <Fade cascade triggerOnce delay={400}> */}
                <div className="w-[100%]">
                    <textarea type='text' name='message' placeholder='Write Your Message'
                        rows="4" cols="50"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        onBlur={formik.handleBlur}
                        className={`border-2 border-slate-300 bg-white p-3 w-[100%] rounded-[4px] focus:outline-none focus:border-2 focus:border-[--blue] `}>
                    </textarea>
                    {formik.errors.message && formik.touched.message ? (
                        <p className="text-red-500 text-sm">*{formik.errors.message}</p>
                    ) : null}
                </div>
            {/* </Fade>
            <Fade cascade triggerOnce delay={500}> */}
                <div className='flex items-start space-x-3 !mt-2 text-white'>
                    <input type='checkbox' className='w-4 h-4 mt-1' /> <p>By checking this, you agree to our <span className='text-[--green] hover:underline cursor-pointer'>Terms</span> and <span className='text-[--green] hover:underline cursor-pointer'>Privacy policy</span>.</p>
                </div>
            {/* </Fade>
            <Fade cascade triggerOnce delay={600}> */}
                <button className="animated-button bg-[#0d6efd] rounded-[4px] border-none text-white font-bold text-[14px] md:text-[14px] lg:text-md xl:text-[15px] py-3 md:py-[15px] lg:py-[12px] px-8 md:px-[40px] lg:px-[35px] !mt-8 w-max">
                    SEND MESSAGE
                </button>
            {/* </Fade> */}
        </form>
    )
}

export default ContactForm