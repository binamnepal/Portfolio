import { motion } from 'framer-motion';
import Footer from './Footerpage';
export default function Work() {
    const projects = [
        {
            name: 'pasupati planers',
            bgImage: './assets/work-1.png',
            description: 'Web Design',
            link: 'https://event-reservation-lake.vercel.app/',
        },
        {
            name: 'UI/UX Designing',
            bgImage: './assets/work-4.png',
            description: 'UI/UX Design',
            link: 'https://ui-ux-design.vercel.app/',
        }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="work" 
            className="w-full px-[12%] py-20 scroll-mt-20"
        >
            <motion.h4 
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-2 text-lg font-Ovo"
            >
                My portfolio
            </motion.h4>
            
            <motion.h2 
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-Ovo"
            >
                My latest work
            </motion.h2>

            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-white/80"
            >
                Welcome to my web development portfolio! Explore a collection of projects showcasing 
                my expertise in front-end development and digital craftsmanship.
            </motion.p>

            {/* Changed from grid-cols-4 to flex justify-center */}
            <div className="flex flex-wrap justify-center gap-5 my-10 dark:text-black">
                {projects.map((project, index) => (
                    <motion.div 
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="w-full sm:w-[45%] lg:w-[350px] aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden" 
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                    >
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all duration-500"></div>

                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-lg">
                            <div>
                                <h2 className="font-semibold text-gray-800">{project.name}</h2>
                                <p className="text-xs text-gray-600">{project.description}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition-all duration-300">
                                <img src="./assets/send-icon.png" alt="view project" className="w-4" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.a 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                href="#" 
                className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-white/10 rounded-full py-3 px-10 mx-auto my-20 duration-300 dark:text-white transition-all"
            >
                Show more
                <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
            </motion.a>
            
        <Footer />
        </motion.div>
    );
}