import {motion} from 'framer-motion'

const cardVariants = {
  init: {
      rotateX: 180,
      opacity: 0,
      y: 100, 
  },
  final: {
      rotateX: 360,
      opacity: 1,
      y: 0, 
      transition: {
          duration: 0.5,
          type: 'tween',
          ease: 'easeInOut'
      }
  }
}

const Project = ({image, title, description, link}) => {
  return (
      <motion.div variants = {cardVariants} initial = 'init' whileInView='final' viewport={{once: true}} className='rounded-md my-10 text-center bg-gradient-to-r from-[#2c6470] to-[#403c6d] shadow-2xl shadow-black/70 lg:flex'>
          <div className='relative'>
            <div className='bg-background hover:bg-transparent w-full h-full opacity-40 z-40 absolute'></div>
            <img src={image} className="rounded-t-md lg:max-w-[450px] lg:h-full" alt=""/>
          </div>
          <div className='pb-5'>
            <h3 className='font-semibold text-lg m-2'>{title}</h3>
            <p className='text-base p-3'>{description}</p>
            <a href={link} className='bg-accent p-1 rounded-md text-pritext'>Live Demo</a>
          </div>
      </motion.div>
)
}

export default Project