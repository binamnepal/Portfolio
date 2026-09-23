import { motion } from 'framer-motion';

/*
 * Edit freely — add or remove skills, or change groups. `icon` should point
 * to a file in /public/assets. If you don't have an icon for something yet,
 * omit `icon` and the label alone will still render.
 */
const SKILL_GROUPS = [
    {
        category: 'Frontend',
        skills: [
            { name: 'React', icon: '/assets/react.png' },
            { name: 'JavaScript', icon: '/assets/js.png' },
            { name: 'Tailwind CSS', icon: '/assets/tailwind.png' },
            { name: 'HTML & CSS', icon: '/assets/code-icon.png' },
        ],
    },
    {
        category: 'Backend & Data',
        skills: [
            { name: 'Flask', icon: '/assets/flask.png' },
            { name: 'Python', icon: '/assets/python.png' },
            { name: 'MongoDB', icon: '/assets/mongodb.png' },
            { name: 'Firebase', icon: '/assets/firebase.png' },
        ],
    },
    {
        category: 'Tools',
        skills: [
            { name: 'Git & GitHub', icon: '/assets/git.png' },
            { name: 'VS Code', icon: '/assets/vscode.png' },
            { name: 'Figma', icon: '/assets/figma.png' },
            { name: 'Vercel', icon: '/assets/vercel.png' },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="w-full px-[10%] py-24">
            <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="text-center text-purple-500 tracking-widest uppercase text-sm mb-3"
            >
                What I work with
            </motion.p>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-center text-4xl md:text-5xl font-bold font-Ovo mb-14"
            >
                Skills &amp; Tools
            </motion.h2>

            <div className="grid sm:grid-cols-3 gap-10">
                {SKILL_GROUPS.map((group, groupIndex) => (
                    <motion.div
                        key={group.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: groupIndex * 0.15 }}
                    >
                        <h3 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-5">
                            {group.category}
                        </h3>

                        <ul className="space-y-3">
                            {group.skills.map((skill) => (
                                <li
                                    key={skill.name}
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:border-purple-400 dark:hover:border-purple-500/50 transition"
                                >
                                    {skill.icon && (
                                        <img
                                            src={skill.icon}
                                            alt=""
                                            aria-hidden="true"
                                            className="w-5 h-5 object-contain dark:invert"
                                            onError={(e) => {
                                                // Gracefully hide a missing icon rather than showing a broken image
                                                e.currentTarget.style.display = 'none';
                                            }}
                                        />
                                    )}
                                    <span className="text-sm font-medium">{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
