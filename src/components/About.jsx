import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from './Image';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Typewriter from './Typewriter';
import { motion } from 'framer-motion';

const aboutVariants = {
  init : {
    opacity: 0,
    x: -50,
  },
  final : {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      ease: "easeInOut",
      type: 'spring',
      stiffness: 120,
      staggerChildren: 1,
    }
  }
}


const buttonVariants = {
  hover : {
    scale: 1.1,
    textShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)",
    boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
    transition: {
      duration: 0.5,
      repeat: Infinity,
    }
  }
  
}

const imageVariants = {
  init : {
    opacity: 0,
    x: -100,
  },
  final : {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
      type: 'tween',
    }
  }
}

const About = () => {
  return (
    <motion.div variants={aboutVariants} initial = 'init'  whileInView= 'final' viewport={{once:true, amount:0.2}} id="about" className='flex flex-col gap-5 items-center mt-24 mb-6'>
        <motion.h2 variants={aboutVariants} className='text-2xl font-semibold'>Who Am I?</motion.h2>
        <div className='flex flex-col md:flex-row items-center gap-20'>
        <motion.div variants={imageVariants} className='w-full mt-28 md:max-w-[350px] md:basis-full '>
              <Image/>
        </motion.div>
          <div className="basis-full leading-loose text-lg">
             {/* <Typewriter text = "I am a frontend specialist who enjoys building intuitive, responsive, and visually appealing web applications with modern frontend tools like React, javascript and TailwindCSS amongst others, I thrive in turning creative ideas into functional digital experiences and creating solutions to everyday human problems. I also a very curious learner who is more interested in why things work rather than how to work."/> */}
          </div>
        </div>
         <motion.button variants={buttonVariants} whileHover= 'hover' className='bg-accent p-1.5 rounded-md'>Download Cv <FontAwesomeIcon icon={faDownload} className='text-gray-100'/></motion.button>
    </motion.div> 
  )
}

export default About