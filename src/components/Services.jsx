import custom from '../assets/images/custom.png'
import integration from '../assets/images/integration.png'
import interfaced from '../assets/images/interface.png'
import versioncontrol from '../assets/images/version-control.png'
import single from '../assets/images/dynamic.png'
import optimization from '../assets/images/optimization.png'
import {motion} from 'framer-motion'

const servVariants = {
    init: {
        opacity: 0,
        y: 100,
    },
    final: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3,
            duration: 0.3,
            type: "spring",
            stiffness: 110,
            damping: 10,
            staggerChildren: 0.4, 
            delayChildren: 0.3,
        }
    }
}

const itemVariantOne = {
    init: {
        opacity: 0,
        y: 100,
    },

    final: {
        opacity: 1,
        y:0,
    }

}


const Services = () => {
  return (
<motion.div variants={servVariants} initial= "init" whileInView='final' viewport={{ once: true }} className=' my-14' >
        <motion.h3  variants = {itemVariantOne} className='text-center font-semibold text-2xl'>Services</motion.h3>
        <motion.p variants = {itemVariantOne} className='py-4 text-center'>I offer alot of services which include</motion.p>
        <div className='grid grid-cols-2 gap-4 text-center md:grid-cols-3'>
            <motion.div variants = {itemVariantOne} className='shadow-md border border-gray-500 rounded-md flex flex-col items-center p-2'>
                <img src={custom} alt="" className='size-16'/>
                <p className='text-accent'>custom web pages</p>
                <p className='text-sm'>Very well then</p>
            </motion.div>

            <motion.div variants = {itemVariantOne} className='shadow-md border border-gray-500 rounded-md flex flex-col items-center p-2'>
                <img src={integration} alt="" className='size-16'/>
                <p className='text-accent'>Api integration</p>
                <p className='text-sm'>Very well then</p>
            </motion.div>
            <motion.div variants = {itemVariantOne} className='shadow-md border border-gray-500 rounded-md flex flex-col items-center p-2'>
                <img src={interfaced} alt="" className='size-16'/>
                <p className='text-accent'>Interactive UI designs</p>
                <p className='text-sm'>Very well then</p>
            </motion.div>
            <motion.div variants = {itemVariantOne} className='shadow-md border border-gray-500 rounded-md flex flex-col items-center p-2'>
                <img src={versioncontrol} alt="" className='size-16'/>
                <p className='text-accent'>Version Control</p>
                <p className='text-sm'>Very well then</p>
            </motion.div>
            <motion.div variants = {itemVariantOne} className='shadow-md border-gray-500 border rounded-md flex flex-col items-center p-2'>
                <img src={single} alt="" className='size-16'/>
                <p className='text-accent'>Single page Apps</p>
                <p className='text-sm'>Very well then</p>
            </motion.div>
            <motion.div variants = {itemVariantOne} className='shadow-md border border-gray-500 rounded-md flex flex-col items-center flex-wrap: wrap p-2'>
                <img src={optimization} alt="" className='size-16'/>
                <p className='text-accent'>web optimization</p>
                <p className='text-sm'>Very well then</p>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default Services