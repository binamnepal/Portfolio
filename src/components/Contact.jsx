import { useEffect, useState } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import Footer from './Footer';

export default function Contact() {
    const [result, setResult] = useState("");

    // Script Loader for hCaptcha
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
        <div id="contact" className="relative w-full px-[12%] py-20 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">
            
            
            <a href="/login" className="absolute top-10 right-[12%] flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-400 hover:text-blue-600 border border-gray-200 px-3 my-7 py-1.5 rounded-full transition-all">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                Admin Access
            </a>

            <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
            <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-gray-400">
                I'd love to hear from you! Please use the form below to send a message.
            </p>

            <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().required("Name is required"),
                    email: Yup.string().email("Invalid email").required("Email is required"),
                    message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
                })}
                onSubmit={(values, { resetForm, setSubmitting }) => {
                    
                    const hCaptcha = document.querySelector('textarea[name=h-captcha-response]')?.value;
                    
                    if (!hCaptcha) {
                        setResult("⚠️ Please complete the captcha first.");
                        setSubmitting(false);
                        return;
                    }

                    setResult("⏳ Simulating send (API is disabled)...");

                    setTimeout(() => {
                        console.log("Form Data:", values);
                        setResult("✅ Success! (Simulation mode)");
                        resetForm();
                        window.hcaptcha?.reset(); 
                        setSubmitting(false);
                    }, 1500);
                }}
            >
                {({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset }) => (
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 space-y-6">
                        
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Name</label>
                            <input
                                id="name" name="name" type="text"
                                onChange={handleChange} onBlur={handleBlur} value={values.name}
                                className={`w-full px-4 py-2.5 border rounded-xl outline-none transition-all dark:bg-gray-700 dark:text-white ${
                                    errors.name && touched.name ? "border-red-500 ring-1 ring-red-500" : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                }`}
                            />
                            {errors.name && touched.name && <div className="mt-1 text-xs text-red-500">{errors.name}</div>}
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Email</label>
                            <input
                                id="email" name="email" type="email"
                                onChange={handleChange} onBlur={handleBlur} value={values.email}
                                className={`w-full px-4 py-2.5 border rounded-xl outline-none transition-all dark:bg-gray-700 dark:text-white ${
                                    errors.email && touched.email ? "border-red-500 ring-1 ring-red-500" : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                }`}
                            />
                            {errors.email && touched.email && <div className="mt-1 text-xs text-red-500">{errors.email}</div>}
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Message</label>
                            <textarea
                                id="message" name="message" rows="4"
                                onChange={handleChange} onBlur={handleBlur} value={values.message}
                                className={`w-full px-4 py-2.5 border rounded-xl outline-none transition-all resize-none dark:bg-gray-700 dark:text-white ${
                                    errors.message && touched.message ? "border-red-500 ring-1 ring-red-500" : "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                }`}
                            />
                            {errors.message && touched.message && <div className="mt-1 text-xs text-red-500">{errors.message}</div>}
                        </div>

                        {/* hCaptcha Widget */}
                        <div className="flex justify-center">
                            <div className="h-captcha" data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"></div>
                        </div>

                        {/* Status Message */}
                        {result && (
                            <div className="text-center text-sm font-medium text-blue-600 dark:text-blue-400 animate-pulse">
                                {result}
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex gap-4 pt-2">
                            <button
                                type="button" onClick={handleReset} disabled={isSubmitting}
                                className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-gray-600 hover:bg-gray-100 transition-colors"
                            >
                                Reset
                            </button>
                            <button
                                type="submit" disabled={isSubmitting}
                                className="flex-1 px-4 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-700 disabled:bg-blue-300 transition-all shadow-lg shadow-blue-100 dark:shadow-none"
                            >
                                {isSubmitting ? "Processing..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                )}
            </Formik>

            <Footer />
        </div>
    );
}