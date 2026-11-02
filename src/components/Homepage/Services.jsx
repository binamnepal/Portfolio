import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/useI18n';

// Names and descriptions live in the locale files under services.items.<id>.
const SERVICES = [
    { id: 'development', icon: '/assets/code-icon.png' },
    { id: 'webDesign', icon: '/assets/web-icon.png' },
    { id: 'uiux', icon: '/assets/ui-icon.png' },
];

export default function Services() {
    const { t } = useI18n();

    return (
        <section id="services" className="w-full px-[12%] py-24">
            <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="text-center text-purple-500 tracking-widest uppercase text-sm mb-3"
            >
                {t('services.eyebrow')}
            </motion.p>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center text-4xl md:text-5xl font-bold font-Ovo"
            >
                {t('services.title')}
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-14 text-gray-600 dark:text-gray-400"
            >
                {t('services.intro')}
            </motion.p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.15 }}
                        className="border border-gray-200 dark:border-white/15 rounded-2xl px-8 py-10 hover:shadow-xl hover:-translate-y-1 hover:bg-lightHover dark:hover:bg-white/5 transition-all duration-300"
                    >
                        <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center mb-5">
                            <img src={service.icon} alt="" aria-hidden="true" className="w-6 dark:invert" />
                        </div>

                        <h3 className="text-lg font-semibold mb-3">{t(`services.items.${service.id}.name`)}</h3>

                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {t(`services.items.${service.id}.description`)}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
