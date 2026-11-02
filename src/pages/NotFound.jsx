import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/useI18n';

export default function NotFound() {
    const { t } = useI18n();

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-[6%] py-28"
        >
            <p className="text-purple-500 tracking-widest uppercase text-sm mb-4">404</p>
            <h1 className="text-4xl sm:text-5xl font-bold font-Ovo mb-4">{t('notFound.title')}</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
                {t('notFound.text')}
            </p>
            <Link
                to="/"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-white font-medium shadow-lg"
            >
                {t('notFound.backHome')}
            </Link>
        </motion.section>
    );
}
