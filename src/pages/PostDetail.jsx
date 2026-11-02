import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPostBySlug } from '../data/posts';
import { useI18n } from '../i18n/useI18n';

function formatDate(isoDate, locale) {
    return new Date(isoDate).toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export default function PostDetail() {
    const { t, localize, locale } = useI18n();
    const { slug } = useParams();
    // English text comes from data/posts.js; other languages override it.
    const post = localize('posts', getPostBySlug(slug));

    if (!post) return <Navigate to="/404" replace />;

    return (
        <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-2xl mx-auto px-[6%] py-28"
        >
            <Link
                to="/#notes"
                className="text-sm text-purple-500 hover:text-purple-600 inline-flex items-center gap-1 mb-8"
            >
                <span aria-hidden="true">&#8592;</span> {t('notes.backToNotes')}
            </Link>

            <time dateTime={post.date} className="text-sm text-gray-500 dark:text-gray-400">
                {formatDate(post.date, locale)}
            </time>

            <h1 className="text-3xl sm:text-4xl font-bold font-Ovo mt-3 mb-8">{post.title}</h1>

            <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                {post.body.map((block, index) =>
                    // Blocks are static content, so index is a stable key here.
                    typeof block === 'string' ? (
                        <p key={index}>{block}</p>
                    ) : (
                        <section key={index}>
                            {block.heading && (
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    {block.heading}
                                </h2>
                            )}
                            <ul className="list-disc pl-6 space-y-2 marker:text-purple-500">
                                {block.list.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </section>
                    )
                )}
            </div>
        </motion.article>
    );
}
