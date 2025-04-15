import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub, faLinkedinIn, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {motion} from 'framer-motion'
import Logo from './Logo';

const hoverVariants = {
  hover: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      RepeatType: 'loop',
    }
  }
}

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-3 my-3 text-sm">
      <div className=" flex flex-col w-full items-center justify-between md:flex-row ">
          <div>
            <Logo/>
          </div>
          <div className="flex items-center justify-between w-full my-3 mx-auto text-accent md:w-3/6">
            <motion.p variants={hoverVariants} whileHover='hover' className='hover:text-pritext'>Home</motion.p>
            <motion.p variants={hoverVariants} whileHover='hover'className='hover:text-pritext'>About</motion.p>
            <motion.p variants={hoverVariants} whileHover='hover'className='hover:text-pritext'>Services</motion.p>
            <motion.p variants={hoverVariants} whileHover='hover'className='hover:text-pritext'>Skills</motion.p>
            <motion.p variants={hoverVariants} whileHover='hover'className='hover:text-pritext'>Projects</motion.p>
            <motion.p variants={hoverVariants} whileHover='hover' className='hover:text-pritext'>Contact</motion.p>
        </div>

            <div className="flex justify-between w-fit gap-6 md:mx-0">
              <motion.div variants={hoverVariants} whileHover='hover'>
                <FontAwesomeIcon icon={faXTwitter} size='2x'/>
              </motion.div>
              <motion.div variants={hoverVariants} whileHover='hover'>
                <FontAwesomeIcon icon={faGithub} size='2x'/>
              </motion.div>
              <motion.div variants={hoverVariants} whileHover='hover'>
                <FontAwesomeIcon icon={faLinkedinIn} size='2x'/>
              </motion.div>
              <motion.div variants={hoverVariants} whileHover='hover'>
                <FontAwesomeIcon icon={faWhatsapp} size='2x'/>
              </motion.div>  
            </div>
          </div>
            <div className='flex gap-2 text-xs'>
            <p>All rights reserved.<span className='font-bold'>ⓒ</span> 2025</p>
            <p>Afekhai Joseph ofuje</p>
            </div>
    </div>
  )
}

export default Footer