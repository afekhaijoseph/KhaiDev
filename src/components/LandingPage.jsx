import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub, faLinkedinIn, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import Image from './Image';
import {motion} from 'framer-motion'


const LandingPage = () => {
  return (
    <div className=''>
        <motion.div 
        initial= {{opacity: 0}} 
        animate= {{opacity: 1}} 
        transition={{ delay: 0.7, type: 'tween', duration:0.7}} 
        className="Introduction flex flex-col gap-4 h-screen">
          <div className='mt-6 flex flex-col'>
              <p className='self-start tracking-wider'>Hi there, Afekhai Joseph here.</p>
          </div>
            <h1 className='text-accent text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-b from-yellow-500 via-accentshade to-yellow-500'>A Pro Frontend Developer.</h1>  
            <div className="flex justify-around w-full my-5">
              <motion.div whileHover={{scale: 1.2}}>
                <FontAwesomeIcon icon={faXTwitter} size='2x'/>
              </motion.div>
              <motion.div>
                <FontAwesomeIcon icon={faGithub} size='2x'/>
              </motion.div>
              <motion.div>
                <FontAwesomeIcon icon={faLinkedinIn} size='2x'/>
              </motion.div>
              <motion.div>
                <FontAwesomeIcon icon={faWhatsapp} size='2x'/>
              </motion.div>  
            </div>
            <div className=''></div>
            <div className="flex w-11/12 mx-auto my-3 gap-3 pt-4 grow">
            <motion.button
            initial = {{opacity: 0, x:-100}}
            animate = {{opacity: 1, x: 0}} 
            transition={{delay: 1, type: 'spring', stiffness: 100, damping: 10}}
            whileHover={{scale: 1.2, color: 'red'}} className=' border h-fit border-accent rounded-md p-1 text-accent basis-full'>Hire me</motion.button>
            <motion.button 
            initial = {{opacity: 0, x: 100}}
            animate = {{opacity: 1, x: 0}} 
            transition={{delay: 1, type: 'spring', stiffness: 100, damping: 10}}
            className='bg-accent h-fit rounded-md p-1 basis-full text-white'>Download CV</motion.button>
            </div>
            <Image/>
        </motion.div>
    </div>
  )
}

export default LandingPage