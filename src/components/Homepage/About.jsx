import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footerpage';

export default function About() {

    const tools = [
        { name: 'VS Code', icon: './assets/vscode.png' },
        { name: 'Git', icon: './assets/git.png' },
    ];

    const data = [
        {
            name: 'Languages',
            icon: './assets/code-icon.png',
            description: 'HTML, CSS, JavaScript, React, Next.js',
        },
        {
            name: 'Education',
            icon: './assets/edu-icon.png',
            description: 'Bachelor in Information Technology',
        },
        {
            name: 'Projects',
            icon: './assets/project-icon.png',
            description: '10+ real-world web applications',
        },
    ];

    return (
        <div id="about" className="w-full px-[8%] py-24 scroll-mt-20">

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <p className="text-blue-500 tracking-widest uppercase text-sm mb-3">
                    Introduction
                </p>

                <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                    About Me
                </h2>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center gap-16">

                {/* IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl opacity-20 rounded-3xl"></div>

                    <img
                        src="./assets/user-image.png"
                        alt="User"
                        className="w-72 sm:w-80 rounded-3xl relative shadow-2xl"
                    />
                </motion.div>

                {/* CONTENT */}
                <div className="flex-1">

                    {/* DESCRIPTION */}
                    <motion.p
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-10"
                    >
                        I'm a web developer based in Kathmandu, focused on building
                        scalable and high-performance applications using React and
                        modern frontend technologies. I care deeply about clean code,
                        UI/UX, and production-level execution.
                    </motion.p>

                    {/* CARDS */}
                    <div className="grid sm:grid-cols-3 gap-6">

                        {data.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 
                                backdrop-blur-lg bg-white/50 dark:bg-white/5
                                hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            >
                                <img src={item.icon} className="w-8 mb-4" />

                                <h3 className="font-semibold text-lg mb-2 dark:text-white">
                                    {item.name}
                                </h3>

                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}

                    </div>

                    {/* TOOLS */}
                    <div className="mt-14">
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-5">
                            Tools I Use
                        </p>

                        <div className="flex gap-4">
                            {tools.map((tool) => (
                                <motion.div
                                    key={tool.name}
                                    whileHover={{ scale: 1.15 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl 
                                    bg-gray-100 dark:bg-white/10 
                                    hover:bg-blue-100 dark:hover:bg-blue-900/30
                                    transition"
                                >
                                    <img src={tool.icon} className="w-5" />
                                    <span className="text-sm dark:text-white">
                                        {tool.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}