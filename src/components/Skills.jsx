import css from '../assets/images/css.png'
import react from '../assets/images/react.png'
import tailwind from '../assets/images/tailwind.png'
import javascript from '../assets/images/js.png'
import git from '../assets/images/git.png'
import '../../src/index.css'


const Skills = () => {
  return (
    <div className='py-6 text-center'>
        <h2 className='text-2xl font-semibold my-3'>Work tools</h2>
        <p>These are the tools i use using in constructing your website and web applications on the internet.</p>
        <div className="flex items-center overflow-hidden my-3 group">
        <div className="flex items-center my-3 gap-3 animate-infinite-scroll group-hover:paused">
            <img src={react} className="max-w-20" alt="" />
            <img src={javascript} className="max-w-20" alt="" />
            <img src={tailwind} className="max-w-20" alt="" />
            <img src={css} className="max-w-20" alt="" />
            <img src={git} className="max-w-20"alt="" />
        </div>
        <div className="flex items-center animate-infinite-scroll group-hover:paused" aria-hidden="true">
            <img src={react} className="max-w-20" alt="" />
            <img src={javascript} className="max-w-20" alt="" />
            <img src={tailwind} className="max-w-20" alt="" />
            <img src={css} className="max-w-20" alt="" />
            <img src={git} className="max-w-20"alt="" />
        </div>
        </div>
    </div>
  )
}

export default Skills