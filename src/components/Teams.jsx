import argen from '../assets/argen.png'
import nob from '../assets/nob.png'
import barca from '../assets/barca.png'
import psg from '../assets/psg.png'
import miami from '../assets/miami.png'
import { motion } from 'framer-motion'


const iconsVarients = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Teams = () => {
    return (
        <div className='pb-20'>
            <motion.h2
                whileInView={{ opacity: 1, y: 10 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }} className='text-4xl my-10 text-center'>Teams Played For</motion.h2>
            <motion.div
      whileInView={{opacity: 1, x:0}}
      initial={{opacity: 0, x:-100}}
      transition={{duration: 1.5}} className='flex justify-center items-center gap-8'>
                <motion.div initial="initial" animate="animate" variants={iconsVarients(2.5)}>
                    <img src={argen} alt="" width={50} height={50} />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconsVarients(3)}>
                    <img src={nob} alt="" width={50} height={50} />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconsVarients(5)}>
                    <img src={barca} alt="" width={50} height={50} />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconsVarients(4)}>
                    <img src={psg} alt="" width={50} height={50} />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconsVarients(2.5)}>
                    <img src={miami} alt="" width={50} height={50} />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Teams
