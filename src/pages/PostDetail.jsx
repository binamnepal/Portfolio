import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPostBySlug } from '../data/posts';

function formatDate(isoDate) {
    return new Date(isoDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export default function PostDetail() {
    const { slug } = useParams();
    const post = getPostBySlug(slug);

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
                <span aria-hidden="true">&#8592;</span> Back to notes
            </Link>

            <time dateTime={post.date} className="text-sm text-gray-500 dark:text-gray-400">
                {formatDate(post.date)}
            </time>

            <h1 className="text-3xl sm:text-4xl font-bold font-Ovo mt-3 mb-8">{post.title}</h1>

            <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                {post.body.map((paragraph, index) => (
                    // Paragraphs are plain strings with no HTML, so index is a stable key here.
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </motion.article>
    );
}
