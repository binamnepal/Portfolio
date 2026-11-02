import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/useI18n';

export default function Header() {
    const { t } = useI18n();

    return (
        <section
            id="top"
            className="relative w-11/12 max-w-5xl mx-auto min-h-screen flex flex-col items-center justify-center text-center gap-6 pt-28 pb-16"
        >
            {/* Background glow */}
            <div className="absolute inset-0 -z-10 flex justify-center items-center pointer-events-none overflow-hidden">
                <div className="w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-orange-400 blur-[120px] opacity-20 rounded-full" />
            </div>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="relative"
            >
                <img
                    src="/assets/profile-img.png"
                    alt={t('header.portraitAlt')}
                    width="128"
                    height="128"
                    className="w-32 h-32 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
                />
                <span
                    className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"
                    title={t('header.available')}
                />
            </motion.div>

            <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300"
            >
                {t('header.greeting')}{' '}
                <span className="font-semibold text-black dark:text-white">Binam Nepal</span>
            </motion.p>

            <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-4xl sm:text-6xl lg:text-[72px] font-bold leading-tight"
            >
                {t('header.titleLine1')} <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-purple-500 to-orange-400 bg-clip-text text-transparent">
                    {t('header.titleHighlight')}
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="max-w-2xl text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
            >
                {t('header.intro')}
            </motion.p>

            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 mt-6"
            >
                <motion.a
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-white font-medium shadow-lg"
                >
                    {t('header.hireMe')}
                </motion.a>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={t('header.cvFile')}
                    download={t('header.cvFilename')}
                    className="px-8 py-3 rounded-full border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition"
                >
                    {t('header.downloadCv')}
                </motion.a>
            </motion.div>
        </section>
    );
}
