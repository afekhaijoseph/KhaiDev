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
          duration: 0.8,
          type: 'tween',
          ease: 'easeIn'
      }
  }
}

const Project = ({image, title, description, link}) => {
  return (
      <motion.div variants = {cardVariants} initial = 'init' whileInView='final' viewport={{once: true}} className='rounded-md my-10 pb-5 text-center bg-[#26243d] shadow-black/70'>
          <div className='relative m-2 mb-6'>
            <div className='bg-background hover:bg-transparent w-full h-full opacity-40 z-40 absolute'></div>
            <img src={image} className="rounded-t-md lg:h-full" alt=""/>
          </div>
          <div className='pb-5'>
            <h3 className='font-semibold text-xl m-2'>{title}</h3>
            <p className='text-base px-3 pt-0 pb-10'>{description}</p>
            <a href={link} className='bg-[#4c4b7b] py-2 px-28 rounded-md text-pritext'>Live Demo</a>
          </div>
      </motion.div>
)
}

export default Project