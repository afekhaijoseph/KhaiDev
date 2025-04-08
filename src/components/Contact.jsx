import {motion} from 'framer-motion'

const contactVariants  = {
  init : {
    y: 100,
    opacity: 0,
  },
  final : {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      type: 'tween',
    }
  }
}




const Contact = () => {
  return (
    <div className="text-center text-gray-100 py-3 md:max-w-lg md:mx-auto">
        <motion.h2 variants={contactVariants} initial= 'init' whileInView = 'final' className="font-semibold text-2xl py-2">Message me, Let's work together!🚀</motion.h2>
        <form action="" className="flex flex-col gap-2 py-2">
            <label htmlFor="name"></label>
            <motion.input variants={contactVariants} initial= 'init' whileInView = 'final' className="bg-gray-700 w-11/12  mx-auto border border-gray-100 rounded-md p-1.5" type="text" name="name" placeholder="Full Name" />
            <label htmlFor="email"></label>
            <motion.input variants={contactVariants} initial= 'init' whileInView = 'final'className="bg-gray-700 w-11/12  mx-auto border border-gray-100 rounded-md p-1.5" type="email" name="email" placeholder="Email address" />
            <label htmlFor="subject"></label>
            <motion.input variants={contactVariants} initial= 'init' whileInView = 'final'className="bg-gray-700 w-11/12  mx-auto border border-gray-100 rounded-md p-1.5" type="text" name="subject" placeholder="Subject" />
            <label htmlFor="message"></label>
            <motion.textarea variants={contactVariants} initial= 'init' whileInView = 'final' className="bg-gray-700 w-11/12  mx-auto border border-gray-100 rounded-md p-1.5" placeholder="How can i be of service?" name="message" rows="4" cols="50"></motion.textarea>
            <motion.button className="text-pritext bg-accent w-fit px-2 py-1 rounded-md mx-auto mt-1 ">Submit</motion.button>
        </form>
    </div>
  )
}

export default Contact