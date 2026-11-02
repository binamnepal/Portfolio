import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { POSTS } from '../../data/posts';
import { useI18n } from '../../i18n/useI18n';

function formatDate(isoDate, locale) {
    return new Date(isoDate).toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export default function Notes() {
    const { t, localize, locale } = useI18n();

    if (POSTS.length === 0) return null;

    return (
        <section id="notes" className="w-full px-[10%] py-24">
            <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="text-center text-purple-500 tracking-widest uppercase text-sm mb-3"
            >
                {t('notes.eyebrow')}
            </motion.p>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-center text-4xl md:text-5xl font-bold font-Ovo mb-14"
            >
                {t('notes.title')}
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {POSTS.map((basePost, index) => {
                    const post = localize('posts', basePost);

                    return (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <time dateTime={post.date} className="text-xs text-gray-500 dark:text-gray-400">
                                {formatDate(post.date, locale)}
                            </time>

                            <h3 className="text-lg font-semibold mt-2 mb-2 group-hover:text-purple-500 transition-colors">
                                <Link to={`/notes/${post.slug}`}>{post.title}</Link>
                            </h3>

                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                {post.excerpt}
                            </p>

                            <Link
                                to={`/notes/${post.slug}`}
                                className="text-sm font-medium text-purple-500 hover:text-purple-600 inline-flex items-center gap-1"
                            >
                                {t('notes.readNote')} <span aria-hidden="true">&#8594;</span>
                            </Link>
                        </motion.article>
                    );
                })}
            </div>
        </section>
    );
}
