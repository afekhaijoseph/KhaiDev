import {motion} from 'framer-motion'

const cardVariants = {
  init: {
      rotateY: 180,
      opacity: 0,
      y: 100, 
  },
  final: {
      rotateY: 360,
      opacity: 1,
      y: 0, 
      transition: {
          duration: 1,
          type: 'tween',
          ease: 'easeInOut'
      }
  }
}

const Project = ({image, title, description, link}) => {
  return (
      <motion.div variants = {cardVariants} initial = 'init' whileInView='final' viewport={{once: true}} className='rounded-md my-10 pb-4 text-center bg-gradient-to-r from-[#2c6470] to-[#403c6d] shadow-[0_8px_20px_rgba(140,150,255,0.2)]'>
          <div className='relative'>
            <div className='bg-background hover:bg-transparent w-full h-full opacity-40 z-40 absolute'></div>
            <img src={image} className="rounded-t-md" alt=""/>
          </div>
          <div>
            <h3 className='font-semibold text-lg m-2'>{title}</h3>
            <p className='text-base p-3'>{description}</p>
            <a href={link} className='bg-accent p-1 rounded-md text-pritext'>Live Demo</a>
          </div>
      </motion.div>
)
}

export default Project