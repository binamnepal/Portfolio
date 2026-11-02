import { motion } from 'framer-motion';
import { useI18n } from '../../i18n/useI18n';

// Text lives in the locale files under about.highlights.<id>.
// Keep the "projects" description honest — it should match src/data/projects.js.
const HIGHLIGHTS = [
    { id: 'languages', icon: '/assets/code-icon.png' },
    { id: 'education', icon: '/assets/edu-icon.png' },
    { id: 'projects', icon: '/assets/project-icon.png' },
];

const TOOLS = [
    { name: 'VS Code', icon: '/assets/vscode.png' },
    { name: 'Git', icon: '/assets/git.png' },
    { name: 'MongoDB', icon: '/assets/mongodb.png' },
    { name: 'Firebase', icon: '/assets/firebase.png' },
    { name: 'Figma', icon: '/assets/figma.png' },
];

export default function About() {
    const { t } = useI18n();

    return (
        <section id="about" className="w-full px-[8%] py-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <p className="text-purple-500 tracking-widest uppercase text-sm mb-3">{t('about.eyebrow')}</p>
                <h2 className="text-4xl sm:text-5xl font-bold font-Ovo bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                    {t('about.title')}
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
                        alt={t('about.photoAlt')}
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
                        {t('about.intro')}
                    </motion.p>

                    <div className="grid sm:grid-cols-3 gap-6">
                        {HIGHLIGHTS.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 backdrop-blur-lg bg-white/50 dark:bg-white/5 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                            >
                                <img src={item.icon} alt="" aria-hidden="true" className="w-8 mb-4 dark:invert" />
                                <h3 className="font-semibold text-lg mb-2">{t(`about.highlights.${item.id}.name`)}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 break-words">
                                    {t(`about.highlights.${item.id}.description`)}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-14">
                        <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-5">
                            {t('about.toolsTitle')}
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
