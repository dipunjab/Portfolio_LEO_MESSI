import { motion } from "framer-motion";

const CallToAction = () => {
    return (
        <section className="border-t border-stone-700 py-12 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-white mb-4"
            >
                Stay Connected
            </motion.h2>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-stone-300 mb-6"
            >
                Get the latest updates and insights directly from me.
            </motion.p>
            
            <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-br from-stone-300 to-white text-stone-900 font-semibold px-6 py-3 rounded-full text-lg hover:shadow-md transition"
            >
                Subscribe Now
            </motion.button>
        </section>
    );
};

export default CallToAction;