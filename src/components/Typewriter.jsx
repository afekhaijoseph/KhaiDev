import {motion } from "framer-motion";


export const Typewriter = ({ text }) => (
  <motion.p className="inline-block"
  >
    {text.split("").map((char, i) => (
      <motion.span key={`${char}-${i}`} className="relative">
        <motion.span initial = {{opacity:0}} whileInView = {{opacity: 1}} transition={{ delay: i * 0.025, duration: 0.125, ease: 'easeInOut'}} viewport={{once: true}}>{char}</motion.span>
        <motion.span initial = {{opacity:0}} whileInView = {{opacity: [0, 1, 0]}} transition={{ times: [0, 0.1, 1], delay: i * 0.025, duration: 0.125, ease: 'easeInOut'}}  viewport={{once: true}} className = "absolute bg-white w-[1ch] h-full right-0 top-0 left-0 mx-[2px]"/>
      </motion.span>
    ))}
  </motion.p>
);

export default Typewriter