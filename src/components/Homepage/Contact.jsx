import React, { useEffect, useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import { motion } from 'framer-motion';
import Footer from './Footerpage';

export default function Contact() {
    const [result, setResult] = useState("");

    function CaptchaLoader() {
        if (!document.querySelector('script[src*="hcaptcha.com"]')) {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.defer = true;
            script.src = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
            document.body.appendChild(script);
        }
    }

    useEffect(() => {
        CaptchaLoader();
    }, []);

    return (
        <div id="contact" className="w-full px-[12%] py-20 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h4 className="mb-2 text-lg font-Ovo text-blue-500">Connect with me</h4>
                <h2 className="text-5xl font-Ovo font-bold">Get in touch</h2>
                <p className="max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-400">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-16 mt-10">
                {/* Left Side: Contact Info */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 space-y-8"
                >
                    <h3 className="text-2xl font-Ovo font-semibold text-gray-800 dark:text-white">Let's talk about everything!</h3>
                    <p className="text-gray-600 dark:text-gray-400">Don't like forms? Send me an email directly or find me on my social handles.</p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                            <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                                📧
                            </div>
                            <p>binamnepal173@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                            <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                                📍
                            </div>
                            <p>Kathmandu, Nepal</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-[1.5]"
                >
                    <Formik
                        initialValues={{ name: "", email: "", message: "" }}
                        validationSchema={Yup.object().shape({
                            name: Yup.string().required("Name is required"),
                            email: Yup.string().email("Invalid email").required("Email is required"),
                            message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
                        })}
                        onSubmit={(values, { resetForm, setSubmitting }) => {
                            const hCaptcha = document.querySelector('[name="h-captcha-response"]')?.value;
                            if (!hCaptcha) {
                                setResult("⚠️ Please complete the captcha first.");
                                setSubmitting(false);
                                return;
                            }
                            setResult("⏳ Sending message...");
                            
                            // Simulate saving to localstorage as requested
                            setTimeout(() => {
                                try {
                                    const existingData = localStorage.getItem("contact_messages");
                                    const messages = existingData ? JSON.parse(existingData) : [];
                                    messages.unshift({ id: Date.now(), ...values, date: new Date().toLocaleString() });
                                    localStorage.setItem("contact_messages", JSON.stringify(messages));
                                    
                                    setResult("✅ Success! Your message has been sent.");
                                    resetForm();
                                    if (window.hcaptcha) window.hcaptcha.reset();
                                } catch (e) {
                                    setResult("❌ Error saving message.");
                                } finally {
                                    setSubmitting(false);
                                }
                            }, 1500);
                        }}
                    >
                        {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset }) => (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <input
                                            name="name" placeholder="Name"
                                            onChange={handleChange} onBlur={handleBlur} value={values.name}
                                            className={`w-full px-4 py-3 bg-white dark:bg-darkHover border rounded-lg outline-none transition-all ${
                                                errors.name && touched.name ? "border-red-500" : "border-gray-300 dark:border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                            }`}
                                        />
                                        {errors.name && touched.name && <p className="text-xs text-red-500 ml-1">{errors.name}</p>}
                                    </div>
                                    <div className="space-y-1">
                                        <input
                                            name="email" type="email" placeholder="Email"
                                            onChange={handleChange} onBlur={handleBlur} value={values.email}
                                            className={`w-full px-4 py-3 bg-white dark:bg-darkHover border rounded-lg outline-none transition-all ${
                                                errors.email && touched.email ? "border-red-500" : "border-gray-300 dark:border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                            }`}
                                        />
                                        {errors.email && touched.email && <p className="text-xs text-red-500 ml-1">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <textarea
                                        name="message" rows="5" placeholder="Your Message"
                                        onChange={handleChange} onBlur={handleBlur} value={values.message}
                                        className={`w-full px-4 py-3 bg-white dark:bg-darkHover border rounded-lg outline-none transition-all resize-none ${
                                            errors.message && touched.message ? "border-red-500" : "border-gray-300 dark:border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                                        }`}
                                    />
                                    {errors.message && touched.message && <p className="text-xs text-red-500 ml-1">{errors.message}</p>}
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                    <div className="h-captcha scale-90 sm:scale-100 origin-left" data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"></div>
                                    
                                    <button
                                        type="submit" disabled={isSubmitting}
                                        className="w-full sm:w-auto px-10 py-3 bg-black dark:bg-white dark:text-black text-white rounded-full font-Ovo hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                                    >
                                        {isSubmitting ? "Sending..." : "Submit Now"}
                                        <img src="./assets/right-arrow-white.png" alt="" className="w-4 dark:invert" />
                                    </button>
                                </div>

                                {result && (
                                    <motion.p 
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                        className={`text-sm ${result.includes('✅') ? 'text-green-500' : 'text-red-500'}`}
                                    >
                                        {result}
                                    </motion.p>
                                )}
                            </form>
                        )}
                    </Formik>
                </motion.div>
            </div>

            <Footer/>
        </div>
    );
}