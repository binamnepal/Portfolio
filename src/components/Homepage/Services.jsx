import Footer from "./Footerpage";
import { motion } from 'framer-motion';

export default function Services() {
    const services = [
        {
            name: 'Web Design',
            icon: './assets/web-icon.png',
            description: 'Creating visually stunning, user-centric designs that prioritize usability and brand identity.',
            link: '#',
        },
        {
            name: 'UI/UX Design',
            icon: './assets/ui-icon.png',
            description: 'Focusing on the user journey and interaction patterns to solve complex problems simply.',
            link: '#',
        }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="services" 
            className="w-full px-[12%] py-20 scroll-mt-20"
        >
            <motion.h4 
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-2 text-lg font-Ovo"
            >
                What I offer
            </motion.h4>
            
            <motion.h2 
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-Ovo"
            >
                My services
            </motion.h2>

            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-600 dark:text-white/80"
            >
                Based in Kathmandu, I bridge the gap between design and engineering. I focus on crafting fast, 
                responsive, and aesthetically pleasing interfaces that keep users engaged.
            </motion.p>

            {/* Grid Container Fixed */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-wrap justify-center gap-6 my-10"
            >
                {services.map((service, index) => (
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        key={index} 
                        className="flex-1 min-w-[250px] max-w-[350px] border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover hover:shadow-lg transition-all duration-500 dark:hover:bg-darkHover dark:hover:shadow-white/10"
                    >
                        <img src={service.icon} alt="" className="w-10 dark:invert" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white font-semibold">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/70">
                            {service.description}
                        </p>
                        <a href={service.link} className="flex items-center gap-2 text-sm mt-5 font-medium group text-gray-700 dark:text-white">
                            Read more 
                            <img 
                                src="./assets/right-arrow.png" 
                                alt="" 
                                className="w-4 group-hover:translate-x-1 transition-transform dark:invert" 
                            />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
            
            <Footer />
        </motion.div>
    )
}