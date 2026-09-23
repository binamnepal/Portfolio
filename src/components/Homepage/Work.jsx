import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../data/projects';

// Project data now lives in src/data/projects.js — it's shared with the
// /work/:slug case study pages, so add or edit projects there.

export default function Work() {
    return (
        <section id="work" className="w-full px-[10%] py-24">
            <div className="text-center mb-16">
                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="text-purple-500 tracking-widest uppercase text-sm mb-3"
                >
                    My portfolio
                </motion.p>

                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold font-Ovo"
                >
                    Featured Work
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="max-w-2xl mx-auto mt-5 text-gray-600 dark:text-gray-400"
                >
                    A selection of projects that highlight my experience building responsive,
                    user-focused, performance-driven applications.
                </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    <motion.article
                        key={project.slug}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        className="group flex flex-col rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={project.image}
                                alt={`Screenshot of ${project.name}`}
                                loading="lazy"
                                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="flex flex-col flex-1 p-5">
                            <h3 className="text-lg font-semibold">{project.name}</h3>

                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                {project.description}
                            </p>

                            <ul className="flex flex-wrap gap-2 mt-4">
                                {project.stack.map((tech) => (
                                    <li
                                        key={tech}
                                        className="px-2.5 py-1 text-xs rounded-full bg-purple-50 text-purple-700 dark:bg-purple-500/15 dark:text-purple-300"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center gap-3 mt-auto pt-5">
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-85 transition"
                                    >
                                        Live demo
                                        <span aria-hidden="true">&#8599;</span>
                                    </a>
                                )}

                                {project.code && (
                                    <a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition"
                                    >
                                        Code
                                    </a>
                                )}

                                <Link
                                    to={`/work/${project.slug}`}
                                    className="inline-flex items-center gap-1 px-4 py-2 text-sm text-purple-500 hover:text-purple-600 transition"
                                >
                                    Case study <span aria-hidden="true">&#8594;</span>
                                </Link>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center mt-16"
            >
                <a
                    href="https://github.com/binamnepal?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 dark:border-white/30 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition"
                >
                    See more on GitHub
                    <span aria-hidden="true">&#8599;</span>
                </a>
            </motion.div>
        </section>
    );
}
