import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-[6%] py-28"
        >
            <p className="text-purple-500 tracking-widest uppercase text-sm mb-4">404</p>
            <h1 className="text-4xl sm:text-5xl font-bold font-Ovo mb-4">Page not found</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
                The page you&apos;re looking for doesn&apos;t exist or may have moved.
            </p>
            <Link
                to="/"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-orange-400 text-white font-medium shadow-lg"
            >
                Back to home
            </Link>
        </motion.section>
    );
}
