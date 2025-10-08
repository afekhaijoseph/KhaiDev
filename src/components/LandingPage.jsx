import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub, faLinkedinIn, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {motion} from 'framer-motion'
import Image from './Image';

const imageVariants = {
  init : {
    opacity: 0,
    x: -100,
  },
  final : {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.3,
      ease: "easeInOut",
      type: 'spring',
      stiffness: '120',
    }
  }
}

const buttonVariants = {
  init: {
    opacity: 0,
    x: -100
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
};

const hireMeHover = {
  scale: 1.1,
  textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
  boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
  transition: {
    duration: 0.5,
    repeat: Infinity,
  }
}

const resumeHover = {
  scale: 1.1,
  textShadow: "0px 0px 8px rgba(238, 133, 46, 0.8)",
  boxShadow: "0px 0px 8px rgba(238, 133, 46, 0.8)",
  transition: {
    duration: 0.5,
    repeat: Infinity,
  }
}

            

const LandingPage = () => {
  return (
    <div className=''>
        <motion.div 
        initial= {{opacity: 0}} 
        animate= {{opacity: 1}} 
        transition={{ delay: 0.7, type: 'tween', duration:0.7}} 
        className="Introduction flex flex-col gap-10 justify-between items-center w-full md:flex-row md:h-screen">
          <div className='flex flex-col gap-6 md:items-start md:basis-full'>
          <div className='mt-6 md:mt-0'>
              <p className='self-start tracking-wider'>Hi there, Afekhai Joseph here.</p>
          </div>
            <h1 className='text-accent text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 via-accentshade to-yellow-500'>A Pro Frontend Developer.</h1>  
            <div className="flex justify-between w-fit gap-4 md:mx-0">
              <motion.a href='https://x.com/padrethefather' target="_blank" whileHover={{scale: 1.2}}>
                <FontAwesomeIcon icon={faXTwitter} size='2x'/>
              </motion.a>
              <motion.a href='https://github.com/afekhaijoseph' target="_blank">
                <FontAwesomeIcon icon={faGithub} size='2x'/>
              </motion.a>
              <motion.a href='https://www.linkedin.com/in/afekhai-joseph-b557501ba/' target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} size='2x'/>
              </motion.a>
              <motion.a href='https://wa.link/8sns92' target="_blank">
                <FontAwesomeIcon icon={faWhatsapp} size='2x'/>
              </motion.a>  
            </div>
            <div className=''></div>
            <div className="flex w-11/12 mx-auto my-3 gap-4 pt-4 grow md:mx-0">
            <motion.button variants={{...buttonVariants, hover: hireMeHover}} initial = 'init' animate='final' whileHover='hover' className=' bg-accent h-fit rounded-md p-1 basis-full text-white'>Hire me</motion.button>
            <motion.a href="/resume.pdf" download variants={{...buttonVariants, hover: resumeHover}} initial = 'init' animate='final' whileHover='hover' className='border h-fit border-accent rounded-md p-1 text-accent basis-full text-center'>Download CV</motion.a>
            </div>
          </div>
          <motion.div variants={imageVariants} initial = 'init' whileInView= 'final' viewport={{once:true}} className='w-full mt-32 md:max-w-[350px] md:ml-auto md:mt-20 md:basis-full'>
              <Image/>
          </motion.div>
          
        </motion.div>
    </div>
  )
}

export default LandingPage