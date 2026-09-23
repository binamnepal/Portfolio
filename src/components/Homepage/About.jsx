import { motion } from 'framer-motion';

const HIGHLIGHTS = [
    {
        name: 'Languages',
        icon: '/assets/code-icon.png',
        description: 'HTML, CSS, JavaScript, React, Tailwind CSS',
    },
    {
        name: 'Education',
        icon: '/assets/edu-icon.png',
        description: 'Bachelor in Information Technology',
    },
    {
        name: 'Projects',
        icon: '/assets/project-icon.png',
        // Keep this honest — it should match the number of projects in Work.jsx.
        description: 'React frontends and Django REST APIs',
    },
];

const TOOLS = [
    { name: 'VS Code', icon: '/assets/vscode.png' },
    { name: 'Git', icon: '/assets/git.png' },
    { name: 'MongoDB', icon: '/assets/mongodb.png' },
    { name: 'Firebase', icon: '/assets/firebase.png' },
    { name: 'Figma', icon: '/assets/figma.png' },
];

export default function About() {
    return (
        <section id="about" className="w-full px-[8%] py-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <p className="text-purple-500 tracking-widest uppercase text-sm mb-3">Introduction</p>
                <h2 className="text-4xl sm:text-5xl font-bold font-Ovo bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                    About Me
                </h2>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center gap-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="relative shrink-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-orange-400 blur-2xl opacity-20 rounded-3xl" />
                    <img
                        src="/assets/user-image.png"
                        alt="Binam Nepal at his desk"
                        loading="lazy"
                        className="w-72 sm:w-80 rounded-3xl relative shadow-2xl"
                    />
                </motion.div>

                <div className="flex-1">
                    <motion.p
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-10"
                    >
                        I&apos;m a web developer based in Kathmandu, focused on building scalable and
                        high-performance applications using React and modern frontend technologies. I care
                        deeply about clean code, UI/UX, and production-level execution.
                    </motion.p>

                    <div className="grid sm:grid-cols-3 gap-6">
                        {HIGHLIGHTS.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 backdrop-blur-lg bg-white/50 dark:bg-white/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            >
                                <img src={item.icon} alt="" aria-hidden="true" className="w-8 mb-4 dark:invert" />
                                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-14">
                        <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-5">
                            Tools I Use
                        </p>

                        <ul className="flex flex-wrap gap-4">
                            {TOOLS.map((tool) => (
                                <motion.li
                                    key={tool.name}
                                    whileHover={{ scale: 1.1 }}
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-white/10 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition"
                                >
                                    <img src={tool.icon} alt="" aria-hidden="true" className="w-5" />
                                    <span className="text-sm">{tool.name}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
