import colorgame from '../assets/images/color-game.png'
import ticketgenerator from '../assets/images/ticket-generator.png'
import {motion} from 'framer-motion'

const projectVariants = {
    
}
const Projects = () => {
  return (
    <motion.div className='text-center my-6'>
        <h2 className='text-2xl font-semibold my-4'>Projects</h2>
        <p>Below are some of the projects i have worked on in the past</p>

        <div className='my-4'>
            <div className='rounded-md my-10 py-4 text-center shadow-lg shadow-shadow'>
                <div className='relative'>
                    <div className='bg-background hover:bg-transparent w-full h-full opacity-40 z-40 absolute'></div>
                   <img src={colorgame} className="rounded-t-md" alt=""/>
                </div>
                <div>
                    <h3 className='font-semibold text-lg m-2'>Color game</h3>
                    <p className='text-sm p-3'>This is a simple color guessing game which shows a set of similar looking colors and 
                        a target color. You are to guess which of the colors corresponds with the target color. Trust me, it's one of them 👀
                    </p>
                    <button className='border border-accent p-1 rounded-md text-accent'>Live Demo</button>
                </div>
            </div>

            <div className='rounded-md my-10 py-4 text-center shadow-lg shadow-shadow'>
            <div className='relative'>
                    <div className='bg-background hover:bg-transparent w-full h-full opacity-40 z-40 absolute'></div>
                   <img src={ticketgenerator} className="rounded-t-md" alt=""/>
                </div>
                <div>
                    <h3 className='font-semibold text-lg m-2'>Ticket Generator</h3>
                    <p className='text-sm p-3'> This is a web applications built with the intention of making ticket sales for events, shows, e.t.c. tickets are downloadable as proof of payment.</p>
                    <button className='border border-accent p-1 rounded-md text-accent'>Live Demo</button>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Projects