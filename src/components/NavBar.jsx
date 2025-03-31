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
        <div className="hamburger w-12">
        <div className="w-full flex flex-col items-end gap-1">
            <motion.div variants={hamVariantOne} initial = 'init' animate = 'final' className="w-full h-1 bg-accent rounded-md"></motion.div>
            <motion.div variants={hamVariantTwo} initial = "init" animate = 'final' className="w-3/4 h-1 bg-accent rounded-md"></motion.div>
            <motion.div variants={hamVariantOne} initial = 'init' animate = 'final' className="w-full h-1 bg-accent rounded-md"></motion.div>
        </div>
        </div>
      </div>
    
    </motion.div>
  )
}

export default NavBar


