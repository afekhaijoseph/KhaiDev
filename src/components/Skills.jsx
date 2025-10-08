import css from '../assets/images/css.png'
import react from '../assets/images/react.png'
import tailwind from '../assets/images/tailwind.png'
import javascript from '../assets/images/js.png'
import git from '../assets/images/git.png'
import framer from '../assets/images/framer-motion.svg'
import next from '../assets/images/next.png'
import typescript from '../assets/images/typescript.png'
import wordpress from '../assets/images/wordpress.png'
import { motion, animate, useMotionValue } from 'framer-motion'
import '../../src/index.css'
import useMeasure from 'react-use-measure'
import { useEffect } from 'react'

const images = [
   {
    name: "CSS",
    image: css,
    alt: "Css logo"

   },
    {
    name: "TAILWIND",
    image: tailwind,
    alt: "Tailwind logo"

   },
  {
    name: "JAVASCRIPT",
    image: javascript,
    alt: "Javascript logo"
   },
    {
    name: "REACT",
    image: react,
    alt: "React logo"
   },
    {
    name: "GIT",
    image: git,
    alt: "git logo"
   },
    {
    name: "FRAMER",
    image: framer,
    alt: "framer motion logo"
   },
    {
    name: "NEXT JS",
    image: next,
    alt: "next js logo"
   },
    {
    name: "TYPESCRIPT",
    image: typescript,
    alt: "Typescript logo"
   },
    {
    name: "WORDPRESS",
    image: wordpress,
    alt: "wordpress logo"
   }]
const Skills = () => {
  let [ref, {width}] = useMeasure()
  const xTranslation = useMotionValue(0)
  useEffect(()=>{
    let controls;
    let finalPosition = -width/2 - 8;
    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    })
    return controls.stop;
  }, [width, xTranslation])
  return (
    <div id="skills" className='py-10 text-center mt-36'>
        <h2 className='text-2xl font-semibold my-3'>Skills</h2>
        <p>These are the tools i use using in constructing your website and web applications on the internet.</p>
        <div className="flex items-center overflow-hidden my-3 w-full ">
        <motion.div className="flex items-center my-3 gap-4 px-3" ref={ref} style={{x:xTranslation}}>
          {[...images,...images].map((image, index) => (
            <div  key={index} className='bg-background shadow-2xl shadow-black/60 w-full px-4 py-2 rounded-lg flex flex-col items-center flex-1 min-w-0'>
               <img src={image.image} className="max-w-20 md:max-w-26" alt={image.alt} />
               <p>{image.name}</p>
            </div>
          ))} 
        </motion.div>
        </div>
    </div>
  )
}

export default Skills