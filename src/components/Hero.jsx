import { motion } from "framer-motion";
import hero from "../assets/hero.jpg";
import { CONTENT } from "../constants";
import Counter from "./subcomponents/Counter";

const containerVarients = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            staggerChildren: 0.6,
        }
    }
}
const childrenVarients = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.2
        }
    }
}

const Hero = () => {
    return (
        <div className='pb-4 lg:mb-32'>
            <div className='flex flex-wrap lg:flex-row-reverse'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:p-8'>
                        <motion.img
                            src={hero}
                            alt="hero"
                            className="rounded-3xl border-2 border-stone-700 hover:shadow-xs hover:shadow-blue-50"
                            width={400} height={400}
                            initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 1 }}
                        />
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVarients} className='flex flex-col items-center lg:items-start mt-7'>

                        <motion.h1 variants={childrenVarients} className="text-5xl lg:text-8xl tracking-tighter pb-4">Lionel Messi</motion.h1>

                        <motion.span  variants={childrenVarients}className="bg-gradient-to-r from-stone-300 to-stone-500 bg-clip-text text-transparent text-2xl tracking-tight">
                            Argentine footballer
                        </motion.span>

                        <motion.p variants={childrenVarients} className="mt-5 mb-2 lg:mt-6 lg:mb-7  leading-relaxed">
                            {CONTENT}
                        </motion.p>

                        <motion.div  className="flex gap-10 ">
                            <Counter end={800} label="Total Career Goals" />
                            <Counter end={44} label="Total Trophies Won" />
                        </motion.div>

                        <motion.button variants={childrenVarients} className="mt-8 bg-gradient-to-br from-stone-300 to-white p-4 rounded-full  text-stone-900 font-semibold cursor-pointer">
                            Watch Latest Match
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
