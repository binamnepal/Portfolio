import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
    return (
        <div className="w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6 pt-10">
            
            {/* Profile Image with subtle bounce */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
                <img 
                    src="./assets/profile-img.png" 
                    alt="Binam Nepal" 
                    className="rounded-full w-32 h-32 object-cover border-4 border-white dark:border-gray-800 shadow-xl" 
                />
            </motion.div>

            {/* Greeting */}
            <motion.h3 
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-end gap-2 text-xl md:text-2xl font-Ovo text-gray-800 dark:text-gray-200"
            >
                Hi! I'm Binam Nepal
                <motion.img 
                    animate={{ rotate: [0, 20, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
                    src="./assets/hand-icon.png" 
                    alt="" 
                    className="w-6 mb-1" 
                />
            </motion.h3>

            {/* Main Title */}
            <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-4xl sm:text-6xl lg:text-[72px] font-Ovo leading-tight dark:text-white"
            >
                frontend web developer <br className="hidden md:block" /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b820e6] to-[#da7d20]">
                    based in Nepal.
                </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="max-w-2xl mx-auto font-Ovo text-gray-600 dark:text-gray-400 text-lg"
            >
                I focus on crafting fast, responsive, and aesthetically pleasing interfaces. 
                Based in Kathmandu, I bridge the gap between design and engineering to keep users engaged.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex flex-col sm:flex-row items-center gap-4 mt-6"
            >
                <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent dark:border-white/50 hover:bg-gray-900 transition-colors"
                >
                    contact me 
                    <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </motion.a>

                <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="./assets/Binam nepal CV.pdf" 
                    download
                    className="px-10 py-3 rounded-full border border-gray-300 dark:border-white/25 hover:bg-gray-50 dark:hover:bg-white/10 flex items-center gap-2 bg-white dark:bg-transparent dark:text-white transition-all shadow-sm"
                >
                    my resume 
                    <img src="./assets/download-icon.png" alt="" className="w-4 dark:invert" />
                </motion.a>
            </motion.div>
        </div>
    );
}