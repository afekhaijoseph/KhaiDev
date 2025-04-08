 import {motion} from "framer-motion";
 import Logo from "./Logo";
  
const navVariants = {
  init : {
    y: -100
  },
  final : {
    y: 0,
    transition : {
      delay: 0.3,
      duration: 0.2, 
      type:'spring',
      stiffness: 120, 
      damping: 10
    }
  }
}

const hoverVariants = {
  hover: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 0.5,
      repeat: Infinity,
    }
  }
}


const hamVariantOne = {
  init : {
    opacity: 1,
    width: '75%'
  },

  final : {
    opacity: 1,
    width: '100%',
    transition: {
      delay: 0.5,
      ease: "easeInOut",
      repeat: 6, 
      repeatType: "reverse" 
  }

}
}

const hamVariantTwo = {
  init : {
    opacity: 1,
    width: '100%'
  },

  final : {
    opacity: 1,
    width: '75%',
    transition: {
      delay: 0.5,
      ease: "easeInOut",
      repeat: 6, 
      repeatType: "reverse" 
      }
  }

}
export const NavBar = () => {
  return (
    <motion.div variants={navVariants} initial = 'init' animate = 'final' className="sticky top-0 z-50 w-full">
      <div className="min-w-full h-fit flex flex-row items-center justify-between bg-background border border-gray-500 p-3">
        <Logo/>

        <div className="hamburger w-12 md:hidden">
        <div className="w-full flex flex-col items-end gap-1">
            <motion.div variants={hamVariantOne} initial = 'init' animate = 'final' className="w-full h-1 bg-accent rounded-md"></motion.div>
            <motion.div variants={hamVariantTwo} initial = "init" animate = 'final' className="w-3/4 h-1 bg-accent rounded-md"></motion.div>
            <motion.div variants={hamVariantOne} initial = 'init' animate = 'final' className="w-full h-1 bg-accent rounded-md"></motion.div>
        </div>
        </div>
        <div className="hidden md:flex gap-10 text-accent">
            <motion.p variants={hoverVariants}  whileHover='hover' className='hover:text-pritext'>Home</motion.p>
            <motion.p variants={hoverVariants}  whileHover='hover'className='hover:text-pritext'>About</motion.p>
            <motion.p variants={hoverVariants}  whileHover='hover'className='hover:text-pritext'>Services</motion.p>
            <motion.p variants={hoverVariants}  whileHover='hover' className='hover:text-pritext'>Work Tools</motion.p>
            <motion.p variants={hoverVariants}  whileHover='hover' className='hover:text-pritext'>Projects</motion.p>
            <motion.p variants={hoverVariants}  whileHover='hover' className='hover:text-pritext'>Contact</motion.p>
        </div>
        <button className="hidden bg-accent h-fit rounded-md py-1 px-1.5 text-white md:inline-flex">Hire Me</button>
      </div>
    
    </motion.div>
  )
}

export default NavBar


