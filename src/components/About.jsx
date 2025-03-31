import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from './Image';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Typewriter from './Typewriter';
import { motion } from 'framer-motion';

const aboutVariants = {
  init : {
    opacity: 0,
    x: -100,
  },
  final : {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
      ease: "easeInOut",
      type: 'spring',
      stiffness: 120,
    }
  }
}

const buttonVariants = {
  init : {
    scale: 1,
    textShadow: "0px 0px 0px rgba(255, 255, 255, 0)", 
    boxShadow: "0px 0px 0px rgba(255, 255, 255, 0)"   
  },

  final : {
    scale: [1, 1.1, 1],
    textShadow:["0px 0px 8px rgb(255, 255, 255)", "0px 0px 12px rgb(255, 255, 255)", "0px 0px 8px rgb(255, 255, 255)"],
    boxShadow: ["0px 0px 8px rgb(255, 255, 255)", "0px 0px 12px rgb(255, 255, 255)", "0px 0px 8px rgb(255, 255, 255)"],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "mirror",
    }
}
}

const About = () => {
  return (
    <div className='flex flex-col gap-5 items-center mt-24 mb-6'>
        <motion.h2 variants={aboutVariants} initial = 'init' viewport={{once:true}} whileInView= 'final' className='text-2xl font-semibold'>Who Am I?</motion.h2>
        <Image/>
        <Typewriter text = "I am a frontend specialist who enjoys building intuitive, responsive, and visually appealing web applications with modern frontend tools like React, javascript and TailwindCSS amongst others, I thrive in turning creative ideas into functional digital experiences and creating solutions to everyday human problems. I also a very curious learner who is more interested in why things work rather than how to work."/>
         <motion.button variants={buttonVariants} initial = 'init' whileHover= 'final' className='bg-accent p-1.5 rounded-md'>Download Cv <FontAwesomeIcon icon={faDownload} className='text-gray-100'/></motion.button>
    </div> 
  )
}

export default About