import { useEffect, useState } from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import { render } from "react-dom";
export default function Contact() {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        const hCaptcha = event.target.querySelector('textarea[name=h-captcha-response]').value;
        if (!hCaptcha) {
            event.preventDefault();
            setResult("Please fill out captcha field");
            return
        }
        setResult("Sending....");
        const formData = new FormData(event.target);

      

        formData.append("access_key", "--- enter your access key here-------");

        const res = {
            success: true,
            message: "Message sent successfully"
        };
        // const res = await fetch("https://api.web3forms.com/submit", {
        //     method: "POST",
        //     body: formData
        // }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setResult(res.message);
            event.target.reset();
        } else {
            console.log("Error", res);
            setResult(res.message);
        }
    };

    function CaptchaLoader() {
        const captchadiv = document.querySelectorAll('[data-captcha="true"]');
        if (captchadiv.length) {
            let lang = null;
            let onload = null;
            let render = null;

            captchadiv.forEach(function (item) {
                const sitekey = item.dataset.sitekey;
                lang = item.dataset.lang;
                onload = item.dataset.onload;
                render = item.dataset.render;

                if (!sitekey) {
                    item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
                }
            });

            let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
            if (lang) {
                scriptSrc += `&hl=${lang}`;
            }
            if (onload) {
                scriptSrc += `&onload=${onload}`;
            }
            if (render) {
                scriptSrc += `&render=${render}`;
            }

            var script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.defer = true;
            script.src = scriptSrc;
            document.body.appendChild(script);
        }
    }

    useEffect(() => {
        CaptchaLoader();
    }, []);
    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">

            <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
            <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I&apos;d love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>
     <Formik
    initialValues={{ name: "", email: "", message: "" }}
    validationSchema={Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Required"),
        message: Yup.string().min(10, "Message too short").required("Required"),
    })}
    onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
    }}
    >
    {(props) => {
        const {
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset,
        } = props;

    return (
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100 space-y-5">
        
      
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="sandip lamichane"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            className={`w-full px-4 py-2 border rounded-lg outline-none transition-all ${
              errors.name && touched.name ? "border-red-500 ring-1 ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            }`}
          />
          {errors.name && touched.name && <div className="mt-1 text-xs text-red-500">{errors.name}</div>}
        </div>

      
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={`w-full px-4 py-2 border rounded-lg outline-none transition-all ${
              errors.email && touched.email ? "border-red-500 ring-1 ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            }`}
          />
          {errors.email && touched.email && <div className="mt-1 text-xs text-red-500">{errors.email}</div>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="How can we help?"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            className={`w-full px-4 py-2 border rounded-lg outline-none transition-all resize-none ${
              errors.message && touched.message ? "border-red-500 ring-1 ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            }`}
          />
          {errors.message && touched.message && <div className="mt-1 text-xs text-red-500">{errors.message}</div>}
        </div>

        <div className="flex gap-4 pt-2">
          <button
            type="button"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
            className="flex-1 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-50 transition-colors"
          >
            Reset
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 px-4 py-2 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition-all shadow-md shadow-blue-100"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    );
  }}
</Formik>

        </div>
    )
}