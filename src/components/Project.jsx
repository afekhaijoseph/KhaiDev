const Project = (project) => {
  return (
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
)
}

export default Project