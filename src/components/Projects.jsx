import bloombysom from '../assets/images/bloombysom.png'
import gravton from '../assets/images/gravton.png'
import ticketgenerator from '../assets/images/ticket-generator.png'
import goodtech from '../assets/images/goodthq.png'
import luxewash from '../assets/images/luxewash.png'
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
    {image: gravton, title: 'Gravton & co', description:'Gravton & co  is an e-commerce website which focuses on fashion for every occassion. It has a beautiful design and is well optimized for conversion, It was built using wordpress, elementor and woo-commerce', link: 'https://dev-origamistudio.pantheonsite.io/'},
    {image: luxewash, title: 'Luxewash', description: 'Luxewash is a sleek, high-converting landing page for  a premium laundry service brand. The goal was to showcase their upscale image while making it easy for users to engage with the service via a WhatsApp bot built in express JS and mongoDB which the landing page was built with react, tailwind and framer motion', link: 'https://www.luxewashlaundry.ng/'},
    {image: bloombysom, title: 'BloomBySom', description:'BloomBySom is an e-commerce website which focuses on floral inspired outfits for women optimized for conversion, It has a simple layout, shop page, categories, cart and one-page checkout, It was built using wordpress', link: 'https://bloombysom.kesug.com/?i=1'},
    {image: ticketgenerator, title: 'Ticket Generator', description: 'This is a web applications built with the intention of making ticket sales for events, shows, e.t.c. tickets are downloadable as proof of payment.', link: 'https://ticket-generator-sm6u.vercel.app/'},
    {image: goodtech, title: 'GoodTech', description: 'This was a website creating for a tech company which specializes in building AI driven products. The website was created to showcase those products and make the accessable to online users.', link: 'https://good-tech.vercel.app/'},
  
]
const Projects = () => {
  return (
    <motion.div id="projects" variants= {projectVariants} initial = 'init' whileInView='final' viewport={{once: true}} className='text-center my-6'>
        <motion.h2 className='text-2xl font-semibold my-4'>Projects</motion.h2>
        <motion.p>Below are some of the projects i have worked on in the past.</motion.p>

        <motion.div className='grid grid-cols-3 gap-6'>
            {projects.map(project =>(
            <Project key={project.title} {...project}/>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Projects  