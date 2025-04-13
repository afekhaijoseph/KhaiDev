 import {motion} from "framer-motion";
 import Logo from "./Logo";
 import { useState } from "react";
  
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
    scale: 1.1,
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
    width: '100%'
  },

  final : {
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
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    console.log('clicked')
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick = () => {
    setIsOpen(prev => !prev);
  }
  return (
    <motion.div variants={navVariants} initial = 'init' animate = 'final' className="sticky top-0 z-50 w-full">
      <div>
      <div className="min-w-full h-fit flex flex-row items-center justify-between bg-background border-y border-gray-500 p-3 relative">
        <Logo/>
        <div className="hamburger w-12 md:hidden">
        <div className="w-full flex flex-col items-end gap-1 cursor-pointer transition-all" onClick={handleClick}>
  <motion.div
    variants={hamVariantOne}
    initial="init"
    animate="final"
    className={`w-full h-1 bg-accent rounded-md transform transition-transform duration-300 ${
      isOpen ? 'rotate-45 translate-y-2' : ''
    }`}
  />
  <motion.div
    variants={hamVariantTwo}
    initial="init"
    animate="final"
    className={`w-3/4 h-1 bg-accent rounded-md transition-opacity duration-300 ${
      isOpen ? 'opacity-0' : 'opacity-100'
    }`}
  />
  <motion.div
    variants={hamVariantOne}
    initial="init"
    animate="final"
    className={`w-full h-1 bg-accent rounded-md transform transition-transform duration-300 ${
      isOpen ? '-rotate-45 -translate-y-2' : ''
    }`}
  />
</div>
        </div>
        <div className="hidden md:flex gap-10 text-accent">
            <motion.p variants={hoverVariants} whileHover='hover' className='hover:text-pritext'>Home</motion.p>
            <motion.p variants={hoverVariants} whileHover='hover' className='hover:text-pritext' onClick={()=>scrollToSection('about')}>About</motion.p>
            <motion.p variants={hoverVariants} whileHover='hover' className='hover:text-pritext' onClick={()=>scrollToSection('services')}>Services</motion.p>
            <motion.p variants={hoverVariants} whileHover='hover' className='hover:text-pritext' onClick={()=>scrollToSection('skills')}>Work Tools</motion.p>
            <motion.p variants={hoverVariants} whileHover='hover' className='hover:text-pritext' onClick={()=>scrollToSection('projects')}>Projects</motion.p>
            <motion.p variants={hoverVariants} whileHover='hover' className='hover:text-pritext' onClick={()=>scrollToSection('contact')}>Contact</motion.p>
        </div>
        <button className="hidden bg-accent h-fit rounded-md py-1 px-3 text-white md:inline-flex">Hire Me</button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background w-full px-4 py-2 flex flex-col gap-4 text-accent border-t border-gray-200 absolute">
          <a onClick={() => scrollToSection("about")} className="hover:text-blue-500">
            About
          </a>
          <a onClick={() => scrollToSection("products")} className="hover:text-blue-500">
            Services
          </a>
          <a onClick={() => scrollToSection("whychoose")} className="hover:text-blue-500">
            Work Tools
          </a>
          <a onClick={() => scrollToSection("faqs")} className="hover:text-blue-500">
            Projects
          </a>
          <button
            onClick={() => scrollToSection("git")}
            className="bg-gradient-to-r from-[rgb(255,0,204,0.8)] to-[rgb(51,51,153,0.8)] text-white p-2 rounded-md"
          >
            Contact
          </button>
        </div>
      )}
      </div>
      
    
    </motion.div>
  )
}

export default NavBar


