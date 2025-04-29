import colorgame from '../assets/images/color-game.png'
import ticketgenerator from '../assets/images/ticket-generator.png'
import goodtech from '../assets/images/goodthq.png'
import {motion} from 'framer-motion'

const projectVariants = {
    init : {
        y: 100,
        opacity: 0,
    },
    final : {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.3,
            type: 'string',
            stiffness: 110,
            staggerChildren: 0.3,
            delayChildren: 0.3,
            ease: 'easeIn'
        }
    }
}

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
const Projects = () => {
  return (
    <motion.div id="projects" variants= {projectVariants} initial = 'init' whileInView='final' viewport={{once: true}} className='text-center my-6'>
        <motion.h2 className='text-2xl font-semibold my-4'>Projects</motion.h2>
        <motion.p>Below are some of the projects i have worked on in the past.</motion.p>

        <motion.div className='my-4'>
            <motion.div  variants = {cardVariants} initial = 'init' whileInView='final' viewport={{once: true}} className='rounded-md my-10 pb-4 text-center bg-gradient-to-r from-[#2c6470] to-[#403c6d] shadow-[0_8px_20px_rgba(140,150,255,0.2)]'>
                <div className='relative'>
                    <div className='bg-background hover:bg-transparent w-full h-full opacity-40 z-40 absolute'></div>
                   <img src={colorgame} className="rounded-t-md" alt=""/>
                </div>
                <div>
                    <h3 className='font-semibold text-lg m-2'>Color game</h3>
                    <p className='text-sm p-3'>This is a simple color guessing game which shows a set of similar looking colors and 
                        a target color. You are to guess which of the colors corresponds with the target color. Trust me, it's one of them 👀
                    </p>
                    <a href="https://color-game-sepia-eight.vercel.app/" className='bg-accent p-1 rounded-md text-pritext'>Live Demo</a>
                </div>
            </motion.div>

            <motion.div variants = {cardVariants} initial = 'init' whileInView='final' viewport={{once: true}} className='rounded-md my-10 pb-4 text-center bg-gradient-to-r from-[#2c6470] to-[#403c6d] shadow-[0_8px_20px_rgba(140,150,255,0.2)]'>
            <div className='relative'>
                    <div className='bg-background hover:bg-transparent w-full h-full opacity-40 z-40 absolute'></div>
                   <img src={ticketgenerator} className="rounded-t-md" alt=""/>
                </div>
                <div>
                    <h3 className='font-semibold text-lg m-2'>Ticket Generator</h3>
                    <p className='text-sm p-3'> This is a web applications built with the intention of making ticket sales for events, shows, e.t.c. tickets are downloadable as proof of payment.</p>
                    <a href="https://ticket-generator-sm6u.vercel.app/" className='bg-accent p-1 rounded-md text-pritext'>Live Demo</a>
                </div>
            </motion.div>
            <motion.div variants = {cardVariants} initial = 'init' whileInView='final' viewport={{once: true}} className='rounded-md my-10 pb-4 text-center bg-gradient-to-r from-[#2c6470] to-[#403c6d] shadow-[0_8px_20px_rgba(140,150,255,0.2)]'>
            <div className='relative'>
                    <div className='bg-background hover:bg-transparent w-full h-full opacity-40 z-40 absolute'></div>
                   <img src={goodtech} className="rounded-t-md" alt=""/>
                </div>
                <div>
                    <h3 className='font-semibold text-lg m-2'>GoodTech HQ</h3>
                    <p className='text-sm p-3'> This was a website creating for a tech company which specializes in building AI driven products. The website was created to showcase those products and make the accessable to online users.</p>
                    <a href="https://good-tech.vercel.app/" className='bg-accent p-1 rounded-md text-pritext'>Live Demo</a>
                </div>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Projects