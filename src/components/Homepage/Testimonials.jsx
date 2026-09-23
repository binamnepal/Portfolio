import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../../data/testimonials';

export default function Testimonials() {
    if (TESTIMONIALS.length === 0) return null;

    return (
        <section id="testimonials" className="w-full px-[10%] py-24">
            <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="text-center text-purple-500 tracking-widest uppercase text-sm mb-3"
            >
                Kind words
            </motion.p>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-center text-4xl md:text-5xl font-bold font-Ovo mb-14"
            >
                Testimonials
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {TESTIMONIALS.map((item, index) => (
                    <motion.figure
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5"
                    >
                        <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            &ldquo;{item.quote}&rdquo;
                        </blockquote>
                        <figcaption className="mt-4 text-sm">
                            <span className="font-semibold">{item.name}</span>
                            <span className="text-gray-500 dark:text-gray-400"> — {item.role}</span>
                        </figcaption>
                    </motion.figure>
                ))}
            </div>
        </section>
    );
}
