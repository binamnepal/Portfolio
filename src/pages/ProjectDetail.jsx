import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectBySlug } from '../data/projects';
import ProjectCover from '../components/ProjectCover';
import { useI18n } from '../i18n/useI18n';

export default function ProjectDetail() {
    const { t, localize } = useI18n();
    const { slug } = useParams();
    // English text comes from data/projects.js; other languages override it.
    const project = localize('projects', getProjectBySlug(slug));

    if (!project) return <Navigate to="/404" replace />;

    return (
        <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-3xl mx-auto px-[6%] py-28"
        >
            <Link
                to="/#work"
                className="text-sm text-purple-500 hover:text-purple-600 inline-flex items-center gap-1 mb-8"
            >
                <span aria-hidden="true">&#8592;</span> {t('project.backToWork')}
            </Link>

            <h1 className="text-4xl sm:text-5xl font-bold font-Ovo mb-4">{project.name}</h1>

            <ul className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tech) => (
                    <li
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-purple-50 text-purple-700 dark:bg-purple-500/15 dark:text-purple-300"
                    >
                        {tech}
                    </li>
                ))}
            </ul>

            <ProjectCover
                project={project}
                alt={t('project.screenshotAlt', { name: project.name })}
                className="w-full rounded-2xl shadow-xl mb-10 aspect-[16/9] object-cover"
            />

            <div className="flex gap-3 mb-12">
                {project.live && (
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-85 transition"
                    >
                        {t('project.liveDemo')} <span aria-hidden="true">&#8599;</span>
                    </a>
                )}
                {project.code && (
                    <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-full border border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition"
                    >
                        {t('project.viewCode')}
                    </a>
                )}
            </div>

            <div className="space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">
                <section>
                    <h2 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                        {t('project.role')}
                    </h2>
                    <p>{project.role}</p>
                </section>

                <section>
                    <h2 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                        {t('project.problem')}
                    </h2>
                    <p>{project.problem}</p>
                </section>

                <section>
                    <h2 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                        {t('project.approach')}
                    </h2>
                    <p>{project.approach}</p>
                </section>

                <section>
                    <h2 className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                        {t('project.result')}
                    </h2>
                    <p>{project.result}</p>
                </section>
            </div>
        </motion.article>
    );
}
