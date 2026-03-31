import { motion } from "framer-motion";
import Footer from "./Footerpage";

export default function Work() {
    const projects = [
        {
            name: "Pasupati Planers (React)",
            bgImage: "/assets/work-1.png",
            description: "Web Design",
            link: "https://event-reservation-lake.vercel.app/",
        },
        {
            name: "Eventu (HTML-CSS, Flask)",
            bgImage: "/assets/work-4.png",
            description: "UI/UX Design",
            link: "",
        },
    ];

    return (
        <motion.section
            id="work"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full px-[10%] py-24 scroll-mt-20"
        >
            {/* Header */}
            <div className="text-center mb-16">
                <motion.h4
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-Ovo text-gray-500 dark:text-white/70"
                >
                    My portfolio
                </motion.h4>

                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-4xl md:text-5xl font-Ovo mt-2"
                >
                    Featured Work
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="max-w-2xl mx-auto mt-5 text-gray-600 dark:text-white/80"
                >
                    A selection of projects that highlight my experience in building responsive,
                    user-focused, and performance-driven applications.
                </motion.p>
            </div>

            {/* Projects Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        whileHover={{ scale: 1.03 }}
                        className="relative group rounded-xl overflow-hidden shadow-md cursor-pointer"
                        onClick={() =>
                            project.link &&
                            window.open(project.link, "_blank", "noopener,noreferrer")
                        }
                    >
                        {/* Background Image */}
                        <div
                            className="w-full aspect-square bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url(${project.bgImage})` }}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                <h3 className="text-lg font-semibold">
                                    {project.name}
                                </h3>
                                <p className="text-sm text-gray-200">
                                    {project.description}
                                </p>
                            </div>

                            {/* Button / Icon */}
                            <div
                                className={`mt-4 flex items-center justify-between transition-all duration-300
                                ${project.link ? "opacity-100" : "opacity-40"}`}
                            >
                                <span className="text-sm">
                                    {project.link ? "View Project" : "No link available"}
                                </span>

                                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black group-hover:bg-lime-300 transition">
                                    <img
                                        src="/assets/send-icon.png"
                                        alt="open project"
                                        className="w-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center mt-20"
            >
                <a
                    href="#"
                    className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 dark:border-white/30 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition"
                >
                    Show more
                    <img
                        src="/assets/right-arrow-bold.png"
                        className="w-4 dark:hidden"
                    />
                    <img
                        src="/assets/right-arrow-bold-dark.png"
                        className="w-4 hidden dark:block"
                    />
                </a>
            </motion.div>

            <Footer />
        </motion.section>
    );
}