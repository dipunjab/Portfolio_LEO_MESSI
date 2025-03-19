import { ACHIEVEMENTS } from "../constants";
import { motion } from "framer-motion";

const Achievements = () => {
    return (
        <motion.section 
            className="py-12"
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2 }} 
            viewport={{ once: true }}
        >
            <motion.h2 
                className="text-4xl text-center mb-8"
                initial={{ opacity: 0, y: -20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }} 
                viewport={{ once: true }}
            >
                Achievements
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
                {ACHIEVEMENTS.map((item, index) => (
                    <motion.div 
                        key={index} 
                        className="p-6 rounded-xl shadow-lg text-center cursor-pointer backdrop-blur-2xl bg-gradient-to-br from-stone-800/10 to-stone-900 
                        transition-transform duration-300 hover:scale-105 hover:shadow-stone-400 hover:shadow-sm"
                        initial={{ opacity: 0, y: 40 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8, delay: index * 0.2 }} 
                        viewport={{ once: true }}
                    >
                        <div className="p-4">
                            <img 
                                src={item.image} 
                                alt={item.title} 
                                className="w-full h-48 object-contain mx-auto mb-4 rounded-lg" 
                            />
                            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                            <p className="text-3xl font-bold text-stone-200 my-2">{item.count}</p>
                            <p className="text-gray-300">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Achievements;
