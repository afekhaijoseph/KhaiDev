import padre from '../assets/images/padre.png'
import {motion} from 'framer-motion'

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
const Image = () => {
  return (
    <motion.div variants={imageVariants} initial = 'init' whileInView= 'final' viewport={{once:true}} className='w-full mt-32'>
        <div className="bg-accent w-full aspect-square mx-auto rounded-full relative">
            <img className="absolute left-1/2 -bottom-1 -translate-x-1/2 object-cover w-full rounded-b-full "src={padre}  alt=""/>
        </div> 
    </motion.div>
  )
}

export default Image