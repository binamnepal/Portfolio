import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/useI18n';

/*
 * Free, no-backend form delivery. Get a key at https://web3forms.com —
 * it emails submissions straight to you. Put it in a .env file as:
 *   VITE_WEB3FORMS_KEY=your-key-here
 */
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

/*
 * The messages below are translation keys, not display text. They are
 * translated when rendered (t(errors.name)), so switching language updates
 * any error that is already on screen.
 */
const ContactSchema = Yup.object().shape({
    name: Yup.string().min(2, 'contact.errors.nameShort').required('contact.errors.nameRequired'),
    email: Yup.string().email('contact.errors.emailInvalid').required('contact.errors.emailRequired'),
    message: Yup.string().min(10, 'contact.errors.messageShort').required('contact.errors.messageRequired'),
});

const fieldClasses = (hasError) =>
    `w-full px-4 py-3 bg-white dark:bg-white/5 border rounded-lg outline-none transition-all ${
        hasError
            ? 'border-red-500'
            : 'border-gray-300 dark:border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
    }`;

export default function Contact() {
    const { t } = useI18n();
    // { type: 'success' | 'error', key?: translation key, text?: raw server message }
    const [status, setStatus] = useState(null);

    const handleSubmit = async (values, { resetForm, setSubmitting }) => {
        setStatus(null);

        if (!ACCESS_KEY) {
            setStatus({ type: 'error', key: 'contact.status.notConfigured' });
            setSubmitting(false);
            return;
        }

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: ACCESS_KEY,
                    subject: `Portfolio message from ${values.name}`,
                    from_name: 'Portfolio Contact Form',
                    name: values.name,
                    email: values.email,
                    message: values.message,
                    botcheck: values.botcheck, // honeypot — Web3Forms drops it if filled
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus({ type: 'success', key: 'contact.status.success' });
                resetForm();
            } else {
                setStatus(
                    data.message
                        ? { type: 'error', text: data.message }
                        : { type: 'error', key: 'contact.status.failed' }
                );
            }
        } catch {
            setStatus({ type: 'error', key: 'contact.status.network' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="w-full px-[12%] py-24 bg-[url('/assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <p className="text-purple-500 tracking-widest uppercase text-sm mb-3">{t('contact.eyebrow')}</p>
                <h2 className="text-4xl md:text-5xl font-bold font-Ovo">{t('contact.title')}</h2>
                <p className="max-w-2xl mx-auto mt-5 mb-12 text-gray-600 dark:text-gray-400">
                    {t('contact.intro')}
                </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-16 mt-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 space-y-8"
                >
                    <h3 className="text-2xl font-Ovo font-semibold">{t('contact.sideTitle')}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                        {t('contact.sideText')}
                    </p>

                    <div className="space-y-4">
                        <a
                            href="mailto:binamnepal173@gmail.com"
                            className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition"
                        >
                            <span className="w-12 h-12 shrink-0 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center">
                                <img
                                    src="/assets/mail_icon.png"
                                    alt=""
                                    aria-hidden="true"
                                    className="w-5 dark:invert"
                                />
                            </span>
                            binamnepal173@gmail.com
                        </a>

                        <p className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                            <span
                                className="w-12 h-12 shrink-0 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center"
                                aria-hidden="true"
                            >
                                &#128205;
                            </span>
                            {t('contact.location')}
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="flex-[1.5]"
                >
                    <Formik
                        initialValues={{ name: '', email: '', message: '', botcheck: '' }}
                        validationSchema={ContactSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
                            <Form className="space-y-5" noValidate>
                                {/* Honeypot — hidden from humans, catches bots */}
                                <Field
                                    type="checkbox"
                                    name="botcheck"
                                    tabIndex="-1"
                                    autoComplete="off"
                                    className="hidden"
                                    aria-hidden="true"
                                />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label htmlFor="name" className="sr-only">
                                            {t('contact.nameLabel')}
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            placeholder={t('contact.namePlaceholder')}
                                            autoComplete="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            aria-invalid={Boolean(errors.name && touched.name)}
                                            className={fieldClasses(errors.name && touched.name)}
                                        />
                                        {errors.name && touched.name && (
                                            <p className="text-xs text-red-500 ml-1">{t(errors.name)}</p>
                                        )}
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="email" className="sr-only">
                                            {t('contact.emailLabel')}
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder={t('contact.emailPlaceholder')}
                                            autoComplete="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            aria-invalid={Boolean(errors.email && touched.email)}
                                            className={fieldClasses(errors.email && touched.email)}
                                        />
                                        {errors.email && touched.email && (
                                            <p className="text-xs text-red-500 ml-1">{t(errors.email)}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="message" className="sr-only">
                                        {t('contact.messageLabel')}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder={t('contact.messagePlaceholder')}
                                        value={values.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-invalid={Boolean(errors.message && touched.message)}
                                        className={`${fieldClasses(errors.message && touched.message)} resize-none`}
                                    />
                                    {errors.message && touched.message && (
                                        <p className="text-xs text-red-500 ml-1">{t(errors.message)}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto px-10 py-3 bg-black dark:bg-white dark:text-black text-white rounded-full hover:opacity-85 transition-all inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? t('contact.sending') : t('contact.send')}
                                    <span aria-hidden="true">&#8594;</span>
                                </button>

                                {status && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        role="status"
                                        aria-live="polite"
                                        className={`text-sm ${
                                            status.type === 'success' ? 'text-green-600' : 'text-red-500'
                                        }`}
                                    >
                                        {status.key ? t(status.key) : status.text}
                                    </motion.p>
                                )}
                            </Form>
                        )}
                    </Formik>
                </motion.div>
            </div>
        </section>
    );
}
