import colorgame from '../assets/images/color-game.png'
import ticketgenerator from '../assets/images/ticket-generator.png'
import goodtech from '../assets/images/goodthq.png'
import {motion} from 'framer-motion'
import Project from './Project'
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


const projects = [
    {image: colorgame, title: 'Color Game', description: 'This is a simple color guessing game which shows a set of similar looking colors and a target color. You are to guess which of the colors corresponds with the target color. Trust me, it\'s one of them 👀', link: '"https://color-game-sepia-eight.vercel.app/"'},
    {image: ticketgenerator, title: 'Ticket Generator', description: 'This is a web applications built with the intention of making ticket sales for events, shows, e.t.c. tickets are downloadable as proof of payment.', link: '"https://ticket-generator-sm6u.vercel.app/"'},
    {image: goodtech, title: 'GoodTech', description: 'This was a website creating for a tech company which specializes in building AI driven products. The website was created to showcase those products and make the accessable to online users.', link: '"https://good-tech.vercel.app/"'},
]
const Projects = () => {
  return (
    <motion.div id="projects" variants= {projectVariants} initial = 'init' whileInView='final' viewport={{once: true}} className='text-center my-6'>
        <motion.h2 className='text-2xl font-semibold my-4'>Projects</motion.h2>
        <motion.p>Below are some of the projects i have worked on in the past.</motion.p>

        <motion.div className='my-4'>
            {projects.map(project =>(
            <Project key={project.title} {...project}/>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Projects